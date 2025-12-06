import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CitySchema from "@/components/CitySchema";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Truck, CheckCircle, Leaf, Heart, UtensilsCrossed, Award, Gift } from "lucide-react";
import { Link } from "react-router-dom";

const Greeneville = () => {
  const faqs = [
    {
      question: "Do you deliver to Greeneville for free?",
      answer: "Yes! Greeneville is within our FREE local delivery zone. We deliver throughout Greene County on Sunday and Monday evenings at no extra charge."
    },
    {
      question: "What's the ordering deadline for Greeneville delivery?",
      answer: "Place your order by Thursday at 11:59 PM. We prepare your meals fresh on Friday and deliver to Greeneville on Sunday or Monday between 5-7 PM."
    },
    {
      question: "Are your meals safe for celiac disease?",
      answer: "Absolutely. Our entire kitchen in Kingsport is 100% gluten-free with no shared equipment. This eliminates any risk of cross-contamination, making our meals safe for those with celiac disease."
    },
    {
      question: "How long do SmashMeals stay fresh?",
      answer: "Our meals stay fresh for 5-7 days in the refrigerator or up to 6 months in the freezer. Many Greeneville customers appreciate this flexibility for busy weeknight dinners."
    },
    {
      question: "What areas near Greeneville do you deliver to?",
      answer: "We deliver FREE throughout Greene County including downtown Greeneville, Tusculum, Chuckey, Mosheim, and surrounding areas."
    },
    {
      question: "Can I pick up instead of getting delivery?",
      answer: "Yes! You can also pick up at our Kingsport location or Bulls Gap location. Both are convenient options for Greene County residents who prefer pickup."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep Greeneville TN | FREE Local Delivery | SmashMeals</title>
        <meta name="description" content="Fresh gluten-free meal prep with FREE delivery to Greeneville, TN. Chef-prepared, macro-counted meals delivered weekly to Greene County. 100% gluten-free kitchen, safe for celiac." />
        <meta name="keywords" content="meal prep Greeneville TN, gluten free Greeneville Tennessee, free meal delivery Greeneville, meal prep Greene County, prepared meals Greeneville, celiac safe meals East Tennessee" />
        <link rel="canonical" href="https://smashmeals.com/greeneville" />
      </Helmet>

      <CitySchema cityName="Greeneville" state="Tennessee" stateAbbr="TN" />

      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-accent/10 via-background to-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                <Gift className="w-5 h-5" />
                <span className="font-semibold">FREE Delivery to Greeneville!</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Serving Greeneville & Greene County, TN</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Greeneville's Premier<br />Gluten-Free Meal Prep
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Fresh, chef-prepared meals delivered FREE to Greeneville every week. 100% gluten-free with complete nutrition tracking—perfect for your health goals.
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

        {/* Why Greeneville Chooses SmashMeals */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-4">
              Why Greeneville Loves SmashMeals
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              From Tusculum University students to busy families throughout Greene County, here's why Greeneville residents choose SmashMeals week after week.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <Gift className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">FREE Local Delivery</h3>
                <p className="text-muted-foreground">Greeneville is in our free delivery zone! Fresh meals brought right to your door at no extra cost.</p>
              </Card>

              <Card className="p-6 text-center">
                <Leaf className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">100% Gluten-Free Kitchen</h3>
                <p className="text-muted-foreground">Our dedicated facility means zero cross-contamination risk. Safe for celiac disease and gluten sensitivity.</p>
              </Card>

              <Card className="p-6 text-center">
                <Award className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">East TN Family Owned</h3>
                <p className="text-muted-foreground">We're your neighbors! A family-owned business serving the region since 2016 with quality you can trust.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              How FREE Greeneville Delivery Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Order by Thursday</h3>
                <p className="text-muted-foreground">Browse our weekly rotating menu and place your order by Thursday 11:59 PM for this week's delivery</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <UtensilsCrossed className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">We Cook Friday</h3>
                <p className="text-muted-foreground">Our chefs prepare your meals fresh in our certified gluten-free kitchen in Kingsport</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">FREE Delivery Sun-Mon</h3>
                <p className="text-muted-foreground">Your meals arrive at your Greeneville home between 5-7 PM, ready to enjoy all week</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Greeneville Delivery Area */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              Greeneville & Greene County Delivery Zone
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border-primary/30 bg-primary/5">
                <Truck className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">FREE Delivery Areas</h3>
                <p className="text-muted-foreground mb-4">
                  We deliver at no charge throughout Greene County:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Downtown Greeneville
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Tusculum area
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Chuckey
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Mosheim
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    All surrounding Greene County areas
                  </li>
                </ul>
              </Card>

              <Card className="p-8">
                <Clock className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Delivery Schedule</h3>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <p className="font-semibold text-lg">Order Deadline</p>
                    <p className="text-muted-foreground">Thursday 11:59 PM</p>
                  </div>
                  <div className="border-b pb-4">
                    <p className="font-semibold text-lg">Meal Preparation</p>
                    <p className="text-muted-foreground">Friday (Fresh in Kingsport)</p>
                  </div>
                  <div className="border-b pb-4">
                    <p className="font-semibold text-lg">Delivery Window</p>
                    <p className="text-muted-foreground">Sunday or Monday, 5-7 PM</p>
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Delivery Cost</p>
                    <p className="text-primary font-bold text-xl">FREE!</p>
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
              Proudly Serving the Greeneville Community
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-center mb-6">
                Greeneville, the second-oldest town in Tennessee and hometown of President Andrew Johnson, has a rich history and a thriving modern community. From Tusculum University students and faculty to families throughout Greene County, we're proud to serve this historic area with convenient, healthy meal prep.
              </p>
              <p className="text-center">
                As a local East Tennessee business, we understand the pace of life here. Whether you're commuting to work, managing family activities, or simply want to eat healthier without the hassle of cooking, SmashMeals brings restaurant-quality, gluten-free meals directly to your door—for free.
              </p>
            </div>
          </div>
        </section>

        {/* Meal Types */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              Meals for Every Greeneville Lifestyle
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <UtensilsCrossed className="w-10 h-10 text-primary mb-4 mx-auto" />
                <h3 className="text-lg font-bold mb-2">Weekly Entrees</h3>
                <p className="text-muted-foreground text-sm">Ready-to-heat dinners perfect for busy weeknights</p>
              </Card>
              <Card className="p-6 text-center">
                <Heart className="w-10 h-10 text-primary mb-4 mx-auto" />
                <h3 className="text-lg font-bold mb-2">Breakfast Meals</h3>
                <p className="text-muted-foreground text-sm">Protein-packed morning options to fuel your day</p>
              </Card>
              <Card className="p-6 text-center">
                <Leaf className="w-10 h-10 text-primary mb-4 mx-auto" />
                <h3 className="text-lg font-bold mb-2">Family-Size Portions</h3>
                <p className="text-muted-foreground text-sm">Feed the whole family with our larger meal options</p>
              </Card>
              <Card className="p-6 text-center">
                <Award className="w-10 h-10 text-primary mb-4 mx-auto" />
                <h3 className="text-lg font-bold mb-2">Athlete Meals</h3>
                <p className="text-muted-foreground text-sm">High-protein options for active lifestyles</p>
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
              Start Eating Healthier in Greeneville
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join Greene County residents enjoying FREE weekly delivery of fresh, gluten-free meals. Order by Thursday for this week's delivery!
            </p>
            <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="lg" className="text-lg">
                Order Now - FREE Greeneville Delivery
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Greeneville;
