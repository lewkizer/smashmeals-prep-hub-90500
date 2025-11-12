import { X } from "lucide-react";
import { useState, useEffect } from "react";

const StickyOrderBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show banner after scrolling past hero (roughly 600px)
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isDismissed) return null;

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transform transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-primary text-primary-foreground py-3 px-4 shadow-elevated">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1">
            <span className="font-semibold text-sm md:text-base">
              ⏰ Order by Thursday 11:59 PM for Sunday pickup
            </span>
            <a
              href="https://smashmeals.bottle.com/b/9814360"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if ((window as any).fbq) (window as any).fbq('track', 'InitiateCheckout');
              }}
              className="bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              Order Now
            </a>
          </div>
          <button
            onClick={() => setIsDismissed(true)}
            className="ml-4 hover:opacity-70 transition-opacity"
            aria-label="Close banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyOrderBanner;
