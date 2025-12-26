import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dumbbell, Award, Target, Utensils, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const HighProtein = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much protein is in SmashMeals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every SmashMeals entrée contains 30-45 grams of high-quality protein from grass-fed beef, free-range chicken, wild-caught fish, or turkey. Perfect for muscle building, weight loss, and overall health."
        }
      },
      {
        "@type": "Question",
        "name": "What protein sources does SmashMeals use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use premium protein sources: grass-fed beef (higher omega-3s), free-range chicken breast, wild-caught salmon, turkey, and eggs. All proteins are hormone-free and minimally processed."
        }
      },
      {
        "@type": "Question",
        "name": "Are high-protein meals good for weight loss?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! High-protein meals increase satiety (feeling full), boost metabolism, and preserve lean muscle during weight loss. SmashMeals' 30-45g protein meals are ideal for healthy weight management."
        }
      },
      {
        "@type": "Question",
        "name": "Can I hit 150g protein daily with SmashMeals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! Order 4-5 SmashMeals per day (120-225g protein) and you'll easily hit high protein targets. Perfect for athletes, bodybuilders, and anyone focused on muscle growth."
        }
      },
      {
        "@type": "Question",
        "name": "Are SmashMeals high-protein AND gluten-free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Every SmashMeal is prepared in our 100% gluten-free kitchen. High protein + gluten-free = optimal nutrition for muscle building and gut health."
        }
      }
    ]
  };

  const dietSchema = {
    "@context": "https://schema.org",
    "@type": "Diet",
    "name": "High Protein Meal Prep Service",
    "alternateName": "High Protein Meal Delivery",
    "dietFeatures": "30-45g protein per meal from quality sources for muscle building and satiety",
    "physiologicalBenefits": "Muscle growth, weight management, improved satiety, faster recovery",
    "expertConsiderations": "Suitable for athletes, active individuals, and those seeking weight management"
  };

  const highProteinFaqs = [
    {
      question: "How much protein is in SmashMeals?",
      answer: "Every SmashMeals entrée contains 30-45 grams of high-quality protein from grass-fed beef, free-range chicken, wild-caught fish, or turkey. Perfect for muscle building, weight loss, and overall health."
    },
    {
      question: "What protein sources does SmashMeals use?",
      answer: "We use premium protein sources: grass-fed beef (higher omega-3s), free-range chicken breast, wild-caught salmon, turkey, and eggs. All proteins are hormone-free and minimally processed."
    },
    {
      question: "Are high-protein meals good for weight loss?",
      answer: "Yes! High-protein meals increase satiety (feeling full), boost metabolism, and preserve lean muscle during weight loss. SmashMeals' 30-45g protein meals are ideal for healthy weight management."
    },
    {
      question: "Can I hit 150g protein daily with SmashMeals?",
      answer: "Absolutely! Order 4-5 SmashMeals per day (120-225g protein) and you'll easily hit high protein targets. Perfect for athletes, bodybuilders, and anyone focused on muscle growth."
    },
    {
      question: "Are SmashMeals high-protein AND gluten-free?",
      answer: "Yes! Every SmashMeal is prepared in our 100% gluten-free kitchen. High protein + gluten-free = optimal nutrition for muscle building and gut health."
    }
  ];

  return (
    <>
      <Helmet>
        <title>High Protein Meal Prep | 30-45g Protein Per Meal | SmashMeals</title>
        <meta name="description" content="High protein meal delivery with 30-45g protein per meal. 100% gluten-free, macro-counted, ready to eat. Perfect for muscle building, weight loss, and busy lifestyles. Order SmashMeals!" />
        <meta name="keywords" content="high protein meal prep, high protein meals, protein meal delivery, muscle building meals, macro counted meals, SmashMeals protein, protein rich meals, bodybuilding meal prep" />
        <link rel="canonical" href="https://smashmeals.com/high-protein" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(dietSchema)}</script>
      </Helmet>

      <LocalBusinessSchema />
      <Header />
      <PageBreadcrumb currentPage="High Protein" />

      <main className="min-h-screen pt-24">
        {/* Hero */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <Dumbbell className="w-6 h-6" />
                <span className="text-lg font-semibold">High-Protein Meal Prep</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                30-45g Protein Per Meal<br />Zero Prep Required
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Fuel muscle growth, support weight loss, and hit your protein goals with chef-prepared, gluten-free meals. Trusted by ETSU Division I athletes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="lg" className="text-lg">
                    View High-Protein Menu
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
              Why Choose High-Protein SmashMeals?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <Award className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">30-45g Protein</h3>
                <p className="text-muted-foreground">Every meal packed with quality protein for muscle building and satiety.</p>
              </Card>

              <Card className="p-6 text-center">
                <Shield className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">100% Gluten-Free</h3>
                <p className="text-muted-foreground">Prepared in our dedicated gluten-free kitchen for optimal digestion.</p>
              </Card>

              <Card className="p-6 text-center">
                <Target className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Macro-Counted</h3>
                <p className="text-muted-foreground">Exact calories, protein, carbs, and fat labeled on every meal.</p>
              </Card>

              <Card className="p-6 text-center">
                <Utensils className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Premium Proteins</h3>
                <p className="text-muted-foreground">Grass-fed beef, free-range chicken, wild-caught salmon, and turkey.</p>
              </Card>

              <Card className="p-6 text-center">
                <Clock className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Ready in 3 Minutes</h3>
                <p className="text-muted-foreground">Heat and eat. No cooking, no cleanup, no wasted time.</p>
              </Card>

              <Card className="p-6 text-center">
                <Dumbbell className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Athlete Approved</h3>
                <p className="text-muted-foreground">Official meal prep partner for ETSU Division I athletics.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl prose prose-lg">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-8">High-Protein Meals for Every Goal</h2>
            
            <p>
              Whether you're building muscle, losing weight, or simply want to eat healthier, <strong>protein is the foundation of results</strong>. SmashMeals delivers 30-45g of high-quality protein in every meal—no cooking required.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Why High Protein Matters</h3>
            <p>
              Research consistently shows that adequate protein intake supports:
            </p>
            <ul>
              <li><strong>Muscle growth and repair</strong> – Essential for athletes and active individuals</li>
              <li><strong>Weight loss</strong> – Protein increases satiety and boosts metabolism</li>
              <li><strong>Healthy aging</strong> – Preserves muscle mass as we age</li>
              <li><strong>Stable energy</strong> – Prevents blood sugar spikes and crashes</li>
              <li><strong>Faster recovery</strong> – Supports muscle repair after workouts</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">Premium Protein Sources</h3>
            <p>
              Not all protein is created equal. SmashMeals uses only the highest quality sources:
            </p>
            
            <div className="bg-muted p-6 rounded-lg my-6 not-prose">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-2">Grass-Fed Beef</h4>
                  <p className="text-sm text-muted-foreground">Higher in omega-3s, CLA, and antioxidants than grain-fed. Better for you and the environment.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Free-Range Chicken</h4>
                  <p className="text-sm text-muted-foreground">Lean, clean protein with complete amino acid profile. No antibiotics or hormones.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Wild-Caught Salmon</h4>
                  <p className="text-sm text-muted-foreground">Rich in omega-3 fatty acids for reduced inflammation and heart health.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Turkey & Eggs</h4>
                  <p className="text-sm text-muted-foreground">High protein, low fat options perfect for cutting phases and weight management.</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Hit Your Protein Goals Easily</h3>
            <p>
              Here's how many SmashMeals you need based on your daily protein target:
            </p>
            <div className="bg-muted p-6 rounded-lg my-6">
              <p><strong>100g protein/day:</strong> 2-3 SmashMeals + protein-rich snacks</p>
              <p><strong>150g protein/day:</strong> 4 SmashMeals (120-180g protein)</p>
              <p><strong>200g protein/day:</strong> 5-6 SmashMeals or supplement with A La Carte proteins</p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Perfect for Every Lifestyle</h3>
            <ul>
              <li><strong>Athletes & Bodybuilders:</strong> Hit 150-250g protein daily without meal prep</li>
              <li><strong>Busy Professionals:</strong> High-protein lunches that keep you focused all afternoon</li>
              <li><strong>Weight Loss:</strong> Stay full longer with protein-rich meals that curb cravings</li>
              <li><strong>Older Adults:</strong> Preserve muscle mass with adequate protein intake</li>
              <li><strong>Post-Surgery:</strong> Support healing and recovery with quality nutrition</li>
            </ul>

            <div className="text-center my-8">
              <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="text-lg">
                  Order High-Protein Meals
                </Button>
              </a>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Why Athletes Trust SmashMeals</h3>
            <p>
              SmashMeals is the <strong>official meal prep partner for ETSU Division I athletics</strong>—including football, men's basketball, and women's basketball. When elite athletes and their coaches trust our high-protein, gluten-free meals for performance, you know you're getting quality nutrition.
            </p>

            <div className="bg-muted p-6 rounded-lg my-8">
              <p className="italic">"SmashMeals makes hitting my protein goals effortless. 45g protein per meal, perfectly macro-counted, and it actually tastes amazing. I've recommended it to my entire gym."</p>
              <p className="font-semibold mt-2">— Marcus J., Competitive Powerlifter</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection faqs={highProteinFaqs} includeSchema={false} />

        {/* CTA */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary to-accent text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Ready to Hit Your Protein Goals?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of customers who trust SmashMeals for high-protein, gluten-free meal prep.
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

export default HighProtein;
