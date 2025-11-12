import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Truck, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import coverageMap from "@/assets/fedex-coverage-map.webp";
import homeDeliveryMap from "@/assets/home-delivery-map.jpg";

const DeliveryInfo = () => {
  const locations = [
    {
      name: "Johnson City - Main Location",
      address: "3211 Peoples St, Johnson City, TN 37604",
      time: "Sunday 12-4 PM, Monday 8-11 AM",
      mapUrl: "https://maps.google.com/?q=3211+Peoples+St+Johnson+City+TN+37604"
    },
    {
      name: "Kingsport - Colonial Heights",
      address: "2136 Fort Henry Dr, Kingsport, TN 37664",
      time: "Sunday 12-4 PM, Monday 8-11 AM",
      mapUrl: "https://maps.google.com/?q=2136+Fort+Henry+Dr+Kingsport+TN+37664"
    },
    {
      name: "Bristol - State Street",
      address: "900 State St, Bristol, TN 37620",
      time: "Sunday 12-4 PM, Monday 8-11 AM",
      mapUrl: "https://maps.google.com/?q=900+State+St+Bristol+TN+37620"
    },
    {
      name: "Greeneville",
      address: "3810 E Andrew Johnson Hwy, Greeneville, TN 37745",
      time: "Sunday 12-4 PM, Monday 8-11 AM",
      mapUrl: "https://maps.google.com/?q=3810+E+Andrew+Johnson+Hwy+Greeneville+TN+37745"
    },
    {
      name: "Elizabethton",
      address: "1500 W Elk Ave, Elizabethton, TN 37643",
      time: "Sunday 12-4 PM, Monday 8-11 AM",
      mapUrl: "https://maps.google.com/?q=1500+W+Elk+Ave+Elizabethton+TN+37643"
    },
    {
      name: "Jonesborough",
      address: "120 Marketplace Blvd, Jonesborough, TN 37659",
      time: "Sunday 12-4 PM, Monday 8-11 AM",
      mapUrl: "https://maps.google.com/?q=120+Marketplace+Blvd+Jonesborough+TN+37659"
    }
  ];

  const homeDeliveryZips = [
    "37604", "37601", "37615", "37617", "37664", "37660", "37620", "37659", "37643", "37745",
    "37801", "37877", "37871", "37650", "37658", "37656", "37690", "37681", "37692", "37642",
    "37857", "37699", "37821", "37752", "37872", "37687", "37729", "37825", "37880", "37874"
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Pickup, Delivery & Shipping Information | SmashMeals</title>
        <meta name="description" content="Choose from convenient pickup locations, $12 home delivery, or $25 FedEx 2-day shipping to our coverage area." />
      </Helmet>
      
      <Header />
      
      <main className="pt-32 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 py-16 px-4">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-6">
              Get Your Meals Your Way
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from convenient pickup locations, home delivery, or shipping to our coverage area
            </p>
          </div>
        </section>

        {/* Pickup Locations */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-4">
                Pickup Locations
              </h2>
              <p className="text-xl text-muted-foreground">
                Free pickup at any of our convenient locations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.map((location, index) => (
                <Card key={index} className="p-6 hover:shadow-elevated transition-shadow">
                  <h3 className="text-xl font-bold mb-4">{location.name}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <a 
                        href={location.mapUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {location.address}
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground">{location.time}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Home Delivery Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-6 py-3 mb-6">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span className="text-blue-500 font-bold">$12 Home Delivery</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-4">
                Home Delivery Zip Codes
              </h2>
              <p className="text-xl text-muted-foreground mb-4">
                Sunday-Monday delivery window
              </p>
              <p className="text-lg text-primary font-bold">
                10% off orders over $130
              </p>
            </div>

            <Card className="overflow-hidden">
              <img 
                src={homeDeliveryMap} 
                alt="Home delivery coverage map showing $12 delivery zones in the Tri-Cities area"
                className="w-full h-auto"
              />
            </Card>
            
            <div className="mt-6 text-center">
              <p className="text-muted-foreground">
                Covering Johnson City, Kingsport, Bristol, Greeneville, Elizabethton, and surrounding areas
              </p>
            </div>
          </div>
        </section>

        {/* Shipping Coverage Map */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 rounded-full px-6 py-3 mb-6">
                <Truck className="w-5 h-5 text-pink-500" />
                <span className="text-pink-500 font-bold">$25 FedEx 2-Day Shipping</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-4">
                Regional Shipping Coverage
              </h2>
              <p className="text-xl text-muted-foreground mb-4">
                Insulated shipping to select regions. Meals arrive frozen for freshness.
              </p>
              <p className="text-lg text-primary font-bold">
                10% off orders over $130
              </p>
            </div>

            <Card className="overflow-hidden">
              <img 
                src={coverageMap} 
                alt="FedEx 2-day shipping coverage map showing delivery zones"
                className="w-full h-auto"
              />
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DeliveryInfo;
