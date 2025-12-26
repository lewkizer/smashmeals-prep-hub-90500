import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CitySchema from "@/components/CitySchema";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Truck, Package, Clock, Shield, ChefHat, Leaf, Star, Dumbbell, Timer } from "lucide-react";
import { Link } from "react-router-dom";

const Greensboro = () => {
  const faqs = [
    {
      question: "Do you deliver gluten-free meals to Greensboro, NC?",
      answer: "Yes! SmashMeals ships fresh, 100% gluten-free meals to Greensboro and all of Guilford County including High Point, Burlington, and surrounding areas."
    },
    {
      question: "How quickly can I get meals delivered to Greensboro?",
      answer: "Orders placed by Thursday at 11:59 PM EST ship the following Monday and typically arrive within 2-3 business days to Greensboro addresses."
    },
    {
      question: "Is free shipping available to Greensboro?",
      answer: "Yes! Orders over $130 qualify for FREE shipping to Greensboro and all North Carolina addresses. Orders under $130 ship for $12.99."
    },
    {
      question: "What kind of meals do you offer?",
      answer: "We offer 30+ rotating options weekly including breakfast, lunch, and dinner meals. Options include high-protein, low-carb, and bariatric-friendly portions—all 100% gluten-free."
    },
    {
      question: "Are meals good for meal prep and fitness goals?",
      answer: "Absolutely! Our meals display full macros (calories, protein, carbs, fat) and are popular with fitness enthusiasts, bodybuilders, and anyone tracking their nutrition."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep Greensboro NC | Fresh Delivery | SmashMeals</title>
        <meta name="description" content="Gluten-free meal prep delivered to Greensboro, North Carolina. Chef-prepared meals from a dedicated gluten-free kitchen. Free shipping on orders over $130!" />
        <meta name="keywords" content="gluten free meal prep Greensboro, meal delivery Greensboro NC, healthy meal prep Greensboro North Carolina, gluten free food delivery Greensboro, meal prep service Greensboro" />
        <link rel="canonical" href="https://smashmeals.com/greensboro" />
        <meta property="og:title" content="Gluten-Free Meal Prep Greensboro NC | SmashMeals" />
        <meta property="og:description" content="Fresh gluten-free meal prep delivered to Greensboro, North Carolina. 100% dedicated gluten-free kitchen." />
        <meta property="og:url" content="https://smashmeals.com/greensboro" />
      </Helmet>

      <CitySchema cityName="Greensboro" state="North Carolina" stateAbbr="NC" />

      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Now Shipping to Greensboro, NC</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Gluten-Free Meal Prep<br />for Greensboro
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The Gate City's gateway to healthy eating. Fresh, chef-prepared, 100% gluten-free 
                meals delivered to your Piedmont Triad doorstep.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="lg" className="text-lg px-8">
                    View This Week's Menu
                  </Button>
                </a>
                <Link to="/high-protein">
                  <Button variant="outline" size="lg" className="text-lg">
                    High-Protein Options
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-12 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold">100% Gluten-Free</h3>
                <p className="text-sm text-muted-foreground">Dedicated kitchen</p>
              </Card>
              <Card className="p-6 text-center">
                <Dumbbell className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold">Macro-Friendly</h3>
                <p className="text-sm text-muted-foreground">Full nutrition info</p>
              </Card>
              <Card className="p-6 text-center">
                <Truck className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold">Free Shipping</h3>
                <p className="text-sm text-muted-foreground">Orders $130+</p>
              </Card>
              <Card className="p-6 text-center">
                <Timer className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold">Ready in 3 Min</h3>
                <p className="text-sm text-muted-foreground">Just heat & eat</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Greensboro Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-6">
              Why Greensboro Chooses SmashMeals
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              From UNCG students to downtown professionals, Greensboro's health-conscious community 
              trusts SmashMeals for safe, delicious, convenient gluten-free meals.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8">
                <ChefHat className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Chef-Crafted Weekly</h3>
                <p className="text-muted-foreground">
                  Our menu rotates weekly with 30+ fresh options. From breakfast to dinner, 
                  there's something for everyone—all made in our gluten-free kitchen.
                </p>
              </Card>
              <Card className="p-8">
                <Dumbbell className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Perfect for Athletes</h3>
                <p className="text-muted-foreground">
                  High-protein options with transparent macros. Popular with gym-goers, 
                  athletes, and anyone focused on hitting their nutrition goals.
                </p>
              </Card>
              <Card className="p-8">
                <Leaf className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Fresh, Never Frozen</h3>
                <p className="text-muted-foreground">
                  We prepare meals fresh each week and ship with premium insulation. 
                  Your meals arrive cold and ready to refrigerate or enjoy.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <Clock className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Order by Thursday</h3>
                <p className="text-muted-foreground">Select your meals from our weekly menu before Thursday at 11:59 PM</p>
              </Card>

              <Card className="p-6 text-center">
                <Package className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Fresh Prep Weekend</h3>
                <p className="text-muted-foreground">Our chefs prepare your meals fresh and pack them with care</p>
              </Card>

              <Card className="p-6 text-center">
                <Truck className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Greensboro Delivery</h3>
                <p className="text-muted-foreground">Meals arrive at your door cold and ready to enjoy</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Areas Served */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-6">
              Serving the Piedmont Triad
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-8">
              We deliver to Greensboro and all Piedmont Triad communities:
            </p>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {["Downtown Greensboro", "High Point", "Burlington", "Jamestown", "Pleasant Garden", 
                "Summerfield", "Oak Ridge", "Kernersville", "Whitsett", "McLeansville",
                "Gibsonville", "Elon", "Graham", "Mebane", "Asheboro"].map((area) => (
                <span key={area} className="px-4 py-2 bg-muted rounded-full text-sm font-medium">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              Greensboro Delivery FAQs
            </h2>
            <FAQSection faqs={faqs} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Start Eating Better in Greensboro
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Free shipping on orders over $130. New menu every Monday!
            </p>
            <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="text-lg px-12">
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

export default Greensboro;
