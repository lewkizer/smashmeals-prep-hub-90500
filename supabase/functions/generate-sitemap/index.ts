import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

Deno.serve(async (req) => {
  try {
    const supabaseUrl = Deno.env.get('VITE_SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('VITE_SUPABASE_PUBLISHABLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Fetch all published blog posts
    const { data: posts, error } = await supabase
      .from('blog_posts')
      .select('slug, updated_at, published_date')
      .order('published_date', { ascending: false });

    if (error) throw error;

    // Static URLs
    const staticUrls = [
      { loc: 'https://smashmeals.com/', lastmod: '2025-11-03', changefreq: 'weekly', priority: '1.0' },
      { loc: 'https://smashmeals.com/menu', lastmod: '2025-11-03', changefreq: 'weekly', priority: '0.9' },
      { loc: 'https://smashmeals.com/how-it-works', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.8' },
      { loc: 'https://smashmeals.com/about', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://smashmeals.com/catering', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.8' },
      { loc: 'https://smashmeals.com/contact', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.6' },
      { loc: 'https://smashmeals.com/faq', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.6' },
      { loc: 'https://smashmeals.com/blogs', lastmod: '2025-11-03', changefreq: 'weekly', priority: '0.7' },
      { loc: 'https://smashmeals.com/thanksgiving', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://smashmeals.com/glp1', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://smashmeals.com/vs-clean-eatz', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.8' },
      // City pages
      { loc: 'https://smashmeals.com/johnson-city', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.8' },
      { loc: 'https://smashmeals.com/kingsport', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.8' },
      { loc: 'https://smashmeals.com/bristol', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.8' },
      { loc: 'https://smashmeals.com/asheville', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.8' },
      { loc: 'https://smashmeals.com/greeneville', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://smashmeals.com/knoxville', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.8' },
      { loc: 'https://smashmeals.com/elizabethton', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://smashmeals.com/abingdon', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://smashmeals.com/piney-flats', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://smashmeals.com/blountville', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://smashmeals.com/erwin', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://smashmeals.com/jonesborough', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://smashmeals.com/morristown', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://smashmeals.com/rogersville', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://smashmeals.com/chattanooga', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.8' },
      { loc: 'https://smashmeals.com/nashville', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.8' },
      { loc: 'https://smashmeals.com/charlotte', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.8' },
      { loc: 'https://smashmeals.com/raleigh-durham', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.8' },
      { loc: 'https://smashmeals.com/greenville', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.8' },
      { loc: 'https://smashmeals.com/atlanta', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.8' },
      { loc: 'https://smashmeals.com/washington-dc', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.8' },
      // Additional Tennessee cities
      { loc: 'https://smashmeals.com/sevierville', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.8' },
      { loc: 'https://smashmeals.com/gatlinburg', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.8' },
      { loc: 'https://smashmeals.com/pigeon-forge', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.8' },
      { loc: 'https://smashmeals.com/maryville', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.8' },
      { loc: 'https://smashmeals.com/oak-ridge', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://smashmeals.com/cleveland', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://smashmeals.com/cookeville', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://smashmeals.com/crossville', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://smashmeals.com/dandridge', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://smashmeals.com/seymour', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://smashmeals.com/alcoa', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://smashmeals.com/athens', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://smashmeals.com/lenoir-city', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://smashmeals.com/loudon', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://smashmeals.com/sweetwater', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://smashmeals.com/madisonville', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://smashmeals.com/harriman', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://smashmeals.com/la-follette', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://smashmeals.com/tazewell', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://smashmeals.com/jellico', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      // Local Tri-Cities area
      { loc: 'https://smashmeals.com/piney-flats', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://smashmeals.com/blountville', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://smashmeals.com/damascus', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://smashmeals.com/gray', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://smashmeals.com/chucky', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://smashmeals.com/mosheim', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://smashmeals.com/unicoi', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://smashmeals.com/telford', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://smashmeals.com/limestone', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://smashmeals.com/fall-branch', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://smashmeals.com/mount-carmel', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://smashmeals.com/church-hill', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://smashmeals.com/rogersville', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://smashmeals.com/mountain-city', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://smashmeals.com/tusculum', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://smashmeals.com/baileyton', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://smashmeals.com/bulls-gap', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://smashmeals.com/surgoinsville', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://smashmeals.com/newport', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://smashmeals.com/glade-spring', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://smashmeals.com/chilhowie', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
      { loc: 'https://smashmeals.com/marion', lastmod: '2025-11-03', changefreq: 'monthly', priority: '0.7' },
    ];

    // Build blog post URLs
    const blogUrls = (posts || []).map(post => ({
      loc: `https://smashmeals.com/blog/${post.slug}`,
      lastmod: new Date(post.updated_at || post.published_date || Date.now()).toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: '0.6'
    }));

    // Combine all URLs
    const allUrls = [...staticUrls, ...blogUrls];

    // Generate XML sitemap
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
      },
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new Response('Error generating sitemap', { status: 500 });
  }
});
