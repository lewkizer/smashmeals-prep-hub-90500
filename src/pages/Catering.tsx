import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChefHat, Users, Sparkles, Clock, DollarSign, CheckCircle2 } from "lucide-react";

const Catering = () => {
  const cateringItems = [
    {
      name: "Taco Bar",
      description: "Enjoy a variety of toppings including ground beef, chicken, cheese, lettuce, tomatoes, sour cream, and all the fixings",
      popular: true,
    },
    {
      name: "Chicken Chili",
      description: "Warm and hearty chili served with sour cream, shredded cheese, and chips. Perfect for game day or office events",
      popular: true,
    },
    {
      name: "BBQ Brisket",
      description: "Sliced tender brisket with BBQ sauce, buns, coleslaw, and baked beans. A southern favorite",
      popular: false,
    },
    {
      name: "Pulled Pork BBQ",
      description: "Savory pulled pork with all the fixings. Tender, flavorful, and always a crowd-pleaser",
      popular: false,
    },
    {
      name: "Appetizer Bar",
      description: "Choose from a selection of appetizers including meatballs, wings, dips, and more to kick off your event",
      popular: false,
    },
    {
      name: "Cookies",
      description: "Freshly baked gluten-free cookies. 12 for $20, 40 for $60, or 100 for $140",
      popular: false,
    },
  ];

  const benefits = [
    {
      icon: ChefHat,
      title: "Chef-Crafted",
      description: "Every dish prepared with care by experienced chefs",
    },
    {
      icon: Users,
      title: "Any Size Event",
      description: "From 10 to 100+ guests, we've got you covered",
    },
    {
      icon: Clock,
      title: "We Handle Setup",
      description: "Delivery and setup included—stress-free catering",
    },
  ];

  const features = [
    "Customizable menu options",
    "Professional delivery & setup",
    "Eco-friendly disposable serving ware available",
    "Dietary accommodations available",
    "Same-day service available (when possible)",
    "Corporate accounts welcome",
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-accent/10 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-accent text-accent-foreground px-6 py-2 rounded-full text-sm font-bold mb-6 shadow-card">
              CATERING SERVICES
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-playfair mb-6">
              Nourish Your Guests
            </h1>
            <p className="text-xl md:text-2xl font-inter text-muted-foreground mb-8">
              Gluten-free catering that's as healthy as it is delicious. Let us cook, deliver, and set up for your next event.
            </p>
            <a href="mailto:lew@smashmeals.com?subject=Catering%20Request">
              <Button variant="hero" size="lg" className="text-lg px-12 py-7 h-auto font-inter shadow-elevated">
                Request Catering Quote
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-center mb-16">
              Why Choose SmashMeals Catering
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card 
                  key={index} 
                  className="p-8 text-center border-0 bg-white/60 dark:bg-card/60 backdrop-blur-sm shadow-card hover:shadow-elevated transition-all hover:scale-105 group"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-card group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-10 h-10 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-bold font-playfair mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground font-inter text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menu Items Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-center mb-4">
              Catering Menu
            </h2>
            <p className="text-xl font-inter text-muted-foreground text-center mb-16">
              Delicious options for any event size
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {cateringItems.map((item, index) => (
                <Card 
                  key={index} 
                  className="p-8 border-0 bg-white/80 dark:bg-card/80 backdrop-blur-sm shadow-elevated hover:scale-105 transition-all group relative overflow-hidden"
                >
                  {item.popular && (
                    <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold shadow-card">
                      POPULAR
                    </div>
                  )}
                  <h3 className="text-2xl font-bold font-playfair mb-3 group-hover:text-accent transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground font-inter leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Card className="inline-block p-6 border-0 bg-gradient-to-br from-accent/20 to-primary/20 backdrop-blur-sm shadow-card">
                <p className="font-inter text-lg">
                  <span className="font-bold">Add-Ons Available:</span> Sides, drinks, desserts, and more!
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-center mb-16">
              What's Included
            </h2>
            <Card className="p-8 md:p-12 border-0 bg-white/80 dark:bg-card/80 backdrop-blur-sm shadow-elevated">
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="font-inter text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Info */}
      <section className="py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 text-center border-0 bg-gradient-to-br from-primary/10 via-background to-accent/5 backdrop-blur-sm shadow-elevated">
              <DollarSign className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
                Custom Pricing
              </h2>
              <p className="text-xl font-inter text-muted-foreground mb-8">
                Every event is unique. We'll create a custom quote based on your needs, guest count, and menu selections.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:lew@smashmeals.com?subject=Catering%20Quote%20Request">
                  <Button variant="hero" size="lg" className="font-inter">
                    Get Your Quote
                  </Button>
                </a>
                <a href="tel:4235252489">
                  <Button variant="outline" size="lg" className="font-inter">
                    Call Us: (423) 525-2489
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Ready to Plan Your Event?
            </h3>
            <p className="text-xl font-inter text-muted-foreground mb-8">
              Contact us today to discuss your catering needs. We typically need 3-5 days notice for most events.
            </p>
            <a href="mailto:lew@smashmeals.com?subject=Catering%20Inquiry">
              <Button variant="hero" size="lg" className="text-lg px-12 py-7 h-auto font-inter shadow-elevated">
                Start Planning
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Catering;
