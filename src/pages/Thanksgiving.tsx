import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Thanksgiving = () => {
  const thanksgivingItems = [
    { name: "Green Bean Casserole", category: "Sides" },
    { name: "Smoked Bourbon Honey Ham", category: "Mains" },
    { name: "Broccoli Rice Casserole", category: "Sides" },
    { name: "Smoked Turkey Platter (feeds 6)", category: "Mains" },
    { name: "Smoked Turkey Platter (feeds 12)", category: "Mains" },
    { name: "Orange Bourbon Cranberry Sauce (quart)", category: "Sides" },
    { name: "Orange Bourbon Cranberry Sauce (pint)", category: "Sides" },
    { name: "Paleo Sweet Potato Casserole (feeds 6)", category: "Sides" },
    { name: "Sweet Potato Casserole (feeds 12)", category: "Sides" },
    { name: "Pumpkin Pie (gluten free/dairy free)", category: "Desserts" },
    { name: "Chocolate Chip Cookie", category: "Desserts" },
    { name: "Bacon Deviled Eggs (12 Halves)", category: "Appetizers" },
    { name: "Baked Potato Salad", category: "Sides" },
    { name: "Dirty Mashed Potatoes", category: "Sides" },
    { name: "White Cheddar Mac and Cheese", category: "Sides" },
    { name: "Pumpkin Cheese Cake Cup", category: "Desserts" },
  ];

  const categories = {
    Mains: thanksgivingItems.filter(item => item.category === "Mains"),
    Sides: thanksgivingItems.filter(item => item.category === "Sides"),
    Appetizers: thanksgivingItems.filter(item => item.category === "Appetizers"),
    Desserts: thanksgivingItems.filter(item => item.category === "Desserts"),
  };

  const handleOrderClick = () => {
    (window as any).fbq?.('track', 'InitiateCheckout');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Thanksgiving Menu | SmashMeals - Order Your Holiday Feast</title>
        <meta 
          name="description" 
          content="Pre-order your Thanksgiving feast from SmashMeals. Featuring smoked turkey, bourbon honey ham, and all your favorite holiday sides and desserts." 
        />
        <meta 
          name="keywords" 
          content="thanksgiving meal prep, holiday catering, smoked turkey, thanksgiving sides, gluten free thanksgiving" 
        />
        <link rel="canonical" href="https://smashmeals.com/thanksgiving" />
      </Helmet>
      
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto max-w-6xl text-center">
            <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 text-foreground">
              Thanksgiving Menu
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-inter">
              Let us handle the cooking this Thanksgiving. Pre-order your holiday feast today!
            </p>
            <Button 
              size="lg" 
              className="font-semibold text-lg px-8"
              onClick={handleOrderClick}
              asChild
            >
              <a 
                href="https://smashmeals.hrpos.heartland.us/menu" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Order Now
              </a>
            </Button>
          </div>
        </section>

        {/* Menu Items by Category */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            {Object.entries(categories).map(([category, items]) => (
              items.length > 0 && (
                <div key={category} className="mb-16">
                  <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-8 text-foreground text-center">
                    {category}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item, index) => (
                      <Card 
                        key={index}
                        className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm border-2"
                      >
                        <CardContent className="p-6">
                          <h3 className="font-playfair text-xl font-semibold text-foreground text-center">
                            {item.name}
                          </h3>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )
            ))}

            {/* Order CTA */}
            <div className="text-center mt-16">
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
                <CardContent className="p-12">
                  <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-foreground">
                    Ready to Order?
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Don't stress about cooking this Thanksgiving. Let SmashMeals prepare a delicious, 
                    wholesome feast for you and your family.
                  </p>
                  <Button 
                    size="lg" 
                    className="font-semibold text-lg px-8"
                    onClick={handleOrderClick}
                    asChild
                  >
                    <a 
                      href="https://smashmeals.hrpos.heartland.us/menu" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Order Your Thanksgiving Feast
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Thanksgiving;
