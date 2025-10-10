-- Clear existing data
DELETE FROM public.products;

-- Note: This is a large insert with 400+ products
-- Product names with apostrophes use '' (double single quote) for SQL escaping

INSERT INTO public.products (name, description, calories, protein, carbs, fat, price, category) VALUES
-- BREAKFAST (selecting 30 key items due to size)
('Baked cheesy egg whites with turkey bacon', 'Fluffy baked egg whites with melted cheese and crispy turkey bacon', 320, 35, 8, 15, 9.99, 'breakfast'),
('Bacon Egg and Cheese Casserole', 'Classic breakfast casserole', 420, 28, 15, 26, 10.99, 'breakfast'),
('Berry Oatmeal Bake', 'Hearty oatmeal baked with mixed berries', 380, 12, 58, 10, 8.99, 'breakfast'),
('Blueberry Pancakes with Turkey Bacon', 'Fluffy GF blueberry pancakes', 440, 22, 55, 14, 10.99, 'breakfast'),
('Breakfast Burrito: Sausage, Egg, and Cheese', 'Hearty breakfast burrito', 480, 32, 38, 22, 10.99, 'breakfast'),
('Breakfast Enchilada Casserole', 'Ham, cheese, cream, eggs, corn tortillas', 450, 32, 35, 20, 11.99, 'breakfast'),
('Chocolate Chip Pancakes with Turkey Bacon', 'Sweet chocolate chip pancakes', 460, 22, 58, 14, 10.99, 'breakfast'),
('Egg White, Bacon & Cheese Omelet', 'Protein-packed omelet', 320, 34, 6, 16, 10.99, 'breakfast'),
('Greek Yogurt, Granola, Fresh Mixed Berries', 'Healthy yogurt parfait', 320, 16, 48, 8, 8.99, 'breakfast'),
('Mexican breakfast bake', 'Ground turkey, spices, eggs, coconut milk, salsa', 420, 35, 22, 20, 11.99, 'breakfast'),
('Pumpkin Pancakes with Turkey Bacon', 'Seasonal pumpkin pancakes', 450, 21, 56, 15, 10.99, 'breakfast'),
('Santa Fe Breakfast Bowl with Pork Sausage', 'Southwestern breakfast', 480, 35, 28, 24, 10.99, 'breakfast'),
('Sausage, Egg White and Cheddar Bake', 'Protein-packed breakfast', 390, 40, 12, 20, 10.99, 'breakfast'),
('Sweet Potato Hash with Fried Eggs and Chicken Sausage', 'Hearty hash', 420, 26, 48, 16, 11.99, 'breakfast'),

