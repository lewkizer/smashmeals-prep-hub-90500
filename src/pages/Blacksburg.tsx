import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CitySchema from "@/components/CitySchema";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Truck, Package, Clock, CheckCircle, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Blacksburg = () => {
  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep Blacksburg VA | Virginia Tech Delivery | SmashMeals</title>
        <meta name="description" content="Premium gluten-free meal prep delivered to Blacksburg, VA and Virginia Tech campus. Chef-prepared meals for students, athletes, and professionals. FREE shipping on orders over $130." />
        <meta name="keywords" content="meal prep Blacksburg, gluten free Blacksburg VA, healthy meal delivery Virginia Tech, VT meal prep, Hokie meal delivery" />
        <link rel="canonical" href="https://smashmeals.com/blacksburg" />
      </Helmet>

      <CitySchema cityName="Blacksburg" state="Virginia" stateAbbr="VA" />

      <Header />

      <main className="min-h-screen">
        <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Now Shipping to Blacksburg, VA</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Blacksburg's Premier<br />Gluten-Free Meal Prep Delivery
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Fresh, chef-prepared meals for Virginia Tech students, athletes, and Blacksburg professionals. Nutrition that matches Hokie excellence.
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
              Why Blacksburg Loves SmashMeals
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6">
                <Award className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">100% Gluten-Free Kitchen</h3>
                <p className="text-muted-foreground">
                  Certified gluten-free facility means zero cross-contamination. Safe for Hokies with celiac disease and gluten sensitivity.
                </p>
              </Card>

              <Card className="p-6">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Division I Athlete Nutrition</h3>
                <p className="text-muted-foreground">
                  8+ years fueling college athletes. Perfect for VT student-athletes and Blacksburg's active community.
                </p>
              </Card>

              <Card className="p-6">
                <CheckCircle className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Campus Convenient</h3>
                <p className="text-muted-foreground">
                  Delivered to campus or off-campus housing. No shopping, no cooking, no cleanup. More time for studies.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              How It Works for Hokies
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <Card className="p-6 text-center">
                <Clock className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Order by Thursday</h3>
                <p className="text-muted-foreground">Browse weekly menu online</p>
              </Card>

              <Card className="p-6 text-center">
                <Package className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Fresh Prep</h3>
                <p className="text-muted-foreground">Chef-prepared Friday</p>
              </Card>

              <Card className="p-6 text-center">
                <Truck className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Campus Delivery</h3>
                <p className="text-muted-foreground">FedEx to Blacksburg</p>
              </Card>

              <Card className="p-6 text-center">
                <CheckCircle className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Enjoy All Week</h3>
                <p className="text-muted-foreground">Stays fresh 7-10 days</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-8">
              Meal Prep Delivery to Blacksburg & Virginia Tech
            </h2>
            <div className="prose prose-lg max-w-none space-y-6">
              <p>
                Blacksburg and Virginia Tech students now have access to premium gluten-free meal prep delivered right to campus or off-campus housing. SmashMeals eliminates the stress of grocery shopping and meal planning, giving Hokies more time for academics, athletics, and campus life.
              </p>
              
              <h3 className="text-2xl font-bold font-playfair mt-8">Perfect for Virginia Tech Students</h3>
              <p>
                Whether you're managing engineering coursework, training as a VT athlete, or juggling student organizations, SmashMeals provides the nutrition you need without the time investment. Each meal is portion-controlled, macro-balanced, and ready in minutes—perfect for dorm microwaves and busy schedules.
              </p>

              <h3 className="text-2xl font-bold font-playfair mt-8">Hokie-Approved Gluten-Free</h3>
              <p>
                Our dedicated gluten-free facility ensures every meal is safe for students with celiac disease or gluten sensitivity. Virginia Tech's health-conscious community can trust that every meal is prepared with the same rigor and excellence Hokies expect in everything.
              </p>

              <h3 className="text-2xl font-bold font-playfair mt-8">Blacksburg Delivery Details</h3>
              <p>
                Order by Thursday and receive your meals via FedEx delivery to anywhere in Blacksburg—on-campus dorms, off-campus apartments, or your Blacksburg home. Free shipping on orders over $130 makes healthy eating affordable on a student budget.
              </p>

              <h3 className="text-2xl font-bold font-playfair mt-8">Trusted by Athletes, Perfect for Students</h3>
              <p>
                SmashMeals has been fueling Division I athletes for over 8 years. Now Virginia Tech students have access to the same professional-grade nutrition. Whether you're competing at Lane Stadium or studying in Newman Library, proper nutrition supports your Hokie success.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Ready to Fuel Your Hokie Success?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join Virginia Tech students and athletes who've simplified their nutrition with SmashMeals.
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

export default Blacksburg;
