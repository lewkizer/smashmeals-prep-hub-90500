import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";
import { Plus, Edit, Trash2, Video, Loader2, Save, X } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  author: string | null;
  featured_image_url: string | null;
  reading_time: number | null;
  tags: string[] | null;
  published_date: string | null;
}

interface UploadedVideo {
  name: string;
  url: string;
}

export default function BlogPostManager() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [saving, setSaving] = useState(false);
  const [videos, setVideos] = useState<UploadedVideo[]>([]);
  const [showVideoDialog, setShowVideoDialog] = useState(false);

  // Form state
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("SmashMeals Team");
  const [featuredImageUrl, setFeaturedImageUrl] = useState("");
  const [readingTime, setReadingTime] = useState("5");
  const [tags, setTags] = useState("");

  useEffect(() => {
    fetchPosts();
    fetchVideos();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error("Error fetching posts:", error);
      toast.error("Failed to load blog posts");
    } finally {
      setLoading(false);
    }
  };

  const fetchVideos = async () => {
    try {
      const { data, error } = await supabase.storage
        .from("videos")
        .list("", { limit: 100, sortBy: { column: "created_at", order: "desc" } });

      if (error) throw error;

      const videoList = (data || [])
        .filter((file) => file.name !== ".emptyFolderPlaceholder")
        .map((file) => ({
          name: file.name,
          url: supabase.storage.from("videos").getPublicUrl(file.name).data.publicUrl,
        }));

      setVideos(videoList);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  const resetForm = () => {
    setTitle("");
    setSlug("");
    setExcerpt("");
    setContent("");
    setAuthor("SmashMeals Team");
    setFeaturedImageUrl("");
    setReadingTime("5");
    setTags("");
    setEditingPost(null);
    setIsNew(false);
  };

  const startNew = () => {
    resetForm();
    setIsNew(true);
  };

  const startEdit = (post: BlogPost) => {
    setEditingPost(post);
    setTitle(post.title);
    setSlug(post.slug);
    setExcerpt(post.excerpt || "");
    setContent(post.content);
    setAuthor(post.author || "SmashMeals Team");
    setFeaturedImageUrl(post.featured_image_url || "");
    setReadingTime(post.reading_time?.toString() || "5");
    setTags(post.tags?.join(", ") || "");
    setIsNew(false);
  };

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleTitleChange = (value: string) => {
    setTitle(value);
    if (isNew) {
      setSlug(generateSlug(value));
    }
  };

  const insertVideoEmbed = (videoUrl: string) => {
    const videoEmbed = `\n\n<video src="${videoUrl}" controls style="width: 100%; max-width: 800px; border-radius: 8px;"></video>\n\n`;
    setContent((prev) => prev + videoEmbed);
    setShowVideoDialog(false);
    toast.success("Video embed added to content");
  };

  const handleSave = async () => {
    if (!title || !slug || !content) {
      toast.error("Title, slug, and content are required");
      return;
    }

    setSaving(true);

    try {
      const postData = {
        title,
        slug,
        excerpt: excerpt || null,
        content,
        author: author || null,
        featured_image_url: featuredImageUrl || null,
        reading_time: parseInt(readingTime) || null,
        tags: tags ? tags.split(",").map((t) => t.trim()) : null,
        published_date: new Date().toISOString(),
      };

      if (editingPost) {
        const { error } = await supabase
          .from("blog_posts")
          .update(postData)
          .eq("id", editingPost.id);

        if (error) throw error;
        toast.success("Blog post updated");
      } else {
        const { error } = await supabase.from("blog_posts").insert(postData);

        if (error) throw error;
        toast.success("Blog post created");
      }

      resetForm();
      fetchPosts();
    } catch (error: any) {
      console.error("Save error:", error);
      toast.error(error.message || "Failed to save blog post");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return;

    try {
      const { error } = await supabase.from("blog_posts").delete().eq("id", id);

      if (error) throw error;
      toast.success("Blog post deleted");
      fetchPosts();
    } catch (error: any) {
      console.error("Delete error:", error);
      toast.error(error.message || "Failed to delete post");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  // Show editor view
  if (isNew || editingPost) {
    return (
      <Card>
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg sm:text-xl">{editingPost ? "Edit Blog Post" : "New Blog Post"}</CardTitle>
            <Button variant="outline" size="icon" onClick={resetForm} className="h-10 w-10">
              <X className="h-5 w-5" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title" className="text-sm font-medium">Title *</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="Blog post title"
                className="h-12 text-base"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="slug" className="text-sm font-medium">Slug *</Label>
              <Input
                id="slug"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="blog-post-slug"
                className="h-12 text-base"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="excerpt" className="text-sm font-medium">Excerpt</Label>
            <Textarea
              id="excerpt"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Brief description for SEO and previews"
              rows={2}
              className="text-base min-h-[80px]"
            />
          </div>

          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <Label htmlFor="content" className="text-sm font-medium">Content * (Markdown)</Label>
              <Dialog open={showVideoDialog} onOpenChange={setShowVideoDialog}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="default" className="h-11 w-full sm:w-auto">
                    <Video className="h-5 w-5 mr-2" />
                    Insert Video
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto mx-4">
                  <DialogHeader>
                    <DialogTitle>Select Video to Embed</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-2 py-2">
                    {videos.length === 0 ? (
                      <p className="text-sm text-muted-foreground py-4 text-center">
                        No videos uploaded. Go to Video Uploads tab first.
                      </p>
                    ) : (
                      videos.map((video) => (
                        <Button
                          key={video.name}
                          variant="outline"
                          className="w-full justify-start h-12 text-left"
                          onClick={() => insertVideoEmbed(video.url)}
                        >
                          <Video className="h-5 w-5 mr-3 flex-shrink-0" />
                          <span className="truncate">{video.name}</span>
                        </Button>
                      ))
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your blog post content here... Use Markdown for formatting."
              rows={12}
              className="font-mono text-sm min-h-[250px]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="author" className="text-sm font-medium">Author</Label>
              <Input
                id="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Author name"
                className="h-12 text-base"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="readingTime" className="text-sm font-medium">Reading Time (min)</Label>
              <Input
                id="readingTime"
                type="number"
                value={readingTime}
                onChange={(e) => setReadingTime(e.target.value)}
                placeholder="5"
                className="h-12 text-base"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="featuredImage" className="text-sm font-medium">Featured Image URL</Label>
            <Input
              id="featuredImage"
              value={featuredImageUrl}
              onChange={(e) => setFeaturedImageUrl(e.target.value)}
              placeholder="/assets/blog/image.jpg"
              className="h-12 text-base"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="tags" className="text-sm font-medium">Tags (comma-separated)</Label>
            <Input
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="Athletes, Meal Prep, Performance Nutrition"
              className="h-12 text-base"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button onClick={handleSave} disabled={saving} className="h-12 text-base flex-1 sm:flex-none">
              {saving ? (
                <Loader2 className="h-5 w-5 mr-2 animate-spin" />
              ) : (
                <Save className="h-5 w-5 mr-2" />
              )}
              {editingPost ? "Update Post" : "Create Post"}
            </Button>
            <Button variant="outline" onClick={resetForm} className="h-12 text-base">
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Show list view
  return (
    <Card>
      <CardHeader className="pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <CardTitle className="text-lg sm:text-xl">Blog Posts</CardTitle>
            <CardDescription>Manage your blog posts and embed videos</CardDescription>
          </div>
          <Button onClick={startNew} className="h-12 sm:h-10 text-base w-full sm:w-auto">
            <Plus className="h-5 w-5 mr-2" />
            New Post
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {posts.length === 0 ? (
          <p className="text-sm text-muted-foreground py-4 text-center">
            No blog posts yet. Create your first post above.
          </p>
        ) : (
          <div className="space-y-2 max-h-[60vh] overflow-y-auto">
            {posts.map((post) => (
              <div
                key={post.id}
                className="flex items-center justify-between p-4 bg-muted/50 rounded-lg gap-3"
              >
                <div className="min-w-0 flex-1">
                  <p className="font-medium truncate text-base">{post.title}</p>
                  <p className="text-sm text-muted-foreground truncate">/blog/{post.slug}</p>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={() => startEdit(post)}
                    className="h-11 w-11 sm:h-10 sm:w-10"
                  >
                    <Edit className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleDelete(post.id)}
                    className="h-11 w-11 sm:h-10 sm:w-10 text-destructive hover:text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
