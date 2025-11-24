import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CitySchema from "@/components/CitySchema";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Package, CheckCircle } from "lucide-react";

const Asheville = () => {
  const faqs = [
    {
      question: "Do you ship to Asheville, NC?",
      answer: "Yes! We ship to all Asheville zip codes via FedEx 2-day delivery. Order by Thursday, and your meals arrive Sunday-Monday in insulated packaging with ice packs."
    },
    {
      question: "Are your meals 100% gluten-free?",
      answer: "Absolutely. Every meal is prepared in our dedicated 100% gluten-free kitchen with zero cross-contamination risk. Safe for celiac disease."
    },
    {
      question: "How long will meals stay fresh during shipping?",
      answer: "Meals are packed with gel ice packs in insulated containers and stay fresh during transit. Once delivered, they last 5-7 days refrigerated or up to 6 months frozen."
    },
    {
      question: "Is there free shipping to Asheville?",
      answer: "Yes! Orders over $130 qualify for free shipping to Asheville."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep Asheville NC | SmashMeals Shipping</title>
        <meta name="description" content="Fresh gluten-free meal prep shipped to Asheville, NC. Chef-prepared, macro-counted meals delivered to your door. Order by Thursday for weekly delivery." />
        <meta name="keywords" content="meal prep Asheville, gluten free Asheville NC, healthy meal delivery Asheville, prepared meals Asheville" />
        <link rel="canonical" href="https://smashmeals.com/asheville" />
      </Helmet>

      <CitySchema cityName="Asheville" state="North Carolina" stateAbbr="NC" />

      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Now Shipping to Asheville, NC</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Asheville's Clean-Eating<br />Meal Prep Solution
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Gluten-free, high-protein meals crafted for mountain living — delivered fresh each week from Smash Meals.
              </p>
              <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="text-lg">
                  View This Week's Menu
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* How Shipping Works */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              How Shipping to Asheville Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Order by Thursday</h3>
                <p className="text-muted-foreground">Place your order online by Thursday at 11:59 PM</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">We Cook & Ship</h3>
                <p className="text-muted-foreground">Meals prepared Friday, shipped via FedEx with ice packs</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Delivered to You</h3>
                <p className="text-muted-foreground">Arrives at your Asheville address Sunday-Monday</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Asheville Delivery Info */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              Asheville Delivery Details
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <Package className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Shipping Coverage</h3>
                <p className="text-muted-foreground mb-4">
                  We ship to all Asheville zip codes including:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Downtown Asheville (28801)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    West Asheville (28806)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    North Asheville (28804, 28805)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    South Asheville (28803)
                  </li>
                </ul>
              </Card>

              <Card className="p-8">
                <Clock className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Fresh & Safe</h3>
                <p className="text-muted-foreground mb-4">
                  Your meals arrive fresh and ready to enjoy:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Packed with gel ice packs
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Insulated shipping containers
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    FedEx tracked delivery
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Stays fresh 5-7 days refrigerated
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              Why Asheville Chooses SmashMeals
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "100% Gluten-Free", desc: "Dedicated gluten-free kitchen" },
                { title: "Macro-Counted", desc: "Nutritional info on every meal" },
                { title: "Weekly Variety", desc: "New menu every Monday" },
                { title: "No Subscription", desc: "Order only when you want" }
              ].map((benefit) => (
                <Card key={benefit.title} className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <FAQSection faqs={faqs} />

        {/* CTA */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Start Your Healthy Eating Journey
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join Asheville residents enjoying convenient, gluten-free meal prep
            </p>
            <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="text-lg">
                Order Now - Ships to Asheville
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Asheville;
