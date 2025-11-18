import { Helmet } from "react-helmet";

const MenuSchema = () => {
  const menuSchema = {
    "@context": "https://schema.org",
    "@type": "Menu",
    "name": "SmashMeals Weekly Menu",
    "description": "100% gluten-free meal prep menu for Tri-Cities TN. New items weekly.",
    "hasMenuSection": [
      {
        "@type": "MenuSection",
        "name": "Breakfast",
        "hasMenuItem": [
          {
            "@type": "MenuItem",
            "name": "Southern Smash Cup",
            "description": "Sausage, Grits, Cheese and Egg Whites",
            "offers": {
              "@type": "Offer",
              "price": "8.00",
              "priceCurrency": "USD"
            },
            "suitableForDiet": "https://schema.org/GlutenFreeDiet"
          },
          {
            "@type": "MenuItem",
            "name": "Sweet Potato Hash with Fried Eggs and Chicken Sausage",
            "offers": {
              "@type": "Offer",
              "price": "8.25",
              "priceCurrency": "USD"
            },
            "suitableForDiet": "https://schema.org/GlutenFreeDiet"
          },
          {
            "@type": "MenuItem",
            "name": "White Potato Hash with Fried Eggs",
            "offers": {
              "@type": "Offer",
              "price": "8.00",
              "priceCurrency": "USD"
            },
            "suitableForDiet": "https://schema.org/GlutenFreeDiet"
          },
          {
            "@type": "MenuItem",
            "name": "Pumpkin Pie Protein Oats",
            "offers": {
              "@type": "Offer",
              "price": "8.50",
              "priceCurrency": "USD"
            },
            "suitableForDiet": "https://schema.org/GlutenFreeDiet"
          }
        ]
      },
      {
        "@type": "MenuSection",
        "name": "Entrees",
        "hasMenuItem": [
          {
            "@type": "MenuItem",
            "name": "Wild Rice Harvest Soup with Chicken",
            "offers": {
              "@type": "Offer",
              "price": "8.00",
              "priceCurrency": "USD"
            },
            "suitableForDiet": "https://schema.org/GlutenFreeDiet"
          },
          {
            "@type": "MenuItem",
            "name": "Honey Sriracha Salmon",
            "description": "Served with Rice and Green Beans",
            "offers": {
              "@type": "Offer",
              "price": "11.00",
              "priceCurrency": "USD"
            },
            "suitableForDiet": "https://schema.org/GlutenFreeDiet"
          },
          {
            "@type": "MenuItem",
            "name": "SmashMeals Mexican Chicken Bowl",
            "offers": {
              "@type": "Offer",
              "price": "10.25",
              "priceCurrency": "USD"
            },
            "suitableForDiet": "https://schema.org/GlutenFreeDiet"
          },
          {
            "@type": "MenuItem",
            "name": "Bunless Bacon Burger with Sharp Cheddar",
            "offers": {
              "@type": "Offer",
              "price": "11.00",
              "priceCurrency": "USD"
            },
            "suitableForDiet": ["https://schema.org/GlutenFreeDiet", "https://schema.org/LowCalorieDiet"]
          },
          {
            "@type": "MenuItem",
            "name": "Veggie Pizza Bowl",
            "description": "10 oz, vegetarian, low-calorie",
            "offers": {
              "@type": "Offer",
              "price": "9.00",
              "priceCurrency": "USD"
            },
            "suitableForDiet": ["https://schema.org/GlutenFreeDiet", "https://schema.org/VegetarianDiet", "https://schema.org/LowCalorieDiet"]
          },
          {
            "@type": "MenuItem",
            "name": "Smoked Turkey & Maple-Roasted Butternut Squash",
            "offers": {
              "@type": "Offer",
              "price": "10.75",
              "priceCurrency": "USD"
            },
            "suitableForDiet": "https://schema.org/GlutenFreeDiet"
          },
          {
            "@type": "MenuItem",
            "name": "High Protein Pizza Bowl Meat Lovers",
            "offers": {
              "@type": "Offer",
              "price": "10.00",
              "priceCurrency": "USD"
            },
            "suitableForDiet": ["https://schema.org/GlutenFreeDiet", "https://schema.org/HighProteinDiet"]
          },
          {
            "@type": "MenuItem",
            "name": "Grilled Steak Salad",
            "offers": {
              "@type": "Offer",
              "price": "10.50",
              "priceCurrency": "USD"
            },
            "suitableForDiet": ["https://schema.org/GlutenFreeDiet", "https://schema.org/HighProteinDiet"]
          },
          {
            "@type": "MenuItem",
            "name": "Grilled Chicken Salad",
            "offers": {
              "@type": "Offer",
              "price": "9.50",
              "priceCurrency": "USD"
            },
            "suitableForDiet": ["https://schema.org/GlutenFreeDiet", "https://schema.org/HighProteinDiet", "https://schema.org/LowCalorieDiet"]
          }
        ]
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(menuSchema)}
      </script>
    </Helmet>
  );
};

export default MenuSchema;
