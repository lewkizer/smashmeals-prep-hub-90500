import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CitySchema from "@/components/CitySchema";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Truck, Package, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Gastonia = () => {
  const faqs = [
    {
      question: "Do you deliver to Gastonia, NC?",
      answer: "Yes! We ship to Gastonia via FedEx 2-day delivery. Free shipping on orders over $130. Your meals arrive Tuesday or Wednesday in insulated packaging."
    },
    {
      question: "Are your meals really 100% gluten-free?",
      answer: "Absolutely. Every meal is prepared in our dedicated 100% gluten-free kitchen with zero cross-contamination risk. Safe for celiac disease."
    },
    {
      question: "How long do the meals last?",
      answer: "Our meals stay fresh for 5-7 days refrigerated or up to 6 months frozen—longer than most competitors."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep Gastonia NC | SmashMeals Delivery</title>
        <meta name="description" content="Fresh gluten-free meal prep delivery to Gastonia, NC. Chef-prepared meals shipped in 2 days. 30-45g protein, macro-counted, 100% gluten-free kitchen." />
        <meta name="keywords" content="meal prep Gastonia NC, gluten free Gastonia, healthy meal delivery Gastonia" />
        <link rel="canonical" href="https://smashmeals.com/gastonia" />
      </Helmet>

      <CitySchema cityName="Gastonia" state="North Carolina" stateAbbr="NC" />

      <Header />

      <main className="min-h-screen">
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Now Shipping to Gastonia, NC</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Gluten-Free Meal Prep<br />for Gastonia
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Fresh, chef-prepared gluten-free meals shipped to Gastonia. High-protein, macro-counted, delivered in 2 days.
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
                <p className="text-muted-foreground">Browse online, order by 11:59 PM Thursday</p>
              </Card>

              <Card className="p-6 text-center">
                <Package className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">We Prepare & Ship</h3>
                <p className="text-muted-foreground">Fresh prep, FedEx 2-day delivery</p>
              </Card>

              <Card className="p-6 text-center">
                <Truck className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Delivered Fresh</h3>
                <p className="text-muted-foreground">Arrives Tuesday/Wednesday to Gastonia</p>
              </Card>
            </div>
          </div>
        </section>

        <FAQSection faqs={faqs} />

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Order SmashMeals Gastonia
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

export default Gastonia;
