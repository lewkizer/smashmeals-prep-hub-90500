import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Shield, Utensils, Scale, Clock, Sparkles, Check, ChefHat, ThermometerSnowflake } from "lucide-react";
import InternalLinks from "@/components/InternalLinks";

// Bariatric product images
import shreddedBeefHibachi from "@/assets/bariatric/shredded-beef-hibachi.jpg";
import chickenCreamCup from "@/assets/bariatric/chicken-cream-cup.jpg";
import chickenHibachi from "@/assets/bariatric/chicken-hibachi.jpg";
import cheesyEggWhite from "@/assets/bariatric/cheesy-egg-white.jpg";
import strawberryCheesecakeBite from "@/assets/bariatric/strawberry-cheesecake-bite.jpg";
import broccoliCheddarSoup from "@/assets/bariatric/broccoli-cheddar-soup.jpg";

const BariatricLine = () => {
  const products = [
    {
      name: "Shredded Beef Hibachi Bowl",
      price: 8.00,
      description: "Tender, slow-cooked shredded beef with hibachi vegetables. Soft texture, easy to chew and digest.",
      protein: "22g",
      highlights: ["Soft shredded texture", "Easy to portion", "Low carb"],
      image: shreddedBeefHibachi
    },
    {
      name: "Rotisserie-Style Chicken Cream Cup",
      price: 8.00,
      description: "Creamy, comforting rotisserie chicken in a smooth, satisfying sauce. Perfect for early post-op stages.",
      protein: "24g",
      highlights: ["Creamy texture", "Gentle on stomach", "Comfort food"],
      image: chickenCreamCup
    },
    {
      name: "Chicken Hibachi Bowl",
      price: 8.00,
      description: "Tender chicken pieces with savory hibachi-style vegetables. Soft, flavorful, and easy to eat slowly.",
      protein: "26g",
      highlights: ["Lean protein", "Balanced macros", "Satisfying"],
      image: chickenHibachi
    },
    {
      name: "Cheesy Egg-White Breakfast",
      price: 6.00,
      description: "Fluffy egg whites with melted cheese. High protein breakfast that's gentle and easy to digest.",
      protein: "18g",
      highlights: ["Morning protein boost", "Soft & fluffy", "Low fat"],
      image: cheesyEggWhite
    },
    {
      name: "Strawberry Protein Cheesecake Bite",
      price: 3.00,
      description: "A small, protein-packed treat when you need something sweet. No guilt, no dumping syndrome risk.",
      protein: "8g",
      highlights: ["Sweet treat", "No added sugar", "Portion-controlled"],
      image: strawberryCheesecakeBite
    },
    {
      name: "Broccoli Cheddar Soup",
      price: 6.00,
      description: "Warm, velvety soup with broccoli and cheddar. Perfect for soft food stages and cold days.",
      protein: "16g",
      highlights: ["Soup texture", "Easy to sip", "Comforting"],
      image: broccoliCheddarSoup
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "When can I start eating SmashMeals Bariatric Line meals after surgery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our bariatric line is designed for the soft food phase and beyond, typically 4-6 weeks post-op. The soups can often be introduced earlier. Always follow your surgeon's specific diet progression guidelines."
        }
      },
      {
        "@type": "Question",
        "name": "What makes these meals different from regular SmashMeals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our Bariatric Line features smaller portions (5-7 oz), softer textures designed for healing stomachs, 16-26g protein per serving, lower price points ($3-8), and recipes specifically crafted to minimize dumping syndrome risk."
        }
      },
      {
        "@type": "Question",
        "name": "Will these meals cause dumping syndrome?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our bariatric meals are formulated with no added sugars and low simple carbohydrates to minimize dumping syndrome risk. The soft textures also help food pass through your stomach at a comfortable rate."
        }
      },
      {
        "@type": "Question",
        "name": "How should I eat these meals as a bariatric patient?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Eat slowly over 20-30 minutes, chewing thoroughly. Stop when you feel comfortably satisfied. Don't drink fluids 30 minutes before or after eating. Start with smaller portions if you're early post-op."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use these meals for my entire daily protein intake?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! With 16-26g protein per meal, eating 3 bariatric meals plus a protein shake can help you reach your 60-80g daily protein goal. Our meals make tracking macros simple."
        }
      }
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "SmashMeals Bariatric Line",
    "description": "Portion-controlled, high-protein, soft-textured meals designed for bariatric surgery patients. Gentle on healing stomachs, easy to track, and delicious.",
    "brand": {
      "@type": "Brand",
      "name": "SmashMeals"
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "3.00",
      "highPrice": "8.00",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
  };

  const relatedLinks = [
    {
      title: "GLP-1 Friendly Meals",
      description: "Meals designed for Ozempic, Wegovy, and Mounjaro users managing appetite changes.",
      path: "/glp1"
    },
    {
      title: "General Bariatric Info",
      description: "Learn more about high-protein meal prep for all bariatric surgery types.",
      path: "/bariatric"
    },
    {
      title: "How It Works",
      description: "Order by Thursday, receive fresh meals Monday. Simple, convenient, reliable.",
      path: "/how-it-works"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Bariatric Meal Prep Line | Soft, Portion-Controlled Meals | SmashMeals</title>
        <meta name="description" content="SmashMeals Bariatric Line: Soft, portion-controlled, high-protein meals for life after weight loss surgery. $3-8 per meal. Gentle on stomach, easy to track." />
        <meta name="keywords" content="bariatric meal prep, post-op bariatric meals, gastric sleeve meal prep, gastric bypass meals, soft bariatric food, portion controlled meals, high protein bariatric" />
        <link rel="canonical" href="https://smashmeals.com/bariatric-line" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      </Helmet>

      <LocalBusinessSchema />
      <Header />
      <PageBreadcrumb currentPage="Bariatric Line" />

      <main className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-rose-50 via-background to-primary/5 dark:from-rose-950/20 dark:via-background dark:to-primary/10">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                <Heart className="w-5 h-5" />
                <span className="font-semibold">Designed for Life After Surgery</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold font-playfair leading-tight">
                SmashMeals<br />
                <span className="text-primary">Bariatric Line</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Soft, portion-controlled, high-protein meals created to support healing, reduce stress, and make daily nutrition simple. Every dish is crafted to be <strong className="text-foreground">gentle on your stomach</strong>, low in carbs, and easy to track.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="flex items-center gap-2 bg-background border rounded-full px-4 py-2">
                  <Scale className="w-4 h-4 text-primary" />
                  Portion-Controlled
                </span>
                <span className="flex items-center gap-2 bg-background border rounded-full px-4 py-2">
                  <Utensils className="w-4 h-4 text-primary" />
                  Soft Textures
                </span>
                <span className="flex items-center gap-2 bg-background border rounded-full px-4 py-2">
                  <Shield className="w-4 h-4 text-primary" />
                  100% Gluten-Free
                </span>
              </div>

              <div className="pt-4">
                <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="lg" className="text-lg px-8">
                    Order Bariatric Meals Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why This Line is Different */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-4">
                Why Our Bariatric Line is Different
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Created specifically for the unique needs of post-bariatric patients—not just smaller versions of regular meals
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-8 text-center border-2 hover:border-primary/50 transition-colors">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ThermometerSnowflake className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Soft, Gentle Textures</h3>
                <p className="text-muted-foreground">
                  Shredded proteins, creamy soups, and tender preparations that won't stress your healing stomach. Easy to chew, easy to digest.
                </p>
              </Card>

              <Card className="p-8 text-center border-2 hover:border-primary/50 transition-colors">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Scale className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Right-Sized Portions</h3>
                <p className="text-muted-foreground">
                  5-7 oz servings designed for your new stomach capacity. No waste, no guessing, no overwhelming portions to navigate.
                </p>
              </Card>

              <Card className="p-8 text-center border-2 hover:border-primary/50 transition-colors">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">No Dumping Syndrome Risk</h3>
                <p className="text-muted-foreground">
                  Zero added sugars, minimal simple carbs. Formulated to pass through comfortably without triggering that dreaded dumping response.
                </p>
              </Card>

              <Card className="p-8 text-center border-2 hover:border-primary/50 transition-colors">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ChefHat className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Actually Delicious</h3>
                <p className="text-muted-foreground">
                  Surgery shouldn't mean boring food forever. Our chef-crafted meals deliver real flavor and comfort without compromising your progress.
                </p>
              </Card>

              <Card className="p-8 text-center border-2 hover:border-primary/50 transition-colors">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Easy Macro Tracking</h3>
                <p className="text-muted-foreground">
                  Every meal has clear protein counts. With 16-26g per serving, hitting your 60-80g daily goal becomes simple math, not stressful calculations.
                </p>
              </Card>

              <Card className="p-8 text-center border-2 hover:border-primary/50 transition-colors">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Affordable Daily Nutrition</h3>
                <p className="text-muted-foreground">
                  $3-8 per meal means you can afford to eat well every day, not just occasionally. Consistency is key to long-term success.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-4">
                The Bariatric Collection
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Each meal designed for your healing journey—from soft food stages through long-term maintenance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold leading-tight">{product.name}</h3>
                      <span className="text-2xl font-bold text-primary">${product.price.toFixed(2)}</span>
                    </div>
                    
                    <p className="text-muted-foreground">{product.description}</p>
                    
                    <div className="flex items-center gap-2 text-lg font-semibold text-primary">
                      <Shield className="w-5 h-5" />
                      {product.protein} Protein
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {product.highlights.map((highlight, idx) => (
                        <span key={idx} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="text-lg px-8">
                  Order Your Bariatric Meals
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-4">
                Your Post-Surgery Nutrition Journey
              </h2>
              <p className="text-lg text-muted-foreground">
                SmashMeals Bariatric Line grows with you through every phase
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-xl font-bold text-muted-foreground">1-4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Weeks 1-4: Liquid & Pureed Phase</h3>
                  <p className="text-muted-foreground">
                    Follow your surgeon's plan. Our <strong>Broccoli Cheddar Soup</strong> may be introduced once cleared for pureed foods—it blends smooth and provides protein while being easy on your healing stomach.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">4-8</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Weeks 4-8: Soft Foods Phase</h3>
                  <p className="text-muted-foreground">
                    This is where our Bariatric Line shines. Start with the <strong>Chicken Cream Cup</strong> and <strong>Cheesy Egg White</strong> breakfast. Soft, easy to chew, and packed with protein. Eat slowly over 20-30 minutes.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/40 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary-foreground">2-6</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Months 2-6: Building Tolerance</h3>
                  <p className="text-muted-foreground">
                    Introduce the <strong>Hibachi Bowls</strong>—shredded beef and tender chicken with vegetables. The textures are soft but more substantial. These become your daily protein powerhouses.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-xl font-bold text-primary-foreground">6+</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Months 6+: Long-Term Success</h3>
                  <p className="text-muted-foreground">
                    Continue with the full Bariatric Line or transition to our regular high-protein menu as tolerated. Treat yourself with the <strong>Strawberry Protein Cheesecake Bite</strong>—a sweet reward without the dumping risk.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits Deep Dive */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-bold font-playfair text-center mb-16">
              Easy on Your Stomach. Serious About Your Goals.
            </h2>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-bold mb-4">Why Soft Textures Matter After Surgery</h3>
              <p className="text-muted-foreground mb-6">
                After bariatric surgery, your stomach is healing and much smaller than before. Hard, tough, or fibrous foods can cause discomfort, nausea, or even get stuck. That's why every meal in our Bariatric Line features:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Shredded proteins</strong> that fall apart easily and don't require extensive chewing</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Creamy preparations</strong> that glide down smoothly and digest comfortably</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Tender vegetables</strong> cooked until soft, never raw or crunchy</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Soups</strong> that can be sipped slowly throughout a meal</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold mb-4">Hitting Your Protein Goals Without Stress</h3>
              <p className="text-muted-foreground mb-6">
                Most bariatric programs recommend <strong>60-80 grams of protein daily</strong>. With your smaller stomach, that's a challenge. Here's how our Bariatric Line makes it achievable:
              </p>
              
              <Card className="p-6 bg-background mb-8">
                <h4 className="font-bold text-lg mb-4">Sample Daily Protein Plan</h4>
                <div className="space-y-3">
                  <div className="flex justify-between border-b pb-2">
                    <span>Breakfast: Cheesy Egg-White</span>
                    <span className="font-bold">18g</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span>Lunch: Chicken Hibachi Bowl</span>
                    <span className="font-bold">26g</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span>Dinner: Shredded Beef Hibachi Bowl</span>
                    <span className="font-bold">22g</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span>Treat: Strawberry Protein Cheesecake Bite</span>
                    <span className="font-bold">8g</span>
                  </div>
                  <div className="flex justify-between pt-2 text-lg">
                    <span className="font-bold">Daily Total</span>
                    <span className="font-bold text-primary">74g protein</span>
                  </div>
                </div>
              </Card>

              <h3 className="text-2xl font-bold mb-4">No More Fear of Dumping Syndrome</h3>
              <p className="text-muted-foreground mb-6">
                Dumping syndrome—that awful nausea, cramping, and sweating after eating sugary foods—is one of the most dreaded post-surgery complications. Our Bariatric Line eliminates the trigger:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Zero added sugars</strong> in all savory meals</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Low simple carbohydrates</strong> that won't spike and crash</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Even the cheesecake bite</strong> is made with protein-based sweeteners—safe to enjoy</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              What Bariatric Patients Say
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-lg italic mb-4">
                  "Three months post-sleeve and these meals have been a game-changer. The portions are perfect—I actually finish my meal without feeling sick. The chicken cream cup is my favorite."
                </p>
                <p className="font-semibold">— Sarah M., Knoxville TN</p>
                <p className="text-sm text-muted-foreground">Gastric Sleeve Patient</p>
              </Card>

              <Card className="p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-lg italic mb-4">
                  "Finally, meal prep that understands bariatric needs! I was so tired of cutting regular meals into tiny portions. These are already sized right and I've had zero dumping issues."
                </p>
                <p className="font-semibold">— Michael R., Johnson City TN</p>
                <p className="text-sm text-muted-foreground">Gastric Bypass Patient</p>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqSchema.mainEntity.map((faq, index) => (
                <Card key={index} className="p-6">
                  <h3 className="text-xl font-bold mb-3">{faq.name}</h3>
                  <p className="text-muted-foreground">{faq.acceptedAnswer.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto max-w-3xl text-center">
            <Heart className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">
              Make Post-Surgery Nutrition Simple
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Whether you're in the early post-op phase or continuing your long-term protein goals, our Bariatric Line helps you stay consistent, feel satisfied, and meet your targets with confidence.
            </p>
            <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="text-lg px-8">
                Order Your Bariatric Meals Today
              </Button>
            </a>
            <p className="text-sm text-muted-foreground mt-6">
              Always consult your bariatric surgeon or dietitian before starting any new foods.
            </p>
          </div>
        </section>

        {/* Internal Links */}
        <InternalLinks title="Related Resources" links={relatedLinks} />
      </main>

      <Footer />
    </>
  );
};

export default BariatricLine;
