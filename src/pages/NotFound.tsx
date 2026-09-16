import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import MealsForCancerPatients from "./MealsForCancerPatients";

// Redirect map for old URLs from previous website
const redirectMap: Record<string, string> = {
  '/lasagna': '/menu',
  '/pork-bbq': '/menu',
  '/taco-bar': '/menu',
  '/save-money': '/freezer-meals',
  '/let-us-help-you': '/how-it-works',
  '/how-to-help-yourself-when-you-get-home': '/heat-and-eat',
  '/keep-going-forward': '/about',
  '/welcoming-new-flavors': '/menu',
  '/elevate-your-morning-routine-with-smashmeals-breakfast-burrito': '/blogs',
  '/eat-well-delivered-fast-welcome-to-smashmeals': '/blogs',
  '/this-week-s-menu-delicious-and-healthy-options-await': '/menu',
  '/my-post5863adfd': '/blogs',
  '/my-postf97969bd': '/blogs',
  '/feed/atom': '/blogs',
  '/feed': '/blogs',
  '/runtime-service-worker.js': '/',
  '/family-dinner-made-easy': '/families',
  '/weekly-subscription': '/how-it-works',
  '/new-smash-dip': '/menu',
  '/smash-mouth-football-begins-with-smashmeals': '/athletes',
  '/try-these-cookies-now': '/menu',
  '/smash-sides': '/menu',
  '/weekly-menu-highlights': '/menu',
  '/tackle-that-funky-sink-smell-with-ease': '/blogs',
  '/taste-the-joy-of-snacking': '/menu',
};

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === '/meals-for-cancer-patients') return;
    if (redirectMap[currentPath]) {
      navigate(redirectMap[currentPath], { replace: true });
      return;
    }
    if (currentPath.startsWith('/my-post')) {
      navigate('/blogs', { replace: true });
      return;
    }
    console.error("404 Error: User attempted to access non-existent route:", currentPath);
  }, [location.pathname, navigate]);

  // This high-intent guide is intentionally resolved before the 404 response.
  // Keeping it here avoids disturbing the large route table while providing a clean canonical URL.
  if (location.pathname === '/meals-for-cancer-patients') {
    return <MealsForCancerPatients />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Page Not Found | SmashMeals</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="The page you're looking for doesn't exist. Visit our homepage or menu to find what you need." />
      </Helmet>
      <Header />
      <div className="flex-1 flex items-center justify-center bg-gradient-to-b from-primary/10 via-background to-background pt-32 pb-20">
        <div className="text-center max-w-2xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold font-playfair text-primary mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">Page Not Found</h2>
          <p className="text-xl text-muted-foreground mb-8 font-inter">Oops! The page you're looking for doesn't exist or has been moved. Let's get you back on track.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/"><Button variant="hero" size="lg" className="font-inter">Return to Home</Button></a>
            <a href="/menu"><Button variant="outline" size="lg" className="font-inter">View Menu</Button></a>
          </div>
          <p className="text-sm text-muted-foreground mt-8">Looking for something specific? Try our <a href="/menu" className="text-primary hover:underline">weekly menu</a>, {' '}<a href="/freezer-meals" className="text-primary hover:underline">freezer meals</a>, {' '}or <a href="/blogs" className="text-primary hover:underline">blog</a>.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
