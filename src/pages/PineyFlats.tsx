import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Truck, CheckCircle } from "lucide-react";

const PineyFlats = () => {
  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep Piney Flats TN | SmashMeals Delivery</title>
        <meta name="description" content="Fresh gluten-free meal prep delivered to Piney Flats, TN. Chef-prepared, macro-counted meals with free local delivery. Order by Thursday." />
        <meta name="keywords" content="meal prep Piney Flats, gluten free Piney Flats TN, healthy meal delivery Piney Flats, prepared meals Piney Flats Tennessee" />
        <link rel="canonical" href="https://smashmeals.com/piney-flats" />
      </Helmet>

      <Header />

      <main className="min-h-screen">
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Serving Piney Flats, TN</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Piney Flats'<br />Gluten-Free Meal Solution
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Your local gluten-free meal prep service. Fresh, chef-prepared meals with $12 home delivery to Piney Flats.
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
                <p className="text-muted-foreground">Cooked fresh Friday</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Home Delivery</h3>
                <p className="text-muted-foreground">$12 to your Piney Flats home</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Ready to Simplify Your Meals?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join your Piney Flats neighbors • $12 delivery • 10% off orders over $130
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

export default PineyFlats;
