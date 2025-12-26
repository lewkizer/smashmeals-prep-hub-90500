import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CitySchema from "@/components/CitySchema";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Truck, Package, Clock, Shield, ChefHat, Home, Star, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const StrawberryPlains = () => {
  const faqs = [
    {
      question: "Do you deliver to Strawberry Plains, Tennessee?",
      answer: "Yes! SmashMeals ships fresh, 100% gluten-free meals to Strawberry Plains and all of Jefferson and Knox County. We're based in nearby Kingsport."
    },
    {
      question: "What's the delivery schedule for Strawberry Plains?",
      answer: "Order by Thursday at 11:59 PM EST. We prepare meals fresh over the weekend and ship Monday. Most Strawberry Plains orders arrive within 2 business days."
    },
    {
      question: "Is there free shipping to Strawberry Plains?",
      answer: "Yes! Orders over $130 qualify for FREE shipping to Strawberry Plains and all Tennessee addresses. Orders under $130 ship for $12.99."
    },
    {
      question: "What makes your meals safe for celiac disease?",
      answer: "Our entire kitchen is 100% dedicated gluten-free. No wheat, barley, or rye ever enters our facility, eliminating any risk of cross-contamination."
    },
    {
      question: "How do I store and reheat the meals?",
      answer: "Store meals in the refrigerator for 5-7 days or freeze for up to 3 months. Reheat in the microwave for 2-3 minutes or oven at 350°F for 10-15 minutes."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep Strawberry Plains TN | Fresh Delivery | SmashMeals</title>
        <meta name="description" content="Gluten-free meal prep delivered to Strawberry Plains, Tennessee. Fresh meals from your East Tennessee neighbors. Free shipping on orders over $130!" />
        <meta name="keywords" content="gluten free meal prep Strawberry Plains, meal delivery Strawberry Plains TN, healthy meal prep Jefferson County, gluten free food Strawberry Plains Tennessee" />
        <link rel="canonical" href="https://smashmeals.com/strawberry-plains" />
        <meta property="og:title" content="Gluten-Free Meal Prep Strawberry Plains TN | SmashMeals" />
        <meta property="og:description" content="Fresh gluten-free meal prep for Strawberry Plains, Tennessee. Local East Tennessee quality." />
        <meta property="og:url" content="https://smashmeals.com/strawberry-plains" />
      </Helmet>

      <CitySchema cityName="Strawberry Plains" state="Tennessee" stateAbbr="TN" />

      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Now Shipping to Strawberry Plains, TN</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Gluten-Free Meal Prep<br />for Strawberry Plains
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Fresh, chef-prepared, 100% gluten-free meals delivered from your East Tennessee 
                neighbors. Sweet location, sweeter meals.
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
                <Home className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold">East TN Made</h3>
                <p className="text-sm text-muted-foreground">Kingsport kitchen</p>
              </Card>
              <Card className="p-6 text-center">
                <Truck className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold">Free Shipping</h3>
                <p className="text-sm text-muted-foreground">Orders $130+</p>
              </Card>
              <Card className="p-6 text-center">
                <Star className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold">8+ Years</h3>
                <p className="text-sm text-muted-foreground">Trusted service</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Strawberry Plains Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-6">
              Why Strawberry Plains Loves SmashMeals
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Located between Knoxville and Jefferson City, Strawberry Plains residents deserve 
              convenient access to truly gluten-free meals. We deliver that—literally.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8">
                <Heart className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Safe for Celiac</h3>
                <p className="text-muted-foreground">
                  Our 100% gluten-free kitchen means zero risk of cross-contamination. 
                  Complete peace of mind for you and your family.
                </p>
              </Card>
              <Card className="p-8">
                <Home className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Local Quality</h3>
                <p className="text-muted-foreground">
                  We're based in Kingsport, just up the road. Supporting SmashMeals means 
                  supporting your East Tennessee neighbors.
                </p>
              </Card>
              <Card className="p-8">
                <ChefHat className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Chef-Prepared</h3>
                <p className="text-muted-foreground">
                  Restaurant-quality meals prepared fresh each week. 30+ rotating options 
                  for breakfast, lunch, and dinner.
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
                <p className="text-muted-foreground">Browse our weekly menu and order before Thursday 11:59 PM EST</p>
              </Card>

              <Card className="p-6 text-center">
                <Package className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Weekend Prep</h3>
                <p className="text-muted-foreground">Our chefs prepare your meals fresh over the weekend</p>
              </Card>

              <Card className="p-6 text-center">
                <Truck className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
                <p className="text-muted-foreground">Shipped Monday, arrives at your Strawberry Plains door in 2 days</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Nearby Areas */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-6">
              Also Serving Nearby Communities
            </h2>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {["Jefferson City", "Dandridge", "White Pine", "New Market", "Knoxville", 
                "Seymour", "Kodak", "Morristown", "Newport", "Baneberry"].map((area) => (
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
              Strawberry Plains Delivery FAQs
            </h2>
            <FAQSection faqs={faqs} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Ready for Gluten-Free in Strawberry Plains?
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

export default StrawberryPlains;
