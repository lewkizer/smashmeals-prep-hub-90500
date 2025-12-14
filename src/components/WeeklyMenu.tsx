import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useFeaturedProducts } from "@/hooks/useProducts";

// Import ALL product images
import grilledSteakSalad from "@/assets/products/grilled-steak-salad.jpg";
import grilledChickenSalad from "@/assets/products/grilled-chicken-salad.jpg";
import baconEggCheeseCasserole from "@/assets/products/bacon-egg-cheese-casserole.jpg";

// NEW MENU ITEMS - Week of Dec 2024
import pulledPorkBreakfastHash from "@/assets/products/pulled-pork-breakfast-hash.jpg";
import mexicanChickenBowl from "@/assets/products/mexican-chicken-bowl.jpg";
import italianBeefMarinara from "@/assets/products/italian-beef-marinara.jpg";
import spinachArtichokeChicken from "@/assets/products/spinach-artichoke-chicken.jpg";
import firecrackerSalmonBowl from "@/assets/products/firecracker-salmon-bowl.jpg";
import smoresProteinPudding from "@/assets/products/smores-protein-pudding.jpg";
import blueberryPancakesPorkBacon from "@/assets/products/blueberry-pancakes-pork-bacon.jpg";
import blueberryPancakesTurkeyBacon from "@/assets/products/blueberry-pancakes-turkey-bacon.jpg";
import blueberryPancakesEggs from "@/assets/products/blueberry-pancakes-eggs.jpg";
import tomatoBasilSoup from "@/assets/products/tomato-basil-soup.jpg";
import pulledPorkCauliMac from "@/assets/products/pulled-pork-cauli-mac.jpg";
import mexicanBreakfastBake from "@/assets/products/mexican-breakfast-bake.jpg";
import sweetPotatoHashEggs from "@/assets/products/sweet-potato-hash-eggs.jpg";

// Bariatric line
import bariatricItalianBeef from "@/assets/products/bariatric-italian-beef.jpg";
import bariatricPulledPork from "@/assets/products/bariatric-pulled-pork.jpg";
import bariatricSalmon from "@/assets/products/bariatric-salmon.jpg";
import bariatricCinnamonSouffle from "@/assets/products/bariatric-cinnamon-souffle.jpg";
import bariatricChickenHibachi from "@/assets/products/bariatric-chicken-hibachi.jpg";
import bariatricCheesyEggWhite from "@/assets/products/bariatric-cheesy-egg-white.jpg";
import bariatricStrawberryCheesecake from "@/assets/products/bariatric-strawberry-cheesecake.jpg";

// Fallback name-based matching for products
const getProductImageByName = (productName: string): string => {
  const nameLower = productName.toLowerCase();
  
  // NEW MENU ITEMS - Priority matching
  if (nameLower.includes('pulled pork') && nameLower.includes('hash')) return pulledPorkBreakfastHash;
  if (nameLower.includes('mexican chicken bowl') || nameLower.includes('smashmeals mexican')) return mexicanChickenBowl;
  if (nameLower.includes('italian beef marinara')) return italianBeefMarinara;
  if (nameLower.includes('spinach artichoke')) return spinachArtichokeChicken;
  if (nameLower.includes('firecracker salmon')) return firecrackerSalmonBowl;
  if (nameLower.includes('smore') || nameLower.includes('s\'more')) return smoresProteinPudding;
  if (nameLower.includes('blueberry pancakes') && nameLower.includes('pork bacon')) return blueberryPancakesPorkBacon;
  if (nameLower.includes('blueberry pancakes') && nameLower.includes('turkey bacon')) return blueberryPancakesTurkeyBacon;
  if (nameLower.includes('blueberry pancakes') && nameLower.includes('scrambled')) return blueberryPancakesEggs;
  if (nameLower.includes('tomato basil') && nameLower.includes('soup')) return tomatoBasilSoup;
  if (nameLower.includes('pulled pork') && nameLower.includes('cauliflower mac')) return pulledPorkCauliMac;
  if (nameLower.includes('mexican breakfast bake')) return mexicanBreakfastBake;
  if (nameLower.includes('sweet potato hash')) return sweetPotatoHashEggs;
  
  // Bariatric items
  if (nameLower.includes('bariatric') && nameLower.includes('italian beef')) return bariatricItalianBeef;
  if (nameLower.includes('bariatric') && nameLower.includes('pulled pork')) return bariatricPulledPork;
  if (nameLower.includes('bariatric') && nameLower.includes('salmon')) return bariatricSalmon;
  if (nameLower.includes('bariatric') && nameLower.includes('cinnamon')) return bariatricCinnamonSouffle;
  if (nameLower.includes('bariatric') && nameLower.includes('hibachi')) return bariatricChickenHibachi;
  if (nameLower.includes('bariatric') && nameLower.includes('cheesy egg')) return bariatricCheesyEggWhite;
  if (nameLower.includes('bariatric') && nameLower.includes('strawberry')) return bariatricStrawberryCheesecake;
  
  // Salads
  if (nameLower.includes('grilled steak salad') || nameLower.includes('steak salad')) return grilledSteakSalad;
  if (nameLower.includes('grilled chicken salad') || nameLower.includes('chicken salad')) return grilledChickenSalad;
  
  return baconEggCheeseCasserole;
};

const WeeklyMenu = () => {
  const { data: products, isLoading, error } = useFeaturedProducts();

  if (isLoading) {
    return (
      <section id="menu" className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading delicious meals...</p>
        </div>
      </section>
    );
  }

  if (error || !products) {
    return (
      <section id="menu" className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">Unable to load meals. Please try again later.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="menu" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">This Week's Menu</h2>
          <p className="text-xl font-inter text-muted-foreground max-w-2xl mx-auto">
            Chef-crafted meals that fuel your week. <span className="font-caveat text-2xl text-primary">100% gluten-free</span>, always delicious.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-8">
          {products.map((product) => {
            // Use name-based matching for images
            const productImage = getProductImageByName(product.name);
            
            return (
              <Link key={product.id} to={`/product/${product.id}`}>
                <Card className="overflow-hidden group hover:shadow-[0_30px_80px_-20px_hsl(var(--primary)/0.15)] transition-all duration-300 cursor-pointer h-full border-0 bg-white/60 dark:bg-card/60 backdrop-blur-sm hover:scale-[1.02]">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={productImage}
                      alt={product.name}
                      width={400}
                      height={400}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold font-playfair text-xl mb-3 text-center">{product.name}</h3>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="lg">
              View Full Menu & Order
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WeeklyMenu;
