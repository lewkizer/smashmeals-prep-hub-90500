import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-meals.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-16">
      {/* Background Image with Overlay - Optimized for LCP */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Fresh gluten-free meal prep delivery in Tri-Cities Tennessee"
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(40,30,20,0.8)] via-[rgba(60,50,40,0.6)] to-[rgba(76,130,90,0.4)]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Prominent GF Certification Badge */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/90 to-accent/90 backdrop-blur-md border-2 border-white/30 rounded-full px-8 py-4 mb-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] animate-fade-in">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold font-inter text-lg">100% GLUTEN-FREE</span>
              <span className="text-white/90 font-inter text-sm">Tri-Cities&apos; FIRST &amp; ONLY Certified Kitchen</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-playfair text-white mb-6 leading-tight animate-on-scroll">
            More Than Meals—<span className="text-accent">Time Back</span> with Your Family
          </h1>
          <p className="text-xl md:text-2xl font-inter text-white/90 mb-6 leading-relaxed animate-on-scroll animate-delay-100">
            <span className="font-semibold">Trusted by Tri-Cities families for 8+ years.</span> We handle the cooking, so you can focus on what matters most. 100% gluten-free, chef-made, <span className="font-caveat text-2xl md:text-3xl text-accent">delivered fresh</span> every week.
          </p>
          <p className="text-lg font-inter text-white/80 mb-8 animate-on-scroll animate-delay-100">
            Order by Thursday at 11:59 PM → Pick up Sunday → Enjoy more family time.
          </p>
          
          {/* Promo Banners */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-on-scroll animate-delay-200">
            <div className="flex-1 bg-accent/90 backdrop-blur-sm border-2 border-white/20 rounded-lg px-6 py-4 shadow-elevated hover:scale-105 transition-transform duration-300">
              <p className="text-white font-inter text-lg">
                <span className="font-bold">New Customer?</span> Use code <span className="font-bold text-white bg-white/20 px-3 py-1 rounded">WELCOME</span> for 10% off your first order!
              </p>
            </div>
            <a href="https://smashmeals.bottle.com/b/9814348" target="_blank" rel="noopener noreferrer" onClick={() => {
              if ((window as any).fbq) (window as any).fbq('track', 'InitiateCheckout');
            }}>
              <div className="bg-gradient-to-r from-red-600 to-green-700 backdrop-blur-sm border-2 border-red-300 rounded-lg px-6 py-4 shadow-elevated hover:scale-105 transition-transform duration-300 cursor-pointer">
                <p className="text-white font-inter text-lg font-bold text-center whitespace-nowrap">
                  🎄 Special Christmas Menu
                </p>
              </div>
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll animate-delay-300">
            <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer" onClick={() => {
              if ((window as any).fbq) (window as any).fbq('track', 'InitiateCheckout');
            }}>
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
