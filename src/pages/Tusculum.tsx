import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Truck, CheckCircle } from "lucide-react";

const Tusculum = () => {
  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep Tusculum TN | SmashMeals</title>
        <meta name="description" content="Fresh gluten-free meal prep delivered to Tusculum, TN. Chef-prepared meals with FREE local delivery. Perfect for Tusculum University students and families." />
        <meta name="keywords" content="meal prep Tusculum TN, gluten free Tusculum Tennessee, Tusculum University meals, healthy meals Tusculum" />
        <link rel="canonical" href="https://smashmeals.com/tusculum" />
      </Helmet>

      <Header />

      <main className="min-h-screen">
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Serving Tusculum, TN</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Tusculum's<br />Gluten-Free Meal Prep
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Fresh, chef-prepared meals delivered FREE to Tusculum. Perfect for students, athletes, and families.
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
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <Clock className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Order Thursday</h3>
                <p className="text-muted-foreground">Order online</p>
              </Card>
              <Card className="p-6 text-center">
                <Truck className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Fresh Prep</h3>
                <p className="text-muted-foreground">Made Friday</p>
              </Card>
              <Card className="p-6 text-center">
                <MapPin className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">FREE Delivery</h3>
                <p className="text-muted-foreground">To Tusculum</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              Tusculum Pickup & Delivery
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border-primary/20">
                <MapPin className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Pickup at CrossFit Arcane</h3>
                <p className="text-muted-foreground mb-4">
                  Convenient pickup near Tusculum University<br />
                  <span className="text-sm text-primary">Great for students & athletes!</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Pickup Times:</strong><br />
                  Sunday: 5:00 PM - 7:00 PM<br />
                  Monday: 5:00 PM - 7:00 PM
                </p>
              </Card>

              <Card className="p-8">
                <Truck className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">FREE Local Delivery</h3>
                <p className="text-muted-foreground mb-4">
                  We deliver throughout Tusculum:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Tusculum University campus
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Downtown Tusculum
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    All Tusculum addresses
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Perfect for Tusculum Life
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              FREE delivery for students, athletes, and locals
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

export default Tusculum;
