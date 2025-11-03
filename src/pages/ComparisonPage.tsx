import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const ComparisonPage = () => {
  const comparisons = [
    {
      feature: "100% Gluten-Free Kitchen",
      smashmeals: true,
      cleanEatz: false,
      description: "Dedicated gluten-free facility, safe for celiac"
    },
    {
      feature: "Years Serving Tri-Cities",
      smashmeals: "8+ Years (Since 2016)",
      cleanEatz: "Newer to Area",
      description: "Established local reputation and trust"
    },
    {
      feature: "Fresh Never Frozen (Pickup)",
      smashmeals: true,
      cleanEatz: false,
      description: "Meals prepared fresh for pickup, not pre-frozen"
    },
    {
      feature: "New Menu Every Week",
      smashmeals: true,
      cleanEatz: true,
      description: "Rotating weekly menu options"
    },
    {
      feature: "Complete Macro Information",
      smashmeals: true,
      cleanEatz: true,
      description: "Detailed nutritional info on every meal"
    },
    {
      feature: "No Subscription Required",
      smashmeals: true,
      cleanEatz: true,
      description: "Order only when you want"
    },
    {
      feature: "Local Family Business",
      smashmeals: true,
      cleanEatz: false,
      description: "Locally owned vs. corporate franchise"
    },
    {
      feature: "Trusted by ETSU Athletes",
      smashmeals: true,
      cleanEatz: false,
      description: "Preferred by local college athletes"
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>SmashMeals vs Clean Eatz | Best Gluten-Free Meal Prep Tri-Cities</title>
        <meta name="description" content="Compare SmashMeals to Clean Eatz. Discover why SmashMeals is the better choice for gluten-free meal prep in Tri-Cities. 100% gluten-free kitchen, 8+ years serving Johnson City, Kingsport & Bristol." />
        <meta name="keywords" content="smashmeals vs clean eatz, clean eatz alternative, gluten-free meal prep comparison, tri-cities meal prep, johnson city meal prep, best meal prep tri-cities" />
      </Helmet>

      <Header />
      
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair mb-6">
              SmashMeals vs Clean Eatz
            </h1>
            <p className="text-xl md:text-2xl font-inter text-muted-foreground mb-4">
              Comparing Tri-Cities' Original Gluten-Free Meal Prep
            </p>
            <p className="text-lg font-inter text-muted-foreground mb-8">
              Both offer healthy meal prep, but here's how we're different
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden border-0 shadow-elevated">
              {/* Header Row */}
              <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-r from-primary/10 to-accent/10 border-b-2 border-border">
                <div className="font-bold font-playfair text-lg">Feature</div>
                <div className="font-bold font-playfair text-lg text-center text-primary">SmashMeals</div>
                <div className="font-bold font-playfair text-lg text-center">Clean Eatz</div>
              </div>

              {/* Comparison Rows */}
              {comparisons.map((item, index) => (
                <div 
                  key={index} 
                  className={`grid grid-cols-3 gap-4 p-6 items-center ${index % 2 === 0 ? 'bg-background' : 'bg-secondary/30'} border-b border-border`}
                >
                  <div>
                    <div className="font-semibold font-inter mb-1">{item.feature}</div>
                    <div className="text-sm text-muted-foreground">{item.description}</div>
                  </div>
                  <div className="text-center">
                    {typeof item.smashmeals === 'boolean' ? (
                      item.smashmeals ? (
                        <Check className="w-8 h-8 text-primary mx-auto" />
                      ) : (
                        <X className="w-8 h-8 text-muted-foreground mx-auto" />
                      )
                    ) : (
                      <span className="font-semibold text-primary">{item.smashmeals}</span>
                    )}
                  </div>
                  <div className="text-center">
                    {typeof item.cleanEatz === 'boolean' ? (
                      item.cleanEatz ? (
                        <Check className="w-8 h-8 text-muted-foreground mx-auto" />
                      ) : (
                        <X className="w-8 h-8 text-muted-foreground mx-auto opacity-50" />
                      )
                    ) : (
                      <span className="font-semibold text-muted-foreground">{item.cleanEatz}</span>
                    )}
                  </div>
                </div>
              ))}
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 border-0 bg-white/80 dark:bg-card/80 backdrop-blur-sm shadow-elevated">
              <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6 text-center">
                Why Choose SmashMeals?
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-bold font-playfair mb-2">100% Gluten-Free From Day One</h3>
                  <p className="font-inter text-muted-foreground">
                    Unlike other meal prep companies that add gluten-free options later, we've been 100% gluten-free since 2016. Our entire kitchen is dedicated gluten-free, making it safe for those with celiac disease or severe gluten sensitivity.
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-bold font-playfair mb-2">Local Family Business</h3>
                  <p className="font-inter text-muted-foreground">
                    We're not a national franchise. We're a local family business that's been serving the Tri-Cities for over 8 years. When you order from us, you're supporting your local community and getting meals made by people who care.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-bold font-playfair mb-2">Fresh, Not Frozen (Pickup)</h3>
                  <p className="font-inter text-muted-foreground">
                    Our pickup meals are made fresh each week and never frozen. We prepare your meals specifically for your pickup time, ensuring maximum freshness and flavor. (Shipping orders are flash-frozen for safe delivery.)
                  </p>
                </div>

                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-bold font-playfair mb-2">Trusted by Local Athletes</h3>
                  <p className="font-inter text-muted-foreground">
                    ETSU athletes and fitness enthusiasts throughout the Tri-Cities trust SmashMeals for their nutrition. Our accurate macro counting and consistent quality make us the go-to choice for serious athletes.
                  </p>
                </div>
              </div>

              <div className="mt-10 text-center">
                <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="lg" className="text-lg px-12 py-7 h-auto font-inter shadow-elevated">
                    Try SmashMeals This Week
                  </Button>
                </a>
                <p className="text-sm font-inter text-muted-foreground mt-4">
                  Use code <span className="font-bold">WELCOME</span> for 10% off your first order
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ComparisonPage;
