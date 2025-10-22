-- Remove the overly permissive SELECT policy on newsletter_subscribers
-- This policy allows anyone to read all subscriber emails and phone numbers
DROP POLICY IF EXISTS "Users can view their own subscription" ON newsletter_subscribers;