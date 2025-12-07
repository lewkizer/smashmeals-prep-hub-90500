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
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
          <Video className="h-5 w-5" />
          Video Uploads
        </CardTitle>
        <CardDescription className="text-sm">
          Upload videos up to 100MB for use in blog posts.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Upload Section */}
        <div className="space-y-4">
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
            className="flex items-center justify-center gap-3 w-full h-14 sm:h-12 px-6 bg-primary text-primary-foreground rounded-lg cursor-pointer hover:bg-primary/90 transition-colors text-base font-medium active:scale-[0.98]"
          >
            {uploading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <Upload className="h-5 w-5" />
            )}
            {uploading ? "Uploading..." : "Select Video to Upload"}
          </Label>
          <p className="text-sm text-muted-foreground text-center">
            MP4, WebM, MOV (max 100MB)
          </p>

          {uploading && (
            <div className="space-y-2">
              <Progress value={progress} className="h-3" />
              <p className="text-sm text-muted-foreground text-center">{progress}% uploaded</p>
            </div>
          )}
        </div>

        {/* Video List */}
        <div className="space-y-3">
          <h4 className="font-medium text-base">Uploaded Videos ({videos.length})</h4>
          
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-6 w-6 animate-spin" />
            </div>
          ) : videos.length === 0 ? (
            <p className="text-sm text-muted-foreground py-4 text-center">
              No videos uploaded yet. Upload your first video above.
            </p>
          ) : (
            <div className="space-y-2 max-h-[60vh] overflow-y-auto">
              {videos.map((video) => (
                <div
                  key={video.name}
                  className="flex items-center justify-between p-4 bg-muted/50 rounded-lg gap-3"
                >
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <Video className="h-6 w-6 flex-shrink-0 text-muted-foreground" />
                    <div className="min-w-0">
                      <p className="text-sm font-medium truncate max-w-[150px] sm:max-w-none">{video.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {formatFileSize(video.size)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => copyUrl(video.url)}
                      title="Copy URL"
                      className="h-11 w-11 sm:h-10 sm:w-10"
                    >
                      {copiedUrl === video.url ? (
                        <Check className="h-5 w-5 text-green-500" />
                      ) : (
                        <Copy className="h-5 w-5" />
                      )}
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => handleDelete(video.name)}
                      title="Delete"
                      className="h-11 w-11 sm:h-10 sm:w-10 text-destructive hover:text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="h-5 w-5" />
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
