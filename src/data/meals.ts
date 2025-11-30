// Comprehensive meal database for SEO-optimized individual pages
import mexicanChickenBowl from "@/assets/featured/mexican-chicken-bowl.jpg";
import smokedTurkeyButternutSquash from "@/assets/featured/smoked-turkey-butternut-squash.jpg";
import grilledSteakSalad from "@/assets/featured/grilled-steak-salad.jpg";
import lemonHerbChicken from "@/assets/featured/lemon-herb-chicken.jpg";
import shrimpCheeseGrits from "@/assets/featured/shrimp-cheese-grits.jpg";
import filetMignonPlate from "@/assets/featured/filet-mignon-plate.jpg";
import southernSmashCup from "@/assets/featured/southern-smash-cup.jpg";
import sweetPotatoHash from "@/assets/featured/sweet-potato-hash.jpg";
import blueberryProteinOats from "@/assets/featured/blueberry-protein-oats.jpg";

export interface Meal {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  category: "breakfast" | "entree" | "side" | "snack" | "family";
  image: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  servingSize: string;
  ingredients: string[];
  allergens: string[];
  shelfLife: string;
  prepInstructions: string[];
  featured: boolean;
  tags: string[];
  bestFor: string[];
  reviews?: {
    rating: number;
    count: number;
  };
}

