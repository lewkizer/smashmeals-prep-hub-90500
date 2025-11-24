import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { UtensilsCrossed, Heart, Clock, Shield } from "lucide-react";

const Elderly = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are SmashMeals good for seniors eating alone?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Perfect! Our single-serving meals eliminate food waste, are easy to heat (3-4 minutes in microwave), nutritious, and delivered fresh to your door."
        }
      },
      {
        "@type": "Question",
        "name": "How long do the meals last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our meals stay fresh for 5-7 days refrigerated or up to 6 months frozen. This gives you flexibility to order weekly or stock up for longer periods."
        }
      },
      {
        "@type": "Question",
        "name": "Do you deliver to my home?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We offer free local delivery in Tri-Cities (Kingsport, Johnson City, Bristol) on orders $50+, plus FedEx 2-day shipping to 98+ cities nationwide."
        }
      },
      {
        "@type": "Question",
        "name": "Why gluten-free for seniors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many seniors develop gluten sensitivity as they age. Gluten-free meals are easier to digest, reduce inflammation, and can help with digestive issues like bloating and discomfort."
        }
      },
      {
        "@type": "Question",
        "name": "How do I heat the meals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simple! Pierce the film, microwave for 3-4 minutes (or oven for 15-20 minutes), let cool for 1 minute, and enjoy. Full instructions on every meal."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Meal Delivery for Seniors | Gluten-Free Single Servings | SmashMeals</title>
        <meta name="description" content="Perfect meal delivery for elderly customers eating alone. Single-serving portions, easy to heat, nutritious, gluten-free. Free local delivery in Tri-Cities." />
        <meta name="keywords" content="senior meal delivery, elderly meal prep, meals for seniors living alone, single serving meals, gluten free senior meals, nutritious meals for elderly" />
        <link rel="canonical" href="https://smashmeals.com/elderly" />
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
                <UtensilsCrossed className="w-6 h-6" />
                <span className="text-lg font-semibold">Meal Delivery for Seniors</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Delicious, Nutritious Meals<br />for Independent Living
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Single-serving portions perfect for seniors eating alone. Easy to heat, delivered fresh, and gluten-free for easier digestion.
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

        {/* Why Seniors Choose SmashMeals */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold font-playfair text-center mb-12">
              Why Seniors Love SmashMeals
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-6 text-center">
                <UtensilsCrossed className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Single Servings</h3>
                <p className="text-muted-foreground">Perfect portions with no waste. No leftover management.</p>
              </Card>

              <Card className="p-6 text-center">
                <Clock className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Easy to Prepare</h3>
                <p className="text-muted-foreground">Just 3-4 minutes in the microwave. No cooking required.</p>
              </Card>

              <Card className="p-6 text-center">
                <Heart className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Nutritious & Balanced</h3>
                <p className="text-muted-foreground">30-45g protein, vegetables, and healthy carbs in every meal.</p>
              </Card>

              <Card className="p-6 text-center">
                <Shield className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Easier Digestion</h3>
                <p className="text-muted-foreground">100% gluten-free for sensitive digestive systems.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Detailed Content */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl prose prose-lg">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-8">Meal Delivery Designed for Seniors</h2>
            
            <h3 className="text-2xl font-bold mt-8 mb-4">The Challenge of Cooking for One</h3>
            <p>
              If you're a senior living alone or independently, you've probably experienced these frustrations:
            </p>
            <ul>
              <li><strong>Recipes serve 4-6 people</strong> - You're stuck eating leftovers for days or wasting food</li>
              <li><strong>Grocery shopping is exhausting</strong> - Heavy bags, long walks through stores, navigating parking lots</li>
              <li><strong>Standing to cook is tiring</strong> - Especially after a long day or if you have mobility challenges</li>
              <li><strong>Cleanup feels never-ending</strong> - Dishes, pots, pans, counters, floors</li>
              <li><strong>Motivation fades</strong> - Cooking elaborate meals for yourself doesn't feel worth it</li>
            </ul>
            <p>
              The result? Many seniors default to frozen dinners, fast food, or simply skip meals—none of which support healthy aging.
            </p>
            <p>
              <strong>SmashMeals offers a better solution:</strong> Fresh, nutritious, single-serving meals delivered to your door. No shopping, no cooking, no cleanup, and no waste.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Perfect Portions for One Person</h3>
            <p>
              Our meals are designed as <strong>single servings</strong>, which means:
            </p>
            <ul>
              <li><strong>No food waste</strong> - You eat the whole meal, nothing goes bad in the fridge</li>
              <li><strong>Appropriate calorie amounts</strong> - Not too much, not too little (typically 350-500 calories)</li>
              <li><strong>Balanced nutrition</strong> - Each meal has protein, vegetables, and carbs in the right proportions</li>
              <li><strong>Variety throughout the week</strong> - Order 5-7 different meals and enjoy something new each day</li>
            </ul>
            <p>
              Many of our senior customers order <strong>5-7 meals per week</strong> for dinners, then supplement with simple breakfasts (yogurt, fruit, toast) and light lunches (salad, soup, sandwiches). This creates the perfect balance of independence and convenience.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Incredibly Simple to Prepare</h3>
            <p>
              You don't need to be a chef—or even turn on your stove. Here's how easy SmashMeals are:
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3">Microwave Method (3-4 minutes)</h4>
            <ol>
              <li>Remove meal from refrigerator or freezer</li>
              <li>Pierce the film cover with a fork (lets steam escape)</li>
              <li>Microwave on high for 3-4 minutes (frozen meals: 5-6 minutes)</li>
              <li>Let cool for 1 minute</li>
              <li>Remove film, stir if needed, and enjoy</li>
            </ol>

            <h4 className="text-xl font-semibold mt-6 mb-3">Oven Method (15-20 minutes)</h4>
            <ol>
              <li>Preheat oven to 350°F</li>
              <li>Remove film cover</li>
              <li>Place meal in oven-safe dish (or leave in container if oven-safe)</li>
              <li>Heat for 15-20 minutes until hot throughout</li>
              <li>Let cool for 2-3 minutes and enjoy</li>
            </ol>
            <p>
              <strong>That's it.</strong> No chopping, no stirring, no watching a pot. Just heat and eat.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Nutrition for Healthy Aging</h3>
            <p>
              As we age, <strong>nutrition becomes even more important</strong>. SmashMeals support healthy aging with:
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3">High Protein (30-45g Per Meal)</h4>
            <p>
              Protein preserves muscle mass, supports immune function, and keeps you feeling full and satisfied. Many seniors don't eat enough protein—our meals make it effortless.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3">Vegetables in Every Meal</h4>
            <p>
              Broccoli, asparagus, green beans, zucchini, and more provide fiber, vitamins, and minerals for digestive health and disease prevention.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3">Balanced Carbohydrates</h4>
            <p>
              We use complex carbs like sweet potatoes, quinoa, rice, and vegetables for steady energy without blood sugar spikes.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3">Healthy Fats</h4>
            <p>
              Omega-3s from fish, olive oil, and other quality fats support heart health, brain function, and joint health.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Gluten-Free for Easier Digestion</h3>
            <p>
              Many seniors develop <strong>gluten sensitivity</strong> as they age, even without celiac disease. Symptoms include:
            </p>
            <ul>
              <li>Bloating and gas</li>
              <li>Digestive discomfort</li>
              <li>Fatigue after meals</li>
              <li>Joint pain and inflammation</li>
            </ul>
            <p>
              SmashMeals are <strong>100% gluten-free</strong>, which means:
            </p>
            <ul>
              <li><strong>Gentler on your digestive system</strong> - Less bloating, better nutrient absorption</li>
              <li><strong>Reduced inflammation</strong> - May help with joint pain and stiffness</li>
              <li><strong>More consistent energy</strong> - No post-meal crashes or brain fog</li>
              <li><strong>Safe for celiacs and sensitive individuals</strong> - Zero cross-contamination risk</li>
            </ul>
            <p>
              Even if you don't think you're gluten-sensitive, many of our senior customers report feeling <strong>lighter and more comfortable</strong> after switching to gluten-free meals.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Delivered Fresh to Your Door</h3>
            <p>
              No more grocery store trips. SmashMeals come right to your door:
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3">Local Delivery (Tri-Cities Area)</h4>
            <p>
              <strong>Free delivery on orders $50+</strong> to Kingsport, Johnson City, Bristol, Gray, Colonial Heights, and Blountville.
            </p>
            <ul>
              <li>Order by Thursday at 11:59 PM</li>
              <li>Delivered fresh Monday morning</li>
              <li>No need to be home - meals stay cold for hours in insulated packaging</li>
            </ul>

            <h4 className="text-xl font-semibold mt-6 mb-3">Nationwide Shipping (FedEx 2-Day)</h4>
            <p>
              If you're outside the Tri-Cities, we ship to <strong>98+ cities</strong> across the Southeast and beyond with FedEx 2-day delivery.
            </p>
            <ul>
              <li>Free shipping on orders $130+</li>
              <li>Arrives Tuesday or Wednesday in insulated packaging with ice packs</li>
              <li>Stays fresh for 5-7 days refrigerated or 6 months frozen</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">Flexibility: Order Weekly or Stock Up</h3>
            <p>
              <strong>No subscriptions. No commitments.</strong> Order exactly what you need:
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3">Weekly Orders</h4>
            <p>
              Order 5-7 meals every week for fresh dinners. This keeps variety high and ensures you're always eating the newest menu items.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3">Stock Your Freezer</h4>
            <p>
              Order 15-20 meals and freeze them. Our meals last <strong>up to 6 months frozen</strong>, giving you a reliable food supply for weeks or months.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3">Emergency Backup</h4>
            <p>
              Keep a few meals in the freezer for days when you don't feel like cooking or can't get to the store. They'll always be there when you need them.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Sample Weekly Menu for Seniors</h3>
            <div className="bg-muted p-6 rounded-lg my-6 not-prose">
              <ul className="space-y-2">
                <li><strong>Monday:</strong> Grilled Chicken with Green Beans & Sweet Potato</li>
                <li><strong>Tuesday:</strong> Lemon Herb Salmon with Asparagus & Quinoa</li>
                <li><strong>Wednesday:</strong> Turkey Meatballs with Marinara & Vegetables</li>
                <li><strong>Thursday:</strong> Beef Taco Bowl with Rice & Black Beans</li>
                <li><strong>Friday:</strong> Shrimp & Cheese Grits</li>
                <li><strong>Saturday:</strong> Steak Bites with Roasted Vegetables</li>
                <li><strong>Sunday:</strong> Baked Chicken with Broccoli & Mashed Sweet Potato</li>
              </ul>
            </div>
            <p>
              Every meal is different. Every meal is delicious. Every meal takes 3 minutes to heat.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">How to Order</h3>
            <p>
              <strong>Step 1:</strong> Decide how many meals you want for the week (we recommend starting with 5-7)<br />
              <strong>Step 2:</strong> Browse the weekly menu online and select your favorites<br />
              <strong>Step 3:</strong> Order by Thursday at 11:59 PM<br />
              <strong>Step 4:</strong> Meals delivered fresh Monday (or Tuesday/Wednesday if shipped)<br />
              <strong>Step 5:</strong> Heat and enjoy throughout the week
            </p>

            <div className="text-center my-8">
              <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="text-lg">
                  View This Week's Menu
                </Button>
              </a>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Senior Customer Testimonials</h3>
            <div className="bg-muted p-6 rounded-lg my-8">
              <p className="italic">"I'm 74 and live alone. Cooking felt like a chore, so I was eating a lot of frozen dinners. SmashMeals changed everything—real food, easy to heat, and I actually look forward to dinner again."</p>
              <p className="font-semibold mt-2">— Dorothy H., Kingsport TN</p>
            </div>
            <div className="bg-muted p-6 rounded-lg my-8">
              <p className="italic">"My daughter got me started on SmashMeals after I had knee surgery. I couldn't stand to cook, but these meals were perfect. I've been ordering every week for 6 months now."</p>
              <p className="font-semibold mt-2">— Richard P., Johnson City TN</p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Maintain Your Independence with SmashMeals</h3>
            <p>
              You've worked hard for your independence. SmashMeals helps you maintain it by:
            </p>
            <ul>
              <li>Eliminating the burden of grocery shopping</li>
              <li>Providing easy-to-prepare, nutritious meals</li>
              <li>Supporting healthy aging with high-protein, balanced nutrition</li>
              <li>Delivering convenience without sacrificing quality or taste</li>
            </ul>
            <p>
              Eat well. Live independently. Enjoy life.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              Frequently Asked Questions for Seniors
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
              Independent Living Made Easier
            </h2>
            <p className="text-xl mb-8">
              Single servings. Easy to heat. Delivered fresh. Gluten-free for easier digestion.
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

export default Elderly;
