import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface LinkItem {
  title: string;
  description: string;
  path: string;
}

interface InternalLinksProps {
  title?: string;
  links: LinkItem[];
}

const InternalLinks = ({ title = "Related Pages", links }: InternalLinksProps) => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold font-playfair text-center mb-8">
          {title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link) => (
            <Link key={link.path} to={link.path}>
              <Card className="p-6 hover:shadow-lg transition-shadow h-full group cursor-pointer">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors flex items-center justify-between">
                  {link.title}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </h3>
                <p className="text-sm text-muted-foreground">{link.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternalLinks;
