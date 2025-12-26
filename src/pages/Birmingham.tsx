import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CitySchema from "@/components/CitySchema";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Truck, Package, Clock, Shield, ChefHat, Leaf, Star, Heart, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Birmingham = () => {
  const faqs = [
    {
      question: "Do you deliver gluten-free meals to Birmingham, Alabama?",
      answer: "Yes! SmashMeals ships fresh, 100% gluten-free meals directly to Birmingham, AL and all surrounding Jefferson County communities including Hoover, Vestavia Hills, Mountain Brook, and Homewood."
    },
    {
      question: "How long does shipping take to Birmingham?",
      answer: "Orders placed by Thursday at 11:59 PM EST ship the following week and typically arrive within 2-3 business days to Birmingham addresses via FedEx with insulated packaging."
    },
    {
      question: "Is there a minimum order for Birmingham delivery?",
      answer: "There's no minimum order required. However, orders over $130 qualify for FREE shipping to Birmingham and all Alabama addresses."
    },
    {
      question: "Are SmashMeals truly gluten-free?",
      answer: "Absolutely! We operate a dedicated 100% gluten-free kitchen in Kingsport, TN. There's zero cross-contamination risk because gluten never enters our facility."
    },
    {
      question: "How do I reheat my SmashMeals?",
      answer: "Simply microwave for 2-3 minutes or heat in the oven at 350°F for 10-15 minutes. Our meals are designed to taste fresh and delicious when reheated."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep Birmingham AL | Fresh Delivery | SmashMeals</title>
        <meta name="description" content="Premium gluten-free meal prep delivered to Birmingham, Alabama. Chef-prepared meals from a 100% gluten-free kitchen. Free shipping on orders over $130. Order today!" />
        <meta name="keywords" content="gluten free meal prep Birmingham, meal delivery Birmingham AL, healthy meal prep Birmingham Alabama, gluten free food delivery Birmingham, meal prep service Birmingham" />
        <link rel="canonical" href="https://smashmeals.com/birmingham" />
        <meta property="og:title" content="Gluten-Free Meal Prep Birmingham AL | SmashMeals" />
        <meta property="og:description" content="Premium gluten-free meal prep delivered fresh to Birmingham, Alabama. 100% gluten-free kitchen, chef-prepared meals." />
        <meta property="og:url" content="https://smashmeals.com/birmingham" />
      </Helmet>

      <CitySchema cityName="Birmingham" state="Alabama" stateAbbr="AL" />

      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Now Shipping to Birmingham, AL</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Gluten-Free Meal Prep<br />Delivered to Birmingham
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Alabama's Magic City deserves magical meals. Fresh, chef-prepared gluten-free dishes 
                shipped directly to your door from our dedicated kitchen—no cross-contamination, ever.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="lg" className="text-lg px-8">
                    Order This Week's Menu
                  </Button>
                </a>
                <Link to="/service-areas">
                  <Button variant="outline" size="lg" className="text-lg">
                    View All Delivery Areas
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
                <Star className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold">8+ Years Trusted</h3>
                <p className="text-sm text-muted-foreground">Serving since 2016</p>
              </Card>
              <Card className="p-6 text-center">
                <Truck className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold">Free Shipping</h3>
                <p className="text-sm text-muted-foreground">Orders $130+</p>
              </Card>
              <Card className="p-6 text-center">
                <ChefHat className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold">Chef-Prepared</h3>
                <p className="text-sm text-muted-foreground">Restaurant quality</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Birmingham Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-6">
              Why Birmingham Chooses SmashMeals
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              From downtown Birmingham to Hoover, Mountain Brook to Vestavia Hills—busy professionals 
              and health-conscious families across Jefferson County trust SmashMeals for truly safe, 
              delicious gluten-free meals.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8">
                <Leaf className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Fresh, Never Frozen</h3>
                <p className="text-muted-foreground">
                  Our meals are prepared fresh each week and shipped with premium insulated packaging 
                  to ensure they arrive cold and ready to enjoy.
                </p>
              </Card>
              <Card className="p-8">
                <Heart className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Celiac-Safe Kitchen</h3>
                <p className="text-muted-foreground">
                  We understand the importance of a truly gluten-free environment. Our entire facility 
                  is 100% gluten-free—no exceptions, no compromises.
                </p>
              </Card>
              <Card className="p-8">
                <Zap className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Ready in Minutes</h3>
                <p className="text-muted-foreground">
                  Heat and eat in just 2-3 minutes. Perfect for Birmingham's busy professionals 
                  who want healthy meals without the prep time.
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
            <div className="grid md:grid-cols-4 gap-8">
              <Card className="p-6 text-center relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">1</div>
                <Clock className="w-12 h-12 text-primary mb-4 mx-auto mt-4" />
                <h3 className="text-xl font-bold mb-2">Browse Menu</h3>
                <p className="text-muted-foreground">New menu drops every Monday with 30+ options</p>
              </Card>

              <Card className="p-6 text-center relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">2</div>
                <Package className="w-12 h-12 text-primary mb-4 mx-auto mt-4" />
                <h3 className="text-xl font-bold mb-2">Order by Thursday</h3>
                <p className="text-muted-foreground">Deadline is Thursday at 11:59 PM EST</p>
              </Card>

              <Card className="p-6 text-center relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">3</div>
                <ChefHat className="w-12 h-12 text-primary mb-4 mx-auto mt-4" />
                <h3 className="text-xl font-bold mb-2">We Cook Fresh</h3>
                <p className="text-muted-foreground">Prepared fresh over the weekend</p>
              </Card>

              <Card className="p-6 text-center relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">4</div>
                <Truck className="w-12 h-12 text-primary mb-4 mx-auto mt-4" />
                <h3 className="text-xl font-bold mb-2">Delivered Fresh</h3>
                <p className="text-muted-foreground">Arrives at your Birmingham door</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Birmingham Neighborhoods */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-6">
              Serving All Birmingham Neighborhoods
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-8">
              We deliver to every corner of the Birmingham metro area including:
            </p>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {["Downtown Birmingham", "Hoover", "Vestavia Hills", "Mountain Brook", "Homewood", 
                "Bessemer", "Trussville", "Irondale", "Gardendale", "Pelham", "Alabaster", 
                "Helena", "Chelsea", "Leeds", "Moody"].map((area) => (
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
              Birmingham Delivery FAQs
            </h2>
            <FAQSection faqs={faqs} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Ready to Eat Better in Birmingham?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of happy customers across Alabama. Free shipping on orders over $130!
            </p>
            <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="text-lg px-12">
                Start Your Order Today
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Birmingham;
