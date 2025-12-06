import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CitySchema from "@/components/CitySchema";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Truck, Clock, ChefHat, Leaf, Heart, CheckCircle, Award, Package, Mountain } from "lucide-react";
import { Link } from "react-router-dom";

const Rutledge = () => {
  const faqs = [
    {
      question: "Do you deliver to Rutledge, TN?",
      answer: "Yes! We ship to Rutledge and all of Grainger County via FedEx 2-day delivery. Your meals arrive fresh in insulated packaging with gel ice packs."
    },
    {
      question: "What's the shipping cost to Rutledge?",
      answer: "Shipping to Rutledge is $25. Orders over $130 qualify for free shipping AND 10% off your entire order!"
    },
    {
      question: "Is there a pickup option near Rutledge?",
      answer: "Yes! You can pick up for free at our Bulls Gap location (about 25 minutes away). Pickup is available Sunday and Monday from 5-7 PM."
    },
    {
      question: "Are your meals safe for celiac disease?",
      answer: "Absolutely. Our entire kitchen is 100% gluten-free with no shared equipment. Zero risk of cross-contamination—completely safe for celiac disease."
    },
    {
      question: "How long do SmashMeals stay fresh?",
      answer: "Our meals stay fresh for 5-7 days refrigerated or up to 6 months frozen. Great for Grainger County families who like to plan ahead!"
    },
    {
      question: "What's the ordering deadline for Rutledge delivery?",
      answer: "Place your order by Thursday at 11:59 PM. We prepare meals fresh on Friday and ship for delivery early the following week."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Gluten-Free Meal Prep Rutledge TN | SmashMeals Delivery to Grainger County</title>
        <meta name="description" content="Fresh gluten-free meal prep delivered to Rutledge, Tennessee and Grainger County. Chef-prepared meals with free shipping on orders over $130. 100% gluten-free kitchen, safe for celiac." />
        <meta name="keywords" content="meal prep Rutledge TN, gluten-free meals Rutledge, food delivery Grainger County, healthy meal delivery East Tennessee, celiac safe meals Rutledge" />
        <link rel="canonical" href="https://smashmeals.com/rutledge" />
      </Helmet>
      <CitySchema cityName="Rutledge" state="Tennessee" stateAbbr="TN" />
      
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">Serving Rutledge & Grainger County</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-playfair">
                Gluten-Free Meal Prep for Rutledge, Tennessee
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Fresh, chef-prepared gluten-free meals delivered right to your door in Grainger County. 
                Skip the cooking and enjoy healthy, delicious meals made in our 100% gluten-free kitchen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8" asChild>
                  <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                    View This Week's Menu
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                  <Link to="/how-it-works">Learn How It Works</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Rutledge Chooses SmashMeals */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 font-playfair">
              Why Grainger County Chooses SmashMeals
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              From Cherokee Lake vacationers to local families, here's why Rutledge residents trust SmashMeals for convenient, healthy meals.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="p-6 text-center">
                <Mountain className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-3">Rural Delivery Experts</h3>
                <p className="text-muted-foreground">
                  We understand Grainger County living. Our insulated FedEx shipping keeps meals fresh to any address.
                </p>
              </Card>
              <Card className="p-6 text-center">
                <Leaf className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-3">100% Gluten-Free Kitchen</h3>
                <p className="text-muted-foreground">
                  No cross-contamination risk. Safe for celiac and gluten-sensitive customers.
                </p>
              </Card>
              <Card className="p-6 text-center">
                <Award className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-3">Local East TN Business</h3>
                <p className="text-muted-foreground">
                  Family-owned in the Tri-Cities, serving Grainger County with care since 2016.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-playfair">
              How Meal Prep Delivery Works in Rutledge
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChefHat className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">1. Choose Your Meals</h3>
                <p className="text-muted-foreground">
                  Browse our weekly rotating menu and select your favorite gluten-free dishes by Thursday.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">2. We Prepare Fresh</h3>
                <p className="text-muted-foreground">
                  Our chefs prepare your meals fresh on Friday in our dedicated gluten-free kitchen.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">3. Delivered to Rutledge</h3>
                <p className="text-muted-foreground">
                  Your meals arrive fresh at your Grainger County home, ready to heat and enjoy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Options */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-playfair">
              Rutledge Delivery & Pickup Options
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="p-8">
                <Truck className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Shipping to Rutledge</h3>
                <p className="text-muted-foreground mb-4">
                  FedEx 2-day delivery to all Grainger County addresses:
                </p>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Downtown Rutledge
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Cherokee Lake area
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Bean Station
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    All Grainger County addresses
                  </li>
                </ul>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-muted-foreground">Standard Shipping</span>
                    <span className="font-bold">$25</span>
                  </div>
                  <div className="flex justify-between items-center text-primary font-bold">
                    <span>Orders Over $130</span>
                    <span>FREE + 10% OFF</span>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-primary/20 bg-primary/5">
                <MapPin className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">FREE Pickup at Bulls Gap</h3>
                <p className="text-lg mb-2 font-semibold text-primary">Just 25 Minutes from Rutledge!</p>
                <p className="text-muted-foreground mb-4">
                  Save on shipping by picking up at our Bulls Gap location.
                </p>
                <div className="bg-background p-4 rounded-lg">
                  <p className="font-semibold mb-2">Pickup Hours:</p>
                  <p className="text-muted-foreground">Sunday: 5:00 PM - 7:00 PM</p>
                  <p className="text-muted-foreground">Monday: 5:00 PM - 7:00 PM</p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Local Context */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 font-playfair">
              Proudly Serving the Rutledge Community
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground text-center">
              <p className="mb-6">
                Rutledge, the scenic seat of Grainger County, sits beautifully along Cherokee Lake and offers a peaceful, rural lifestyle. From lake lovers and outdoor enthusiasts to hardworking families, the Rutledge community values quality, convenience, and good food.
              </p>
              <p>
                SmashMeals brings that quality right to your door. Whether you're coming off a day on the lake, managing a busy work schedule, or simply looking for healthier meal options without the commute to a bigger city, our weekly meal prep service fits perfectly into Grainger County life.
              </p>
            </div>
          </div>
        </section>

        {/* Why SmashMeals */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-playfair">
              Why SmashMeals Works for Rutledge
            </h2>
            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <Card className="p-6 text-center">
                <Package className="w-10 h-10 text-primary mb-4 mx-auto" />
                <h3 className="text-lg font-bold mb-2">Long Shelf Life</h3>
                <p className="text-muted-foreground text-sm">5-7 days fresh, 6 months frozen</p>
              </Card>
              <Card className="p-6 text-center">
                <Leaf className="w-10 h-10 text-primary mb-4 mx-auto" />
                <h3 className="text-lg font-bold mb-2">Celiac Safe</h3>
                <p className="text-muted-foreground text-sm">100% gluten-free, zero contamination</p>
              </Card>
              <Card className="p-6 text-center">
                <Heart className="w-10 h-10 text-primary mb-4 mx-auto" />
                <h3 className="text-lg font-bold mb-2">Macro-Tracked</h3>
                <p className="text-muted-foreground text-sm">Full nutrition info on every meal</p>
              </Card>
              <Card className="p-6 text-center">
                <Award className="w-10 h-10 text-primary mb-4 mx-auto" />
                <h3 className="text-lg font-bold mb-2">8+ Years Trusted</h3>
                <p className="text-muted-foreground text-sm">Serving East TN since 2016</p>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection faqs={faqs} />

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">
              Ready to Start Eating Better in Rutledge?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join your neighbors in Grainger County who are saving time and eating healthier with SmashMeals. Free shipping on orders over $130!
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
              <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                Order Your First Meals
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Rutledge;
