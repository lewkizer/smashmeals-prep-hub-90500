import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CitySchema from "@/components/CitySchema";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Truck, Package, Clock, CheckCircle, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Louisville = () => {
  const faqItems = [
    {
      question: "Do you deliver meal prep to Louisville KY?",
      answer: "Yes! We deliver premium gluten-free meal prep to Louisville, Kentucky every week. Order by Thursday for delivery the following week."
    },
    {
      question: "Is SmashMeals safe for celiac disease?",
      answer: "Absolutely. Our entire facility is 100% gluten-free with zero cross-contamination risk. Trusted by the gluten-free community for over 8 years."
    },
    {
      question: "How much does meal prep delivery cost in Louisville?",
      answer: "Meals range from $10-14 per serving with FREE shipping on orders over $130. Most customers easily meet this with a week's worth of meals."
    },
    {
      question: "How long do the meals stay fresh?",
      answer: "Our meals stay fresh for 7-10 days refrigerated or up to 6 months frozen—longer than most competitors."
    },
    {
      question: "What makes SmashMeals different from other meal prep services?",
      answer: "We're a 100% gluten-free facility with 8+ years of experience. Our meals are chef-prepared, macro-counted, and delivered fresh—never frozen during shipping."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep Louisville KY | Fresh Delivery | SmashMeals</title>
        <meta name="description" content="Premium gluten-free meal prep delivered to Louisville, KY. Chef-prepared meals for busy Derby City professionals, families, and health-conscious residents. FREE shipping on orders over $130." />
        <meta name="keywords" content="meal prep Louisville, gluten free Louisville KY, healthy meal delivery Louisville, meal prep delivery Louisville Kentucky, chef prepared meals Louisville" />
        <link rel="canonical" href="https://smashmeals.com/louisville" />
      </Helmet>

      <CitySchema cityName="Louisville" state="Kentucky" stateAbbr="KY" />

      <Header />

      <main className="min-h-screen">
        <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Now Shipping to Louisville, KY</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Louisville's Premier<br />Gluten-Free Meal Prep Delivery
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Fresh, chef-prepared meals delivered to Derby City. Perfect for busy Louisville professionals, families, and anyone committed to healthy eating without the prep work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="lg" className="text-lg">
                    View This Week's Menu
                  </Button>
                </a>
                <Link to="/service-areas">
                  <Button variant="outline" size="lg" className="text-lg">
                    Delivery Areas
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              Why Louisville Loves SmashMeals
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6">
                <Award className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">100% Gluten-Free Kitchen</h3>
                <p className="text-muted-foreground">
                  Dedicated gluten-free facility means zero cross-contamination. Perfect for Louisville's growing celiac and gluten-sensitive community.
                </p>
              </Card>

              <Card className="p-6">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">8+ Years Serving Athletes</h3>
                <p className="text-muted-foreground">
                  Performance-minded nutrition now available to Louisville residents. Professional-grade meals for your active lifestyle.
                </p>
              </Card>

              <Card className="p-6">
                <CheckCircle className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Derby City Convenient</h3>
                <p className="text-muted-foreground">
                  Order by Thursday, delivered to your Louisville doorstep. No traffic, no grocery shopping, no meal prep stress.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              How SmashMeals Works for Louisville
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <Card className="p-6 text-center">
                <Clock className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">1. Order by Thursday</h3>
                <p className="text-muted-foreground">Browse our weekly rotating menu and select your meals online</p>
              </Card>

              <Card className="p-6 text-center">
                <Package className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">2. We Prep Fresh</h3>
                <p className="text-muted-foreground">Chef-prepared Friday in our dedicated gluten-free kitchen</p>
              </Card>

              <Card className="p-6 text-center">
                <Truck className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">3. Fast Shipping</h3>
                <p className="text-muted-foreground">FedEx delivery to Louisville in insulated packaging</p>
              </Card>

              <Card className="p-6 text-center">
                <CheckCircle className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">4. Heat & Enjoy</h3>
                <p className="text-muted-foreground">Ready in minutes. Stays fresh 7-10 days refrigerated</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-8">
              Meal Prep Delivery to Louisville, Kentucky
            </h2>
            <div className="prose prose-lg max-w-none space-y-6">
              <p>
                Louisville residents now have access to premium gluten-free meal prep without leaving Derby City. SmashMeals delivers chef-prepared, nutritionally balanced meals directly to your Louisville home or office, making healthy eating effortless for busy professionals, families, and health-conscious Kentuckians.
              </p>
              
              <h3 className="text-2xl font-bold font-playfair mt-8">Perfect for Louisville's Active Lifestyle</h3>
              <p>
                Whether you're training for the Derby Marathon, managing a demanding career in Louisville's thriving healthcare or bourbon industries, or simply prioritizing your family's nutrition, SmashMeals takes the stress out of meal planning. Each meal is portion-controlled, macro-balanced, and ready in minutes.
              </p>

              <h3 className="text-2xl font-bold font-playfair mt-8">100% Gluten-Free Guarantee</h3>
              <p>
                Our dedicated gluten-free facility means zero cross-contamination risk. Every meal is safe for those with celiac disease, gluten sensitivity, or anyone choosing a gluten-free lifestyle. Louisville's gluten-free community can finally enjoy restaurant-quality meals with complete peace of mind.
              </p>

              <h3 className="text-2xl font-bold font-playfair mt-8">Convenient Louisville Delivery</h3>
              <p>
                Skip the Kroger runs and crowded Whole Foods aisles. Order by Thursday, and your meals arrive at your Louisville address ready to stock your fridge for the week. Free shipping on orders over $130 makes premium nutrition affordable and accessible.
              </p>

              <h3 className="text-2xl font-bold font-playfair mt-8">Trusted by Athletes, Perfect for Everyone</h3>
              <p>
                SmashMeals has been preparing high-protein, macro-counted meals for over 8 years. Louisville residents can now access the same performance-minded nutrition. Whether you're an athlete, busy parent, or health-focused professional, our meals support your goals.
              </p>
            </div>
          </div>
        </section>

        <FAQSection faqs={faqItems} />

        <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Ready to Simplify Your Louisville Meal Prep?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join Louisville families and professionals who've reclaimed their time with SmashMeals. FREE shipping on orders over $130.
            </p>
            <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="text-lg">
                Order This Week's Menu
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Louisville;
