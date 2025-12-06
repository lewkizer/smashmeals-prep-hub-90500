import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CitySchema from "@/components/CitySchema";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Truck, Package, Clock, Leaf, Heart, CheckCircle, UtensilsCrossed, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Athens = () => {
  const faqs = [
    {
      question: "Do you deliver to Athens, TN?",
      answer: "Yes! We ship to Athens and all of McMinn County via FedEx 2-day delivery. Your meals arrive fresh in insulated packaging with gel ice packs. Free shipping on orders over $130."
    },
    {
      question: "Are your meals safe for celiac disease?",
      answer: "Absolutely. Every SmashMeals meal is prepared in our dedicated 100% gluten-free kitchen in Kingsport. There's zero risk of cross-contamination, making our meals safe for those with celiac disease and gluten sensitivity."
    },
    {
      question: "How long do SmashMeals stay fresh?",
      answer: "Our meals stay fresh for 5-7 days in the refrigerator or up to 6 months in the freezer. This extended shelf life gives you flexibility throughout the week."
    },
    {
      question: "What's the ordering deadline for Athens delivery?",
      answer: "Place your order by Thursday at 11:59 PM. We prepare your meals fresh on Friday and ship them out for delivery early the following week."
    },
    {
      question: "Is there pickup available near Athens?",
      answer: "While we don't have a pickup location in Athens, we do offer affordable shipping to McMinn County. The $25 shipping fee is waived on orders over $130, and you get 10% off your entire order!"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep Athens TN | SmashMeals Delivery to McMinn County</title>
        <meta name="description" content="Fresh gluten-free meal prep delivered to Athens, TN and McMinn County. Chef-prepared, macro-counted meals shipped weekly. 100% gluten-free kitchen, safe for celiac. Order by Thursday!" />
        <meta name="keywords" content="meal prep Athens TN, gluten free Athens Tennessee, healthy meal delivery Athens, McMinn County meal prep, prepared meals Athens TN, celiac safe meals Athens" />
        <link rel="canonical" href="https://smashmeals.com/athens" />
      </Helmet>

      <CitySchema cityName="Athens" state="Tennessee" stateAbbr="TN" />

      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-accent/10 via-background to-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Now Shipping to Athens & McMinn County, TN</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Gluten-Free Meal Prep<br />for Athens, Tennessee
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Fresh, chef-prepared meals delivered to Athens and McMinn County. 100% gluten-free with complete macro tracking—perfect for busy families, athletes, and anyone prioritizing their health.
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

        {/* Why Athens Chooses SmashMeals */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-4">
              Why Athens Families Choose SmashMeals
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              From busy professionals working in McMinn County to families juggling activities, here's why Athens residents trust SmashMeals for their weekly nutrition.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <Leaf className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">100% Gluten-Free Kitchen</h3>
                <p className="text-muted-foreground">Our entire facility is gluten-free—no shared equipment, no cross-contamination risk. Safe for celiac disease and gluten sensitivity.</p>
              </Card>

              <Card className="p-6 text-center">
                <UtensilsCrossed className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Chef-Prepared Weekly</h3>
                <p className="text-muted-foreground">Every meal is made fresh in our Kingsport kitchen. No preservatives, no fillers—just quality ingredients and restaurant-quality taste.</p>
              </Card>

              <Card className="p-6 text-center">
                <Award className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Trusted 8+ Years</h3>
                <p className="text-muted-foreground">We've been serving East Tennessee since 2016. Join thousands of happy customers who've made SmashMeals part of their weekly routine.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              How Shipping to Athens Works
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                <Clock className="w-8 h-8 text-primary mb-3 mx-auto" />
                <h3 className="text-lg font-bold mb-2">Order by Thursday</h3>
                <p className="text-muted-foreground text-sm">Browse our rotating weekly menu and place your order by Thursday 11:59 PM</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                <UtensilsCrossed className="w-8 h-8 text-primary mb-3 mx-auto" />
                <h3 className="text-lg font-bold mb-2">Fresh Prep Friday</h3>
                <p className="text-muted-foreground text-sm">Our chefs prepare your meals fresh in our gluten-free kitchen</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                <Package className="w-8 h-8 text-primary mb-3 mx-auto" />
                <h3 className="text-lg font-bold mb-2">Shipped with Care</h3>
                <p className="text-muted-foreground text-sm">Insulated packaging with gel ice packs keeps meals fresh via FedEx</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                <Truck className="w-8 h-8 text-primary mb-3 mx-auto" />
                <h3 className="text-lg font-bold mb-2">Delivered to Athens</h3>
                <p className="text-muted-foreground text-sm">Meals arrive at your door early in the week, ready to heat and eat</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Athens Delivery Info */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              Athens & McMinn County Delivery
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <Package className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">All Athens Addresses</h3>
                <p className="text-muted-foreground mb-4">We ship to every address in McMinn County:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Downtown Athens
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Englewood area
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Etowah
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Niota & Riceville
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    All 373XX zip codes
                  </li>
                </ul>
              </Card>

              <Card className="p-8 border-primary/30 bg-primary/5">
                <Heart className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Shipping to Athens</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="text-muted-foreground">Standard Shipping</span>
                    <span className="font-bold">$25</span>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="text-muted-foreground">Orders Over $130</span>
                    <span className="font-bold text-primary">FREE + 10% OFF</span>
                  </div>
                  <div className="flex items-center justify-between border-b pb-2">
                    <span className="text-muted-foreground">Delivery Time</span>
                    <span className="font-bold">2-Day FedEx</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Packaging</span>
                    <span className="font-bold">Insulated + Ice Packs</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Local Context Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-8">
              Serving the Athens Community
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-center mb-6">
                Athens, the seat of McMinn County, is known for its rich history, Tennessee Wesleyan University, and thriving local community. Whether you're a student, a working professional at one of the local manufacturers, or a retiree enjoying the beautiful foothills of the Smokies, SmashMeals makes healthy eating effortless.
              </p>
              <p className="text-center">
                We understand that life in Athens can be busy—that's why we've made it easy to eat well without spending hours in the kitchen. Our meals are perfect for post-workout recovery, family dinners, or meal planning for the week ahead.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection faqs={faqs} />

        {/* Final CTA */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Ready to Simplify Your Meals in Athens?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join McMinn County residents who've discovered the convenience of chef-prepared, gluten-free meal prep. Free shipping on orders over $130!
            </p>
            <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="lg" className="text-lg">
                Order Now - Ships to Athens
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Athens;
