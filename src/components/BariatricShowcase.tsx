import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Scale, Utensils, Clock } from "lucide-react";

// Import bariatric product images
import shreddedBeefHibachi from "@/assets/bariatric/shredded-beef-hibachi.jpg";
import chickenCreamCup from "@/assets/bariatric/chicken-cream-cup.jpg";
import cheesyEggWhite from "@/assets/bariatric/cheesy-egg-white.jpg";
import strawberryCheesecakeBite from "@/assets/bariatric/strawberry-cheesecake-bite.jpg";

const BariatricShowcase = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Soft Textures",
      description: "Gentle on your digestive system",
    },
    {
      icon: Scale,
      title: "Portion-Controlled",
      description: "Right-sized for bariatric needs",
    },
    {
      icon: Utensils,
      title: "High Protein",
      description: "30-45g protein per meal",
    },
    {
      icon: Clock,
      title: "Ready in Minutes",
      description: "Heat and eat convenience",
    },
  ];

  const featuredMeals = [
    {
      name: "Shredded Beef Hibachi",
      price: "$8",
      image: shreddedBeefHibachi,
      protein: "32g",
    },
    {
      name: "Chicken Cream Cup",
      price: "$8",
      image: chickenCreamCup,
      protein: "35g",
    },
    {
      name: "Cheesy Egg White",
      price: "$6",
      image: cheesyEggWhite,
      protein: "28g",
    },
    {
      name: "Strawberry Cheesecake Bite",
      price: "$3",
      image: strawberryCheesecakeBite,
      protein: "12g",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-accent/5 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
              SPECIALTY LINE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
              SmashMeals <span className="text-accent">Bariatric Line</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specifically designed for post-bariatric surgery patients. Soft textures, 
              portion-controlled servings, and high protein to support your recovery journey.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-4 shadow-md text-center border border-border/50 hover:border-accent/50 transition-colors"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <benefit.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-sm mb-1">{benefit.title}</h3>
                <p className="text-muted-foreground text-xs">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Featured Meals */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {featuredMeals.map((meal, index) => (
              <div
                key={index}
                className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={meal.image}
                    alt={meal.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-bold">
                    {meal.protein} protein
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm mb-1 line-clamp-1">{meal.name}</h3>
                  <p className="text-accent font-bold">{meal.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/bariatric-line">
              <Button variant="hero" size="lg" className="text-lg px-8">
                Explore Bariatric Line
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground mt-4">
              100% gluten-free • Dumping syndrome safe • Designed with bariatric dietitians
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BariatricShowcase;