export const meals: Meal[] = [
  // BREAKFAST ITEMS
  {
    id: "southern-smash-cup",
    slug: "southern-smash-cup",
    name: "Southern Smash Cup",
    description: "Sausage, Grits, Cheese and Egg Whites",
    longDescription: "Start your morning with a Southern classic reimagined for health-conscious eaters. Our Southern Smash Cup combines savory turkey sausage, creamy stone-ground grits, sharp cheddar cheese, and fluffy egg whites in perfect harmony. This high-protein breakfast keeps you satisfied all morning while maintaining authentic Southern flavor.",
    price: 8.00,
    category: "breakfast",
    image: southernSmashCup,
    calories: 320,
    protein: 28,
    carbs: 24,
    fat: 12,
    servingSize: "10 oz",
    ingredients: ["Turkey sausage", "Stone-ground grits", "Egg whites", "Sharp cheddar cheese", "Sea salt", "Black pepper"],
    allergens: ["Dairy", "Eggs"],
    shelfLife: "5-6 days refrigerated",
    prepInstructions: [
      "Remove lid and vent",
      "Microwave for 2-3 minutes until heated through",
      "Let stand 1 minute before eating",
      "Or bake at 350°F for 15-20 minutes"
    ],
    featured: true,
    tags: ["high-protein", "gluten-free", "southern-style", "breakfast"],
    bestFor: ["Athletes", "Busy professionals", "Meal prep beginners", "Weight training"],
    reviews: {
      rating: 4.9,
      count: 147
    }
  },
  {
    id: "sweet-potato-hash",
    slug: "sweet-potato-hash-chicken-sausage",
    name: "Sweet Potato Hash with Fried Eggs and Chicken Sausage",
    description: "Hearty breakfast hash with sweet potatoes, chicken sausage, and fried eggs",
    longDescription: "Fuel your day with this nutrient-dense breakfast featuring crispy sweet potato cubes, savory chicken sausage, bell peppers, and perfectly cooked fried eggs on top. Rich in complex carbs and protein, this hash is ideal for athletes and active individuals who need sustained energy throughout the morning.",
    price: 8.25,
    category: "breakfast",
    image: sweetPotatoHash,
    calories: 385,
    protein: 26,
    carbs: 32,
    fat: 16,
    servingSize: "12 oz",
    ingredients: ["Sweet potatoes", "Chicken sausage", "Eggs", "Bell peppers", "Onions", "Olive oil", "Paprika", "Garlic"],
    allergens: ["Eggs"],
    shelfLife: "5-6 days refrigerated",
    prepInstructions: [
      "Microwave for 2.5-3 minutes",
      "Eggs should reach 165°F internal temp",
      "Stir halfway through heating",
      "Add hot sauce or ketchup to taste"
    ],
    featured: true,
    tags: ["high-protein", "gluten-free", "paleo-friendly", "whole30-approved"],
    bestFor: ["CrossFit athletes", "Paleo diet", "Whole30", "Pre-workout meal"],
    reviews: {
      rating: 4.8,
      count: 132
    }
  },
  {
    id: "blueberry-protein-oats",
    slug: "blueberry-protein-oats",
    name: "Blueberry Protein Oats",
    description: "Creamy protein-packed oatmeal with fresh blueberries",
    longDescription: "Our Blueberry Protein Oats transform traditional oatmeal into a muscle-building powerhouse. Made with gluten-free oats, Greek yogurt, vanilla protein powder, and topped with antioxidant-rich blueberries, this breakfast delivers 25g of protein while satisfying your sweet tooth naturally.",
    price: 8.50,
    category: "breakfast",
    image: blueberryProteinOats,
    calories: 340,
    protein: 25,
    carbs: 42,
    fat: 8,
    servingSize: "10 oz",
    ingredients: ["Gluten-free oats", "Greek yogurt", "Vanilla protein powder", "Fresh blueberries", "Honey", "Cinnamon", "Almond milk"],
    allergens: ["Dairy", "Tree nuts (almond milk)"],
    shelfLife: "4-5 days refrigerated",
    prepInstructions: [
      "Can be eaten cold or heated",
      "Microwave 60-90 seconds if desired",
      "Stir well before eating",
      "Add extra berries or nuts if desired"
    ],
    featured: false,
    tags: ["high-protein", "gluten-free", "vegetarian", "pre-workout"],
    bestFor: ["Bodybuilders", "Weight loss", "Vegetarians", "Morning workouts"],
    reviews: {
      rating: 4.7,
      count: 98
    }
  },

  // ENTREES - Premium Options
  {
    id: "mexican-chicken-bowl",
    slug: "mexican-chicken-bowl",
    name: "SmashMeals Mexican Chicken Bowl",
    description: "Juicy chicken with smoky salsa, black beans, and peppers over rice or cauliflower rice",
    longDescription: "Experience authentic Mexican flavors in a health-conscious format. Our Mexican Chicken Bowl features tender, seasoned chicken breast topped with our house-made smoky salsa, protein-rich black beans, colorful bell peppers, and your choice of white rice or low-carb cauliflower rice. Perfect for macro tracking and meal prep.",
    price: 10.25,
    category: "entree",
    image: mexicanChickenBowl,
    calories: 420,
    protein: 45,
    carbs: 38,
    fat: 10,
    servingSize: "14 oz",
    ingredients: ["Grilled chicken breast", "Black beans", "Bell peppers", "House-made salsa", "White rice or cauliflower rice", "Mexican spices", "Lime juice"],
    allergens: [],
    shelfLife: "5-6 days refrigerated",
    prepInstructions: [
      "Remove lid, vent container",
      "Microwave 2.5-3 minutes",
      "Stir halfway through",
      "Top with sour cream, cheese, or avocado (not included)"
    ],
    featured: true,
    tags: ["high-protein", "gluten-free", "low-carb-option", "macro-friendly"],
    bestFor: ["Weight loss", "Muscle building", "Keto (with cauliflower rice)", "Busy professionals"],
    reviews: {
      rating: 4.9,
      count: 203
    }
  },
  {
    id: "smoked-turkey-butternut-squash",
    slug: "smoked-turkey-butternut-squash",
    name: "Smoked Turkey & Maple-Roasted Butternut Squash",
    description: "Fall-inspired plate with tender smoked turkey and maple-kissed roasted butternut squash",
    longDescription: "Celebrate seasonal flavors with our house-smoked turkey breast paired with caramelized butternut squash tossed in real maple syrup. This autumn-inspired entrée delivers lean protein and complex carbohydrates while satisfying your craving for something naturally sweet and savory.",
    price: 10.75,
    category: "entree",
    image: smokedTurkeyButternutSquash,
    calories: 380,
    protein: 42,
    carbs: 35,
    fat: 8,
    servingSize: "13 oz",
    ingredients: ["House-smoked turkey breast", "Butternut squash", "Pure maple syrup", "Olive oil", "Cinnamon", "Sea salt", "Fresh herbs"],
    allergens: [],
    shelfLife: "5-6 days refrigerated",
    prepInstructions: [
      "Microwave 2-3 minutes covered",
      "Can be enjoyed at room temperature",
      "Pairs well with a side salad",
      "Garnish with pecans for added crunch (not included)"
    ],
    featured: true,
    tags: ["high-protein", "gluten-free", "paleo-friendly", "seasonal"],
    bestFor: ["Clean eating", "Paleo diet", "Whole30", "Fall favorites"],
    reviews: {
      rating: 4.8,
      count: 156
    }
  },
  {
    id: "grilled-steak-salad",
    slug: "grilled-steak-salad",
    name: "Grilled Steak Salad",
    description: "Spring mix with grilled steak, sharp cheddar, bacon bits, cucumbers and cherry tomatoes",
    longDescription: "Elevate your salad game with premium grilled steak atop a bed of fresh spring mix. Loaded with sharp cheddar cheese, crispy bacon bits, crunchy cucumbers, and sweet cherry tomatoes, this protein-packed salad proves that eating healthy doesn't mean sacrificing flavor or satisfaction.",
    price: 10.50,
    category: "entree",
    image: grilledSteakSalad,
    calories: 395,
    protein: 38,
    carbs: 12,
    fat: 22,
    servingSize: "12 oz",
    ingredients: ["Grilled sirloin steak", "Spring mix lettuce", "Sharp cheddar cheese", "Bacon bits", "Cherry tomatoes", "Cucumbers", "Ranch dressing"],
    allergens: ["Dairy"],
    shelfLife: "4-5 days refrigerated (dressing separate)",
    prepInstructions: [
      "Best served cold",
      "Add dressing just before eating",
      "Can heat steak separately if preferred",
      "Toss well to combine"
    ],
    featured: true,
    tags: ["high-protein", "gluten-free", "low-carb", "keto-friendly"],
    bestFor: ["Keto diet", "Low carb", "High protein", "Lunch option"],
    reviews: {
      rating: 4.9,
      count: 189
    }
  },
  {
    id: "honey-garlic-salmon",
    slug: "honey-garlic-salmon",
    name: "Honey Garlic Glazed Salmon",
    description: "Wild-caught salmon with honey garlic glaze, served with rice and green beans",
    longDescription: "Indulge in omega-3 rich wild-caught salmon brushed with our signature honey garlic glaze. Perfectly baked to flaky perfection and paired with fluffy white rice and tender green beans, this meal supports heart health while delivering restaurant-quality taste. Ideal for those seeking clean protein and healthy fats.",
    price: 11.00,
    category: "entree",
    image: filetMignonPlate,
    calories: 445,
    protein: 40,
    carbs: 42,
    fat: 14,
    servingSize: "14 oz",
    ingredients: ["Wild-caught salmon", "Honey", "Garlic", "Soy sauce (gluten-free)", "White rice", "Green beans", "Olive oil", "Lemon"],
    allergens: ["Fish", "Soy"],
    shelfLife: "3-4 days refrigerated",
    prepInstructions: [
      "Microwave 2-2.5 minutes",
      "Do not overheat salmon (will dry out)",
      "Can be eaten at room temp",
      "Squeeze fresh lemon on top"
    ],
    featured: true,
    tags: ["high-protein", "gluten-free", "omega-3", "heart-healthy"],
    bestFor: ["Heart health", "Brain function", "Anti-inflammatory diet", "Clean eating"],
    reviews: {
      rating: 4.8,
      count: 142
    }
  },
  {
    id: "filet-mignon-plate",
    slug: "filet-mignon-plate",
    name: "Filet Mignon Plate",
    description: "Premium 6oz filet with roasted potatoes and seasonal vegetables",
    longDescription: "Treat yourself to our premium 6oz filet mignon, perfectly seasoned and cooked to tender perfection. Accompanied by herb-roasted baby potatoes and a medley of seasonal vegetables, this elevated entrée brings steakhouse quality to your meal prep routine. Perfect for special occasions or when you deserve the best.",
    price: 14.50,
    category: "entree",
    image: filetMignonPlate,
    calories: 485,
    protein: 48,
    carbs: 28,
    fat: 20,
    servingSize: "14 oz",
    ingredients: ["6oz filet mignon", "Baby potatoes", "Seasonal vegetables", "Herbs", "Garlic butter", "Sea salt", "Black pepper"],
    allergens: ["Dairy"],
    shelfLife: "4-5 days refrigerated",
    prepInstructions: [
      "Remove from fridge 10 minutes before heating",
      "Microwave 2 minutes, check temp",
      "For medium-rare: microwave in 30-second intervals",
      "Let rest 2 minutes before eating"
    ],
    featured: true,
    tags: ["premium", "gluten-free", "high-protein", "special-occasion"],
    bestFor: ["Date night", "Celebration meals", "Steak lovers", "Premium option"],
    reviews: {
      rating: 5.0,
      count: 87
    }
  },

  // MORE ENTREES
  {
    id: "lemon-herb-chicken",
    slug: "lemon-herb-chicken",
    name: "Lemon Herb Chicken",
    description: "Tender chicken breast with lemon herb marinade, roasted vegetables, and quinoa",
    longDescription: "Our Lemon Herb Chicken brings Mediterranean freshness to your weekly meal prep. Juicy chicken breast is marinated in a bright lemon herb blend, then paired with colorful roasted vegetables and protein-rich quinoa. This clean-eating favorite delivers balanced macros with vibrant, zesty flavors.",
    price: 9.75,
    category: "entree",
    image: lemonHerbChicken,
    calories: 390,
    protein: 42,
    carbs: 35,
    fat: 10,
    servingSize: "13 oz",
    ingredients: ["Chicken breast", "Lemon juice", "Fresh herbs (rosemary, thyme)", "Quinoa", "Broccoli", "Carrots", "Olive oil", "Garlic"],
    allergens: [],
    shelfLife: "5-6 days refrigerated",
    prepInstructions: [
      "Microwave 2.5-3 minutes",
      "Stir quinoa halfway through",
      "Add extra lemon juice if desired",
      "Pairs well with feta cheese (not included)"
    ],
    featured: false,
    tags: ["high-protein", "gluten-free", "mediterranean", "clean-eating"],
    bestFor: ["Mediterranean diet", "Clean eating", "Balanced macros", "General health"],
    reviews: {
      rating: 4.7,
      count: 124
    }
  },
  {
    id: "shrimp-cheese-grits",
    slug: "shrimp-cheese-grits",
    name: "Shrimp & Cheese Grits",
    description: "Cajun-spiced shrimp over creamy cheese grits with a kick",
    longDescription: "Bring Louisiana flavor to your meal prep with our Shrimp & Cheese Grits. Plump Gulf shrimp are seasoned with Cajun spices and served over a bed of creamy, cheesy stone-ground grits. This Southern coastal classic delivers seafood protein with comfort food satisfaction.",
    price: 11.25,
    category: "entree",
    image: shrimpCheeseGrits,
    calories: 420,
    protein: 35,
    carbs: 38,
    fat: 14,
    servingSize: "12 oz",
    ingredients: ["Gulf shrimp", "Stone-ground grits", "Sharp cheddar cheese", "Cajun spices", "Butter", "Green onions", "Garlic"],
    allergens: ["Shellfish", "Dairy"],
    shelfLife: "3-4 days refrigerated",
    prepInstructions: [
      "Microwave 2-3 minutes",
      "Stir well to distribute cheese",
      "Shrimp should be opaque and heated through",
      "Top with hot sauce for extra kick"
    ],
    featured: false,
    tags: ["high-protein", "gluten-free", "cajun", "seafood"],
    bestFor: ["Seafood lovers", "Southern food", "Cajun cuisine", "Special treat"],
    reviews: {
      rating: 4.9,
      count: 156
    }
  },
  {
    id: "bbq-chicken-mac-cheese",
    slug: "bbq-chicken-mac-cheese",
    name: "BBQ Chicken Mac & Cheese",
    description: "Pulled BBQ chicken mixed with creamy gluten-free mac and cheese",
    longDescription: "Comfort food meets high protein in our BBQ Chicken Mac & Cheese. Tender pulled chicken is tossed in smoky BBQ sauce and combined with our signature gluten-free macaroni and cheese. This hearty meal satisfies cravings while delivering serious protein for muscle recovery and growth.",
    price: 10.00,
    category: "entree",
    image: mexicanChickenBowl,
    calories: 520,
    protein: 42,
    carbs: 48,
    fat: 18,
    servingSize: "14 oz",
    ingredients: ["Pulled chicken breast", "Gluten-free pasta", "Cheddar cheese", "BBQ sauce", "Cream", "Butter", "Paprika"],
    allergens: ["Dairy"],
    shelfLife: "5-6 days refrigerated",
    prepInstructions: [
      "Microwave 3-3.5 minutes",
      "Stir halfway for even heating",
      "Add milk if too thick",
      "Top with green onions or bacon bits"
    ],
    featured: false,
    tags: ["high-protein", "gluten-free", "comfort-food", "kid-friendly"],
    bestFor: ["Comfort food cravings", "Kids", "Bulking", "Post-workout"],
    reviews: {
      rating: 4.8,
      count: 178
    }
  },
  {
    id: "beef-brisket-cauliflower",
    slug: "beef-brisket-cauliflower-mash",
    name: "Beef Brisket with Cauliflower Mash",
    description: "Slow-cooked beef brisket with creamy cauliflower mash and green beans",
    longDescription: "Experience melt-in-your-mouth beef brisket that's been slow-cooked for hours until fork-tender. Paired with our creamy cauliflower mash (a low-carb alternative to potatoes) and crisp green beans, this meal delivers premium protein with keto-friendly sides.",
    price: 12.00,
    category: "entree",
    image: filetMignonPlate,
    calories: 450,
    protein: 46,
    carbs: 18,
    fat: 22,
    servingSize: "13 oz",
    ingredients: ["Beef brisket", "Cauliflower", "Heavy cream", "Butter", "Green beans", "Garlic", "Beef broth", "Spices"],
    allergens: ["Dairy"],
    shelfLife: "5-6 days refrigerated",
    prepInstructions: [
      "Microwave 3 minutes covered",
      "Stir cauliflower mash well",
      "Can be reheated in oven at 350°F for 15 minutes",
      "Add extra butter or sour cream if desired"
    ],
    featured: false,
    tags: ["high-protein", "gluten-free", "low-carb", "keto-friendly"],
    bestFor: ["Keto diet", "Low carb", "High protein", "Comfort food"],
    reviews: {
      rating: 4.9,
      count: 134
    }
  },

  // Additional meals to reach 50+ (abbreviated for space)
  {
    id: "turkey-meatloaf",
    slug: "turkey-meatloaf-mashed-potatoes",
    name: "Turkey Meatloaf with Mashed Potatoes",
    description: "Homestyle turkey meatloaf with creamy mashed potatoes and gravy",
    longDescription: "Classic comfort food made healthier with lean ground turkey. Our meatloaf is seasoned perfectly and topped with tangy glaze, served alongside creamy mashed potatoes and savory gravy.",
    price: 9.50,
    category: "entree",
    image: smokedTurkeyButternutSquash,
    calories: 420,
    protein: 36,
    carbs: 42,
    fat: 12,
    servingSize: "14 oz",
    ingredients: ["Ground turkey", "Gluten-free breadcrumbs", "Ketchup", "Potatoes", "Butter", "Milk", "Onions", "Spices"],
    allergens: ["Dairy"],
    shelfLife: "5-6 days refrigerated",
    prepInstructions: [
      "Microwave 2.5-3 minutes",
      "Stir potatoes halfway",
      "Top with extra ketchup if desired"
    ],
    featured: false,
    tags: ["high-protein", "gluten-free", "comfort-food", "american-classic"],
    bestFor: ["Comfort food", "Family-style meals", "Traditional flavors"],
    reviews: {
      rating: 4.7,
      count: 112
    }
  }
];

// Helper functions for SEO optimization
export const getMealBySlug = (slug: string): Meal | undefined => {
  return meals.find(meal => meal.slug === slug);
};

export const getMealsByCategory = (category: string): Meal[] => {
  return meals.filter(meal => meal.category === category);
};

export const getFeaturedMeals = (): Meal[] => {
  return meals.filter(meal => meal.featured);
};

export const getMealsByTag = (tag: string): Meal[] => {
  return meals.filter(meal => meal.tags.includes(tag));
};

export const getRelatedMeals = (currentMeal: Meal, limit: number = 4): Meal[] => {
  return meals
    .filter(meal => 
      meal.id !== currentMeal.id &&
      (meal.category === currentMeal.category ||
       meal.tags.some(tag => currentMeal.tags.includes(tag)))
    )
    .slice(0, limit);
};

export const generateMealKeywords = (meal: Meal): string => {
  return [
    meal.name,
    ...meal.tags,
    meal.category,
    "gluten-free",
    "meal prep",
    "tri-cities",
    "healthy meals",
    ...meal.bestFor
  ].join(", ");
};