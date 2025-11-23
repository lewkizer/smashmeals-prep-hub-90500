import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Users, TrendingUp, Award, CheckCircle2 } from "lucide-react";
import lewisKizer from "@/assets/lewis-kizer.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "100% Gluten-Free",
      description: "Our kitchen is completely gluten-free—a sanctuary for those with sensitivities",
    },
    {
      icon: Users,
      title: "Community First",
      description: "From 20 customers to over 10,000—we've grown together as a family",
    },
    {
      icon: TrendingUp,
      title: "Never Boring",
      description: "Rotating weekly menu means you'll never eat the same thing twice",
    },
    {
      icon: Award,
      title: "Quality Obsessed",
      description: "Chef-crafted meals that don't compromise on taste or nutrition",
    },
  ];

  const stats = [
    { number: "2017", label: "Founded" },
    { number: "20+", label: "Weekly Menu Items" },
    { number: "10,000+", label: "Happy Customers" },
    { number: "100%", label: "Gluten-Free" },
  ];

  const benefits = [
    "Save 5+ hours per week on meal prep",
    "Know exactly what's in your food",
    "Support local family-owned business",
    "No more 'what's for dinner?' stress",
    "Perfect macros for your goals",
    "Meals ready in minutes",
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-playfair mb-6">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl font-inter text-muted-foreground mb-8">
              Transforming the Tri-Cities one healthy meal at a time
            </p>
          </div>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              {/* Image */}
              <div className="order-2 md:order-1">
                <img 
                  src={lewisKizer} 
                  alt="Lewis Kizer, owner of SmashMeals, in the kitchen wearing a SmashMeals apron" 
                  className="rounded-2xl shadow-elevated w-full h-auto object-cover"
                />
              </div>
              
              {/* Story Card */}
              <div className="order-1 md:order-2">
                <Card className="p-8 md:p-10 border-0 bg-white/80 dark:bg-card/80 backdrop-blur-sm shadow-elevated">
                  <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
                    Welcome to SmashMeals
                  </h2>
                  <div className="space-y-6 font-inter text-lg leading-relaxed text-muted-foreground">
                    <p>
                      Our story began in <span className="font-bold text-foreground">2017</span> when we identified a gap in the market for convenient, gluten-free meals that didn't compromise on taste or variety. Fast forward to 2024, and we've entered a new era for Smash Meals under the leadership of <span className="font-bold text-primary">Lewis Kizer</span>.
                    </p>
                    <p>
                      We proudly serve the Tri-Cities by providing healthy, convenient meals that give our customers back their most precious resource—<span className="font-bold text-foreground">time</span>.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
            
            {/* Mission and Growth */}
            <Card className="p-8 md:p-12 border-0 bg-white/80 dark:bg-card/80 backdrop-blur-sm shadow-elevated">
              <div className="space-y-6 font-inter text-lg leading-relaxed text-muted-foreground">
                <h3 className="text-2xl font-bold font-playfair text-foreground pt-4">
                  Our Mission
                </h3>
                <p>
                  At Smash Meals, we're on a mission to transform the meal prep industry. Our kitchen is more than just gluten-free—it's a <span className="font-bold text-foreground">sanctuary</span> where every meal is crafted with care, ensuring safety and satisfaction for those with gluten sensitivities.
                </p>
                <p>
                  With a rotating weekly menu, you'll never face the monotony of mealtime again. We believe variety is the spice of life and the key to keeping your taste buds tantalized and your body nourished.
                </p>
                <h3 className="text-2xl font-bold font-playfair text-foreground pt-4">
                  Our Growth
                </h3>
                <p>
                  What started with just <span className="font-bold text-primary">20 customers</span> in our first week has blossomed into a thriving community of over <span className="font-bold text-primary">10,000 customers</span>. Every step of the way, we've listened to your feedback and refined our offerings, all while staying committed to excellence.
                </p>
                <p>
                  Smash Meals is more than a meal prep service—it's a <span className="font-bold text-foreground">family</span> that continues to grow, adapt, and serve.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-center mb-16">
              By The Numbers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card 
                  key={index} 
                  className="p-8 text-center border-0 bg-white/80 dark:bg-card/80 backdrop-blur-sm shadow-card hover:shadow-elevated transition-all hover:scale-105"
                >
                  <div className="text-4xl md:text-5xl font-bold font-playfair text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base font-inter text-muted-foreground">
                    {stat.label}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-center mb-16">
              What We Stand For
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card 
                  key={index} 
                  className="p-8 border-0 bg-white/60 dark:bg-card/60 backdrop-blur-sm shadow-card hover:shadow-elevated transition-all group"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center flex-shrink-0 shadow-card group-hover:scale-110 transition-transform">
                      <value.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold font-playfair mb-3">{value.title}</h3>
                      <p className="text-muted-foreground font-inter leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-center mb-16">
              Why Customers Choose Us
            </h2>
            <Card className="p-8 md:p-12 border-0 bg-white/80 dark:bg-card/80 backdrop-blur-sm shadow-elevated">
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="font-inter text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Join The SmashMeals Family
            </h3>
            <p className="text-xl font-inter text-muted-foreground mb-8">
              Experience the difference that quality, care, and community can make
            </p>
            <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="text-lg px-12 py-7 h-auto font-inter shadow-elevated">
                Order Your First Week
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
