import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Clock, DollarSign, Shield, Heart } from "lucide-react";

const Families = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can non-gluten-free family members eat SmashMeals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! Our 100% gluten-free meals are delicious for everyone. Non-gluten-free family members won't even notice they're eating gluten-free—they'll just enjoy tasty, healthy food."
        }
      },
      {
        "@type": "Question",
        "name": "Do I have to order a subscription?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No subscriptions required! Order 5 meals or 50—whatever your family needs each week. Total flexibility with no commitments."
        }
      },
      {
        "@type": "Question",
        "name": "How much money does SmashMeals save families?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Families save 5-10 hours weekly on meal prep, plus SmashMeals costs $10-14 per serving—less than eating out ($15-25 per meal) and comparable to cooking at home without the time investment."
        }
      },
      {
        "@type": "Question",
        "name": "Are these meals kid-friendly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our meals feature familiar flavors like grilled chicken, taco bowls, meatballs, and more. Kids love them, and parents love the hidden vegetables and high protein content."
        }
      },
      {
        "@type": "Question",
        "name": "Can I mix and match meals for different family members?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Definitely! Order a variety of meals and let everyone choose their favorites. No cooking separate meals for different dietary preferences."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep for Busy Families | SmashMeals</title>
        <meta name="description" content="Save 5-10 hours weekly with family meal prep. 100% gluten-free means everyone eats the same food. $10-14 per meal, no subscriptions, delivered fresh." />
        <meta name="keywords" content="family meal prep, gluten free family meals, busy family meal delivery, healthy family meals, meal prep for families, gluten free kids meals" />
        <link rel="canonical" href="https://smashmeals.com/families" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <LocalBusinessSchema />
      <Header />
      <PageBreadcrumb currentPage="For Families" />

      <main className="min-h-screen pt-24">
        {/* Hero */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <Users className="w-6 h-6" />
                <span className="text-lg font-semibold">Meal Prep for Busy Families</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Everyone Eats the Same Food.<br />No Special Prep Required.
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                100% gluten-free meals perfect for families where some members are gluten-free and others aren't. Save 5-10 hours weekly—spend it with your family instead.
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

        {/* Why Families Choose SmashMeals */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold font-playfair text-center mb-12">
              Why Families Love SmashMeals
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-6 text-center">
                <Shield className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">100% Gluten-Free</h3>
                <p className="text-muted-foreground">Safe for gluten-free members, delicious for everyone else</p>
              </Card>

              <Card className="p-6 text-center">
                <Clock className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Save 5-10 Hours/Week</h3>
                <p className="text-muted-foreground">No shopping, meal prep, or cleanup—just family time</p>
              </Card>

              <Card className="p-6 text-center">
                <DollarSign className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">$10-14 Per Meal</h3>
                <p className="text-muted-foreground">Cheaper than eating out, comparable to cooking</p>
              </Card>

              <Card className="p-6 text-center">
                <Heart className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Kid-Friendly</h3>
                <p className="text-muted-foreground">Familiar flavors with hidden vegetables and high protein</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Detailed Content */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl prose prose-lg">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-8">Simplify Family Meals with SmashMeals</h2>
            
            <h3 className="text-2xl font-bold mt-8 mb-4">The Gluten-Free Family Challenge</h3>
            <p>
              If one or more family members are gluten-free (due to celiac disease, gluten sensitivity, or preference), you know the frustration:
            </p>
            <ul>
              <li><strong>Cooking separate meals</strong> for gluten-free and non-gluten-free family members</li>
              <li><strong>Constant cross-contamination worries</strong> with shared cooking surfaces</li>
              <li><strong>Limited restaurant options</strong> that everyone enjoys</li>
              <li><strong>Expensive specialty gluten-free ingredients</strong></li>
              <li><strong>Picky eaters</strong> who refuse "special" food</li>
            </ul>
            <p>
              <strong>SmashMeals eliminates all of this.</strong> Our 100% gluten-free kitchen means <strong>everyone in your family eats the same food</strong>—no separate prep, no cross-contamination, no complaints.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Get Your Time Back: 5-10 Hours Per Week</h3>
            <p>
              Time is the most valuable resource for busy families. Here's what meal prep typically costs:
            </p>
            <ul>
              <li><strong>Meal planning:</strong> 1-2 hours (browsing recipes, making lists)</li>
              <li><strong>Grocery shopping:</strong> 1-2 hours (driving, shopping, unloading)</li>
              <li><strong>Meal prep:</strong> 3-5 hours (chopping, cooking, portioning)</li>
              <li><strong>Cleanup:</strong> 1-2 hours (dishes, wiping counters, putting away leftovers)</li>
            </ul>
            <p>
              <strong>Total: 6-11 hours per week</strong> spent on food logistics instead of family time.
            </p>
            <p>
              With SmashMeals, that time is yours again. Order by Thursday, receive Monday, and spend your weekends at the park, watching your kids' games, or simply relaxing together.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Everyone Eats the Same Food—Really</h3>
            <p>
              The beauty of 100% gluten-free cooking? <strong>Non-gluten-free family members won't even notice.</strong>
            </p>
            <p>
              Our meals don't taste "gluten-free." They taste like delicious, restaurant-quality food:
            </p>
            <ul>
              <li>Grilled chicken with roasted vegetables</li>
              <li>Beef taco bowls with cilantro lime rice</li>
              <li>Lemon herb salmon with asparagus</li>
              <li>Turkey meatballs with marinara</li>
              <li>Shrimp and cheese grits</li>
            </ul>
            <p>
              Kids eat them. Teenagers eat them. Skeptical spouses eat them. And your gluten-free family member finally gets to enjoy meals without feeling "different."
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Perfect for Families With:</h3>
            
            <h4 className="text-xl font-semibold mt-6 mb-3">Celiac Disease</h4>
            <p>
              Our dedicated 100% gluten-free kitchen eliminates cross-contamination risk. Your celiac family member can eat confidently, and everyone else enjoys the same safe, delicious meals.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3">Gluten Sensitivity</h4>
            <p>
              Even without celiac disease, gluten can cause digestive issues, fatigue, and inflammation. SmashMeals provides symptom-free eating for sensitive family members while keeping meals simple for everyone.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3">Picky Eaters</h4>
            <p>
              Kids (and adults!) with selective eating habits often reject "weird" or "healthy" food. SmashMeals features familiar flavors and comfort foods—just made with better ingredients. They'll eat it and actually ask for more.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3">Busy Schedules</h4>
            <p>
              Between work, school, sports, activities, and everything else, who has time to cook dinner every night? SmashMeals gives you grab-and-go nutrition that's healthier (and cheaper) than fast food.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Cost Comparison: SmashMeals vs. Other Options</h3>
            <div className="bg-muted p-6 rounded-lg my-6 not-prose">
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold">Eating Out (Family of 4)</h4>
                  <p className="text-sm text-muted-foreground">$60-100 per meal | Limited gluten-free options | Hidden cross-contamination risks</p>
                </div>
                <div>
                  <h4 className="font-bold">Takeout/Fast Food (Family of 4)</h4>
                  <p className="text-sm text-muted-foreground">$40-60 per meal | Poor nutrition | Rarely gluten-free safe</p>
                </div>
                <div>
                  <h4 className="font-bold">Cooking at Home (Family of 4)</h4>
                  <p className="text-sm text-muted-foreground">$30-50 per meal + 6-11 hours weekly time investment | Gluten-free ingredients expensive</p>
                </div>
                <div>
                  <h4 className="font-bold">SmashMeals (Family of 4)</h4>
                  <p className="text-sm text-muted-foreground">$40-56 per meal (4 servings) | Zero time investment | 100% gluten-free guaranteed</p>
                </div>
              </div>
            </div>
            <p>
              <strong>The result?</strong> SmashMeals is comparable in price to cooking at home, cheaper than eating out, and saves you 5-10 hours per week. It's the best of all worlds.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">How Families Use SmashMeals</h3>
            
            <h4 className="text-xl font-semibold mt-6 mb-3">Full Weekly Meal Prep</h4>
            <p>
              Order 15-25 meals for the week (covering 3-5 dinners for a family of 4-5). Heat and serve each night—no cooking required.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3">Weeknight Backup Plan</h4>
            <p>
              Order 8-12 meals and keep them in the fridge or freezer for busy weeknights when you don't have time to cook.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3">Lunch Solutions</h4>
            <p>
              Parents working from home and kids doing remote learning? SmashMeals makes lunch easy. Heat a meal in 3 minutes and get back to work/school.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3">Mix with Home Cooking</h4>
            <p>
              Cook on weekends, use SmashMeals during the week. Or vice versa. Total flexibility with no subscriptions or commitments.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Kid-Approved Nutrition</h3>
            <p>
              Getting kids to eat healthy is hard. SmashMeals makes it easier:
            </p>
            <ul>
              <li><strong>Familiar flavors:</strong> Chicken, beef, turkey, fish prepared in ways kids recognize</li>
              <li><strong>Hidden vegetables:</strong> Broccoli, asparagus, zucchini, and more integrated into tasty meals</li>
              <li><strong>High protein:</strong> 30-45g per meal supports growing bodies and active kids</li>
              <li><strong>Balanced macros:</strong> Carbs for energy, protein for growth, healthy fats for brain development</li>
              <li><strong>No "weird" textures or flavors:</strong> Just good food that happens to be gluten-free</li>
            </ul>
            <p>
              Parents report that even their pickiest eaters ask for seconds. The secret? Real ingredients, real flavors, zero compromise.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">How to Order for Your Family</h3>
            <p>
              <strong>Step 1:</strong> Determine how many meals you need (family size × meals per week)<br />
              <strong>Step 2:</strong> Browse the weekly menu and select variety (everyone gets to choose favorites)<br />
              <strong>Step 3:</strong> Order by Thursday at 11:59 PM<br />
              <strong>Step 4:</strong> Delivered Monday (local delivery in Tri-Cities or FedEx 2-day shipping)<br />
              <strong>Step 5:</strong> Spend your saved time with family instead of in the kitchen
            </p>

            <div className="text-center my-8">
              <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="text-lg">
                  View This Week's Family-Friendly Menu
                </Button>
              </a>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Family Testimonials</h3>
            <div className="bg-muted p-6 rounded-lg my-8">
              <p className="italic">"I have celiac and my husband and kids don't. Cooking separate meals was exhausting. Now we all eat SmashMeals and my kids don't even know they're eating gluten-free. Game changer."</p>
              <p className="font-semibold mt-2">— Sarah M., Johnson City TN (family of 4)</p>
            </div>
            <div className="bg-muted p-6 rounded-lg my-8">
              <p className="italic">"Between soccer, dance, and work, we were eating fast food 4-5 nights a week. SmashMeals costs about the same but actually has nutrition. My kids love the chicken and my wife loves the extra 8 hours per week."</p>
              <p className="font-semibold mt-2">— Mike T., Kingsport TN (family of 5)</p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Give Your Family the Gift of Time</h3>
            <p>
              Dinner doesn't have to be stressful. With SmashMeals, you get healthy, delicious, gluten-free meals that everyone in your family will enjoy—without spending your entire weekend in the kitchen.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              Frequently Asked Questions for Families
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
              More Family Time. Less Kitchen Time.
            </h2>
            <p className="text-xl mb-8">
              100% gluten-free. Everyone eats the same food. No subscriptions. Delivered fresh.
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

export default Families;
