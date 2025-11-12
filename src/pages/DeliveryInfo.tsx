import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Truck, Clock, Search, CheckCircle2, Package } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import coverageMap from "@/assets/fedex-coverage-map.webp";
import homeDeliveryMap from "@/assets/home-delivery-map.webp";
import { useState } from "react";

const DeliveryInfo = () => {
  const [zipCode, setZipCode] = useState("");
  const [deliveryOption, setDeliveryOption] = useState<null | "home" | "shipping" | "pickup">(null);
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

  // FedEx shipping states (approximate coverage from the map)
  const shippingStates = ["TN", "VA", "NC", "SC", "GA", "KY", "WV", "MD", "DC"];

  const checkZipCode = () => {
    if (!zipCode || zipCode.length !== 5) return;
    
    if (homeDeliveryZips.includes(zipCode)) {
      setDeliveryOption("home");
    } else {
      // For simplicity, check if ZIP starts with state codes from shipping coverage
      const prefix = zipCode.substring(0, 3);
      // TN: 370-385, VA: 220-246, NC: 270-289, SC: 290-299, GA: 300-319, KY: 400-427, WV: 247-268, MD: 206-219
      const shippingPrefixes = [
        ...Array.from({ length: 16 }, (_, i) => (370 + i).toString()), // TN
        ...Array.from({ length: 27 }, (_, i) => (220 + i).toString()), // VA
        ...Array.from({ length: 20 }, (_, i) => (270 + i).toString()), // NC
        ...Array.from({ length: 10 }, (_, i) => (290 + i).toString()), // SC
        ...Array.from({ length: 20 }, (_, i) => (300 + i).toString()), // GA
        ...Array.from({ length: 28 }, (_, i) => (400 + i).toString()), // KY
        ...Array.from({ length: 22 }, (_, i) => (247 + i).toString()), // WV
        ...Array.from({ length: 14 }, (_, i) => (206 + i).toString()), // MD
        "200", "201", "202", "203", "204", "205" // DC
      ];
      
      if (shippingPrefixes.some(p => prefix.startsWith(p))) {
        setDeliveryOption("shipping");
      } else {
        setDeliveryOption("pickup");
      }
    }
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Pickup, Delivery & Shipping Information | SmashMeals</title>
        <meta name="description" content="Choose from convenient pickup locations, $12 home delivery, or $25 FedEx 2-day shipping to our coverage area." />
      </Helmet>
      
      <Header />
      
      <main className="pt-32 pb-16">
        {/* Hero Section with ZIP Checker */}
        <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-6">
              Get Your Meals Your Way
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              Enter your ZIP code to see your delivery options
            </p>

            {/* ZIP Code Checker */}
            <Card className="p-8 max-w-xl mx-auto shadow-elevated">
              <div className="flex gap-3 mb-6">
                <Input 
                  type="text"
                  placeholder="Enter ZIP code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value.replace(/\D/g, '').slice(0, 5))}
                  onKeyDown={(e) => e.key === 'Enter' && checkZipCode()}
                  className="text-lg"
                  maxLength={5}
                />
                <Button 
                  onClick={checkZipCode}
                  size="lg"
                  disabled={zipCode.length !== 5}
                >
                  <Search className="w-5 h-5 mr-2" />
                  Check
                </Button>
              </div>

              {deliveryOption && (
                <div className="space-y-4 animate-in fade-in-50 duration-300">
                  {deliveryOption === "home" && (
                    <div className="bg-blue-500/10 border-2 border-blue-500/30 rounded-lg p-6 text-left">
                      <div className="flex items-start gap-3 mb-4">
                        <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-xl font-bold text-blue-600 mb-2">Great news! You qualify for:</h3>
                          <div className="space-y-3">
                            <div className="flex items-center gap-2">
                              <MapPin className="w-5 h-5 text-blue-500" />
                              <span className="font-semibold">$12 Home Delivery</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Package className="w-5 h-5 text-primary" />
                              <span className="font-semibold">Free Pickup at Any Location</span>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mt-3">
                            10% off orders over $130 • Sunday-Monday delivery window
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {deliveryOption === "shipping" && (
                    <div className="bg-pink-500/10 border-2 border-pink-500/30 rounded-lg p-6 text-left">
                      <div className="flex items-start gap-3 mb-4">
                        <CheckCircle2 className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-xl font-bold text-pink-600 mb-2">You're in our shipping zone!</h3>
                          <div className="space-y-3">
                            <div className="flex items-center gap-2">
                              <Truck className="w-5 h-5 text-pink-500" />
                              <span className="font-semibold">$25 FedEx 2-Day Shipping</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Package className="w-5 h-5 text-primary" />
                              <span className="font-semibold">Free Pickup at Any Location</span>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mt-3">
                            10% off orders over $130 • Arrives frozen in insulated packaging
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {deliveryOption === "pickup" && (
                    <div className="bg-primary/10 border-2 border-primary/30 rounded-lg p-6 text-left">
                      <div className="flex items-start gap-3 mb-4">
                        <Package className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-xl font-bold text-primary mb-2">Pickup Available!</h3>
                          <div className="space-y-2">
                            <p className="font-semibold">Free Pickup at Any of Our 6 Locations</p>
                            <p className="text-sm text-muted-foreground">
                              Your ZIP code is outside our delivery and shipping zones, but you can pick up your order for free at any of our convenient locations!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </Card>
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

            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-6">Covered ZIP Codes</h3>
              <Card className="p-6">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-bold text-primary mb-3">Johnson City Area</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>37604, 37601, 37615, 37617</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-3">Kingsport Area</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>37664, 37660, 37650</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-3">Bristol Area</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>37620</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-3">Jonesborough Area</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>37659, 37687, 37729</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-3">Elizabethton Area</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>37643, 37642, 37658, 37656</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-3">Greeneville Area</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>37745, 37752</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-3">Morristown Area</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>37801, 37814, 37813</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-3">Other Covered Areas</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>37690, 37681, 37692, 37857</p>
                      <p>37699, 37821, 37825, 37872</p>
                      <p>37877, 37871, 37880, 37874</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <p className="text-center text-muted-foreground">
                    Don't see your ZIP code? <a href="mailto:lew@smashmeals.com" className="text-primary font-semibold hover:underline">Reach out to us</a> and we'll see what we can do!
                  </p>
                </div>
              </Card>
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
