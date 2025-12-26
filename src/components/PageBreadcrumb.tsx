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

interface BreadcrumbItemType {
  label: string;
  href?: string;
}

interface PageBreadcrumbProps {
  items?: BreadcrumbItemType[];
  currentPage?: string;
  parentPage?: { label: string; href: string };
}

// Route to readable name mapping
const routeLabels: Record<string, string> = {
  menu: "Menu",
  order: "Order",
  about: "About Us",
  contact: "Contact",
  faq: "FAQ",
  blog: "Blog",
  blogs: "Blog",
  catering: "Catering",
  "gift-cards": "Gift Cards",
  "how-it-works": "How It Works",
  "service-areas": "Service Areas",
  "delivery-info": "Delivery Info",
  "heat-and-eat": "Heat & Eat Guide",
  athletes: "For Athletes",
  "glp-1": "GLP-1 Friendly",
  "glp1": "GLP-1 Friendly",
  families: "For Families",
  elderly: "For Seniors",
  bariatric: "Bariatric Friendly",
  "bariatric-line": "Bariatric Line",
  "high-protein": "High Protein",
  "high-protein-shipping": "High Protein Shipping",
  keto: "Keto Meals",
  "keto-meals": "Keto Meals",
  "low-carb": "Low Carb",
  paleo: "Paleo Meals",
  "paleo-meals": "Paleo Meals",
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

export function PageBreadcrumb({ items, currentPage, parentPage }: PageBreadcrumbProps) {
  const location = useLocation();
  
  // Auto-generate breadcrumbs from URL if not provided
  const generateBreadcrumbs = (): BreadcrumbItemType[] => {
    if (items) return items;
    
    // If parentPage is provided, use it
    if (parentPage) {
      return [{ label: parentPage.label, href: parentPage.href }];
    }
    
    const pathSegments = location.pathname.split("/").filter(Boolean);
    const breadcrumbs: BreadcrumbItemType[] = [];
    
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
  if (location.pathname === "/" || (breadcrumbItems.length === 0 && !currentPage)) {
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
            
            {/* If we have a parentPage and currentPage, add the current page */}
            {parentPage && currentPage && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-foreground font-medium">
                    {currentPage}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </nav>
  );
}
