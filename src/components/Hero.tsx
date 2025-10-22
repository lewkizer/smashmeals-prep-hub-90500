import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-meals.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Fresh gluten-free meal prep"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(40,30,20,0.8)] via-[rgba(60,50,40,0.6)] to-[rgba(76,130,90,0.4)]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Floating Certification Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] animate-fade-in">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-white font-medium font-inter">100% Gluten-Free</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-playfair text-white mb-6 leading-tight animate-on-scroll">
            Tri-Cities' 100% Gluten-Free Meal Prep
          </h1>
          <p className="text-xl md:text-2xl font-inter text-white/90 mb-8 leading-relaxed animate-on-scroll animate-delay-100">
            Order by Thursday at 11:59 PM. Pick up Sunday. <span className="font-caveat text-2xl md:text-3xl text-accent">Fresh</span>, chef-made meals—no guessing, no gluten.
          </p>
          
          {/* Promo Code Banner */}
          <div className="inline-block bg-accent/90 backdrop-blur-sm border-2 border-white/20 rounded-lg px-6 py-4 mb-8 shadow-elevated animate-on-scroll animate-delay-200 hover:scale-105 transition-transform duration-300">
            <p className="text-white font-inter text-lg">
              <span className="font-bold">New Customer?</span> Use code <span className="font-bold text-white bg-white/20 px-3 py-1 rounded">WELCOME</span> for 10% off your first order!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll animate-delay-300">
            <a href="/menu">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto w-full sm:w-auto font-inter hover:scale-105 hover:shadow-2xl transition-all duration-300">
                View This Week's Menu
              </Button>
            </a>
            <a href="/how-it-works">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-foreground w-full sm:w-auto font-inter hover:scale-105 transition-all duration-300">
                How It Works
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
