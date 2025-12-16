import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CitySchema from "@/components/CitySchema";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Truck, CheckCircle, Leaf, Heart, UtensilsCrossed, Award, Package } from "lucide-react";
import { Link } from "react-router-dom";

const Morristown = () => {
  const faqs = [
    {
      question: "Do you deliver to Morristown, TN?",
      answer: "Yes! We offer both shipping and convenient pickup for Morristown customers. You can pick up your meals at our Bulls Gap location (just 15 minutes away) or have them shipped directly to your door via FedEx."
    },
    {
      question: "Is the Bulls Gap pickup free?",
      answer: "Yes! Pickup at our Bulls Gap location is completely free. It's available Sunday and Monday from 5-7 PM, making it perfect for Morristown residents looking to save on shipping."
    },
    {
      question: "What's the shipping cost to Morristown?",
      answer: "Shipping to Morristown is $25. However, orders over $130 qualify for free shipping AND 10% off your entire order!"
    },
    {
      question: "Are your meals safe for celiac disease?",
      answer: "Absolutely. Our entire kitchen in Kingsport is 100% gluten-free with no shared equipment. This eliminates any risk of cross-contamination, making our meals safe for those with celiac disease and severe gluten sensitivity."
    },
    {
      question: "How long do SmashMeals stay fresh?",
      answer: "Our meals stay fresh for 5-7 days in the refrigerator or up to 6 months in the freezer. This flexibility lets you enjoy meals all week or stock up for later."
    },
    {
      question: "What areas near Morristown do you serve?",
      answer: "We serve all of Hamblen County including downtown Morristown, West Hills, and surrounding areas. We also deliver to nearby communities like Whitesburg, Russellville, and Talbott."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep Morristown TN | SmashMeals Delivery & Pickup</title>
        <meta name="description" content="Fresh gluten-free meal prep for Morristown, TN. Chef-prepared, macro-counted meals with FREE Bulls Gap pickup or convenient shipping. Serving Hamblen County since 2016." />
        <meta name="keywords" content="meal prep Morristown TN, gluten free Morristown Tennessee, healthy meal delivery Morristown, meal prep Hamblen County, prepared meals Morristown, celiac safe meals East Tennessee" />
        <link rel="canonical" href="https://smashmeals.com/morristown" />
      </Helmet>

      <CitySchema cityName="Morristown" state="Tennessee" stateAbbr="TN" />

      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-accent/10 via-background to-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Serving Morristown & Hamblen County, TN</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Morristown's Trusted<br />Gluten-Free Meal Prep
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Fresh, chef-prepared meals for Morristown families. 100% gluten-free with complete nutrition info. FREE pickup at Bulls Gap or convenient shipping to your door.
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

        {/* Why Morristown Chooses SmashMeals */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-4">
              Why Morristown Families Trust SmashMeals
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              From busy professionals to families managing after-school activities, here's why Hamblen County residents choose SmashMeals week after week.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <Leaf className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">100% Gluten-Free Kitchen</h3>
                <p className="text-muted-foreground">Our dedicated gluten-free facility means zero cross-contamination. Safe for celiac disease and gluten sensitivity.</p>
              </Card>

              <Card className="p-6 text-center">
                <UtensilsCrossed className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Fresh Weekly Preparation</h3>
                <p className="text-muted-foreground">Every meal is cooked fresh in our Kingsport kitchen—no preservatives, no fillers, just quality ingredients.</p>
              </Card>

              <Card className="p-6 text-center">
                <Award className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">8+ Years Serving East TN</h3>
                <p className="text-muted-foreground">Since 2016, we've been the go-to meal prep service for families across the region. Trusted by thousands.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              How It Works for Morristown
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Order by Thursday</h3>
                <p className="text-muted-foreground">Browse our weekly rotating menu online and place your order by Thursday 11:59 PM</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <UtensilsCrossed className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Fresh Prep Friday</h3>
                <p className="text-muted-foreground">Our chefs prepare your meals fresh in our dedicated gluten-free kitchen in Kingsport</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Pickup or Delivery</h3>
                <p className="text-muted-foreground">Free pickup at Bulls Gap Sunday-Monday, or shipped to your Morristown address</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Morristown Delivery Options */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              Morristown Pickup & Delivery Options
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border-primary/30 bg-primary/5">
                <MapPin className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">FREE Pickup at Bulls Gap</h3>
                <p className="text-lg mb-2 font-semibold text-primary">Just 15 Minutes from Morristown!</p>
                <p className="text-muted-foreground mb-4">
                  Save on shipping by picking up at our Bulls Gap location. It's a quick drive from anywhere in Morristown.
                </p>
                <div className="bg-background p-4 rounded-lg">
                  <p className="font-semibold mb-2">Pickup Hours:</p>
                  <p className="text-muted-foreground">Sunday: 5:00 PM - 7:00 PM</p>
                  <p className="text-muted-foreground">Monday: 5:00 PM - 7:00 PM</p>
                </div>
              </Card>

              <Card className="p-8">
                <Truck className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Shipping to Morristown</h3>
                <p className="text-muted-foreground mb-4">
                  Prefer delivery to your door? We ship throughout Hamblen County:
                </p>
                <ul className="space-y-2 text-muted-foreground mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Downtown Morristown
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    West Hills & Cherokee Hills
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Whitesburg & Talbott
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    All 378XX zip codes
                  </li>
                </ul>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Standard Shipping</span>
                    <span className="font-bold">$25</span>
                  </div>
                  <div className="flex justify-between items-center text-primary font-bold">
                    <span>Orders Over $130</span>
                    <span>FREE + 10% OFF</span>
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
              Proudly Serving the Morristown Community
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-center mb-6">
                Morristown, the heart of Hamblen County, is a thriving community known for its manufacturing industry, excellent schools, and welcoming neighborhoods. Whether you're working at one of the local plants, raising a family, or enjoying retirement, SmashMeals fits seamlessly into your busy lifestyle.
              </p>
              <p className="text-center">
                As a fellow East Tennessee business, we understand the importance of community and quality. That's why we've made it our mission to provide Morristown residents with convenient, healthy meal options that don't compromise on taste or nutrition. Our Bulls Gap pickup location makes it even easier for Hamblen County families to access fresh, gluten-free meals each week.
              </p>
            </div>
          </div>
        </section>

        {/* Meal Types */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              Meals Perfect for Morristown Lifestyles
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <Package className="w-10 h-10 text-primary mb-4 mx-auto" />
                <h3 className="text-lg font-bold mb-2">Weekly Entrees</h3>
                <p className="text-muted-foreground text-sm">Chef-prepared dinners ready to heat and eat in minutes</p>
              </Card>
              <Card className="p-6 text-center">
                <Heart className="w-10 h-10 text-primary mb-4 mx-auto" />
                <h3 className="text-lg font-bold mb-2">Breakfast Options</h3>
                <p className="text-muted-foreground text-sm">Start your day right with protein-packed morning meals</p>
              </Card>
              <Card className="p-6 text-center">
                <Leaf className="w-10 h-10 text-primary mb-4 mx-auto" />
                <h3 className="text-lg font-bold mb-2">Family Meals</h3>
                <p className="text-muted-foreground text-sm">Larger portions perfect for feeding the whole family</p>
              </Card>
              <Card className="p-6 text-center">
                <Award className="w-10 h-10 text-primary mb-4 mx-auto" />
                <h3 className="text-lg font-bold mb-2">A La Carte</h3>
                <p className="text-muted-foreground text-sm">Proteins, sides, and snacks to customize your week</p>
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
              Start Eating Healthier in Morristown
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join Hamblen County residents who've simplified their weekly nutrition with SmashMeals. FREE pickup at Bulls Gap or convenient shipping!
            </p>
            <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="lg" className="text-lg">
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

export default Morristown;
