import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CitySchema from "@/components/CitySchema";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Truck, Package, Clock, CheckCircle, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

const RichmondKY = () => {
  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep Richmond KY | EKU Area Delivery | SmashMeals</title>
        <meta name="description" content="Fresh gluten-free meal prep delivered to Richmond, KY and EKU campus area. Chef-prepared meals for students, families, and professionals. FREE shipping on orders over $130." />
        <meta name="keywords" content="meal prep Richmond KY, gluten free Richmond Kentucky, healthy meal delivery EKU, Eastern Kentucky University meal prep" />
        <link rel="canonical" href="https://smashmeals.com/richmond-ky" />
      </Helmet>

      <CitySchema cityName="Richmond" state="Kentucky" stateAbbr="KY" />

      <Header />

      <main className="min-h-screen">
        <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Now Shipping to Richmond, KY</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Richmond's Fresh<br />Gluten-Free Meal Prep Delivery
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Premium meal prep for Richmond and EKU community. Chef-prepared, nutritionally balanced, delivered to your door.
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
              Why Richmond Chooses SmashMeals
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6">
                <Award className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">100% Gluten-Free</h3>
                <p className="text-muted-foreground">
                  Dedicated facility with zero cross-contamination. Safe for celiac disease and gluten sensitivity.
                </p>
              </Card>

              <Card className="p-6">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">EKU Student & Athlete Approved</h3>
                <p className="text-muted-foreground">
                  Trusted nutrition for Division I athletes. Perfect for busy EKU students and Richmond professionals.
                </p>
              </Card>

              <Card className="p-6">
                <CheckCircle className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Time-Saving Convenience</h3>
                <p className="text-muted-foreground">
                  No grocery shopping, no meal prep. Just heat and enjoy delicious, healthy meals all week.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              Simple Process for Richmond Residents
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <Card className="p-6 text-center">
                <Clock className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Order by Thursday</h3>
                <p className="text-muted-foreground">Select from weekly rotating menu</p>
              </Card>

              <Card className="p-6 text-center">
                <Package className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Fresh Preparation</h3>
                <p className="text-muted-foreground">Cooked Friday in certified kitchen</p>
              </Card>

              <Card className="p-6 text-center">
                <Truck className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
                <p className="text-muted-foreground">Arrives at your Richmond address</p>
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
              Premium Meal Prep for Richmond, Kentucky
            </h2>
            <div className="prose prose-lg max-w-none space-y-6">
              <p>
                Richmond residents and EKU students can now access chef-prepared, gluten-free meal prep delivered directly to their doorstep. SmashMeals eliminates the hassle of grocery shopping and meal planning while ensuring you eat healthy, delicious food every day.
              </p>
              
              <h3 className="text-2xl font-bold font-playfair mt-8">Perfect for the EKU Community</h3>
              <p>
                Whether you're a busy EKU student managing classes and activities, a Colonels athlete in training, or a Richmond professional juggling career and family, SmashMeals provides the nutrition you need without the time investment. Each meal is portion-controlled and macro-balanced for optimal performance.
              </p>

              <h3 className="text-2xl font-bold font-playfair mt-8">Safe Gluten-Free for Madison County</h3>
              <p>
                Our dedicated gluten-free kitchen means every meal is safe for those with celiac disease or gluten intolerance. Richmond's gluten-free community finally has access to convenient, restaurant-quality meals without cross-contamination concerns.
              </p>

              <h3 className="text-2xl font-bold font-playfair mt-8">Richmond Delivery Details</h3>
              <p>
                Order by Thursday and receive your meals via FedEx delivery to anywhere in Richmond or Madison County. Free shipping on orders over $130 makes healthy eating affordable. Meals arrive in insulated packaging and stay fresh in your refrigerator for 7-10 days.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Start Your Richmond Meal Prep Journey
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join EKU students, athletes, and Richmond families enjoying hassle-free nutrition.
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

export default RichmondKY;
