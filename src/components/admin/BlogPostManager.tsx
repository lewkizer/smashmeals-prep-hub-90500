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
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>{editingPost ? "Edit Blog Post" : "New Blog Post"}</CardTitle>
            <Button variant="ghost" size="sm" onClick={resetForm}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="Blog post title"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="slug">Slug *</Label>
              <Input
                id="slug"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="blog-post-slug"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="excerpt">Excerpt</Label>
            <Textarea
              id="excerpt"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Brief description for SEO and previews"
              rows={2}
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="content">Content * (Markdown supported)</Label>
              <Dialog open={showVideoDialog} onOpenChange={setShowVideoDialog}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Video className="h-4 w-4 mr-2" />
                    Insert Video
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Select Video to Embed</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-2">
                    {videos.length === 0 ? (
                      <p className="text-sm text-muted-foreground py-4">
                        No videos uploaded. Go to Video Uploads tab to upload videos first.
                      </p>
                    ) : (
                      videos.map((video) => (
                        <Button
                          key={video.name}
                          variant="outline"
                          className="w-full justify-start"
                          onClick={() => insertVideoEmbed(video.url)}
                        >
                          <Video className="h-4 w-4 mr-2" />
                          {video.name}
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
              rows={15}
              className="font-mono text-sm"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="author">Author</Label>
              <Input
                id="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Author name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="readingTime">Reading Time (min)</Label>
              <Input
                id="readingTime"
                type="number"
                value={readingTime}
                onChange={(e) => setReadingTime(e.target.value)}
                placeholder="5"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="featuredImage">Featured Image URL</Label>
              <Input
                id="featuredImage"
                value={featuredImageUrl}
                onChange={(e) => setFeaturedImageUrl(e.target.value)}
                placeholder="/assets/blog/image.jpg"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="tags">Tags (comma-separated)</Label>
            <Input
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="ETSU, Athletes, Meal Prep"
            />
          </div>

          <div className="flex gap-2 pt-4">
            <Button onClick={handleSave} disabled={saving}>
              {saving ? (
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <Save className="h-4 w-4 mr-2" />
              )}
              {editingPost ? "Update Post" : "Create Post"}
            </Button>
            <Button variant="outline" onClick={resetForm}>
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
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Blog Posts</CardTitle>
            <CardDescription>Manage your blog posts and embed videos</CardDescription>
          </div>
          <Button onClick={startNew}>
            <Plus className="h-4 w-4 mr-2" />
            New Post
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {posts.length === 0 ? (
          <p className="text-sm text-muted-foreground py-4">
            No blog posts yet. Create your first post above.
          </p>
        ) : (
          <div className="space-y-2">
            {posts.map((post) => (
              <div
                key={post.id}
                className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
              >
                <div className="min-w-0 flex-1">
                  <p className="font-medium truncate">{post.title}</p>
                  <p className="text-sm text-muted-foreground">/blog/{post.slug}</p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <Button variant="ghost" size="sm" onClick={() => startEdit(post)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDelete(post.id)}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
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
