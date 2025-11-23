import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CitySchema from "@/components/CitySchema";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Truck, CheckCircle, Package, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Roanoke = () => {
  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep Roanoke VA | SmashMeals Delivery</title>
        <meta name="description" content="Roanoke's favorite gluten-free meal delivery. Smash Meals delivers chef-prepared, high-protein meals every week." />
        <meta name="keywords" content="Roanoke meal prep, healthy meal delivery Roanoke" />
        <link rel="canonical" href="https://smashmeals.com/roanoke" />
        <meta property="og:title" content="Gluten-Free Meal Prep Roanoke VA | SmashMeals" />
        <meta property="og:description" content="Roanoke's favorite gluten-free meal delivery. Smash Meals delivers chef-prepared, high-protein meals every week." />
        <meta property="og:url" content="https://smashmeals.com/roanoke" />
      </Helmet>

      <CitySchema cityName="Roanoke" state="Virginia" stateAbbr="VA" />

      <Header />

      <main className="min-h-screen">
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Now Shipping to Roanoke, VA</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Roanoke's Fresh<br />Meal Prep Solution
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Gluten-free, high-protein meals delivered fresh from East Tennessee.
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
              From mountain bikers to business leaders, Roanoke is on the move — and Smash Meals keeps it fueled with gluten-free, chef-crafted meals ready in minutes.
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
                <h3 className="text-2xl font-bold mb-4">Delivered Fresh Every Week</h3>
                <p className="text-muted-foreground">Never frozen, always fresh</p>
              </Card>

              <Card className="p-8 text-center">
                <CheckCircle className="w-10 h-10 text-primary mb-4 mx-auto" />
                <h3 className="text-2xl font-bold mb-4">Gluten-Free for Wellness</h3>
                <p className="text-muted-foreground">Safe, clean ingredients</p>
              </Card>

              <Card className="p-8 text-center">
                <CheckCircle className="w-10 h-10 text-primary mb-4 mx-auto" />
                <h3 className="text-2xl font-bold mb-4">Trusted Across Appalachia</h3>
                <p className="text-muted-foreground">Regional leader in meal prep</p>
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
                <p className="text-muted-foreground">Browse and order online</p>
              </Card>

              <Card className="p-6 text-center">
                <Package className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">We Prep & Ship</h3>
                <p className="text-muted-foreground">Made fresh, shipped fast</p>
              </Card>

              <Card className="p-6 text-center">
                <Truck className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">You Enjoy</h3>
                <p className="text-muted-foreground">Delivered to Roanoke</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Eat Clean. Live Strong. Order Smash Meals Roanoke Today.
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

export default Roanoke;
