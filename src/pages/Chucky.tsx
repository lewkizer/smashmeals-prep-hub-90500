import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CitySchema from "@/components/CitySchema";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Truck, CheckCircle, Dumbbell } from "lucide-react";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";

const Chucky = () => {
  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep Chucky TN | SmashMeals Delivery</title>
        <meta name="description" content="Fresh gluten-free meal prep delivered to Chucky, TN. Pickup at CrossFit Arcane or FREE home delivery. Order by Thursday." />
        <meta name="keywords" content="meal prep Chucky TN, gluten free Chucky Tennessee, healthy meals Chucky, CrossFit meals Chucky" />
        <link rel="canonical" href="https://smashmeals.com/chucky" />
      </Helmet>

      <CitySchema cityName="Chucky" state="Tennessee" stateAbbr="TN" />

      <Header />
      <PageBreadcrumb parentPage={{ label: "Service Areas", href: "/service-areas" }} currentPage="Chucky, TN" />

      <main className="min-h-screen">
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Serving Chucky, TN</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Chucky's Gluten-Free<br />Meal Prep Solution
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Fresh, chef-prepared meals with FREE delivery to Chucky. Pickup available at CrossFit Arcane!
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
              How It Works in Chucky
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
                <h3 className="text-xl font-bold mb-2">Pickup or Delivery</h3>
                <p className="text-muted-foreground">CrossFit Arcane or FREE home delivery</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              Chucky Pickup & Delivery
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border-primary/20">
                <Dumbbell className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Pickup at CrossFit Arcane</h3>
                <p className="text-lg mb-2 font-semibold">CrossFit Arcane</p>
                <p className="text-muted-foreground mb-4">
                  Your local CrossFit box in the Chucky area<br />
                  <span className="text-sm text-primary">Perfect for athletes & fitness enthusiasts!</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Pickup Times:</strong><br />
                  Sunday: 5:00 PM - 7:00 PM<br />
                  Monday: 5:00 PM - 7:00 PM
                </p>
              </Card>

              <Card className="p-8">
                <Truck className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">FREE Home Delivery</h3>
                <p className="text-muted-foreground mb-4">
                  We deliver FREE throughout Chucky and surrounding areas:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    All Chucky addresses
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Nearby rural routes
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Sunday-Monday delivery
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Fuel Your Chucky Lifestyle
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Whether you train at CrossFit Arcane or prefer home delivery, we've got you covered
            </p>
            <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="text-lg">
                Order Now - FREE Delivery
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Chucky;
