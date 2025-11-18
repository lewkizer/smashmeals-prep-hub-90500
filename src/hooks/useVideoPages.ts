import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export interface VideoPage {
  id: string;
  sunday_date: string;
  title: string;
  video_url: string;
  description: string | null;
  slug: string;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export const useVideoPages = () => {
  return useQuery({
    queryKey: ["video-pages"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("video_pages")
        .select("*")
        .order("sunday_date", { ascending: false });

      if (error) throw error;
      return data as VideoPage[];
    },
  });
};

export const useVideoPage = (slug: string) => {
  return useQuery({
    queryKey: ["video-page", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("video_pages")
        .select("*")
        .eq("slug", slug)
        .maybeSingle();

      if (error) throw error;
      return data as VideoPage | null;
    },
  });
};

export const useCreateVideoPage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newPage: Omit<VideoPage, "id" | "created_at" | "updated_at">) => {
      const { data, error } = await supabase
        .from("video_pages")
        .insert(newPage)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["video-pages"] });
      toast.success("Video page created successfully!");
    },
    onError: (error: Error) => {
      toast.error(`Failed to create video page: ${error.message}`);
    },
  });
};

export const useUpdateVideoPage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, ...updates }: Partial<VideoPage> & { id: string }) => {
      const { data, error } = await supabase
        .from("video_pages")
        .update(updates)
        .eq("id", id)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["video-pages"] });
      toast.success("Video page updated successfully!");
    },
    onError: (error: Error) => {
      toast.error(`Failed to update video page: ${error.message}`);
    },
  });
};

export const useDeleteVideoPage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from("video_pages")
        .delete()
        .eq("id", id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["video-pages"] });
      toast.success("Video page deleted successfully!");
    },
    onError: (error: Error) => {
      toast.error(`Failed to delete video page: ${error.message}`);
    },
  });
};
