import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Truck, CheckCircle } from "lucide-react";

const JohnsonCity = () => {
  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep Johnson City TN | SmashMeals Delivery</title>
        <meta name="description" content="Johnson City's #1 gluten-free meal prep delivery service. Chef-prepared, macro-counted meals delivered weekly. Order by Thursday, pickup Sunday-Monday." />
        <meta name="keywords" content="meal prep Johnson City, gluten free Johnson City TN, healthy meal delivery Johnson City, prepared meals Johnson City" />
        <link rel="canonical" href="https://smashmeals.com/johnson-city" />
      </Helmet>

      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Serving Johnson City, TN</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Johnson City's Premier<br />Gluten-Free Meal Prep
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Fresh, chef-prepared meals delivered weekly to Johnson City and surrounding areas. 100% gluten-free, macro-counted, and ready to eat.
              </p>
              <a href="https://smashmeals.bottle.com/b/9521039" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="text-lg">
                  View This Week's Menu
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* How It Works - Johnson City Specific */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              How It Works in Johnson City
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Order by Thursday</h3>
                <p className="text-muted-foreground">Browse our weekly menu and place your order online by Thursday at 11:59 PM</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">We Cook Friday</h3>
                <p className="text-muted-foreground">All meals are freshly prepared in our Kingsport kitchen on Friday</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Pickup/Delivery</h3>
                <p className="text-muted-foreground">Pick up in Johnson City or get free local delivery Sunday-Monday</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Johnson City Pickup Locations */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              Johnson City Pickup & Delivery
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
                <h3 className="text-2xl font-bold mb-4">Free Local Delivery</h3>
                <p className="text-muted-foreground mb-4">
                  Free delivery available throughout Johnson City and surrounding areas including:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Downtown Johnson City
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    ETSU Campus Area
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Boones Creek
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Gray
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
              Why Johnson City Chooses SmashMeals
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "100% Gluten-Free", desc: "Every single meal, no cross-contamination" },
                { title: "Macro-Counted", desc: "Calories, protein, carbs & fats listed" },
                { title: "Weekly Variety", desc: "New menu drops every Monday" },
                { title: "No Commitment", desc: "Order only when you need it" }
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
              Ready to Simplify Your Meal Prep?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join hundreds of Johnson City residents eating healthier with SmashMeals
            </p>
            <a href="https://smashmeals.bottle.com/b/9521039" target="_blank" rel="noopener noreferrer">
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

export default JohnsonCity;
