import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CitySchema from "@/components/CitySchema";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Truck, Package, Clock, CheckCircle, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Owensboro = () => {
  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep Owensboro KY | Fresh Delivery | SmashMeals</title>
        <meta name="description" content="Premium gluten-free meal prep delivered to Owensboro, KY. Chef-prepared meals for Daviess County families and professionals. FREE shipping on orders over $130." />
        <meta name="keywords" content="meal prep Owensboro, gluten free Owensboro KY, healthy meal delivery Owensboro, Daviess County meal prep" />
        <link rel="canonical" href="https://smashmeals.com/owensboro" />
      </Helmet>

      <CitySchema cityName="Owensboro" state="Kentucky" stateAbbr="KY" />

      <Header />

      <main className="min-h-screen">
        <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Now Shipping to Owensboro, KY</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Owensboro's Trusted<br />Gluten-Free Meal Prep Service
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Chef-prepared, nutritionally balanced meals delivered to Owensboro and Daviess County. Healthy eating made simple.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="lg" className="text-lg">
                    View This Week's Menu
                  </Button>
                </a>
                <Link to="/service-areas">
                  <Button variant="outline" size="lg" className="text-lg">
                    Delivery Areas
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              Why Owensboro Trusts SmashMeals
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6">
                <Award className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">100% Gluten-Free</h3>
                <p className="text-muted-foreground">
                  Dedicated facility eliminates cross-contamination risk. Safe for celiac and gluten-sensitive residents.
                </p>
              </Card>

              <Card className="p-6">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">8+ Years of Excellence</h3>
                <p className="text-muted-foreground">
                  Proven track record serving athletes and health-conscious individuals across the region.
                </p>
              </Card>

              <Card className="p-6">
                <CheckCircle className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Owensboro Convenient</h3>
                <p className="text-muted-foreground">
                  Delivered to your door. No shopping, no cooking, no cleanup. Just delicious, healthy meals.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              How It Works
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <Card className="p-6 text-center">
                <Clock className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Order Online</h3>
                <p className="text-muted-foreground">Browse menu, order by Thursday</p>
              </Card>

              <Card className="p-6 text-center">
                <Package className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Chef Prepared</h3>
                <p className="text-muted-foreground">Fresh cooking Friday morning</p>
              </Card>

              <Card className="p-6 text-center">
                <Truck className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Fast Shipping</h3>
                <p className="text-muted-foreground">FedEx to Owensboro</p>
              </Card>

              <Card className="p-6 text-center">
                <CheckCircle className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Enjoy</h3>
                <p className="text-muted-foreground">Heat and eat all week</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-8">
              Healthy Meal Prep Delivery to Owensboro, Kentucky
            </h2>
            <div className="prose prose-lg max-w-none space-y-6">
              <p>
                Owensboro and Daviess County residents can now enjoy premium gluten-free meal prep without the hassle of shopping, cooking, and cleaning. SmashMeals delivers chef-prepared, nutritionally balanced meals straight to your door, saving you time while supporting your health goals.
              </p>
              
              <h3 className="text-2xl font-bold font-playfair mt-8">Perfect for Busy Owensboro Families</h3>
              <p>
                Whether you're managing a career, raising a family, or simply want more time to enjoy the Bluegrass Music Hall of Fame and Owensboro's riverfront, SmashMeals gives you back your evenings. Each meal is ready in minutes, portion-controlled, and designed for optimal nutrition.
              </p>

              <h3 className="text-2xl font-bold font-playfair mt-8">Guaranteed Gluten-Free</h3>
              <p>
                Our dedicated gluten-free kitchen ensures every meal is safe for those with celiac disease, gluten sensitivity, or anyone choosing a gluten-free lifestyle. Owensboro's health-conscious community can trust every bite.
              </p>

              <h3 className="text-2xl font-bold font-playfair mt-8">Convenient Daviess County Delivery</h3>
              <p>
                No need to drive to specialty stores or spend hours meal prepping on weekends. Order by Thursday, and your meals arrive ready to stock your Owensboro refrigerator. Free shipping on orders over $130.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Ready to Transform Your Owensboro Meal Routine?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join Owensboro families enjoying hassle-free, healthy eating with SmashMeals.
            </p>
            <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="text-lg">
                Order This Week's Menu
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Owensboro;
