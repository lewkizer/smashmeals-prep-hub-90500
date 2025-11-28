import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Heart, Leaf, Award, Gift } from "lucide-react";

const CharitysChocolate = () => {
  const chocolateCollections = [
    {
      name: "Signature Bonbon Collection",
      description: "Hand-painted artisan bonbons with unique flavor combinations. Each piece takes 3 days to craft.",
      tags: ["Gluten-Free", "Small Batch", "Hand-Painted"]
    },
    {
      name: "Seasonal Collections",
      description: "Limited-edition chocolates featuring seasonal flavors and stunning artistic designs.",
      tags: ["Limited Edition", "Seasonal", "Gift-Ready"]
    },
    {
      name: "Custom Gift Boxes",
      description: "Perfect for corporate gifts, weddings, and special occasions. Beautifully packaged and personalized.",
      tags: ["Custom", "Corporate", "Events"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Charity's Chocolate | Gluten-Free Artisan Chocolates | SmashMeals Partner</title>
        <meta name="description" content="Hand-painted, gluten-free artisan chocolates by Charity Teague. Small-batch bonbons crafted with love in Martin, TN. Family partnership with SmashMeals." />
        <meta property="og:title" content="Charity's Chocolate | Gluten-Free Artisan Chocolates" />
        <meta property="og:description" content="Hand-painted, gluten-free artisan chocolates. Small-batch bonbons crafted with love. Family partnership with SmashMeals." />
        <link rel="canonical" href="https://www.smashmeals.com/charitys-chocolate" />
      </Helmet>
      
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-amber-900 via-amber-800 to-amber-950 text-white py-16 md:py-24">
          <div className="absolute inset-0 bg-[url('/assets/patterns/chocolate-pattern.svg')] opacity-5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
              <div>
                <Badge className="mb-4 bg-amber-600/50 text-amber-100 border-amber-500">
                  Family Partnership
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair mb-4">
                  Charity's Chocolate
                </h1>
                <p className="text-xl text-amber-100 mb-6">
                  Hand-painted artisan chocolates crafted with love in Martin, Tennessee. 
                  Each bonbon takes 3 days to create — small batch, gluten-free, and absolutely stunning.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <Badge variant="outline" className="border-amber-400 text-amber-100">
                    <Leaf className="w-3 h-3 mr-1" /> 100% Gluten-Free
                  </Badge>
                  <Badge variant="outline" className="border-amber-400 text-amber-100">
                    <Award className="w-3 h-3 mr-1" /> Small Batch
                  </Badge>
                  <Badge variant="outline" className="border-amber-400 text-amber-100">
                    <Heart className="w-3 h-3 mr-1" /> Family Owned
                  </Badge>
                </div>
                <Button 
                  size="lg" 
                  className="bg-white text-amber-900 hover:bg-amber-100"
                  onClick={() => window.open('https://www.charityteague.com', '_blank')}
                >
                  Shop Chocolates <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-600/30">
                  <img 
                    src="/assets/partners/lewis-charity-siblings.jpg" 
                    alt="Lewis Kizer and Charity Teague - siblings and business partners"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-amber-600 text-white px-4 py-2 rounded-lg shadow-lg">
                  <p className="text-sm font-semibold">Brother & Sister</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
                A Family Affair
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                When it comes to feeding people well, it runs in the family. Charity Teague — Lewis's sister — 
                has been crafting artisan chocolates that are as beautiful as they are delicious. Her small-batch, 
                gluten-free confections are the perfect complement to a SmashMeals order.
              </p>
              <p className="text-lg text-muted-foreground">
                Based in Martin, Tennessee, Charity's Chocolate specializes in hand-painted bonbons made with 
                thoughtfully sourced ingredients. Each piece is a work of art that takes three days to produce — 
                because good things take time.
              </p>
            </div>
          </div>
        </section>

        {/* Collections */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              Chocolate Collections
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {chocolateCollections.map((collection) => (
                <Card key={collection.name} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Gift className="h-10 w-10 text-amber-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{collection.name}</h3>
                    <p className="text-muted-foreground mb-4">{collection.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {collection.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-amber-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
              Complete Your Meal with Something Sweet
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Add Charity's gluten-free artisan chocolates to your SmashMeals order for the perfect finish. 
              Contact us to include chocolates with your next delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-amber-900 hover:bg-amber-100"
                onClick={() => window.open('https://www.charityteague.com', '_blank')}
              >
                Visit Charity's Website <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                onClick={() => window.open('https://www.facebook.com/charityteagueconfections', '_blank')}
              >
                Follow on Facebook <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CharitysChocolate;
