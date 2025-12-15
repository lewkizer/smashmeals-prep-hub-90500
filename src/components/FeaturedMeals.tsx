import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Flame, Heart, Sparkles } from "lucide-react";
import { useFeaturedProducts } from "@/hooks/useProducts";

// Import product images
import pulledPorkBreakfastHash from "@/assets/products/pulled-pork-breakfast-hash.jpg";
import mexicanChickenBowl from "@/assets/products/mexican-chicken-bowl.jpg";
import spinachArtichokeChicken from "@/assets/products/spinach-artichoke-chicken.jpg";
import firecrackerSalmon from "@/assets/products/firecracker-salmon-bowl.jpg";
import italianBeefMarinara from "@/assets/products/italian-beef-marinara.jpg";
import grilledSteakSalad from "@/assets/products/grilled-steak-salad.jpg";
import grilledChickenSalad from "@/assets/products/grilled-chicken-salad.jpg";
import sweetPotatoHash from "@/assets/products/sweet-potato-hash-eggs.jpg";
import mexicanBreakfastBake from "@/assets/products/mexican-breakfast-bake.jpg";
import blueberryPancakesPork from "@/assets/products/blueberry-pancakes-pork-bacon.jpg";
import blueberryPancakesTurkey from "@/assets/products/blueberry-pancakes-turkey-bacon.jpg";

// Image mapping for products
const productImages: Record<string, string> = {
  "pulled pork breakfast hash": pulledPorkBreakfastHash,
  "smashmeals mexican chicken bowl": mexicanChickenBowl,
  "spinach artichoke chicken bowl": spinachArtichokeChicken,
  "firecracker salmon and rice bowl": firecrackerSalmon,
  "italian beef marinara plate": italianBeefMarinara,
  "grilled steak salad": grilledSteakSalad,
  "grilled chicken salad": grilledChickenSalad,
  "sweet potato hash with fried eggs and chicken sausage": sweetPotatoHash,
  "mexican breakfast bake": mexicanBreakfastBake,
  "blueberry pancakes with pork bacon": blueberryPancakesPork,
  "blueberry pancakes with turkey bacon": blueberryPancakesTurkey,
};

const getProductImage = (name: string, imageUrl: string | null): string => {
  const normalizedName = name.toLowerCase().trim();
  if (productImages[normalizedName]) {
    return productImages[normalizedName];
  }
  if (imageUrl) {
    return imageUrl;
  }
  // Fallback to mexican chicken bowl
  return mexicanChickenBowl;
};

const generateSlug = (name: string): string => {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

const FeaturedMeals = () => {
  const { data: featuredProducts, isLoading } = useFeaturedProducts();

  // Filter out bariatric items and take only first 3 non-bariatric items
  const displayProducts = featuredProducts
    ?.filter(product => !product.name.toLowerCase().includes('bariatric'))
    .slice(0, 3) || [];

  const badges = [
    { badge: "Fan Favorite", icon: Heart, isNew: false },
    { badge: "NEW This Week", icon: Sparkles, isNew: true },
    { badge: "Best Seller", icon: Flame, isNew: false },
  ];

  if (isLoading) {
    return (
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-foreground mb-4">
              Featured This Week
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden animate-pulse">
                <div className="w-full h-64 bg-muted" />
                <div className="p-6">
                  <div className="h-6 bg-muted rounded mb-2" />
                  <div className="h-4 bg-muted rounded w-3/4" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-6 py-2 mb-4">
            <Sparkles className="w-5 h-5 text-accent" />
            <span className="text-sm font-semibold text-accent">New Items Just Added</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-foreground mb-4">
            Featured This Week
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Order by <span className="font-bold text-primary">Thursday at Midnight</span> for Sunday pickup
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {displayProducts.map((product, index) => {
            const badgeInfo = badges[index % badges.length];
            const Icon = badgeInfo.icon;
            const slug = generateSlug(product.name);
            const image = getProductImage(product.name, product.image_url);
            
            return (
              <Link key={product.id} to={`/meals/${slug}`}>
                <Card className="overflow-hidden hover:shadow-elevated transition-all duration-300 hover:scale-105 border-2 cursor-pointer">
                  <div className="relative">
                    <img
                      src={image}
                      alt={`${product.name} - Gluten-free meal prep in Tri-Cities TN`}
                      width={400}
                      height={256}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-64 object-cover"
                    />
                    <div className={`absolute top-4 left-4 ${badgeInfo.isNew ? 'bg-gradient-to-r from-accent to-primary' : 'bg-accent'} text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg animate-pulse`}>
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-semibold">{badgeInfo.badge}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-2xl font-bold font-playfair text-foreground flex-1">
                        {product.name}
                      </h3>
                      <span className="text-2xl font-bold text-primary ml-2">${Number(product.price).toFixed(2)}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">{product.description || 'Delicious gluten-free meal prepared fresh weekly.'}</p>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href="https://smashmeals.bottle.com/b/9814360"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if ((window as any).fbq) (window as any).fbq('track', 'InitiateCheckout');
            }}
          >
            <Button size="lg" className="text-lg px-8 py-6 h-auto hover:scale-105 transition-transform duration-300">
              View Full Menu & Order
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMeals;
