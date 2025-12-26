import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CitySchema from "@/components/CitySchema";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Truck, Package, Clock, Shield, ChefHat, Leaf, Star, Heart, Sun } from "lucide-react";
import { Link } from "react-router-dom";

const Savannah = () => {
  const faqs = [
    {
      question: "Do you deliver gluten-free meals to Savannah, Georgia?",
      answer: "Yes! SmashMeals ships fresh, 100% gluten-free meals directly to Savannah and all Chatham County including Pooler, Richmond Hill, Tybee Island, and Garden City."
    },
    {
      question: "How does shipping work to Savannah?",
      answer: "We ship via FedEx with insulated packaging and ice packs. Orders placed by Thursday ship Monday and typically arrive within 2-3 business days to Savannah addresses."
    },
    {
      question: "What makes SmashMeals different from other meal prep services?",
      answer: "We operate a 100% dedicated gluten-free kitchen—meaning no gluten ever enters our facility. This eliminates any risk of cross-contamination, making our meals truly safe for those with celiac disease."
    },
    {
      question: "How long do the meals stay fresh?",
      answer: "Our meals stay fresh for 5-7 days in the refrigerator. You can also freeze them for up to 3 months for extended storage."
    },
    {
      question: "Do you offer keto or low-carb options?",
      answer: "Yes! Many of our meals are naturally low-carb and keto-friendly. Check the nutritional info on each meal—we display calories, protein, carbs, and fat for every item."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep Savannah GA | Fresh Delivery | SmashMeals</title>
        <meta name="description" content="Gluten-free meal prep delivered to Savannah, Georgia. Chef-prepared meals from a dedicated gluten-free kitchen. Free shipping on orders over $130!" />
        <meta name="keywords" content="gluten free meal prep Savannah, meal delivery Savannah GA, healthy meal prep Savannah Georgia, gluten free food delivery Savannah, meal prep service Savannah" />
        <link rel="canonical" href="https://smashmeals.com/savannah" />
        <meta property="og:title" content="Gluten-Free Meal Prep Savannah GA | SmashMeals" />
        <meta property="og:description" content="Fresh gluten-free meal prep delivered to Savannah, Georgia. 100% dedicated gluten-free kitchen." />
        <meta property="og:url" content="https://smashmeals.com/savannah" />
      </Helmet>

      <CitySchema cityName="Savannah" state="Georgia" stateAbbr="GA" />

      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Now Shipping to Savannah, GA</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Gluten-Free Meal Prep<br />for Savannah
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Southern charm meets healthy eating. Fresh, 100% gluten-free meals 
                delivered to Savannah's historic squares and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="lg" className="text-lg px-8">
                    View This Week's Menu
                  </Button>
                </a>
                <Link to="/service-areas">
                  <Button variant="outline" size="lg" className="text-lg">
                    All Delivery Areas
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
                <p className="text-sm text-muted-foreground">Dedicated facility</p>
              </Card>
              <Card className="p-6 text-center">
                <Star className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold">8+ Years</h3>
                <p className="text-sm text-muted-foreground">Trusted service</p>
              </Card>
              <Card className="p-6 text-center">
                <Truck className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold">Free Shipping</h3>
                <p className="text-sm text-muted-foreground">Orders $130+</p>
              </Card>
              <Card className="p-6 text-center">
                <Sun className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold">Fresh Weekly</h3>
                <p className="text-sm text-muted-foreground">Never frozen</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Savannah Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-6">
              Why Savannah Loves SmashMeals
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Savannah's food scene is legendary, but truly safe gluten-free dining can be hard to find. 
              SmashMeals brings peace of mind and delicious flavors to your doorstep.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8">
                <Heart className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Celiac-Safe Guarantee</h3>
                <p className="text-muted-foreground">
                  Our kitchen is 100% gluten-free. No wheat, barley, or rye ever enters our facility, 
                  ensuring complete safety for those with celiac disease.
                </p>
              </Card>
              <Card className="p-8">
                <Leaf className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Fresh Coastal Delivery</h3>
                <p className="text-muted-foreground">
                  We ship with premium insulated packaging designed to keep your meals cold 
                  even in Savannah's warm coastal climate.
                </p>
              </Card>
              <Card className="p-8">
                <ChefHat className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Southern-Inspired Flavors</h3>
                <p className="text-muted-foreground">
                  From shrimp and grits to BBQ chicken, our menu features flavors that 
                  Southerners love—all made gluten-free.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              How Savannah Gets SmashMeals
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <Clock className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Order by Thursday</h3>
                <p className="text-muted-foreground">Browse 30+ options and order before Thursday 11:59 PM EST</p>
              </Card>

              <Card className="p-6 text-center">
                <Package className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">We Prepare Fresh</h3>
                <p className="text-muted-foreground">Your meals are cooked fresh over the weekend and carefully packed</p>
              </Card>

              <Card className="p-6 text-center">
                <Truck className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Delivered to Savannah</h3>
                <p className="text-muted-foreground">FedEx delivers your meals cold and fresh to your door</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Areas Served */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-6">
              Serving the Savannah Area
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-8">
              We deliver to Savannah and all surrounding coastal communities:
            </p>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {["Historic District", "Pooler", "Richmond Hill", "Tybee Island", "Garden City", 
                "Port Wentworth", "Thunderbolt", "Isle of Hope", "Wilmington Island", "Whitemarsh Island",
                "Bloomingdale", "Rincon", "Statesboro", "Hinesville", "Midway"].map((area) => (
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
              Savannah Delivery FAQs
            </h2>
            <FAQSection faqs={faqs} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Ready to Try SmashMeals in Savannah?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Free shipping on orders over $130. Taste the difference of truly gluten-free!
            </p>
            <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="text-lg px-12">
                Start Your Order
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Savannah;
