import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import CitySchema from "@/components/CitySchema";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Truck, CheckCircle, Package, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const TriadNC = () => {
  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep Greensboro, Winston-Salem, High Point NC | SmashMeals</title>
        <meta name="description" content="Healthy, gluten-free meal prep in Greensboro, Winston-Salem, and High Point. Delivered fresh weekly." />
        <meta name="keywords" content="Triad meal prep, Greensboro meal delivery, gluten-free Winston-Salem" />
        <link rel="canonical" href="https://smashmeals.com/triad-nc" />
        <meta property="og:title" content="Gluten-Free Meal Prep Triad NC | SmashMeals" />
        <meta property="og:description" content="Healthy, gluten-free meal prep in Greensboro, Winston-Salem, and High Point. Delivered fresh weekly." />
        <meta property="og:url" content="https://smashmeals.com/triad-nc" />
      </Helmet>

      <CitySchema cityName="Triad NC" state="North Carolina" stateAbbr="NC" />

      <Header />
      <PageBreadcrumb parentPage={{ label: "Service Areas", href: "/service-areas" }} currentPage="Triad NC" />

      <main className="min-h-screen">
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Serving the Triad: Greensboro, Winston-Salem & High Point</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Triad's Healthiest<br />Meal Prep
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Smash Meals delivers gluten-free, high-protein meals across Greensboro, Winston-Salem, and High Point.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="lg" className="text-lg">
                    View This Week's Menu
                  </Button>
                </a>
                <Link to="/">
                  <Button variant="outline" size="lg" className="text-lg">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Busy schedules shouldn't mean bad food. Smash Meals delivers clean, balanced meals made to fuel your week — gluten-free, protein-rich, and made fresh every Friday.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              Top Benefits
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center">
                <CheckCircle className="w-10 h-10 text-primary mb-4 mx-auto" />
                <h3 className="text-2xl font-bold mb-4">Covers the Entire Triad</h3>
                <p className="text-muted-foreground">Greensboro, Winston-Salem, and High Point</p>
              </Card>

              <Card className="p-8 text-center">
                <CheckCircle className="w-10 h-10 text-primary mb-4 mx-auto" />
                <h3 className="text-2xl font-bold mb-4">Rotating Weekly Menu</h3>
                <p className="text-muted-foreground">New options every week</p>
              </Card>

              <Card className="p-8 text-center">
                <CheckCircle className="w-10 h-10 text-primary mb-4 mx-auto" />
                <h3 className="text-2xl font-bold mb-4">Family or Fitness Goals</h3>
                <p className="text-muted-foreground">Perfect for any lifestyle</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <Clock className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Order by Thursday</h3>
                <p className="text-muted-foreground">Browse online and order</p>
              </Card>

              <Card className="p-6 text-center">
                <Package className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">We Prepare & Ship</h3>
                <p className="text-muted-foreground">Fresh made Friday, ships Monday</p>
              </Card>

              <Card className="p-6 text-center">
                <Truck className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Arrives Wednesday</h3>
                <p className="text-muted-foreground">Delivered fresh to the Triad</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Simplify Your Week with Smash Meals — Order Now.
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Free shipping on orders over $130!
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

export default TriadNC;
