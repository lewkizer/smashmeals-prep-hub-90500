import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CitySchema from "@/components/CitySchema";
import { Button } from "@/components/ui/button";
import { MapPin, Truck, Clock, ChefHat, Leaf, Heart } from "lucide-react";
import FAQSection from "@/components/FAQSection";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";

const Harrogate = () => {
  const faqs = [
    {
      question: "Do you deliver to Harrogate, TN?",
      answer: "Yes! We deliver to Harrogate and Lincoln Memorial University. Order by Thursday for delivery the following week."
    },
    {
      question: "Are your meals 100% gluten-free?",
      answer: "Absolutely. Every meal is prepared in our dedicated gluten-free kitchen with zero cross-contamination risk. Safe for celiac disease."
    },
    {
      question: "Do you deliver to LMU?",
      answer: "Yes! LMU students and faculty can order SmashMeals for convenient, healthy meals delivered right to campus."
    },
    {
      question: "How long do the meals last?",
      answer: "Our meals stay fresh for 5-7 days refrigerated or up to 6 months frozen."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Meal Prep Delivery Harrogate TN | Gluten-Free Meals | SmashMeals</title>
        <meta name="description" content="Fresh gluten-free meal prep delivered to Harrogate, Tennessee. Chef-prepared meals near Lincoln Memorial University. Order healthy meals in Claiborne County!" />
        <meta name="keywords" content="meal prep Harrogate TN, gluten-free meals Harrogate, food delivery LMU, healthy meal delivery Claiborne County, Lincoln Memorial University meals" />
        <link rel="canonical" href="https://smashmeals.com/harrogate" />
      </Helmet>
      <CitySchema cityName="Harrogate" state="Tennessee" stateAbbr="TN" />
      
      <Header />
      <PageBreadcrumb parentPage={{ label: "Service Areas", href: "/service-areas" }} currentPage="Harrogate, TN" />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">Serving Harrogate & Lincoln Memorial University</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Gluten-Free Meal Prep Delivery in Harrogate, Tennessee
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Fresh, chef-prepared gluten-free meals delivered to Harrogate and the LMU campus. 
                Perfect for students, faculty, and families seeking healthy, convenient meals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8" asChild>
                  <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                    Order This Week's Menu
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                  <a href="/menu">View Full Menu</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              How Meal Prep Delivery Works in Harrogate
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChefHat className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">1. Choose Your Meals</h3>
                <p className="text-muted-foreground">
                  Browse our weekly rotating menu and select your favorite gluten-free dishes.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">2. We Prepare Fresh</h3>
                <p className="text-muted-foreground">
                  Our chefs prepare your meals fresh in our dedicated gluten-free kitchen.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">3. Delivered to You</h3>
                <p className="text-muted-foreground">
                  Your meals arrive fresh at your Harrogate home or campus, ready to enjoy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Harrogate Chooses SmashMeals
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-card p-6 rounded-xl border">
                <Leaf className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">100% Gluten-Free Kitchen</h3>
                <p className="text-muted-foreground text-sm">
                  No cross-contamination risk. Safe for celiac and gluten-sensitive customers.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl border">
                <Heart className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Perfect for Students</h3>
                <p className="text-muted-foreground text-sm">
                  LMU students love our convenient, healthy meals that fit busy academic schedules.
                </p>
              </div>
              <div className="bg-card p-6 rounded-xl border">
                <MapPin className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Local East TN Business</h3>
                <p className="text-muted-foreground text-sm">
                  Family-owned in the Tri-Cities, serving Claiborne County with care.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FAQSection faqs={faqs} />

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Eating Better in Harrogate?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join students and families near LMU who are saving time and eating healthier with SmashMeals.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
              <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                Order Your First Meals
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Harrogate;