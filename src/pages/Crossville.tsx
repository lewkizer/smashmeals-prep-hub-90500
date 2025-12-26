import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CitySchema from "@/components/CitySchema";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Truck, Package, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import FAQSection from "@/components/FAQSection";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";

const Crossville = () => {
  const faqs = [
    {
      question: "Do you deliver to Crossville, TN?",
      answer: "Yes! We ship to Crossville via FedEx. Free shipping on orders over $130. Meals arrive in insulated packaging."
    },
    {
      question: "Are your meals 100% gluten-free?",
      answer: "Absolutely. Every meal is prepared in our dedicated gluten-free kitchen with zero cross-contamination risk. Safe for celiac disease."
    },
    {
      question: "Do you serve Cumberland County?",
      answer: "Yes! We deliver to all Cumberland County addresses including Crossville, Fairfield Glade, and surrounding areas."
    },
    {
      question: "How long do the meals last?",
      answer: "Our meals stay fresh for 5-7 days refrigerated or up to 6 months frozen—longer than most competitors."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep Crossville TN | SmashMeals Delivery</title>
        <meta name="description" content="Fresh gluten-free meal prep delivery to Crossville, TN. Chef-prepared meals for Cumberland County." />
        <meta name="keywords" content="meal prep Crossville, gluten free Crossville TN, healthy meal delivery Crossville" />
        <link rel="canonical" href="https://smashmeals.com/crossville" />
      </Helmet>

      <CitySchema cityName="Crossville" state="Tennessee" stateAbbr="TN" />

      <Header />
      <PageBreadcrumb parentPage={{ label: "Service Areas", href: "/service-areas" }} currentPage="Crossville, TN" />

      <main className="min-h-screen">
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Now Shipping to Crossville, TN</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Gluten-Free Meal Prep<br />for Crossville
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Fresh, chef-prepared meals delivered to Crossville and Cumberland County.
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
                <p className="text-muted-foreground">Place your order online</p>
              </Card>

              <Card className="p-6 text-center">
                <Package className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">We Prepare & Ship</h3>
                <p className="text-muted-foreground">Fresh prep, fast shipping</p>
              </Card>

              <Card className="p-6 text-center">
                <Truck className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Enjoy</h3>
                <p className="text-muted-foreground">Delivered to Crossville</p>
              </Card>
            </div>
          </div>
        </section>

        <FAQSection faqs={faqs} />

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Order SmashMeals Crossville
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

export default Crossville;
