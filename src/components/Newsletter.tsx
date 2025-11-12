import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MessageSquare } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const newsletterSchema = z.object({
  email: z.string()
    .trim()
    .email({ message: "Please enter a valid email" })
    .max(255, { message: "Email too long" }),
  phone: z.string()
    .trim()
    .max(20, { message: "Phone number too long" })
    .regex(/^[+]?[0-9\s.()-]*$/, { message: "Invalid phone number format" })
    .optional()
    .or(z.literal(''))
});

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = newsletterSchema.safeParse({ email, phone });
    if (!result.success) {
      toast({
        title: "Invalid input",
        description: result.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const validData = result.data;
      // Insert into database
      const { error: dbError } = await supabase
        .from("newsletter_subscribers")
        .insert({ email: validData.email, phone: validData.phone || null });

      if (dbError) {
        if (dbError.code === "23505") {
          toast({
            title: "Already subscribed",
            description: "This email is already on our list!",
          });
        } else {
          throw dbError;
        }
        return;
      }

      // Send notification emails
      const { error: emailError } = await supabase.functions.invoke(
        "notify-newsletter-signup",
        {
          body: { email: validData.email, phone: validData.phone },
        }
      );

      if (emailError) {
        console.error("Email notification error:", emailError);
      }

      toast({
        title: "Success!",
        description: "You're subscribed! Check your email for confirmation.",
      });

      setEmail("");
      setPhone("");
    } catch (error: any) {
      console.error("Subscription error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get Our Weekly Menu</h2>
          <p className="text-xl text-muted-foreground mb-2">
            Delivered every Monday at 9 AM. Be the first to see what's cooking!
          </p>
          <p className="text-lg text-primary font-semibold mb-8">
            Plus, get exclusive promo codes and special offers!
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="tel"
                  placeholder="Enter your phone (optional)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
            </div>
            <Button 
              type="submit" 
              variant="hero" 
              size="lg" 
              className="w-full md:w-auto px-12"
              disabled={isLoading}
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>

          <p className="text-sm text-muted-foreground mt-6">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
