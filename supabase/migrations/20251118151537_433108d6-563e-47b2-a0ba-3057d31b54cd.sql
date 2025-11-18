-- Create table for weekly video pages
CREATE TABLE public.video_pages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  sunday_date DATE NOT NULL UNIQUE,
  title TEXT NOT NULL,
  video_url TEXT NOT NULL,
  description TEXT,
  slug TEXT NOT NULL UNIQUE,
  is_published BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.video_pages ENABLE ROW LEVEL SECURITY;

-- Anyone can view published video pages
CREATE POLICY "Published video pages are viewable by everyone"
ON public.video_pages
FOR SELECT
USING (is_published = true OR has_role(auth.uid(), 'admin'::app_role));

-- Only admins can insert video pages
CREATE POLICY "Only admins can insert video pages"
ON public.video_pages
FOR INSERT
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- Only admins can update video pages
CREATE POLICY "Only admins can update video pages"
ON public.video_pages
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Only admins can delete video pages
CREATE POLICY "Only admins can delete video pages"
ON public.video_pages
FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_video_pages_updated_at
BEFORE UPDATE ON public.video_pages
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create index on sunday_date for faster queries
CREATE INDEX idx_video_pages_sunday_date ON public.video_pages(sunday_date DESC);