import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useFeaturedProducts } from "@/hooks/useProducts";

// Import product images
import baconEggCheeseCasserole from "@/assets/products/bacon-egg-cheese-casserole.jpg";
import blueberryPancakes from "@/assets/products/blueberry-pancakes.jpg";
import breakfastBurrito from "@/assets/products/breakfast-burrito.jpg";
import greekYogurtParfait from "@/assets/products/greek-yogurt-parfait.jpg";
import arrozConPollo from "@/assets/products/arroz-con-pollo.jpg";
import bakedSalmon from "@/assets/products/baked-salmon.jpg";
import bbqChickenMacCheese from "@/assets/products/bbq-chicken-mac-cheese.jpg";
import beefBrisketCauliflower from "@/assets/products/beef-brisket-cauliflower.jpg";
import smashRanchyPopcorn from "@/assets/products/smash-ranchy-popcorn.webp";
import smashSnackPack from "@/assets/products/smash-snack-pack.webp";
import smashBar from "@/assets/products/smash-bar.webp";
import smashProteinBar from "@/assets/products/smash-protein-bar.webp";
import smashMistakeBar from "@/assets/products/smash-mistake-bar.webp";

// Map image URLs to imported assets
const imageMap: Record<string, string> = {
  '/assets/products/bacon-egg-cheese-casserole.jpg': baconEggCheeseCasserole,
  '/assets/products/blueberry-pancakes.jpg': blueberryPancakes,
  '/assets/products/breakfast-burrito.jpg': breakfastBurrito,
  '/assets/products/greek-yogurt-parfait.jpg': greekYogurtParfait,
  '/assets/products/arroz-con-pollo.jpg': arrozConPollo,
  '/assets/products/baked-salmon.jpg': bakedSalmon,
  '/assets/products/bbq-chicken-mac-cheese.jpg': bbqChickenMacCheese,
  '/assets/products/beef-brisket-cauliflower.jpg': beefBrisketCauliflower,
  '/src/assets/products/smash-ranchy-popcorn.webp': smashRanchyPopcorn,
  '/src/assets/products/smash-snack-pack.webp': smashSnackPack,
  '/src/assets/products/smash-bar.webp': smashBar,
  '/src/assets/products/smash-protein-bar.webp': smashProteinBar,
  '/src/assets/products/smash-mistake-bar.webp': smashMistakeBar,
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
            // Use the image_url from storage if available, otherwise fall back to imageMap
            const productImage = product.image_url?.startsWith('http') 
              ? product.image_url 
              : imageMap[product.image_url || ''] || baconEggCheeseCasserole;
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
          <a href="https://smashmeals.bottle.com/b/9521039" target="_blank" rel="noopener noreferrer">
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
