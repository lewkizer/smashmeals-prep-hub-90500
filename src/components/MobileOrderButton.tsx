const MobileOrderButton = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden p-3 pb-4 bg-gradient-to-t from-background via-background/95 to-transparent pointer-events-none">
      <a
        href="https://smashmeals.bottle.com/b/9814360"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          if ((window as any).fbq) (window as any).fbq('track', 'InitiateCheckout');
        }}
        className="pointer-events-auto flex items-center justify-center gap-2 w-full bg-accent hover:bg-accent/90 text-white py-3.5 rounded-full font-bold font-inter text-base shadow-[0_-4px_30px_rgba(0,0,0,0.3)] transition-all duration-300 active:scale-95"
      >
        Order Now
      </a>
    </div>
  );
};

export default MobileOrderButton;
