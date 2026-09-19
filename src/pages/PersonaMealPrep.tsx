import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import InternalLinks from "@/components/InternalLinks";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Dumbbell, Heart, Baby, UtensilsCrossed } from "lucide-react";
import { Link } from "react-router-dom";

const PersonaMealPrep = () => {
  const internalLinks = [
    {
      title: "High Protein Shipping Guide",
      description: "How we ship 30-45g protein meals nationwide with FedEx 2-day delivery.",
      path: "/high-protein-shipping"
    },
    {
      title: "Tri-Cities Meal Prep",
      description: "Local delivery and pickup in Kingsport, Johnson City, and Bristol.",
      path: "/tri-cities-meal-prep"
    },
    {
      title: "Charlotte Delivery",
      description: "FedEx shipping to all Charlotte neighborhoods. $30 flat-rate shipping.",
      path: "/charlotte"
    },
    {
      title: "Nashville Delivery",
      description: "Ship to Music City with fresh, gluten-free high-protein meals.",
      path: "/nashville"
    },
    {
      title: "Why SmashMeals Beats Competitors",
      description: "Compare us to Factor75, Clean Eatz, and other meal prep services.",
      path: "/comparison"
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you have meals for athletes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Our meals contain 30-45g protein, are macro-counted, and are designed to support performance and recovery."
        }
      },
      {
        "@type": "Question",
        "name": "Are your meals safe for GLP-1 users?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Our high-protein, portion-controlled meals are perfect for GLP-1 users who need to maximize nutrition while managing appetite suppression. Visit our GLP-1 page for more details."
        }
      },
      {
        "@type": "Question",
        "name": "Do you accommodate bariatric patients?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our meals are protein-dense, portion-controlled, and gentle on the digestive system—perfect for post-bariatric surgery nutrition needs."
        }
      },
      {
        "@type": "Question",
        "name": "Can busy families use SmashMeals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Definitely! Our 100% gluten-free meals mean everyone in the family can eat the same food—no separate meal prep required. Order what you need each week with no subscriptions."
        }
      },
      {
        "@type": "Question",
        "name": "Do you have options for elderly customers eating alone?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our single-serving meals are perfect for seniors who don't want to cook full recipes. Easy to heat, nutritious, and gluten-free for digestive health."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Gluten-Free Meal Prep for Athletes, Families, GLP-1, and Bariatric Customers",
    "description": "SmashMeals serves athletes, busy families, GLP-1 users, bariatric patients, and elderly customers with high-protein, gluten-free meal prep tailored to your lifestyle.",
    "author": {
      "@type": "Organization",
      "name": "SmashMeals"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SmashMeals",
      "logo": {
        "@type": "ImageObject",
        "url": "https://smashmeals.com/og-image.jpg"
      }
    },
    "datePublished": "2025-01-15",
    "dateModified": "2025-01-15"
  };

  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep for Athletes, Families, GLP-1 & Bariatric | SmashMeals</title>
        <meta name="description" content="Tailored gluten-free meal prep for athletes, GLP-1 users, bariatric patients, busy families, and elderly customers. High-protein, macro-counted, delivered fresh." />
        <meta name="keywords" content="gluten free meal prep athletes, GLP-1 meals, bariatric meal prep, family meal prep gluten free, elderly meal delivery, high protein meals athletes" />
        <link rel="canonical" href="https://smashmeals.com/persona-meal-prep" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <LocalBusinessSchema />
      <Header />

      <main className="min-h-screen pt-24">
        {/* Hero */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <Users className="w-6 h-6" />
                <span className="text-lg font-semibold">Meal Prep for Every Lifestyle</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Gluten-Free Meal Prep<br />for Your Unique Needs
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Whether you're an athlete, GLP-1 user, bariatric patient, busy parent, or senior eating alone—SmashMeals has you covered with 100% gluten-free, high-protein nutrition.
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

        {/* Who We Serve */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold font-playfair text-center mb-12">
              Who SmashMeals Serves
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6">
                <Dumbbell className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Athletes & Bodybuilders</h3>
                <p className="text-muted-foreground mb-4">30-45g protein per meal. Macro-counted. Built for active lifestyles.</p>
                <Link to="/athletes" className="text-primary hover:underline text-sm font-semibold">Learn More →</Link>
              </Card>

              <Card className="p-6">
                <Heart className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">GLP-1 Users</h3>
                <p className="text-muted-foreground mb-4">High-protein, portion-controlled meals perfect for Ozempic, Wegovy, Mounjaro.</p>
                <Link to="/glp1" className="text-primary hover:underline text-sm font-semibold">Learn More →</Link>
              </Card>

              <Card className="p-6">
                <Heart className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Bariatric Patients</h3>
                <p className="text-muted-foreground mb-4">Protein-dense, small portions designed for post-surgery nutrition needs.</p>
                <Link to="/bariatric" className="text-primary hover:underline text-sm font-semibold">Learn More →</Link>
              </Card>

              <Card className="p-6">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Busy Families</h3>
                <p className="text-muted-foreground mb-4">100% gluten-free means everyone eats the same meals—no separate prep.</p>
                <Link to="/families" className="text-primary hover:underline text-sm font-semibold">Learn More →</Link>
              </Card>

              <Card className="p-6">
                <UtensilsCrossed className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Elderly Customers</h3>
                <p className="text-muted-foreground mb-4">Single-serving meals perfect for seniors eating alone. Easy to heat, nutritious.</p>
                <Link to="/elderly" className="text-primary hover:underline text-sm font-semibold">Learn More →</Link>
              </Card>

              <Card className="p-6">
                <Baby className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Anyone with Celiac</h3>
                <p className="text-muted-foreground mb-4">100% gluten-free kitchen. Zero cross-contamination risk. 8+ years safe.</p>
                <Link to="/" className="text-primary hover:underline text-sm font-semibold">Learn More →</Link>
              </Card>
            </div>
          </div>
        </section>

        {/* Detailed Content */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl prose prose-lg">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-8">Meal Prep Tailored to Your Lifestyle</h2>
            
            <h3 className="text-2xl font-bold mt-8 mb-4" id="athletes">SmashMeals for Athletes & Bodybuilders</h3>
            <p>
              When you're training hard, nutrition isn't negotiable. SmashMeals makes high-protein, macro-counted meals for athletes and active customers who want consistent nutrition without the prep work.
            </p>
            <p>
              <strong>Why athletes choose SmashMeals:</strong>
            </p>
            <ul>
              <li><strong>30-45g protein per meal</strong> from grass-fed beef, free-range chicken, wild-caught fish</li>
              <li><strong>Macro-counted precision</strong> for cutting, bulking, or maintenance</li>
              <li><strong>100% gluten-free</strong> for reduced inflammation and better recovery</li>
              <li><strong>No meal prep time</strong>—use that energy for training instead</li>
              <li><strong>Consistent nutrition</strong> week after week for predictable results</li>
            </ul>
            <p>
              Whether you're a competitive powerlifter, CrossFit athlete, marathon runner, or weekend warrior, hitting 150-200g protein daily is easy with SmashMeals. Just grab, heat, and fuel your performance.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4" id="glp1">SmashMeals for GLP-1 Users (Ozempic, Wegovy, Mounjaro, Zepbound)</h3>
            <p>
              If you're on a GLP-1 medication, you know the challenge: <strong>appetite suppression makes it hard to eat enough protein</strong>. Without intentional nutrition, muscle loss is a real risk.
            </p>
            <p>
              <strong>How SmashMeals helps GLP-1 users:</strong>
            </p>
            <ul>
              <li><strong>High protein in small portions</strong> (30-45g per meal without feeling overly full)</li>
              <li><strong>Nutrient-dense meals</strong> that maximize vitamins and minerals in smaller volumes</li>
              <li><strong>Easy to digest</strong> with gentle ingredients that won't upset suppressed appetites</li>
              <li><strong>Portion control built-in</strong>—no need to measure or guess</li>
              <li><strong>Macro tracking made simple</strong> so you can monitor protein intake</li>
            </ul>
            <p>
              Our customers report better energy, preserved muscle mass, and easier weight loss when combining GLP-1 medications with SmashMeals. Learn more on our dedicated <Link to="/glp1" className="text-primary hover:underline">GLP-1 meal prep page</Link>.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4" id="bariatric">SmashMeals for Bariatric Surgery Patients</h3>
            <p>
              Post-bariatric surgery, your nutritional needs are unique: <strong>60-80g protein daily in small, frequent meals</strong>. Our meals are designed to help you hit those targets.
            </p>
            <p>
              <strong>Why bariatric patients trust SmashMeals:</strong>
            </p>
            <ul>
              <li><strong>Protein-dense meals</strong> with 30-45g per serving</li>
              <li><strong>Small, manageable portions</strong> that fit post-surgery stomach capacity</li>
              <li><strong>Gentle ingredients</strong> that are easy on healing digestive systems</li>
              <li><strong>No added sugar or fillers</strong> that can cause dumping syndrome</li>
              <li><strong>Gluten-free for easier digestion</strong> and reduced inflammation</li>
            </ul>
            <p>
              Whether you're 2 weeks or 2 years post-surgery, SmashMeals simplifies your nutrition and supports long-term success.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4" id="families">SmashMeals for Busy Families</h3>
            <p>
              Cooking separate meals for family members with different dietary needs is exhausting. With SmashMeals, <strong>everyone eats the same food</strong>—no special preparation required.
            </p>
            <p>
              <strong>How families benefit:</strong>
            </p>
            <ul>
              <li><strong>100% gluten-free kitchen</strong> means safe meals for gluten-free family members and healthy options for everyone else</li>
              <li><strong>No subscriptions</strong>—order 5 meals for the week or 20, it's up to you</li>
              <li><strong>Kid-friendly flavors</strong> with adult-level nutrition</li>
              <li><strong>Saves 5-10 hours per week</strong> compared to shopping, cooking, and cleanup</li>
              <li><strong>More affordable than takeout</strong> at $10-14 per meal</li>
            </ul>
            <p>
              Parents love the freedom to focus on family time instead of meal prep stress.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4" id="elderly">SmashMeals for Elderly Customers Eating Alone</h3>
            <p>
              Cooking full recipes for one person often results in wasted food or eating the same leftovers for days. SmashMeals offers a better solution.
            </p>
            <p>
              <strong>Why seniors choose SmashMeals:</strong>
            </p>
            <ul>
              <li><strong>Single-serving portions</strong> with no waste</li>
              <li><strong>Easy to heat</strong> in the microwave (3-4 minutes)</li>
              <li><strong>Nutritious and balanced</strong> for healthy aging</li>
              <li><strong>Gluten-free for digestive health</strong> (many seniors develop gluten sensitivity)</li>
              <li><strong>Delivered fresh to your door</strong> with free local delivery in Tri-Cities</li>
              <li><strong>Variety each week</strong> so you never get bored</li>
            </ul>
            <p>
              Many of our elderly customers order 5-7 meals per week and supplement with simple breakfasts or snacks. It's a perfect balance of independence and convenience.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">How to Get Started</h3>
            <p>
              <strong>Step 1:</strong> Browse this week's menu at <a href="https://smashmeals.bottle.com/b/9814360" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">smashmeals.bottle.com</a><br />
              <strong>Step 2:</strong> Order by Thursday at 11:59 PM<br />
              <strong>Step 3:</strong> Your meals are prepared fresh over the weekend<br />
              <strong>Step 4:</strong> Delivered Monday or shipped FedEx 2-day if you're outside our local delivery area
            </p>
            <p>
              No subscriptions. No commitments. Just fresh, gluten-free, high-protein meals when you need them.
            </p>
          </div>
        </section>

        <InternalLinks 
          title="More SmashMeals Resources" 
          links={internalLinks} 
        />

        {/* FAQ */}
        <section className="py-20 px-4">
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
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">
              Find Your Perfect Meal Prep Solution
            </h2>
            <p className="text-xl mb-8">
              Athletes. GLP-1 users. Bariatric patients. Families. Seniors. We serve them all with 100% gluten-free excellence.
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

export default PersonaMealPrep;
