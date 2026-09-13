import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dumbbell, Award, TrendingUp, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Athletes = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much protein is in each SmashMeals meal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every SmashMeals entrée contains 30-45 grams of high-quality protein from grass-fed beef, free-range chicken, wild-caught fish, or turkey. Perfect for muscle building and recovery."
        }
      },
      {
        "@type": "Question",
        "name": "Why do athletes use SmashMeals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Athletes choose SmashMeals for consistent macros, high protein content, gluten-free nutrition, and zero meal prep time."
        }
      },
      {
        "@type": "Question",
        "name": "Are SmashMeals good for cutting or bulking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Every meal is macro-counted with exact calories, protein, carbs, and fats labeled. Order high-protein, low-carb meals for cutting, or add extra meals and carbs for bulking. Complete flexibility."
        }
      },
      {
        "@type": "Question",
        "name": "How does gluten-free help athletic performance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many athletes report reduced inflammation, better digestion, improved recovery, and more consistent energy levels on gluten-free diets. Our 100% gluten-free kitchen eliminates cross-contamination concerns."
        }
      },
      {
        "@type": "Question",
        "name": "Can I track macros easily with SmashMeals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Every meal has a detailed nutrition label showing calories, protein, carbs, fats, and fiber. No scanning barcodes or guessing—just grab, heat, log, and hit your targets."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep for Athletes | 30-45g Protein | SmashMeals</title>
        <meta name="description" content="30-45g protein per meal, macro-counted, and 100% gluten-free. Perfect for bodybuilding, CrossFit, powerlifting, and endurance sports." />
        <meta name="keywords" content="athlete meal prep, high protein gluten free, bodybuilding meal prep, CrossFit meals, powerlifting nutrition, athlete meal delivery, ETSU meal prep" />
        <link rel="canonical" href="https://smashmeals.com/athletes" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <LocalBusinessSchema />
      <Header />
      <PageBreadcrumb currentPage="For Athletes" />

      <main className="min-h-screen pt-24">
        {/* Hero */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <Dumbbell className="w-6 h-6" />
                <span className="text-lg font-semibold">Built for Athletes</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Fuel Your Performance with<br />High-Protein Gluten-Free Meals
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                30-45g protein per meal. Macro-counted precision. Zero meal prep time. Performance-minded meals made locally.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="lg" className="text-lg">
                    View This Week's Menu
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Athletes Choose SmashMeals */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold font-playfair text-center mb-12">
              Why Athletes Trust SmashMeals
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-6 text-center">
                <Award className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">30-45g Protein</h3>
                <p className="text-muted-foreground">Every meal packed with high-quality protein for muscle growth and recovery.</p>
              </Card>

              <Card className="p-6 text-center">
                <TrendingUp className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Macro-Counted</h3>
                <p className="text-muted-foreground">Exact calories, protein, carbs, and fats labeled on every meal.</p>
              </Card>

              <Card className="p-6 text-center">
                <Shield className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">100% Gluten-Free</h3>
                <p className="text-muted-foreground">Reduce inflammation and improve recovery with gluten-free nutrition.</p>
              </Card>

              <Card className="p-6 text-center">
                <Clock className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Zero Prep Time</h3>
                <p className="text-muted-foreground">Spend your energy training, not cooking. Heat and eat in 3 minutes.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Detailed Content */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl prose prose-lg">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-8">Athlete-Grade Nutrition Without the Meal Prep</h2>
            
            <h3 className="text-2xl font-bold mt-8 mb-4">Performance Nutrition Made Practical</h3>
            <p>
              SmashMeals prepares convenient, macro-counted meals for athletes across the Tri-Cities, including:
            </p>
            <ul>
              <li><strong>Football players</strong> - High-protein meals for strength and recovery</li>
              <li><strong>Basketball players</strong> - Balanced fuel for training and competition</li>
              <li><strong>Endurance athletes</strong> - Consistent portions and clearly labeled macros</li>
            </ul>
            <p>
              When Division I coaches and trainers trust SmashMeals to fuel their athletes' performance, you know we're doing something right. These athletes require:
            </p>
            <ul>
              <li>Precise macro targets for strength, speed, and endurance</li>
              <li>High protein intake (150-250g per day) for muscle recovery</li>
              <li>Consistent nutrition week after week for predictable results</li>
              <li>Safe, clean ingredients that won't cause digestive issues or inflammation</li>
              <li>Convenient meals that fit demanding training and travel schedules</li>
            </ul>
            <p>
              SmashMeals delivers all of this—and now you can access the same nutrition that powers elite college athletes.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">High-Protein Muscle Fuel: 30-45g Per Meal</h3>
            <p>
              Whether you're cutting for competition, building muscle in the off-season, or maintaining strength year-round, <strong>protein is your most important macronutrient</strong>. Here's what makes SmashMeals protein superior:
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3">Quality Protein Sources</h4>
            <ul>
              <li><strong>Grass-Fed Beef</strong> - Higher in omega-3s, CLA, and micronutrients than conventional beef</li>
              <li><strong>Free-Range Chicken Breast</strong> - Lean, clean protein with complete amino acid profile</li>
              <li><strong>Wild-Caught Salmon</strong> - Rich in omega-3 fatty acids for reduced inflammation and joint health</li>
              <li><strong>Turkey</strong> - High protein, low fat, perfect for cutting phases</li>
              <li><strong>Eggs</strong> - Breakfast options with bioavailable protein and healthy fats</li>
            </ul>

            <h4 className="text-xl font-semibold mt-6 mb-3">Protein for Every Training Goal</h4>
            <div className="bg-muted p-6 rounded-lg my-6">
              <p><strong>Bulking Phase:</strong> Order 3-4 meals per day (90-180g protein) + add extra carbs from our sides</p>
              <p><strong>Cutting Phase:</strong> Order 2-3 high-protein, moderate-carb meals (60-135g protein) for satiety and muscle preservation</p>
              <p><strong>Maintenance:</strong> Order 2-3 meals per day (60-135g protein) and supplement with snacks as needed</p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Macro-Counted for Precision Tracking</h3>
            <p>
              Serious athletes track macros. SmashMeals makes it effortless:
            </p>
            <ul>
              <li><strong>Every meal labeled</strong> with total calories, protein, carbs, fats, and fiber</li>
              <li><strong>No barcode scanning</strong> - nutrition info is right on the container</li>
              <li><strong>Consistent portions</strong> week after week for predictable results</li>
              <li><strong>Mix and match</strong> - order high-carb meals for training days, low-carb for rest days</li>
            </ul>
            <p>
              Example macro breakdown:
            </p>
            <div className="bg-muted p-6 rounded-lg my-6 not-prose">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-2">Grilled Chicken & Sweet Potato</h4>
                  <p className="text-sm">Calories: 380 | Protein: 42g | Carbs: 35g | Fat: 8g</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Beef Taco Bowl</h4>
                  <p className="text-sm">Calories: 450 | Protein: 38g | Carbs: 42g | Fat: 14g</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Lemon Herb Salmon</h4>
                  <p className="text-sm">Calories: 420 | Protein: 35g | Carbs: 38g | Fat: 16g</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Turkey Meatballs</h4>
                  <p className="text-sm">Calories: 360 | Protein: 40g | Carbs: 30g | Fat: 10g</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Why Gluten-Free Matters for Athletes</h3>
            <p>
              You might not have celiac disease, but going gluten-free can still benefit athletic performance:
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3">1. Reduced Inflammation</h4>
            <p>
              Gluten can trigger low-grade inflammation in many people, even without celiac disease. For athletes, chronic inflammation means:
            </p>
            <ul>
              <li>Slower recovery between training sessions</li>
              <li>Increased injury risk</li>
              <li>Joint pain and stiffness</li>
              <li>Compromised immune function</li>
            </ul>
            <p>
              Our gluten-free meals help reduce systemic inflammation, leading to faster recovery and better performance.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3">2. Better Digestion</h4>
            <p>
              Gluten is difficult to digest for many athletes, causing:
            </p>
            <ul>
              <li>Bloating and discomfort during training</li>
              <li>Inconsistent energy levels</li>
              <li>Nutrient malabsorption (you're not getting the full value of your food)</li>
            </ul>
            <p>
              SmashMeals' gluten-free ingredients digest cleanly, giving you steady energy without digestive distress.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3">3. Improved Energy Levels</h4>
            <p>
              Many athletes report <strong>more consistent energy</strong> after eliminating gluten. No more post-meal crashes or brain fog—just sustained performance from morning training through evening workouts.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Perfect for Every Sport</h3>
            
            <h4 className="text-xl font-semibold mt-6 mb-3">Strength Sports (Powerlifting, Bodybuilding, Strongman)</h4>
            <p>
              High protein (30-45g per meal) supports muscle hypertrophy and strength gains. Order 3-5 meals per day to hit your 200g+ protein targets.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3">CrossFit & Functional Fitness</h4>
            <p>
              Balanced macros with quality carbs and protein for high-intensity workouts. Our meals provide sustained energy for WODs and fast recovery.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3">Endurance Sports (Running, Cycling, Triathlon)</h4>
            <p>
              Adequate protein (often neglected by endurance athletes) preserves lean muscle during high-volume training. Carbs fuel your long runs and rides.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3">Team Sports (Basketball, Football, Soccer)</h4>
            <p>
              Practical nutrition for active customers. Quick-digesting protein and carbs for practice recovery, plus convenient grab-and-go meals for travel.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Time Savings = Better Training</h3>
            <p>
              Elite athletes know: <strong>every hour matters</strong>. Spending 5-10 hours per week on meal prep is time you could be:
            </p>
            <ul>
              <li>Training (add an extra skill session or lift)</li>
              <li>Recovering (sleep, stretching, mobility work)</li>
              <li>Studying film or strategy</li>
              <li>Spending time with family and friends</li>
            </ul>
            <p>
              With SmashMeals, your nutrition is handled. <strong>3 minutes to heat, 10 minutes to eat</strong>, and you're back to what matters.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">How to Order as an Athlete</h3>
            <p>
              <strong>Step 1:</strong> Calculate your daily protein needs (typically 0.8-1.2g per pound of body weight)<br />
              <strong>Step 2:</strong> Decide how many meals you want from SmashMeals (most athletes order 2-4 per day)<br />
              <strong>Step 3:</strong> Browse the weekly menu and select meals that fit your macros<br />
              <strong>Step 4:</strong> Order by Thursday, receive Monday (local delivery or FedEx 2-day shipping)<br />
              <strong>Step 5:</strong> Heat, eat, log macros, train hard
            </p>

            <div className="text-center my-8">
              <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="text-lg">
                  View This Week's Athlete Menu
                </Button>
              </a>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Athlete Testimonials</h3>
            <div className="bg-muted p-6 rounded-lg my-8">
              <p className="italic">"Nutrition is part of my routine. SmashMeals makes it easy to hit my protein target every day without thinking."</p>
              <p className="font-semibold mt-2">— Marcus J., Local Athlete</p>
            </div>
            <div className="bg-muted p-6 rounded-lg my-8">
              <p className="italic">"I'm a competitive powerlifter with celiac disease. Finding high-protein gluten-free meals was impossible until SmashMeals. 45g protein, zero cross-contamination risk, and it tastes amazing. PRs every month."</p>
              <p className="font-semibold mt-2">— Amanda L., Powerlifter, Richmond VA</p>
            </div>
            <div className="bg-muted p-6 rounded-lg my-8">
              <p className="italic">"I train at 5 AM before work. SmashMeals gives me grab-and-go nutrition that actually supports my CrossFit goals. I've never been leaner or stronger."</p>
              <p className="font-semibold mt-2">— Tyler K., CrossFit Athlete, Johnson City</p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Start Eating Like an Elite Athlete</h3>
            <p>
              If you're serious about your training, you need serious nutrition. SmashMeals delivers the same high-protein, gluten-free, macro-counted meals that power Division I athletes—now available to you.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              Frequently Asked Questions for Athletes
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
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">
              Train Like a Champion. Eat Like One Too.
            </h2>
            <p className="text-xl mb-8">
              Built for athletes. 30-45g protein per meal. Delivered fresh.
            </p>
            <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" size="lg" className="text-lg">
                Order This Week's Menu
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Athletes;
