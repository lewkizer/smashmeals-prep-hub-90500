-- Fix customer credit history RLS to allow customers to record their own credit usage
-- This fixes the critical bug where checkout fails when customers try to use account credit

CREATE POLICY "Users can insert own credit history"
ON customer_credit_history FOR INSERT
WITH CHECK (
  customer_id = auth.uid()
  AND type IN ('used', 'earned')  -- Only allow valid transaction types
  AND amount <= 0  -- Only allow deductions/usage, not arbitrary credit additions
);