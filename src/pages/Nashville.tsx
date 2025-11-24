import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CitySchema from "@/components/CitySchema";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Truck, CheckCircle, Package, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Nashville = () => {
  const faqs = [
    {
      question: "Do you deliver to Nashville, TN?",
      answer: "Yes! We ship to all Nashville neighborhoods via FedEx 2-day delivery including Downtown, East Nashville, 12 South, Germantown, and surrounding areas. Free shipping on orders over $130."
    },
    {
      question: "Are your meals 100% gluten-free?",
      answer: "Absolutely. Every meal is prepared in our dedicated 100% gluten-free kitchen with zero cross-contamination risk. Safe for celiac disease."
    },
    {
      question: "How fresh are meals when they arrive in Nashville?",
      answer: "Meals are cooked fresh on Friday, shipped Monday, and arrive Wednesday. They stay fresh for 5-7 days refrigerated or up to 6 months frozen."
    },
    {
      question: "Do I need a subscription?",
      answer: "No! Order only when you need meals. No contracts, no recurring charges, no commitment required."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep Nashville TN | SmashMeals Delivery</title>
        <meta name="description" content="Gluten-free, chef-prepared meal prep delivered across Nashville. Eat clean, live balanced." />
        <meta name="keywords" content="meal prep Nashville, healthy delivery Nashville, gluten-free Nashville meals" />
        <link rel="canonical" href="https://smashmeals.com/nashville" />
        <meta property="og:title" content="Gluten-Free Meal Prep Nashville TN | SmashMeals" />
        <meta property="og:description" content="Gluten-free, chef-prepared meal prep delivered across Nashville. Eat clean, live balanced." />
        <meta property="og:url" content="https://smashmeals.com/nashville" />
      </Helmet>

      <CitySchema cityName="Nashville" state="Tennessee" stateAbbr="TN" />

      <Header />

      <main className="min-h-screen">
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Now Shipping to Nashville, TN</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Clean Fuel<br />for Music City
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Smash Meals delivers chef-prepared, gluten-free meals designed for life on the go.
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

        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              From studio sessions to the gym, Nashville runs on energy. Smash Meals brings gluten-free, macro-balanced meals to your door — perfect for artists, athletes, and families who want healthy food without compromise.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              Top Benefits
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center">
                <CheckCircle className="w-10 h-10 text-primary mb-4 mx-auto" />
                <h3 className="text-2xl font-bold mb-4">Convenient Weekly Delivery</h3>
                <p className="text-muted-foreground">No subscription required</p>
              </Card>

              <Card className="p-8 text-center">
                <CheckCircle className="w-10 h-10 text-primary mb-4 mx-auto" />
                <h3 className="text-2xl font-bold mb-4">Fresh, Never Frozen</h3>
                <p className="text-muted-foreground">Made weekly in our kitchen</p>
              </Card>

              <Card className="p-8 text-center">
                <CheckCircle className="w-10 h-10 text-primary mb-4 mx-auto" />
                <h3 className="text-2xl font-bold mb-4">Designed for Balance</h3>
                <p className="text-muted-foreground">Macro-counted for performance</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <Clock className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Order by Thursday</h3>
                <p className="text-muted-foreground">Browse and order online</p>
              </Card>

              <Card className="p-6 text-center">
                <Package className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">We Prep & Ship</h3>
                <p className="text-muted-foreground">Fresh made, fast shipped</p>
              </Card>

              <Card className="p-6 text-center">
                <Truck className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Enjoy</h3>
                <p className="text-muted-foreground">Delivered to Nashville</p>
              </Card>
            </div>
          </div>
        </section>

        <FAQSection faqs={faqs} />

        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Eat Like a Pro. Order Smash Meals in Nashville Today.
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

export default Nashville;
