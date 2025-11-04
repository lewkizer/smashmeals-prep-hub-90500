import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Partners = () => {
  const partners = [
    {
      name: "Collar Chiropractic",
      url: "", // URL to be added
      description: "Professional chiropractic care for optimal health and wellness"
    },
    {
      name: "Misfits",
      url: "", // URL to be added
      description: "Fitness and training facility"
    },
    {
      name: "CrossFit Arcan",
      url: "", // URL to be added
      description: "High-intensity functional fitness training"
    },
    {
      name: "Olson's Martial Arts",
      url: "", // URL to be added
      description: "Expert martial arts instruction for all ages"
    },
    {
      name: "Build Power Grind",
      url: "", // URL to be added
      description: "Strength and conditioning training"
    },
    {
      name: "Center of Strength",
      url: "", // URL to be added
      description: "Complete fitness and strength training facility"
    },
    {
      name: "Taste and See Charcuterie",
      url: "", // URL to be added
      description: "Artisan charcuterie and specialty food"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
              Our Partners
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're proud to partner with these amazing local businesses who share our commitment to health, fitness, and community.
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {partners.map((partner) => (
              <Card key={partner.name} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold">{partner.name}</h3>
                    {partner.url && (
                      <ExternalLink className="h-5 w-5 text-primary flex-shrink-0 ml-2" />
                    )}
                  </div>
                  <p className="text-muted-foreground mb-4">{partner.description}</p>
                  {partner.url ? (
                    <a
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium inline-flex items-center"
                    >
                      Visit Website
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  ) : (
                    <span className="text-muted-foreground text-sm italic">
                      Website coming soon
                    </span>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 p-8 bg-muted rounded-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold font-playfair mb-3">
              Interested in Partnering?
            </h2>
            <p className="text-muted-foreground mb-4">
              If you're a local business interested in partnering with SmashMeals, we'd love to hear from you!
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Partners;