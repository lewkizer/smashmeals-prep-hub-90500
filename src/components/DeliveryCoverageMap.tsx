import { MapPin, Truck } from "lucide-react";
import coverageMap from "@/assets/fedex-coverage-map.webp";

const DeliveryCoverageMap = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-4">
            Delivery Coverage Area
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See if we deliver to your area
          </p>
        </div>

        <div className="bg-card rounded-lg shadow-elevated overflow-hidden">
          <img 
            src={coverageMap} 
            alt="SmashMeals delivery coverage map showing home delivery and shipping zones"
            className="w-full h-auto"
          />
          
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex items-start gap-4 p-6 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <MapPin className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Home Delivery - $12</h3>
                  <p className="text-muted-foreground">
                    Blue zone: Fresh meal delivery to your door every week. Sunday-Monday delivery window.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    <strong>10% off orders over $130</strong>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-pink-500/10 rounded-lg border border-pink-500/20">
                <Truck className="w-8 h-8 text-pink-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">FedEx Shipping - $25</h3>
                  <p className="text-muted-foreground">
                    Pink zone: Insulated 2-day shipping to select regions. Meals arrive frozen for freshness.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    <strong>10% off orders over $130</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryCoverageMap;
