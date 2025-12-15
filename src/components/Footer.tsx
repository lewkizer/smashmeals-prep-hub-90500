import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/smashmeals-logo.webp";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <img 
                src={logo} 
                alt="SmashMeals Logo" 
                className="h-12 w-12 object-contain"
              />
              <span className="font-bold font-playfair text-xl">SmashMeals</span>
            </Link>
            <p className="text-background/80 text-sm font-caveat text-lg">Eat Healthy. Live Healthy.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-background transition-all duration-300 hover:translate-x-1 inline-block text-sm">Weekly Menu</a></li>
              <li><Link to="/catering" className="text-background/80 hover:text-background transition-all duration-300 hover:translate-x-1 inline-block text-sm">Catering</Link></li>
              <li><Link to="/about" className="text-background/80 hover:text-background transition-all duration-300 hover:translate-x-1 inline-block text-sm">About</Link></li>
              <li><Link to="/faq" className="text-background/80 hover:text-background transition-all duration-300 hover:translate-x-1 inline-block text-sm">FAQ</Link></li>
              <li><Link to="/contact" className="text-background/80 hover:text-background transition-all duration-300 hover:translate-x-1 inline-block text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <a 
                  href="https://maps.google.com/?q=1917+Meadowview+Parkway+Suite+100+Kingsport+TN+37660"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-2 text-background/80 hover:text-background transition-all duration-300"
                  title="Open in Maps"
                >
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>1917 Meadowview Pkwy, Suite 100<br />Kingsport, TN 37660</span>
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:4235252489" className="text-background/80 hover:text-background">(423) 525-2489</a>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-background/80">smashmeals.com</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/smash_meals/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/smashmeals/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@smashmeals" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
          <p>&copy; {new Date().getFullYear()} SmashMeals. All rights reserved. Tri-Cities' Only 100% Gluten-Free Meal Prep Company.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
