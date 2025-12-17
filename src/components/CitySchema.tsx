import { Helmet } from "react-helmet";

interface CitySchemaProps {
  cityName: string;
  state: string;
  stateAbbr: string;
}

const CitySchema = ({ cityName, state, stateAbbr }: CitySchemaProps) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `SmashMeals - ${cityName}`,
    "description": `Fresh gluten-free meal prep delivery service in ${cityName}, ${stateAbbr}. Chef-prepared meals with free local delivery.`,
    "image": "https://smashmeals.com/og-image.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": cityName,
      "addressRegion": stateAbbr,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "addressLocality": cityName,
      "addressRegion": state
    },
    "url": `https://smashmeals.com/${cityName.toLowerCase().replace(/\s+/g, '-')}`,
    "telephone": "+1-423-123-4567",
    "priceRange": "$$",
    "servesCuisine": ["American", "Healthy", "Gluten-Free"],
    "areaServed": {
      "@type": "City",
      "name": cityName,
      "address": {
        "@type": "PostalAddress",
        "addressRegion": stateAbbr,
        "addressCountry": "US"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Meal Prep Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Gluten-Free Meal Prep",
            "description": "Fresh, chef-prepared gluten-free meals delivered to your door",
            "image": "https://smashmeals.com/og-image.jpg",
            "brand": {
              "@type": "Brand",
              "name": "SmashMeals"
            },
            "offers": {
              "@type": "Offer",
              "price": "11.99",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
              "url": "https://smashmeals.bottle.com/b/9814360"
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
            }
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default CitySchema;