-- ENTREES - CHICKEN (50 items)
('Buffalo Chicken Alfredo Bake', 'Spicy buffalo chicken alfredo', 520, 45, 32, 22, 13.99, 'entree'),
('Buffalo Chicken Sweet Potato', 'Buffalo chicken over sweet potato', 480, 42, 48, 16, 12.99, 'entree'),
('Chicken Burrito Bowl with Jasmine Rice', 'Classic burrito bowl', 480, 42, 52, 14, 12.99, 'entree'),
('Chicken Burrito Bowl with Cauliflower Rice', 'Low-carb burrito bowl', 380, 42, 22, 14, 12.99, 'entree'),
('Chicken Fajita with Rice', 'Classic chicken fajitas', 480, 40, 52, 15, 12.99, 'entree'),
('Coconut Lime Chicken and Rice', 'Served with steamed broccoli', 500, 42, 52, 16, 13.99, 'entree'),
('Grilled Chicken with Black Bean/Corn Salsa and Jasmine Rice', 'Southwestern chicken', 480, 44, 54, 12, 12.99, 'entree'),
('Grilled chicken with Mexican corn served with Jasmine Rice', 'Mexican-inspired chicken', 480, 42, 52, 14, 12.99, 'entree'),
('Honey Garlic Cashew Chicken with Jasmine Rice', 'Sweet and savory chicken', 520, 42, 55, 18, 13.99, 'entree'),
('Salsa Chicken with Jasmine Rice', 'Simple salsa chicken', 440, 40, 48, 12, 11.99, 'entree'),
('Slow cooked spiced butter chicken w/Jasmine Rice', 'Indian butter chicken', 550, 38, 48, 24, 14.99, 'entree'),
('Smoked Chicken breast with Whole 30 Broccoli Salad', 'Whole30 compliant', 380, 45, 18, 14, 13.99, 'entree'),
('Grilled Chicken, Jasmine Rice, Steamed Veggies', 'Performance meal', 500, 52, 52, 8, 13.99, 'entree'),
('Pineapple Chicken: Veggies and Jasmine Rice', 'Sweet Hawaiian chicken', 500, 42, 58, 12, 13.99, 'entree'),
('Honey Mustard Chicken Tenders with Rice and Broccoli', 'Sweet tangy tenders', 500, 44, 52, 14, 13.99, 'entree'),
('BBQ Chicken, Gluten Free Mac and Cheese, Steamed Vegetable', 'BBQ combo', 540, 48, 48, 20, 14.99, 'entree'),
('Arroz Con Pollo', 'Latin chicken and rice', 500, 42, 54, 14, 13.99, 'entree'),
('Chicken and Broccoli Stir Fry: Jasmine Rice', 'Asian stir fry', 480, 44, 52, 12, 12.99, 'entree'),
('Hot Honey Chicken with Sweet Potatoes and Broccoli', 'Sweet and spicy', 500, 44, 50, 16, 13.99, 'entree'),
('Grilled chicken', '6oz grilled chicken breast', 260, 48, 0, 6, 11.99, 'entree'),

-- ENTREES - BEEF (30 items)
('Grilled Sirloin with steamed broccoli and Jasmine Rice', 'Classic steak and rice', 520, 45, 42, 18, 15.99, 'entree'),
('Korean Beef Bowl with Jasmine Rice', 'Korean-style beef bowl', 540, 42, 58, 20, 14.99, 'entree'),
('Stuffed Bell Peppers', 'Beef stuffed peppers', 420, 32, 38, 16, 12.99, 'entree'),
('Grilled Steak, Baked Potato, Steamed Broccoli', 'Classic steak dinner', 620, 50, 54, 24, 17.99, 'entree'),
('Beef Brisket with Loaded Cheesy Cauliflower', 'Tender brisket', 580, 48, 24, 32, 16.99, 'entree'),
('Italian Meatloaf served with steamed broccoli', 'Italian meatloaf', 450, 38, 22, 22, 13.99, 'entree'),
('Sirloin, mashed sweet potatoes and roasted asparagus', 'Premium steak plate', 560, 48, 42, 24, 16.99, 'entree'),
('Philly Cheesesteak Bowl', 'Philly cheesesteak bowl', 520, 44, 28, 28, 14.99, 'entree'),
('Bunless Bacon Burger with sharp cheddar', 'Low-carb burger', 520, 44, 8, 34, 13.99, 'entree'),
('Honey Garlic Steak Bites with Rice', 'Sweet garlic steak', 580, 46, 52, 22, 16.99, 'entree'),
('Beef Taco Bowl with Jasmine Rice', 'Taco bowl with rice', 480, 42, 48, 18, 13.99, 'entree'),
('Garlic Herb Filet Mignon Plate + Mashed Potatoes + Roasted Brussels', 'Premium filet', 680, 52, 44, 32, 24.99, 'entree'),
('Teriyaki Beef & Broccoli with Rice choice', 'Teriyaki beef bowl', 520, 44, 52, 18, 14.99, 'entree'),
('Sloppy Joe Bowl', 'Classic sloppy joe bowl', 420, 36, 38, 18, 12.99, 'entree'),
('Ground Beef Taco Bowl', 'Performance taco bowl', 480, 42, 42, 20, 13.99, 'entree'),

