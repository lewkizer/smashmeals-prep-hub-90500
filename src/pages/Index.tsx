import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import HowItWorks from "@/components/HowItWorks";
import WeeklyMenu from "@/components/WeeklyMenu";
import PickupLocations from "@/components/PickupLocations";
import Catering from "@/components/Catering";
import About from "@/components/About";
import Shipping from "@/components/Shipping";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import SEOContent from "@/components/SEOContent";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TrustStrip />
      <HowItWorks />
      <WeeklyMenu />
      <Testimonials />
      <PickupLocations />
      <Catering />
      <About />
      <Shipping />
      <Newsletter />
      <Footer />
      <SEOContent />
    </div>
  );
};

export default Index;
