import { useState, useRef, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { Upload, Video, Trash2, Copy, Check, Loader2 } from "lucide-react";

interface UploadedVideo {
  name: string;
  url: string;
  size: number;
  uploadedAt: Date;
}

export default function VideoUploader() {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [videos, setVideos] = useState<UploadedVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Fetch existing videos on mount
  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const { data, error } = await supabase.storage
        .from("videos")
        .list("", { limit: 100, sortBy: { column: "created_at", order: "desc" } });

      if (error) throw error;

      const videoList: UploadedVideo[] = (data || [])
        .filter((file) => file.name !== ".emptyFolderPlaceholder")
        .map((file) => ({
          name: file.name,
          url: supabase.storage.from("videos").getPublicUrl(file.name).data.publicUrl,
          size: file.metadata?.size || 0,
          uploadedAt: new Date(file.created_at),
        }));

      setVideos(videoList);
    } catch (error) {
      console.error("Error fetching videos:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("video/")) {
      toast.error("Please select a video file");
      return;
    }

    // Validate file size (100MB limit)
    const maxSize = 100 * 1024 * 1024;
    if (file.size > maxSize) {
      toast.error("File size must be less than 100MB");
      return;
    }

    setUploading(true);
    setProgress(0);

    try {
      // Generate unique filename
      const timestamp = Date.now();
      const sanitizedName = file.name.replace(/[^a-zA-Z0-9.-]/g, "-");
      const fileName = `${timestamp}-${sanitizedName}`;

      // Simulate progress (Supabase JS doesn't have real progress events)
      const progressInterval = setInterval(() => {
        setProgress((prev) => Math.min(prev + 10, 90));
      }, 200);

      const { data, error } = await supabase.storage
        .from("videos")
        .upload(fileName, file, {
          cacheControl: "3600",
          upsert: false,
        });

      clearInterval(progressInterval);

      if (error) throw error;

      setProgress(100);

      const publicUrl = supabase.storage.from("videos").getPublicUrl(data.path).data.publicUrl;

      setVideos((prev) => [
        {
          name: fileName,
          url: publicUrl,
          size: file.size,
          uploadedAt: new Date(),
        },
        ...prev,
      ]);

      toast.success("Video uploaded successfully!");
    } catch (error: any) {
      console.error("Upload error:", error);
      toast.error(error.message || "Failed to upload video");
    } finally {
      setUploading(false);
      setProgress(0);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleDelete = async (fileName: string) => {
    if (!confirm("Are you sure you want to delete this video?")) return;

    try {
      const { error } = await supabase.storage.from("videos").remove([fileName]);

      if (error) throw error;

      setVideos((prev) => prev.filter((v) => v.name !== fileName));
      toast.success("Video deleted");
    } catch (error: any) {
      console.error("Delete error:", error);
      toast.error(error.message || "Failed to delete video");
    }
  };

  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    toast.success("URL copied to clipboard");
    setTimeout(() => setCopiedUrl(null), 2000);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "Unknown size";
    const mb = bytes / (1024 * 1024);
    return `${mb.toFixed(2)} MB`;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Video className="h-5 w-5" />
          Video Uploads
        </CardTitle>
        <CardDescription>
          Upload videos up to 100MB. Videos are stored securely and accessible via public URLs.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Upload Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Input
              ref={fileInputRef}
              type="file"
              accept="video/*"
              onChange={handleFileSelect}
              disabled={uploading}
              className="hidden"
              id="video-upload"
            />
            <Label
              htmlFor="video-upload"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md cursor-pointer hover:bg-primary/90 transition-colors"
            >
              {uploading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Upload className="h-4 w-4" />
              )}
              {uploading ? "Uploading..." : "Select Video"}
            </Label>
            <span className="text-sm text-muted-foreground">
              MP4, WebM, MOV (max 100MB)
            </span>
          </div>

          {uploading && (
            <div className="space-y-2">
              <Progress value={progress} className="h-2" />
              <p className="text-sm text-muted-foreground">{progress}% uploaded</p>
            </div>
          )}
        </div>

        {/* Video List */}
        <div className="space-y-3">
          <h4 className="font-medium">Uploaded Videos ({videos.length})</h4>
          
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-6 w-6 animate-spin" />
            </div>
          ) : videos.length === 0 ? (
            <p className="text-sm text-muted-foreground py-4">
              No videos uploaded yet. Upload your first video above.
            </p>
          ) : (
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {videos.map((video) => (
                <div
                  key={video.name}
                  className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                >
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <Video className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                    <div className="min-w-0">
                      <p className="text-sm font-medium truncate">{video.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {formatFileSize(video.size)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyUrl(video.url)}
                      title="Copy URL"
                    >
                      {copiedUrl === video.url ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(video.name)}
                      title="Delete"
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
