import { Button } from "@/components/ui/button";
import { Package, Truck, Snowflake } from "lucide-react";
import { Link } from "react-router-dom";
import fedexMap from "@/assets/fedex-coverage-map.webp";

const Shipping = () => {
  const features = [
    {
      icon: Package,
      title: "Insulated Packaging",
      description: "Meals arrive frozen with ice packs and insulation",
    },
    {
      icon: Truck,
      title: "FedEx 2-Day Shipping",
      description: "Fast, reliable delivery",
    },
    {
      icon: Snowflake,
      title: "Arrives Frozen",
      description: "Shipped meals arrive frozen for maximum freshness",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
            NEW
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Now Shipping Available!</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Can't make it to the Tri-Cities? We now ship our gluten-free meals anywhere FedEx can deliver in 2 days. <span className="font-bold text-foreground">Shipped meals arrive frozen</span> for maximum freshness.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-background rounded-lg p-6 shadow-md">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-background rounded-lg p-6 shadow-lg mb-8">
            <h3 className="font-bold text-xl mb-4">FedEx 2-Day Shipping Coverage Area</h3>
            <img 
              src={fedexMap} 
              alt="FedEx 2-Day Shipping Coverage Map showing delivery areas across the United States" 
              className="w-full rounded-lg"
            />
          </div>

          <Link to="/how-it-works">
            <Button variant="hero" size="lg">
              View Shipping Details
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Shipping;
