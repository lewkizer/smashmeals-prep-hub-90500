import { MapPin, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const PickupLocations = () => {
  const locations = [
    {
      name: "SmashMeals Kitchen",
      address: "1917 Meadowview Pkwy, Suite 100, Kingsport, TN",
      time: "Sunday 2:00–3:00 PM",
      mapUrl: "https://maps.google.com/?q=1917+Meadowview+Pkwy+Suite+100+Kingsport+TN+37660",
    },
    {
      name: "Bristol Pinnacle",
      address: "Between Dick's Sporting Goods and Tesla Charging",
      time: "Sunday 2:00 PM",
      mapUrl: "https://www.google.com/maps/search/Bristol+Pinnacle+Tesla+Charging+Bristol+TN",
    },
    {
      name: "Collart Chiropractic",
      address: "Johnson City, TN",
      time: "Sunday 4:00–4:15 PM",
      mapUrl: "https://www.collartchiro.com/",
    },
    {
      name: "Misfits fitness Drop-off Fridge",
      address: "Johnson City, TN",
      time: "Sunday after 4:30 PM",
      mapUrl: "https://www.google.com/maps/search/Misfits+fitness+Johnson+City+TN",
    },
    {
      name: "Crossfit Arcane",
      address: "75 Tusculum Heights Dr, Tusculum, TN 37745",
      time: "Monday (Contact for time)",
      mapUrl: "https://www.google.com/maps/search/75+Tusculum+Heights+Dr+Tusculum+TN+37745",
    },
    {
      name: "Olson's Martial Arts",
      address: "Under ECU sign, Johnson City, TN",
      time: "Monday 5:00 PM",
      mapUrl: "https://olsonsma.com/",
    },
    {
      name: "Build power grind",
      address: "Johnson City, TN",
      time: "Monday 6:00 PM",
      mapUrl: "https://www.google.com/maps/search/Build+power+grind+Johnson+City+TN",
    },
    {
      name: "Center of Strength",
      address: "Bulls Gap, TN",
      time: "Monday 9:00–10:00 AM & 4:30–6:30 PM",
      mapUrl: "https://www.cosfit22.com/",
    },
  ];

  return (
    <section id="locations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">Pickup & Delivery</h2>
          <p className="text-xl font-inter text-muted-foreground max-w-2xl mx-auto">
            Choose from convenient pickup locations across the Tri-Cities or get delivery right to your door.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
          {locations.map((location, index) => (
            <Card key={index} className="p-6 hover:shadow-soft transition-all duration-300 border-0 bg-white/60 dark:bg-card/60 backdrop-blur-sm">
              <div className="flex items-start space-x-3 mb-4">
                <a 
                  href={location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/20 hover:bg-primary/30 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:scale-110 group"
                  title="Open in Maps"
                >
                  <MapPin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                </a>
                <div>
                  <h3 className="font-bold font-playfair text-lg">{location.name}</h3>
                  <p className="text-sm font-inter text-muted-foreground">{location.address}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span className="font-inter">{location.time}</span>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 max-w-4xl mx-auto text-center">
          <p className="text-foreground font-medium">
            <span className="text-primary font-bold">Delivery available</span> across the Tri-Cities area.{" "}
            <span className="text-primary font-bold">Shipping now available nationwide</span> with insulated packaging.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PickupLocations;
