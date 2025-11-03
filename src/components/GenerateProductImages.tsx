import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import type { Database } from "@/integrations/supabase/types";

export const GenerateProductImages = () => {
  const navigate = useNavigate();
  const [isGenerating, setIsGenerating] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const queryClient = useQueryClient();

  useEffect(() => {
    // Check if user is authenticated
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAuthenticated(!!session);
    });
  }, []);

  const generateImages = async () => {
    if (!isAuthenticated) {
      toast.error("You must be logged in to generate images");
      navigate("/auth");
      return;
    }

    setIsGenerating(true);
    
    try {
      // Get products without images that are featured
      const { data: products, error } = await supabase
        .from("products")
        .select("*")
        .is("image_url", null)
        .eq("featured_this_week", true) as { data: Database['public']['Tables']['products']['Row'][] | null; error: any };

      if (error) throw error;

      if (!products || products.length === 0) {
        toast.info("All featured products already have images!");
        setIsGenerating(false);
        return;
      }

      toast.info(`Generating images for ${products.length} products...`);

      // Generate images for each product
      for (const product of products) {
        try {
          const { data, error: functionError } = await supabase.functions.invoke(
            "generate-product-images",
            {
              body: {
                productId: product.id,
                productName: product.name,
                description: product.description || "",
                category: product.category,
              },
            }
          );

          if (functionError) {
            console.error(`Error generating image for ${product.name}:`, functionError);
            toast.error(`Failed to generate image for ${product.name}`);
          } else {
            toast.success(`Generated image for ${product.name}`);
          }
        } catch (err) {
          console.error(`Error for ${product.name}:`, err);
        }
      }

      // Refresh the products list
      queryClient.invalidateQueries({ queryKey: ["featured-products"] });
      queryClient.invalidateQueries({ queryKey: ["products"] });
      
      toast.success("All images generated successfully!");
    } catch (error) {
      console.error("Error generating images:", error);
      toast.error("Failed to generate images");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Button
      onClick={generateImages}
      disabled={isGenerating}
      variant="outline"
      className="gap-2"
    >
      {isGenerating && <Loader2 className="h-4 w-4 animate-spin" />}
      {isGenerating ? "Generating Images..." : "Generate Product Images"}
    </Button>
  );
};
