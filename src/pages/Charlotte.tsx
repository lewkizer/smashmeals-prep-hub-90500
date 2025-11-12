import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Truck, CheckCircle, Package, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Charlotte = () => {
  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep Charlotte NC | SmashMeals Delivery</title>
        <meta name="description" content="Fresh gluten-free meal prep delivery to Charlotte, NC. Chef-prepared, macro-counted meals shipped within 2 days. 100% gluten-free, no subscription required." />
        <meta name="keywords" content="meal prep Charlotte, gluten free Charlotte NC, healthy meal delivery Charlotte, prepared meals Charlotte, meal prep delivery Charlotte" />
        <link rel="canonical" href="https://smashmeals.com/charlotte" />
        <meta property="og:title" content="Gluten-Free Meal Prep Charlotte NC | SmashMeals Delivery" />
        <meta property="og:description" content="Fresh gluten-free meal prep delivery to Charlotte, NC. Chef-prepared, macro-counted meals shipped within 2 days." />
        <meta property="og:url" content="https://smashmeals.com/charlotte" />
      </Helmet>

      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Now Shipping to Charlotte, NC</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Fresh Gluten-Free Meal Prep<br />Delivered to Charlotte
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Chef-prepared, 100% gluten-free meals shipped directly to your door in Charlotte. No subscription, no commitment—just delicious, healthy food.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://smashmeals.bottle.com/b/9730175" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="lg" className="text-lg">
                    View This Week's Menu
                  </Button>
                </a>
                <Link to="/">
                  <Button variant="outline" size="lg" className="text-lg">
                    Learn More About SmashMeals
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Shipping Info */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              Fast Delivery to Charlotte
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Order by Thursday</h3>
                <p className="text-muted-foreground">Place your order online by Thursday at 11:59 PM for the following week's meals</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">We Prepare & Ship</h3>
                <p className="text-muted-foreground">Meals are freshly prepared Friday and shipped Monday with FedEx 2-Day</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Arrives Wednesday</h3>
                <p className="text-muted-foreground">Your meals arrive fresh at your Charlotte doorstep, ready to heat and eat</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Charlotte Loves SmashMeals */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              Why Charlotte Residents Choose SmashMeals
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8">
                <CheckCircle className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">100% Gluten-Free</h3>
                <p className="text-muted-foreground mb-4">
                  Every single meal is gluten-free with zero cross-contamination. Perfect for celiac disease, gluten sensitivity, or anyone choosing a gluten-free lifestyle.
                </p>
              </Card>

              <Card className="p-8">
                <CheckCircle className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Macro-Counted</h3>
                <p className="text-muted-foreground mb-4">
                  Each meal includes detailed nutritional information—calories, protein, carbs, and fats. Perfect for fitness goals, weight management, or healthy eating.
                </p>
              </Card>

              <Card className="p-8">
                <CheckCircle className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Chef-Prepared Fresh</h3>
                <p className="text-muted-foreground mb-4">
                  Real chefs prepare real food in our commercial kitchen. No frozen warehouse meals—everything is made fresh the day it ships to Charlotte.
                </p>
              </Card>

              <Card className="p-8">
                <CheckCircle className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">No Subscription</h3>
                <p className="text-muted-foreground mb-4">
                  Order only when you need meals. No contracts, no recurring charges, no commitment. Perfect for busy weeks, meal planning, or trying us out.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Charlotte Service Areas */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              Delivering Throughout Charlotte
            </h2>
            <Card className="p-8">
              <Truck className="w-10 h-10 text-primary mb-4 mx-auto" />
              <p className="text-center text-lg text-muted-foreground mb-6">
                We ship to all Charlotte neighborhoods and surrounding areas including:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  "Uptown Charlotte",
                  "South End",
                  "NoDa",
                  "Plaza Midwood",
                  "Dilworth",
                  "Myers Park",
                  "Ballantyne",
                  "Southpark",
                  "University City",
                  "Concord",
                  "Matthews",
                  "Huntersville"
                ].map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{area}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Popular in Charlotte */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              Popular with Charlotte Customers
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { 
                  title: "Busy Professionals", 
                  desc: "Save hours each week while eating healthier than takeout or meal kits"
                },
                { 
                  title: "Fitness Enthusiasts", 
                  desc: "Hit your macros without meal prepping. Perfect for gym-goers and athletes"
                },
                { 
                  title: "Health-Conscious Families", 
                  desc: "Gluten-free meals the whole family loves, with no cooking required"
                }
              ].map((group) => (
                <Card key={group.title} className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-2">{group.title}</h3>
                  <p className="text-sm text-muted-foreground">{group.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Ready to Try SmashMeals in Charlotte?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Order this week's menu and taste the SmashMeals difference. Free shipping on orders over $120!
            </p>
            <a href="https://smashmeals.bottle.com/b/9730175" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="text-lg">
                View Menu & Order Now
              </Button>
            </a>
          </div>
        </section>

        {/* Local SEO Content */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <h2 className="text-2xl font-bold text-foreground mb-4">Gluten-Free Meal Prep Delivery in Charlotte, NC</h2>
              <p>
                SmashMeals brings restaurant-quality, gluten-free meal prep to Charlotte, North Carolina. Whether you're in Uptown, South End, Ballantyne, or anywhere in the Charlotte metro area, enjoy fresh, chef-prepared meals delivered right to your door.
              </p>
              <h3 className="text-xl font-bold text-foreground mt-6 mb-3">Why SmashMeals is Charlotte's Choice for Meal Prep</h3>
              <p>
                Unlike other meal prep services, every SmashMeals dish is 100% gluten-free and prepared fresh in our commercial kitchen. We don't use frozen pre-made meals or warehouse inventory. Each week features a new rotating menu with diverse options—from high-protein breakfasts to satisfying dinners.
              </p>
              <p>
                Charlotte residents love SmashMeals for the convenience of meal delivery without the hassle of subscriptions. Order as many or as few meals as you need, whenever you need them. Perfect for busy professionals, fitness enthusiasts, families with dietary restrictions, or anyone looking to eat healthier in Charlotte.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Charlotte;
