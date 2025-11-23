import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CitySchema from "@/components/CitySchema";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Truck, CheckCircle } from "lucide-react";

const Bristol = () => {
  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep Bristol TN/VA | SmashMeals Delivery</title>
        <meta name="description" content="Bristol's choice for gluten-free meal prep. Serving both Bristol TN & VA with fresh, chef-prepared meals. Free delivery, order by Thursday." />
        <meta name="keywords" content="meal prep Bristol, gluten free Bristol TN, gluten free Bristol VA, healthy meal delivery Bristol" />
        <link rel="canonical" href="https://smashmeals.com/bristol" />
      </Helmet>

      <CitySchema cityName="Bristol" state="Tennessee" stateAbbr="TN" />

      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Serving Bristol, TN & VA</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Bristol's Trusted<br />Gluten-Free Meal Prep
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Serving both sides of State Street! Fresh, macro-counted meals with $12 home delivery to Bristol Tennessee and Virginia.
              </p>
              <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="text-lg">
                  View This Week's Menu
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              How It Works in Bristol
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Order by Thursday</h3>
                <p className="text-muted-foreground">Browse our weekly menu online and order by Thursday 11:59 PM</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">We Cook Friday</h3>
                <p className="text-muted-foreground">All meals freshly prepared in our local kitchen on Friday</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Pickup/Delivery</h3>
                <p className="text-muted-foreground">$12 home delivery to Bristol TN & VA or pickup Sunday-Monday</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Bristol Service Area */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              Bristol Pickup & Delivery
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <MapPin className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Pickup Location</h3>
                <p className="text-lg mb-2 font-semibold">SmashMeals Tri-Cities</p>
                <p className="text-muted-foreground mb-4">
                  2104 Knob Creek Rd<br />
                  Johnson City, TN 37604
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Pickup Hours:</strong><br />
                  Sunday: 5:00 PM - 7:00 PM<br />
                  Monday: 5:00 PM - 7:00 PM
                </p>
              </Card>

              <Card className="p-8">
                <Truck className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Bristol Home Delivery - $12</h3>
                <p className="text-muted-foreground mb-4">
                  Home delivery throughout Bristol including:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Bristol, TN (37620)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Bristol, VA (24201, 24202)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Blountville
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Bluff City
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <strong>10% off orders over $130</strong>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              Why Bristol Loves SmashMeals
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "100% Gluten-Free", desc: "Safe for celiac & gluten-sensitive" },
                { title: "Macro-Counted", desc: "Nutrition info on every meal" },
                { title: "Weekly Menu", desc: "Fresh options every Monday" },
                { title: "Both States", desc: "Serving TN & VA sides" }
              ].map((benefit) => (
                <Card key={benefit.title} className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Ready to Eat Healthier in Bristol?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join Bristol residents on both sides of State Street eating better with SmashMeals
            </p>
            <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="text-lg">
                Order Now for This Week
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Bristol;
