import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import CitySchema from "@/components/CitySchema";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Truck, Package, Clock, Shield, ChefHat, Home, Star, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const WhitePine = () => {
  const faqs = [
    {
      question: "Do you deliver to White Pine, Tennessee?",
      answer: "Yes! SmashMeals delivers fresh, 100% gluten-free meals to White Pine and all surrounding Jefferson County communities including Jefferson City, Dandridge, and New Market."
    },
    {
      question: "How do I get meals delivered to White Pine?",
      answer: "We offer FedEx shipping to all White Pine addresses. Orders over $130 qualify for FREE shipping. Order by Thursday for next-week delivery."
    },
    {
      question: "Are your meals truly gluten-free?",
      answer: "Absolutely! Our entire kitchen in Kingsport is 100% dedicated gluten-free. No wheat, barley, or rye ever enters our facility—zero cross-contamination risk."
    },
    {
      question: "What kind of meals do you offer?",
      answer: "We offer 30+ rotating options weekly including breakfast, lunch, and dinner. High-protein, low-carb, and family-friendly options—all gluten-free."
    },
    {
      question: "How long do the meals last?",
      answer: "Meals stay fresh 5-7 days in the refrigerator or up to 3 months in the freezer. Perfect for weekly meal prep."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep White Pine TN | Fresh Delivery | SmashMeals</title>
        <meta name="description" content="Gluten-free meal prep delivered to White Pine, Tennessee. Fresh meals from your East Tennessee neighbors in Kingsport. Free shipping on orders over $130!" />
        <meta name="keywords" content="gluten free meal prep White Pine, meal delivery White Pine TN, healthy meal prep Jefferson County Tennessee, gluten free food White Pine, East Tennessee meal prep" />
        <link rel="canonical" href="https://smashmeals.com/white-pine" />
        <meta property="og:title" content="Gluten-Free Meal Prep White Pine TN | SmashMeals" />
        <meta property="og:description" content="Fresh gluten-free meal prep for White Pine, Tennessee. Local East Tennessee quality delivered to your door." />
        <meta property="og:url" content="https://smashmeals.com/white-pine" />
      </Helmet>

      <CitySchema cityName="White Pine" state="Tennessee" stateAbbr="TN" />

      <Header />
      <PageBreadcrumb parentPage={{ label: "Service Areas", href: "/service-areas" }} currentPage="White Pine" />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Now Shipping to White Pine, TN</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Gluten-Free Meal Prep<br />for White Pine
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Small town, big flavors. Fresh, 100% gluten-free meals from your East Tennessee 
                neighbors, delivered right to White Pine.
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
                <p className="text-sm text-muted-foreground">Dedicated kitchen</p>
              </Card>
              <Card className="p-6 text-center">
                <Home className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold">Local to You</h3>
                <p className="text-sm text-muted-foreground">East TN made</p>
              </Card>
              <Card className="p-6 text-center">
                <Truck className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold">Free Shipping</h3>
                <p className="text-sm text-muted-foreground">Orders $130+</p>
              </Card>
              <Card className="p-6 text-center">
                <Leaf className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold">Fresh Weekly</h3>
                <p className="text-sm text-muted-foreground">Never frozen</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Why White Pine Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-6">
              Why White Pine Families Love SmashMeals
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Living in a small town doesn't mean you can't eat well. SmashMeals brings 
              restaurant-quality, chef-prepared gluten-free meals right to your White Pine home.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8">
                <Home className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Your Neighbors</h3>
                <p className="text-muted-foreground">
                  We're based in Kingsport—just down the road. Supporting SmashMeals means 
                  supporting a local East Tennessee business.
                </p>
              </Card>
              <Card className="p-8">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Truly Gluten-Free</h3>
                <p className="text-muted-foreground">
                  Our dedicated gluten-free kitchen means complete peace of mind for families 
                  dealing with celiac disease or gluten sensitivity.
                </p>
              </Card>
              <Card className="p-8">
                <ChefHat className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Restaurant Quality</h3>
                <p className="text-muted-foreground">
                  Chef-prepared meals with premium ingredients. Healthy eating doesn't have 
                  to mean boring food—our meals prove it.
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
                <p className="text-muted-foreground">Browse our rotating menu and place your order before Thursday 11:59 PM</p>
              </Card>

              <Card className="p-6 text-center">
                <Package className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Fresh Preparation</h3>
                <p className="text-muted-foreground">Our chefs prepare your meals fresh over the weekend in our Kingsport kitchen</p>
              </Card>

              <Card className="p-6 text-center">
                <Truck className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">White Pine Delivery</h3>
                <p className="text-muted-foreground">Your meals arrive cold and fresh, ready to heat and enjoy</p>
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
              {["Jefferson City", "Dandridge", "New Market", "Morristown", "Newport", 
                "Strawberry Plains", "Baneberry", "Talbott", "Mosheim", "Bulls Gap"].map((area) => (
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
              White Pine Delivery FAQs
            </h2>
            <FAQSection faqs={faqs} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Ready to Eat Better in White Pine?
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

export default WhitePine;
