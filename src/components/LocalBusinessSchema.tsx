import { Helmet } from "react-helmet";

const LocalBusinessSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": "https://smashmeals.com/#restaurant",
    "name": "SmashMeals",
    "description": "Gluten-free meal prep and delivery with local pickup in Kingsport, Johnson City, Bristol, and surrounding Tri-Cities areas, plus nationwide shipping. Chef-prepared, macro-counted, high-protein meals.",
    "url": "https://smashmeals.com",
    "logo": "https://smashmeals.com/og-image.jpg",
    "image": "https://smashmeals.com/og-image.jpg",
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
      "latitude": "36.5484",
      "longitude": "-82.5618"
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
    "servesCuisine": ["American", "Healthy", "Gluten-Free", "High-Protein"],
    "menu": "https://smashmeals.bottle.com/b/9814360",
    "acceptsReservations": "False",
    "hasMenu": {
      "@type": "Menu",
      "url": "https://smashmeals.bottle.com/b/9814360",
      "name": "SmashMeals Weekly Menu"
    },
    "paymentAccepted": "Credit Card, Debit Card",
    "currenciesAccepted": "USD",
    "areaServed": [
      {
        "@type": "City",
        "name": "Kingsport",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "TN",
          "addressCountry": "US"
        }
      },
      {
        "@type": "City",
        "name": "Johnson City",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "TN",
          "addressCountry": "US"
        }
      },
      {
        "@type": "City",
        "name": "Bristol",
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "TN",
          "addressCountry": "US"
        }
      },
      {
        "@type": "State",
        "name": "Tennessee"
      },
      {
        "@type": "State",
        "name": "Virginia"
      },
      {
        "@type": "State",
        "name": "North Carolina"
      },
      {
        "@type": "State",
        "name": "Kentucky"
      },
      {
        "@type": "State",
        "name": "Georgia"
      },
      {
        "@type": "State",
        "name": "South Carolina"
      },
      {
        "@type": "Country",
        "name": "United States"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "36.5484",
        "longitude": "-82.5618"
      },
      "geoRadius": "500 mi"
    },
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
      },
      "deliveryMethod": ["http://schema.org/OnSitePickup", "http://schema.org/DeliveryMethod"],
      "result": {
        "@type": "Order"
      }
    },
    "sameAs": [
      "https://www.facebook.com/smashmeals",
      "https://www.instagram.com/smashmeals"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default LocalBusinessSchema;
