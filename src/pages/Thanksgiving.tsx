import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Thanksgiving = () => {
  const thanksgivingItems = [
    { 
      name: "Green Bean Casserole", 
      category: "Sides",
      description: "Classic green beans baked with creamy mushroom sauce and crispy fried onions. A traditional Thanksgiving favorite ready to heat and serve."
    },
    { 
      name: "Smoked Bourbon Honey Ham", 
      category: "Mains",
      description: "Slow-smoked ham glazed with a sweet bourbon honey sauce. Fully cooked and ready to slice, perfect as your main course or alongside turkey."
    },
    { 
      name: "Broccoli Rice Casserole", 
      category: "Sides",
      description: "Fresh broccoli and fluffy rice baked in a creamy cheese sauce. Comfort food at its finest, ready to warm up and enjoy."
    },
    { 
      name: "Smoked Turkey Platter (feeds 6)", 
      category: "Mains",
      description: "Whole smoked turkey, perfectly seasoned and fully cooked. Feeds 6 people. Just warm and serve for an effortless main course."
    },
    { 
      name: "Smoked Turkey Platter (feeds 12)", 
      category: "Mains",
      description: "Whole smoked turkey, perfectly seasoned and fully cooked. Feeds 12 people. Just warm and serve for an effortless main course."
    },
    { 
      name: "Orange Bourbon Cranberry Sauce (quart)", 
      category: "Sides",
      description: "House-made cranberry sauce with hints of orange zest and bourbon. Sweet, tangy, and perfect for turkey. One quart size."
    },
    { 
      name: "Orange Bourbon Cranberry Sauce (pint)", 
      category: "Sides",
      description: "House-made cranberry sauce with hints of orange zest and bourbon. Sweet, tangy, and perfect for turkey. One pint size."
    },
    { 
      name: "Paleo Sweet Potato Casserole (feeds 6)", 
      category: "Sides",
      description: "Naturally sweet, mashed sweet potatoes with a pecan topping. Paleo-friendly, gluten-free, and dairy-free. Ready to bake."
    },
    { 
      name: "Sweet Potato Casserole (feeds 12)", 
      category: "Sides",
      description: "Creamy mashed sweet potatoes topped with buttery pecans. A holiday classic ready to pop in the oven and serve 12."
    },
    { 
      name: "Pumpkin Pie (gluten free/dairy free)", 
      category: "Desserts",
      description: "Classic pumpkin pie with warm spices in a gluten-free and dairy-free crust. The perfect end to your Thanksgiving feast."
    },
    { 
      name: "Chocolate Chip Cookie", 
      category: "Desserts",
      description: "Fresh-baked chocolate chip cookies. Soft, chewy, and loaded with chocolate chips. A sweet treat everyone will love."
    },
    { 
      name: "Bacon Deviled Eggs (12 Halves)", 
      category: "Appetizers",
      description: "Creamy deviled eggs topped with crispy bacon bits. The perfect appetizer to start your Thanksgiving meal. 12 halves per order."
    },
    { 
      name: "Thanksgiving Smash Charcuterie Special", 
      category: "Appetizers",
      description: "Delight your family and friends with a charcuterie appetizer box to snack on while waiting for the main meal. Each box includes a trio of cured meats, four artisanal cheeses along with dried fruits, mixed nuts, olives, pickles, and sweet treats. Gluten free crackers and pretzels packaged separately. The 10x10 bakery box is beautifully arranged and ready to serve straight from the fridge to the table. Serves 6 people as an appetizer. For a larger board customized to your event reach out directly to info@tasteandseecharcuterie.com."
    },
    { 
      name: "Baked Potato Salad", 
      category: "Sides",
      description: "Tender potatoes baked with cheese, bacon, and green onions. All the flavors of a loaded baked potato in a shareable side dish."
    },
    { 
      name: "Dirty Mashed Potatoes", 
      category: "Sides",
      description: "Creamy mashed potatoes loaded with bacon, cheese, and green onions. Rich, indulgent, and ready to warm up."
    },
    { 
      name: "White Cheddar Mac and Cheese", 
      category: "Sides",
      description: "Elbow pasta in a rich white cheddar cheese sauce. Creamy, comforting, and loved by kids and adults alike. Ready to bake."
    },
    { 
      name: "Pumpkin Cheese Cake Cup", 
      category: "Desserts",
      description: "Individual pumpkin cheesecake cups with a graham cracker crust. Creamy, spiced, and perfectly portioned for easy serving."
    },
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
                href="https://smashmeals.bottle.com/b/9814348" 
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
                  <TooltipProvider>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {items.map((item, index) => (
                        <Tooltip key={index}>
                          <TooltipTrigger asChild>
                            <Card 
                              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm border-2 cursor-help"
                            >
                              <CardContent className="p-6">
                                <h3 className="font-playfair text-xl font-semibold text-foreground text-center">
                                  {item.name}
                                </h3>
                              </CardContent>
                            </Card>
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            <p>{item.description}</p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>
                  </TooltipProvider>
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
                      href="https://smashmeals.bottle.com/b/9814348" 
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
