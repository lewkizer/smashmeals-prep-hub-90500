import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Session } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Loader2, LogOut, Video, Image, Upload, FileText } from "lucide-react";
import { GenerateProductImages } from "@/components/GenerateProductImages";
import VideoPageManager from "@/components/admin/VideoPageManager";
import VideoUploader from "@/components/admin/VideoUploader";
import BlogPostManager from "@/components/admin/BlogPostManager";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Admin() {
  const navigate = useNavigate();
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) {
        checkAdminRole(session.user.id);
      } else {
        setLoading(false);
        navigate("/auth");
      }
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        checkAdminRole(session.user.id);
      } else {
        setIsAdmin(false);
        setLoading(false);
        navigate("/auth");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const checkAdminRole = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", userId)
        .eq("role", "admin")
        .maybeSingle();

      if (error) {
        console.error("Error checking admin role:", error);
        toast.error("Error checking permissions");
        setIsAdmin(false);
      } else {
        setIsAdmin(!!data);
        if (!data) {
          toast.error("You do not have admin permissions");
        }
      }
    } catch (error) {
      console.error("Error checking admin role:", error);
      setIsAdmin(false);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast.success("Logged out successfully");
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!session || !isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Access Denied</CardTitle>
            <CardDescription>
              You need admin permissions to access this page.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => navigate("/")} className="w-full">
              Go to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">SmashMeals Admin</h1>
          <Button onClick={handleSignOut} variant="outline" size="sm">
            <LogOut className="mr-2 h-4 w-4" />
            Log Out
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="blogs" className="w-full">
          <TabsList className="grid w-full max-w-2xl grid-cols-4">
            <TabsTrigger value="blogs" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Blog Posts
            </TabsTrigger>
            <TabsTrigger value="videos" className="flex items-center gap-2">
              <Video className="h-4 w-4" />
              Video Pages
            </TabsTrigger>
            <TabsTrigger value="uploads" className="flex items-center gap-2">
              <Upload className="h-4 w-4" />
              Video Uploads
            </TabsTrigger>
            <TabsTrigger value="products" className="flex items-center gap-2">
              <Image className="h-4 w-4" />
              Products
            </TabsTrigger>
          </TabsList>

          <TabsContent value="blogs" className="mt-6">
            <BlogPostManager />
          </TabsContent>

          <TabsContent value="videos" className="mt-6">
            <VideoPageManager />
          </TabsContent>

          <TabsContent value="uploads" className="mt-6">
            <VideoUploader />
          </TabsContent>

          <TabsContent value="products" className="mt-6">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Product Management</CardTitle>
                  <CardDescription>
                    Generate AI images for products that don't have images yet
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <GenerateProductImages />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Links</CardTitle>
                  <CardDescription>
                    Manage your SmashMeals content
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button onClick={() => navigate("/blogs")} variant="outline" className="w-full justify-start">
                    View Blog Posts
                  </Button>
                  <Button onClick={() => navigate("/menu")} variant="outline" className="w-full justify-start">
                    View Menu
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
