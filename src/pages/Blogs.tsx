import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  published_date?: string;
  author?: string;
}

const Blogs = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('id, title, excerpt, slug, published_date, author')
        .order('published_date', { ascending: false });
      if (error) {
        console.error('Error fetching blog posts:', error);
        setLoading(false);
        return;
      }
      setPosts(data || []);
      setLoading(false);
    };
    load();
  }, []);

  return (
    <>
      <Helmet>
        <title>SmashMeals Blog - Meal Prep Tips, Recipes & Nutrition Advice</title>
        <meta name="description" content="Read the latest meal prep tips, healthy recipes, nutrition advice, and wellness content from SmashMeals. Stay informed about clean eating and fitness." />
        <meta name="keywords" content="meal prep blog, healthy recipes, nutrition tips, fitness advice, clean eating, wellness blog" />
        <link rel="canonical" href="https://smashmeals.com/blogs" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1 pt-32 pb-16">
          <div className="container mx-auto px-4">
            {/* Hero Section */}
            <section className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
                SmashMeals Blog
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover meal prep tips, healthy recipes, nutrition advice, and wellness content to fuel your fitness journey.
              </p>
            </section>

            {/* Blog Posts Grid */}
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map(post => (
                  <Card key={post.id} className="flex flex-col hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="font-playfair text-xl">
                        {post.title}
                      </CardTitle>
                      {post.published_date && (
                        <p className="text-sm text-muted-foreground">
                          {new Date(post.published_date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      )}
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <p className="text-muted-foreground mb-4 flex-1">
                        {post.excerpt}
                      </p>
                      <a href={`/blog/${post.slug}`}>
                        <Button variant="outline" className="w-full">
                          Read More
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">
                  No blog posts available at the moment. Check back soon!
                </p>
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Blogs;
