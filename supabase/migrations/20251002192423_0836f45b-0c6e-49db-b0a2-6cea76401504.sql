-- Add featured_this_week column to products table
ALTER TABLE public.products 
ADD COLUMN featured_this_week boolean NOT NULL DEFAULT false;

-- Add an index for better query performance
CREATE INDEX idx_products_featured ON public.products(featured_this_week) WHERE featured_this_week = true;