import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Package, Truck } from "lucide-react";

const Newport = () => {
  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep Newport TN | SmashMeals Shipping</title>
        <meta name="description" content="Fresh gluten-free meal prep shipped to Newport, TN. Chef-prepared, macro-counted meals delivered to your door. Order by Thursday." />
        <meta name="keywords" content="meal prep Newport TN, gluten free Newport Tennessee, healthy meal delivery Newport" />
        <link rel="canonical" href="https://smashmeals.com/newport" />
      </Helmet>

      <Header />

      <main className="min-h-screen">
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Serving Newport, TN</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Newport's<br />Gluten-Free Meal Prep
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Fresh, chef-prepared meals delivered to Newport. 100% gluten-free with complete nutrition tracking.
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
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <Clock className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Order by Thursday</h3>
                <p className="text-muted-foreground">Browse and order online</p>
              </Card>
              <Card className="p-6 text-center">
                <Package className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">We Cook & Ship</h3>
                <p className="text-muted-foreground">Fresh prep Friday, shipped with ice</p>
              </Card>
              <Card className="p-6 text-center">
                <Truck className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Delivered Fresh</h3>
                <p className="text-muted-foreground">Arrives at your door</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Start Eating Healthier in Newport
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Free shipping on orders over $130!
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

export default Newport;
