import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CitySchema from "@/components/CitySchema";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Truck, Package, Clock, Shield, ChefHat, Mountain, Star, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Wytheville = () => {
  const faqs = [
    {
      question: "Do you deliver to Wytheville, Virginia?",
      answer: "Yes! SmashMeals ships fresh, 100% gluten-free meals to Wytheville and all of Wythe County. We're located in nearby Kingsport, TN—just over an hour away."
    },
    {
      question: "How long does shipping take to Wytheville?",
      answer: "Orders placed by Thursday ship Monday and typically arrive within 1-2 business days to Wytheville. We're your closest gluten-free meal prep option!"
    },
    {
      question: "Is free shipping available to Wytheville, VA?",
      answer: "Yes! Orders over $130 qualify for FREE shipping to Wytheville and all Virginia addresses. Smaller orders ship for $12.99."
    },
    {
      question: "What makes SmashMeals different?",
      answer: "We operate a 100% dedicated gluten-free kitchen. No wheat, barley, or rye ever enters our facility—complete safety for those with celiac disease or gluten sensitivity."
    },
    {
      question: "Do you deliver to the Wytheville area year-round?",
      answer: "Absolutely! We ship year-round with insulated packaging and ice packs to keep your meals fresh regardless of the season."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep Wytheville VA | Fresh Delivery | SmashMeals</title>
        <meta name="description" content="Gluten-free meal prep delivered to Wytheville, Virginia. Fresh meals from your neighbors in Kingsport, TN. Free shipping on orders over $130!" />
        <meta name="keywords" content="gluten free meal prep Wytheville, meal delivery Wytheville VA, healthy meal prep Wythe County Virginia, gluten free food Wytheville, Southwest Virginia meal prep" />
        <link rel="canonical" href="https://smashmeals.com/wytheville" />
        <meta property="og:title" content="Gluten-Free Meal Prep Wytheville VA | SmashMeals" />
        <meta property="og:description" content="Fresh gluten-free meal prep for Wytheville, Virginia. From your neighbors in East Tennessee." />
        <meta property="og:url" content="https://smashmeals.com/wytheville" />
      </Helmet>

      <CitySchema cityName="Wytheville" state="Virginia" stateAbbr="VA" />

      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Now Shipping to Wytheville, VA</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Gluten-Free Meal Prep<br />for Wytheville
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Where I-77 meets I-81, meet your new favorite meal prep. Fresh, 100% gluten-free 
                meals delivered from your neighbors in the Tri-Cities.
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
                <p className="text-sm text-muted-foreground">Dedicated kitchen</p>
              </Card>
              <Card className="p-6 text-center">
                <Mountain className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold">Regional Focus</h3>
                <p className="text-sm text-muted-foreground">Southwest VA served</p>
              </Card>
              <Card className="p-6 text-center">
                <Truck className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold">Fast Shipping</h3>
                <p className="text-sm text-muted-foreground">1-2 day delivery</p>
              </Card>
              <Card className="p-6 text-center">
                <Star className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold">8+ Years</h3>
                <p className="text-sm text-muted-foreground">Trusted service</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Wytheville Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-6">
              Why Wytheville Chooses SmashMeals
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Southwest Virginia's crossroads town deserves more than fast food options. 
              SmashMeals brings chef-prepared, gluten-free meals to your Wytheville doorstep.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8">
                <Mountain className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Close to Home</h3>
                <p className="text-muted-foreground">
                  We're based in Kingsport—just over an hour away. That means faster shipping 
                  and fresher meals for Wytheville families.
                </p>
              </Card>
              <Card className="p-8">
                <Heart className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Celiac-Safe</h3>
                <p className="text-muted-foreground">
                  Our entire kitchen is 100% gluten-free. No wheat, barley, or rye ever enters 
                  our facility—zero cross-contamination risk.
                </p>
              </Card>
              <Card className="p-8">
                <ChefHat className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Chef-Prepared</h3>
                <p className="text-muted-foreground">
                  Restaurant-quality meals you can heat and eat in minutes. Over 30 options 
                  rotating weekly to keep things fresh.
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
                <p className="text-muted-foreground">Browse our menu and order before Thursday 11:59 PM EST</p>
              </Card>

              <Card className="p-6 text-center">
                <Package className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Fresh Prep</h3>
                <p className="text-muted-foreground">Your meals are prepared fresh over the weekend in Kingsport</p>
              </Card>

              <Card className="p-6 text-center">
                <Truck className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Quick Delivery</h3>
                <p className="text-muted-foreground">Arrives in Wytheville within 1-2 business days</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Areas Served */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-6">
              Serving Southwest Virginia
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-8">
              We deliver to Wytheville and all surrounding communities:
            </p>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {["Wytheville", "Rural Retreat", "Max Meadows", "Fort Chiswell", "Bland", 
                "Dublin", "Pulaski", "Radford", "Blacksburg", "Marion",
                "Chilhowie", "Abingdon", "Bristol", "Galax", "Hillsville"].map((area) => (
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
              Wytheville Delivery FAQs
            </h2>
            <FAQSection faqs={faqs} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Ready to Try SmashMeals in Wytheville?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Free shipping on orders over $130. New menu drops every Monday!
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

export default Wytheville;
