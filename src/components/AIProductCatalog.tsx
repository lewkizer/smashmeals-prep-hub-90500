import { Helmet } from "react-helmet";

interface Product {
  name: string;
  description?: string | null;
  price: number;
  category: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

interface AIProductCatalogProps {
  products: Product[];
}

const AIProductCatalog = ({ products }: AIProductCatalogProps) => {
  // Create structured data for AI/search engines
  const productListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "SmashMeals Product Catalog",
    "description": "Complete catalog of 100% gluten-free meal prep options from SmashMeals",
    "numberOfItems": products.length,
    "itemListElement": products.slice(0, 50).map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": product.name,
        "description": product.description || `${product.name} - ${product.category} meal`,
        "category": product.category,
        "brand": {
          "@type": "Brand",
          "name": "SmashMeals"
        },
        "offers": {
          "@type": "Offer",
          "price": product.price.toFixed(2),
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
          "url": "https://smashmeals.bottle.com/b/9814360",
          "seller": {
            "@type": "Organization",
            "name": "SmashMeals"
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "500",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "SmashMeals Customer"
          },
          "reviewBody": "Delicious gluten-free meal prep! Fresh, high-protein, and perfectly portioned."
        },
        "nutrition": {
          "@type": "NutritionInformation",
          "calories": `${product.calories} calories`,
          "proteinContent": `${product.protein}g`,
          "carbohydrateContent": `${product.carbs}g`,
          "fatContent": `${product.fat}g`
        },
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "Gluten-Free",
            "value": "Yes - 100% dedicated gluten-free facility"
          }
        ]
      }
    }))
  };

  // Menu schema for restaurant discovery
  const menuSchema = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "name": "SmashMeals Weekly Menu",
    "description": "100% gluten-free meal prep menu updated weekly",
    "hasMenuSection": [
      {
        "@type": "MenuSection",
        "name": "Breakfast",
        "description": "High-protein gluten-free breakfast meals",
        "hasMenuItem": products
          .filter(p => p.category.toLowerCase() === 'breakfast')
          .slice(0, 10)
          .map(p => ({
            "@type": "MenuItem",
            "name": p.name,
            "description": p.description || `${p.calories} cal, ${p.protein}g protein`,
            "offers": {
              "@type": "Offer",
              "price": p.price.toFixed(2),
              "priceCurrency": "USD"
            },
            "suitableForDiet": "https://schema.org/GlutenFreeDiet"
          }))
      },
      {
        "@type": "MenuSection",
        "name": "Entrees",
        "description": "Chef-prepared gluten-free lunch and dinner meals",
        "hasMenuItem": products
          .filter(p => p.category.toLowerCase() === 'entree')
          .slice(0, 15)
          .map(p => ({
            "@type": "MenuItem",
            "name": p.name,
            "description": p.description || `${p.calories} cal, ${p.protein}g protein`,
            "offers": {
              "@type": "Offer",
              "price": p.price.toFixed(2),
              "priceCurrency": "USD"
            },
            "suitableForDiet": "https://schema.org/GlutenFreeDiet"
          }))
      },
      {
        "@type": "MenuSection",
        "name": "A La Carte",
        "description": "Individual proteins and sides for custom meal building",
        "hasMenuItem": products
          .filter(p => p.category.toLowerCase().includes('carte') || p.category.toLowerCase().includes('bulk'))
          .slice(0, 10)
          .map(p => ({
            "@type": "MenuItem",
            "name": p.name,
            "description": p.description || `${p.calories} cal, ${p.protein}g protein`,
            "offers": {
              "@type": "Offer",
              "price": p.price.toFixed(2),
              "priceCurrency": "USD"
            },
            "suitableForDiet": "https://schema.org/GlutenFreeDiet"
          }))
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(productListSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(menuSchema)}
      </script>
    </Helmet>
  );
};

export default AIProductCatalog;
