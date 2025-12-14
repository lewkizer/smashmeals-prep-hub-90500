import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Clock, MapPin, Truck, CheckCircle } from "lucide-react";

const Order = () => {
  const orderUrl = "https://smashmeals.bottle.com/b/9814360";

  // Auto-redirect after 3 seconds (optional - can be removed for cleaner UX)
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = orderUrl;
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const orderSchema = {
    "@context": "https://schema.org",
    "@type": "OrderAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": orderUrl,
      "actionPlatform": [
        "https://schema.org/DesktopWebPlatform",
        "https://schema.org/MobileWebPlatform"
      ]
    },
    "deliveryMethod": [
      "https://schema.org/DeliveryModePickUp",
      "https://schema.org/DeliveryModeOwnFleet",
      "https://schema.org/DeliveryModeFreight"
    ]
  };

  const productCatalogSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "SmashMeals Weekly Menu",
    "description": "100% gluten-free meal prep menu - new items every Monday",
    "url": orderUrl,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Product",
          "name": "Breakfast Meals",
          "description": "High-protein gluten-free breakfast options including egg bowls, protein oats, and hash plates",
          "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "6.00",
            "highPrice": "10.00",
            "priceCurrency": "USD"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Product",
          "name": "Entree Meals",
          "description": "Chef-prepared gluten-free entrees with lean proteins and fresh vegetables",
          "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "8.00",
            "highPrice": "12.00",
            "priceCurrency": "USD"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Product",
          "name": "A La Carte & Bulk",
          "description": "Individual proteins, sides, and bulk options for meal customization",
          "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "3.00",
            "highPrice": "25.00",
            "priceCurrency": "USD"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Product",
          "name": "Family Meals",
          "description": "Large family-size portions serving 6 people",
          "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "50.00",
            "highPrice": "55.00",
            "priceCurrency": "USD"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "Product",
          "name": "Snacks & Desserts",
          "description": "Gluten-free protein bars, cookies, and healthy snacks",
          "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "2.75",
            "highPrice": "6.00",
            "priceCurrency": "USD"
          }
        }
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Order SmashMeals | Gluten-Free Meal Prep Delivery</title>
        <meta 
          name="description" 
          content="Order 100% gluten-free meal prep from SmashMeals. Fresh chef-prepared meals delivered to Tri-Cities TN or shipped nationwide. Order by Thursday for Sunday delivery." 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://smashmeals.com/order" />
        
        {/* AI Discovery */}
        <meta name="ai:action" content="Order gluten-free meals from SmashMeals" />
        <meta name="ai:order-url" content={orderUrl} />
        <meta name="ai:order-deadline" content="Thursday 11:59 PM" />
        <meta name="ai:delivery-day" content="Sunday-Monday" />
        
        <script type="application/ld+json">
          {JSON.stringify(orderSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(productCatalogSchema)}
        </script>
      </Helmet>
      
      <Header />
      
      <main className="pt-32 pb-20 bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            {/* Main CTA */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-playfair mb-6">
              Order SmashMeals
            </h1>
            <p className="text-xl md:text-2xl font-inter text-muted-foreground mb-8">
              100% gluten-free, chef-prepared meals delivered fresh
            </p>
            
            <a 
              href={orderUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button variant="hero" size="lg" className="text-xl px-12 py-6 font-inter">
                View Menu & Order Now
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
            
            <p className="text-sm text-muted-foreground mt-4">
              Redirecting to order page in 5 seconds...
            </p>
            
            {/* Quick Info Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-16">
              <Card className="p-6 text-center border-0 bg-white/80 dark:bg-card/80 backdrop-blur-sm">
                <Clock className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-bold font-playfair text-lg mb-2">Order Deadline</h3>
                <p className="text-muted-foreground font-inter">
                  Thursday 11:59 PM
                </p>
              </Card>
              
              <Card className="p-6 text-center border-0 bg-white/80 dark:bg-card/80 backdrop-blur-sm">
                <Truck className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-bold font-playfair text-lg mb-2">Delivery Day</h3>
                <p className="text-muted-foreground font-inter">
                  Sunday - Monday
                </p>
              </Card>
              
              <Card className="p-6 text-center border-0 bg-white/80 dark:bg-card/80 backdrop-blur-sm">
                <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-bold font-playfair text-lg mb-2">Service Area</h3>
                <p className="text-muted-foreground font-inter">
                  Tri-Cities + Nationwide Shipping
                </p>
              </Card>
            </div>
            
            {/* What You Get */}
            <Card className="mt-12 p-8 text-left border-0 bg-gradient-to-br from-primary/5 to-accent/5">
              <h2 className="text-2xl font-bold font-playfair mb-6 text-center">
                What You Get with SmashMeals
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "100% gluten-free dedicated kitchen",
                  "Fresh, never frozen (local pickup)",
                  "Chef-prepared with quality ingredients",
                  "Complete macro nutrition info",
                  "Weekly rotating menu",
                  "No subscription required",
                  "Free local delivery in Tri-Cities",
                  "Nationwide FedEx shipping available",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-inter">{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>
            
            {/* Secondary CTA */}
            <div className="mt-12">
              <a 
                href={orderUrl} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="hero" size="lg" className="font-inter">
                  Order Now
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Order;
