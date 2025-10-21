-- Temporarily allow INSERT on blog_posts for data population
CREATE POLICY "Allow temporary blog inserts"
ON public.blog_posts
FOR INSERT
WITH CHECK (true);