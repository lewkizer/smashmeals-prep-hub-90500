import { useState } from "react";
import { format } from "date-fns";
import { Calendar, Video, Eye, EyeOff, Trash2, Plus, QrCode, Copy, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useVideoPages, useCreateVideoPage, useUpdateVideoPage, useDeleteVideoPage } from "@/hooks/useVideoPages";
import { toast } from "sonner";
import QRCode from "react-qr-code";

export default function VideoPageManager() {
  const { data: videoPages, isLoading } = useVideoPages();
  const createPage = useCreateVideoPage();
  const updatePage = useUpdateVideoPage();
  const deletePage = useDeleteVideoPage();

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showQRCode, setShowQRCode] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    sunday_date: "",
    title: "",
    video_url: "",
    description: "",
    is_published: false,
  });

  const resetForm = () => {
    setFormData({
      sunday_date: "",
      title: "",
      video_url: "",
      description: "",
      is_published: false,
    });
    setEditingId(null);
    setShowForm(false);
  };

  const handleEdit = (page: any) => {
    setFormData({
      sunday_date: page.sunday_date,
      title: page.title,
      video_url: page.video_url,
      description: page.description || "",
      is_published: page.is_published,
    });
    setEditingId(page.id);
    setShowForm(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const slug = format(new Date(formData.sunday_date), "yyyy-MM-dd");

    if (editingId) {
      await updatePage.mutateAsync({
        id: editingId,
        ...formData,
        slug,
      });
    } else {
      await createPage.mutateAsync({
        ...formData,
        slug,
      });
    }

    resetForm();
  };

  const copyVideoUrl = (slug: string) => {
    const url = `${window.location.origin}/video/${slug}`;
    navigator.clipboard.writeText(url);
    toast.success("Video page URL copied to clipboard!");
  };

  const downloadQRCode = (slug: string) => {
    const svg = document.getElementById(`qr-${slug}`);
    if (!svg) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const svgData = new XMLSerializer().serializeToString(svg);
    const img = new Image();
    
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = `qr-code-${slug}.png`;
          a.click();
          URL.revokeObjectURL(url);
          toast.success("QR code downloaded!");
        }
      });
    };
    
    img.src = "data:image/svg+xml;base64," + btoa(svgData);
  };

  if (isLoading) {
    return <div>Loading video pages...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Weekly Video Pages</h2>
          <p className="text-muted-foreground">
            Manage your weekly video pages with QR codes
          </p>
        </div>
        <Button onClick={() => setShowForm(!showForm)}>
          <Plus className="mr-2 h-4 w-4" />
          {showForm ? "Cancel" : "Add Video Page"}
        </Button>
      </div>

      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>{editingId ? "Edit" : "Create"} Video Page</CardTitle>
            <CardDescription>
              {editingId ? "Update" : "Add"} a weekly video page for your QR code campaign
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="sunday_date">Sunday Date *</Label>
                <Input
                  id="sunday_date"
                  type="date"
                  required
                  value={formData.sunday_date}
                  onChange={(e) =>
                    setFormData({ ...formData, sunday_date: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  required
                  placeholder="e.g., Week of November 23rd - Holiday Special"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="video_url">Video URL *</Label>
                <Input
                  id="video_url"
                  required
                  placeholder="YouTube, Vimeo, or direct video URL"
                  value={formData.video_url}
                  onChange={(e) =>
                    setFormData({ ...formData, video_url: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Optional description for the video"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="is_published"
                  checked={formData.is_published}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, is_published: checked })
                  }
                />
                <Label htmlFor="is_published">Publish immediately</Label>
              </div>

              <div className="flex gap-2">
                <Button type="submit" disabled={createPage.isPending || updatePage.isPending}>
                  {editingId ? "Update" : "Create"} Video Page
                </Button>
                <Button type="button" variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4">
        {videoPages?.map((page) => (
          <Card key={page.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <CardTitle className="text-xl">{page.title}</CardTitle>
                    <CardDescription>
                      {format(new Date(page.sunday_date), "MMMM d, yyyy")}
                    </CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {page.is_published ? (
                    <Eye className="h-4 w-4 text-green-600" />
                  ) : (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  )}
                  <span className="text-sm text-muted-foreground">
                    {page.is_published ? "Published" : "Draft"}
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Video className="h-4 w-4" />
                <a
                  href={page.video_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {page.video_url}
                </a>
              </div>

              {page.description && (
                <p className="text-sm text-muted-foreground">{page.description}</p>
              )}

              <div className="flex items-center gap-2 pt-4 border-t">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => copyVideoUrl(page.slug)}
                >
                  <Copy className="mr-2 h-4 w-4" />
                  Copy URL
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setShowQRCode(showQRCode === page.id ? null : page.id)}
                >
                  <QrCode className="mr-2 h-4 w-4" />
                  {showQRCode === page.id ? "Hide" : "Show"} QR Code
                </Button>
                <Button size="sm" variant="outline" onClick={() => handleEdit(page)}>
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => {
                    if (confirm("Are you sure you want to delete this video page?")) {
                      deletePage.mutate(page.id);
                    }
                  }}
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                </Button>
              </div>

              {showQRCode === page.id && (
                <div className="flex flex-col items-center gap-4 p-4 bg-white rounded-lg">
                  <QRCode
                    id={`qr-${page.slug}`}
                    value={`${window.location.origin}/video/${page.slug}`}
                    size={256}
                  />
                  <p className="text-sm text-center text-muted-foreground">
                    Scan to visit: /video/{page.slug}
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => downloadQRCode(page.slug)}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download QR Code
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
