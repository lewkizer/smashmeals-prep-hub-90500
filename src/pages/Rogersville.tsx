import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Truck, CheckCircle } from "lucide-react";

const Rogersville = () => {
  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep Rogersville TN | SmashMeals</title>
        <meta name="description" content="Fresh gluten-free meal prep delivered to Rogersville, TN. Chef-prepared, macro-counted meals with FREE local delivery." />
        <meta name="keywords" content="meal prep Rogersville TN, gluten free Rogersville Tennessee, healthy meals Rogersville" />
        <link rel="canonical" href="https://smashmeals.com/rogersville" />
      </Helmet>

      <Header />

      <main className="min-h-screen">
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Serving Rogersville, TN</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Rogersville's<br />Gluten-Free Meal Prep
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Fresh, chef-prepared meals delivered FREE to Rogersville and surrounding areas.
              </p>
              <a href="https://smashmeals.bottle.com/b/9730175" target="_blank" rel="noopener noreferrer">
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
              How It Works in Rogersville
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <Clock className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Order by Thursday</h3>
                <p className="text-muted-foreground">Place your order online</p>
              </Card>
              <Card className="p-6 text-center">
                <Truck className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Fresh Prep Friday</h3>
                <p className="text-muted-foreground">Made fresh locally</p>
              </Card>
              <Card className="p-6 text-center">
                <MapPin className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">FREE Delivery</h3>
                <p className="text-muted-foreground">To Rogersville</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <Card className="p-8 max-w-2xl mx-auto">
              <Truck className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">FREE Rogersville Delivery</h3>
              <p className="text-muted-foreground mb-4">
                We deliver throughout Rogersville and nearby areas:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Downtown Rogersville
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Church Hill
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Surgoinsville area
                </li>
              </ul>
            </Card>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Join Rogersville's Healthy Eaters
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              FREE delivery makes meal prep effortless
            </p>
            <a href="https://smashmeals.bottle.com/b/9730175" target="_blank" rel="noopener noreferrer">
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

export default Rogersville;
