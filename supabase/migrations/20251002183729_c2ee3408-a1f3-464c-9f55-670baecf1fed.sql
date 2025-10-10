-- Clear existing sample data
DELETE FROM public.products;

-- Add comprehensive product catalog across all categories
INSERT INTO public.products (name, description, image_url, calories, protein, carbs, fat, price, category) VALUES
-- BREAKFAST ITEMS
('Baked Cheesy Egg Whites with Turkey Bacon', 'Fluffy baked egg whites with melted cheese and crispy turkey bacon', '/assets/meal-1.jpg', 320, 35, 8, 15, 9.99, 'breakfast'),
('Baked Cheesy Egg Whites with Pork Bacon', 'Fluffy baked egg whites with melted cheese and crispy pork bacon', '/assets/meal-1.jpg', 340, 32, 8, 18, 9.99, 'breakfast'),
('Berry Oatmeal Bake', 'Hearty oatmeal baked with mixed berries and a touch of honey', '/assets/meal-2.jpg', 380, 12, 58, 10, 8.99, 'breakfast'),
('Bacon Egg and Cheese Casserole', 'Classic breakfast casserole with eggs, bacon, and melted cheese', '/assets/meal-3.jpg', 420, 28, 15, 26, 10.99, 'breakfast'),
('Breakfast Enchilada Casserole', 'Ham, cheese, cream, eggs, and corn tortillas in a delicious casserole', '/assets/meal-4.jpg', 450, 32, 35, 20, 11.99, 'breakfast'),
('Santa Fe Breakfast Bowl with Pork Sausage', 'Southwestern-style breakfast with sausage, eggs, and salsa', '/assets/meal-1.jpg', 480, 35, 28, 24, 10.99, 'breakfast'),
('Sausage, Egg White and Cheddar Bake', 'Protein-packed bake with sausage, egg whites, and sharp cheddar', '/assets/meal-2.jpg', 390, 40, 12, 20, 10.99, 'breakfast'),
('Sweet Potato Hash with Fried Eggs', 'Roasted sweet potato hash topped with perfectly fried eggs', '/assets/meal-3.jpg', 420, 18, 48, 18, 10.99, 'breakfast'),
('Blueberry Pancakes with Turkey Bacon', 'Fluffy gluten-free blueberry pancakes with turkey bacon', '/assets/meal-4.jpg', 440, 22, 55, 14, 10.99, 'breakfast'),
('Pumpkin Pancakes with Pork Bacon', 'Seasonal pumpkin pancakes with crispy pork bacon', '/assets/meal-1.jpg', 460, 20, 58, 16, 10.99, 'breakfast'),

-- ENTREES - CHICKEN
('Buffalo Chicken Alfredo Bake', 'Spicy buffalo chicken in creamy alfredo sauce', '/assets/meal-2.jpg', 520, 45, 32, 22, 13.99, 'entree'),
('Chicken Burrito Bowl with Jasmine Rice', 'Grilled chicken with rice, beans, salsa, and toppings', '/assets/meal-3.jpg', 480, 42, 52, 14, 12.99, 'entree'),
('Chicken Fajita with Cauliflower Rice', 'Sizzling chicken fajitas served over cauliflower rice', '/assets/meal-4.jpg', 380, 40, 22, 15, 12.99, 'entree'),
('Slow Cooked Spiced Butter Chicken with Jasmine Rice', 'Rich, creamy Indian-inspired butter chicken', '/assets/meal-1.jpg', 550, 38, 48, 24, 14.99, 'entree'),
('Honey Garlic Cashew Chicken with Jasmine Rice', 'Sweet and savory chicken with crunchy cashews', '/assets/meal-2.jpg', 520, 42, 55, 18, 13.99, 'entree'),
('Salsa Chicken with Jasmine Rice', 'Tender chicken smothered in fresh salsa', '/assets/meal-3.jpg', 440, 40, 48, 12, 11.99, 'entree'),
('Coconut Curry Shrimp with Jasmine Rice', 'Creamy coconut curry with tender shrimp', '/assets/meal-4.jpg', 490, 35, 52, 18, 15.99, 'entree'),
('Smoked Chicken Breast with Whole 30 Broccoli Salad', 'Perfectly smoked chicken with crunchy broccoli salad', '/assets/meal-1.jpg', 380, 45, 18, 14, 13.99, 'entree'),

-- ENTREES - BEEF
('Grilled Sirloin with Steamed Broccoli and Jasmine Rice', 'Premium sirloin with rice and fresh broccoli', '/assets/meal-2.jpg', 520, 45, 42, 18, 15.99, 'entree'),
('Korean Beef Bowl with Jasmine Rice', 'Sweet and spicy Korean-style beef bowl', '/assets/meal-3.jpg', 540, 42, 58, 20, 14.99, 'entree'),
('Stuffed Bell Peppers', 'Bell peppers stuffed with seasoned ground beef and rice', '/assets/meal-4.jpg', 420, 32, 38, 16, 12.99, 'entree'),
('Italian Meatloaf with Steamed Broccoli', 'Savory Italian-seasoned meatloaf with vegetables', '/assets/meal-1.jpg', 450, 38, 22, 22, 13.99, 'entree'),
('Beef Brisket with Loaded Cheesy Cauliflower', 'Tender smoked brisket with creamy cauliflower', '/assets/meal-2.jpg', 580, 48, 24, 32, 16.99, 'entree'),

