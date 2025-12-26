import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CitySchema from "@/components/CitySchema";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Truck, Package, Clock, Shield, ChefHat, Home, Star, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const JeffersonCity = () => {
  const faqs = [
    {
      question: "Do you deliver to Jefferson City, Tennessee?",
      answer: "Yes! SmashMeals offers home delivery to Jefferson City and all of Jefferson County. We also ship via FedEx for those who prefer delivery."
    },
    {
      question: "Is there a minimum order for Jefferson City?",
      answer: "There's no minimum order. However, orders over $130 qualify for FREE shipping. For local delivery, we deliver on Sundays and Mondays."
    },
    {
      question: "How close is Jefferson City to your kitchen?",
      answer: "Jefferson City is just about 45 minutes from our Kingsport kitchen, making it one of our closest delivery areas in East Tennessee."
    },
    {
      question: "What's special about SmashMeals' gluten-free guarantee?",
      answer: "Our entire kitchen is 100% dedicated gluten-free. No wheat, barley, or rye ever enters our facility—providing complete safety for those with celiac disease."
    },
    {
      question: "Can I order for my family of 4-5 people?",
      answer: "Absolutely! Many Jefferson City families order 15-25 meals weekly. It's an affordable way to feed the whole family healthy, gluten-free meals."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep Jefferson City TN | Local Delivery | SmashMeals</title>
        <meta name="description" content="Gluten-free meal prep delivered to Jefferson City, Tennessee. Local East Tennessee meal prep from a dedicated gluten-free kitchen. Free shipping on orders $130+!" />
        <meta name="keywords" content="gluten free meal prep Jefferson City, meal delivery Jefferson City TN, healthy meal prep Jefferson County Tennessee, gluten free food Jefferson City, East Tennessee meal prep" />
        <link rel="canonical" href="https://smashmeals.com/jefferson-city" />
        <meta property="og:title" content="Gluten-Free Meal Prep Jefferson City TN | SmashMeals" />
        <meta property="og:description" content="Local gluten-free meal prep for Jefferson City, Tennessee. From our East Tennessee kitchen to your table." />
        <meta property="og:url" content="https://smashmeals.com/jefferson-city" />
      </Helmet>

      <CitySchema cityName="Jefferson City" state="Tennessee" stateAbbr="TN" />

      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Now Delivering to Jefferson City, TN</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Gluten-Free Meal Prep<br />for Jefferson City
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Your East Tennessee neighbors in Kingsport are cooking up fresh, 100% gluten-free 
                meals just for you. Local quality, delivered to Jefferson County.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="lg" className="text-lg px-8">
                    View This Week's Menu
                  </Button>
                </a>
                <Link to="/service-areas">
                  <Button variant="outline" size="lg" className="text-lg">
                    All Delivery Areas
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-12 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold">100% Gluten-Free</h3>
                <p className="text-sm text-muted-foreground">Dedicated kitchen</p>
              </Card>
              <Card className="p-6 text-center">
                <Home className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold">Local Business</h3>
                <p className="text-sm text-muted-foreground">East Tennessee owned</p>
              </Card>
              <Card className="p-6 text-center">
                <Truck className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold">Free Shipping</h3>
                <p className="text-sm text-muted-foreground">Orders $130+</p>
              </Card>
              <Card className="p-6 text-center">
                <Star className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-bold">8+ Years</h3>
                <p className="text-sm text-muted-foreground">Trusted service</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Jefferson City Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-6">
              Why Jefferson City Chooses SmashMeals
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              As your East Tennessee neighbors, we understand the importance of fresh, local food. 
              Our Kingsport kitchen is just 45 minutes away, ensuring the freshest possible meals 
              for Jefferson County families.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8">
                <Home className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Locally Made</h3>
                <p className="text-muted-foreground">
                  We're your East Tennessee neighbors! Our kitchen in Kingsport means shorter 
                  delivery times and fresher meals for Jefferson City residents.
                </p>
              </Card>
              <Card className="p-8">
                <Heart className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Celiac-Safe Kitchen</h3>
                <p className="text-muted-foreground">
                  Our entire facility is 100% gluten-free. No wheat, barley, or rye ever enters 
                  our kitchen—perfect for families managing celiac disease.
                </p>
              </Card>
              <Card className="p-8">
                <ChefHat className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Family-Friendly</h3>
                <p className="text-muted-foreground">
                  From picky eaters to health-conscious parents, our diverse menu has something 
                  for everyone. Full nutrition info on every meal.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <Clock className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Order by Thursday</h3>
                <p className="text-muted-foreground">Browse our weekly menu and order before Thursday 11:59 PM EST</p>
              </Card>

              <Card className="p-6 text-center">
                <Package className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Fresh Prep</h3>
                <p className="text-muted-foreground">We cook your meals fresh over the weekend in Kingsport</p>
              </Card>

              <Card className="p-6 text-center">
                <Truck className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Jefferson City Delivery</h3>
                <p className="text-muted-foreground">Receive your meals fresh via local delivery or FedEx shipping</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Areas Served */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-6">
              Serving Jefferson County
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-8">
              We deliver throughout Jefferson County and nearby communities:
            </p>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {["Jefferson City", "Dandridge", "White Pine", "New Market", "Strawberry Plains", 
                "Baneberry", "Talbott", "Morristown", "Newport", "Sevierville"].map((area) => (
                <span key={area} className="px-4 py-2 bg-muted rounded-full text-sm font-medium">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
              Jefferson City FAQs
            </h2>
            <FAQSection faqs={faqs} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Ready for Local Gluten-Free Meals?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Free shipping on orders over $130. Support your East Tennessee neighbors!
            </p>
            <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="text-lg px-12">
                Order Now
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default JeffersonCity;
