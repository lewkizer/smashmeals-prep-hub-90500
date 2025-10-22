import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useProduct } from "@/hooks/useProducts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading, error } = useProduct(id || "");

  if (isLoading) {
    return (
      <>
        <Header />
        <div className="min-h-screen pt-32 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading meal details...</p>
          </div>
        </div>
      </>
    );
  }

  if (error || !product) {
    return (
      <>
        <Header />
        <div className="min-h-screen pt-32 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Meal Not Found</h1>
            <p className="text-muted-foreground mb-8">Sorry, we couldn't find that meal.</p>
            <a href="https://smashmeals.bottle.com/b/9730175" target="_blank" rel="noopener noreferrer">
              <Button variant="hero">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Menu
              </Button>
            </a>
          </div>
        </div>
      </>
    );
  }

  const productImage = product.image_url?.startsWith('http') 
    ? product.image_url 
    : imageMap[product.image_url || ''] || baconEggCheeseCasserole;

  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4">
          <a href="https://smashmeals.bottle.com/b/9730175" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Menu
          </a>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Product Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
              <img
                src={productImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div className="mb-6">
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-6 space-y-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  100% Gluten-Free
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Chef-Crafted & Fresh
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Ready in Minutes
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Stays Fresh All Week
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetail;
