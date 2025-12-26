import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CitySchema from "@/components/CitySchema";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Truck, Package, Clock, Shield, ChefHat, Leaf, Star, Dumbbell, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Fayetteville = () => {
  const faqs = [
    {
      question: "Do you deliver gluten-free meals to Fayetteville, NC?",
      answer: "Yes! SmashMeals ships fresh, 100% gluten-free meals to Fayetteville, Fort Liberty (formerly Fort Bragg), and all Cumberland County communities."
    },
    {
      question: "Do you deliver to Fort Liberty/Fort Bragg?",
      answer: "Absolutely! We ship to both residential addresses and many military installations. Contact us for specific delivery options to your location on base."
    },
    {
      question: "What's the ordering deadline for Fayetteville delivery?",
      answer: "Order by Thursday at 11:59 PM EST to receive your meals the following week. Shipping typically takes 2-3 business days to Fayetteville."
    },
    {
      question: "Are your meals good for fitness and training?",
      answer: "Yes! Our high-protein options are popular with active-duty military, athletes, and fitness enthusiasts. Every meal displays full macros for easy tracking."
    },
    {
      question: "How long do meals last?",
      answer: "Meals stay fresh 5-7 days refrigerated or up to 3 months frozen. Perfect for meal prepping the whole week."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep Fayetteville NC | Fort Liberty | SmashMeals</title>
        <meta name="description" content="Gluten-free meal prep delivered to Fayetteville and Fort Liberty, NC. High-protein, chef-prepared meals from a dedicated gluten-free kitchen. Free shipping $130+!" />
        <meta name="keywords" content="gluten free meal prep Fayetteville, meal delivery Fort Liberty, healthy meal prep Fayetteville NC, gluten free food delivery Fort Bragg, military meal prep Fayetteville" />
        <link rel="canonical" href="https://smashmeals.com/fayetteville" />
        <meta property="og:title" content="Gluten-Free Meal Prep Fayetteville NC | SmashMeals" />
        <meta property="og:description" content="Fresh gluten-free meal prep for Fayetteville and Fort Liberty. High-protein options for military and fitness." />
        <meta property="og:url" content="https://smashmeals.com/fayetteville" />
      </Helmet>

      <CitySchema cityName="Fayetteville" state="North Carolina" stateAbbr="NC" />

      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Now Shipping to Fayetteville & Fort Liberty, NC</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Gluten-Free Meal Prep<br />for Fayetteville
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Fuel your mission with 100% gluten-free, high-protein meals. Perfect for military families, 
                active-duty personnel, and Fayetteville's fitness community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="lg" className="text-lg px-8">
                    View This Week's Menu
                  </Button>
                </a>
                <Link to="/athletes">
                  <Button variant="outline" size="lg" className="text-lg">
                    Athlete Meals
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
                <h3 className="font-bold">High Protein</h3>
                <p className="text-sm text-muted-foreground">40-60g per meal</p>
              </Card>
              <Card className="p-6 text-center">
                <Truck className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold">Free Shipping</h3>
                <p className="text-sm text-muted-foreground">Orders $130+</p>
              </Card>
              <Card className="p-6 text-center">
                <Target className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold">Macro-Tracked</h3>
                <p className="text-sm text-muted-foreground">Full nutrition info</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Fayetteville Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-6">
              Built for Military Families & Athletes
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Fayetteville's military community demands peak performance. SmashMeals delivers 
              the nutrition you need without the gluten you don't—prepared in a dedicated facility 
              that's never seen a wheat product.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8">
                <Dumbbell className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Performance Nutrition</h3>
                <p className="text-muted-foreground">
                  High-protein, macro-balanced meals designed to fuel training, recovery, and 
                  peak performance. Popular with soldiers, athletes, and fitness enthusiasts.
                </p>
              </Card>
              <Card className="p-8">
                <Shield className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Zero Cross-Contamination</h3>
                <p className="text-muted-foreground">
                  Our entire kitchen is 100% gluten-free. No wheat, barley, or rye ever enters 
                  our facility—guaranteed safe for celiac disease and gluten sensitivity.
                </p>
              </Card>
              <Card className="p-8">
                <Leaf className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Convenient & Fresh</h3>
                <p className="text-muted-foreground">
                  Ready in 2-3 minutes. Perfect for busy military schedules, PT mornings, 
                  and families on the go. Just heat, eat, and get back to your mission.
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
                <p className="text-muted-foreground">Choose from 30+ weekly options before Thursday at 11:59 PM EST</p>
              </Card>

              <Card className="p-6 text-center">
                <Package className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Fresh Preparation</h3>
                <p className="text-muted-foreground">Our chefs prepare your meals fresh over the weekend</p>
              </Card>

              <Card className="p-6 text-center">
                <Truck className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Fayetteville Delivery</h3>
                <p className="text-muted-foreground">Arrives cold and fresh via FedEx within 2-3 days</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Areas Served */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-6">
              Serving Fayetteville & Fort Liberty
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-8">
              We deliver to all Fayetteville area communities:
            </p>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {["Downtown Fayetteville", "Fort Liberty", "Hope Mills", "Spring Lake", "Stedman", 
                "Eastover", "Raeford", "Southern Pines", "Pinehurst", "Sanford",
                "Lumberton", "Pembroke", "Laurinburg", "Dunn", "Clinton"].map((area) => (
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
              Fayetteville Delivery FAQs
            </h2>
            <FAQSection faqs={faqs} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Fuel Your Mission in Fayetteville
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Free shipping on orders over $130. High-protein, gluten-free, mission-ready.
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

export default Fayetteville;
