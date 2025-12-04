import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChefHat, Users, Sparkles, Clock, DollarSign, CheckCircle2 } from "lucide-react";

const Catering = () => {
  const menuCategories = {
    appetizers: {
      title: "Appetizers",
      items: [
        { name: "Appetizer Bar", price: "$16.00", description: "Your choice of up to five appetizers", popular: true },
        { name: "Chips, Queso & Salsa", price: "$15.00", description: "Gluten-free, vegetarian" },
        { name: "Chips & Guacamole", price: "$15.00", description: "Gluten-free, vegetarian" },
      ]
    },
    cateringBars: {
      title: "Catering Bars",
      items: [
        { name: "Taco Bar", price: "$14.00", description: "Everything you need to build your own tacos, including ground beef, chicken, shredded cheese, sour cream, salsa, tortillas, soft & hard tortilla shells, lettuce, tomato, onion, cilantro, and lime wedges", popular: true },
        { name: "BBQ Brisket Bar", price: "$19.00", description: "Includes sliced brisket, BBQ sauce, slaw, and baked beans" },
        { name: "Pork BBQ Bar", price: "$15.00", description: "Includes pulled pork, BBQ sauce, slaw, and baked beans" },
      ]
    },
    wraps: {
      title: "Wraps",
      items: [
        { name: "Ham Wrap", price: "$11.00", description: "With your choice of cheese, lettuce, tomato, and bacon. Served with a bag of chips and a cookie. Individually packaged optional." },
        { name: "Turkey Wrap", price: "$11.00", description: "With your choice of cheese, lettuce, tomato, and bacon. Served with a bag of chips and a cookie. Individually packaged optional." },
      ]
    },
    entrees: {
      title: "Entrees",
      items: [
        { name: "Chicken Chili", price: "$11.00", description: "Served with sour cream, cheese, and chips. Individually packaged." },
        { name: "Baked Potato w/ Grilled Chicken", price: "$12.00", description: "With bacon, cheese, sour cream, and butter. Served with community salad. Individually packaged optional." },
        { name: "Baked Potato w/ Pulled Pork", price: "$12.00", description: "With bacon, cheese, sour cream, and butter. Served with community salad. Individually packaged optional." },
      ]
    },
    salads: {
      title: "Salads",
      items: [
        { name: "Grilled Chicken Salad", price: "$12.00", description: "Fresh and satisfying", popular: true },
        { name: "Grilled Steak Salad", price: "$13.00", description: "Premium steak on fresh greens" },
      ]
    },
    desserts: {
      title: "Desserts",
      items: [
        { name: "Chocolate Chip Cookies", price: "$20.00", description: "Serves 12", popular: true },
        { name: "Peanut Butter Cookies", price: "$20.00", description: "Serves 12" },
        { name: "Rice Krispy Treats", price: "$30.00", description: "Serves 12" },
        { name: "Almond Butter Cookies", price: "$20.00", description: "Serves 12" },
      ]
    },
    beverages: {
      title: "Beverages",
      items: [
        { name: "Gallon Unsweet Tea", price: "$6.99", description: "Serves 8", popular: true },
        { name: "Gallon Sweet Tea", price: "$6.99", description: "Serves 8" },
        { name: "Gallon Lemonade", price: "$7.99", description: "Serves 8" },
        { name: "Assorted 2L Soda Bottles", price: "$3.59", description: "Serves 4" },
      ]
    },
  };

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
              All items are 100% gluten-free
            </p>
            
            {Object.values(menuCategories).map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h3 className="text-2xl md:text-3xl font-bold font-playfair mb-6 text-primary">
                  {category.title}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.items.map((item, index) => (
                    <Card 
                      key={index} 
                      className="p-6 border-0 bg-white/80 dark:bg-card/80 backdrop-blur-sm shadow-card hover:shadow-elevated transition-all group relative overflow-hidden"
                    >
                      {item.popular && (
                        <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-bold shadow-card">
                          POPULAR
                        </div>
                      )}
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-bold font-playfair group-hover:text-accent transition-colors pr-16">
                          {item.name}
                        </h4>
                        <span className="text-lg font-bold text-primary whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground font-inter leading-relaxed">
                        {item.description}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            ))}

            <div className="text-center mt-12">
              <a href="https://smashmeals.bottle.com/b/9730176" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="text-lg px-12 py-7 h-auto font-inter shadow-elevated">
                  Order Catering Online
                </Button>
              </a>
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
