import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import mexicanChickenBowl from "@/assets/featured/mexican-chicken-bowl.jpg";
import smokedTurkeyButternutSquash from "@/assets/featured/smoked-turkey-butternut-squash.jpg";
import grilledSteakSalad from "@/assets/featured/grilled-steak-salad.jpg";
import { Flame, Heart, Sparkles } from "lucide-react";

const FeaturedMeals = () => {
  const featuredMeals = [
    {
      name: "SmashMeals Mexican Chicken Bowl",
      description: "Juicy chicken with smoky salsa, black beans, and peppers over rice or cauliflower rice",
      price: "$10.25",
      image: mexicanChickenBowl,
      badge: "NEW This Week",
      icon: Sparkles,
      isNew: true,
    },
    {
      name: "Smoked Turkey & Maple-Roasted Butternut Squash",
      description: "Fall-inspired plate with tender smoked turkey and maple-kissed roasted butternut squash",
      price: "$10.75",
      image: smokedTurkeyButternutSquash,
      badge: "NEW This Week",
      icon: Sparkles,
      isNew: true,
    },
    {
      name: "Grilled Steak Salad",
      description: "Spring mix with grilled steak, sharp cheddar, bacon bits, cucumbers and cherry tomatoes",
      price: "$10.50",
      image: grilledSteakSalad,
      badge: "NEW This Week",
      icon: Sparkles,
      isNew: true,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-6 py-2 mb-4">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-sm font-semibold text-accent">New Items Just Added</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-foreground mb-4">
            Featured This Week
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Order by <span className="font-bold text-primary">Thursday at Midnight</span> for Sunday pickup
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
                    alt={`${meal.name} - Gluten-free meal prep in Tri-Cities TN`}
                    className="w-full h-64 object-cover"
                  />
                  <div className={`absolute top-4 left-4 ${meal.isNew ? 'bg-gradient-to-r from-accent to-primary' : 'bg-accent'} text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg animate-pulse`}>
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
