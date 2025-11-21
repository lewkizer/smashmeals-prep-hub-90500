import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, Utensils, Truck, Clock, Shield, Star, Heart, Users } from "lucide-react";

export default function GlutenFreeMealPrepGuide() {
  const tableOfContents = [
    { id: "what-is", title: "What is Gluten-Free Meal Prep?" },
    { id: "benefits", title: "Health Benefits & Who It's For" },
    { id: "choosing", title: "Choosing a Gluten-Free Meal Prep Service" },
    { id: "shelf-life", title: "Storage & Shelf Life" },
    { id: "tri-cities", title: "Gluten-Free Meal Prep in Tri-Cities" },
    { id: "athletes", title: "For Athletes & Active Lifestyles" },
    { id: "families", title: "Family-Sized Options" },
    { id: "vs-competitors", title: "SmashMeals vs Competitors" },
    { id: "getting-started", title: "How to Get Started" },
    { id: "faq", title: "Frequently Asked Questions" }
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The Complete Guide to Gluten-Free Meal Prep in Tri-Cities Tennessee",
    "description": "Everything you need to know about gluten-free meal prep: benefits, how to choose a service, storage tips, and why SmashMeals is Tri-Cities' top choice for celiac-safe meals.",
    "image": "https://smashmeals.com/og-image.jpg",
    "author": {
      "@type": "Organization",
      "name": "SmashMeals"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SmashMeals",
      "logo": {
        "@type": "ImageObject",
        "url": "https://smashmeals.com/smashmeals-logo.webp"
      }
    },
    "datePublished": "2025-01-21",
    "dateModified": "2025-01-21",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://smashmeals.com/gluten-free-meal-prep-guide"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://smashmeals.com" },
      { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://smashmeals.com/guides" },
      { "@type": "ListItem", "position": 3, "name": "Gluten-Free Meal Prep Guide", "item": "https://smashmeals.com/gluten-free-meal-prep-guide" }
    ]
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Complete Guide to Gluten-Free Meal Prep | Tri-Cities TN | SmashMeals</title>
        <meta 
          name="description" 
          content="The ultimate guide to gluten-free meal prep in Tri-Cities Tennessee. Learn about celiac-safe meal services, storage tips, nutrition, and why SmashMeals is the trusted choice for 8+ years. Expert advice for athletes, families, and busy professionals." 
        />
        <meta 
          name="keywords" 
          content="gluten-free meal prep guide, celiac meal prep, gluten-free meal delivery tri-cities, meal prep for celiac disease, gluten-free meal service tennessee, johnson city meal prep, kingsport gluten-free, bristol meal delivery, celiac-safe kitchen, cross-contamination prevention, dedicated gluten-free facility" 
        />
        <link rel="canonical" href="https://smashmeals.com/gluten-free-meal-prep-guide" />
        
        <meta property="og:title" content="Complete Guide to Gluten-Free Meal Prep | SmashMeals" />
        <meta property="og:description" content="Everything you need to know about gluten-free meal prep in Tri-Cities TN. Expert guide from Tri-Cities' only 100% gluten-free facility." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://smashmeals.com/gluten-free-meal-prep-guide" />
        
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <Header />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge className="mb-4">Ultimate Guide</Badge>
          <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-6">
            The Complete Guide to<br />
            <span className="text-primary">Gluten-Free Meal Prep</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
            Everything you need to know about celiac-safe meal prep in Tri-Cities Tennessee
          </p>
          <p className="text-sm text-muted-foreground">
            Updated January 2025 • 15 min read • By SmashMeals Team
          </p>
        </div>

        {/* Table of Contents */}
        <Card className="mb-12 border-2">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Table of Contents</h2>
            <nav className="space-y-2">
              {tableOfContents.map((item, index) => (
                <a 
                  key={item.id} 
                  href={`#${item.id}`}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors group"
                >
                  <span className="text-sm font-semibold text-muted-foreground group-hover:text-primary">
                    {index + 1}
                  </span>
                  <span className="group-hover:text-primary">{item.title}</span>
                </a>
              ))}
            </nav>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          
          {/* Section 1 */}
          <section id="what-is" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">What is Gluten-Free Meal Prep?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Gluten-free meal prep is the practice of preparing nutritious, ready-to-eat meals that contain absolutely no gluten - a protein found in wheat, barley, rye, and their derivatives. For individuals with celiac disease or gluten sensitivity, accessing truly safe meals is critical, not optional.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Unlike regular meal prep services that might offer "gluten-free options" in facilities that also process gluten-containing foods, dedicated gluten-free meal prep operates in a 100% gluten-free environment, eliminating any risk of cross-contamination.
            </p>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-2">Why 100% Gluten-Free Matters</h3>
                    <p className="text-muted-foreground">
                      For those with celiac disease, even trace amounts of gluten (as little as 20 parts per million) can trigger immune responses causing intestinal damage. A dedicated gluten-free facility is the only way to guarantee safety.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 2 */}
          <section id="benefits" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Health Benefits & Who It's For</h2>
            
            <h3 className="text-2xl font-semibold mb-4">Ideal For:</h3>
            
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {[
                { title: "Celiac Disease", desc: "Medically required gluten-free diet with zero cross-contamination tolerance" },
                { title: "Gluten Sensitivity", desc: "Non-celiac gluten intolerance causing digestive discomfort and inflammation" },
                { title: "Athletes & Fitness", desc: "Clean eating plans with precise macro tracking for performance optimization" },
                { title: "GLP-1 Users", desc: "High-protein, portion-controlled meals perfect for weight loss medication support" },
                { title: "Busy Professionals", desc: "Save 10+ hours weekly on meal planning, shopping, and cooking" },
                { title: "Families", desc: "Convenient, healthy dinners that accommodate dietary restrictions effortlessly" }
              ].map(item => (
                <Card key={item.title}>
                  <CardContent className="p-4">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h3 className="text-2xl font-semibold mb-4">Key Health Benefits:</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span><strong>Reduced Inflammation:</strong> Elimination of gluten reduces inflammatory markers in sensitive individuals</span>
              </li>
              <li className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span><strong>Improved Digestion:</strong> Many experience better gut health and reduced bloating</span>
              </li>
              <li className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span><strong>Better Nutrition Control:</strong> Pre-measured portions with detailed macro tracking</span>
              </li>
              <li className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span><strong>Time Savings:</strong> Average 10-15 hours saved weekly on meal planning and preparation</span>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section id="choosing" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">How to Choose a Gluten-Free Meal Prep Service</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Not all "gluten-free" meal services are created equal. Here's what to look for when evaluating meal prep companies:
            </p>

            <div className="space-y-6">
              <Card className="border-2 border-primary">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Shield className="w-6 h-6 text-primary" />
                    1. Dedicated Gluten-Free Facility (MOST IMPORTANT)
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Ask: "Is your entire kitchen 100% gluten-free, or do you just offer gluten-free options?"
                  </p>
                  <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-900">
                    <p className="text-sm">
                      <strong>✓ SmashMeals:</strong> 100% dedicated gluten-free facility since 2017. Every ingredient, surface, and utensil is gluten-free.
                    </p>
                  </div>
                  <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-900 mt-2">
                    <p className="text-sm">
                      <strong>✗ Many competitors:</strong> Offer "gluten-free options" but prepare them in shared facilities with gluten-containing foods, risking cross-contamination.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">2. Experience & Track Record</h3>
                  <p className="text-muted-foreground mb-3">
                    How long has the company been operating? Look for established businesses with proven safety records and customer testimonials from those with celiac disease.
                  </p>
                  <p className="text-sm bg-muted p-3 rounded-lg">
                    <strong>SmashMeals</strong> has served Tri-Cities since 2017 (8+ years) with 10,000+ customers and 150+ five-star reviews from celiac customers.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">3. Nutrition Transparency</h3>
                  <p className="text-muted-foreground mb-3">
                    Every meal should include complete nutrition information: calories, protein, carbs, and fats. This is essential for macro tracking, medical needs, and fitness goals.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">4. Shelf Life & Shipping</h3>
                  <p className="text-muted-foreground mb-3">
                    Ask about shelf life (local pickup meals typically last 5-6 days refrigerated). If shipping, verify they use FedEx 2-day with proper ice packs and insulation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">5. Flexibility & Subscriptions</h3>
                  <p className="text-muted-foreground">
                    Beware of services that force long-term commitments. Look for week-to-week flexibility with no subscription requirements so you can order when you need meals, not on someone else's schedule.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 4 */}
          <section id="shelf-life" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Storage & Shelf Life Guide</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Proper storage extends shelf life and maintains meal quality. Here's what you need to know:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Fresh (Local Pickup/Delivery)</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>5-6 days refrigerated:</strong> Most proteins and entrees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>4-5 days refrigerated:</strong> Seafood and breakfast items</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Store at 38-40°F:</strong> Keep in main refrigerator area</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Never frozen:</strong> Fresh meals ready to heat and eat</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Frozen (Shipped)</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>3-6 months frozen:</strong> Meals shipped via FedEx</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Thaw overnight:</strong> Move to fridge 12-24 hours before eating</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Proper packaging:</strong> Arrives with ice packs and insulation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Refreeze if needed:</strong> Can be refrozen if still frozen upon arrival</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-900">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Pro Tip: Meal Rotation Strategy</h3>
                    <p className="text-sm text-muted-foreground">
                      Label meals with pickup/delivery date. Eat seafood and breakfast items first (shorter shelf life), save beef and poultry for later in the week. This maximizes freshness and reduces waste.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Section 5 */}
          <section id="tri-cities" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Gluten-Free Meal Prep in Tri-Cities Tennessee</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              The Tri-Cities region (Johnson City, Kingsport, Bristol) has seen explosive growth in health-conscious eating, but finding truly celiac-safe meal options remains challenging. Most restaurants and meal services offer "gluten-free options" but prepare them alongside gluten-containing foods, creating cross-contamination risks.
            </p>

            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">SmashMeals: Tri-Cities' Only Dedicated Gluten-Free Kitchen</h3>
                <p className="text-muted-foreground mb-4">
                  Since 2017, SmashMeals has operated Tri-Cities' first and only 100% gluten-free commercial kitchen. Founded to serve the region's underserved celiac and gluten-sensitive population, we've grown from 20 customers to over 10,000 by maintaining unwavering standards:
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Zero Gluten Ingredients</div>
                      <div className="text-sm text-muted-foreground">Not a single gluten-containing item in our facility</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Dedicated Equipment</div>
                      <div className="text-sm text-muted-foreground">All utensils, pans, and surfaces gluten-free only</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Staff Training</div>
                      <div className="text-sm text-muted-foreground">Team educated on celiac safety protocols</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Regular Testing</div>
                      <div className="text-sm text-muted-foreground">Verified gluten-free status maintained</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-2xl font-semibold mb-4">Service Area Coverage:</h3>
            <p className="text-muted-foreground mb-4">
              <strong>Free Local Delivery:</strong> Johnson City, Kingsport, Bristol, Greeneville, Elizabethton, Gray, Damascus VA, Chucky, Mosheim, and 20+ more Tri-Cities locations.
            </p>
            <p className="text-muted-foreground mb-6">
              <strong>Regional Shipping:</strong> FedEx 2-day delivery to Knoxville, Chattanooga, Nashville, Charlotte, Asheville, Atlanta, and throughout the Southeast.
            </p>
          </section>

          {/* Section 6 */}
          <section id="athletes" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Gluten-Free Meal Prep for Athletes</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Athletes with celiac disease or gluten sensitivity face unique challenges: fueling intense training while avoiding gluten. SmashMeals has become the trusted choice for ETSU athletes, CrossFit competitors, and fitness enthusiasts throughout the region.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Why Athletes Choose SmashMeals:</h3>
            
            <div className="space-y-4 mb-6">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2">Precise Macro Tracking</h4>
                  <p className="text-sm text-muted-foreground">
                    Every meal lists exact protein, carbs, and fats. No guessing - just perfect portions for hitting your macros whether cutting, maintaining, or bulking.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2">High-Protein Options</h4>
                  <p className="text-sm text-muted-foreground">
                    Most meals deliver 35-45g protein per serving. Options for 50g+ protein meals for serious athletes and bodybuilders.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2">Convenient Pickup Locations</h4>
                  <p className="text-sm text-muted-foreground">
                    Partner locations at CrossFit Arcane and Center of Strength make pickup seamless before or after training.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-3">Success Story: ETSU Athletes</h3>
                <p className="text-muted-foreground text-sm">
                  "As a celiac athlete, finding safe fuel was nearly impossible until SmashMeals. Now I can focus on training instead of worrying about cross-contamination. The macro tracking helps me hit my performance goals every time." - ETSU Track & Field athlete
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Section 7 */}
          <section id="families" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Family-Sized Gluten-Free Freezer Meals</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Feeding a family with dietary restrictions is exhausting. SmashMeals' family freezer meals serve 4-6 people and solve the "what's for dinner?" question permanently.
            </p>

            <div className="bg-muted p-6 rounded-xl mb-6">
              <h3 className="text-xl font-bold mb-4">Family Meal Advantages:</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Save 10+ hours weekly</strong> - No meal planning, grocery shopping, or extensive cooking</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>$50-55 for dinner entrees</strong> - Feeds 6 people for less than takeout</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Ready in minutes</strong> - Heat and serve, no prep work required</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Kid-approved flavors</strong> - Even picky eaters love these meals</span>
                </li>
              </ul>
            </div>

            <Button size="lg" asChild>
              <Link to="/freezer-meals">View Family Freezer Meal Options</Link>
            </Button>
          </section>

          {/* Section 8 */}
          <section id="vs-competitors" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">SmashMeals vs Competitors: Honest Comparison</h2>
            
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-primary">
                    <th className="text-left p-4 font-bold">Feature</th>
                    <th className="text-left p-4 font-bold text-primary">SmashMeals</th>
                    <th className="text-left p-4 font-bold">Clean Eatz</th>
                    <th className="text-left p-4 font-bold">Good Batch Mama</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">100% Gluten-Free Facility</td>
                    <td className="p-4 text-green-600 font-bold">✓ Yes</td>
                    <td className="p-4 text-red-600">✗ No (mixed facility)</td>
                    <td className="p-4 text-yellow-600">~ Options only</td>
                  </tr>
                  <tr className="border-b bg-muted/50">
                    <td className="p-4 font-semibold">Years Established</td>
                    <td className="p-4 text-primary font-bold">8+ years (since 2017)</td>
                    <td className="p-4">Varies by location</td>
                    <td className="p-4">2-3 years</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Subscription Required</td>
                    <td className="p-4 text-green-600 font-bold">✗ No - Order weekly</td>
                    <td className="p-4">✓ Yes for best pricing</td>
                    <td className="p-4">~ Optional</td>
                  </tr>
                  <tr className="border-b bg-muted/50">
                    <td className="p-4 font-semibold">Free Local Delivery</td>
                    <td className="p-4 text-green-600 font-bold">✓ Tri-Cities area</td>
                    <td className="p-4">✗ Pickup only</td>
                    <td className="p-4">~ Limited areas</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">Detailed Macro Tracking</td>
                    <td className="p-4 text-green-600 font-bold">✓ All meals</td>
                    <td className="p-4">✓ Yes</td>
                    <td className="p-4">~ Some meals</td>
                  </tr>
                  <tr className="border-b bg-muted/50">
                    <td className="p-4 font-semibold">Family-Size Options</td>
                    <td className="p-4 text-green-600 font-bold">✓ Serves 4-6</td>
                    <td className="p-4">✗ Individual only</td>
                    <td className="p-4">✗ Individual only</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Safe for Celiac</td>
                    <td className="p-4 text-green-600 font-bold">✓ 100% Safe</td>
                    <td className="p-4 text-red-600">✗ Cross-contamination risk</td>
                    <td className="p-4 text-yellow-600">~ Risk in shared facility</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Button variant="outline" asChild>
              <Link to="/vs-clean-eatz">Read Full Comparison</Link>
            </Button>
          </section>

          {/* Section 9 */}
          <section id="getting-started" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">How to Get Started with SmashMeals</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Browse This Week's Menu (Posted Monday)</h3>
                  <p className="text-muted-foreground mb-3">
                    New menu drops every Monday morning with 15-20 gluten-free meal options. View meals, nutrition facts, and prices online.
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                      View Current Menu
                    </a>
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Order by Thursday 11:59 PM</h3>
                  <p className="text-muted-foreground">
                    Place your order anytime before Thursday midnight. We close orders Friday to begin preparing your meals fresh. First-time customers use code <strong className="text-primary">WELCOME</strong> for 10% off.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Choose Pickup or Delivery</h3>
                  <p className="text-muted-foreground mb-2">
                    <strong>Pickup:</strong> Sunday-Monday at multiple Tri-Cities locations (CrossFit Arcane, Center of Strength, and more)
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Delivery:</strong> Free local delivery in Tri-Cities or FedEx 2-day shipping ($25) to major Southeast cities
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Enjoy Fresh, Safe Meals All Week</h3>
                  <p className="text-muted-foreground">
                    Meals stay fresh 5-6 days refrigerated. Simply heat in microwave for 2-3 minutes or oven for 15-20 minutes. Enjoy celiac-safe convenience without compromising taste or nutrition.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border-2 border-primary/20">
              <h3 className="text-2xl font-bold mb-3">Ready to Start?</h3>
              <p className="text-muted-foreground mb-4">
                Join 10,000+ satisfied customers who trust SmashMeals for safe, delicious, gluten-free meal prep.
              </p>
              <Button size="lg" asChild>
                <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                  Order This Week's Menu
                </a>
              </Button>
            </div>
          </section>

          {/* Section 10 - FAQ */}
          <section id="faq" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Is SmashMeals safe for celiac disease?</h3>
                  <p className="text-sm text-muted-foreground">
                    Absolutely. We operate a 100% dedicated gluten-free facility with zero gluten-containing ingredients on premises. This eliminates cross-contamination risk entirely, making every meal completely safe for those with celiac disease or severe gluten sensitivity.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">How does gluten-free meal prep compare to cooking at home?</h3>
                  <p className="text-sm text-muted-foreground">
                    On average, customers save 10-15 hours weekly on meal planning, grocery shopping, cooking, and cleanup. Cost-wise, meals average $9-12 per serving - comparable to groceries but without the time investment. Plus, you avoid food waste from unused ingredients.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Can I customize meals for my macros?</h3>
                  <p className="text-sm text-muted-foreground">
                    While we don't offer fully custom meals, we provide wide variety weekly with different protein levels (25g-50g), carb options (rice vs cauliflower rice), and dietary patterns (keto, high-protein, balanced). Most athletes find options that fit their macros perfectly.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">What's the difference between your individual meals and family meals?</h3>
                  <p className="text-sm text-muted-foreground">
                    Individual meals ($8-12) serve 1 person and are perfect for meal prep, work lunches, or solo dining. Family freezer meals ($40-55) serve 4-6 people and are ideal for family dinners, meal prepping for couples, or those who eat larger portions. Family meals arrive frozen for extended storage.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Do you deliver to my area?</h3>
                  <p className="text-sm text-muted-foreground">
                    Free local delivery covers 25+ Tri-Cities locations. We also offer FedEx 2-day shipping to Knoxville, Chattanooga, Nashville, Charlotte, Atlanta, Asheville, and throughout the Southeast. Check our <Link to="/delivery-info" className="text-primary hover:underline">delivery info page</Link> for your specific area.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <section className="my-16 text-center">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 via-accent/10 to-background border-2">
              <CardContent className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Ready to Experience the SmashMeals Difference?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Join thousands of Tri-Cities residents who trust SmashMeals for safe, delicious, gluten-free meal prep. No subscription required. Order week-to-week based on your needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                      Order Now
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/how-it-works">How It Works</Link>
                  </Button>
                </div>
                <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span>4.9/5 Rating</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span>10,000+ Customers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    <span>100% Gluten-Free</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Related Pages */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Related Resources</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <Utensils className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-bold mb-2">Browse Meals</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Explore our full menu of gluten-free options
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/menu">View Menu</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Truck className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-bold mb-2">Delivery Info</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Check if we deliver to your area
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/delivery-info">Delivery Areas</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Heart className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-bold mb-2">Our Story</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Learn about our mission and values
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/about">About Us</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </article>

      <Footer />
    </div>
  );
}