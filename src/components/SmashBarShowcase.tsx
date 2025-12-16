import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import smashBarReal from "@/assets/products/smash-bar-real.jpg";
import { Zap, Heart, Sparkles } from "lucide-react";

const SmashBarShowcase = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-6 py-2 mb-4">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-sm font-semibold text-accent">Premium Snack</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-foreground mb-4">
              Introducing Smash Bar
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The perfect on-the-go snack for your active lifestyle
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <Card className="overflow-hidden group hover:shadow-elevated transition-all duration-300 border-2">
              <img
                src={smashBarReal}
                alt="Smash Bar - Gluten-free protein snack"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </Card>

            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-playfair text-foreground mb-2">
                      High-Protein Energy
                    </h3>
                    <p className="text-muted-foreground">
                      Packed with protein to fuel your day and keep you satisfied between meals
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-playfair text-foreground mb-2">
                      100% Gluten-Free
                    </h3>
                    <p className="text-muted-foreground">
                      Made in our dedicated gluten-free kitchen with wholesome ingredients
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-playfair text-foreground mb-2">
                      Convenient & Delicious
                    </h3>
                    <p className="text-muted-foreground">
                      Perfect for pre-workout, post-workout, or anytime you need a nutritious snack
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href="https://smashmeals.bottle.com/b/9814360"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    if ((window as any).fbq) (window as any).fbq('track', 'AddToCart');
                  }}
                >
                  <Button size="lg" className="w-full md:w-auto text-lg px-8 py-6 h-auto hover:scale-105 transition-transform duration-300">
                    Order Smash Bars Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmashBarShowcase;
