import { Helmet } from "react-helmet";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Clock, Flame, ShoppingCart, Truck, ChefHat, Users, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/freezer-meals/hero-freezer-meals.jpg";
import honeyGarlicChicken from "@/assets/freezer-meals/honey-garlic-chicken.jpg";
import turkeyAlfredo from "@/assets/freezer-meals/turkey-alfredo.jpg";
import beefTacoCasserole from "@/assets/freezer-meals/beef-taco-casserole.jpg";
import lemonSalmon from "@/assets/freezer-meals/lemon-salmon.jpg";
import breakfastBurritoSkillet from "@/assets/freezer-meals/breakfast-burrito-skillet.jpg";
import southernBreakfastBake from "@/assets/freezer-meals/southern-breakfast-bake.jpg";
import porkTenderloinDinner from "@/assets/freezer-meals/pork-tenderloin-dinner.jpg";
import bbqPorkMeal from "@/assets/freezer-meals/bbq-pork-meal.jpg";
import chickenPestoPasta from "@/assets/freezer-meals/chicken-pesto-pasta.jpg";
import steakBiteDinner from "@/assets/freezer-meals/steak-bite-dinner.jpg";
import blueberryOatBake from "@/assets/freezer-meals/blueberry-oat-bake.jpg";
import chickenSausageHash from "@/assets/freezer-meals/chicken-sausage-hash.jpg";
import baconEggCheeseCasserole from "@/assets/freezer-meals/bacon-egg-cheese-casserole.jpg";

const entrees = [
  {
    name: "Family Honey Garlic Chicken & Rice Bowl",
    fullPrice: "$50-55",
    halfPrice: "$25-28",
    protein: "20 oz grilled chicken breast tossed in honey-garlic sauce",
    halfProtein: "10 oz grilled chicken breast tossed in honey-garlic sauce",
    sides: ["24 oz white rice", "12 oz steamed green beans"],
    halfSides: ["12 oz white rice", "6 oz steamed green beans"],
    image: honeyGarlicChicken,
    badge: "Fan Favorite",
  },
  {
    name: "Family Smoked Turkey Alfredo Bake",
    fullPrice: "$50-55",
    halfPrice: "$25-28",
    protein: "20 oz house-smoked turkey, cubed",
    halfProtein: "10 oz house-smoked turkey, cubed",
    sides: ["36 oz quinoa pasta Alfredo (gluten-free Alfredo, light cream cheese, parmesan, garlic)"],
    halfSides: ["18 oz quinoa pasta Alfredo (gluten-free Alfredo, light cream cheese, parmesan, garlic)"],
    image: turkeyAlfredo,
    badge: "Creamy & Rich",
  },
  {
    name: "Family Beef Taco Casserole",
    fullPrice: "$50-55",
    halfPrice: "$25-28",
    protein: "20 oz seasoned ground beef (taco blend)",
    halfProtein: "10 oz seasoned ground beef (taco blend)",
    sides: ["24 oz rice base", "12 oz corn/black bean mix"],
    halfSides: ["12 oz rice base", "6 oz corn/black bean mix"],
    extras: "Layered with mild salsa + cheddar on top",
    image: beefTacoCasserole,
    badge: "Kid-Approved",
  },
  {
    name: "Family Lemon Salmon Plate",
    fullPrice: "$50-55",
    halfPrice: "$25-28",
    protein: "20 oz seasoned baked salmon",
    halfProtein: "10 oz seasoned baked salmon",
    sides: ["18 oz roasted potatoes", "18 oz roasted zucchini + squash"],
    halfSides: ["9 oz roasted potatoes", "9 oz roasted zucchini + squash"],
    image: lemonSalmon,
    badge: "Heart Healthy",
  },
  {
    name: "Family Pork Tenderloin Dinner",
    fullPrice: "$50-55",
    halfPrice: "$25-28",
    protein: "20 oz seasoned sliced pork tenderloin",
    halfProtein: "10 oz seasoned sliced pork tenderloin",
    sides: ["Roasted potatoes", "Mixed vegetables"],
    halfSides: ["Half portion roasted potatoes", "Half portion mixed vegetables"],
    serves: "Serves 6",
    halfServes: "Serves 3",
    image: porkTenderloinDinner,
  },
  {
    name: "BBQ Pork Family Meal",
    fullPrice: "$50-55",
    halfPrice: "$25-28",
    protein: "20 oz house-smoked pulled pork with BBQ sauce",
    halfProtein: "10 oz house-smoked pulled pork with BBQ sauce",
    sides: ["Baked beans", "Corn"],
    halfSides: ["Half portion baked beans", "Half portion corn"],
    image: bbqPorkMeal,
    badge: "Southern Classic",
  },
  {
    name: "Family Chicken & Pesto Pasta",
    fullPrice: "$50-55",
    halfPrice: "$25-28",
    protein: "20 oz grilled chicken breast",
    halfProtein: "10 oz grilled chicken breast",
    sides: ["Pesto quinoa pasta (gluten-free)", "Choice of seasonal vegetables"],
    halfSides: ["Half portion pesto quinoa pasta (gluten-free)", "Choice of seasonal vegetables"],
    image: chickenPestoPasta,
    badge: "Fresh & Light",
  },
  {
    name: "Family Steak Bite Dinner",
    fullPrice: "$50-55",
    halfPrice: "$25-28",
    protein: "20 oz seared steak bites",
    halfProtein: "10 oz seared steak bites",
    sides: ["Roasted potatoes", "Seasonal vegetable medley"],
    halfSides: ["Half portion roasted potatoes", "Half portion seasonal vegetable medley"],
    serves: "Serves 6",
    halfServes: "Serves 3",
    image: steakBiteDinner,
    badge: "Premium",
  },
];

