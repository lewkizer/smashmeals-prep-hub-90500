import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, ShoppingCart, ChevronDown } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import logo from "@/assets/smashmeals-logo.webp";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
    { name: "Menu", href: "https://smashmeals.bottle.com/b/9814360" },
    { name: "Freezer Meals", href: "/freezer-meals" },
    { name: "Bariatric Line", href: "/bariatric-line" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Catering", href: "/catering" },
    { name: "About", href: "/about" },
    { name: "Blogs", href: "/blogs" },
  ];

  const mobileNavLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "https://smashmeals.bottle.com/b/9814360" },
    { name: "🎁 Gift Cards", href: "/gift-cards" },
    { name: "Freezer Meals", href: "/freezer-meals" },
    { name: "Bariatric Line", href: "/bariatric-line" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Catering", href: "/catering" },
    { name: "Service Areas", href: "/service-areas" },
    { name: "About", href: "/about" },
    { name: "Blogs", href: "/blogs" },
    { name: "FAQ", href: "/faq" },
    { name: "Athletes", href: "/athletes" },
    { name: "GLP-1", href: "/glp1" },
    { name: "Families", href: "/families" },
    { name: "Seniors", href: "/elderly" },
    { name: "Partners", href: "/partners" },
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
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt="SmashMeals Logo" 
              className="h-12 w-12 object-contain"
            />
            <span className="font-bold font-playfair text-xl hidden md:block">SmashMeals</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              link.href.startsWith('http') ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              )
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1">
                For You <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuItem asChild>
                  <Link to="/athletes" className="cursor-pointer">Athletes</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/glp1" className="cursor-pointer">GLP-1 Users</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/families" className="cursor-pointer">Busy Families</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/elderly" className="cursor-pointer">Seniors</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/high-protein" className="cursor-pointer">High Protein</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/keto-meals" className="cursor-pointer">Keto</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1">
                More <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/gift-cards" className="cursor-pointer">🎁 Gift Cards</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/service-areas" className="cursor-pointer">Service Areas</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/faq" className="cursor-pointer">FAQ</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/partners" className="cursor-pointer">Partners</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/contact" className="cursor-pointer">Contact</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* CTA Button */}
          <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer" onClick={() => {
            if ((window as any).fbq) (window as any).fbq('track', 'InitiateCheckout');
          }}>
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
          <nav className="lg:hidden py-4 border-t border-border max-h-[70vh] overflow-y-auto">
            <div className="flex flex-col space-y-3">
              {mobileNavLinks.map((link) => (
                link.href.startsWith('http') ? (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium text-foreground hover:text-primary transition-colors py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-base font-medium text-foreground hover:text-primary transition-colors py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer" className="w-full pt-2" onClick={() => {
                if ((window as any).fbq) (window as any).fbq('track', 'InitiateCheckout');
              }}>
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
