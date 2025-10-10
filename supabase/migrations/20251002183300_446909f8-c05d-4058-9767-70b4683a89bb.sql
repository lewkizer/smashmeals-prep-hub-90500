-- Create products table for meal prep items
CREATE TABLE public.products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  calories INTEGER NOT NULL,
  protein INTEGER NOT NULL,
  carbs INTEGER NOT NULL,
  fat INTEGER NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  category TEXT NOT NULL DEFAULT 'entree',
  is_available BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (anyone can view products)
CREATE POLICY "Products are viewable by everyone" 
ON public.products 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_products_updated_at
BEFORE UPDATE ON public.products
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample meal data
INSERT INTO public.products (name, description, image_url, calories, protein, carbs, fat, price, category) VALUES
('Grilled Chicken Power Bowl', 'Tender grilled chicken breast with roasted broccoli, sweet potato, and quinoa. A perfect balance of protein and complex carbs.', '/assets/meal-1.jpg', 450, 42, 38, 12, 12.99, 'entree'),
('Herb-Crusted Salmon', 'Wild-caught salmon with herb crust, served with asparagus, quinoa, and fresh lemon. Rich in omega-3s.', '/assets/meal-2.jpg', 520, 38, 32, 22, 14.99, 'entree'),
('Turkey Meatballs Marinara', 'House-made turkey meatballs in savory marinara sauce with zucchini noodles. Comfort food, guilt-free.', '/assets/meal-3.jpg', 410, 35, 30, 15, 11.99, 'entree'),
('Beef Stir-Fry', 'Grass-fed beef strips with colorful bell peppers, broccoli, and cauliflower rice. Asian-inspired and delicious.', '/assets/meal-4.jpg', 480, 40, 35, 18, 13.99, 'entree');