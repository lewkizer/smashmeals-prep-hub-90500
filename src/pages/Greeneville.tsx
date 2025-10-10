import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Truck, CheckCircle } from "lucide-react";

const Greeneville = () => {
  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep Greeneville TN | SmashMeals Delivery</title>
        <meta name="description" content="Fresh gluten-free meal prep delivered to Greeneville, TN. Chef-prepared, macro-counted meals. Free local delivery, order by Thursday for Sunday pickup." />
        <meta name="keywords" content="meal prep Greeneville, gluten free Greeneville TN, healthy meal delivery Greeneville, prepared meals Greeneville Tennessee" />
        <link rel="canonical" href="https://smashmeals.com/greeneville" />
      </Helmet>

      <Header />

      <main className="min-h-screen">
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Serving Greeneville, TN</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Greeneville's Gluten-Free<br />Meal Prep Solution
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Fresh, chef-prepared meals delivered weekly to Greeneville. 100% gluten-free with full nutrition info on every meal.
              </p>
              <a href="https://smashmeals.bottle.com/b/9521039" target="_blank" rel="noopener noreferrer">
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
              How It Works in Greeneville
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Order by Thursday</h3>
                <p className="text-muted-foreground">Place your order online by Thursday 11:59 PM</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">We Cook Friday</h3>
                <p className="text-muted-foreground">Fresh preparation in our local kitchen</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Delivery/Pickup</h3>
                <p className="text-muted-foreground">Free Greeneville delivery or pickup Sunday-Monday</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              Greeneville Service Area
            </h2>
            <Card className="p-8 max-w-2xl mx-auto">
              <Truck className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Free Greeneville Delivery</h3>
              <p className="text-muted-foreground mb-4">
                We deliver throughout Greeneville including:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Downtown Greeneville
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Tusculum
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Chuckey
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Mosheim
                </li>
              </ul>
            </Card>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Start Eating Healthier Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join Greeneville residents simplifying their nutrition with SmashMeals
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

export default Greeneville;
