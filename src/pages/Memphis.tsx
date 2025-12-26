import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CitySchema from "@/components/CitySchema";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Truck, Package, Clock, Shield, ChefHat, Leaf, Star, Heart, Utensils } from "lucide-react";
import { Link } from "react-router-dom";

const Memphis = () => {
  const faqs = [
    {
      question: "Do you deliver gluten-free meals to Memphis, Tennessee?",
      answer: "Yes! SmashMeals ships fresh, 100% gluten-free meals directly to Memphis and all Shelby County communities including Germantown, Collierville, Bartlett, and Cordova."
    },
    {
      question: "What's the shipping cost to Memphis?",
      answer: "Shipping to Memphis is $12.99 for most orders. Orders over $130 qualify for FREE shipping to all Memphis and Tennessee addresses."
    },
    {
      question: "When do I need to order by for Memphis delivery?",
      answer: "Place your order by Thursday at 11:59 PM EST. We prepare your meals fresh over the weekend and ship Monday for mid-week delivery."
    },
    {
      question: "How are the meals packaged for shipping?",
      answer: "All meals ship in insulated boxes with ice packs to maintain freshness. Your meals arrive cold and ready to refrigerate or enjoy immediately."
    },
    {
      question: "Can I order for the whole family?",
      answer: "Absolutely! Many Memphis families order 10-20 meals per week. We have options for every taste and dietary need, all 100% gluten-free."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep Memphis TN | Fresh Delivery | SmashMeals</title>
        <meta name="description" content="Gluten-free meal prep delivered to Memphis, Tennessee. Chef-prepared meals from a dedicated gluten-free kitchen. Free shipping on orders over $130!" />
        <meta name="keywords" content="gluten free meal prep Memphis, meal delivery Memphis TN, healthy meal prep Memphis Tennessee, gluten free food delivery Memphis, meal prep service Memphis" />
        <link rel="canonical" href="https://smashmeals.com/memphis" />
        <meta property="og:title" content="Gluten-Free Meal Prep Memphis TN | SmashMeals" />
        <meta property="og:description" content="Fresh gluten-free meal prep delivered to Memphis, Tennessee. 100% dedicated gluten-free kitchen." />
        <meta property="og:url" content="https://smashmeals.com/memphis" />
      </Helmet>

      <CitySchema cityName="Memphis" state="Tennessee" stateAbbr="TN" />

      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Now Shipping to Memphis, TN</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Gluten-Free Meal Prep<br />for Memphis
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From Beale Street to your table—fresh, 100% gluten-free meals crafted by chefs 
                and delivered to your Memphis doorstep. The Bluff City's tastiest healthy option.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="lg" className="text-lg px-8">
                    View This Week's Menu
                  </Button>
                </a>
                <Link to="/how-it-works">
                  <Button variant="outline" size="lg" className="text-lg">
                    How It Works
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
                <p className="text-sm text-muted-foreground">Zero cross-contamination</p>
              </Card>
              <Card className="p-6 text-center">
                <Star className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold">5-Star Rated</h3>
                <p className="text-sm text-muted-foreground">Thousands of reviews</p>
              </Card>
              <Card className="p-6 text-center">
                <Truck className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold">Fast Delivery</h3>
                <p className="text-sm text-muted-foreground">2-3 days to Memphis</p>
              </Card>
              <Card className="p-6 text-center">
                <Utensils className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold">30+ Options</h3>
                <p className="text-sm text-muted-foreground">New menu weekly</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Memphis Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-6">
              Memphis Deserves Better Meal Prep
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Memphis is famous for its food, but finding truly gluten-free options can be a challenge. 
              SmashMeals brings restaurant-quality, 100% gluten-free meals right to your home.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <Heart className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Safe for Celiac Disease</h3>
                <p className="text-muted-foreground">
                  Our dedicated gluten-free kitchen means you never have to worry. Every meal is 
                  prepared in a facility where gluten never enters—period.
                </p>
              </Card>
              <Card className="p-8">
                <Leaf className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">High-Protein Options</h3>
                <p className="text-muted-foreground">
                  From grilled chicken to salmon, steak to turkey—our protein-packed meals support 
                  your fitness goals while keeping you gluten-free.
                </p>
              </Card>
              <Card className="p-8">
                <ChefHat className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Chef-Crafted Flavors</h3>
                <p className="text-muted-foreground">
                  We believe healthy food should taste amazing. Our chefs create bold, satisfying 
                  flavors that make eating well something to look forward to.
                </p>
              </Card>
              <Card className="p-8">
                <Clock className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Save Hours Weekly</h3>
                <p className="text-muted-foreground">
                  No shopping, no cooking, no cleanup. Just grab a meal from your fridge, heat it up, 
                  and enjoy a delicious gluten-free dinner in minutes.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              Getting Started is Easy
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <Clock className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Order by Thursday</h3>
                <p className="text-muted-foreground">Browse our weekly menu and place your order before Thursday at 11:59 PM</p>
              </Card>

              <Card className="p-6 text-center">
                <Package className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Fresh Preparation</h3>
                <p className="text-muted-foreground">Our chefs prepare your meals fresh over the weekend with premium ingredients</p>
              </Card>

              <Card className="p-6 text-center">
                <Truck className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Memphis Delivery</h3>
                <p className="text-muted-foreground">Your meals arrive cold and fresh, ready to heat and enjoy</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Areas Served */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-6">
              Delivering Across Memphis
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-8">
              We deliver to all Memphis neighborhoods and surrounding communities:
            </p>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {["Downtown Memphis", "Germantown", "Collierville", "Bartlett", "Cordova", 
                "East Memphis", "Midtown", "Cooper-Young", "Harbor Town", "Mud Island",
                "Lakeland", "Arlington", "Olive Branch", "Southaven", "Horn Lake"].map((area) => (
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
              Memphis Delivery FAQs
            </h2>
            <FAQSection faqs={faqs} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Start Eating Better in Memphis
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

export default Memphis;
