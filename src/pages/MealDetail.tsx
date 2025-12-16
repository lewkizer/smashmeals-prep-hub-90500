import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowLeft, Clock, Flame, Users, Heart, Star, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getMealBySlug, getRelatedMeals, generateMealKeywords, type Meal } from "@/data/meals";

export default function MealDetail() {
  const { slug } = useParams<{ slug: string }>();
  const meal = slug ? getMealBySlug(slug) : undefined;

  if (!meal) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Meal Not Found</h1>
          <p className="text-muted-foreground mb-8">Sorry, we couldn't find that meal.</p>
          <Button asChild>
            <Link to="/">Return Home</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedMeals = getRelatedMeals(meal);
  const keywords = generateMealKeywords(meal);

  // Recipe Schema for SEO
  const recipeSchema = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "name": meal.name,
    "description": meal.longDescription,
    "image": meal.image,
    "author": {
      "@type": "Organization",
      "name": "SmashMeals"
    },
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": `${meal.calories} calories`,
      "proteinContent": `${meal.protein}g`,
      "carbohydrateContent": `${meal.carbs}g`,
      "fatContent": `${meal.fat}g`,
      "servingSize": meal.servingSize
    },
    "recipeIngredient": meal.ingredients,
    "recipeInstructions": meal.prepInstructions.map((instruction, i) => ({
      "@type": "HowToStep",
      "position": i + 1,
      "text": instruction
    })),
    "recipeCategory": meal.category,
    "recipeCuisine": "American",
    "keywords": keywords,
    "suitableForDiet": "https://schema.org/GlutenFreeDiet",
    "aggregateRating": meal.reviews ? {
      "@type": "AggregateRating",
      "ratingValue": meal.reviews.rating,
      "reviewCount": meal.reviews.count
    } : undefined,
    "offers": {
      "@type": "Offer",
      "price": meal.price.toFixed(2),
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": `https://smashmeals.com/meals/${meal.slug}`
    }
  };

  // Product Schema for ecommerce
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": meal.name,
    "description": meal.longDescription,
    "image": meal.image,
    "brand": {
      "@type": "Brand",
      "name": "SmashMeals"
    },
    "offers": {
      "@type": "Offer",
      "price": meal.price.toFixed(2),
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": `https://smashmeals.com/meals/${meal.slug}`,
      "seller": {
        "@type": "Organization",
        "name": "SmashMeals"
      }
    },
    "aggregateRating": meal.reviews ? {
      "@type": "AggregateRating",
      "ratingValue": meal.reviews.rating,
      "reviewCount": meal.reviews.count
    } : undefined,
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": `${meal.calories} calories`,
      "proteinContent": `${meal.protein}g`,
      "carbohydrateContent": `${meal.carbs}g`,
      "fatContent": `${meal.fat}g`
    }
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{meal.name} | Gluten-Free Meal Prep | SmashMeals Tri-Cities</title>
        <meta 
          name="description" 
          content={`${meal.longDescription.substring(0, 155)}. ${meal.calories} cal, ${meal.protein}g protein. Order by Thursday for Sunday pickup.`}
        />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={`https://smashmeals.com/meals/${meal.slug}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${meal.name} | SmashMeals`} />
        <meta property="og:description" content={meal.description} />
        <meta property="og:image" content={meal.image} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={`https://smashmeals.com/meals/${meal.slug}`} />
        <meta property="product:price:amount" content={meal.price.toFixed(2)} />
        <meta property="product:price:currency" content="USD" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meal.name} />
        <meta name="twitter:description" content={meal.description} />
        <meta name="twitter:image" content={meal.image} />
        
        {/* Recipe Schema */}
        <script type="application/ld+json">
          {JSON.stringify(recipeSchema)}
        </script>
        
        {/* Product Schema */}
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      </Helmet>

      <Header />

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/#menu" className="hover:text-primary">Menu</Link>
          <span>/</span>
          <span className="text-foreground">{meal.name}</span>
        </nav>

        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/#menu">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Menu
          </Link>
        </Button>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Image Section */}
          <div className="space-y-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={meal.image} 
                alt={`${meal.name} - Gluten-free meal prep Tri-Cities TN`}
                className="w-full h-full object-cover"
              />
              {meal.featured && (
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                  Featured
                </Badge>
              )}
            </div>

            {/* Nutrition Facts Card */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Nutrition Facts</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Flame className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{meal.calories}</div>
                      <div className="text-sm text-muted-foreground">Calories</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{meal.protein}g</div>
                      <div className="text-sm text-muted-foreground">Protein</div>
                    </div>
                  </div>
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <div className="text-xl font-bold">{meal.carbs}g</div>
                    <div className="text-sm text-muted-foreground">Carbs</div>
                  </div>
                  <div className="text-center p-3 bg-muted rounded-lg">
                    <div className="text-xl font-bold">{meal.fat}g</div>
                    <div className="text-sm text-muted-foreground">Fat</div>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Serving Size:</span>
                  <span className="font-semibold">{meal.servingSize}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Details Section */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-4">{meal.name}</h1>
              <p className="text-xl text-muted-foreground mb-6">{meal.description}</p>
              
              {/* Reviews */}
              {meal.reviews && (
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < Math.floor(meal.reviews!.rating) ? 'fill-primary text-primary' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold">{meal.reviews.rating}</span>
                  <span className="text-sm text-muted-foreground">({meal.reviews.count} reviews)</span>
                </div>
              )}

              {/* Price */}
              <div className="text-4xl font-bold text-primary mb-6">
                ${meal.price.toFixed(2)}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {meal.tags.map(tag => (
                  <Badge key={tag} variant="outline">
                    {tag.replace(/-/g, ' ')}
                  </Badge>
                ))}
              </div>

              {/* CTA Button */}
              <Button size="lg" className="w-full mb-6" asChild>
                <a 
                  href="https://smashmeals.bottle.com/b/9814360" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Order This Meal
                </a>
              </Button>

              {/* Shelf Life Info */}
              <Card className="bg-muted/50">
                <CardContent className="p-4 flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-semibold mb-1">Shelf Life</div>
                    <div className="text-sm text-muted-foreground">{meal.shelfLife}</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Separator />

            {/* Long Description */}
            <div>
              <h2 className="text-2xl font-bold mb-3">About This Meal</h2>
              <p className="text-muted-foreground leading-relaxed">{meal.longDescription}</p>
            </div>

            <Separator />

            {/* Best For */}
            <div>
              <h2 className="text-2xl font-bold mb-3">Perfect For</h2>
              <div className="grid grid-cols-2 gap-3">
                {meal.bestFor.map(item => (
                  <div key={item} className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Ingredients */}
        <Card className="mb-16">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-6">Ingredients</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {meal.ingredients.map(ingredient => (
                <div key={ingredient} className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>{ingredient}</span>
                </div>
              ))}
            </div>
            
            {meal.allergens.length > 0 && (
              <div className="mt-6 p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-900">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <div className="font-semibold text-orange-900 dark:text-orange-100 mb-1">
                      Contains: {meal.allergens.join(", ")}
                    </div>
                    <div className="text-sm text-orange-700 dark:text-orange-200">
                      100% gluten-free dedicated facility
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Prep Instructions */}
        <Card className="mb-16">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold mb-6">Heating Instructions</h2>
            <ol className="space-y-4">
              {meal.prepInstructions.map((instruction, index) => (
                <li key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <p className="flex-1 pt-1">{instruction}</p>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>

        {/* Related Meals */}
        {relatedMeals.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">You Might Also Like</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedMeals.map(relatedMeal => (
                <Link key={relatedMeal.id} to={`/meals/${relatedMeal.slug}`}>
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <img 
                      src={relatedMeal.image} 
                      alt={relatedMeal.name}
                      className="w-full h-48 object-cover"
                    />
                    <CardContent className="p-4">
                      <h3 className="font-bold mb-2 line-clamp-2">{relatedMeal.name}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-primary">
                          ${relatedMeal.price.toFixed(2)}
                        </span>
                        {relatedMeal.reviews && (
                          <div className="flex items-center gap-1 text-sm">
                            <Star className="w-4 h-4 fill-primary text-primary" />
                            <span>{relatedMeal.reviews.rating}</span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}