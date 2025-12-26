import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CitySchema from "@/components/CitySchema";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Truck, Package, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";

const Richmond = () => {
  const faqItems = [
    {
      question: "Do you deliver meal prep to Richmond VA?",
      answer: "Yes! We ship fresh, chef-prepared meals to Richmond, Virginia every week. Order by Thursday for delivery the following week."
    },
    {
      question: "Are all meals gluten-free?",
      answer: "Yes, 100%. Our entire kitchen is dedicated gluten-free with zero cross-contamination. Safe for celiac and gluten sensitivity."
    },
    {
      question: "How much do meals cost?",
      answer: "Meals range from $10-14 per serving with FREE shipping on orders over $130 to Richmond."
    },
    {
      question: "How long do the meals stay fresh?",
      answer: "Our meals stay fresh for 5-7 days refrigerated or up to 6 months frozen."
    },
    {
      question: "Can I see the nutrition facts?",
      answer: "Yes! Every meal includes detailed macros—calories, protein, carbs, and fats—so you can track your nutrition with precision."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep Richmond VA | SmashMeals Delivery</title>
        <meta name="description" content="Healthy, gluten-free meal prep in Richmond VA. Chef-crafted meals for busy lives." />
        <meta name="keywords" content="Richmond meal prep, healthy meal delivery Richmond VA" />
        <link rel="canonical" href="https://smashmeals.com/richmond" />
      </Helmet>

      <CitySchema cityName="Richmond" state="Virginia" stateAbbr="VA" />

      <Header />
      <PageBreadcrumb parentPage={{ label: "Service Areas", href: "/service-areas" }} currentPage="Richmond, VA" />

      <main className="min-h-screen">
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Now Shipping to Richmond, VA</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Gluten-Free Meal Prep<br />Delivered to Richmond
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Fresh, chef-prepared meals delivered to Richmond. High-protein, gluten-free, and macro-counted.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="lg" className="text-lg">
                    View This Week's Menu
                  </Button>
                </a>
                <Link to="/">
                  <Button variant="outline" size="lg" className="text-lg">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <Clock className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Order by Thursday</h3>
                <p className="text-muted-foreground">Browse menu and order online</p>
              </Card>

              <Card className="p-6 text-center">
                <Package className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">We Prepare & Ship</h3>
                <p className="text-muted-foreground">Fresh prep Friday, ships Monday</p>
              </Card>

              <Card className="p-6 text-center">
                <Truck className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Arrives Fresh</h3>
                <p className="text-muted-foreground">Delivered to Richmond</p>
              </Card>
            </div>
          </div>
        </section>

        <FAQSection faqs={faqItems} />

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Order Smash Meals Richmond Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Free shipping on orders over $130!
            </p>
            <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="text-lg">
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

export default Richmond;
