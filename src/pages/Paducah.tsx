import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CitySchema from "@/components/CitySchema";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Truck, Package, Clock, CheckCircle, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Paducah = () => {
  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep Paducah KY | Fresh Delivery | SmashMeals</title>
        <meta name="description" content="Premium gluten-free meal prep delivered to Paducah, KY. Chef-prepared meals for Western Kentucky families and professionals. FREE shipping on orders over $130." />
        <meta name="keywords" content="meal prep Paducah, gluten free Paducah KY, healthy meal delivery Paducah, McCracken County meal prep" />
        <link rel="canonical" href="https://smashmeals.com/paducah" />
      </Helmet>

      <CitySchema cityName="Paducah" state="Kentucky" stateAbbr="KY" />

      <Header />

      <main className="min-h-screen">
        <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Now Shipping to Paducah, KY</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Paducah's Premier<br />Gluten-Free Meal Prep Delivery
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Fresh, chef-prepared meals delivered to Paducah and McCracken County. Healthy eating simplified for Western Kentucky.
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
              Why Paducah Loves SmashMeals
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6">
                <Award className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Certified Gluten-Free Kitchen</h3>
                <p className="text-muted-foreground">
                  Zero cross-contamination. Safe for celiac disease and gluten-sensitive Paducah residents.
                </p>
              </Card>

              <Card className="p-6">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Athlete-Tested Nutrition</h3>
                <p className="text-muted-foreground">
                  8+ years fueling Division I athletes. Professional nutrition for Paducah's active community.
                </p>
              </Card>

              <Card className="p-6">
                <CheckCircle className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Western Kentucky Convenient</h3>
                <p className="text-muted-foreground">
                  Order Thursday, delivered to Paducah. No shopping, cooking, or cleanup required.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              Simple Process for Paducah Residents
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <Card className="p-6 text-center">
                <Clock className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Order by Thursday</h3>
                <p className="text-muted-foreground">Choose from weekly menu</p>
              </Card>

              <Card className="p-6 text-center">
                <Package className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Fresh Prep Friday</h3>
                <p className="text-muted-foreground">Chef-cooked in certified kitchen</p>
              </Card>

              <Card className="p-6 text-center">
                <Truck className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Fast Shipping</h3>
                <p className="text-muted-foreground">FedEx to Paducah doorstep</p>
              </Card>

              <Card className="p-6 text-center">
                <CheckCircle className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Enjoy All Week</h3>
                <p className="text-muted-foreground">Stays fresh 7-10 days</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-8">
              Meal Prep Delivery to Paducah, Kentucky
            </h2>
            <div className="prose prose-lg max-w-none space-y-6">
              <p>
                Paducah and McCracken County residents now have access to premium gluten-free meal prep without leaving Western Kentucky. SmashMeals delivers chef-prepared, nutritionally balanced meals directly to your Paducah address, making healthy eating effortless for busy professionals, families, and health-conscious residents.
              </p>
              
              <h3 className="text-2xl font-bold font-playfair mt-8">Perfect for Paducah's Lifestyle</h3>
              <p>
                Whether you're exploring Paducah's vibrant arts scene, working in healthcare or education, or managing family responsibilities, SmashMeals eliminates meal planning stress. Each meal is portion-controlled, macro-balanced, and ready in minutes.
              </p>

              <h3 className="text-2xl font-bold font-playfair mt-8">100% Gluten-Free Assurance</h3>
              <p>
                Our dedicated gluten-free facility means zero cross-contamination risk. Every meal is safe for those with celiac disease, gluten sensitivity, or anyone choosing a gluten-free lifestyle. Paducah's gluten-free community can finally enjoy restaurant-quality meals with complete confidence.
              </p>

              <h3 className="text-2xl font-bold font-playfair mt-8">Convenient Paducah Delivery</h3>
              <p>
                Skip the grocery store trips. Order by Thursday, and your meals arrive at your Paducah or McCracken County address ready to stock your fridge for the week. Free shipping on orders over $130 makes premium nutrition affordable.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Start Your Paducah Meal Prep Journey
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join Paducah families and professionals enjoying hassle-free, healthy nutrition.
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

export default Paducah;
