import { Helmet } from "react-helmet";

const LocalBusinessSchema = () => {
  // Main Restaurant/FoodEstablishment schema
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "FoodEstablishment", "MealDeliveryService"],
    "@id": "https://smashmeals.com/#restaurant",
    "name": "SmashMeals",
    "alternateName": "Smash Meals",
    "description": "Tri-Cities' first and only 100% gluten-free meal prep kitchen. Chef-prepared, macro-counted, high-protein meals with local pickup in Kingsport, Johnson City, Bristol, and nationwide shipping.",
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
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "500",
      "reviewCount": "500"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Randy Johnson"
        },
        "datePublished": "2024-10-15",
        "reviewBody": "Over the last 3 months, SmashMeals has been a huge part of my Fit by 51 journey. I'm down over 20 pounds, and for the first time in a long time, it feels sustainable.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Amanda Smith"
        },
        "datePublished": "2024-11-20",
        "reviewBody": "This has honestly been a life saver! On days when school lets out early, it takes the guess work out. I had lunch ready in 90 seconds.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Becky Halbrook"
        },
        "datePublished": "2024-09-10",
        "reviewBody": "We utilized Smash Meals for a football banquet, and the food was remarkable. Not a single barbecue sandwich remained. I highly recommend their catering services.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      }
    ],
    "founder": {
      "@type": "Person",
      "name": "Lewis Kizer",
      "jobTitle": "Owner & Pitmaster",
      "description": "Passionate about providing healthy, convenient, 100% gluten-free meals to the Tri-Cities community since 2017."
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
          "@type": "OfferCatalog",
          "name": "Weekly Meal Prep",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Breakfast Meals",
                "description": "High-protein gluten-free breakfast options"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Entree Meals",
                "description": "Chef-prepared lunch and dinner entrees"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Bariatric Meals",
                "description": "Portion-controlled meals for bariatric patients"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Catering Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Event Catering",
                "description": "Full-service catering for events and gatherings"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Shipping",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "DeliveryService",
                "name": "Nationwide Shipping",
                "description": "Gluten-free meals shipped anywhere in the continental US"
              }
            }
          ]
        }
      ]
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Kingsport",
        "containedInPlace": { "@type": "State", "name": "Tennessee" }
      },
      {
        "@type": "City",
        "name": "Johnson City",
        "containedInPlace": { "@type": "State", "name": "Tennessee" }
      },
      {
        "@type": "City",
        "name": "Bristol",
        "containedInPlace": { "@type": "State", "name": "Tennessee" }
      },
      {
        "@type": "City",
        "name": "Greeneville",
        "containedInPlace": { "@type": "State", "name": "Tennessee" }
      },
      {
        "@type": "City",
        "name": "Morristown",
        "containedInPlace": { "@type": "State", "name": "Tennessee" }
      },
      {
        "@type": "City",
        "name": "Knoxville",
        "containedInPlace": { "@type": "State", "name": "Tennessee" }
      },
      { "@type": "Country", "name": "United States" }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 36.5484,
        "longitude": -82.5618
      },
      "geoRadius": "2500 mi"
    },
    "potentialAction": [
      {
        "@type": "OrderAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://smashmeals.bottle.com/b/9814360",
          "inLanguage": "en-US",
          "actionPlatform": [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/MobileWebPlatform"
          ]
        },
        "deliveryMethod": [
          "http://schema.org/OnSitePickup",
          "http://schema.org/DeliveryMethod"
        ]
      },
      {
        "@type": "ReserveAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://smashmeals.bottle.com/b/9730176",
          "name": "Book Catering"
        }
      }
    ],
    "sameAs": [
      "https://www.facebook.com/smashmeals",
      "https://www.instagram.com/smashmeals",
      "https://maps.app.goo.gl/qqowjpLzbtk14G2ZA"
    ],
    "keywords": "gluten-free meal prep, meal prep delivery, healthy meals Kingsport, meal prep Tri-Cities, gluten-free catering, high-protein meals, bariatric meal prep, athlete meal prep"
  };

  // Website schema with search action
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://smashmeals.com/#website",
    "url": "https://smashmeals.com",
    "name": "SmashMeals",
    "description": "100% Gluten-Free Meal Prep Delivery",
    "publisher": { "@id": "https://smashmeals.com/#restaurant" },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://smashmeals.com/menu?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  // Breadcrumb schema for homepage
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://smashmeals.com"
      }
    ]
  };

  // Service schema for meal prep
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "FoodService",
    "@id": "https://smashmeals.com/#mealprep",
    "name": "SmashMeals Gluten-Free Meal Prep",
    "description": "Weekly chef-prepared, macro-counted, 100% gluten-free meals with local pickup and nationwide shipping.",
    "provider": { "@id": "https://smashmeals.com/#restaurant" },
    "serviceType": "Meal Preparation and Delivery",
    "areaServed": { "@type": "Country", "name": "United States" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Meal Categories",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Breakfast Meals",
            "description": "High-protein gluten-free breakfast options starting at $6"
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "6.00",
            "priceCurrency": "USD",
            "minPrice": "6.00",
            "maxPrice": "10.00"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Entree Meals",
            "description": "Chef-prepared lunch and dinner entrees"
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "9.00",
            "priceCurrency": "USD",
            "minPrice": "9.00",
            "maxPrice": "15.00"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Bariatric Meals",
            "description": "Portion-controlled high-protein meals for post-surgery recovery"
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "6.00",
            "priceCurrency": "USD",
            "minPrice": "3.00",
            "maxPrice": "8.00"
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(restaurantSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
    </Helmet>
  );
};

export default LocalBusinessSchema;
