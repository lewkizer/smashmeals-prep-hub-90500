import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";

type Order = Database['public']['Tables']['orders']['Row'];
type OrderItem = Database['public']['Tables']['order_items']['Row'];

export const useCustomerOrders = (customerId?: string) => {
  return useQuery<Order[]>({
    queryKey: ["customer-orders", customerId],
    queryFn: async () => {
      if (!customerId) return [];

      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .eq("customer_id", customerId)
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data;
    },
    enabled: !!customerId,
  });
};

export const useOrderItems = (orderId: string) => {
  return useQuery<(OrderItem & { product: Database['public']['Tables']['products']['Row'] })[]>({
    queryKey: ["order-items", orderId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("order_items")
        .select(`
          *,
          product:products(*)
        `)
        .eq("order_id", orderId);

      if (error) throw error;
      return data as any;
    },
    enabled: !!orderId,
  });
};
