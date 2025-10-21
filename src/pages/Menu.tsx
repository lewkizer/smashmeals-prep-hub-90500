import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Flame, Leaf, Drumstick, Apple, Package } from "lucide-react";

const Menu = () => {
  const categories = [
    {
      icon: Drumstick,
      name: "Entrees",
      color: "from-primary to-primary-glow",
      description: "Protein-packed main dishes",
    },
    {
      icon: Apple,
      name: "Breakfasts",
      color: "from-accent to-accent/80",
      description: "Start your day right",
    },
    {
      icon: Leaf,
      name: "Sides",
      color: "from-primary/60 to-primary/80",
      description: "Perfect complements",
    },
    {
      icon: Package,
      name: "Snacks",
      color: "from-accent/60 to-accent/80",
      description: "Healthy on-the-go options",
    },
  ];

  const features = [
    { icon: Flame, text: "Calorie & Macro Info" },
    { icon: Leaf, text: "100% Gluten-Free" },
    { text: "Fresh, Never Frozen (Pickup)" },
    { text: "New Menu Every Monday" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/10 via-background to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold mb-6 shadow-card animate-pulse">
              NEW MENU EVERY MONDAY
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-playfair mb-6">
              This Week's Menu
            </h1>
            <p className="text-xl md:text-2xl font-inter text-muted-foreground mb-8">
              Chef-crafted, gluten-free meals that change weekly. No boring repeats!
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              {features.map((feature, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="px-4 py-2 text-sm font-inter border-2 hover:bg-primary/10 transition-colors"
                >
                  {feature.icon && <feature.icon className="w-4 h-4 mr-2" />}
                  {feature.text}
                </Badge>
              ))}
            </div>
            <a href="https://smashmeals.bottle.com/b/9730175" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="text-lg px-12 py-7 h-auto font-inter shadow-elevated">
                View Full Menu & Order
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-center mb-4">
              Menu Categories
            </h2>
            <p className="text-xl font-inter text-muted-foreground text-center mb-16">
              Over 20 rotating options each week
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((category, index) => (
                <Card 
                  key={index} 
                  className="p-8 text-center border-0 bg-white/60 dark:bg-card/60 backdrop-blur-sm shadow-card hover:shadow-elevated transition-all hover:scale-105 group cursor-pointer"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-card group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold font-playfair mb-2">{category.name}</h3>
                  <p className="text-muted-foreground font-inter text-sm">
                    {category.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How Menu Works */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-center mb-16">
              How Our Menu Works
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center border-0 bg-white/80 dark:bg-card/80 backdrop-blur-sm shadow-elevated">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-primary-foreground shadow-card">
                  1
                </div>
                <h3 className="text-2xl font-bold font-playfair mb-4">Menu Drops Monday</h3>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  Every Monday morning, we release a brand new menu with 20+ fresh options including entrees, breakfasts, sides, and snacks.
                </p>
              </Card>

              <Card className="p-8 text-center border-0 bg-white/80 dark:bg-card/80 backdrop-blur-sm shadow-elevated">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-accent-foreground shadow-card">
                  2
                </div>
                <h3 className="text-2xl font-bold font-playfair mb-4">Order by Thursday</h3>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  Browse the menu and place your order online. You have until Thursday at 11:59 PM to customize your week's meals.
                </p>
              </Card>

              <Card className="p-8 text-center border-0 bg-white/80 dark:bg-card/80 backdrop-blur-sm shadow-elevated">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-primary-foreground shadow-card">
                  3
                </div>
                <h3 className="text-2xl font-bold font-playfair mb-4">Pickup or Delivery</h3>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  Pick up your fresh meals on Sunday or Monday, or have them shipped frozen to your door via FedEx 2-day delivery.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Nutrition Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 border-0 bg-gradient-to-br from-primary/10 via-background to-accent/5 backdrop-blur-sm shadow-elevated">
              <div className="text-center mb-8">
                <Flame className="w-16 h-16 text-primary mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
                  Nutrition Transparency
                </h2>
                <p className="text-xl font-inter text-muted-foreground">
                  Every meal includes complete nutritional information
                </p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div className="p-6 bg-white/60 dark:bg-card/60 rounded-2xl">
                  <div className="text-3xl font-bold font-playfair text-primary mb-2">Cal</div>
                  <div className="text-sm font-inter text-muted-foreground">Calories per meal</div>
                </div>
                <div className="p-6 bg-white/60 dark:bg-card/60 rounded-2xl">
                  <div className="text-3xl font-bold font-playfair text-accent mb-2">P</div>
                  <div className="text-sm font-inter text-muted-foreground">Protein grams</div>
                </div>
                <div className="p-6 bg-white/60 dark:bg-card/60 rounded-2xl">
                  <div className="text-3xl font-bold font-playfair text-primary mb-2">C</div>
                  <div className="text-sm font-inter text-muted-foreground">Carbs grams</div>
                </div>
                <div className="p-6 bg-white/60 dark:bg-card/60 rounded-2xl">
                  <div className="text-3xl font-bold font-playfair text-accent mb-2">F</div>
                  <div className="text-sm font-inter text-muted-foreground">Fat grams</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Sample Menu Preview */}
      <section className="py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
              Popular Menu Items
            </h2>
            <p className="text-xl font-inter text-muted-foreground mb-8">
              Here's a taste of what you might find on our weekly menu
            </p>
            
            <Card className="p-8 md:p-12 border-0 bg-white/80 dark:bg-card/80 backdrop-blur-sm shadow-elevated">
              <div className="space-y-6 text-left">
                <div className="border-b border-border pb-6">
                  <h3 className="text-2xl font-bold font-playfair mb-2">Bourbon Chicken & Rice</h3>
                  <p className="text-muted-foreground font-inter mb-2">Tender chicken in sweet bourbon glaze with jasmine rice and steamed vegetables</p>
                  <div className="flex gap-4 text-sm font-semibold">
                    <span>450 cal</span>
                    <span>|</span>
                    <span>35g protein</span>
                    <span>|</span>
                    <span>45g carbs</span>
                    <span>|</span>
                    <span>12g fat</span>
                  </div>
                </div>

                <div className="border-b border-border pb-6">
                  <h3 className="text-2xl font-bold font-playfair mb-2">Protein Pancake Stack</h3>
                  <p className="text-muted-foreground font-inter mb-2">Fluffy gluten-free pancakes with sugar-free syrup and turkey sausage</p>
                  <div className="flex gap-4 text-sm font-semibold">
                    <span>380 cal</span>
                    <span>|</span>
                    <span>28g protein</span>
                    <span>|</span>
                    <span>42g carbs</span>
                    <span>|</span>
                    <span>9g fat</span>
                  </div>
                </div>

                <div className="pb-2">
                  <h3 className="text-2xl font-bold font-playfair mb-2">Teriyaki Beef Bowl</h3>
                  <p className="text-muted-foreground font-inter mb-2">Lean beef with teriyaki sauce, stir-fried veggies, and cauliflower rice</p>
                  <div className="flex gap-4 text-sm font-semibold">
                    <span>420 cal</span>
                    <span>|</span>
                    <span>38g protein</span>
                    <span>|</span>
                    <span>32g carbs</span>
                    <span>|</span>
                    <span>15g fat</span>
                  </div>
                </div>
              </div>
            </Card>

            <p className="text-muted-foreground font-inter mt-8">
              Menu changes weekly—these are just examples!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Ready to See This Week's Menu?
            </h3>
            <p className="text-xl font-inter text-muted-foreground mb-8">
              Browse over 20 delicious options and place your order before Thursday at midnight
            </p>
            <a href="https://smashmeals.bottle.com/b/9730175" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="text-lg px-12 py-7 h-auto font-inter shadow-elevated">
                View Menu & Order Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Menu;
