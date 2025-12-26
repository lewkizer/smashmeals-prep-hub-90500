import { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import DOMPurify from 'dompurify';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Loader2, Clock, Calendar, ArrowLeft, ArrowRight } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import type { Database } from '@/integrations/supabase/types';

// Persona page mapping based on blog tags
const getRelatedPersonaPage = (tags: string[] | null | undefined): { path: string; title: string; description: string } | null => {
  if (!tags || tags.length === 0) return null;
  
  const lowerTags = tags.map(t => t.toLowerCase());
  
  // Athletes/ETSU
  if (lowerTags.some(t => ['athletes', 'etsu', 'sports nutrition', 'performance', 'college athletics'].includes(t))) {
    return {
      path: '/athletes',
      title: 'Meal Prep for Athletes',
      description: 'Discover how SmashMeals fuels peak athletic performance with high-protein, macro-counted meals.'
    };
  }
  
  // Bariatric
  if (lowerTags.some(t => ['bariatric', 'gastric sleeve', 'gastric bypass', 'post-surgery', 'weight loss surgery'].includes(t))) {
    return {
      path: '/bariatric-line',
      title: 'SmashMeals Bariatric Line',
      description: 'Explore our specialized bariatric-friendly meals designed for post-surgery recovery and long-term success.'
    };
  }
  
  // Seniors/Elderly
  if (lowerTags.some(t => ['seniors', 'elderly', 'cooking for one', 'independent living'].includes(t))) {
    return {
      path: '/elderly',
      title: 'Meal Prep for Seniors',
      description: 'Learn how SmashMeals makes healthy eating easy and enjoyable for seniors living independently.'
    };
  }
  
  // Families/Busy Parents
  if (lowerTags.some(t => ['busy parents', 'family meals', 'working moms', 'family', 'time saving'].includes(t))) {
    return {
      path: '/families',
      title: 'Meal Prep for Busy Families',
      description: 'See how SmashMeals helps busy families save time while eating healthy, delicious meals.'
    };
  }
  
  // Weight Loss (non-surgical) / GLP-1
  if (lowerTags.some(t => ['weight loss', 'fat loss', 'sustainable weight loss', 'macro tracking'].includes(t)) && 
      !lowerTags.some(t => ['bariatric', 'surgery', 'gastric'].includes(t))) {
    return {
      path: '/glp1',
      title: 'Meal Prep for Weight Loss',
      description: 'Discover how SmashMeals supports your weight loss journey with portion-controlled, high-protein meals.'
    };
  }
  
  return null;
};

// Configure DOMPurify to allow video embeds while sanitizing XSS
const configureDOMPurify = () => {
  DOMPurify.addHook('uponSanitizeElement', (node, data) => {
    // Allow video and source elements
    if (data.tagName === 'video' || data.tagName === 'source') {
      return;
    }
  });
  
  return DOMPurify;
};

const purify = configureDOMPurify();

