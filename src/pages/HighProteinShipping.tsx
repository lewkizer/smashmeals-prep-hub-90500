import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import InternalLinks from "@/components/InternalLinks";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Truck, Package, Snowflake, Clock, Award, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const HighProteinShipping = () => {
  const internalLinks = [
    {
      title: "Charlotte Delivery",
      description: "FedEx 2-day shipping to all Charlotte neighborhoods. Free on orders $130+.",
      path: "/charlotte"
    },
    {
      title: "Asheville Delivery",
      description: "Fresh meal delivery to all Asheville zip codes with insulated packaging.",
      path: "/asheville"
    },
    {
      title: "Nashville Delivery",
      description: "Ship to Music City! High-protein gluten-free meals delivered to Nashville.",
      path: "/nashville"
    },
    {
      title: "Athletes & Bodybuilders",
      description: "Trusted by ETSU athletes. Hit your protein goals with 30-45g per meal.",
      path: "/athletes"
    },
    {
      title: "GLP-1 Meal Prep",
      description: "High-protein meals perfect for Ozempic, Wegovy, Mounjaro users.",
      path: "/glp1"
    },
    {
      title: "Bariatric Meal Prep",
      description: "Protein-dense, portion-controlled meals for post-surgery nutrition.",
      path: "/bariatric"
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do you ship gluten-free meals nationwide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use FedEx 2-day shipping with insulated packaging and ice packs to ensure your meals arrive fresh and safe. We ship to 98+ cities across the Southeast and beyond."
        }
      },
      {
        "@type": "Question",
        "name": "Are your high-protein meals really gluten-free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Every meal is prepared in our dedicated 100% gluten-free kitchen with zero cross-contamination risk. Safe for celiac disease and gluten sensitivity."
        }
      },
      {
        "@type": "Question",
        "name": "How much protein is in each meal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our meals contain 30-45g of protein per serving, perfect for muscle building, weight loss, and satiety. All macros are labeled on every meal."
        }
      },
      {
        "@type": "Question",
        "name": "How long do shipped meals last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our meals stay fresh for 5-7 days refrigerated or up to 6 months frozen. This is longer than most competitors thanks to our superior packaging and preparation methods."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer free shipping?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We offer free shipping on orders over $130. For smaller orders, shipping is calculated based on your location."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "High-Protein Gluten-Free Meals Shipped Nationwide",
    "description": "Get chef-prepared, high-protein, gluten-free meals delivered anywhere in the US. 30-45g protein per meal, macro-counted, and shipped fresh with FedEx 2-day delivery.",
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
        <title>High-Protein Gluten-Free Meals Shipped Nationwide | SmashMeals</title>
        <meta name="description" content="Get 30-45g protein per meal, 100% gluten-free, shipped fresh to your door. FedEx 2-day delivery to 98+ cities. Macro-counted, chef-prepared, trusted since 2016." />
        <meta name="keywords" content="high protein gluten free meals shipped, gluten free meal delivery nationwide, macro counted meals shipping, high protein meal prep delivery, gluten free bodybuilding meals, shipped gluten free meals" />
        <link rel="canonical" href="https://smashmeals.com/high-protein-shipping" />
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
                <Truck className="w-6 h-6" />
                <span className="text-lg font-semibold">Shipped Fresh Nationwide</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                High-Protein Gluten-Free Meals<br />Delivered to Your Door
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                30-45g protein per meal. 100% gluten-free kitchen. Macro-counted perfection shipped fresh to 98+ cities across America.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="lg" className="text-lg">
                    View This Week's Menu
                  </Button>
                </a>
                <Link to="/service-areas">
                  <Button variant="outline" size="lg" className="text-lg">
                    Check Shipping Areas
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Ship with SmashMeals */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold font-playfair text-center mb-12">
              Why Ship High-Protein Meals from SmashMeals?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <Shield className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">100% Gluten-Free Guarantee</h3>
                <p className="text-muted-foreground">Dedicated gluten-free facility with zero cross-contamination risk.</p>
              </Card>

              <Card className="p-6 text-center">
                <Award className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">30-45g Protein Per Meal</h3>
                <p className="text-muted-foreground">Macro-counted for athletes, bodybuilders, and weight loss goals.</p>
              </Card>

              <Card className="p-6 text-center">
                <Truck className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">FedEx 2-Day Delivery</h3>
                <p className="text-muted-foreground">Fresh meals arrive cold and ready to enjoy. Free shipping over $130.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* The Complete Shipping Guide */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl prose prose-lg">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-8">The Complete Guide to High-Protein Gluten-Free Meal Shipping</h2>
            
            <h3 className="text-2xl font-bold mt-8 mb-4">Why High-Protein Gluten-Free Meals Are Hard to Find</h3>
            <p>
              If you've been searching for high-protein gluten-free meals that ship nationwide, you've probably noticed a problem: <strong>most meal delivery services either aren't truly gluten-free, or they're low in protein</strong>.
            </p>
            <p>
              Here's the challenge:
            </p>
            <ul>
              <li><strong>National brands like Factor75</strong> offer "gluten-free options," but share kitchens with gluten-containing foods (cross-contamination risk)</li>
              <li><strong>Gluten-free brands</strong> often focus on convenience over macros, resulting in meals with only 15-25g protein</li>
              <li><strong>High-protein brands</strong> rarely accommodate gluten-free diets beyond removing obvious bread or pasta</li>
            </ul>
            <p>
              SmashMeals solves this problem by operating a <strong>dedicated 100% gluten-free kitchen</strong> while prioritizing protein content in every single meal. You get both safety and performance nutrition.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">How We Ship Fresh, High-Protein Meals Nationwide</h3>
            <p>
              Shipping fresh, perishable meals across the country requires precision. Here's exactly how SmashMeals ensures your meals arrive fresh, cold, and delicious:
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3">Step 1: Order by Thursday</h4>
            <p>
              Browse our weekly rotating menu of high-protein, gluten-free meals online. Order by <strong>Thursday at 11:59 PM</strong> for delivery the following Monday.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3">Step 2: Fresh Preparation Over the Weekend</h4>
            <p>
              Our chefs prepare your meals fresh in our dedicated gluten-free kitchen in Kingsport, Tennessee. Every ingredient is sourced from trusted gluten-free suppliers, and every meal is macro-counted with precision.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3">Step 3: Professional Packaging</h4>
            <p>
              Your meals are packed in insulated boxes with commercial-grade ice packs designed to keep everything cold for 48+ hours. We use the same packaging standards as medical supply companies—because your food deserves that level of care.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3">Step 4: FedEx 2-Day Shipping</h4>
            <p>
              Your order ships Monday via <strong>FedEx 2-Day Ground</strong>, arriving Tuesday or Wednesday depending on your location. We ship to <strong>98+ cities</strong> across the Southeast and beyond, including:
            </p>
            <ul>
              <li>Tennessee (Kingsport, Nashville, Knoxville, Chattanooga, Memphis, and more)</li>
              <li>North Carolina (Charlotte, Raleigh, Durham, Asheville, Greensboro, Winston-Salem)</li>
              <li>Virginia (Richmond, Roanoke, Charlottesville, Blacksburg, Lynchburg)</li>
              <li>Kentucky (Louisville, Lexington, Bowling Green, Paducah, Frankfort)</li>
              <li>Georgia (Atlanta, Augusta, Columbus)</li>
              <li>South Carolina (Charleston, Columbia, Spartanburg, Rock Hill, Myrtle Beach)</li>
              <li>West Virginia (Charleston, Huntington)</li>
              <li>Alabama (Huntsville)</li>
              <li>Washington DC and surrounding areas</li>
            </ul>
            <p>
              Check our <Link to="/service-areas" className="text-primary hover:underline">service areas page</Link> for the complete list of cities.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3">Step 5: Arrival and Storage</h4>
            <p>
              When your meals arrive, immediately refrigerate them. They'll stay fresh for <strong>5-7 days refrigerated</strong> or <strong>up to 6 months frozen</strong>. This superior shelf life means:
            </p>
            <ul>
              <li>Less food waste</li>
              <li>More flexibility in your eating schedule</li>
              <li>Ability to stock up for 2-3 weeks at once</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">What Makes Our High-Protein Meals Different?</h3>
            
            <h4 className="text-xl font-semibold mt-6 mb-3">Protein Content You Can Trust</h4>
            <p>
              Every SmashMeals entrée contains <strong>30-45 grams of protein</strong> from high-quality sources like:
            </p>
            <ul>
              <li>Grass-fed beef</li>
              <li>Free-range chicken breast</li>
              <li>Wild-caught salmon</li>
              <li>Turkey</li>
              <li>Eggs (in breakfast options)</li>
            </ul>
            <p>
              This level of protein is ideal for:
            </p>
            <ul>
              <li><strong>Muscle building and strength training</strong></li>
              <li><strong>Weight loss</strong> (protein keeps you full longer and preserves lean muscle)</li>
              <li><strong>Athletic performance and recovery</strong></li>
              <li><strong>Bariatric surgery patients</strong> who need maximum nutrition in small portions</li>
              <li><strong>GLP-1 users</strong> managing appetite suppression</li>
            </ul>

            <h4 className="text-xl font-semibold mt-6 mb-3">Macro Counting Made Simple</h4>
            <p>
              Every meal comes with a label showing:
            </p>
            <ul>
              <li>Total calories</li>
              <li>Protein (grams)</li>
              <li>Carbohydrates (grams)</li>
              <li>Fats (grams)</li>
              <li>Fiber (grams)</li>
            </ul>
            <p>
              No guesswork. No scanning barcodes. Just grab a meal, heat it up, and log your macros with confidence.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3">100% Gluten-Free Kitchen</h4>
            <p>
              We don't just offer "gluten-free options"—<strong>our entire facility is 100% gluten-free</strong>. This means:
            </p>
            <ul>
              <li>Zero risk of cross-contamination</li>
              <li>Safe for celiac disease</li>
              <li>All ingredients sourced from trusted gluten-free suppliers</li>
              <li>8+ years of safe production with zero incidents</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">Who Benefits from Shipped High-Protein Gluten-Free Meals?</h3>
            
            <h4 className="text-xl font-semibold mt-6 mb-3">Athletes and Bodybuilders</h4>
            <p>
              Hitting your protein target of 150-200g per day is challenging when you're gluten-free. Our meals provide 30-45g per serving, making it easy to stay on track without hours of meal prep.
            </p>
            <p>
              SmashMeals is trusted by <strong>ETSU Division I athletes</strong>—if it works for them, it'll work for you.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3">Weight Loss and Fat Loss Goals</h4>
            <p>
              High protein intake is proven to:
            </p>
            <ul>
              <li>Increase satiety (you feel full longer)</li>
              <li>Preserve lean muscle during calorie deficits</li>
              <li>Boost metabolism through increased thermic effect of food</li>
              <li>Reduce cravings and late-night snacking</li>
            </ul>
            <p>
              Our portion-controlled, macro-counted meals take the guesswork out of weight loss.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3">GLP-1 Users (Ozempic, Wegovy, Mounjaro, Zepbound)</h4>
            <p>
              If you're on a GLP-1 medication, you know the challenge: <strong>appetite suppression makes it hard to eat enough protein</strong>. Muscle loss is a real risk if you're not intentional about nutrition.
            </p>
            <p>
              Our meals solve this by packing maximum protein into smaller, manageable portions. Learn more on our dedicated <Link to="/glp1" className="text-primary hover:underline">GLP-1 meal prep page</Link>.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3">Bariatric Surgery Patients</h4>
            <p>
              Post-surgery, you need <strong>60-80g of protein daily</strong> in small portions. Our meals are perfectly sized and protein-dense, helping you meet your nutritional goals without overeating.
            </p>

            <h4 className="text-xl font-semibold mt-6 mb-3">Busy Professionals Who Value Health</h4>
            <p>
              You don't have time to meal prep every Sunday, but you refuse to sacrifice your health. SmashMeals gives you the nutrition of home-cooked meals with the convenience of delivery.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Pricing and Shipping Costs</h3>
            <p>
              SmashMeals pricing is transparent and competitive:
            </p>
            <ul>
              <li><strong>Meals:</strong> $10-14 per serving depending on the entrée</li>
              <li><strong>Shipping:</strong> FREE on orders $130+ (calculated at checkout for smaller orders)</li>
              <li><strong>No subscriptions required:</strong> Order as much or as little as you need each week</li>
            </ul>
            <p>
              Compared to competitors:
            </p>
            <ul>
              <li><strong>Factor75:</strong> $11-15/meal + $9 shipping (not 100% gluten-free kitchen)</li>
              <li><strong>Trifecta:</strong> $13-16/meal + shipping (gluten-free options only)</li>
              <li><strong>Freshly:</strong> $9-12/meal but only 15-25g protein</li>
            </ul>
            <p>
              SmashMeals offers the best combination of <strong>price, protein, and gluten-free safety</strong>.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Sample Weekly Menu (Rotating)</h3>
            <p>
              Here's what a typical week might look like:
            </p>
            <div className="bg-muted p-6 rounded-lg my-6">
              <ul className="space-y-2">
                <li><strong>Grilled Chicken with Sweet Potato & Broccoli</strong> - 42g protein, 380 cal</li>
                <li><strong>Beef Taco Bowl with Cilantro Lime Rice</strong> - 38g protein, 450 cal</li>
                <li><strong>Lemon Herb Salmon with Asparagus & Quinoa</strong> - 35g protein, 420 cal</li>
                <li><strong>Turkey Meatballs with Marinara & Zucchini Noodles</strong> - 40g protein, 360 cal</li>
                <li><strong>Shrimp & Cheese Grits</strong> - 32g protein, 400 cal</li>
                <li><strong>Steak Bites with Roasted Vegetables</strong> - 45g protein, 480 cal</li>
              </ul>
            </div>
            <p>
              Plus breakfast options, freezer meals, and seasonal specials. Check the <a href="https://smashmeals.bottle.com/b/9814360" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">current week's menu</a> for exact offerings.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">What Customers Are Saying About Shipping</h3>
            <div className="bg-muted p-6 rounded-lg my-8">
              <p className="italic">"I was skeptical about shipping meals, but they arrived perfectly cold. The packaging was impressive—better than Amazon Fresh. The meals lasted the full 7 days in my fridge with no quality loss."</p>
              <p className="font-semibold mt-2">— David R., Charlotte NC</p>
            </div>
            <div className="bg-muted p-6 rounded-lg my-8">
              <p className="italic">"As a competitive powerlifter with celiac disease, finding high-protein gluten-free meals was impossible until SmashMeals. 40g+ protein per meal, zero cross-contamination risk, and they ship to my door in Virginia. Game changer."</p>
              <p className="font-semibold mt-2">— Amanda L., Richmond VA</p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Order High-Protein Gluten-Free Meals Today</h3>
            <p>
              Stop settling for low-protein meals or risking cross-contamination with "gluten-free options." Get the real thing: <strong>30-45g protein, 100% gluten-free, macro-counted, and shipped fresh to your door</strong>.
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
          title="Related Meal Prep Services" 
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
              Get High-Protein Gluten-Free Meals Delivered
            </h2>
            <p className="text-xl mb-8">
              30-45g protein per meal. 100% gluten-free. Shipped fresh nationwide.
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

export default HighProteinShipping;
