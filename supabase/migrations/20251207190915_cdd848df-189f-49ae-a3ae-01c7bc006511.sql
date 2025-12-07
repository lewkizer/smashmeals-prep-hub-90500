-- Create videos storage bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit)
VALUES ('videos', 'videos', true, 104857600);  -- 100MB limit

-- Allow public read access to videos
CREATE POLICY "Videos are publicly accessible"
ON storage.objects FOR SELECT
USING (bucket_id = 'videos');

-- Only admins can upload videos
CREATE POLICY "Only admins can upload videos"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'videos' 
  AND public.has_role(auth.uid(), 'admin')
);

-- Only admins can update videos
CREATE POLICY "Only admins can update videos"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'videos' 
  AND public.has_role(auth.uid(), 'admin')
);

-- Only admins can delete videos
CREATE POLICY "Only admins can delete videos"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'videos' 
  AND public.has_role(auth.uid(), 'admin')
);