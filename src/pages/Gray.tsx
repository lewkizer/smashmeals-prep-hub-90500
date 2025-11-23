import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CitySchema from "@/components/CitySchema";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Truck, CheckCircle } from "lucide-react";

const Gray = () => {
  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep Gray TN | SmashMeals Free Delivery</title>
        <meta name="description" content="Fresh gluten-free meal prep delivered FREE to Gray, TN. Chef-prepared meals with pickup at SmashMeals Johnson City location. Order by Thursday." />
        <meta name="keywords" content="meal prep Gray TN, gluten free Gray Tennessee, healthy meals Gray, prepared meals Gray TN" />
        <link rel="canonical" href="https://smashmeals.com/gray" />
      </Helmet>

      <CitySchema cityName="Gray" state="Tennessee" stateAbbr="TN" />

      <Header />

      <main className="min-h-screen">
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Serving Gray, TN</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Gray's Local<br />Gluten-Free Meal Prep
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Your neighbor for healthy eating. Fresh, chef-prepared meals with $12 home delivery to Gray.
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
              How It Works in Gray
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Order by Thursday</h3>
                <p className="text-muted-foreground">Browse and order online by Thursday 11:59 PM</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Fresh Prep Friday</h3>
                <p className="text-muted-foreground">Cooked fresh in our local Tri-Cities kitchen</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Home Delivery</h3>
                <p className="text-muted-foreground">$12 to your Gray home Sunday-Monday</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              Your Closest Pickup & Delivery Options
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <MapPin className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Pickup Location</h3>
                <p className="text-lg mb-2 font-semibold">SmashMeals Tri-Cities</p>
                <p className="text-muted-foreground mb-4">
                  2104 Knob Creek Rd<br />
                  Johnson City, TN 37604<br />
                  <span className="text-sm">(Just minutes from Gray!)</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Pickup Hours:</strong><br />
                  Sunday: 5:00 PM - 7:00 PM<br />
                  Monday: 5:00 PM - 7:00 PM
                </p>
              </Card>

              <Card className="p-8">
                <Truck className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Home Delivery - $12</h3>
                <p className="text-muted-foreground mb-4">
                  We deliver to all Gray addresses Sunday-Monday including:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Gray Station Road area
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Boones Creek
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    All Gray zip codes
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
              Join Your Gray Neighbors
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Eating healthier has never been easier • $12 delivery • 10% off orders over $130
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

export default Gray;
