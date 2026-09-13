import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import InternalLinks from "@/components/InternalLinks";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Truck, Package, Clock, Shield, Award, Users, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const TriCitiesMealPrep = () => {
  const internalLinks = [
    {
      title: "Johnson City Meal Prep",
      description: "Free local delivery to Johnson City. Pickup locations and delivery details.",
      path: "/johnson-city"
    },
    {
      title: "Kingsport Meal Prep",
      description: "Locally owned in Kingsport since 2017. Free delivery throughout Kingsport.",
      path: "/kingsport"
    },
    {
      title: "Bristol Meal Prep",
      description: "Serving both Bristol TN and Bristol VA with local delivery and pickup.",
      path: "/bristol"
    },
    {
      title: "Athletes & Bodybuilders",
      description: "Built for athletes and active lifestyles. 30-45g protein per meal, macro-counted.",
      path: "/athletes"
    },
    {
      title: "Families",
      description: "100% gluten-free means everyone eats the same meals—no separate prep.",
      path: "/families"
    },
    {
      title: "Why SmashMeals Beats Competitors",
      description: "Compare us to Factor75, Clean Eatz, FitPlus Meals, and Good Batch Mama.",
      path: "/comparison"
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What areas do you serve in the Tri-Cities?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve Kingsport, Johnson City, Bristol, Gray, Colonial Heights, Blountville, and surrounding Tri-Cities communities with both local pickup and delivery options."
        }
      },
      {
        "@type": "Question",
        "name": "Are your meals really 100% gluten-free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Every meal is prepared in our dedicated 100% gluten-free kitchen. We've been serving the Tri-Cities for over 8 years with zero cross-contamination incidents."
        }
      },
      {
        "@type": "Question",
        "name": "How long do the meals last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our meals stay fresh for 5-7 days refrigerated, or up to 6 months frozen. This is significantly longer than most meal prep competitors."
        }
      },
      {
        "@type": "Question",
        "name": "Do you deliver to my home in the Tri-Cities?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We offer free local delivery on orders over $50 to Kingsport, Johnson City, Bristol, Gray, Colonial Heights, and Blountville. We also have convenient pickup locations throughout the Tri-Cities."
        }
      },
      {
        "@type": "Question",
        "name": "How does pricing compare to restaurants or cooking at home?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our meals average $10-14 per serving, which is more affordable than eating out and comparable to cooking at home—but with zero shopping, prep, or cleanup time."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Gluten-Free Meal Prep in Tri-Cities Tennessee: The Complete Guide",
    "description": "Discover why SmashMeals is the #1 gluten-free meal prep service in Kingsport, Johnson City, and Bristol. 100% gluten-free kitchen, local delivery, and macro-counted meals.",
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
        <title>Gluten-Free Meal Prep Tri-Cities TN | Kingsport, Johnson City, Bristol | SmashMeals</title>
        <meta name="description" content="The #1 gluten-free meal prep service in Tri-Cities Tennessee. 100% gluten-free kitchen serving Kingsport, Johnson City, Bristol. Free local delivery and macro-counted meals." />
        <meta name="keywords" content="gluten free meal prep tri cities, meal prep Kingsport TN, meal prep Johnson City, meal prep Bristol TN, gluten free Tri-Cities, healthy meal delivery Kingsport, macro counted meals Johnson City, high protein meal prep Bristol" />
        <link rel="canonical" href="https://smashmeals.com/tri-cities-meal-prep" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <LocalBusinessSchema />
      <Header />

      <main className="min-h-screen pt-24">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Serving Tri-Cities Since 2016</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Gluten-Free Meal Prep<br />in Tri-Cities Tennessee
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The #1 gluten-free meal prep service in Kingsport, Johnson City, and Bristol. Trusted by athletes, busy families, and health-conscious residents for over 8 years.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="lg" className="text-lg">
                    View This Week's Menu
                  </Button>
                </a>
                <Link to="/service-areas">
                  <Button variant="outline" size="lg" className="text-lg">
                    Check Delivery Areas
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why SmashMeals Dominates Tri-Cities */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold font-playfair text-center mb-12">
              Why Tri-Cities Chooses SmashMeals
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-6 text-center">
                <Shield className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">100% Gluten-Free Kitchen</h3>
                <p className="text-muted-foreground">Zero cross-contamination risk. Safe for celiac disease and gluten sensitivity.</p>
              </Card>

              <Card className="p-6 text-center">
                <Award className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Built for Active Lifestyles</h3>
                <p className="text-muted-foreground">High-protein, macro-counted meals for local athletes.</p>
              </Card>

              <Card className="p-6 text-center">
                <MapPin className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Local Tri-Cities Business</h3>
                <p className="text-muted-foreground">Family-owned and operated right here in Kingsport since 2016.</p>
              </Card>

              <Card className="p-6 text-center">
                <Truck className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Free Local Delivery</h3>
                <p className="text-muted-foreground">Free delivery in Kingsport, Johnson City, Bristol on orders $50+</p>
              </Card>
            </div>
          </div>
        </section>

        {/* The Complete Tri-Cities Guide */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl prose prose-lg">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-8">The Complete Guide to Gluten-Free Meal Prep in Tri-Cities</h2>
            
            <h3 className="text-2xl font-bold mt-8 mb-4">What Makes SmashMeals Different in the Tri-Cities?</h3>
            <p>
              When you're looking for gluten-free meal prep in Kingsport, Johnson City, or Bristol, you have options—but none match SmashMeals' commitment to quality, safety, and convenience. We've been the Tri-Cities' trusted gluten-free meal prep provider since 2016, and here's why residents keep choosing us week after week.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">100% Gluten-Free Kitchen: The SmashMeals Guarantee</h3>
            <p>
              Unlike meal prep companies that simply offer "gluten-free options" alongside regular meals, SmashMeals operates a <strong>dedicated 100% gluten-free facility</strong>. This means:
            </p>
            <ul>
              <li>Zero risk of cross-contamination</li>
              <li>No shared cooking surfaces with gluten-containing foods</li>
              <li>All ingredients sourced from trusted gluten-free suppliers</li>
              <li>Safe for celiac disease, gluten sensitivity, and gluten intolerance</li>
              <li>Perfect for families where some members are gluten-free and others aren't</li>
            </ul>
            <p>
              For the past 8+ years, we've maintained a perfect safety record with zero cross-contamination incidents. That's a track record you can trust.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Tri-Cities Delivery & Pickup Locations</h3>
            <p>
              We make it incredibly convenient to get fresh, gluten-free meals throughout the Tri-Cities region:
            </p>
            <h4 className="text-xl font-semibold mt-6 mb-3">Free Local Delivery Areas (Orders $50+)</h4>
            <ul>
              <li><strong>Kingsport, TN</strong> - Our home base at 1917 Meadowview Pkwy Suite 100</li>
              <li><strong>Johnson City, TN</strong> - Serving downtown, ETSU campus, and surrounding neighborhoods</li>
              <li><strong>Bristol, TN/VA</strong> - Both Tennessee and Virginia sides</li>
              <li><strong>Gray, TN</strong> - Boones Creek and surrounding areas</li>
              <li><strong>Colonial Heights, TN</strong></li>
              <li><strong>Blountville, TN</strong></li>
            </ul>

            <h4 className="text-xl font-semibold mt-6 mb-3">Convenient Pickup Locations</h4>
            <p>
              Prefer to pick up your meals? We have multiple pickup points throughout the Tri-Cities for ultimate flexibility. Check our <Link to="/service-areas" className="text-primary hover:underline">service areas page</Link> for specific locations and times.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">What's On the Menu? High-Protein, Macro-Counted Perfection</h3>
            <p>
              Every SmashMeals dish is designed with nutrition in mind. Our Tri-Cities customers love that each meal comes with:
            </p>
            <ul>
              <li><strong>High Protein Content:</strong> 30-45g protein per meal to support muscle recovery, weight loss, and satiety</li>
              <li><strong>Macro Counting:</strong> Every meal labeled with exact calories, protein, carbs, and fats</li>
              <li><strong>Balanced Nutrition:</strong> Lean proteins, complex carbs, healthy fats, and vegetables</li>
              <li><strong>No Fillers:</strong> Real ingredients, real food—no mystery additives</li>
              <li><strong>Variety:</strong> 10+ rotating menu items each week so you never get bored</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">Nutrition for Local Athletes</h3>
            <p>
              SmashMeals serves athletes and active customers throughout the Tri-Cities with high-protein, gluten-free meals designed to make consistent nutrition easier.
            </p>
            <p>
              Our meals help athletes:
            </p>
            <ul>
              <li>Hit their macronutrient targets for peak performance</li>
              <li>Recover faster after intense training sessions</li>
              <li>Maintain energy levels throughout long competition seasons</li>
              <li>Stay healthy with clean, gluten-free nutrition</li>
            </ul>
            <p>
              If our meals work for Division I athletes, imagine what they can do for your fitness goals.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Who SmashMeals Serves in the Tri-Cities</h3>
            <p>
              Our customer base in Kingsport, Johnson City, and Bristol is incredibly diverse. Here's who we're helping:
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3">Busy Professionals</h4>
            <p>
              No time to meal prep on Sundays? We've got you covered. Our meals are delivered fresh every Monday, giving you a full week of grab-and-go nutrition. Perfect for nurses at Holston Valley Medical Center, teachers in Kingsport City Schools, or anyone juggling a demanding career.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3">Fitness Enthusiasts & Athletes</h4>
            <p>
              Whether you train at Powerhouse Gym in Johnson City, CrossFit Bristol, or any of the Tri-Cities' many fitness centers, our high-protein, macro-counted meals support your goals. Track your nutrition with precision and see real results.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3">GLP-1 Users (Ozempic, Wegovy, Mounjaro)</h4>
            <p>
              Managing appetite suppression while maintaining proper nutrition is challenging. Our portion-controlled, protein-rich meals are perfect for GLP-1 users who need to maximize nutrition in smaller volumes. Learn more on our <Link to="/glp1" className="text-primary hover:underline">GLP-1 meal prep page</Link>.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3">Bariatric Patients</h4>
            <p>
              Post-surgery nutrition requires high protein, small portions, and gentle ingredients. Our meals check all the boxes and help you stay on track during recovery and beyond.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3">Families with Gluten-Free Needs</h4>
            <p>
              Cooking separate meals for gluten-free family members is exhausting. With SmashMeals, everyone can enjoy the same delicious, safe meals—no special preparation required.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">How SmashMeals Works in the Tri-Cities</h3>
            <div className="grid md:grid-cols-3 gap-6 not-prose my-8">
              <Card className="p-6">
                <Clock className="w-12 h-12 text-primary mb-4" />
                <h4 className="text-lg font-bold mb-2">Step 1: Order by Thursday</h4>
                <p className="text-sm text-muted-foreground">Browse our weekly menu online and place your order by Thursday at 11:59 PM.</p>
              </Card>
              <Card className="p-6">
                <Package className="w-12 h-12 text-primary mb-4" />
                <h4 className="text-lg font-bold mb-2">Step 2: We Prep Fresh</h4>
                <p className="text-sm text-muted-foreground">Our chefs prepare your meals fresh in our gluten-free kitchen over the weekend.</p>
              </Card>
              <Card className="p-6">
                <Truck className="w-12 h-12 text-primary mb-4" />
                <h4 className="text-lg font-bold mb-2">Step 3: Delivered Monday</h4>
                <p className="text-sm text-muted-foreground">Your meals arrive fresh Monday morning, ready to enjoy all week.</p>
              </Card>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Pricing: Affordable, Transparent, No Hidden Fees</h3>
            <p>
              SmashMeals meals range from <strong>$10-$14 per serving</strong> depending on the dish. That's:
            </p>
            <ul>
              <li><strong>Less expensive than eating out</strong> at Tri-Cities restaurants ($15-25 per meal)</li>
              <li><strong>Comparable to cooking at home</strong> but with zero time investment</li>
              <li><strong>More affordable than competitors</strong> like Factor75 ($11-15/meal + shipping)</li>
            </ul>
            <p>
              <strong>Free local delivery on orders $50+</strong> in Kingsport, Johnson City, Bristol, Gray, Colonial Heights, and Blountville. No subscriptions required—order as much or as little as you need each week.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Shelf Life: Longer Than the Competition</h3>
            <p>
              One of SmashMeals' biggest advantages is our superior shelf life:
            </p>
            <ul>
              <li><strong>5-7 days refrigerated</strong> (most competitors: 3-5 days)</li>
              <li><strong>Up to 6 months frozen</strong></li>
              <li>No preservatives—just smart food science and proper packaging</li>
            </ul>
            <p>
              This means less food waste, more flexibility in your eating schedule, and the ability to stock up during busy weeks.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">SmashMeals vs. Other Tri-Cities Options</h3>
            <p>
              You might be considering other meal prep options in the Tri-Cities. Here's how we compare:
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3">SmashMeals vs. Clean Eatz</h4>
            <p>
              Clean Eatz offers some gluten-free options, but their kitchen is NOT 100% gluten-free. If you have celiac disease or severe gluten sensitivity, cross-contamination is a real risk. SmashMeals eliminates that concern entirely.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3">SmashMeals vs. National Brands (Factor75, Trifecta, Freshly)</h4>
            <p>
              National brands ship from far away, meaning:
            </p>
            <ul>
              <li>Longer shipping times (3-5 days in transit)</li>
              <li>Higher shipping costs ($9-15 per order)</li>
              <li>Less fresh meals by the time they arrive</li>
              <li>No local support or accountability</li>
            </ul>
            <p>
              SmashMeals is made locally in Kingsport and delivered fresh within 24 hours. The difference in quality is undeniable.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">What Tri-Cities Customers Are Saying</h3>
            <div className="bg-muted p-6 rounded-lg my-8">
              <p className="italic">"I've tried every meal prep service in the Tri-Cities, and SmashMeals is by far the best. The gluten-free guarantee gives me peace of mind, and the flavors are amazing. My entire family eats them now, even though only I'm gluten-free!"</p>
              <p className="font-semibold mt-2">— Sarah M., Johnson City</p>
            </div>
            <div className="bg-muted p-6 rounded-lg my-8">
              <p className="italic">"Nutrition is critical. SmashMeals makes it easy to hit my macros without spending hours in the kitchen. Plus, knowing it's made right here in Kingsport makes me proud to support local."</p>
              <p className="font-semibold mt-2">— Marcus J., Local Athlete</p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Ready to Try SmashMeals?</h3>
            <p>
              Join hundreds of Tri-Cities residents who trust SmashMeals for convenient, delicious, gluten-free meal prep. Order this week's menu and experience the SmashMeals difference yourself.
            </p>
            <div className="text-center my-8">
              <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="text-lg">
                  View This Week's Menu
                </Button>
              </a>
            </div>
          </div>
        </section>

        <InternalLinks 
          title="Explore More SmashMeals Services" 
          links={internalLinks} 
        />

        {/* FAQ Section */}
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
              The Best Gluten-Free Meal Prep in Tri-Cities
            </h2>
            <p className="text-xl mb-8">
              Trusted since 2016. 100% gluten-free. Delivered fresh every Monday.
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

export default TriCitiesMealPrep;
