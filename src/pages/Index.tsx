import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StickyOrderBanner from "@/components/StickyOrderBanner";
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

const Index = () => {
  return (
    <div className="min-h-screen">
      <MenuSchema />
      <StickyOrderBanner />
      <Header />
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
      <Footer />
      <SEOContent />
    </div>
  );
};

export default Index;
