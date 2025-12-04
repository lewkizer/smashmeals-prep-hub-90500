import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StickyOrderBanner from "@/components/StickyOrderBanner";
import ChristmasBanner from "@/components/ChristmasBanner";
import TrustStrip from "@/components/TrustStrip";
import HowItWorks from "@/components/HowItWorks";
import FeaturedMeals from "@/components/FeaturedMeals";
import SmashBarShowcase from "@/components/SmashBarShowcase";
import Testimonials from "@/components/Testimonials";
import Mission from "@/components/Mission";
import WeeklyMenu from "@/components/WeeklyMenu";
import PickupLocations from "@/components/PickupLocations";
import Catering from "@/components/Catering";
import About from "@/components/About";
import Shipping from "@/components/Shipping";
import Footer from "@/components/Footer";
import SEOContent from "@/components/SEOContent";
import MenuSchema from "@/components/MenuSchema";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  const homepageFAQs = [
    {
      question: "How does SmashMeals delivery work in Kingsport?",
      answer: "Order by Thursday at 11:59 PM online. We prepare your meals fresh over the weekend in our 100% gluten-free kitchen. Meals are delivered fresh Monday morning with free local delivery on orders $50+ to Kingsport, Johnson City, Bristol, Gray, Colonial Heights, and Blountville."
    },
    {
      question: "Do you ship gluten-free meals nationwide?",
      answer: "Yes! We ship to 98+ cities across the Southeast and beyond using FedEx 2-day delivery. Free shipping on orders $130+. Your meals arrive Tuesday or Wednesday in insulated packaging with ice packs."
    },
    {
      question: "Are your meals safe for celiac disease?",
      answer: "Absolutely. Every meal is prepared in our dedicated 100% gluten-free kitchen with zero cross-contamination risk. We've been serving customers with celiac disease safely for over 8 years with no incidents."
    },
    {
      question: "Are SmashMeals macro-counted?",
      answer: "Yes! Every meal includes a detailed nutrition label showing exact calories, protein (30-45g per meal), carbohydrates, fats, and fiber. Perfect for tracking macros and hitting fitness goals."
    },
    {
      question: "Are these meals good for athletes or GLP-1 users?",
      answer: "Definitely! We're the official meal prep partner for ETSU Division I athletics. Our high-protein (30-45g), macro-counted meals are perfect for athletes, bodybuilders, GLP-1 users (Ozempic, Wegovy, Mounjaro), bariatric patients, and anyone focused on nutrition."
    },
    {
      question: "How long do the meals last?",
      answer: "Our meals stay fresh for 5-7 days refrigerated or up to 6 months frozen. This superior shelf life (longer than most competitors) means less waste and more flexibility in your eating schedule."
    },
    {
      question: "Do I need a subscription?",
      answer: "No! Order as much or as little as you need each week with zero commitments. Many customers order 5-15 meals weekly, but you can order 1 meal or 50—it's totally up to you."
    }
  ];

  return (
    <div className="min-h-screen">
      <MenuSchema />
      <LocalBusinessSchema />
      <StickyOrderBanner />
      <Header />
      <ChristmasBanner />
      <Hero />
      <TrustStrip />
      <HowItWorks />
      <FeaturedMeals />
      <SmashBarShowcase />
      <Testimonials />
      <Mission />
      <WeeklyMenu />
      <PickupLocations />
      <Catering />
      <About />
      <Shipping />
      <FAQSection faqs={homepageFAQs} />
      <Footer />
      <SEOContent />
    </div>
  );
};

export default Index;
