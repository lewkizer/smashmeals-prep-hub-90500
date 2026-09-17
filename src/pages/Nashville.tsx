import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import CitySchema from "@/components/CitySchema";
import FAQSection from "@/components/FAQSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Truck, CheckCircle, Package, Dumbbell, Heart, Gift } from "lucide-react";
import { Link } from "react-router-dom";

const Nashville = () => {
  const faqs = [
    {
      question: "Does SmashMeals ship prepared meals to Nashville?",
      answer: "Yes. Nashville is served through our regional shipping program when the destination qualifies for our current shipping window. Confirm availability and pricing for your address on the current ordering page."
    },
    {
      question: "Are SmashMeals gluten-free?",
      answer: "SmashMeals prepares its menu in a dedicated 100% gluten-free kitchen. Customers with celiac disease, food allergies, or other medical dietary needs should review current ingredient and allergen information and follow their healthcare professional's guidance."
    },
    {
      question: "Do shipped meals arrive fresh or frozen?",
      answer: "Meals shipped through our regional FedEx program are sent frozen in insulated packaging with cold packs so they stay cold during transit."
    },
    {
      question: "Can I send SmashMeals to someone else in Nashville?",
      answer: "Yes. You can order prepared meals for a friend, relative, college student, new parent, caregiver household, or someone else whose Nashville-area address is eligible for shipping."
    },
    {
      question: "Do I have to subscribe?",
      answer: "No. SmashMeals does not require a subscription. Order when the weekly menu fits your needs."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Meal Prep Delivery Nashville TN | Gluten-Free SmashMeals</title>
        <meta name="description" content="Prepared gluten-free meals shipped to Nashville, TN. High-protein options, nutrition information, GLP-1 meal-planning resources and no subscription required." />
        <meta name="keywords" content="meal prep Nashville, prepared meal delivery Nashville, gluten free meal delivery Nashville, high protein meals Nashville" />
        <link rel="canonical" href="https://smashmeals.com/nashville" />
        <meta property="og:title" content="Meal Prep Delivery Nashville TN | SmashMeals" />
        <meta property="og:description" content="Prepared gluten-free meals shipped to Nashville with nutrition information and no subscription required." />
        <meta property="og:url" content="https://smashmeals.com/nashville" />
      </Helmet>

      <CitySchema cityName="Nashville" state="Tennessee" stateAbbr="TN" />
      <Header />
      <PageBreadcrumb parentPage={{ label: "Service Areas", href: "/service-areas" }} currentPage="Nashville, TN" />

      <main className="min-h-screen">
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="max-w-4xl space-y-6">
              <div className="flex items-center gap-2 text-primary">
                <MapPin className="w-6 h-6" />
                <span className="text-lg font-semibold">Prepared Meal Shipping to Nashville, TN</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">Nashville Meal Prep for Training Days, Long Workdays & Real Life</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">SmashMeals ships prepared, gluten-free meals for Nashvillians who want less cooking and more control over what is ready in the freezer—from strength training and busy careers to family schedules and thoughtful meal gifts.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer"><Button variant="hero" size="lg">Shop This Week's Menu</Button></a>
                <Link to="/how-it-works"><Button variant="outline" size="lg">See How Shipping Works</Button></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Why Nashville Customers Use Prepared Meals</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mb-10">A useful meal-delivery page should do more than repeat the city's name. Nashville has commuters, healthcare workers, musicians, students, athletes, parents and caregivers with very different weeks. SmashMeals gives each of them a practical starting point: prepared food, published nutrition information and no required subscription.</p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8">
                <Dumbbell className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">Strength & Performance</h3>
                <p className="text-muted-foreground mb-4">Choose meals using published protein, carbohydrate and fat information when your training plan calls for more intentional nutrition.</p>
                <Link to="/high-protein-meal-delivery" className="font-semibold text-primary">High-protein meal delivery</Link>
              </Card>
              <Card className="p-8">
                <Heart className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">Simpler Weekly Planning</h3>
                <p className="text-muted-foreground">Keep prepared meals available for the nights when work, rehearsals, practices, appointments or family responsibilities leave little time to cook.</p>
              </Card>
              <Card className="p-8">
                <Gift className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-3">Send Food, Not Another Thing</h3>
                <p className="text-muted-foreground">Send meals to a new parent, college student, recovering friend, older relative or busy household. For medical recovery or prescribed diets, the recipient should follow their care team's nutrition guidance.</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-5">From East Nashville to Franklin: A Better Backup Plan for Dinner</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-5">Whether your week runs through Downtown, East Nashville, Green Hills, Bellevue, Brentwood, Franklin or another part of Middle Tennessee, having prepared meals on hand can remove one decision from an already crowded day. Confirm your exact address on the current ordering page because carrier transit times can vary by destination.</p>
              <p className="text-lg text-muted-foreground leading-relaxed">Shipped SmashMeals are frozen for transit and packed in insulated packaging with cold packs. That is the shipping model—not a claim that a box spends two days as a refrigerated fresh meal.</p>
            </div>
            <Card className="p-8 bg-muted/30">
              <Package className="w-10 h-10 text-primary mb-4" />
              <h2 className="text-3xl font-bold font-playfair mb-5">Diet & Goal Resources</h2>
              <div className="space-y-4 text-lg">
                <Link className="block font-semibold text-primary" to="/glp1">GLP-1 meal-planning guide</Link>
                <Link className="block font-semibold text-primary" to="/high-protein-meal-delivery">High-protein meal delivery</Link>
                <Link className="block font-semibold text-primary" to="/keto-meals">Keto meal options</Link>
                <Link className="block font-semibold text-primary" to="/paleo-meals">Paleo meal options</Link>
                <Link className="block font-semibold text-primary" to="/bariatric">Bariatric meal resources</Link>
              </div>
              <p className="text-sm text-muted-foreground mt-6">Dietary and medication needs vary. These resources are for meal planning and do not replace individualized medical advice.</p>
            </Card>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-10">How Nashville Shipping Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6"><h3 className="text-xl font-bold mb-2">1. Pick Your Meals</h3><p className="text-muted-foreground">Browse the rotating menu and nutrition information.</p></Card>
              <Card className="p-6"><h3 className="text-xl font-bold mb-2">2. We Prepare & Freeze</h3><p className="text-muted-foreground">Meals are prepared in our Tennessee gluten-free kitchen and frozen for shipping.</p></Card>
              <Card className="p-6"><Truck className="w-8 h-8 text-primary mb-3" /><h3 className="text-xl font-bold mb-2">3. Regional Delivery</h3><p className="text-muted-foreground">Confirm shipping availability for the destination during ordering.</p></Card>
            </div>
          </div>
        </section>

        <FAQSection faqs={faqs} />

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">Build Your Nashville Meal Box</h2>
            <p className="text-xl text-muted-foreground mb-8">Choose what fits your week. No required subscription.</p>
            <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer"><Button variant="hero" size="lg">View This Week's Menu</Button></a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Nashville;
