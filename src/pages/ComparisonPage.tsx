import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, X, Award, Shield, TrendingUp, DollarSign } from "lucide-react";

const ComparisonPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why is SmashMeals better than Factor75?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SmashMeals operates a 100% gluten-free kitchen (Factor75 only offers gluten-free options in a shared facility), meals are made locally and delivered fresh within 24 hours (vs. 3-5 days shipping), and we have longer shelf life (5-7 days vs. 3-5 days). Plus, local support and no national shipping delays."
        }
      },
      {
        "@type": "Question",
        "name": "Is SmashMeals safer than Clean Eatz for celiac disease?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. SmashMeals has a dedicated 100% gluten-free kitchen with zero cross-contamination risk. Clean Eatz offers gluten-free options but operates in a shared kitchen with gluten-containing foods, creating cross-contamination concerns for celiac patients."
        }
      },
      {
        "@type": "Question",
        "name": "How does SmashMeals compare to Good Batch Mama?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SmashMeals has been serving customers for 8+ years (established track record), offers 30-45g protein per meal (vs. variable protein), is 100% gluten-free (Good Batch Mama is not), and provides both local delivery and nationwide shipping. We're also trusted by ETSU Division I athletes."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Why SmashMeals Beats Factor75, Clean Eatz, FitPlus & Others | Meal Prep Comparison</title>
        <meta name="description" content="Compare SmashMeals to Factor75, Clean Eatz, FitPlus Meals, and Good Batch Mama. Discover why our 100% gluten-free kitchen, local freshness, 8+ years experience, and ETSU partnership make us the #1 choice." />
        <meta name="keywords" content="smashmeals vs factor75, smashmeals vs clean eatz, meal prep comparison, best gluten free meal delivery, factor75 alternative, clean eatz alternative" />
        <link rel="canonical" href="https://smashmeals.com/comparison" />
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
                <Award className="w-6 h-6" />
                <span className="text-lg font-semibold">Honest Meal Prep Comparison</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Why SmashMeals Beats<br />Other Meal Prep Companies
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                An honest comparison of SmashMeals vs. Factor75, Clean Eatz, FitPlus Meals, Good Batch Mama, and other meal prep services.
              </p>
            </div>
          </div>
        </section>

        {/* Key Differentiators */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold font-playfair text-center mb-12">
              SmashMeals Competitive Advantages
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-6 text-center">
                <Shield className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">100% Gluten-Free Kitchen</h3>
                <p className="text-muted-foreground text-sm">Dedicated facility. Zero cross-contamination. Safe for celiac.</p>
              </Card>

              <Card className="p-6 text-center">
                <Award className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">8+ Years Experience</h3>
                <p className="text-muted-foreground text-sm">Serving Tri-Cities since 2016. Established trust and quality.</p>
              </Card>

              <Card className="p-6 text-center">
                <TrendingUp className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Superior Shelf Life</h3>
                <p className="text-muted-foreground text-sm">5-7 days refrigerated vs. competitors' 3-5 days.</p>
              </Card>

              <Card className="p-6 text-center">
                <DollarSign className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Local = Fresh & Fast</h3>
                <p className="text-muted-foreground text-sm">24-hour delivery in Tri-Cities. No 3-5 day shipping delays.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Detailed Comparisons */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              Head-to-Head Comparisons
            </h2>

            {/* SmashMeals vs Factor75 */}
            <Card className="p-8 mb-8">
              <h3 className="text-2xl font-bold font-playfair mb-6">SmashMeals vs. Factor75</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold">Feature</th>
                      <th className="text-center p-3 font-semibold text-primary">SmashMeals</th>
                      <th className="text-center p-3 font-semibold">Factor75</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3">100% Gluten-Free Kitchen</td>
                      <td className="text-center p-3"><Check className="w-6 h-6 text-primary mx-auto" /></td>
                      <td className="text-center p-3"><X className="w-6 h-6 text-muted-foreground mx-auto" /><span className="text-xs text-muted-foreground block">Options only</span></td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Delivery Time (Local)</td>
                      <td className="text-center p-3 text-primary font-semibold">24 hours</td>
                      <td className="text-center p-3 text-muted-foreground">3-5 days</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Shelf Life (Refrigerated)</td>
                      <td className="text-center p-3 text-primary font-semibold">5-7 days</td>
                      <td className="text-center p-3 text-muted-foreground">3-5 days</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Price Per Meal</td>
                      <td className="text-center p-3 text-primary font-semibold">$10-14</td>
                      <td className="text-center p-3 text-muted-foreground">$11-15 + shipping</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Local Support</td>
                      <td className="text-center p-3"><Check className="w-6 h-6 text-primary mx-auto" /></td>
                      <td className="text-center p-3"><X className="w-6 h-6 text-muted-foreground mx-auto" /></td>
                    </tr>
                    <tr>
                      <td className="p-3">Trusted by Division I Athletes</td>
                      <td className="text-center p-3"><Check className="w-6 h-6 text-primary mx-auto" /><span className="text-xs text-primary block">ETSU Official Partner</span></td>
                      <td className="text-center p-3 text-muted-foreground">N/A</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <p className="text-sm"><strong>Bottom Line:</strong> Factor75 offers convenience, but SmashMeals delivers superior gluten-free safety, fresher meals (no 3-5 day shipping), longer shelf life, and local accountability. For Tri-Cities residents, SmashMeals is the clear winner.</p>
              </div>
            </Card>

            {/* SmashMeals vs Clean Eatz */}
            <Card className="p-8 mb-8">
              <h3 className="text-2xl font-bold font-playfair mb-6">SmashMeals vs. Clean Eatz</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 font-semibold">Feature</th>
                      <th className="text-center p-3 font-semibold text-primary">SmashMeals</th>
                      <th className="text-center p-3 font-semibold">Clean Eatz</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3">100% Gluten-Free Kitchen</td>
                      <td className="text-center p-3"><Check className="w-6 h-6 text-primary mx-auto" /></td>
                      <td className="text-center p-3"><X className="w-6 h-6 text-muted-foreground mx-auto" /><span className="text-xs text-muted-foreground block">Shared facility</span></td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Safe for Celiac Disease</td>
                      <td className="text-center p-3"><Check className="w-6 h-6 text-primary mx-auto" /></td>
                      <td className="text-center p-3"><X className="w-6 h-6 text-muted-foreground mx-auto" /><span className="text-xs text-muted-foreground block">Cross-contamination risk</span></td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Years Serving Tri-Cities</td>
                      <td className="text-center p-3 text-primary font-semibold">8+ years (2016)</td>
                      <td className="text-center p-3 text-muted-foreground">Newer to area</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3">Business Model</td>
                      <td className="text-center p-3 text-primary font-semibold">Local Family Business</td>
                      <td className="text-center p-3 text-muted-foreground">Corporate Franchise</td>
                    </tr>
                    <tr>
                      <td className="p-3">Fresh vs. Frozen (Pickup)</td>
                      <td className="text-center p-3 text-primary font-semibold">Fresh, never frozen</td>
                      <td className="text-center p-3 text-muted-foreground">Pre-frozen</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <p className="text-sm"><strong>Bottom Line:</strong> Clean Eatz offers healthy meals, but for gluten-free customers—especially those with celiac disease—SmashMeals is the only safe choice. Our dedicated 100% gluten-free kitchen eliminates cross-contamination risk entirely.</p>
              </div>
            </Card>

            {/* SmashMeals vs Others */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold font-playfair mb-6">SmashMeals vs. FitPlus, Good Batch Mama & Others</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-bold mb-2">vs. FitPlus Meals</h4>
                  <p className="text-sm text-muted-foreground"><strong>Advantage SmashMeals:</strong> 100% gluten-free (FitPlus is not), longer shelf life (5-7 days vs. 4-5 days), established Tri-Cities presence, trusted by ETSU athletes.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-bold mb-2">vs. Good Batch Mama</h4>
                  <p className="text-sm text-muted-foreground"><strong>Advantage SmashMeals:</strong> Dedicated 100% gluten-free kitchen (Good Batch Mama is not gluten-free), higher protein content (30-45g vs. variable), 8+ years established business, macro-counted meals, nationwide shipping available.</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-bold mb-2">vs. Trifecta, Freshly, Other Nationals</h4>
                  <p className="text-sm text-muted-foreground"><strong>Advantage SmashMeals:</strong> Made locally in Tennessee (not shipped from far away), fresher meals, faster delivery in Tri-Cities, local customer support, 100% gluten-free (not just options), comparable or better pricing.</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Why SmashMeals Wins */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl prose prose-lg">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-8 text-center">The SmashMeals Difference</h2>
            
            <h3 className="text-2xl font-bold mt-8 mb-4">1. True Gluten-Free Safety</h3>
            <p>
              Most meal prep companies offer "gluten-free options" in kitchens that also handle gluten-containing foods. This creates <strong>cross-contamination risk</strong> for people with celiac disease or severe gluten sensitivity.
            </p>
            <p>
              SmashMeals operates a <strong>dedicated 100% gluten-free facility</strong>. Every ingredient, every surface, every piece of equipment is gluten-free. We've served customers safely for <strong>8+ years with zero cross-contamination incidents</strong>.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">2. Local = Fresher & Faster</h3>
            <p>
              National brands like Factor75 and Trifecta ship meals from centralized facilities, meaning:
            </p>
            <ul>
              <li>3-5 days in transit before arrival</li>
              <li>Shorter shelf life by the time you receive them</li>
              <li>Higher shipping costs</li>
              <li>No local accountability or support</li>
            </ul>
            <p>
              SmashMeals prepares meals <strong>locally in Kingsport, Tennessee</strong> and delivers within <strong>24 hours</strong> in the Tri-Cities. Your meals are fresher, last longer, and cost less to deliver.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">3. Superior Shelf Life</h3>
            <p>
              SmashMeals: <strong>5-7 days refrigerated, 6 months frozen</strong><br />
              Factor75: 3-5 days refrigerated<br />
              Freshly: 3-5 days refrigerated<br />
              Clean Eatz: 4-6 days refrigerated
            </p>
            <p>
              Our superior shelf life means less food waste, more flexibility in your eating schedule, and the ability to stock up for 2-3 weeks at once.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">4. Trusted by Elite Athletes</h3>
            <p>
              SmashMeals is the <strong>official meal prep partner for ETSU Division I athletics</strong>, serving:
            </p>
            <ul>
              <li>ETSU Football Team</li>
              <li>ETSU Men's Basketball</li>
              <li>ETSU Women's Basketball</li>
            </ul>
            <p>
              When college coaches and trainers trust SmashMeals to fuel their athletes' performance, you know we're delivering elite-level nutrition. Factor75, Clean Eatz, and others don't have this level of athletic endorsement.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">5. Local Family Business vs. Corporate Franchise</h3>
            <p>
              SmashMeals is a <strong>family-owned local business</strong> that's been serving the Tri-Cities for over 8 years. When you order from us:
            </p>
            <ul>
              <li>You support your local community</li>
              <li>You get personalized customer service</li>
              <li>You have local accountability (we're not hiding behind a 1-800 number)</li>
              <li>Your money stays in the Tri-Cities economy</li>
            </ul>
            <p>
              Factor75, Trifecta, and Freshly are national corporations. Clean Eatz and FitPlus are corporate franchises. SmashMeals is <strong>your neighbors</strong>.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">6. Consistent Pricing, No Gimmicks</h3>
            <p>
              <strong>SmashMeals:</strong> $10-14 per meal, free local delivery $50+, free shipping nationwide $130+<br />
              <strong>Factor75:</strong> $11-15 per meal + $9-15 shipping<br />
              <strong>Trifecta:</strong> $13-16 per meal + shipping<br />
              <strong>Clean Eatz:</strong> $9-13 per meal (but not 100% gluten-free safe)
            </p>
            <p>
              Our pricing is transparent and competitive. No hidden fees, no forced subscriptions, no gimmicks.
            </p>

            <div className="text-center my-8 not-prose">
              <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg" className="text-lg">
                  Try SmashMeals This Week
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 bg-muted/30">
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
              Ready to Experience the SmashMeals Difference?
            </h2>
            <p className="text-xl mb-8">
              100% gluten-free. Locally made. Trusted by ETSU athletes. 8+ years serving Tri-Cities.
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

export default ComparisonPage;
