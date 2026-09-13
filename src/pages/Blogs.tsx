import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, Calendar } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import type { Database } from '@/integrations/supabase/types';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  published_date?: string;
  author?: string;
}

const impliesOfficialEtsuRelationship = (post: Pick<BlogPost, 'title' | 'excerpt' | 'slug'>) => {
  const text = `${post.title} ${post.excerpt} ${post.slug}`.toLowerCase();
  return (text.includes('etsu') || text.includes('east tennessee state')) &&
    (text.includes('official') || text.includes('partner'));
};

const Blogs = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('id, title, excerpt, slug, published_date, author')
        .order('published_date', { ascending: false }) as { data: BlogPost[] | null; error: any };
      if (error) {
        console.error('Error fetching blog posts:', error);
        setLoading(false);
        return;
      }
      setPosts((data || []).filter(post => !impliesOfficialEtsuRelationship(post)));
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
        <meta property="og:title" content="SmashMeals Blog - Meal Prep Tips & Nutrition Advice" />
        <meta property="og:description" content="Read the latest meal prep tips, healthy recipes, nutrition advice, and wellness content from SmashMeals." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smashmeals.com/blogs" />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <PageBreadcrumb currentPage="Blog" />
        
        <main className="flex-1 pt-32 pb-20">
          <div className="container mx-auto px-4 max-w-7xl">
            {/* Hero Section */}
            <section className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-playfair mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                SmashMeals Blog
              </h1>
              <p className="text-xl md:text-2xl font-inter text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover meal prep tips, healthy recipes, nutrition advice, and wellness content to fuel your fitness journey.
              </p>
            </section>

            {/* Blog Posts Grid */}
            {loading ? (
              <div className="flex justify-center items-center py-32">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
              </div>
            ) : posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map(post => (
                  <Card key={post.id} className="flex flex-col border-0 bg-white/60 dark:bg-card/60 backdrop-blur-sm shadow-card hover:shadow-elevated transition-all duration-300 hover:scale-105">
                    <CardHeader className="space-y-4 pb-4">
                      <CardTitle className="font-playfair text-2xl leading-tight line-clamp-2">
                        {post.title}
                      </CardTitle>
                      {post.published_date && (
                        <p className="text-sm font-inter text-muted-foreground flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.published_date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      )}
                      {post.author && (
                        <p className="text-sm font-inter text-primary font-medium">
                          By {post.author}
                        </p>
                      )}
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col space-y-6">
                      <p className="text-muted-foreground font-inter leading-relaxed flex-1 line-clamp-4">
                        {post.excerpt}
                      </p>
                      <a href={`/blog/${post.slug}`} className="mt-auto">
                        <Button variant="hero" className="w-full font-inter">
                          Read More
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-32">
                <p className="text-muted-foreground text-xl font-inter">
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
