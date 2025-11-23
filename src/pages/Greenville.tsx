import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Truck, CheckCircle, Package, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Greenville = () => {
  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep Greenville SC | SmashMeals Delivery</title>
        <meta name="description" content="Healthy, gluten-free meal prep delivered in Greenville SC. High-protein meals for athletes, families, and busy professionals." />
        <meta name="keywords" content="Greenville meal prep, meal delivery Greenville SC, gluten-free meals Greenville" />
        <link rel="canonical" href="https://smashmeals.com/greenville" />
        <meta property="og:title" content="Gluten-Free Meal Prep Greenville SC | SmashMeals" />
        <meta property="og:description" content="Healthy, gluten-free meal prep delivered in Greenville SC. High-protein meals for athletes, families, and busy professionals." />
        <meta property="og:url" content="https://smashmeals.com/greenville" />
      </Helmet>

      <Header />

      <main className="min-h-screen">
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Now Shipping to Greenville, SC</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Greenville's Favorite<br />Gluten-Free Meal Delivery
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Healthy eating made simple — chef-prepared, high-protein meals delivered fresh to your Greenville home or gym.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="lg" className="text-lg">
                    View This Week's Menu
                  </Button>
                </a>
                <Link to="/">
                  <Button variant="outline" size="lg" className="text-lg">
                    Learn More About SmashMeals
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Smash Meals fuels Greenville's growing fitness community with chef-prepared, gluten-free meals built for energy, performance, and taste. From CrossFit athletes to busy parents, our rotating menu makes clean eating easy all week long.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              Why Greenville Trusts SmashMeals
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center">
                <CheckCircle className="w-10 h-10 text-primary mb-4 mx-auto" />
                <h3 className="text-2xl font-bold mb-4">High-Protein Meals</h3>
                <p className="text-muted-foreground">Perfect for your active routine and fitness goals</p>
              </Card>

              <Card className="p-8 text-center">
                <CheckCircle className="w-10 h-10 text-primary mb-4 mx-auto" />
                <h3 className="text-2xl font-bold mb-4">Local Delivery in 1 Day</h3>
                <p className="text-muted-foreground">Fast shipping from East Tennessee to Greenville</p>
              </Card>

              <Card className="p-8 text-center">
                <CheckCircle className="w-10 h-10 text-primary mb-4 mx-auto" />
                <h3 className="text-2xl font-bold mb-4">Fresh, Not Frozen — Ever</h3>
                <p className="text-muted-foreground">Made fresh every Friday, never from a warehouse</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              Fast Delivery to Greenville
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Order by Thursday</h3>
                <p className="text-muted-foreground">Place your order by Thursday 11:59 PM</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">We Prepare & Ship</h3>
                <p className="text-muted-foreground">Freshly made Friday, shipped Monday</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Arrives Tuesday</h3>
                <p className="text-muted-foreground">Fresh at your Greenville doorstep</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Join Greenville's Clean-Eating Movement. Order Smash Meals Today.
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Free shipping on orders over $130!
            </p>
            <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="text-lg">
                View Menu & Order Now
              </Button>
            </a>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <h2 className="text-2xl font-bold text-foreground mb-4">Gluten-Free Meal Prep in Greenville, SC</h2>
              <p>
                SmashMeals delivers healthy, gluten-free meal prep throughout Greenville, South Carolina. Perfect for CrossFit athletes, gym members, young professionals, and families who want clean eating without the meal prep hassle.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Greenville;
