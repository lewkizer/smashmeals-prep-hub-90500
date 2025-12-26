import { Link, useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageBreadcrumbProps {
  items?: BreadcrumbItem[];
  currentPage?: string;
}

// Route to readable name mapping
const routeLabels: Record<string, string> = {
  menu: "Menu",
  order: "Order",
  about: "About Us",
  contact: "Contact",
  faq: "FAQ",
  blog: "Blog",
  catering: "Catering",
  "gift-cards": "Gift Cards",
  "how-it-works": "How It Works",
  "service-areas": "Service Areas",
  "delivery-info": "Delivery Info",
  "heat-and-eat": "Heat & Eat Guide",
  athletes: "For Athletes",
  "glp-1": "GLP-1 Friendly",
  families: "For Families",
  elderly: "For Seniors",
  bariatric: "Bariatric Friendly",
  "high-protein": "High Protein",
  keto: "Keto Meals",
  "low-carb": "Low Carb",
  paleo: "Paleo Meals",
  "freezer-meals": "Freezer Meals",
  "macro-calculator": "Macro Calculator",
  "meal-quiz": "Meal Quiz",
  thanksgiving: "Thanksgiving",
  partners: "Partners",
  account: "My Account",
  cart: "Cart",
  checkout: "Checkout",
  install: "Install App",
};

export function PageBreadcrumb({ items, currentPage }: PageBreadcrumbProps) {
  const location = useLocation();
  
  // Auto-generate breadcrumbs from URL if not provided
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (items) return items;
    
    const pathSegments = location.pathname.split("/").filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [];
    
    let currentPath = "";
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === pathSegments.length - 1;
      
      breadcrumbs.push({
        label: routeLabels[segment] || segment.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()),
        href: isLast ? undefined : currentPath,
      });
    });
    
    return breadcrumbs;
  };
  
  const breadcrumbItems = generateBreadcrumbs();
  
  // Don't show breadcrumbs on home page
  if (location.pathname === "/" || breadcrumbItems.length === 0) {
    return null;
  }
  
  return (
    <nav aria-label="Breadcrumb" className="bg-muted/30 border-b border-border/50">
      <div className="container mx-auto px-4 py-3">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/" className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
                  <Home className="h-4 w-4" />
                  <span className="sr-only sm:not-sr-only">Home</span>
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            
            {breadcrumbItems.map((item, index) => (
              <span key={index} className="contents">
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {item.href ? (
                    <BreadcrumbLink asChild>
                      <Link to={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                        {item.label}
                      </Link>
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage className="text-foreground font-medium">
                      {currentPage || item.label}
                    </BreadcrumbPage>
                  )}
                </BreadcrumbItem>
              </span>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </nav>
  );
}
