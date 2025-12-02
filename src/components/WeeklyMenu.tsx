import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useFeaturedProducts } from "@/hooks/useProducts";

// Import product images - Weekly Menu Items
import santaFeBreakfastBowl from "@/assets/products/santa-fe-breakfast-bowl.jpg";
import sunDriedTomatoOmelet from "@/assets/products/sun-dried-tomato-omelet.jpg";
import bananaSmashPudding from "@/assets/products/banana-smash-pudding.jpg";
import berryOatmealBake from "@/assets/products/berry-oatmeal-bake.jpg";
import smokedChickenLeg from "@/assets/products/smoked-chicken-leg.jpg";
import shrimpEggRollBowl from "@/assets/products/shrimp-egg-roll-bowl.jpg";
import grilledSteakSalad from "@/assets/products/grilled-steak-salad.jpg";
import grilledChickenSalad from "@/assets/products/grilled-chicken-salad.jpg";
import sweetPotatoQuesadilla from "@/assets/products/sweet-potato-quesadilla.jpg";
import spicyPeanutNoodles from "@/assets/products/spicy-peanut-noodles.jpg";
import broccoliCheddarSoup from "@/assets/products/broccoli-cheddar-soup.jpg";
import eggRollBowlTurkey from "@/assets/products/egg-roll-bowl-turkey.jpg";
import honeyGlazedSalmon from "@/assets/products/honey-glazed-salmon.jpg";
import filetMignonAlacarte from "@/assets/products/filet-mignon-alacarte.jpg";
import smokedChickenWings from "@/assets/products/smoked-chicken-wings.jpg";

// Fallback images
import baconEggCheeseCasserole from "@/assets/products/bacon-egg-cheese-casserole.jpg";

// Map product names to imported assets (case-insensitive matching)
const getProductImage = (productName: string): string => {
  const nameLower = productName.toLowerCase();
  
  // Breakfast items
  if (nameLower.includes('santa fe breakfast')) return santaFeBreakfastBowl;
  if (nameLower.includes('sun dried tomato') || nameLower.includes('sundried tomato')) return sunDriedTomatoOmelet;
  if (nameLower.includes('banana smash')) return bananaSmashPudding;
  if (nameLower.includes('berry oatmeal')) return berryOatmealBake;
  
  // Entrees
  if (nameLower.includes('smoked chicken leg') || nameLower.includes('leg quarter')) return smokedChickenLeg;
  if (nameLower.includes('shrimp egg roll') || nameLower.includes('shrimp eggroll')) return shrimpEggRollBowl;
  if (nameLower.includes('grilled steak salad') || nameLower.includes('steak salad')) return grilledSteakSalad;
  if (nameLower.includes('grilled chicken salad') || nameLower.includes('chicken salad')) return grilledChickenSalad;
  if (nameLower.includes('sweet potato') && nameLower.includes('quesadilla')) return sweetPotatoQuesadilla;
  if (nameLower.includes('spicy peanut') || nameLower.includes('peanut noodles')) return spicyPeanutNoodles;
  if (nameLower.includes('broccoli cheddar') || nameLower.includes('cheddar soup')) return broccoliCheddarSoup;
  if (nameLower.includes('egg roll in a bowl') || nameLower.includes('turkey egg roll')) return eggRollBowlTurkey;
  if (nameLower.includes('salmon') && (nameLower.includes('honey') || nameLower.includes('glazed'))) return honeyGlazedSalmon;
  if (nameLower.includes('smoked chicken wings') || nameLower.includes('wings and drumsticks')) return smokedChickenWings;
  
  // A la carte
  if (nameLower.includes('filet mignon')) return filetMignonAlacarte;
  
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
            // Use the image_url from storage if available, otherwise match by product name
            const productImage = product.image_url?.startsWith('http') 
              ? product.image_url 
              : getProductImage(product.name);
            return (
              <Link key={product.id} to={`/product/${product.id}`}>
                <Card className="overflow-hidden group hover:shadow-[0_30px_80px_-20px_hsl(var(--primary)/0.15)] transition-all duration-300 cursor-pointer h-full border-0 bg-white/60 dark:bg-card/60 backdrop-blur-sm hover:scale-[1.02]">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={productImage}
                      alt={product.name}
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
