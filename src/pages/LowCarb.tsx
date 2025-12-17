import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingDown, Shield, Zap, Scale, Clock, Target } from "lucide-react";
import { Link } from "react-router-dom";

const LowCarb = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How many carbs are in SmashMeals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SmashMeals range from 5-50g carbs per meal. Our low-carb options contain 5-20g net carbs, perfect for carb-conscious diets. Every meal is macro-labeled for easy tracking."
        }
      },
      {
        "@type": "Question",
        "name": "Are low-carb meals good for weight loss?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Low-carb diets help reduce insulin spikes, promote fat burning, and increase satiety. Combined with our 30-45g protein per meal, SmashMeals support healthy weight loss."
        }
      },
      {
        "@type": "Question",
        "name": "Are SmashMeals low-carb AND gluten-free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! All SmashMeals are prepared in our 100% gluten-free kitchen. Many options are also low-carb, giving you the benefits of both dietary approaches."
        }
      },
      {
        "@type": "Question",
        "name": "What low-carb vegetables does SmashMeals use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use low-carb vegetables like broccoli, cauliflower, zucchini, spinach, green beans, and asparagus. For starchier options, we offer cauliflower rice instead of regular rice."
        }
      },
      {
        "@type": "Question",
        "name": "Can diabetics eat SmashMeals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many diabetics enjoy SmashMeals for their low-carb, high-protein options that help manage blood sugar. However, always consult your healthcare provider for personalized dietary advice."
        }
      }
    ]
  };

  const dietSchema = {
    "@context": "https://schema.org",
    "@type": "Diet",
    "name": "Low Carb Meal Prep Service",
    "alternateName": "Low Carbohydrate Meal Delivery",
    "dietFeatures": "Reduced carbohydrate meals with high protein content for blood sugar management and weight loss",
    "physiologicalBenefits": "Weight management, stable blood sugar, reduced cravings, increased energy",
    "expertConsiderations": "Suitable for those seeking carbohydrate reduction for weight loss or blood sugar management"
  };

  const lowCarbFaqs = [
    {
      question: "How many carbs are in SmashMeals?",
      answer: "SmashMeals range from 5-50g carbs per meal. Our low-carb options contain 5-20g net carbs, perfect for carb-conscious diets. Every meal is macro-labeled for easy tracking."
    },
    {
      question: "Are low-carb meals good for weight loss?",
      answer: "Yes! Low-carb diets help reduce insulin spikes, promote fat burning, and increase satiety. Combined with our 30-45g protein per meal, SmashMeals support healthy weight loss."
    },
    {
      question: "Are SmashMeals low-carb AND gluten-free?",
      answer: "Absolutely! All SmashMeals are prepared in our 100% gluten-free kitchen. Many options are also low-carb, giving you the benefits of both dietary approaches."
    },
    {
      question: "What low-carb vegetables does SmashMeals use?",
      answer: "We use low-carb vegetables like broccoli, cauliflower, zucchini, spinach, green beans, and asparagus. For starchier options, we offer cauliflower rice instead of regular rice."
    },
    {
      question: "Can diabetics eat SmashMeals?",
      answer: "Many diabetics enjoy SmashMeals for their low-carb, high-protein options that help manage blood sugar. However, always consult your healthcare provider for personalized dietary advice."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Low Carb Meal Prep Delivery | Gluten-Free Low Carb Meals | SmashMeals</title>
        <meta name="description" content="Low carb meal delivery with 5-20g net carbs per meal. 100% gluten-free, high protein, macro-counted. Perfect for weight loss and blood sugar management. Order SmashMeals!" />
        <meta name="keywords" content="low carb meal prep, low carb meals, low carb meal delivery, low carbohydrate diet, diabetic meals, low carb gluten free, SmashMeals low carb, carb counting meals" />
        <link rel="canonical" href="https://smashmeals.com/low-carb" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(dietSchema)}</script>
      </Helmet>

      <LocalBusinessSchema />
      <Header />

      <main className="min-h-screen pt-24">
        {/* Hero */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-blue-500/10 via-background to-primary/10">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-blue-600">
                <TrendingDown className="w-6 h-6" />
                <span className="text-lg font-semibold">Low-Carb Meal Prep</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Cut the Carbs<br />Keep the Flavor
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                5-20g net carbs per meal. High protein. 100% gluten-free. The smart way to manage carbs without sacrificing taste.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="lg" className="text-lg">
                    View Low-Carb Menu
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
              Why Go Low-Carb with SmashMeals?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <TrendingDown className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">5-20g Net Carbs</h3>
                <p className="text-muted-foreground">Low-carb options that fit your daily carb budget perfectly.</p>
              </Card>

              <Card className="p-6 text-center">
                <Scale className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Weight Management</h3>
                <p className="text-muted-foreground">Low-carb + high protein = optimal nutrition for weight loss.</p>
              </Card>

              <Card className="p-6 text-center">
                <Zap className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Stable Energy</h3>
                <p className="text-muted-foreground">No blood sugar crashes. Steady energy all day long.</p>
              </Card>

              <Card className="p-6 text-center">
                <Shield className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">100% Gluten-Free</h3>
                <p className="text-muted-foreground">Prepared in our dedicated gluten-free kitchen.</p>
              </Card>

              <Card className="p-6 text-center">
                <Target className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Macro-Labeled</h3>
                <p className="text-muted-foreground">Every meal shows exact carbs, protein, and fat for easy tracking.</p>
              </Card>

              <Card className="p-6 text-center">
                <Clock className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Ready in 3 Minutes</h3>
                <p className="text-muted-foreground">Heat and eat. No carb-counting recipes needed.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl prose prose-lg">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-8">Low-Carb Eating Made Easy</h2>
            
            <p>
              Whether you're managing blood sugar, losing weight, or simply reducing carbs for better energy, SmashMeals delivers <strong>delicious low-carb meals</strong> without the prep work.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Why Low-Carb Works</h3>
            <p>
              Reducing carbohydrates offers significant benefits:
            </p>
            <ul>
              <li><strong>Stable blood sugar</strong> – Fewer carbs = fewer insulin spikes</li>
              <li><strong>Reduced cravings</strong> – Protein and fat keep you satisfied longer</li>
              <li><strong>Increased fat burning</strong> – Your body uses fat for fuel</li>
              <li><strong>Better mental clarity</strong> – No afternoon brain fog</li>
              <li><strong>Improved energy</strong> – Steady fuel instead of sugar crashes</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">Low-Carb Meal Options</h3>
            <p>
              Our menu features plenty of low-carb choices:
            </p>
            
            <div className="bg-muted p-6 rounded-lg my-6 not-prose">
              <h4 className="font-bold text-xl mb-4">Popular Low-Carb Meals</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-bold">Grilled Steak & Broccoli</h5>
                  <p className="text-sm text-muted-foreground">8g net carbs | 42g protein</p>
                </div>
                <div>
                  <h5 className="font-bold">Lemon Herb Salmon</h5>
                  <p className="text-sm text-muted-foreground">6g net carbs | 35g protein</p>
                </div>
                <div>
                  <h5 className="font-bold">Buffalo Chicken & Cauliflower</h5>
                  <p className="text-sm text-muted-foreground">10g net carbs | 38g protein</p>
                </div>
                <div>
                  <h5 className="font-bold">Cheesy Egg White Scramble</h5>
                  <p className="text-sm text-muted-foreground">4g net carbs | 32g protein</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Perfect for Blood Sugar Management</h3>
            <p>
              Many customers with diabetes or pre-diabetes choose SmashMeals for:
            </p>
            <ul>
              <li>Clearly labeled carbohydrates on every meal</li>
              <li>Low-glycemic vegetable options</li>
              <li>High protein to slow carb absorption</li>
              <li>No hidden sugars or processed carbs</li>
              <li>Consistent portions for reliable meal planning</li>
            </ul>
            <p className="text-sm text-muted-foreground italic">
              Always consult your healthcare provider for personalized dietary advice.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Low-Carb + Gluten-Free = Double Benefits</h3>
            <p>
              All SmashMeals are 100% gluten-free. Combined with our low-carb options, you get:
            </p>
            <ul>
              <li><strong>Reduced inflammation</strong> – Both low-carb and gluten-free support lower inflammation</li>
              <li><strong>Better digestion</strong> – No grains means easier digestion for many people</li>
              <li><strong>Cleaner ingredients</strong> – Whole foods without processed substitutes</li>
              <li><strong>Zero cross-contamination</strong> – Our dedicated kitchen is 100% gluten-free</li>
            </ul>

            <div className="text-center my-8">
              <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="text-lg">
                  Order Low-Carb Meals
                </Button>
              </a>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">How to Order Low-Carb Meals</h3>
            <p>
              <strong>Step 1:</strong> Browse our weekly menu for low-carb options (check the carb counts!)<br />
              <strong>Step 2:</strong> Order by Thursday at 11:59 PM<br />
              <strong>Step 3:</strong> Receive fresh meals Monday (local) or Tuesday-Wednesday (shipped)<br />
              <strong>Step 4:</strong> Heat, eat, and enjoy without the carb-counting hassle
            </p>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection faqs={lowCarbFaqs} includeSchema={false} />

        {/* CTA */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-primary text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Ready to Cut the Carbs?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Low-carb, high-protein, gluten-free meals delivered fresh to your door.
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

export default LowCarb;
