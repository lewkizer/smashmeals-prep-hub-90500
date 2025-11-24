import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CitySchema from "@/components/CitySchema";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Truck, CheckCircle } from "lucide-react";

const Kingsport = () => {
  const faqs = [
    {
      question: "Where is SmashMeals located in Kingsport?",
      answer: "We're locally owned and operated right here in Kingsport! Our kitchen is at 2104 Knob Creek Rd in Johnson City, and we offer $12 delivery throughout Kingsport or pickup Sunday-Monday 5-7 PM."
    },
    {
      question: "Are all meals gluten-free?",
      answer: "Yes! Every single meal is prepared in our 100% gluten-free facility with no risk of cross-contamination. Perfect for celiac or gluten sensitivity."
    },
    {
      question: "How much does delivery cost in Kingsport?",
      answer: "$12 for home delivery throughout Kingsport including Colonial Heights, Downtown, Sullivan Gardens, and Bloomingdale. Get 10% off orders over $130."
    },
    {
      question: "When do I need to order?",
      answer: "Orders close Thursday at 11:59 PM. Meals are prepared fresh on Friday and ready for pickup or delivery Sunday-Monday."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep Kingsport TN | SmashMeals Local Delivery</title>
        <meta name="description" content="Kingsport's trusted gluten-free meal prep service since 2017. Fresh, chef-prepared meals with free local delivery. Order by Thursday for Sunday pickup." />
        <meta name="keywords" content="meal prep Kingsport, gluten free Kingsport TN, healthy meal delivery Kingsport, prepared meals Kingsport" />
        <link rel="canonical" href="https://smashmeals.com/kingsport" />
      </Helmet>

      <CitySchema cityName="Kingsport" state="Tennessee" stateAbbr="TN" />

      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Serving Kingsport, TN</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Kingsport's Original<br />Gluten-Free Meal Prep
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Locally owned and operated in Kingsport since 2017. Fresh, macro-counted meals with $12 home delivery prepared in our local kitchen every Friday.
              </p>
              <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="text-lg">
                  View This Week's Menu
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              How It Works in Kingsport
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Order by Thursday</h3>
                <p className="text-muted-foreground">Browse weekly menu and order online by Thursday 11:59 PM</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">We Cook Friday</h3>
                <p className="text-muted-foreground">Fresh preparation in our Kingsport kitchen every Friday</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Pickup/Delivery</h3>
                <p className="text-muted-foreground">$12 home delivery or pickup in Kingsport Sunday-Monday</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Kingsport Locations */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              Kingsport Pickup & Delivery
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <MapPin className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Pickup Location</h3>
                <p className="text-lg mb-2 font-semibold">SmashMeals Kitchen</p>
                <p className="text-muted-foreground mb-4">
                  2104 Knob Creek Rd<br />
                  Johnson City, TN 37604
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Pickup Hours:</strong><br />
                  Sunday: 5:00 PM - 7:00 PM<br />
                  Monday: 5:00 PM - 7:00 PM
                </p>
              </Card>

              <Card className="p-8">
                <Truck className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Kingsport Home Delivery - $12</h3>
                <p className="text-muted-foreground mb-4">
                  Home delivery throughout Kingsport including:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Colonial Heights
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Downtown Kingsport
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Sullivan Gardens
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Bloomingdale
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <strong>10% off orders over $130</strong>
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
              Why Kingsport Trusts SmashMeals
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Locally Owned", desc: "Kingsport-based since 2017" },
                { title: "100% Gluten-Free", desc: "Dedicated gluten-free facility" },
                { title: "Fresh Weekly", desc: "Never frozen, cooked Friday" },
                { title: "$12 Delivery", desc: "Throughout Kingsport area" }
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
              Experience Kingsport's Best Meal Prep
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join your neighbors who are eating healthier with SmashMeals
            </p>
            <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="text-lg">
                Order Now for This Week
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Kingsport;
