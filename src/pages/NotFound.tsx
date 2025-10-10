import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center bg-gradient-to-b from-primary/10 via-background to-background pt-32 pb-20">
        <div className="text-center max-w-2xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold font-playfair text-primary mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">Page Not Found</h2>
          <p className="text-xl text-muted-foreground mb-8 font-inter">
            Oops! The page you're looking for doesn't exist. Let's get you back on track.
          </p>
          <a href="/">
            <Button variant="hero" size="lg" className="font-inter">
              Return to Home
            </Button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
