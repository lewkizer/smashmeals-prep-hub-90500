import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CitySchema from "@/components/CitySchema";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Truck, CheckCircle } from "lucide-react";

const Morristown = () => {
  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep Morristown TN | SmashMeals Delivery</title>
        <meta name="description" content="Fresh gluten-free meal prep delivered to Morristown, TN. Chef-prepared, macro-counted meals shipped or delivered locally. Order by Thursday." />
        <meta name="keywords" content="meal prep Morristown TN, gluten free Morristown Tennessee, healthy meal delivery Morristown" />
        <link rel="canonical" href="https://smashmeals.com/morristown" />
      </Helmet>

      <CitySchema cityName="Morristown" state="Tennessee" stateAbbr="TN" />

      <Header />

      <main className="min-h-screen">
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Serving Morristown, TN</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Morristown's<br />Gluten-Free Meal Prep
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Fresh, chef-prepared meals delivered to Morristown. 100% gluten-free with full macro tracking.
              </p>
              <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="text-lg">
                  View This Week's Menu
                </Button>
              </a>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              How It Works in Morristown
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <Clock className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Order by Thursday</h3>
                <p className="text-muted-foreground">Browse and order online</p>
              </Card>
              <Card className="p-6 text-center">
                <Truck className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Fresh Prep Friday</h3>
                <p className="text-muted-foreground">Made fresh in East Tennessee</p>
              </Card>
              <Card className="p-6 text-center">
                <MapPin className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Delivery Options</h3>
                <p className="text-muted-foreground">Local delivery or shipping</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              Morristown Pickup & Delivery Options
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <MapPin className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Drive to Pickup</h3>
                <p className="text-lg mb-2 font-semibold">Bulls Gap Location</p>
                <p className="text-muted-foreground mb-4">
                  Just a short drive from Morristown!<br />
                  <span className="text-sm">Perfect for your weekly meal pickup</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Pickup Hours:</strong><br />
                  Sunday: 5:00 PM - 7:00 PM<br />
                  Monday: 5:00 PM - 7:00 PM
                </p>
              </Card>

              <Card className="p-8">
                <Truck className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Shipping to Morristown - $25</h3>
                <p className="text-muted-foreground mb-4">
                  We ship throughout Morristown:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Downtown Morristown
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    West Hills area
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    All Morristown zip codes
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

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Start Eating Healthier in Morristown
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join Morristown residents simplifying their nutrition
            </p>
            <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="text-lg">
                Order Now
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Morristown;
