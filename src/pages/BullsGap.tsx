import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CitySchema from "@/components/CitySchema";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Truck, CheckCircle, Leaf, Heart, UtensilsCrossed, Award, Gift, Home } from "lucide-react";
import { Link } from "react-router-dom";

const BullsGap = () => {
  const faqs = [
    {
      question: "Where is the Bulls Gap pickup location?",
      answer: "Our Bulls Gap pickup location serves customers from Morristown, Greeneville, Rogersville, and surrounding areas. We'll provide the exact address when you place your order. Pickup is available Sunday and Monday from 5-7 PM."
    },
    {
      question: "Is pickup at Bulls Gap free?",
      answer: "Yes! Pickup at Bulls Gap is completely free. We also offer FREE home delivery within Bulls Gap and the immediate surrounding area."
    },
    {
      question: "What's the ordering deadline?",
      answer: "Place your order by Thursday at 11:59 PM for pickup or delivery that weekend. We prepare all meals fresh on Friday."
    },
    {
      question: "Are your meals safe for celiac disease?",
      answer: "Absolutely. Our entire kitchen in Kingsport is 100% gluten-free with no shared equipment. Zero risk of cross-contamination."
    },
    {
      question: "How long do SmashMeals stay fresh?",
      answer: "Our meals stay fresh for 5-7 days refrigerated or up to 6 months frozen. This gives you flexibility for the whole week."
    },
    {
      question: "Can customers from other towns pick up at Bulls Gap?",
      answer: "Yes! Our Bulls Gap location is popular with customers from Morristown (15 min), Greeneville (20 min), Rogersville (15 min), and other nearby towns. It's a convenient central location for East Tennessee."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep Bulls Gap TN | FREE Pickup & Delivery | SmashMeals</title>
        <meta name="description" content="Fresh gluten-free meal prep in Bulls Gap, TN with FREE pickup and local delivery. Central location for Morristown, Greeneville, and Rogersville. 100% gluten-free kitchen." />
        <meta name="keywords" content="meal prep Bulls Gap TN, gluten free Bulls Gap Tennessee, meal pickup Bulls Gap, free meal delivery Bulls Gap, prepared meals East Tennessee" />
        <link rel="canonical" href="https://smashmeals.com/bulls-gap" />
      </Helmet>

      <CitySchema cityName="Bulls Gap" state="Tennessee" stateAbbr="TN" />

      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-accent/10 via-background to-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                <Gift className="w-5 h-5" />
                <span className="font-semibold">FREE Pickup & Delivery!</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Bulls Gap Pickup Location</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Bulls Gap<br />Meal Prep Pickup Hub
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Your convenient central location for fresh, gluten-free meal prep. FREE pickup for Morristown, Greeneville, and Rogersville customers, plus FREE local delivery in Bulls Gap.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="lg" className="text-lg">
                    View This Week's Menu
                  </Button>
                </a>
                <Link to="/how-it-works">
                  <Button variant="outline" size="lg" className="text-lg">
                    Learn How It Works
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Bulls Gap */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-4">
              The Central Hub for East Tennessee Meal Prep
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Bulls Gap's strategic location makes it the perfect pickup point for customers across East Tennessee. Save on shipping and get your meals conveniently!
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <MapPin className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Central Location</h3>
                <p className="text-muted-foreground">Convenient for Morristown, Greeneville, Rogersville, and surrounding communities. Quick drive from anywhere!</p>
              </Card>

              <Card className="p-6 text-center">
                <Gift className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">FREE Pickup</h3>
                <p className="text-muted-foreground">No shipping fees when you pick up at Bulls Gap. Keep more money in your pocket while eating healthy!</p>
              </Card>

              <Card className="p-6 text-center">
                <Leaf className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">100% Gluten-Free</h3>
                <p className="text-muted-foreground">Every meal from our dedicated gluten-free kitchen. Safe for celiac disease and gluten sensitivity.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              How Bulls Gap Pickup Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Order by Thursday</h3>
                <p className="text-muted-foreground">Browse our weekly menu and place your order online by Thursday 11:59 PM</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <UtensilsCrossed className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Fresh Prep Friday</h3>
                <p className="text-muted-foreground">Our chefs prepare your meals fresh in our certified gluten-free kitchen</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">FREE Pickup Sun-Mon</h3>
                <p className="text-muted-foreground">Pick up at Bulls Gap Sunday or Monday from 5-7 PM—completely free!</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Pickup & Delivery Options */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              Bulls Gap Pickup & Delivery
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border-primary/30 bg-primary/5">
                <MapPin className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">FREE Pickup at Bulls Gap</h3>
                <p className="text-lg mb-4 font-semibold text-primary">Central Location for Multiple Towns!</p>
                <p className="text-muted-foreground mb-4">
                  Our Bulls Gap location serves customers from:
                </p>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Morristown (15 minute drive)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Greeneville (20 minute drive)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Rogersville (15 minute drive)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Whitesburg, Talbott & more
                  </li>
                </ul>
                <div className="bg-background p-4 rounded-lg">
                  <p className="font-semibold mb-2">Pickup Hours:</p>
                  <p className="text-muted-foreground">Sunday: 5:00 PM - 7:00 PM</p>
                  <p className="text-muted-foreground">Monday: 5:00 PM - 7:00 PM</p>
                </div>
              </Card>

              <Card className="p-8">
                <Home className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">FREE Local Delivery</h3>
                <p className="text-muted-foreground mb-4">
                  Live in Bulls Gap? We deliver right to your door for FREE!
                </p>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    All Bulls Gap addresses
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Sunday-Monday delivery window
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    No minimum order required
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Fresh from our kitchen to you
                  </li>
                </ul>
                <div className="border-t pt-4">
                  <p className="text-primary font-bold text-xl">100% FREE Delivery</p>
                  <p className="text-muted-foreground text-sm">No shipping fees, no delivery charges</p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Drive Times */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-8">
              Quick Drive from Anywhere in East TN
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Bulls Gap is conveniently located along Highway 11E, making it an easy stop for customers throughout the region.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="p-4 text-center">
                <p className="font-bold text-lg">Morristown</p>
                <p className="text-primary font-bold text-2xl">15 min</p>
              </Card>
              <Card className="p-4 text-center">
                <p className="font-bold text-lg">Rogersville</p>
                <p className="text-primary font-bold text-2xl">15 min</p>
              </Card>
              <Card className="p-4 text-center">
                <p className="font-bold text-lg">Greeneville</p>
                <p className="text-primary font-bold text-2xl">20 min</p>
              </Card>
              <Card className="p-4 text-center">
                <p className="font-bold text-lg">Kingsport</p>
                <p className="text-primary font-bold text-2xl">30 min</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Why SmashMeals */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              Why Choose SmashMeals
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <Leaf className="w-10 h-10 text-primary mb-4 mx-auto" />
                <h3 className="text-lg font-bold mb-2">Celiac Safe</h3>
                <p className="text-muted-foreground text-sm">100% gluten-free kitchen, zero cross-contamination</p>
              </Card>
              <Card className="p-6 text-center">
                <Heart className="w-10 h-10 text-primary mb-4 mx-auto" />
                <h3 className="text-lg font-bold mb-2">Fresh Weekly</h3>
                <p className="text-muted-foreground text-sm">Prepared fresh every Friday, never frozen at delivery</p>
              </Card>
              <Card className="p-6 text-center">
                <UtensilsCrossed className="w-10 h-10 text-primary mb-4 mx-auto" />
                <h3 className="text-lg font-bold mb-2">Macro-Counted</h3>
                <p className="text-muted-foreground text-sm">Full nutrition info on every meal for easy tracking</p>
              </Card>
              <Card className="p-6 text-center">
                <Award className="w-10 h-10 text-primary mb-4 mx-auto" />
                <h3 className="text-lg font-bold mb-2">8+ Years Trusted</h3>
                <p className="text-muted-foreground text-sm">Serving East Tennessee since 2016</p>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection faqs={faqs} />

        {/* Final CTA */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Ready for FREE Pickup at Bulls Gap?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Skip the shipping fees! Order now and pick up your fresh, gluten-free meals at our convenient Bulls Gap location.
            </p>
            <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="lg" className="text-lg">
                Order Now - FREE Pickup
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default BullsGap;
