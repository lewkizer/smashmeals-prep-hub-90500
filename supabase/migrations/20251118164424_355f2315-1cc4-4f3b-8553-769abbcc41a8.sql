-- Fix 1: Add constraint to prevent negative credit
ALTER TABLE customers 
ADD CONSTRAINT positive_credit CHECK (account_credit >= 0);

-- Fix 2: Create atomic credit application function with row-level locking
CREATE OR REPLACE FUNCTION public.apply_customer_credit(
  _customer_id uuid,
  _amount numeric,
  _order_id uuid
)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  _current_credit numeric;
BEGIN
  -- Lock row and get current credit
  SELECT account_credit INTO _current_credit
  FROM customers
  WHERE id = _customer_id
  FOR UPDATE;
  
  -- Check if sufficient credit
  IF _current_credit < _amount THEN
    RETURN false;
  END IF;
  
  -- Atomically update credit
  UPDATE customers
  SET account_credit = account_credit - _amount
  WHERE id = _customer_id;
  
  -- Record history
  INSERT INTO customer_credit_history (customer_id, amount, type, order_id)
  VALUES (_customer_id, -_amount, 'used', _order_id);
  
  RETURN true;
END;
$$;

-- Fix 3: Remove user INSERT policy to prevent credit manipulation
-- Users can only be created via the handle_new_customer trigger
DROP POLICY IF EXISTS "Users can insert own profile" ON customers;