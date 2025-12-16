const MobileOrderButton = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-4 bg-gradient-to-t from-background/95 to-transparent">
      <a
        href="https://smashmeals.bottle.com/b/9814360"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          if ((window as any).fbq) (window as any).fbq('track', 'InitiateCheckout');
        }}
        className="flex items-center justify-center gap-2 w-full bg-accent hover:bg-accent/90 text-white py-4 rounded-full font-bold font-inter text-lg shadow-[0_-4px_30px_rgba(0,0,0,0.3)] transition-all duration-300"
      >
        Order Now
      </a>
    </div>
  );
};

export default MobileOrderButton;
