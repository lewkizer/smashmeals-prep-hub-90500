import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Shield, Award, TrendingUp } from "lucide-react";

const Bariatric = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are SmashMeals safe for bariatric patients?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our meals are protein-dense (30-45g per serving), portion-controlled, gentle on healing digestive systems, and 100% gluten-free. Perfect for gastric bypass, sleeve, and band patients."
        }
      },
      {
        "@type": "Question",
        "name": "How much protein should I eat after bariatric surgery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most bariatric programs recommend 60-80g of protein daily. Our meals provide 30-45g per serving, making it easy to hit your targets with 2-3 meals per day."
        }
      },
      {
        "@type": "Question",
        "name": "Can I eat these meals right after surgery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Always follow your surgeon's post-op diet plan. Our meals are great for the solid food phase (typically 4-6 weeks post-op). Consult your medical team before starting any new foods."
        }
      },
      {
        "@type": "Question",
        "name": "Do your meals cause dumping syndrome?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our meals have no added sugar and minimal simple carbs, significantly reducing dumping syndrome risk. We focus on lean proteins, complex carbs, and healthy fats."
        }
      },
      {
        "@type": "Question",
        "name": "What portion sizes work for bariatric patients?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our meals can be split into 2-3 portions for early post-op patients, or eaten as a full meal once your stomach has healed. This flexibility supports your entire weight loss journey."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Bariatric Meal Prep | High-Protein Gluten-Free | SmashMeals</title>
        <meta name="description" content="Post-bariatric surgery meal prep: 30-45g protein per serving, portion-controlled, 100% gluten-free. Perfect for gastric bypass, sleeve, and band patients." />
        <meta name="keywords" content="bariatric meal prep, gastric bypass meals, gastric sleeve meal prep, high protein bariatric, post-surgery meals, weight loss surgery nutrition" />
        <link rel="canonical" href="https://smashmeals.com/bariatric" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <LocalBusinessSchema />
      <Header />

      <main className="min-h-screen pt-24">
        {/* Hero */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <Heart className="w-6 h-6" />
                <span className="text-lg font-semibold">Supporting Your Weight Loss Journey</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                High-Protein Meal Prep for<br />Bariatric Surgery Patients
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                30-45g protein per meal. Portion-controlled. Gentle ingredients. 100% gluten-free. Designed to support your post-surgery nutrition goals.
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

        {/* Why Bariatric Patients Choose SmashMeals */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold font-playfair text-center mb-12">
              Why Bariatric Patients Trust SmashMeals
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-6 text-center">
                <Award className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">30-45g Protein</h3>
                <p className="text-muted-foreground">Hit your 60-80g daily target with just 2-3 meals</p>
              </Card>

              <Card className="p-6 text-center">
                <Shield className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">100% Gluten-Free</h3>
                <p className="text-muted-foreground">Gentle on healing digestive systems, reduces inflammation</p>
              </Card>

              <Card className="p-6 text-center">
                <Heart className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">No Added Sugar</h3>
                <p className="text-muted-foreground">Minimizes dumping syndrome risk with clean ingredients</p>
              </Card>

              <Card className="p-6 text-center">
                <TrendingUp className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Portion Control</h3>
                <p className="text-muted-foreground">Perfect serving sizes for post-op nutrition needs</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Detailed Content */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl prose prose-lg">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-8">Nutrition Made Simple After Bariatric Surgery</h2>
            
            <h3 className="text-2xl font-bold mt-8 mb-4">The Post-Surgery Protein Challenge</h3>
            <p>
              If you've had gastric bypass, gastric sleeve, or gastric band surgery, you know the challenge: <strong>you need 60-80 grams of protein daily, but your stomach can only hold small amounts of food</strong>.
            </p>
            <p>
              This creates a nutritional puzzle:
            </p>
            <ul>
              <li>Protein shakes help, but you can't live on liquids forever</li>
              <li>Cooking high-protein meals takes time and energy you may not have</li>
              <li>Restaurant portions are too large and often nutritionally inadequate</li>
              <li>Regular meal prep services offer low-protein meals (15-25g) that don't meet your needs</li>
            </ul>
            <p>
              <strong>SmashMeals solves this problem</strong> with meals specifically designed for bariatric patients' unique nutritional requirements.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Why SmashMeals Works for Bariatric Patients</h3>
            
            <h4 className="text-xl font-semibold mt-6 mb-3">1. Protein-Dense Nutrition (30-45g Per Meal)</h4>
            <p>
              Every SmashMeals entrée contains <strong>30-45 grams of high-quality protein</strong> from:
            </p>
            <ul>
              <li><strong>Lean chicken breast</strong> - easy to digest, gentle on healing stomachs</li>
              <li><strong>Turkey</strong> - low-fat, high-protein option</li>
              <li><strong>Wild-caught fish</strong> - omega-3s support healing and reduce inflammation</li>
              <li><strong>Grass-fed beef</strong> - nutrient-dense with complete amino acids</li>
            </ul>
            <p>
              With just <strong>2-3 SmashMeals per day</strong>, you'll hit your 60-80g protein target without stress or calculations.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3">2. Perfect Portion Control</h4>
            <p>
              Our meals are portioned for typical post-op needs:
            </p>
            <ul>
              <li><strong>Early post-op (1-3 months):</strong> Split one meal into 2-3 servings throughout the day</li>
              <li><strong>Mid-recovery (3-6 months):</strong> Eat half a meal per sitting, saving the rest for later</li>
              <li><strong>Long-term (6+ months):</strong> Enjoy full meals as your stomach capacity increases</li>
            </ul>
            <p>
              This flexibility means SmashMeals grows with you throughout your entire weight loss journey.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3">3. No Added Sugar = Reduced Dumping Syndrome Risk</h4>
            <p>
              <strong>Dumping syndrome</strong> is a common post-surgery complication caused by rapid emptying of high-sugar foods into the small intestine. Symptoms include:
            </p>
            <ul>
              <li>Nausea and vomiting</li>
              <li>Diarrhea and cramping</li>
              <li>Rapid heartbeat and dizziness</li>
              <li>Sweating and weakness</li>
            </ul>
            <p>
              SmashMeals are formulated with <strong>zero added sugar</strong> and focus on complex carbohydrates, significantly reducing your dumping syndrome risk. Our meals support stable blood sugar and comfortable digestion.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3">4. Gluten-Free for Easier Digestion</h4>
            <p>
              Post-surgery, your digestive system is healing and sensitive. Gluten can be difficult to digest and may cause:
            </p>
            <ul>
              <li>Bloating and gas</li>
              <li>Inflammation in the digestive tract</li>
              <li>Uncomfortable fullness or pain</li>
              <li>Slowed nutrient absorption</li>
            </ul>
            <p>
              Our <strong>100% gluten-free kitchen</strong> ensures every meal is gentle on your healing stomach and promotes optimal nutrient absorption.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Sample Bariatric-Friendly Meals</h3>
            <div className="bg-muted p-6 rounded-lg my-6 not-prose">
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold">Grilled Chicken with Steamed Broccoli</h4>
                  <p className="text-sm text-muted-foreground">42g protein | 380 calories | 8g fat | Lean, easy to digest, nutrient-dense</p>
                </div>
                <div>
                  <h4 className="font-bold">Lemon Herb Salmon with Asparagus</h4>
                  <p className="text-sm text-muted-foreground">35g protein | 420 calories | 16g healthy fats | Omega-3s support healing</p>
                </div>
                <div>
                  <h4 className="font-bold">Turkey Meatballs with Zucchini Noodles</h4>
                  <p className="text-sm text-muted-foreground">40g protein | 360 calories | 10g fat | Low-carb, high-protein</p>
                </div>
                <div>
                  <h4 className="font-bold">Shrimp & Cheese Grits</h4>
                  <p className="text-sm text-muted-foreground">32g protein | 400 calories | Gentle on digestion, Southern comfort food</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Timeline: Using SmashMeals Through Your Recovery</h3>
            
            <h4 className="text-xl font-semibold mt-6 mb-3">Weeks 1-4: Liquid & Pureed Phase</h4>
            <p>
              <strong>Not recommended yet.</strong> Follow your surgeon's liquid/pureed diet plan. Focus on protein shakes and soft foods.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3">Weeks 4-8: Soft Foods Phase</h4>
            <p>
              <strong>Start with small portions.</strong> Once cleared for soft proteins by your medical team, try:
            </p>
            <ul>
              <li>1/4 of a SmashMeals entrée per sitting</li>
              <li>Focus on chicken, fish, or turkey options (easiest to digest)</li>
              <li>Eat slowly, chew thoroughly</li>
              <li>Save leftovers for your next meal 2-3 hours later</li>
            </ul>

            <h4 className="text-xl font-semibold mt-6 mb-3">Months 2-6: Building Tolerance</h4>
            <p>
              <strong>Gradually increase portions.</strong> As your stomach heals:
            </p>
            <ul>
              <li>Work up to 1/2 meal per sitting</li>
              <li>Aim for 2-3 SmashMeals per day to hit protein goals</li>
              <li>Continue eating slowly and stopping when full</li>
            </ul>

            <h4 className="text-xl font-semibold mt-6 mb-3">Months 6+: Long-Term Success</h4>
            <p>
              <strong>Full meals as tolerated.</strong> By this point, many patients can enjoy:
            </p>
            <ul>
              <li>Complete SmashMeals entrées in one sitting</li>
              <li>2-3 meals per day for consistent nutrition</li>
              <li>Freedom from constant meal planning and prep</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">Preventing Muscle Loss During Weight Loss</h3>
            <p>
              One of the biggest risks after bariatric surgery is <strong>losing muscle mass along with fat</strong>. Without adequate protein, your body will break down muscle for energy.
            </p>
            <p>
              <strong>How to preserve muscle with SmashMeals:</strong>
            </p>
            <ul>
              <li><strong>Prioritize protein at every meal</strong> - our 30-45g per serving makes this easy</li>
              <li><strong>Eat protein first</strong> before carbs or fats (fill your small stomach with what matters most)</li>
              <li><strong>Spread protein throughout the day</strong> - 2-3 meals ensures consistent muscle protein synthesis</li>
              <li><strong>Add light resistance training</strong> as cleared by your doctor</li>
            </ul>
            <p>
              Patients who maintain high protein intake post-surgery report:
            </p>
            <ul>
              <li>Better weight loss results (losing fat, not muscle)</li>
              <li>Higher energy levels</li>
              <li>Healthier metabolism long-term</li>
              <li>Tighter, more toned appearance as they lose weight</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">How to Order as a Bariatric Patient</h3>
            <p>
              <strong>Step 1:</strong> Confirm with your medical team that you're cleared for solid proteins<br />
              <strong>Step 2:</strong> Start with 5-7 meals for the week (test portions and tolerance)<br />
              <strong>Step 3:</strong> Order by Thursday, receive Monday (local delivery or shipping)<br />
              <strong>Step 4:</strong> Split meals into appropriate portions for your recovery stage<br />
              <strong>Step 5:</strong> Track your protein intake - aim for 60-80g daily
            </p>

            <div className="text-center my-8">
              <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="text-lg">
                  View This Week's Bariatric-Friendly Menu
                </Button>
              </a>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Bariatric Patient Testimonials</h3>
            <div className="bg-muted p-6 rounded-lg my-8">
              <p className="italic">"Six months post-gastric sleeve, and SmashMeals has been a lifesaver. I was struggling to get 60g of protein daily, but now I easily hit 70-80g with two meals. Down 85 pounds and feeling strong."</p>
              <p className="font-semibold mt-2">— Jennifer S., Knoxville TN</p>
            </div>
            <div className="bg-muted p-6 rounded-lg my-8">
              <p className="italic">"My surgeon recommended high-protein meal prep after my gastric bypass. SmashMeals is perfect—portion-controlled, no added sugar, and I've had zero dumping syndrome issues. Highly recommend."</p>
              <p className="font-semibold mt-2">— Robert T., Johnson City TN</p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Start Your Post-Surgery Nutrition Right</h3>
            <p>
              Bariatric surgery is a tool—but nutrition is the key to long-term success. SmashMeals takes the guesswork out of post-op eating with high-protein, portion-controlled, gluten-free meals designed for your unique needs.
            </p>
            <p className="font-semibold">
              Always consult your bariatric surgeon or dietitian before starting any new foods or meal plans.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              Frequently Asked Questions for Bariatric Patients
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
              Support Your Weight Loss Journey
            </h2>
            <p className="text-xl mb-8">
              30-45g protein. Portion-controlled. Gentle ingredients. 100% gluten-free.
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

export default Bariatric;