const breakfastMeals = [
  {
    name: "Family Breakfast Burrito Skillet",
    fullPrice: "$40",
    halfPrice: "$20",
    portions: "42 oz",
    halfPortions: "21 oz",
    ingredients: [
      "20 oz scrambled eggs",
      "12 oz diced potatoes",
      "8 oz turkey sausage crumbles",
      "2 oz light cheese",
    ],
    halfIngredients: [
      "10 oz scrambled eggs",
      "6 oz diced potatoes",
      "4 oz turkey sausage crumbles",
      "1 oz light cheese",
    ],
    image: breakfastBurritoSkillet,
  },
  {
    name: "Family Southern Smash Breakfast Bake",
    fullPrice: "$40",
    halfPrice: "$20",
    portions: "42 oz",
    halfPortions: "21 oz",
    ingredients: [
      "20 oz grits",
      "10 oz turkey sausage",
      "10 oz egg whites",
      "2 oz light cheese",
    ],
    halfIngredients: [
      "10 oz grits",
      "5 oz turkey sausage",
      "5 oz egg whites",
      "1 oz light cheese",
    ],
    image: southernBreakfastBake,
    badge: "Southern Style",
  },
  {
    name: "Family Blueberry Protein Oat Bake",
    fullPrice: "$40",
    halfPrice: "$20",
    portions: "42 oz",
    halfPortions: "21 oz",
    ingredients: [
      "20 oz rolled oats",
      "10 oz Greek yogurt mixture",
      "8 oz blueberries",
      "4 oz vanilla + cinnamon",
    ],
    halfIngredients: [
      "10 oz rolled oats",
      "5 oz Greek yogurt mixture",
      "4 oz blueberries",
      "2 oz vanilla + cinnamon",
    ],
    image: blueberryOatBake,
    badge: "High Protein",
  },
  {
    name: "Family Chicken Sausage Hash & Eggs",
    fullPrice: "$40",
    halfPrice: "$20",
    portions: "42 oz",
    halfPortions: "21 oz",
    ingredients: [
      "18 oz diced sweet potatoes",
      "12 oz chicken sausage",
      "12 oz scrambled eggs",
    ],
    halfIngredients: [
      "9 oz diced sweet potatoes",
      "6 oz chicken sausage",
      "6 oz scrambled eggs",
    ],
    image: chickenSausageHash,
  },
  {
    name: "Family Bacon, Egg & Cheese Breakfast Casserole",
    fullPrice: "$40",
    halfPrice: "$20",
    portions: "42 oz",
    halfPortions: "21 oz",
    ingredients: [
      "20 oz eggs/egg whites",
      "16 oz hashbrown base",
      "4 oz bacon",
      "Light cheddar on top",
    ],
    halfIngredients: [
      "10 oz eggs/egg whites",
      "8 oz hashbrown base",
      "2 oz bacon",
      "Light cheddar on top",
    ],
    image: baconEggCheeseCasserole,
    badge: "Classic",
  },
];