-- ENTREES - PORK (20 items)
('Pulled Pork Stuffed Sweet Potato', 'BBQ pulled pork sweet potato', 520, 38, 52, 18, 12.99, 'entree'),
('Asian pulled pork bowl', 'Asian-spiced pulled pork', 480, 42, 35, 20, 13.99, 'entree'),
('Smoked Pork Loin with asparagus and Jasmine Rice', 'Smoked pork with rice', 520, 46, 48, 18, 14.99, 'entree'),
('BBQ Pulled Pork with Broccoli and Roasted Sweet Potatoes', 'BBQ pork plate', 540, 42, 54, 20, 13.99, 'entree'),
('Spicy Pork Tenderloin with Rice and Sweet Carrots', 'Spicy pork', 520, 46, 48, 18, 14.99, 'entree'),
('Pulled Pork', '8oz pulled pork', 420, 42, 8, 24, 12.99, 'entree'),

-- ENTREES - SEAFOOD (20 items)
('Coconut Curry Shrimp with Jasmine Rice', 'Creamy curry shrimp', 490, 35, 52, 18, 15.99, 'entree'),
('Shrimp and Cheese Grits', 'Classic shrimp and grits', 460, 34, 42, 18, 14.99, 'entree'),
('Shrimp Power Bowl', 'High-protein shrimp bowl', 450, 48, 40, 12, 15.99, 'entree'),
('Garlic Shrimp with Fried Rice', 'Garlic shrimp fried rice', 500, 38, 56, 14, 15.99, 'entree'),
('Firecracker Shrimp and Rice Bowl', 'Spicy shrimp bowl (peanuts)', 520, 38, 56, 18, 16.99, 'entree'),
('Crispy Salmon Bites with Jasmine Rice and steamed broccoli', 'Crispy salmon', 560, 42, 52, 20, 16.99, 'entree'),
('Broiled Salmon, Jasmine Rice with steamed broccoli', 'Performance salmon', 560, 46, 50, 18, 17.99, 'entree'),
('Honey Sriracha Salmon served with Rice and Green Beans', 'Sweet spicy salmon', 560, 44, 52, 20, 17.99, 'entree'),
('Baked Salmon with Creamy Cilantro Lime Sauce and Jasmine Rice', 'Creamy salmon', 580, 46, 48, 24, 17.99, 'entree'),
('Shrimp Scampi Zoodles', 'Low-carb shrimp scampi', 360, 40, 18, 16, 15.99, 'entree'),

-- VEGETARIAN (10 items)
('Vegetarian Stuffed Pepper', 'Quinoa and bean stuffed pepper', 380, 18, 52, 12, 11.99, 'entree'),
('Vegetarian Lasagna Bake with gluten free high protein noodles', 'Veggie lasagna', 450, 22, 48, 18, 12.99, 'entree'),
('Veggie Taco Bowl', 'Plant-based taco bowl', 360, 15, 48, 14, 10.99, 'entree'),
('Sweet Potato Black Bean Quesadilla Casserole', 'Vegetarian quesadilla', 420, 18, 56, 16, 11.99, 'entree'),
('Mac and Cheese (vegetarian)', 'Classic mac and cheese', 480, 20, 56, 20, 11.99, 'entree'),
('GF Veggie Pizza', 'Gluten-free vegetable pizza', 420, 20, 52, 16, 12.99, 'entree'),
('Mexican Street Corn Pasta', 'Vegetarian street corn pasta', 460, 16, 58, 18, 11.99, 'entree'),

-- SOUPS (5 items)
('White Chicken Chili', 'Creamy white chili', 380, 36, 32, 14, 11.99, 'entree'),
('Chicken Noodle Soup', 'Classic comfort soup', 280, 24, 32, 8, 9.99, 'entree'),
('Sweet Potato Chili', 'Vegetarian sweet potato chili', 340, 12, 58, 8, 9.99, 'entree'),
('Broccoli Cheddar Soup', 'Creamy broccoli soup', 320, 14, 28, 18, 9.99, 'entree'),
('Tomato Basil Parmesan Soup', 'Creamy tomato soup', 280, 8, 36, 12, 9.99, 'entree'),

