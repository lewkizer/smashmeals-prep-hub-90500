import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Truck, CheckCircle } from "lucide-react";

const Elizabethton = () => {
  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep Elizabethton TN | SmashMeals Delivery</title>
        <meta name="description" content="Elizabethton's choice for gluten-free meal prep. Fresh, chef-prepared meals with free local delivery. Order by Thursday for Sunday pickup." />
        <meta name="keywords" content="meal prep Elizabethton, gluten free Elizabethton TN, healthy meal delivery Elizabethton, prepared meals Elizabethton Tennessee" />
        <link rel="canonical" href="https://smashmeals.com/elizabethton" />
      </Helmet>

      <Header />

      <main className="min-h-screen">
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Serving Elizabethton, TN</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Elizabethton's<br />Gluten-Free Meal Prep
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Fresh, locally-prepared meals delivered to Elizabethton. 100% gluten-free with complete nutrition info.
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
              How It Works in Elizabethton
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Order by Thursday</h3>
                <p className="text-muted-foreground">Order online by Thursday 11:59 PM</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Fresh Prep</h3>
                <p className="text-muted-foreground">Cooked fresh in our Tri-Cities kitchen Friday</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Free Delivery</h3>
                <p className="text-muted-foreground">Delivered to Elizabethton Sunday-Monday</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <Card className="p-8 max-w-2xl mx-auto">
              <Truck className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Free Elizabethton Delivery</h3>
              <p className="text-muted-foreground mb-4">We deliver throughout Elizabethton including:</p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Downtown Elizabethton
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Hunter
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Gap Creek
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Roan Mountain area
                </li>
              </ul>
            </Card>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Join Elizabethton's Healthy Eaters
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Start your meal prep journey with SmashMeals today
            </p>
            <a href="https://smashmeals.bottle.com/b/9730175" target="_blank" rel="noopener noreferrer">
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

export default Elizabethton;