const benefits = [
  {
    icon: Clock,
    title: "Save 10+ Hours Weekly",
    description: "No more meal planning, grocery shopping, or prep work. Just heat and serve delicious family meals.",
  },
  {
    icon: Flame,
    title: "100% Gluten-Free",
    description: "Every meal is certified gluten-free, made with premium ingredients and no artificial preservatives.",
  },
  {
    icon: Users,
    title: "Feeds The Whole Family",
    description: "Generous portions designed to serve 4-6 people. Perfect for families or meal prepping for the week.",
  },
  {
    icon: Heart,
    title: "Made With Love",
    description: "Prepared fresh in our commercial kitchen using the same recipes we make for our own families.",
    link: "/about",
  },
  {
    icon: Truck,
    title: "Pickup or Delivery",
    description: "Available for pickup at multiple Tri-Cities locations or delivered right to your doorstep.",
    link: "https://smashmeals.square.site",
  },
  {
    icon: ChefHat,
    title: "Restaurant Quality",
    description: "Chef-crafted meals that taste homemade, not mass-produced. Real food, real flavor, real convenient.",
  },
] as const;

export default function FreezerMeals() {
  return (
    <>
      <Helmet>
        <title>Family Freezer Meals | SmashMeals - Gluten-Free Meal Prep Tri-Cities</title>
        <meta 
          name="description" 
          content="Order SmashMeals' family freezer meals in Tri-Cities TN. 100% gluten-free, feeds 4-6 people, ready in minutes. Dinner entrees $50-55, breakfast meals $40. Pickup or delivery available." 
        />
        <meta 
          name="keywords" 
          content="family freezer meals, gluten-free freezer meals, Tri-Cities meal prep, family meal delivery, bulk meal prep, Johnson City freezer meals, Kingsport family meals, Bristol meal prep, family dinner meals, family breakfast meals, freezer meal delivery Tennessee" 
        />
        <link rel="canonical" href="https://smashmeals.com/freezer-meals" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Family Freezer Meals | SmashMeals Tri-Cities" />
        <meta property="og:description" content="100% gluten-free family freezer meals that serve 4-6. Heat and eat in minutes. Made fresh, never frozen until packaged." />
        <meta property="og:image" content={heroImage} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smashmeals.com/freezer-meals" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Family Freezer Meals | SmashMeals" />
        <meta name="twitter:description" content="100% gluten-free family freezer meals that serve 4-6. $50-55 dinner entrees, $40 breakfast meals." />
        <meta name="twitter:image" content={heroImage} />
        
        {/* Structured Data for Family Meals */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "SmashMeals Family Freezer Meals",
            "description": "100% gluten-free family freezer meals that serve 4-6 people. Includes dinner entrees and breakfast meals with flexible half-size options.",
            "brand": {
              "@type": "Brand",
              "name": "SmashMeals"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "USD",
              "lowPrice": "40.00",
              "highPrice": "55.00",
              "offerCount": "13",
              "availability": "https://schema.org/InStock",
              "url": "https://smashmeals.com/freezer-meals"
            },
            "category": "Gluten-Free Family Meals",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "150"
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        
        <div className="container relative z-10 py-20 text-center text-white">
          <Badge className="mb-4 bg-primary text-primary-foreground text-lg px-6 py-2">
            <Sparkles className="w-4 h-4 mr-2 inline" />
            New Family Freezer Meals
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            More Than Just Dinner<br />
            <span className="text-primary">It's Family Time</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
            100% gluten-free family meals that feed 4-6 people. Made fresh, frozen for your convenience, and ready in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <a href="https://smashmeals.square.site" target="_blank" rel="noopener noreferrer">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Order Now
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/how-it-works">
                Learn How It Works
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Families Love Our Freezer Meals
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The convenience of takeout with the quality of home cooking. No compromise on taste or nutrition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index}>
                {'link' in benefit && benefit.link ? (
                  <Link to={benefit.link} className="block h-full">
                    <Card className="border-2 hover:shadow-lg transition-shadow h-full">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                          <benefit.icon className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">{benefit.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">{benefit.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </Link>
                ) : (
                  <Card className="border-2 hover:shadow-lg transition-shadow h-full">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <benefit.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{benefit.description}</CardDescription>
                    </CardContent>
                  </Card>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dinner Entrees Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-lg px-6 py-2">Dinner Entrees</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Family Dinner Meals
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each meal feeds 4-6 people and includes generous portions of protein and sides. $50-55 per meal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {entrees.map((meal, index) => {
              const MealCard = () => {
                const [selectedSize, setSelectedSize] = useState<'full' | 'half'>('full');
                const isFull = selectedSize === 'full';
                
                return (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    {meal.image && (
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={meal.image} 
                          alt={meal.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        {meal.badge && (
                          <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                            {meal.badge}
                          </Badge>
                        )}
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex justify-between items-start mb-3">
                        <CardTitle className="text-xl flex-1">{meal.name}</CardTitle>
                        <span className="text-2xl font-bold text-primary whitespace-nowrap ml-2">
                          {isFull ? meal.fullPrice : meal.halfPrice}
                        </span>
                      </div>
                      
                      {/* Size Selector */}
                      <div className="flex gap-2 mb-2">
                        <Button
                          variant={isFull ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedSize('full')}
                          className="flex-1"
                        >
                          Full Size
                        </Button>
                        <Button
                          variant={!isFull ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedSize('half')}
                          className="flex-1"
                        >
                          Half Size
                        </Button>
                      </div>
                      
                      {meal.serves && (
                        <Badge variant="outline" className="w-fit">
                          {isFull ? meal.serves : meal.halfServes}
                        </Badge>
                      )}
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <p className="font-semibold text-sm text-muted-foreground mb-1">Protein:</p>
                        <p className="text-sm">{isFull ? meal.protein : meal.halfProtein}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-muted-foreground mb-1">Sides:</p>
                        <ul className="text-sm space-y-1">
                          {(isFull ? meal.sides : meal.halfSides).map((side, i) => (
                            <li key={i}>• {side}</li>
                          ))}
                        </ul>
                      </div>
                      {meal.extras && (
                        <div>
                          <p className="font-semibold text-sm text-muted-foreground mb-1">Extras:</p>
                          <p className="text-sm">{meal.extras}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              };
              
              return <MealCard key={index} />;
            })}
          </div>
        </div>
      </section>

      {/* Breakfast Section */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-lg px-6 py-2">Breakfast Meals</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Start The Day Right
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              42 oz family breakfast meals that make mornings easier. Just $40 per meal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {breakfastMeals.map((meal, index) => {
              const BreakfastCard = () => {
                const [selectedSize, setSelectedSize] = useState<'full' | 'half'>('full');
                const isFull = selectedSize === 'full';
                
                return (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    {meal.image && (
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={meal.image} 
                          alt={meal.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        {meal.badge && (
                          <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                            {meal.badge}
                          </Badge>
                        )}
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex justify-between items-start mb-3">
                        <CardTitle className="text-xl flex-1">{meal.name}</CardTitle>
                        <span className="text-2xl font-bold text-primary whitespace-nowrap ml-2">
                          {isFull ? meal.fullPrice : meal.halfPrice}
                        </span>
                      </div>
                      
                      {/* Size Selector */}
                      <div className="flex gap-2 mb-2">
                        <Button
                          variant={isFull ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedSize('full')}
                          className="flex-1"
                        >
                          Full Size
                        </Button>
                        <Button
                          variant={!isFull ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedSize('half')}
                          className="flex-1"
                        >
                          Half Size
                        </Button>
                      </div>
                      
                      <Badge variant="outline" className="w-fit">
                        {isFull ? meal.portions : meal.halfPortions}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="font-semibold text-sm text-muted-foreground mb-2">Ingredients:</p>
                      <ul className="text-sm space-y-1">
                        {(isFull ? meal.ingredients : meal.halfIngredients).map((ingredient, i) => (
                          <li key={i}>• {ingredient}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              };
              
              return <BreakfastCard key={index} />;
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Simple. Convenient. Delicious.
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Getting restaurant-quality family meals has never been easier
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Link to="/menu" className="text-center group cursor-pointer">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
                1
              </div>
              <h3 className="text-2xl font-bold mb-3">Order Online</h3>
              <p className="text-muted-foreground">
                Browse our menu and select your favorite family meals. Mix and match dinners and breakfasts.
              </p>
            </Link>

            <Link to="/pickup-locations" className="text-center group cursor-pointer">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
                2
              </div>
              <h3 className="text-2xl font-bold mb-3">Pickup or Delivery</h3>
              <p className="text-muted-foreground">
                Choose from multiple Tri-Cities pickup locations or have meals delivered to your door.
              </p>
            </Link>

            <Link to="/how-it-works" className="text-center group cursor-pointer">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
                3
              </div>
              <h3 className="text-2xl font-bold mb-3">Heat & Enjoy</h3>
              <p className="text-muted-foreground">
                Store in your freezer, reheat when ready, and enjoy a delicious family meal in minutes.
              </p>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/menu">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Order Your Family Meals Today
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Heart key={i} className="w-6 h-6 fill-primary text-primary mx-1" />
                ))}
              </div>
              <blockquote className="text-2xl md:text-3xl font-medium italic mb-6">
                "SmashMeals freezer meals have been a game-changer for our busy family. The food tastes homemade, the portions are generous, and knowing everything is gluten-free gives us peace of mind. We order every week!"
              </blockquote>
              <cite className="text-lg text-muted-foreground not-italic">
                — Sarah M., Johnson City
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about our freezer meals
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                How do I reheat my freezer meals?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground space-y-3 pt-2">
                <div>
                  <p className="font-semibold text-foreground mb-2">From Frozen (Recommended):</p>
                  <ul className="space-y-2 ml-4">
                    <li>• <strong>Oven:</strong> Preheat to 350°F. Remove lid, cover with foil, and bake for 60-75 minutes until internal temperature reaches 165°F. Remove foil for last 10 minutes for crispy top.</li>
                    <li>• <strong>Microwave:</strong> Remove from container and place in microwave-safe dish. Heat on 50% power for 8-10 minutes, stirring halfway. Then heat on high for 3-5 minutes until steaming hot.</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">From Thawed:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• <strong>Oven:</strong> Preheat to 350°F and bake for 30-40 minutes until heated through (165°F).</li>
                    <li>• <strong>Stovetop:</strong> Heat in a large skillet over medium heat for 10-15 minutes, stirring occasionally.</li>
                  </ul>
                </div>
                <p className="text-sm italic mt-3">💡 Tip: For best results, thaw in refrigerator overnight before reheating.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                How long do the meals last in the freezer?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground space-y-2 pt-2">
                <p>Our freezer meals will stay fresh for <strong className="text-foreground">3-6 months</strong> when stored properly in your freezer at 0°F or below.</p>
                <p>For best quality and flavor, we recommend enjoying them within the first 3 months. Each meal is labeled with the date it was prepared.</p>
                <p className="text-sm italic mt-2">🧊 Storage Tip: Keep meals in the back of your freezer where temperature is most consistent.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                Are all meals 100% gluten-free?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground space-y-2 pt-2">
                <p><strong className="text-foreground">Yes!</strong> Every single meal we prepare is certified 100% gluten-free. We use:</p>
                <ul className="space-y-1 ml-4 mt-2">
                  <li>• Gluten-free quinoa pasta in our Alfredo and pesto dishes</li>
                  <li>• Certified gluten-free oats in breakfast bakes</li>
                  <li>• Fresh, whole ingredients with no gluten-containing fillers</li>
                  <li>• Dedicated gluten-free preparation area in our commercial kitchen</li>
                </ul>
                <p className="mt-3">All our meals are prepared in a facility that prioritizes gluten-free safety protocols, making them safe for those with celiac disease or gluten sensitivity.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                How many people does each meal feed?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground space-y-2 pt-2">
                <p>Our family freezer meals are designed to serve <strong className="text-foreground">4-6 people</strong> with generous portions.</p>
                <p><strong className="text-foreground">Dinner entrees</strong> include 20 oz of protein plus 36 oz of sides - that's over 3.5 pounds of food per meal!</p>
                <p><strong className="text-foreground">Breakfast meals</strong> total 42 oz, perfect for feeding the whole family or meal prepping for the week.</p>
                <p className="text-sm italic mt-2">👨‍👩‍👧‍👦 For smaller families, these meals also work great for having leftovers or splitting into two separate meals.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                Can I customize meals or request specific ingredients?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground space-y-2 pt-2">
                <p>Currently, our freezer meals come as pre-designed complete meals to ensure consistent quality and efficient preparation. However, we offer a wide variety of options to suit different tastes!</p>
                <p>If you have specific dietary needs or allergies beyond gluten-free, please <Link to="/contact" className="text-primary hover:underline font-medium">contact us</Link> and we'll do our best to accommodate your request for future meal prep sessions.</p>
                <p className="mt-2">We're always adding new meal options based on customer feedback, so let us know what you'd like to see!</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                What containers are the meals packaged in?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground space-y-2 pt-2">
                <p>All meals come in <strong className="text-foreground">food-safe, freezer-friendly aluminum containers</strong> with tight-sealing lids.</p>
                <p>These containers are:</p>
                <ul className="space-y-1 ml-4 mt-2">
                  <li>• Oven-safe (remove plastic lid first)</li>
                  <li>• Recyclable after use</li>
                  <li>• Designed to prevent freezer burn</li>
                  <li>• Easy to stack in your freezer</li>
                </ul>
                <p className="text-sm italic mt-2">♻️ We recommend transferring to microwave-safe dishes when reheating in the microwave.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                Do you offer delivery or just pickup?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground space-y-2 pt-2">
                <p>We offer <strong className="text-foreground">both pickup and delivery</strong> options!</p>
                <p><strong className="text-foreground">Pickup Locations:</strong> Available at multiple convenient locations throughout the Tri-Cities area. <Link to="/pickup-locations" className="text-primary hover:underline font-medium">View all pickup locations</Link>.</p>
                <p><strong className="text-foreground">Home Delivery:</strong> We deliver within our service area. Meals are transported in insulated coolers to maintain proper temperature. <Link to="/shipping" className="text-primary hover:underline font-medium">Check if we deliver to you</Link>.</p>
                <p className="text-sm italic mt-2">📦 All orders include dry ice or ice packs to keep meals frozen during transport.</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                Can I freeze meals again after thawing?
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground space-y-2 pt-2">
                <p><strong className="text-foreground">We do not recommend refreezing</strong> meals once they've been fully thawed, as this can affect food safety and quality.</p>
                <p>However, if a meal is still partially frozen with ice crystals present and has been kept refrigerated (below 40°F), it can be safely refrozen.</p>
                <p className="mt-2"><strong className="text-foreground">Best practice:</strong> Only thaw the meals you plan to eat within 3-4 days. Keep the rest frozen until you're ready to use them.</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready To Make Dinnertime Easy?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Join hundreds of Tri-Cities families who trust SmashMeals for delicious, healthy, convenient family meals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link to="/menu">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Start Your Order
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
              <Link to="/contact">
                Questions? Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
