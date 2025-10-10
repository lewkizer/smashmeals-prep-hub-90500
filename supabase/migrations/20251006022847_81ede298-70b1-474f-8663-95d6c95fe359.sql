-- Create blog_posts table
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT NOT NULL,
  author TEXT DEFAULT 'SmashMeals Team',
  published_date TIMESTAMP WITH TIME ZONE DEFAULT now(),
  featured_image_url TEXT,
  reading_time INTEGER,
  tags TEXT[],
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "Blog posts are viewable by everyone" 
ON public.blog_posts 
FOR SELECT 
USING (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_blog_posts_updated_at
BEFORE UPDATE ON public.blog_posts
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert the rewritten blog post focused on customer love
INSERT INTO public.blog_posts (title, slug, excerpt, content, reading_time, tags)
VALUES (
  'SmashMeals: Gluten Free Meal Prep That Gets Hired in 3 Seconds',
  'smashmeals-gluten-free-meal-prep-that-gets-hired-in-3-seconds',
  'Discover why customers can''t stop raving about our delicious, gluten-free meals that make healthy eating effortless and enjoyable.',
  '<h2>Why Our Customers Fall in Love at First Bite</h2>
<p>At SmashMeals, we hear it all the time: "I can''t believe this is healthy!" Our customers don''t just tolerate our meals—they genuinely look forward to them. That''s because we''ve cracked the code on making gluten-free meal prep that actually tastes amazing.</p>

<h2>Real People, Real Love</h2>
<p>Our 5-star reviews tell the story better than we ever could. Busy professionals who thought they''d never enjoy meal prep. Athletes who need fuel that performs. Families managing gluten sensitivities who finally found food everyone loves.</p>

<p>"I used to dread meal prep," says one long-time customer. "Now I actually get excited when my SmashMeals order arrives. The flavors are incredible, and I love that I can trust every single ingredient."</p>

<h2>The Difference You Can Taste</h2>
<p>What makes our customers keep coming back week after week? It starts with our 100% gluten-free kitchen—no cross-contamination, no compromises. But it''s our commitment to flavor that really sets us apart.</p>

<p>We don''t make "diet food." We make delicious food that happens to be nutritious. Our Arroz con Pollo has the perfect spice blend. Our Baked Salmon is restaurant-quality. Our BBQ Chicken Mac & Cheese? People can''t believe it''s gluten-free.</p>

<h2>8+ Years of Serving the Tri-Cities</h2>
<p>We''ve been part of this community for over 8 years, and we''ve built our reputation one satisfied customer at a time. ETSU athletes trust us to fuel their performance. Busy families rely on us for stress-free dinners. Health-conscious individuals count on us for meals that support their goals.</p>

<h2>More Than Just Convenience</h2>
<p>Sure, our customers love the time they save. No shopping, no prep, no cleanup—just heat and eat. But what they really love is how our meals make them feel. Energized. Satisfied. Confident in their food choices.</p>

<p>"SmashMeals has changed my relationship with food," one customer shared. "I used to stress about every meal. Now I know I''m getting something delicious and nutritious, every single time."</p>

<h2>Try It and See Why They Love It</h2>
<p>The best way to understand why our customers are so passionate about SmashMeals? Experience it yourself. Check out this week''s menu and discover why people across the Tri-Cities trust us for their meal prep needs.</p>

<p>Join the SmashMeals family today and see why we get hired in 3 seconds—because when something''s this good, the decision is easy.</p>',
  5,
  ARRAY['customer stories', 'gluten-free', 'meal prep', 'testimonials']
);