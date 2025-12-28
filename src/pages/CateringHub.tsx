import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Flower, 
  Building2, 
  Stethoscope, 
  Church, 
  UtensilsCrossed,
  Leaf,
  ArrowRight
} from "lucide-react";

const CateringHub = () => {
  const breadcrumbItems = [
    { label: "Catering", href: "/catering-services" }
  ];

  const cateringServices = [
    {
      icon: Heart,
      title: "Wedding Catering",
      description: "Elegant, customizable menus for your special day. From rehearsal dinners to receptions.",
      href: "/catering/wedding",
      available: false
    },
    {
      icon: Flower,
      title: "Funeral & Celebration of Life",
      description: "Thoughtful catering during difficult times. We handle everything with care and respect.",
      href: "/catering/funeral",
      available: false
    },
    {
      icon: Building2,
      title: "Corporate & Office Catering",
      description: "Impress clients and fuel your team with professional catering for meetings and events.",
      href: "/catering/corporate",
      available: false
    },
    {
      icon: Stethoscope,
      title: "Medical / Drug Rep Catering",
      description: "Reliable, on-time delivery for medical offices. HIPAA-conscious and professionally packaged.",
      href: "/catering/medical",
      available: false
    },
    {
      icon: Church,
      title: "Church & Ministry Catering",
      description: "Feed your congregation with wholesome meals for fellowships, retreats, and special events.",
      href: "/catering/church",
      available: false
    },
    {
      icon: UtensilsCrossed,
      title: "Charcuterie Catering",
      description: "Beautiful, artisan charcuterie boards and grazing tables for any occasion.",
      href: "/catering/charcuterie",
      available: false
    }
  ];

  const cateringFAQs = [
    {
      question: "What areas does SmashMeals Catering serve?",
      answer: "We provide full-service catering throughout the Tri-Cities region including Kingsport, Johnson City, Bristol, and surrounding Northeast Tennessee communities. We also serve Southwest Virginia and Western North Carolina for larger events."
    },
    {
      question: "How far in advance should I book catering?",
      answer: "We recommend booking at least 2 weeks in advance for most events. For weddings and large corporate events, 4-6 weeks notice ensures we can accommodate all your needs. Last-minute requests are considered based on availability."
    },
    {
      question: "Do you offer gluten-free catering options?",
      answer: "Yes! All of our catering menus can be prepared 100% gluten-free in our dedicated gluten-free kitchen. This makes us a trusted choice for guests with celiac disease or gluten sensitivity."
    },
    {
      question: "What is your minimum order for catering?",
      answer: "Minimums vary by service type. Most catering orders start at 10-15 guests. Contact us for specific requirements for your event type and we'll work with your budget."
    },
    {
      question: "Do you provide setup and serving staff?",
      answer: "Yes, we offer full-service catering with setup, serving staff, and cleanup. We also offer drop-off catering for simpler events. Choose the level of service that fits your needs."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Event Catering Services in Tri-Cities TN | SmashMeals Catering</title>
        <meta 
          name="description" 
          content="Full-service event catering in Kingsport, Johnson City, Bristol & Northeast Tennessee. Weddings, corporate events, funerals, church gatherings & more. Gluten-free options available." 
        />
        <meta name="keywords" content="catering near me, event catering, wedding catering Tri-Cities, corporate catering Kingsport, funeral catering Johnson City, gluten-free catering Tennessee" />
        <link rel="canonical" href="https://smashmeals.com/catering-services" />
      </Helmet>

      <Header />
      <PageBreadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Full-Service <span className="text-primary">Event Catering</span> in East Tennessee
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              From intimate gatherings to large-scale events, SmashMeals Catering brings exceptional food and 
              professional service to every occasion. Proudly serving Kingsport, Johnson City, Bristol, 
              and communities throughout the Tri-Cities region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:lew@smashmeals.com?subject=Catering%20Inquiry">
                <Button variant="hero" size="lg" className="text-lg px-8">
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="tel:+14234834733">
                <Button variant="outline" size="lg" className="text-lg px-8">
                  Call (423) 483-4733
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose SmashMeals Catering?</h2>
            <p className="text-lg text-muted-foreground">
              With over 8 years of experience feeding Northeast Tennessee, we bring the same quality 
              and care to every catered event that our meal prep customers love.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">100% Gluten-Free Kitchen</h3>
              <p className="text-muted-foreground">
                Safe for celiac guests. All meals prepared in our dedicated gluten-free facility.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Locally Owned & Operated</h3>
              <p className="text-muted-foreground">
                Born in Kingsport, serving the Tri-Cities. We know this community and care about every event.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Events of All Sizes</h3>
              <p className="text-muted-foreground">
                From 10 guests to 500+. We scale our service to match your needs with reliability you can count on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Catering Services Grid */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Catering Services</h2>
            <p className="text-lg text-muted-foreground">
              Select a service to learn more, or contact us directly to discuss your event needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {cateringServices.map((service, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <a 
                  href={`mailto:lew@smashmeals.com?subject=${encodeURIComponent(service.title + ' Inquiry')}`}
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  Request Quote
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dietary Flexibility */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                    <Leaf className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Dietary Flexibility for Every Guest</h2>
                  <p className="text-lg text-muted-foreground mb-4">
                    We understand that events bring together people with different dietary needs. Our catering 
                    menus can accommodate <strong>gluten-free</strong>, <strong>high-protein</strong>, 
                    <strong>low-carb</strong>, and <strong>keto-friendly</strong> options—all prepared 
                    in our 100% gluten-free kitchen.
                  </p>
                  <p className="text-muted-foreground">
                    From bariatric-friendly portions to heart-healthy entrees, we work with you to create 
                    a menu that welcomes everyone to the table.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Plan Your Event?</h2>
            <p className="text-lg opacity-90 mb-8">
              Tell us about your upcoming event in Kingsport, Johnson City, Bristol, or anywhere in 
              Northeast Tennessee. We'll create a custom catering proposal tailored to your needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:lew@smashmeals.com?subject=Catering%20Inquiry%20-%20Event%20Details">
                <Button 
                  size="lg" 
                  className="bg-background text-foreground hover:bg-background/90 text-lg px-8"
                >
                  Get a Free Quote
                </Button>
              </a>
              <a href="tel:+14234834733">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8"
                >
                  Call Us Today
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area SEO Content */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl font-bold mb-4">Catering Throughout Northeast Tennessee & Beyond</h3>
            <p className="text-muted-foreground">
              SmashMeals Catering proudly serves the Tri-Cities area including <strong>Kingsport</strong>, 
              <strong> Johnson City</strong>, <strong>Bristol</strong>, and surrounding communities like 
              Elizabethton, Gray, Jonesborough, Erwin, and Greeneville. We also travel to Southwest Virginia 
              and Western North Carolina for larger events. Searching for "catering near me" or "event catering" 
              in Northeast Tennessee? You've found your local, trusted partner.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={cateringFAQs} />
      <Footer />
    </div>
  );
};

export default CateringHub;
