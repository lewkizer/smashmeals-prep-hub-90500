import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import filetMignonPlate from "@/assets/featured/filet-mignon-plate.jpg";
import lemonHerbChicken from "@/assets/featured/lemon-herb-chicken.jpg";
import shrimpCheeseGrits from "@/assets/featured/shrimp-cheese-grits.jpg";
import { Flame, Heart, Sparkles } from "lucide-react";

const FeaturedMeals = () => {
  const featuredMeals = [
    {
      name: "Garlic Herb Filet Mignon Plate",
      description: "Roasted Brussels with choice of Mashed Potato or Cauliflower",
      price: "$15.00",
      image: filetMignonPlate,
      badge: "Customer Favorite",
      icon: Heart,
    },
    {
      name: "Smash Lemon Herb Chicken",
      description: "Served with spaghetti and zucchini",
      price: "$10.00",
      image: lemonHerbChicken,
      badge: "Best Seller",
      icon: Flame,
    },
    {
      name: "Shrimp and Cheese Grits",
      description: "Creamy cheese grits with perfectly seasoned shrimp",
      price: "$11.00",
      image: shrimpCheeseGrits,
      badge: "Fan Favorite",
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-foreground mb-4">
            Featured This Week
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Chef-crafted meals that our community can't get enough of
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredMeals.map((meal, index) => {
            const Icon = meal.icon;
            return (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-elevated transition-all duration-300 hover:scale-105 border-2"
              >
                <div className="relative">
                  <img
                    src={meal.image}
                    alt={meal.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-accent text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-semibold">{meal.badge}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-2xl font-bold font-playfair text-foreground flex-1">
                      {meal.name}
                    </h3>
                    <span className="text-2xl font-bold text-primary ml-2">{meal.price}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{meal.description}</p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href="https://smashmeals.bottle.com/b/9814360"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if ((window as any).fbq) (window as any).fbq('track', 'InitiateCheckout');
            }}
          >
            <Button size="lg" className="text-lg px-8 py-6 h-auto hover:scale-105 transition-transform duration-300">
              View Full Menu & Order
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMeals;
