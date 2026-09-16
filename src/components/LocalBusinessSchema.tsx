import { Helmet } from "react-helmet";

const LocalBusinessSchema = () => {
  // Core business entity. Keep review/aggregateRating markup off this site-wide
  // schema: Google does not show self-serving LocalBusiness review stars, and
  // duplicating rating entities across landing pages can trigger Review snippet
  // errors such as "Review has multiple aggregate ratings".
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "FoodEstablishment", "MealDeliveryService"],
    "@id": "https://smashmeals.com/#restaurant",
    "name": "SmashMeals",
    "alternateName": "Smash Meals",
    "description": "100% gluten-free meal prep kitchen. Chef-prepared, macro-counted, high-protein meals with local pickup and delivery in the Tri-Cities plus shipping to eligible destinations.",
    "slogan": "100% Gluten-Free Meal Prep",
    "url": "https://smashmeals.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://smashmeals.com/og-image.jpg",
      "width": 1200,
      "height": 630
    },
    "image": [
      "https://smashmeals.com/og-image.jpg",
      "https://smashmeals.com/assets/hero-meals.jpg"
    ],
    "telephone": "+1-423-525-2489",
    "email": "contact@smashmeals.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1917 Meadowview Pkwy Suite 100",
      "addressLocality": "Kingsport",
      "addressRegion": "TN",
      "postalCode": "37660",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 36.5484,
      "longitude": -82.5618
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "priceRange": "$$",
    "servesCuisine": ["American", "Healthy", "Gluten-Free", "High-Protein", "Meal Prep"],
    "menu": "https://smashmeals.bottle.com/b/9814360",
    "acceptsReservations": false,
    "hasMenu": {
      "@type": "Menu",
      "url": "https://smashmeals.bottle.com/b/9814360",
      "name": "SmashMeals Weekly Menu",
      "description": "Fresh, chef-prepared gluten-free meals updated weekly"
    },
    "paymentAccepted": ["Credit Card", "Debit Card", "Cash"],
    "currenciesAccepted": "USD",
    "founder": {
      "@type": "Person",
      "name": "Lewis Kizer"
    },
    "foundingDate": "2017",
    "knowsAbout": [
      "Gluten-Free Cooking",
      "Meal Prep",
      "High-Protein Meals",
      "Bariatric-Friendly Meals",
      "Sports Nutrition",
      "Catering Services"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "SmashMeals Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Weekly Meal Prep",
            "description": "Chef-prepared gluten-free meals available from the rotating weekly menu."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Catering Services",
            "description": "Catering for businesses, teams, meetings, churches and events."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "DeliveryService",
            "name": "Meal Shipping",
            "description": "Prepared meal shipping to eligible destinations."
          }
        }
      ]
    },
    "areaServed": [
      { "@type": "City", "name": "Kingsport", "containedInPlace": { "@type": "State", "name": "Tennessee" } },
      { "@type": "City", "name": "Johnson City", "containedInPlace": { "@type": "State", "name": "Tennessee" } },
      { "@type": "City", "name": "Bristol", "containedInPlace": { "@type": "State", "name": "Tennessee" } },
      { "@type": "Country", "name": "United States" }
    ],
    "potentialAction": {
      "@type": "OrderAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://smashmeals.bottle.com/b/9814360",
        "inLanguage": "en-US",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      }
    },
    "sameAs": [
      "https://www.facebook.com/smashmeals",
      "https://www.instagram.com/smashmeals"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://smashmeals.com/#website",
    "url": "https://smashmeals.com",
    "name": "SmashMeals",
    "description": "100% Gluten-Free Meal Prep Delivery",
    "publisher": { "@id": "https://smashmeals.com/#restaurant" }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://smashmeals.com/#mealprep",
    "name": "SmashMeals Gluten-Free Meal Prep",
    "description": "Weekly chef-prepared, macro-counted, 100% gluten-free meals with local pickup, delivery and shipping to eligible destinations.",
    "provider": { "@id": "https://smashmeals.com/#restaurant" },
    "serviceType": "Meal Preparation and Delivery",
    "areaServed": { "@type": "Country", "name": "United States" }
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(restaurantSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
    </Helmet>
  );
};

export default LocalBusinessSchema;
