import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Leaf, Shield, Flame, Heart, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const PaleoMeals = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are SmashMeals paleo-friendly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many SmashMeals are naturally paleo-friendly, made with real proteins, vegetables, and healthy fats. We avoid grains, legumes, and processed ingredients. All meals are 100% gluten-free."
        }
      },
      {
        "@type": "Question",
        "name": "What paleo proteins does SmashMeals offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use quality paleo proteins: grass-fed beef, free-range chicken, wild-caught salmon, turkey, and eggs. All proteins are hormone-free and minimally processed."
        }
      },
      {
        "@type": "Question",
        "name": "Are SmashMeals grain-free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! All SmashMeals are 100% gluten-free, and many options are completely grain-free. We use vegetables like sweet potatoes, cauliflower rice, and butternut squash instead of grains."
        }
      },
      {
        "@type": "Question",
        "name": "Do you use processed ingredients?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. SmashMeals are made from whole, real foods. We use fresh vegetables, quality proteins, herbs, and healthy fats. No artificial preservatives, colors, or flavors."
        }
      },
      {
        "@type": "Question",
        "name": "Is paleo the same as gluten-free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Paleo diets are grain-free (which includes gluten-free), but not all gluten-free foods are paleo. SmashMeals are 100% gluten-free, and many are also paleo-compliant with no grains or legumes."
        }
      }
    ]
  };

  const dietSchema = {
    "@context": "https://schema.org",
    "@type": "Diet",
    "name": "Paleo Meal Prep Service",
    "alternateName": "Paleo Meal Delivery",
    "dietFeatures": "Grain-free, legume-free meals with quality proteins and vegetables based on ancestral eating patterns",
    "physiologicalBenefits": "Reduced inflammation, improved digestion, stable energy, weight management",
    "expertConsiderations": "Focus on whole, unprocessed foods similar to ancestral diets"
  };

  const paleoFaqs = [
    {
      question: "Are SmashMeals paleo-friendly?",
      answer: "Many SmashMeals are naturally paleo-friendly, made with real proteins, vegetables, and healthy fats. We avoid grains, legumes, and processed ingredients. All meals are 100% gluten-free."
    },
    {
      question: "What paleo proteins does SmashMeals offer?",
      answer: "We use quality paleo proteins: grass-fed beef, free-range chicken, wild-caught salmon, turkey, and eggs. All proteins are hormone-free and minimally processed."
    },
    {
      question: "Are SmashMeals grain-free?",
      answer: "Yes! All SmashMeals are 100% gluten-free, and many options are completely grain-free. We use vegetables like sweet potatoes, cauliflower rice, and butternut squash instead of grains."
    },
    {
      question: "Do you use processed ingredients?",
      answer: "No. SmashMeals are made from whole, real foods. We use fresh vegetables, quality proteins, herbs, and healthy fats. No artificial preservatives, colors, or flavors."
    },
    {
      question: "Is paleo the same as gluten-free?",
      answer: "Paleo diets are grain-free (which includes gluten-free), but not all gluten-free foods are paleo. SmashMeals are 100% gluten-free, and many are also paleo-compliant with no grains or legumes."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Paleo Meal Prep Delivery | Grain-Free Gluten-Free Meals | SmashMeals</title>
        <meta name="description" content="Paleo meal delivery with real, whole foods. Grain-free, 100% gluten-free, made with grass-fed beef and quality proteins. Ancestral eating made easy. Order SmashMeals today!" />
        <meta name="keywords" content="paleo meal prep, paleo meal delivery, grain free meals, paleo diet meals, whole30 meals, ancestral diet, paleo gluten free, SmashMeals paleo" />
        <link rel="canonical" href="https://smashmeals.com/paleo-meals" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(dietSchema)}</script>
      </Helmet>

      <LocalBusinessSchema />
      <Header />
      <PageBreadcrumb currentPage="Paleo Meals" />

      <main className="min-h-screen pt-24">
        {/* Hero */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-green-600/10 via-background to-amber-500/10">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-green-700">
                <Leaf className="w-6 h-6" />
                <span className="text-lg font-semibold">Paleo Meal Prep</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Eat Real Food<br />Like Your Ancestors
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Grain-free, gluten-free, made with quality proteins and fresh vegetables. Paleo eating without the prep work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="lg" className="text-lg">
                    View Paleo-Friendly Menu
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
              Why Paleo Enthusiasts Choose SmashMeals
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <Leaf className="w-12 h-12 text-green-600 mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Grain-Free Options</h3>
                <p className="text-muted-foreground">Many meals made without grains—sweet potatoes and vegetables instead.</p>
              </Card>

              <Card className="p-6 text-center">
                <Shield className="w-12 h-12 text-green-600 mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">100% Gluten-Free</h3>
                <p className="text-muted-foreground">Prepared in our dedicated gluten-free kitchen. Zero cross-contamination.</p>
              </Card>

              <Card className="p-6 text-center">
                <Flame className="w-12 h-12 text-green-600 mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Quality Proteins</h3>
                <p className="text-muted-foreground">Grass-fed beef, free-range chicken, wild-caught salmon—paleo approved.</p>
              </Card>

              <Card className="p-6 text-center">
                <Heart className="w-12 h-12 text-green-600 mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Whole Foods Only</h3>
                <p className="text-muted-foreground">No artificial ingredients, preservatives, or processed foods.</p>
              </Card>

              <Card className="p-6 text-center">
                <Clock className="w-12 h-12 text-green-600 mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Zero Prep Time</h3>
                <p className="text-muted-foreground">Paleo cooking is time-intensive. Let us handle it—heat and eat.</p>
              </Card>

              <Card className="p-6 text-center">
                <CheckCircle className="w-12 h-12 text-green-600 mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Macro-Labeled</h3>
                <p className="text-muted-foreground">Every meal shows exact calories, protein, carbs, and fat.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl prose prose-lg">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-8">Paleo Eating Made Simple</h2>
            
            <p>
              The paleo diet focuses on eating <strong>whole, unprocessed foods</strong> similar to what our ancestors ate—quality proteins, vegetables, fruits, nuts, and healthy fats. SmashMeals makes paleo eating effortless.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">What Makes a Meal Paleo?</h3>
            <p>
              Paleo-friendly meals emphasize:
            </p>
            <ul>
              <li><strong>Quality proteins</strong> – Grass-fed beef, free-range poultry, wild-caught fish</li>
              <li><strong>Vegetables</strong> – Fresh, non-starchy vegetables as the base</li>
              <li><strong>Healthy fats</strong> – Olive oil, avocado, coconut, nuts</li>
              <li><strong>No grains</strong> – No wheat, rice, corn, or oats</li>
              <li><strong>No legumes</strong> – No beans, lentils, or peanuts</li>
              <li><strong>No processed foods</strong> – Real ingredients only</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">SmashMeals Paleo-Friendly Options</h3>
            <p>
              While not every SmashMeal is strictly paleo, many naturally fit the paleo template:
            </p>
            
            <div className="bg-muted p-6 rounded-lg my-6 not-prose">
              <h4 className="font-bold text-xl mb-4">Popular Paleo-Friendly Meals</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-bold">Grilled Steak & Roasted Vegetables</h5>
                  <p className="text-sm text-muted-foreground">Grass-fed beef with broccoli, squash, and herbs</p>
                </div>
                <div>
                  <h5 className="font-bold">Lemon Herb Salmon</h5>
                  <p className="text-sm text-muted-foreground">Wild-caught salmon with seasonal vegetables</p>
                </div>
                <div>
                  <h5 className="font-bold">Chicken with Sweet Potato</h5>
                  <p className="text-sm text-muted-foreground">Free-range chicken, roasted sweet potato, greens</p>
                </div>
                <div>
                  <h5 className="font-bold">Turkey & Butternut Squash</h5>
                  <p className="text-sm text-muted-foreground">Lean turkey with roasted squash and herbs</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Why Paleo + Gluten-Free Works</h3>
            <p>
              Since paleo excludes all grains, paleo meals are naturally gluten-free. But not all "gluten-free" products are paleo—many contain rice, corn, or processed ingredients. SmashMeals gives you the best of both:
            </p>
            <ul>
              <li><strong>True gluten-free</strong> – Prepared in our 100% dedicated kitchen</li>
              <li><strong>Whole food ingredients</strong> – No processed fillers or substitutes</li>
              <li><strong>Reduced inflammation</strong> – Both diets support lower inflammation</li>
              <li><strong>Better digestion</strong> – Quality proteins and vegetables digest cleanly</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">Benefits of Paleo Eating</h3>
            <p>
              Many people report significant improvements after adopting a paleo-style diet:
            </p>
            <ul>
              <li>More stable energy throughout the day</li>
              <li>Reduced bloating and digestive discomfort</li>
              <li>Clearer skin and improved complexion</li>
              <li>Better sleep quality</li>
              <li>Easier weight management</li>
              <li>Reduced joint pain and inflammation</li>
            </ul>

            <div className="text-center my-8">
              <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="text-lg">
                  Order Paleo Meals Now
                </Button>
              </a>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">How to Order Paleo-Friendly Meals</h3>
            <p>
              <strong>Step 1:</strong> Browse our weekly menu for grain-free, whole-food options<br />
              <strong>Step 2:</strong> Order by Thursday at 11:59 PM<br />
              <strong>Step 3:</strong> Receive fresh meals Monday (local) or Tuesday-Wednesday (shipped)<br />
              <strong>Step 4:</strong> Heat, eat, and enjoy real food without the prep
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Paleo for the Whole Family</h3>
            <p>
              SmashMeals makes it easy to feed your family real, whole foods. Our meals are kid-friendly, delicious, and nutritious—perfect for families transitioning to a paleo or whole-food lifestyle without the cooking burden.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection faqs={paleoFaqs} includeSchema={false} />

        {/* CTA */}
        <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-primary text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Ready to Eat Like Your Ancestors?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Real food, quality proteins, no grains—paleo eating made effortless with SmashMeals.
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

export default PaleoMeals;
