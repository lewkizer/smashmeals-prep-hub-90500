import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CitySchema from "@/components/CitySchema";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Truck, CheckCircle, Leaf, Heart, UtensilsCrossed, Award, Package, Mountain } from "lucide-react";
import { Link } from "react-router-dom";

const Sneedville = () => {
  const faqs = [
    {
      question: "Do you deliver to Sneedville, TN?",
      answer: "Yes! We ship to Sneedville and all of Hancock County via FedEx 2-day delivery. Your meals arrive fresh in insulated packaging with gel ice packs."
    },
    {
      question: "What's the shipping cost to Sneedville?",
      answer: "Shipping to Sneedville is $25. Orders over $130 qualify for free shipping AND 10% off your entire order!"
    },
    {
      question: "Is there a pickup option near Sneedville?",
      answer: "Yes! You can pick up for free at our Bulls Gap location (about 30 minutes away) or our Rogersville location (about 25 minutes). Pickup is Sunday and Monday from 5-7 PM."
    },
    {
      question: "Are your meals safe for celiac disease?",
      answer: "Absolutely. Our entire kitchen is 100% gluten-free with no shared equipment. Zero risk of cross-contamination—safe for celiac disease and severe gluten sensitivity."
    },
    {
      question: "How long do SmashMeals stay fresh?",
      answer: "Our meals stay fresh for 5-7 days refrigerated or up to 6 months frozen. Perfect for stocking up in rural areas!"
    },
    {
      question: "What kind of meals do you offer?",
      answer: "We offer a rotating weekly menu including breakfast options, entrees, family-size meals, and a la carte proteins and sides. Every meal is gluten-free with full macro information."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep Sneedville TN | SmashMeals Delivery to Hancock County</title>
        <meta name="description" content="Fresh gluten-free meal prep delivered to Sneedville, TN and Hancock County. Chef-prepared, macro-counted meals shipped weekly or free pickup nearby. 100% gluten-free kitchen." />
        <meta name="keywords" content="meal prep Sneedville TN, gluten free Sneedville Tennessee, meal delivery Hancock County, healthy meals Sneedville, prepared meals East Tennessee" />
        <link rel="canonical" href="https://smashmeals.com/sneedville" />
      </Helmet>

      <CitySchema cityName="Sneedville" state="Tennessee" stateAbbr="TN" />

      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-accent/10 via-background to-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Serving Sneedville & Hancock County, TN</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Gluten-Free Meal Prep<br />for Sneedville
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Fresh, chef-prepared meals delivered to Hancock County. 100% gluten-free with complete macro tracking. Convenient shipping or nearby free pickup options.
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

        {/* Why Sneedville Chooses SmashMeals */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-4">
              Why Hancock County Residents Choose SmashMeals
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Living in a rural area doesn't mean you can't eat healthy. SmashMeals brings restaurant-quality, gluten-free meals right to your door in Sneedville.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <Mountain className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Rural Delivery Experts</h3>
                <p className="text-muted-foreground">We understand rural living. Our insulated FedEx shipping keeps meals fresh even to remote Hancock County addresses.</p>
              </Card>

              <Card className="p-6 text-center">
                <Leaf className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">100% Gluten-Free Kitchen</h3>
                <p className="text-muted-foreground">Our dedicated facility means zero cross-contamination risk. Safe for celiac disease and gluten sensitivity.</p>
              </Card>

              <Card className="p-6 text-center">
                <Award className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">East TN Family Business</h3>
                <p className="text-muted-foreground">We're your neighbors in the Tri-Cities area, serving East Tennessee since 2016 with care and quality.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              How It Works for Sneedville
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Order by Thursday</h3>
                <p className="text-muted-foreground">Browse our weekly menu online and place your order by Thursday 11:59 PM</p>
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
                  <Truck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Shipped to Sneedville</h3>
                <p className="text-muted-foreground">Meals arrive fresh via FedEx with insulated packaging and gel ice packs</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Sneedville Delivery Options */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              Sneedville Delivery & Pickup Options
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <Truck className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Shipping to Sneedville</h3>
                <p className="text-muted-foreground mb-4">
                  FedEx 2-day delivery right to your Hancock County address:
                </p>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Downtown Sneedville
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    All Hancock County addresses
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Insulated packaging with ice packs
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Tracked delivery
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

              <Card className="p-8 border-primary/30 bg-primary/5">
                <MapPin className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Nearby FREE Pickup</h3>
                <p className="text-muted-foreground mb-4">
                  Save on shipping with our nearby pickup locations:
                </p>
                <div className="space-y-4">
                  <div className="bg-background p-4 rounded-lg">
                    <p className="font-semibold">Bulls Gap Location</p>
                    <p className="text-muted-foreground text-sm">~30 minute drive</p>
                    <p className="text-muted-foreground text-sm">Sun & Mon: 5-7 PM</p>
                  </div>
                  <div className="bg-background p-4 rounded-lg">
                    <p className="font-semibold">Rogersville Location</p>
                    <p className="text-muted-foreground text-sm">~25 minute drive</p>
                    <p className="text-muted-foreground text-sm">Sun & Mon: 5-7 PM</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Local Context */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-8">
              Serving the Sneedville Community
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-center mb-6">
                Sneedville, nestled in the heart of Hancock County among the Clinch Mountains, is one of Tennessee's most scenic and peaceful communities. While the rural setting offers tranquility and natural beauty, it can make accessing healthy, convenient meal options a challenge.
              </p>
              <p className="text-center">
                That's where SmashMeals comes in. We bridge the gap between rural living and healthy eating, delivering chef-prepared, gluten-free meals right to your door. Whether you're a busy farmer, a working professional, or simply someone who values good nutrition, our weekly meal prep service gives you restaurant-quality food without the long drive to town.
              </p>
            </div>
          </div>
        </section>

        {/* Why SmashMeals */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              Why SmashMeals Works for Sneedville
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <Package className="w-10 h-10 text-primary mb-4 mx-auto" />
                <h3 className="text-lg font-bold mb-2">Long Shelf Life</h3>
                <p className="text-muted-foreground text-sm">5-7 days fresh, 6 months frozen—perfect for stocking up</p>
              </Card>
              <Card className="p-6 text-center">
                <Leaf className="w-10 h-10 text-primary mb-4 mx-auto" />
                <h3 className="text-lg font-bold mb-2">Celiac Safe</h3>
                <p className="text-muted-foreground text-sm">100% gluten-free kitchen, zero cross-contamination</p>
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

        {/* Final CTA */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Start Eating Healthier in Sneedville
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join Hancock County residents who've discovered convenient, gluten-free meal prep. Free shipping on orders over $130!
            </p>
            <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="lg" className="text-lg">
                Order Now - Ships to Sneedville
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Sneedville;
