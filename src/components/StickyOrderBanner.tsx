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
      <div className="bg-primary text-primary-foreground py-2 md:py-3 px-3 md:px-4 shadow-elevated">
        <div className="container mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 md:gap-4 flex-1 min-w-0">
            <span className="font-semibold text-xs md:text-base truncate">
              <span className="hidden sm:inline">⏰ Order by Thursday 11:59 PM for Sunday pickup</span>
              <span className="sm:hidden">⏰ Order by Thu 11:59 PM</span>
            </span>
            <a
              href="https://smashmeals.bottle.com/b/9814360"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if ((window as any).fbq) (window as any).fbq('track', 'InitiateCheckout');
              }}
              className="bg-accent hover:bg-accent/90 text-white px-3 md:px-6 py-1.5 md:py-2 rounded-full font-semibold text-xs md:text-base transition-all duration-300 hover:scale-105 whitespace-nowrap flex-shrink-0"
            >
              Order Now
            </a>
          </div>
          <button
            onClick={() => setIsDismissed(true)}
            className="ml-1 md:ml-4 hover:opacity-70 transition-opacity flex-shrink-0"
            aria-label="Close banner"
          >
            <X className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyOrderBanner;
