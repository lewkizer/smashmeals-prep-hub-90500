import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Utensils, Timer, ChefHat, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const HeatAndEat = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Heat & Eat Instructions | SmashMeals</title>
        <meta name="description" content="Simple reheating instructions for your SmashMeals gluten-free meals. Ready in just 2.5 minutes." />
      </Helmet>
      
      <Header />
      
      <main className="pt-32 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3 mb-6">
              <Utensils className="w-5 h-5 text-primary" />
              <span className="text-primary font-bold">Simple & Quick</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-6">
              Heat & Eat Instructions
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your delicious gluten-free meals are ready in minutes. Just follow these simple steps!
            </p>
          </div>
        </section>

        {/* Main Instructions */}
        <section className="py-16 px-4 bg-background">
          <div className="container mx-auto max-w-4xl">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="p-8 text-center hover:shadow-elevated transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-3xl font-bold text-primary">1</div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Remove Lid</h3>
                <p className="text-muted-foreground text-lg">
                  Carefully remove the lid from your meal container
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-elevated transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-3xl font-bold text-primary">2</div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Lay Lid Back On Top</h3>
                <p className="text-muted-foreground text-lg">
                  Place the lid loosely back on top of the container (don't seal it)
                </p>
              </Card>

              <Card className="p-8 text-center hover:shadow-elevated transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-3xl font-bold text-primary">3</div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Heat & Enjoy</h3>
                <p className="text-muted-foreground text-lg">
                  Hit "reheat" button or microwave for 2.5 minutes on medium power
                </p>
              </Card>
            </div>

            {/* Detailed Instructions Card */}
            <Card className="p-10 bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Timer className="w-6 h-6 text-primary-foreground" />
                </div>
                <h2 className="text-3xl font-bold font-playfair">Microwave Settings</h2>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Reheat Button (Recommended)</h3>
                    <p className="text-muted-foreground text-lg">
                      Simply press your microwave's "reheat" button for perfectly heated meals
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Manual Heating</h3>
                    <p className="text-muted-foreground text-lg">
                      Set your microwave to <span className="font-bold text-foreground">medium power</span> and heat for <span className="font-bold text-foreground">2.5 minutes</span>
                    </p>
                  </div>
                </div>

                <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mt-6">
                  <div className="flex items-start gap-4">
                    <ChefHat className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-accent">Pro Tip</h3>
                      <p className="text-muted-foreground text-lg">
                        Every microwave is different. Adjust heating time as needed for your specific microwave. Stir halfway through for even heating if desired.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Storage Tips */}
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3">Storage</h3>
                <p className="text-muted-foreground">
                  Keep meals refrigerated. They stay fresh all week long, so you can enjoy them at your convenience.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-3">Best By</h3>
                <p className="text-muted-foreground">
                  For optimal freshness and taste, consume within 7 days of pickup or delivery.
                </p>
              </Card>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground text-lg mb-6">
                Order your fresh, gluten-free meals today
              </p>
              <a 
                href="https://smashmeals.bottle.com/b/9814360" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => {
                  if ((window as any).fbq) (window as any).fbq('track', 'InitiateCheckout');
                }}
              >
                <Button size="lg" className="text-lg px-8 py-6">
                  Order This Week's Menu
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HeatAndEat;
