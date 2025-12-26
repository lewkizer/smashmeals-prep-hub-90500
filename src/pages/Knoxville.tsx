import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import CitySchema from "@/components/CitySchema";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Package, CheckCircle } from "lucide-react";

const Knoxville = () => {
  const faqs = [
    {
      question: "Do you ship to Knoxville, TN?",
      answer: "Yes! We ship to all Knoxville neighborhoods via FedEx 2-day delivery. Free shipping on orders over $130. Your meals arrive Tuesday or Wednesday in insulated packaging."
    },
    {
      question: "Are your meals 100% gluten-free?",
      answer: "Absolutely. Every meal is prepared in our dedicated 100% gluten-free kitchen with zero cross-contamination risk. Safe for celiac disease."
    },
    {
      question: "How long do the meals last?",
      answer: "Our meals stay fresh for 5-7 days refrigerated or up to 6 months frozen—longer than most competitors."
    },
    {
      question: "Is there a minimum order for free shipping?",
      answer: "Yes, orders over $130 qualify for free shipping to Knoxville."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep Knoxville TN | SmashMeals Shipping</title>
        <meta name="description" content="Premium gluten-free meal prep shipped to Knoxville, TN. Chef-prepared, macro-counted meals delivered to your door. Order by Thursday for weekly delivery." />
        <meta name="keywords" content="meal prep Knoxville, gluten free Knoxville TN, healthy meal delivery Knoxville, prepared meals Knoxville Tennessee" />
        <link rel="canonical" href="https://smashmeals.com/knoxville" />
      </Helmet>

      <CitySchema cityName="Knoxville" state="Tennessee" stateAbbr="TN" />

      <Header />
      <PageBreadcrumb 
        parentPage={{ label: "Service Areas", href: "/service-areas" }} 
        currentPage="Knoxville, TN" 
      />

      <main className="min-h-screen">
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Now Shipping to Knoxville, TN</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Fueling Knoxville,<br />One Healthy Bite at a Time
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Fresh, gluten-free, chef-prepared meals delivered straight to your Knoxville doorstep — ready to heat and eat.
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
              How Shipping to Knoxville Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Order by Thursday</h3>
                <p className="text-muted-foreground">Browse menu and order by Thursday 11:59 PM</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">We Cook & Ship</h3>
                <p className="text-muted-foreground">Prepared Friday, shipped with ice packs via FedEx</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Delivered Fresh</h3>
                <p className="text-muted-foreground">Arrives at your Knoxville address Sunday-Monday</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              Knoxville Delivery Coverage
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <Package className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">All Knoxville Areas</h3>
                <p className="text-muted-foreground mb-4">We ship to all Knoxville zip codes:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Downtown Knoxville
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    UT Campus Area
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    West Knoxville / Farragut
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    North Knoxville / Fountain City
                  </li>
                </ul>
              </Card>
              <Card className="p-8">
                <Clock className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Fresh & Safe</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Insulated packaging
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Gel ice packs included
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    FedEx tracked shipping
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Stays fresh 5-7 days
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        <FAQSection faqs={faqs} />

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Ready for Convenient Meal Prep?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join Knoxville residents eating healthier with SmashMeals
            </p>
            <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="text-lg">
                Order Now - Ships to Knoxville
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Knoxville;
