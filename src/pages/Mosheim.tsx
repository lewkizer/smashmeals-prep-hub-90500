import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CitySchema from "@/components/CitySchema";
import FAQSection from "@/components/FAQSection";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Truck, CheckCircle, Dumbbell } from "lucide-react";

const Mosheim = () => {
  const faqs = [
    { question: "Do you deliver to Mosheim, TN?", answer: "Yes! We offer FREE home delivery or pickup at Center of Strength and CrossFit Arcane." },
    { question: "Are meals gluten-free?", answer: "Yes. Every meal is prepared in our dedicated 100% gluten-free kitchen." },
    { question: "When can I pick up?", answer: "Sunday-Monday 5:00 PM - 7:00 PM at either location." }
  ];
  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep Mosheim TN | SmashMeals Delivery</title>
        <meta name="description" content="Fresh gluten-free meal prep delivered to Mosheim, TN. Pickup at Center of Strength or CrossFit Arcane. FREE home delivery available." />
        <meta name="keywords" content="meal prep Mosheim TN, gluten free Mosheim Tennessee, healthy meals Mosheim, fitness meals Mosheim" />
        <link rel="canonical" href="https://smashmeals.com/mosheim" />
      </Helmet>

      <CitySchema cityName="Mosheim" state="Tennessee" stateAbbr="TN" />

      <Header />
      <PageBreadcrumb parentPage={{ label: "Service Areas", href: "/service-areas" }} currentPage="Mosheim, TN" />

      <main className="min-h-screen">
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Serving Mosheim, TN</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Mosheim's Choice for<br />Gluten-Free Meal Prep
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Fresh, chef-prepared meals with convenient pickup at Center of Strength, CrossFit Arcane, or FREE home delivery.
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
              How It Works in Mosheim
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Order by Thursday</h3>
                <p className="text-muted-foreground">Browse and order by Thursday 11:59 PM</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Fresh Prep Friday</h3>
                <p className="text-muted-foreground">Cooked fresh locally</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Multiple Options</h3>
                <p className="text-muted-foreground">2 pickup locations or FREE delivery</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              Mosheim Pickup & Delivery Options
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 border-primary/20">
                <Dumbbell className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Center of Strength</h3>
                <p className="text-muted-foreground mb-4">
                  Your local fitness center<br />
                  <span className="text-sm text-primary">Perfect for gym members!</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Pickup:</strong><br />
                  Sunday: 5:00 PM - 7:00 PM<br />
                  Monday: 5:00 PM - 7:00 PM
                </p>
              </Card>

              <Card className="p-8 border-primary/20">
                <Dumbbell className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">CrossFit Arcane</h3>
                <p className="text-muted-foreground mb-4">
                  Alternative pickup location<br />
                  <span className="text-sm text-primary">Great for CrossFitters!</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Pickup:</strong><br />
                  Sunday: 5:00 PM - 7:00 PM<br />
                  Monday: 5:00 PM - 7:00 PM
                </p>
              </Card>

              <Card className="p-8">
                <Truck className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">FREE Home Delivery</h3>
                <p className="text-muted-foreground mb-4">
                  Prefer delivery? We've got you covered!
                </p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    All Mosheim addresses
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Sunday-Monday delivery
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
              Choose What Works Best for You
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Two convenient pickup locations or FREE home delivery to Mosheim
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

export default Mosheim;
