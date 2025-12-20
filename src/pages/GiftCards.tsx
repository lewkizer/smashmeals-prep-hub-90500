import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Gift, Heart, Clock, CreditCard } from "lucide-react";

const giftCards = [
  { value: 25, price: 22.50, savings: 2.50 },
  { value: 50, price: 45.00, savings: 5.00 },
  { value: 100, price: 90.00, savings: 10.00 },
  { value: 200, price: 180.00, savings: 20.00 },
];

const GiftCards = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Gift Cards | SmashMeals - Give the Gift of Healthy Meals</title>
        <meta 
          name="description" 
          content="Give the gift of healthy, gluten-free meals with SmashMeals gift cards. Save 10% on all gift card purchases. Perfect for busy families, fitness enthusiasts, and anyone who loves great food." 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://smashmeals.com/gift-cards" />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-6">
              <Gift className="w-5 h-5" />
              <span className="font-semibold">Save 10% on All Gift Cards</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-foreground mb-6">
              Give the Gift of <span className="text-accent">Healthy Meals</span>
            </h1>
            <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
              SmashCash gift cards are the perfect gift for busy families, fitness enthusiasts, 
              and anyone who appreciates delicious, gluten-free meals delivered fresh.
            </p>
          </div>
        </div>
      </section>

      {/* Gift Cards Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {giftCards.map((card) => (
              <div 
                key={card.value}
                className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Gift className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold font-playfair text-foreground mb-2">
                    ${card.value} SmashCash
                  </h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-accent">${card.price.toFixed(2)}</span>
                    <span className="text-muted-foreground line-through ml-2">${card.value.toFixed(2)}</span>
                  </div>
                  <p className="text-sm text-primary font-semibold mb-6">
                    You save ${card.savings.toFixed(2)}!
                  </p>
                  <a 
                    href="https://smashmeals.bottle.com/b/10429588" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-accent hover:bg-accent/90 text-white font-semibold">
                      Buy Gift Card
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center text-foreground mb-12">
            How SmashCash Gift Cards Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <CreditCard className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-playfair mb-2">1. Purchase</h3>
              <p className="text-muted-foreground">
                Choose your gift card amount and complete checkout. You'll receive a digital code instantly.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold font-playfair mb-2">2. Gift</h3>
              <p className="text-muted-foreground">
                Share the code with your loved one via email, text, or printed card. It never expires!
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-playfair mb-2">3. Enjoy</h3>
              <p className="text-muted-foreground">
                They redeem the code at checkout and enjoy fresh, healthy meals delivered to their door.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center text-foreground mb-12">
            Perfect For Every Occasion
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              "Birthdays",
              "Holidays",
              "New Parents",
              "Housewarmings",
              "Thank You Gifts",
              "Get Well Soon",
              "Teacher Appreciation",
              "Just Because",
            ].map((occasion) => (
              <div 
                key={occasion}
                className="bg-card border border-border rounded-lg p-4 text-center hover:border-accent transition-colors"
              >
                <span className="font-semibold text-foreground">{occasion}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-white mb-4">
            Ready to Give the Gift of Time?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Help someone you love skip the meal prep stress with delicious, ready-to-eat meals.
          </p>
          <a 
            href="https://smashmeals.bottle.com/b/10429588" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-6 h-auto">
              Buy Gift Cards Now
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GiftCards;
