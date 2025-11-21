import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { HelpCircle, MessageCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      category: "Ordering & Pricing",
      questions: [
        {
          q: "When does the new menu come out?",
          a: "Our new menu is posted every Monday morning with fresh options for the week.",
        },
        {
          q: "When is the order deadline?",
          a: "All orders must be placed by Thursday at 11:59 PM. After that, we close orders to start preparing meals for the week.",
        },
        {
          q: "What forms of payment do you accept?",
          a: "We accept credit cards through our online ordering system. We also offer offline payment options including cash, check, PayPal, and Venmo.",
        },
        {
          q: "Can I cancel or modify my order?",
          a: "Yes! You can modify or cancel your order anytime before the Thursday midnight deadline.",
        },
        {
          q: "Do you offer meal plans or subscriptions?",
          a: "Yes! We offer weekly subscription plans at discounted rates. Contact us for details on subscription pricing.",
        },
        {
          q: "Do you have any promo codes or discounts?",
          a: "Yes! New customers can use code WELCOME for 10% off their first order. We also occasionally offer special promotions—sign up for our weekly menu emails to stay updated!",
        },
      ],
    },
    {
      category: "Pickup & Delivery",
      questions: [
        {
          q: "Where can I pick up my meals?",
          a: "We have multiple pickup locations throughout the Tri-Cities area on Sunday and Monday. Check our How It Works page for the complete schedule and locations.",
        },
        {
          q: "Do you deliver?",
          a: "Yes! We offer local home delivery in the Tri-Cities area for $12, plus shipping via FedEx 2-day delivery.",
        },
        {
          q: "How much does delivery cost?",
          a: "Local home delivery is $12. Shipping via FedEx is $25.",
        },
        {
          q: "Will my meals arrive fresh or frozen?",
          a: "Local pickup and home delivery meals arrive fresh and ready to refrigerate. Shipped meals arrive frozen with ice packs and insulation to ensure quality.",
        },
      ],
    },
    {
      category: "Meals & Ingredients",
      questions: [
        {
          q: "Are all your meals gluten-free?",
          a: "Yes! Our entire kitchen is 100% gluten-free. We use no gluten-containing ingredients, making it safe for those with celiac disease and gluten sensitivities.",
        },
        {
          q: "Do you accommodate other dietary restrictions?",
          a: "While all our meals are gluten-free, we offer various options each week including high-protein, low-carb, and some dairy-free choices. Contact us for specific dietary needs.",
        },
        {
          q: "How long do the meals stay fresh?",
          a: "Fresh meals (pickup/local delivery) should be consumed within 5-7 days when refrigerated. Frozen meals (shipped) last 3-6 months in the freezer.",
        },
        {
          q: "How do I heat the meals?",
          a: "Simply microwave for 2-3 minutes or heat in the oven at 350°F for 15-20 minutes. Frozen meals should be thawed overnight in the fridge first.",
        },
        {
          q: "Do meals come with nutritional information?",
          a: "Yes! Every meal includes complete nutritional information including calories, protein, carbs, and fat content.",
        },
      ],
    },
    {
      category: "About SmashMeals",
      questions: [
        {
          q: "Are you a franchise or local business?",
          a: "We're a locally-owned, family-run business based in Kingsport, TN. We're not a franchise—we're your neighbors!",
        },
        {
          q: "How did SmashMeals start?",
          a: "SmashMeals started in 2017 to fill the gap for convenient, gluten-free meal prep. Under Lewis Kizer's leadership since 2024, we've grown from 20 customers to over 10,000!",
        },
        {
          q: "Do you offer catering?",
          a: "Yes! We offer catering for events of all sizes with options like taco bars, BBQ, chili, and more. All catering is 100% gluten-free.",
        },
        {
          q: "Can I visit your kitchen?",
          a: "Our kitchen is located at 1917 Meadowview Parkway Suite 100 in Kingsport, TN. Sunday pickups are from 2-3 PM. For other visits, please call ahead at (423) 525-2489.",
        },
      ],
    },
  ];

  // Generate FAQ schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.flatMap(category => 
      category.questions.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    )
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>FAQ - Frequently Asked Questions | SmashMeals Tri-Cities</title>
        <meta 
          name="description" 
          content="Got questions about SmashMeals? Find answers about ordering, delivery, gluten-free meals, pricing, pickup locations, and more. 100% gluten-free meal prep in Tri-Cities TN." 
        />
        <meta 
          name="keywords" 
          content="SmashMeals FAQ, meal prep questions, gluten-free meal prep FAQ, Tri-Cities meal prep, delivery information, pickup locations, gluten-free questions, celiac safe meals, meal prep pricing" 
        />
        <link rel="canonical" href="https://smashmeals.com/faq" />
        
        {/* Open Graph */}
        <meta property="og:title" content="FAQ - Frequently Asked Questions | SmashMeals" />
        <meta property="og:description" content="Find answers to common questions about SmashMeals gluten-free meal prep, ordering, delivery, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smashmeals.com/faq" />
        
        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <HelpCircle className="w-20 h-20 text-primary mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-playfair mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl font-inter text-muted-foreground">
              Everything you need to know about SmashMeals
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-8">
                  {category.category}
                </h2>
                <Card className="border-0 bg-white/80 dark:bg-card/80 backdrop-blur-sm shadow-card overflow-hidden">
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem 
                        key={faqIndex} 
                        value={`item-${categoryIndex}-${faqIndex}`}
                        className="border-b border-border last:border-0"
                      >
                        <AccordionTrigger className="px-8 py-6 text-left hover:bg-primary/5 transition-colors">
                          <span className="font-bold font-playfair text-lg pr-4">
                            {faq.q}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="px-8 pb-6 pt-2">
                          <p className="text-muted-foreground font-inter leading-relaxed text-base">
                            {faq.a}
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 md:p-12 text-center border-0 bg-gradient-to-br from-primary/10 via-background to-accent/5 backdrop-blur-sm shadow-elevated">
              <MessageCircle className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
                Still Have Questions?
              </h2>
              <p className="text-xl font-inter text-muted-foreground mb-8">
                We're here to help! Reach out and we'll get back to you quickly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact">
                  <Button variant="hero" size="lg" className="font-inter">
                    Contact Us
                  </Button>
                </a>
                <a href="tel:4235252489">
                  <Button variant="outline" size="lg" className="font-inter">
                    Call: (423) 525-2489
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              Helpful Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center border-0 bg-white/60 dark:bg-card/60 backdrop-blur-sm shadow-card hover:shadow-elevated transition-all hover:scale-105">
                <h3 className="text-xl font-bold font-playfair mb-4">How It Works</h3>
                <p className="text-muted-foreground font-inter mb-6">
                  Learn about our weekly process and pickup schedule
                </p>
                <a href="/how-it-works">
                  <Button variant="outline" className="font-inter">
                    Learn More
                  </Button>
                </a>
              </Card>

              <Card className="p-8 text-center border-0 bg-white/60 dark:bg-card/60 backdrop-blur-sm shadow-card hover:shadow-elevated transition-all hover:scale-105">
                <h3 className="text-xl font-bold font-playfair mb-4">View Menu</h3>
                <p className="text-muted-foreground font-inter mb-6">
                  Check out this week's rotating menu options
                </p>
                <a href="https://smashmeals.bottle.com/b/9730175" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="font-inter">
                    Browse Menu
                  </Button>
                </a>
              </Card>

              <Card className="p-8 text-center border-0 bg-white/60 dark:bg-card/60 backdrop-blur-sm shadow-card hover:shadow-elevated transition-all hover:scale-105">
                <h3 className="text-xl font-bold font-playfair mb-4">About Us</h3>
                <p className="text-muted-foreground font-inter mb-6">
                  Learn about our story and mission
                </p>
                <a href="/about">
                  <Button variant="outline" className="font-inter">
                    Our Story
                  </Button>
                </a>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
