import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CitySchema from "@/components/CitySchema";
import FAQSection from "@/components/FAQSection";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Truck, CheckCircle } from "lucide-react";

const ChurchHill = () => {
  const faqs = [
    {
      question: "Do you deliver to Church Hill, TN?",
      answer: "Yes! We offer $12 home delivery to Church Hill, Mount Carmel, and the Rogersville area."
    },
    {
      question: "Are your meals 100% gluten-free?",
      answer: "Absolutely. Every meal is prepared in our dedicated 100% gluten-free kitchen with zero cross-contamination risk."
    },
    {
      question: "How long do the meals stay fresh?",
      answer: "Our meals stay fresh for 5-7 days refrigerated or up to 6 months frozen."
    },
    {
      question: "What's the ordering deadline?",
      answer: "Order by Thursday at 11:59 PM. We prepare your meals fresh on Friday for delivery Sunday-Monday."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep Church Hill TN | SmashMeals</title>
        <meta name="description" content="Fresh gluten-free meal prep delivered to Church Hill, TN. Chef-prepared meals with FREE local delivery." />
        <meta name="keywords" content="meal prep Church Hill TN, gluten free Church Hill Tennessee, healthy meals Church Hill" />
        <link rel="canonical" href="https://smashmeals.com/church-hill" />
      </Helmet>

      <CitySchema cityName="Church Hill" state="Tennessee" stateAbbr="TN" />

      <Header />
      <PageBreadcrumb parentPage={{ label: "Service Areas", href: "/service-areas" }} currentPage="Church Hill, TN" />

      <main className="min-h-screen">
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Serving Church Hill, TN</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Church Hill's<br />Gluten-Free Meal Prep
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Fresh, chef-prepared meals with $12 home delivery to Church Hill.
              </p>
              <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="text-lg">
                  View This Week's Menu
                </Button>
              </a>
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
                <h3 className="text-xl font-bold mb-2">Order Thursday</h3>
                <p className="text-muted-foreground">Order by Thursday 11:59 PM</p>
              </Card>
              <Card className="p-6 text-center">
                <Truck className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Fresh Prep</h3>
                <p className="text-muted-foreground">Made fresh Friday</p>
              </Card>
              <Card className="p-6 text-center">
                <MapPin className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Home Delivery</h3>
                <p className="text-muted-foreground">$12 delivery Sunday-Monday</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <Card className="p-8 max-w-2xl mx-auto">
              <Truck className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Church Hill Home Delivery - $12</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  All Church Hill addresses
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Mount Carmel area
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Rogersville vicinity
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <strong>10% off orders over $130</strong>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        <FAQSection faqs={faqs} />

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Start Eating Better
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              $12 home delivery • 10% off orders over $130
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

export default ChurchHill;