// Sanitize content while preserving video embeds
const sanitizeContent = (content: string): string => {
  return purify.sanitize(content, {
    ADD_TAGS: ['video', 'source', 'iframe'],
    ADD_ATTR: ['controls', 'autoplay', 'muted', 'loop', 'playsinline', 'poster', 'preload', 'src', 'type', 'width', 'height', 'allowfullscreen', 'frameborder', 'allow'],
    ALLOWED_URI_REGEXP: /^(?:(?:https?|mailto|tel):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
    ALLOW_DATA_ATTR: false,
  });
};
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  published_at?: string;
  updated_at?: string;
  author?: string;
  featured_image_url?: string;
  reading_time?: number;
  tags?: string[];
}

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .maybeSingle() as { data: Database['public']['Tables']['blog_posts']['Row'] | null; error: any };
      if (error) {
        console.error('Error fetching blog post:', error);
        setLoading(false);
        return;
      }
      setPost(data || null);
      setLoading(false);
    };
    load();
  }, [slug]);

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center bg-background">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
        <Footer />
      </>
    );
  }

  if (!post) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center">
            <h1 className="text-4xl font-bold font-playfair mb-4">Post Not Found</h1>
            <p className="text-muted-foreground">The blog post you're looking for doesn't exist.</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // JSON-LD structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "author": {
      "@type": "Person",
      "name": post.author || "SmashMeals"
    },
    "datePublished": post.published_at,
    "dateModified": post.updated_at,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://smashmeals.com/blog/${post.slug}`
    },
    "publisher": {
      "@type": "Organization",
      "name": "SmashMeals",
      "logo": {
        "@type": "ImageObject",
        "url": "https://smashmeals.com/logo.png"
      }
    },
    ...(post.featured_image_url && {
      "image": post.featured_image_url
    }),
    ...(post.tags && {
      "keywords": post.tags.join(', ')
    })
  };

  return (
    <>
      <Helmet>
        <title>{post.title} - SmashMeals Blog</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://smashmeals.com/blog/${post.slug}`} />
        {post.tags && <meta name="keywords" content={post.tags.join(', ')} />}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://smashmeals.com/blog/${post.slug}`} />
        {post.featured_image_url && <meta property="og:image" content={post.featured_image_url} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        {post.featured_image_url && <meta name="twitter:image" content={post.featured_image_url} />}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <PageBreadcrumb 
          items={[{ label: "Blog", href: "/blogs" }]} 
          currentPage={post.title} 
        />
        
        <main className="flex-1 pt-32 pb-20">
          <article className="container mx-auto px-4 max-w-5xl">
            {/* Back Button */}
            <Link to="/blogs" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors group">
              <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
              <span className="font-inter font-medium">Back to Blog</span>
            </Link>

            {/* Featured Image */}
            {post.featured_image_url && (
              <div className="relative w-full h-80 md:h-[500px] rounded-2xl overflow-hidden mb-12 shadow-elevated">
                <img 
                  src={post.featured_image_url} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair mb-8 leading-tight">
              {post.title}
            </h1>

            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-6 mb-10 pb-10 border-b border-border">
              {post.author && (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold font-inter">
                      {post.author.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="font-inter font-medium text-foreground">
                    {post.author}
                  </span>
                </div>
              )}
              {post.published_at && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-5 w-5" />
                  <span className="text-sm font-inter">
                    {new Date(post.published_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
              )}
              {post.reading_time && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-5 w-5" />
                  <span className="text-sm font-inter">{post.reading_time} min read</span>
                </div>
              )}
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-3 mb-12">
                {post.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="px-4 py-2 text-sm font-inter">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            {/* Related Persona Page Link */}
            {(() => {
              const personaPage = getRelatedPersonaPage(post.tags);
              if (!personaPage) return null;
              return (
                <div className="mb-12 p-6 rounded-xl bg-primary/5 border border-primary/20">
                  <p className="text-sm text-muted-foreground mb-2 font-inter">Related Resource</p>
                  <Link to={personaPage.path} className="group block">
                    <h3 className="text-xl font-bold font-playfair text-foreground group-hover:text-primary transition-colors mb-2">
                      {personaPage.title}
                    </h3>
                    <p className="text-muted-foreground font-inter mb-3">{personaPage.description}</p>
                    <span className="inline-flex items-center text-primary font-semibold font-inter group-hover:underline">
                      Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </div>
              );
            })()}

            {/* Content */}
            <Card className="border-0 bg-white/80 dark:bg-card/80 backdrop-blur-sm shadow-card mb-12">
              <CardContent className="pt-12 pb-12 px-8 md:px-12">
                <div className="prose prose-lg md:prose-xl max-w-none dark:prose-invert
                  [&>p]:mb-6 [&>p]:leading-relaxed [&>p]:text-foreground
                  [&>h1]:text-4xl [&>h1]:font-bold [&>h1]:mb-6 [&>h1]:mt-8 [&>h1]:font-playfair [&>h1]:text-foreground
                  [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:mb-4 [&>h2]:mt-8 [&>h2]:font-playfair [&>h2]:text-foreground
                  [&>h3]:text-2xl [&>h3]:font-semibold [&>h3]:mb-3 [&>h3]:mt-6 [&>h3]:font-playfair [&>h3]:text-foreground
                  [&>ul]:mb-6 [&>ul]:ml-6 [&>ul]:list-disc [&>ul]:space-y-2
                  [&>ol]:mb-6 [&>ol]:ml-6 [&>ol]:list-decimal [&>ol]:space-y-2
                  [&>li]:text-foreground [&>li]:leading-relaxed
                  [&>blockquote]:border-l-4 [&>blockquote]:border-primary [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:my-6
                  [&>a]:text-primary [&>a]:font-semibold [&>a]:underline [&>a:hover]:text-primary/80
                  [&>strong]:font-bold [&>strong]:text-foreground
                  [&_video]:w-full [&_video]:max-w-3xl [&_video]:rounded-lg [&_video]:my-6
                  font-inter"
                >
                  <ReactMarkdown
                    rehypePlugins={[rehypeRaw]}
                  >
                    {sanitizeContent(post.content)}
                  </ReactMarkdown>
                </div>
              </CardContent>
            </Card>

            {/* Back to Blog CTA */}
            <div className="text-center py-12 border-t border-border">
              <Link to="/blogs">
                <Button variant="hero" size="lg" className="font-inter">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Read More Articles
                </Button>
              </Link>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
