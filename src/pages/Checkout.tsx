import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { supabase } from "@/integrations/supabase/client";
import { useCustomer } from "@/hooks/useCustomer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const checkoutSchema = z.object({
  deliveryMethod: z.enum(['pickup', 'delivery']),
  pickupLocation: z.string()
    .trim()
    .min(1, { message: "Please select a pickup location" })
    .max(200, { message: "Location name too long" })
    .optional(),
  notes: z.string()
    .trim()
    .max(500, { message: "Notes must be less than 500 characters" })
    .optional()
    .or(z.literal('')),
  creditToUse: z.number()
    .min(0, { message: "Credit amount cannot be negative" })
    .max(999999, { message: "Invalid credit amount" })
    .optional()
});

const Checkout = () => {
  const { items, subtotal, clearCart } = useCart();
  const [session, setSession] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [deliveryMethod, setDeliveryMethod] = useState("pickup");
  const [pickupLocation, setPickupLocation] = useState("");
  const [notes, setNotes] = useState("");
  const [creditToUse, setCreditToUse] = useState(0);
  const navigate = useNavigate();
  
  const { data: customer } = useCustomer(session?.user?.id);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate("/customer-auth", { state: { from: { pathname: "/checkout" } } });
      }
      setSession(session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate("/customer-auth");
      }
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  useEffect(() => {
    if (items.length === 0) {
      navigate("/menu");
    }
  }, [items, navigate]);

  const maxCredit = customer?.account_credit ? Math.min(Number(customer.account_credit), subtotal) : 0;

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!customer) {
      toast.error("Customer profile not found");
      return;
    }

    // Validate pickup location is provided when needed
    if (deliveryMethod === "pickup" && !pickupLocation?.trim()) {
      toast.error("Please select a pickup location");
      return;
    }

    // Validate checkout data
    const result = checkoutSchema.safeParse({
      deliveryMethod,
      pickupLocation,
      notes,
      creditToUse: Number(creditToUse) || 0
    });

    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }

    setIsLoading(true);

    try {
      const validData = result.data;
      const orderNumber = `SM-${Date.now()}`;
      const creditApplied = Math.min(validData.creditToUse || 0, maxCredit);
      const total = subtotal - creditApplied;

      // Create order
      const { data: order, error: orderError } = await supabase
        .from("orders")
        .insert({
          customer_id: customer.id,
          order_number: orderNumber,
          status: "pending",
          subtotal: subtotal,
          credit_applied: creditApplied,
          total: total,
          delivery_method: validData.deliveryMethod,
          pickup_location: validData.deliveryMethod === "pickup" ? validData.pickupLocation : null,
          notes: validData.notes || null,
        })
        .select()
        .single();

      if (orderError) throw orderError;

      // Create order items
      const orderItems = items.map((item) => ({
        order_id: order.id,
        product_id: item.product.id,
        quantity: item.quantity,
        unit_price: Number(item.product.price),
        subtotal: Number(item.product.price) * item.quantity,
      }));

      const { error: itemsError } = await supabase
        .from("order_items")
        .insert(orderItems);

      if (itemsError) throw itemsError;

      // Apply credit atomically using database function with row-level locking
      if (creditApplied > 0) {
        const { data: creditSuccess, error: creditError } = await supabase
          .rpc("apply_customer_credit", {
            _customer_id: customer.id,
            _amount: creditApplied,
            _order_id: order.id,
          });

        if (creditError || !creditSuccess) {
          throw new Error(creditError?.message || "Insufficient credit or credit already applied");
        }
      }

      toast.success("Order placed successfully!");
      clearCart();
      navigate("/account");
    } catch (error: any) {
      console.error("Order error:", error);
      toast.error(error.message || "Failed to place order");
    } finally {
      setIsLoading(false);
    }
  };

  if (!customer) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-background pt-24 pb-12 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background pt-24 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-8">Checkout</h1>

          <form onSubmit={handlePlaceOrder} className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Delivery Method</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={deliveryMethod} onValueChange={setDeliveryMethod}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="pickup" id="pickup" />
                      <Label htmlFor="pickup">Pickup</Label>
                    </div>
                  </RadioGroup>
                  
                  {deliveryMethod === "pickup" && (
                    <div className="mt-4">
                      <Label htmlFor="location">Pickup Location</Label>
                      <Input
                        id="location"
                        value={pickupLocation}
                        onChange={(e) => setPickupLocation(e.target.value)}
                        placeholder="Select pickup location"
                        required
                      />
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Order Notes</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value.slice(0, 500))}
                    placeholder="Any special instructions?"
                    rows={4}
                    maxLength={500}
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    {notes.length}/500 characters
                  </p>
                </CardContent>
              </Card>

              {customer.account_credit && Number(customer.account_credit) > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Account Credit</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Available credit: ${Number(customer.account_credit).toFixed(2)}
                    </p>
                    <Label htmlFor="creditAmount">Use Credit (max ${maxCredit.toFixed(2)})</Label>
                    <Input
                      id="creditAmount"
                      type="number"
                      value={creditToUse}
                      onChange={(e) => setCreditToUse(Math.min(Number(e.target.value), maxCredit))}
                      min="0"
                      max={maxCredit}
                      step="0.01"
                    />
                  </CardContent>
                </Card>
              )}
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex justify-between text-sm">
                      <span>{item.product.name} × {item.quantity}</span>
                      <span>${(Number(item.product.price) * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                  
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    {creditToUse > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span>Credit Applied</span>
                        <span>-${creditToUse.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-xl font-bold">
                      <span>Total</span>
                      <span>${(subtotal - creditToUse).toFixed(2)}</span>
                    </div>
                  </div>

                  <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Place Order
                  </Button>
                </CardContent>
              </Card>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