-- ENTREES - PORK
('Asian Pulled Pork Bowl', 'Slow-cooked Asian-spiced pulled pork', '/assets/meal-3.jpg', 480, 42, 35, 20, 13.99, 'entree'),
('Pulled Pork Stuffed Sweet Potato', 'Sweet potato loaded with tender pulled pork', '/assets/meal-4.jpg', 520, 38, 52, 18, 12.99, 'entree'),
('Smoked Pork Loin with Asparagus and Jasmine Rice', 'Tender pork loin with asparagus and rice', '/assets/meal-1.jpg', 490, 44, 42, 16, 14.99, 'entree'),

-- VEGETARIAN
('Vegetarian Stuffed Pepper', 'Bell pepper stuffed with quinoa, beans, and vegetables', '/assets/meal-2.jpg', 380, 18, 52, 12, 11.99, 'entree'),
('Vegetarian Lasagna Bake', 'Gluten-free high protein noodles with vegetables and cheese', '/assets/meal-3.jpg', 450, 22, 48, 18, 12.99, 'entree'),
('Veggie Taco Bowl', 'Plant-based taco bowl loaded with fresh vegetables', '/assets/meal-4.jpg', 360, 15, 48, 14, 10.99, 'entree'),

-- SNACKS
('Buffalo Seasoned Popcorn', 'Spicy buffalo flavored popcorn popped in coconut oil', '/assets/meal-1.jpg', 140, 3, 18, 6, 4.99, 'snack'),
('Smash Bars', 'House-made protein bars with chocolate and nuts', '/assets/meal-2.jpg', 220, 12, 24, 8, 5.99, 'snack'),
('Paleo Brownies', 'Rich, fudgy gluten-free brownies', '/assets/meal-3.jpg', 180, 4, 22, 9, 5.99, 'snack'),
('Trail Mix and Sharp Cheddar', 'House mix of nuts and cheese for a protein boost', '/assets/meal-4.jpg', 280, 14, 16, 18, 6.99, 'snack'),
('Rice Krispy Treats', 'Classic treats made with coconut oil and peanut butter', '/assets/meal-1.jpg', 190, 4, 28, 7, 4.99, 'snack'),
('Chocolate Chip Cookie', 'Gluten-free chocolate chip cookie', '/assets/meal-2.jpg', 160, 3, 20, 8, 3.99, 'snack'),

-- SIDES
('Steamed Jasmine Rice', 'Fluffy steamed jasmine rice (4oz serving)', '/assets/meal-3.jpg', 180, 4, 40, 0, 3.99, 'side'),
('Steamed Broccoli', 'Fresh steamed broccoli (4oz serving)', '/assets/meal-4.jpg', 40, 3, 7, 0, 3.99, 'side'),
('Cauliflower Rice', 'Low-carb cauliflower rice (4oz serving)', '/assets/meal-1.jpg', 30, 2, 5, 0, 4.99, 'side'),
('Mashed Sweet Potatoes', 'Creamy mashed sweet potatoes (5oz serving)', '/assets/meal-2.jpg', 140, 2, 32, 0, 4.99, 'side'),
('Roasted Brussels Sprouts', 'Caramelized roasted brussels sprouts', '/assets/meal-3.jpg', 80, 4, 12, 2, 4.99, 'side'),

-- PERFORMANCE/HIGH PROTEIN
('Grilled Chicken, Quinoa, Steamed Mixed Veggies', 'High-protein performance meal with lean chicken', '/assets/meal-4.jpg', 520, 55, 48, 10, 14.99, 'entree'),
('Grilled Sirloin Performance Meal', 'Premium sirloin with rice and vegetables', '/assets/meal-1.jpg', 580, 52, 45, 18, 16.99, 'entree'),
('Shrimp Power Bowl', 'Protein-packed shrimp bowl with quinoa and vegetables', '/assets/meal-2.jpg', 450, 48, 40, 12, 15.99, 'entree'),
('Buffalo Sweet Potato Performance Meal', 'Buffalo chicken over sweet potato', '/assets/meal-3.jpg', 490, 45, 52, 14, 13.99, 'entree'),

-- FAMILY MEALS
('Smoked Turkey Platter (feeds 6)', 'Whole smoked turkey perfect for family gatherings', '/assets/meal-4.jpg', 2400, 280, 0, 80, 89.99, 'family'),
('Sweet Potato Casserole (feeds 12)', 'Traditional sweet potato casserole', '/assets/meal-1.jpg', 3600, 40, 480, 120, 49.99, 'family'),
('Macaroni and Cheese: Quart', 'Creamy gluten-free mac and cheese (serves 4-6)', '/assets/meal-2.jpg', 1200, 48, 140, 48, 29.99, 'family');