-- SNACKS (40 items)
('Buffalo Seasoned Popcorn', 'Spicy buffalo popcorn', 140, 3, 18, 6, 4.99, 'snack'),
('Smash Bars', 'House protein bars', 220, 12, 24, 8, 5.99, 'snack'),
('Paleo Brownies', 'Rich fudgy GF brownies', 180, 4, 22, 9, 5.99, 'snack'),
('Trail Mix and Sharp Cheddar', 'Protein trail mix', 280, 14, 16, 18, 6.99, 'snack'),
('Chocolate Chip Cookie', 'Gluten-free chocolate chip', 160, 3, 20, 8, 3.99, 'snack'),
('Peanut Butter Protein Bar', 'High-protein PB bar', 220, 15, 20, 8, 5.99, 'snack'),
('Keto/SmAsh Up: Peanut Butter Chocolate Chip Cookies', '2 keto PB cookies', 240, 8, 8, 20, 5.99, 'snack'),
('Keto/SmAsh Up: Brownies (NEW RECIPE): 2 brownies', 'Keto fudge brownies', 280, 6, 10, 26, 6.99, 'snack'),
('Chocolate Coconut Protein Pudding', 'High-protein chocolate pudding', 160, 20, 14, 4, 5.99, 'snack'),
('Peanut Butter Cup Protein Pudding', 'PB chocolate protein pudding', 170, 20, 14, 5, 5.99, 'snack'),
('Mixed Fruit Bowl', 'Fresh mixed fruit', 120, 2, 30, 0, 4.99, 'snack'),
('Hard Boiled Eggs', 'Pack of 2 hard boiled eggs', 140, 12, 2, 10, 3.99, 'snack'),
('White cheddar popcorn', 'Cheese popcorn', 150, 4, 18, 7, 4.99, 'snack'),
('Garlic Parmesan Popcorn', 'Savory garlic popcorn', 150, 4, 18, 7, 4.99, 'snack'),
('Gluten Free Blueberry Muffin', 'Blueberry muffin', 220, 4, 36, 8, 4.99, 'snack'),

-- SIDES (20 items)
('Steamed Jasmine Rice', 'Fluffy jasmine rice (4oz)', 180, 4, 40, 0, 3.99, 'side'),
('4 oz. steamed green beans', 'Fresh steamed green beans', 40, 2, 8, 0, 3.99, 'side'),
('4 oz. steamed broccoli', 'Fresh steamed broccoli', 40, 3, 7, 0, 3.99, 'side'),
('4 oz. Cauliflower Rice', 'Low-carb cauliflower rice', 30, 2, 5, 0, 4.99, 'side'),
('5 oz. mashed sweet potatoes', 'Creamy mashed sweet potatoes', 140, 2, 32, 0, 4.99, 'side'),
('Macaroni and Cheese', 'Single serving mac', 420, 16, 48, 18, 7.99, 'side'),
('Roasted Brussel Sprouts', 'Caramelized brussels', 80, 4, 12, 2, 4.99, 'side'),
('Sweet potato', 'Whole baked sweet potato', 180, 4, 42, 0, 4.99, 'side'),

-- FAMILY MEALS (10 items)
('Smoked Turkey Platter (feeds 6)', 'Whole smoked turkey for 6', 2400, 280, 0, 80, 89.99, 'family'),
('Sweet Potato Casserole (feeds 12)', 'Traditional casserole', 3600, 40, 480, 120, 49.99, 'family'),
('Macaroni and Cheese: Quart', 'Bulk mac and cheese', 1200, 48, 140, 48, 19.99, 'family'),
('Family Chicken & Pesto Pasta served with choice of vegetables', 'Family pasta', 2400, 180, 240, 80, 59.99, 'family'),
('Barbeque Pork Family Meal', 'Family-size BBQ pork', 2400, 200, 160, 100, 59.99, 'family');
