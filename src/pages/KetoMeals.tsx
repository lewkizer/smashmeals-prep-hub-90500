import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Flame, Shield, TrendingDown, Zap, Clock, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const KetoMeals = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are SmashMeals keto-friendly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Many SmashMeals entrees are naturally keto-friendly with under 15g net carbs and 30-45g protein. Perfect for maintaining ketosis while enjoying delicious prepared meals."
        }
      },
      {
        "@type": "Question",
        "name": "How many carbs are in SmashMeals keto options?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our low-carb meals typically contain 5-15g net carbs per serving. Every meal is macro-labeled so you can easily track your daily carb intake for ketosis."
        }
      },
      {
        "@type": "Question",
        "name": "Are keto meals from SmashMeals gluten-free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! All SmashMeals are prepared in our 100% gluten-free kitchen. Our keto options are both low-carb AND gluten-free, making them safe for those with celiac disease or gluten sensitivity."
        }
      },
      {
        "@type": "Question",
        "name": "What keto proteins does SmashMeals offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer grass-fed beef, free-range chicken, wild-caught salmon, turkey, and eggs. All high-quality proteins perfect for keto dieters seeking healthy fats and complete amino acids."
        }
      },
      {
        "@type": "Question",
        "name": "Can SmashMeals help with keto meal prep?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! SmashMeals eliminates the hardest part of keto—meal planning and prep. Order low-carb meals weekly, and we handle the cooking. Perfect macros, zero prep time, stay in ketosis easily."
        }
      }
    ]
  };

  const dietSchema = {
    "@context": "https://schema.org",
    "@type": "Diet",
    "name": "Keto Diet Meal Prep Service",
    "alternateName": "Ketogenic Meal Delivery",
    "dietFeatures": "Low carbohydrate, high fat, moderate protein meals designed to maintain ketosis",
    "physiologicalBenefits": "Weight loss, improved mental clarity, stable blood sugar, increased energy",
    "risks": "May require medical supervision for certain conditions",
    "expertConsiderations": "Consult healthcare provider before starting keto diet"
  };

  const ketoFaqs = [
    {
      question: "Are SmashMeals keto-friendly?",
      answer: "Yes! Many SmashMeals entrees are naturally keto-friendly with under 15g net carbs and 30-45g protein. Perfect for maintaining ketosis while enjoying delicious prepared meals."
    },
    {
      question: "How many carbs are in SmashMeals keto options?",
      answer: "Our low-carb meals typically contain 5-15g net carbs per serving. Every meal is macro-labeled so you can easily track your daily carb intake for ketosis."
    },
    {
      question: "Are keto meals from SmashMeals gluten-free?",
      answer: "Absolutely! All SmashMeals are prepared in our 100% gluten-free kitchen. Our keto options are both low-carb AND gluten-free, making them safe for those with celiac disease or gluten sensitivity."
    },
    {
      question: "What keto proteins does SmashMeals offer?",
      answer: "We offer grass-fed beef, free-range chicken, wild-caught salmon, turkey, and eggs. All high-quality proteins perfect for keto dieters seeking healthy fats and complete amino acids."
    },
    {
      question: "Can SmashMeals help with keto meal prep?",
      answer: "Yes! SmashMeals eliminates the hardest part of keto—meal planning and prep. Order low-carb meals weekly, and we handle the cooking. Perfect macros, zero prep time, stay in ketosis easily."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Keto Meal Prep Delivery | Low Carb Gluten-Free Meals | SmashMeals</title>
        <meta name="description" content="Keto meal delivery made easy. Low-carb, high-protein, 100% gluten-free meals with 5-15g net carbs. Perfect for ketosis. Prepared fresh, delivered weekly. Order SmashMeals today!" />
        <meta name="keywords" content="keto meal prep, keto meal delivery, low carb meals, keto gluten free, ketogenic diet meals, keto friendly meals, low carb meal prep, SmashMeals keto" />
        <link rel="canonical" href="https://smashmeals.com/keto-meals" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(dietSchema)}</script>
      </Helmet>

      <LocalBusinessSchema />
      <Header />
      <PageBreadcrumb currentPage="Keto Meals" />

      <main className="min-h-screen pt-24">
        {/* Hero */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-orange-500/10 via-background to-primary/10">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-orange-600">
                <Flame className="w-6 h-6" />
                <span className="text-lg font-semibold">Keto-Friendly Meal Prep</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Stay in Ketosis with<br />Delicious Low-Carb Meals
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                5-15g net carbs per meal. 30-45g protein. 100% gluten-free. The easiest way to maintain keto without the meal prep hassle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="lg" className="text-lg">
                    View Keto-Friendly Menu
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold font-playfair text-center mb-12">
              Why Keto Dieters Choose SmashMeals
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <TrendingDown className="w-12 h-12 text-orange-600 mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">5-15g Net Carbs</h3>
                <p className="text-muted-foreground">Stay in ketosis easily with our low-carb meals. Perfect macros for fat burning.</p>
              </Card>

              <Card className="p-6 text-center">
                <Shield className="w-12 h-12 text-orange-600 mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">100% Gluten-Free</h3>
                <p className="text-muted-foreground">No hidden gluten. Our dedicated kitchen eliminates cross-contamination risk.</p>
              </Card>

              <Card className="p-6 text-center">
                <Zap className="w-12 h-12 text-orange-600 mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">30-45g Protein</h3>
                <p className="text-muted-foreground">High-quality protein to preserve muscle while burning fat on keto.</p>
              </Card>

              <Card className="p-6 text-center">
                <Heart className="w-12 h-12 text-orange-600 mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Healthy Fats</h3>
                <p className="text-muted-foreground">Quality fats from grass-fed beef, salmon, avocado, and olive oil.</p>
              </Card>

              <Card className="p-6 text-center">
                <Clock className="w-12 h-12 text-orange-600 mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Zero Prep Time</h3>
                <p className="text-muted-foreground">Keto meal prep is time-consuming. We do it for you—heat and eat in 3 minutes.</p>
              </Card>

              <Card className="p-6 text-center">
                <Flame className="w-12 h-12 text-orange-600 mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Macro-Labeled</h3>
                <p className="text-muted-foreground">Every meal shows exact carbs, protein, and fat. Track macros effortlessly.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl prose prose-lg">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-8">Keto Meal Prep Without the Hassle</h2>
            
            <p>
              Following a ketogenic diet is challenging enough without spending hours in the kitchen. SmashMeals delivers <strong>ready-to-eat keto meals</strong> that keep you in ketosis while saving you time and effort.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">The Keto Meal Prep Challenge</h3>
            <p>
              Anyone who's tried keto knows the biggest obstacles aren't willpower—they're <strong>time and convenience</strong>:
            </p>
            <ul>
              <li>Planning low-carb meals that actually taste good</li>
              <li>Shopping for quality proteins and healthy fats</li>
              <li>Batch cooking on weekends (goodbye, free time)</li>
              <li>Calculating net carbs for every homemade recipe</li>
              <li>Avoiding hidden carbs in sauces and seasonings</li>
            </ul>
            <p>
              SmashMeals eliminates all of this. We've done the macro calculations, sourced quality ingredients, and prepared delicious keto-friendly meals—all you do is heat and eat.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Our Keto-Friendly Menu Options</h3>
            <p>
              Every week, our menu includes multiple keto-friendly options:
            </p>
            
            <div className="bg-muted p-6 rounded-lg my-6 not-prose">
              <h4 className="font-bold text-xl mb-4">Popular Keto Meals</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-bold">Grilled Steak & Vegetables</h5>
                  <p className="text-sm text-muted-foreground">8g net carbs | 40g protein | 22g fat</p>
                </div>
                <div>
                  <h5 className="font-bold">Lemon Herb Salmon</h5>
                  <p className="text-sm text-muted-foreground">6g net carbs | 35g protein | 18g fat</p>
                </div>
                <div>
                  <h5 className="font-bold">Buffalo Chicken Bowl</h5>
                  <p className="text-sm text-muted-foreground">10g net carbs | 38g protein | 16g fat</p>
                </div>
                <div>
                  <h5 className="font-bold">Cheesy Egg White Scramble</h5>
                  <p className="text-sm text-muted-foreground">4g net carbs | 32g protein | 12g fat</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Why Gluten-Free Matters for Keto</h3>
            <p>
              Many keto dieters also avoid gluten for reduced inflammation and better digestion. With SmashMeals, you get <strong>both benefits automatically</strong>:
            </p>
            <ul>
              <li><strong>Zero cross-contamination</strong> – Our kitchen is 100% gluten-free</li>
              <li><strong>No hidden carbs</strong> – Gluten often hides in sauces and seasonings</li>
              <li><strong>Better digestion</strong> – Gluten-free + keto = optimal gut health</li>
              <li><strong>Reduced inflammation</strong> – Both diets support lower inflammation</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">Keto Meal Delivery: How It Works</h3>
            <p>
              <strong>Step 1:</strong> Browse our weekly menu and select keto-friendly meals<br />
              <strong>Step 2:</strong> Order by Thursday at 11:59 PM<br />
              <strong>Step 3:</strong> Receive fresh meals Monday (local) or Tuesday-Wednesday (shipping)<br />
              <strong>Step 4:</strong> Heat in microwave (3 min) or oven (10 min)<br />
              <strong>Step 5:</strong> Enjoy delicious keto meals all week
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Local Delivery & Nationwide Shipping</h3>
            <p>
              We deliver locally to Johnson City, Kingsport, Bristol, and the entire Tri-Cities area. Plus, we ship nationwide to 98+ cities via FedEx 2-day delivery. <strong>Free shipping on orders $130+.</strong>
            </p>

            <div className="text-center my-8">
              <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="text-lg">
                  Order Keto Meals Now
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection faqs={ketoFaqs} includeSchema={false} />

        {/* CTA */}
        <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-primary text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Ready to Make Keto Easy?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of keto dieters who trust SmashMeals for delicious, low-carb, gluten-free meal prep.
            </p>
            <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="lg" className="text-lg">
                View This Week's Menu
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default KetoMeals;
