import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import CitySchema from "@/components/CitySchema";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Truck, CheckCircle, Package, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Atlanta = () => {
  const faqs = [
    {
      question: "Do you deliver to Atlanta, GA?",
      answer: "Yes. SmashMeals ships prepared meals to Atlanta-area addresses served by our regional FedEx shipping program. Check the current ordering page for shipping availability and pricing for your address."
    },
    {
      question: "Are SmashMeals gluten-free?",
      answer: "SmashMeals prepares its menu in a dedicated 100% gluten-free kitchen. If you have celiac disease, a food allergy, or another medical dietary need, review current ingredient and allergen information and follow the guidance of your healthcare professional."
    },
    {
      question: "How do shipped meals arrive?",
      answer: "Meals shipped through our regional FedEx program are sent frozen in insulated packaging with cold packs so they stay cold during transit."
    },
    {
      question: "Do I need a subscription?",
      answer: "No. Order when you need meals with no subscription required."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Gluten-Free Meal Prep Atlanta GA | SmashMeals Delivery</title>
        <meta name="description" content="Gluten-free prepared meals shipped to Atlanta, GA. Macro information, rotating weekly choices, regional FedEx shipping and no subscription required." />
        <meta name="keywords" content="meal prep Atlanta, gluten free Atlanta GA, healthy meal delivery Atlanta, prepared meals Atlanta" />
        <link rel="canonical" href="https://smashmeals.com/atlanta" />
      </Helmet>

      <CitySchema cityName="Atlanta" state="Georgia" stateAbbr="GA" />

      <Header />
      <PageBreadcrumb 
        parentPage={{ label: "Service Areas", href: "/service-areas" }} 
        currentPage="Atlanta, GA" 
      />

      <main className="min-h-screen">
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Regional Shipping to Atlanta, GA</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                Gluten-Free Meal Prep<br />Shipped to Atlanta
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Chef-prepared, gluten-free meals for busy Atlanta weeks, training days, family schedules and anyone who wants an easier way to keep prepared food on hand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="lg" className="text-lg">View This Week's Menu</Button>
                </a>
                <Link to="/how-it-works">
                  <Button variant="outline" size="lg" className="text-lg">How Shipping Works</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">Built for Real Atlanta Schedules</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <Clock className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Order Weekly</h3>
                <p className="text-muted-foreground">Choose from the current rotating menu before the weekly order deadline.</p>
              </Card>
              <Card className="p-6 text-center">
                <Package className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Prepared in Tennessee</h3>
                <p className="text-muted-foreground">Meals are prepared in our dedicated gluten-free kitchen, frozen for shipping and packed for regional delivery.</p>
              </Card>
              <Card className="p-6 text-center">
                <Truck className="w-12 h-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Shipped to Your Door</h3>
                <p className="text-muted-foreground">Use the current ordering page to confirm shipping service and pricing for your Atlanta-area address.</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-6">One Meal Service, More Ways to Use It</h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">SmashMeals can fit different goals without pretending one diet works for everyone. Start with the menu and nutrition information, then choose meals that fit your own plan.</p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8">
                <CheckCircle className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Training & High Protein</h3>
                <p className="text-muted-foreground mb-4">For lifters, runners and busy gym members who want prepared meals with nutrition information instead of another stop after training.</p>
                <Link className="font-semibold text-primary" to="/high-protein-meal-delivery">Explore high-protein meal delivery</Link>
              </Card>
              <Card className="p-8">
                <CheckCircle className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">GLP-1-Friendly Planning</h3>
                <p className="text-muted-foreground mb-4">For customers using GLP-1 medications who want convenient prepared-food options. Medication and nutrition needs are individual; follow your prescriber's guidance.</p>
                <Link className="font-semibold text-primary" to="/glp1">Read our GLP-1 meal guide</Link>
              </Card>
              <Card className="p-8">
                <CheckCircle className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4">Send Meals to Someone Else</h3>
                <p className="text-muted-foreground">Ship prepared meals to a friend, relative, college student, new parent or loved one who could use a stocked freezer and fewer meals to plan.</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-6">Atlanta Meal Prep Without the Subscription</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">From Buckhead and Midtown to Decatur and communities across metro Atlanta, prepared meals can make a packed week simpler. Order for yourself or send food to someone you care about. SmashMeals publishes nutrition information so customers can compare choices for protein, carbohydrates and fats before ordering.</p>
          </div>
        </section>

        <FAQSection faqs={faqs} />

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">See What SmashMeals Is Cooking This Week</h2>
            <p className="text-xl text-muted-foreground mb-8">Browse the current menu, review nutrition information and confirm shipping for your address before checkout.</p>
            <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="text-lg">View This Week's Menu</Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Atlanta;
