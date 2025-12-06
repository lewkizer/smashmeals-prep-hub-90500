import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CitySchema from "@/components/CitySchema";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Truck, CheckCircle, Leaf, Heart } from "lucide-react";

const Sneedville = () => {
  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep Sneedville TN | SmashMeals Delivery</title>
        <meta name="description" content="Fresh gluten-free meal prep delivered to Sneedville, TN in Hancock County. Chef-prepared, macro-counted meals shipped weekly. Order by Thursday for Sunday delivery." />
        <meta name="keywords" content="meal prep Sneedville TN, gluten free Sneedville Tennessee, healthy meal delivery Hancock County, meal prep delivery Sneedville" />
        <link rel="canonical" href="https://smashmeals.com/sneedville" />
      </Helmet>

      <CitySchema cityName="Sneedville" state="Tennessee" stateAbbr="TN" />

      <Header />

      <main className="min-h-screen">
        <section className="relative py-20 px-4 bg-gradient-to-b from-accent/10 via-background to-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Serving Sneedville & Hancock County, TN</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Sneedville's<br />Gluten-Free Meal Prep
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Fresh, chef-prepared meals delivered to Sneedville and Hancock County. 100% gluten-free with full macro tracking for your health goals.
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
              How It Works in Sneedville
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <Clock className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Order by Thursday</h3>
                <p className="text-muted-foreground">Browse our weekly menu and place your order online by Thursday midnight</p>
              </Card>
              <Card className="p-6 text-center">
                <Leaf className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Fresh Prep Friday</h3>
                <p className="text-muted-foreground">We prepare your meals fresh in our certified gluten-free kitchen</p>
              </Card>
              <Card className="p-6 text-center">
                <Truck className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Shipped to You</h3>
                <p className="text-muted-foreground">Meals arrive fresh at your door in Sneedville via FedEx</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              Sneedville Delivery Options
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <MapPin className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Nearby Pickup Options</h3>
                <p className="text-lg mb-2 font-semibold">Bulls Gap or Rogersville</p>
                <p className="text-muted-foreground mb-4">
                  Pick up your meals at one of our nearby locations for free!
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Pickup Hours:</strong><br />
                  Sunday: 5:00 PM - 7:00 PM<br />
                  Monday: 5:00 PM - 7:00 PM
                </p>
              </Card>

              <Card className="p-8">
                <Truck className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Shipping to Sneedville - $25</h3>
                <p className="text-muted-foreground mb-4">
                  We ship throughout Hancock County:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Downtown Sneedville
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    All Hancock County addresses
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Fresh delivery via FedEx
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

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              Why Sneedville Chooses SmashMeals
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <Leaf className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">100% Gluten-Free</h3>
                <p className="text-muted-foreground">Our entire kitchen is certified gluten-free—no cross-contamination risk</p>
              </Card>
              <Card className="p-6 text-center">
                <Heart className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Local & Fresh</h3>
                <p className="text-muted-foreground">Made fresh in East Tennessee, just a short distance from Hancock County</p>
              </Card>
              <Card className="p-6 text-center">
                <CheckCircle className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Macro-Counted</h3>
                <p className="text-muted-foreground">Every meal comes with full nutritional info for easy tracking</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Start Eating Healthier in Sneedville
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join Hancock County residents who trust SmashMeals for convenient, healthy, gluten-free nutrition
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

export default Sneedville;