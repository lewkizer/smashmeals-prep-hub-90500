import { ShoppingCart } from "lucide-react";

const MobileOrderButton = () => {
  return (
    <a
      href="https://smashmeals.bottle.com/b/9814360"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        if ((window as any).fbq) (window as any).fbq('track', 'InitiateCheckout');
      }}
      className="fixed bottom-6 right-6 z-50 md:hidden flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-4 rounded-full font-bold font-inter text-lg shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-105 animate-pulse-gentle"
    >
      <ShoppingCart className="w-5 h-5" />
      Order Now
    </a>
  );
};

export default MobileOrderButton;
