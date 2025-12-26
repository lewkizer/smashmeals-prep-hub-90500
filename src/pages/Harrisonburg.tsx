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

const Harrisonburg = () => {
  const faqs = [
    {
      question: "Do you deliver to Harrisonburg, VA?",
      answer: "Yes! We ship to Harrisonburg via FedEx 2-day delivery. Free shipping on orders over $130."
    },
    {
      question: "Are your meals safe for celiac disease?",
      answer: "Absolutely. Our 100% gluten-free kitchen has served customers with celiac disease safely for 8+ years with zero cross-contamination incidents."
    },
    {
      question: "Can I order meals for JMU students?",
      answer: "Yes! Many JMU students and athletes order SmashMeals for convenient, high-protein nutrition without dining hall hassles."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep Harrisonburg VA | SmashMeals Delivery</title>
        <meta name="description" content="Fresh gluten-free meal prep delivery to Harrisonburg, VA. Perfect for JMU students and Shenandoah Valley residents. High-protein, macro-counted meals." />
        <meta name="keywords" content="meal prep Harrisonburg VA, gluten free Harrisonburg, JMU meal prep, healthy meal delivery Harrisonburg" />
        <link rel="canonical" href="https://smashmeals.com/harrisonburg" />
      </Helmet>

      <CitySchema cityName="Harrisonburg" state="Virginia" stateAbbr="VA" />
      <Header />
      <PageBreadcrumb parentPage={{ label: "Service Areas", href: "/service-areas" }} currentPage="Harrisonburg, VA" />

      <main className="min-h-screen">
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Now Shipping to Harrisonburg, VA</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Gluten-Free Meal Prep<br />for Harrisonburg
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Fresh, chef-prepared meals delivered to Harrisonburg and JMU. High-protein, gluten-free, macro-counted.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="lg" className="text-lg">View This Week's Menu</Button>
                </a>
                <Link to="/"><Button variant="outline" size="lg" className="text-lg">Learn More</Button></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <Clock className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Order by Thursday</h3>
                <p className="text-muted-foreground">Place your order online</p>
              </Card>
              <Card className="p-6 text-center">
                <Package className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">We Prepare & Ship</h3>
                <p className="text-muted-foreground">Fresh prep, fast shipping</p>
              </Card>
              <Card className="p-6 text-center">
                <Truck className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Delivered Fresh</h3>
                <p className="text-muted-foreground">To Harrisonburg in 2 days</p>
              </Card>
            </div>
          </div>
        </section>

        <FAQSection faqs={faqs} />

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">Order SmashMeals Harrisonburg</h2>
            <p className="text-xl text-muted-foreground mb-8">Free shipping on orders over $130!</p>
            <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="text-lg">Order Now</Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Harrisonburg;
