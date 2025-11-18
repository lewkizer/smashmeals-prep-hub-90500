import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { format } from "date-fns";
import { ArrowLeft, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useVideoPage } from "@/hooks/useVideoPages";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function VideoPage() {
  const { slug } = useParams<{ slug: string }>();
  const { data: videoPage, isLoading } = useVideoPage(slug || "");

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="flex items-center justify-center">
            <p className="text-muted-foreground">Loading video...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!videoPage) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Video Not Found</h1>
            <p className="text-muted-foreground">
              This video page doesn't exist or hasn't been published yet.
            </p>
            <Button asChild>
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const getVideoEmbedUrl = (url: string) => {
    // YouTube
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      const videoId = url.includes("youtu.be")
        ? url.split("youtu.be/")[1]?.split("?")[0]
        : new URLSearchParams(new URL(url).search).get("v");
      return `https://www.youtube.com/embed/${videoId}`;
    }
    // Vimeo
    if (url.includes("vimeo.com")) {
      const videoId = url.split("vimeo.com/")[1]?.split("?")[0];
      return `https://player.vimeo.com/video/${videoId}`;
    }
    // Return original URL for direct video files
    return url;
  };

  const embedUrl = getVideoEmbedUrl(videoPage.video_url);
  const isDirectVideo = !embedUrl.includes("youtube.com") && !embedUrl.includes("vimeo.com");

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{videoPage.title} | SmashMeals</title>
        <meta name="description" content={videoPage.description || videoPage.title} />
        <meta property="og:title" content={videoPage.title} />
        <meta property="og:description" content={videoPage.description || videoPage.title} />
        <meta property="og:type" content="video.other" />
        <meta property="og:url" content={`${window.location.origin}/video/${slug}`} />
      </Helmet>

      <Header />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <time dateTime={videoPage.sunday_date}>
                Week of {format(new Date(videoPage.sunday_date), "MMMM d, yyyy")}
              </time>
            </div>
            <h1 className="text-4xl font-bold">{videoPage.title}</h1>
            {videoPage.description && (
              <p className="text-lg text-muted-foreground">{videoPage.description}</p>
            )}
          </div>

          <div className="aspect-video bg-black rounded-lg overflow-hidden">
            {isDirectVideo ? (
              <video
                src={embedUrl}
                controls
                className="w-full h-full"
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <iframe
                src={embedUrl}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>

          <div className="flex justify-center pt-8">
            <Button asChild size="lg" className="text-lg px-8">
              <Link to="/menu">
                View This Week's Menu
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
