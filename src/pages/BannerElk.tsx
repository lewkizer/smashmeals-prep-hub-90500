import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CitySchema from "@/components/CitySchema";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Truck, Package, Clock, Shield, ChefHat, Mountain, Star, Snowflake } from "lucide-react";
import { Link } from "react-router-dom";

const BannerElk = () => {
  const faqs = [
    {
      question: "Do you deliver to Banner Elk, North Carolina?",
      answer: "Yes! SmashMeals ships fresh, 100% gluten-free meals to Banner Elk, Beech Mountain, Sugar Mountain, and all High Country communities in Avery and Watauga counties."
    },
    {
      question: "How does shipping work to mountain communities?",
      answer: "We ship via FedEx with insulated packaging and ice packs. Orders placed by Thursday ship Monday and typically arrive within 2-3 business days to Banner Elk."
    },
    {
      question: "Is there free shipping to Banner Elk?",
      answer: "Yes! Orders over $130 qualify for FREE shipping to Banner Elk and all North Carolina addresses. Orders under $130 ship for $12.99."
    },
    {
      question: "Are meals good for vacation rentals?",
      answer: "Absolutely! Many vacation rental guests order SmashMeals for their High Country getaways. It's a great way to eat healthy while enjoying the mountains."
    },
    {
      question: "Do you deliver year-round including ski season?",
      answer: "Yes! We ship year-round with temperature-controlled packaging. Whether you're skiing at Sugar Mountain or hiking in the summer, we've got you covered."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep Banner Elk NC | High Country Delivery | SmashMeals</title>
        <meta name="description" content="Gluten-free meal prep delivered to Banner Elk and the NC High Country. Fresh meals for mountain living. Free shipping on orders over $130!" />
        <meta name="keywords" content="gluten free meal prep Banner Elk, meal delivery High Country NC, healthy meal prep Beech Mountain, gluten free food Sugar Mountain, Banner Elk meal delivery" />
        <link rel="canonical" href="https://smashmeals.com/banner-elk" />
        <meta property="og:title" content="Gluten-Free Meal Prep Banner Elk NC | SmashMeals" />
        <meta property="og:description" content="Fresh gluten-free meal prep for Banner Elk and the NC High Country mountains." />
        <meta property="og:url" content="https://smashmeals.com/banner-elk" />
      </Helmet>

      <CitySchema cityName="Banner Elk" state="North Carolina" stateAbbr="NC" />

      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Now Shipping to Banner Elk & the High Country</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Gluten-Free Meal Prep<br />for Banner Elk
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Mountain living made healthier. Fresh, 100% gluten-free meals delivered to 
                Banner Elk, Beech Mountain, Sugar Mountain, and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="lg" className="text-lg px-8">
                    View This Week's Menu
                  </Button>
                </a>
                <Link to="/service-areas">
                  <Button variant="outline" size="lg" className="text-lg">
                    All Delivery Areas
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-12 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold">100% Gluten-Free</h3>
                <p className="text-sm text-muted-foreground">Dedicated kitchen</p>
              </Card>
              <Card className="p-6 text-center">
                <Mountain className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold">High Country</h3>
                <p className="text-sm text-muted-foreground">Mountain delivery</p>
              </Card>
              <Card className="p-6 text-center">
                <Truck className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold">Free Shipping</h3>
                <p className="text-sm text-muted-foreground">Orders $130+</p>
              </Card>
              <Card className="p-6 text-center">
                <Snowflake className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold">Year-Round</h3>
                <p className="text-sm text-muted-foreground">Ski season ready</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Banner Elk Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-6">
              Perfect for High Country Living
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Whether you're a full-time resident or enjoying a mountain getaway, SmashMeals 
              brings healthy, gluten-free meals to Banner Elk and the entire High Country.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8">
                <Mountain className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Mountain Convenience</h3>
                <p className="text-muted-foreground">
                  Limited grocery options in the mountains? No problem. We deliver chef-prepared 
                  meals right to your Banner Elk door.
                </p>
              </Card>
              <Card className="p-8">
                <Snowflake className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Vacation Ready</h3>
                <p className="text-muted-foreground">
                  Perfect for ski trips, summer getaways, and vacation rentals. Healthy meals 
                  waiting when you arrive at your mountain retreat.
                </p>
              </Card>
              <Card className="p-8">
                <ChefHat className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Restaurant Quality</h3>
                <p className="text-muted-foreground">
                  No need to drive down the mountain for good food. Enjoy chef-crafted, 
                  gluten-free meals at home.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <Clock className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Order by Thursday</h3>
                <p className="text-muted-foreground">Browse 30+ options and order before Thursday 11:59 PM EST</p>
              </Card>

              <Card className="p-6 text-center">
                <Package className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Fresh Preparation</h3>
                <p className="text-muted-foreground">Your meals are prepared fresh over the weekend</p>
              </Card>

              <Card className="p-6 text-center">
                <Truck className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Mountain Delivery</h3>
                <p className="text-muted-foreground">Arrives at your High Country address cold and fresh</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Areas Served */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-6">
              Serving the NC High Country
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-8">
              We deliver to Banner Elk and all surrounding mountain communities:
            </p>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {["Banner Elk", "Beech Mountain", "Sugar Mountain", "Boone", "Blowing Rock", 
                "Valle Crucis", "Linville", "Newland", "Elk Park", "Crossnore",
                "Grandfather Mountain", "Seven Devils", "Foscoe", "Todd", "West Jefferson"].map((area) => (
                <span key={area} className="px-4 py-2 bg-muted rounded-full text-sm font-medium">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              Banner Elk Delivery FAQs
            </h2>
            <FAQSection faqs={faqs} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Ready for Mountain Meal Prep?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Free shipping on orders over $130. Healthy eating at any elevation!
            </p>
            <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="text-lg px-12">
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

export default BannerElk;
