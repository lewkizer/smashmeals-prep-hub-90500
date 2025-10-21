import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/smashmeals-logo.webp";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const nextThursday = new Date();
      
      // Find next Thursday
      const daysUntilThursday = (4 - now.getDay() + 7) % 7;
      if (daysUntilThursday === 0 && now.getHours() >= 23 && now.getMinutes() >= 59) {
        nextThursday.setDate(now.getDate() + 7);
      } else if (daysUntilThursday === 0) {
        nextThursday.setDate(now.getDate());
      } else {
        nextThursday.setDate(now.getDate() + daysUntilThursday);
      }
      
      nextThursday.setHours(23, 59, 59, 999);
      
      const diff = nextThursday.getTime() - now.getTime();
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };

    calculateTimeLeft();
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Catering", href: "/catering" },
    { name: "About", href: "/about" },
    { name: "Blogs", href: "/blogs" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      {/* Countdown Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm font-medium">
        Orders close in: {timeLeft}
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt="SmashMeals Logo" 
              className="h-12 w-12 object-contain"
            />
            <span className="font-bold font-playfair text-xl hidden md:block">SmashMeals</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <a href="https://smashmeals.bottle.com/b/9730175" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="lg" className="hidden md:flex">
              Order Now
            </Button>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a href="https://smashmeals.bottle.com/b/9730175" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button variant="hero" className="w-full">
                  Order Now
                </Button>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
