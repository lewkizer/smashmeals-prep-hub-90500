import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Partners = () => {
  const partners = [
    {
      name: "Collart Chiropractic & Healthcare",
      url: "https://www.collartchiro.com/",
      location: "Johnson City, TN",
      description: "Whole-body chiropractic & rehab care including adjustments, PT, massage, dry-needling, and laser therapy. Recovery meets nutrition — where healing and fueling come together."
    },
    {
      name: "Misfits Fitness Johnson City",
      url: "https://misfitsfitnessjc.com/",
      location: "Johnson City, TN",
      description: "Group & semi-private training for motivated, community-focused athletes. For the outliers, the grinders, the never-quitters. Train hard. Eat smart. Live Misfit strong."
    },
    {
      name: "CrossFit Arcane",
      url: "https://www.crossfitarcane.com/",
      location: "Greeneville, TN",
      description: "A CrossFit-style community with committed coaches & athletes pushing limits together. Fuel your WOD. Feed your goals."
    },
    {
      name: "Olson's Martial Arts Academy",
      url: "https://olsonsma.com/",
      location: "Johnson City, TN",
      description: "Martial-arts training for kids, teens, and adults — building confidence, discipline, and strength. Discipline starts in the dojo and continues at the dinner table."
    },
    {
      name: "Build Power Grind",
      url: "https://www.buildpowergrind.com/",
      location: "Johnson City, TN",
      description: "Strength-training facility focused on lifting heavy, building power, and high performance. Lift heavy. Eat healthy. Build power."
    },
    {
      name: "Center of Strength",
      url: "https://www.cosfit22.com/",
      location: "Bulls Gap, TN",
      description: "CrossFit-inspired functional training community dedicated to building resilience and strength. From Bulls Gap to the barbell — fueling stronger bodies and healthier lives."
    },
    {
      name: "Taste and See Charcuterie",
      url: "https://www.tasteandseecharcuterie.com/",
      location: "Johnson City, TN",
      description: "Artisan charcuterie and grazing boards for events, upscale gatherings, and social moments. When healthy meets heavenly."
    },
    {
      name: "The Great Body Company",
      url: "https://www.greatbodycompany.com/",
      location: "Kingsport, TN",
      description: "Full-service gym & medically-oriented wellness facility with personal training, sports performance, rehab, and functional training. Where strong bodies meet smart meals."
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

          {/* Featured Family Partner */}
          <Card className="max-w-4xl mx-auto mb-12 overflow-hidden bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900 border-amber-200 dark:border-amber-800">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto">
                  <img 
                    src="/assets/partners/lewis-charity-siblings.jpg" 
                    alt="Lewis Kizer and Charity Teague"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-3 bg-amber-600 text-white">
                    <Heart className="w-3 h-3 mr-1" /> Family Partnership
                  </Badge>
                  <h3 className="text-2xl font-bold font-playfair mb-2">Charity's Chocolate</h3>
                  <p className="text-sm text-muted-foreground mb-1">Martin, TN</p>
                  <p className="text-muted-foreground mb-4">
                    Hand-painted, gluten-free artisan chocolates crafted by Lewis's sister. 
                    Small-batch bonbons that are as beautiful as they are delicious.
                  </p>
                  <Link to="/charitys-chocolate">
                    <Button className="w-fit bg-amber-600 hover:bg-amber-700 text-white">
                      Learn More <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

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
                  <p className="text-sm text-muted-foreground mb-2">{partner.location}</p>
                  <p className="text-muted-foreground mb-4">{partner.description}</p>
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium inline-flex items-center"
                  >
                    Visit Website
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
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