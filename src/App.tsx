import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MealDetail from "./pages/MealDetail";
import GlutenFreeMealPrepGuide from "./pages/GlutenFreeMealPrepGuide";
import ProductDetail from "./pages/ProductDetail";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Catering from "./pages/Catering";
import Menu from "./pages/Menu";
import FAQ from "./pages/FAQ";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import JohnsonCity from "./pages/JohnsonCity";
import Kingsport from "./pages/Kingsport";
import Bristol from "./pages/Bristol";
import Asheville from "./pages/Asheville";
import Greeneville from "./pages/Greeneville";
import Knoxville from "./pages/Knoxville";
import Elizabethton from "./pages/Elizabethton";
import Abingdon from "./pages/Abingdon";
import Damascus from "./pages/Damascus";
import Gray from "./pages/Gray";
import Chucky from "./pages/Chucky";
import Mosheim from "./pages/Mosheim";
import Unicoi from "./pages/Unicoi";
import Telford from "./pages/Telford";
import Limestone from "./pages/Limestone";
import FallBranch from "./pages/FallBranch";
import MountCarmel from "./pages/MountCarmel";
import ChurchHill from "./pages/ChurchHill";
import Rogersville from "./pages/Rogersville";
import Morristown from "./pages/Morristown";
import MountainCity from "./pages/MountainCity";
import Tusculum from "./pages/Tusculum";
import Baileyton from "./pages/Baileyton";
import BullsGap from "./pages/BullsGap";
import Surgoinsville from "./pages/Surgoinsville";
import Newport from "./pages/Newport";
import GladeSpring from "./pages/GladeSpring";
import Chilhowie from "./pages/Chilhowie";
import Marion from "./pages/Marion";
import PineyFlats from "./pages/PineyFlats";
import Blountville from "./pages/Blountville";
import Erwin from "./pages/Erwin";
import WashingtonDC from "./pages/WashingtonDC";
import Jonesborough from "./pages/Jonesborough";
import Charlotte from "./pages/Charlotte";
import Greenville from "./pages/Greenville";
import Chattanooga from "./pages/Chattanooga";
import Lexington from "./pages/Lexington";
import Nashville from "./pages/Nashville";
import Roanoke from "./pages/Roanoke";
import TriadNC from "./pages/TriadNC";
import Richmond from "./pages/Richmond";
import Charlottesville from "./pages/Charlottesville";
import BooneHickory from "./pages/BooneHickory";
import Spartanburg from "./pages/Spartanburg";
import Atlanta from "./pages/Atlanta";
import RaleighDurham from "./pages/RaleighDurham";
import Charleston from "./pages/Charleston";
import Columbia from "./pages/Columbia";
import Thanksgiving from "./pages/Thanksgiving";
import GLP1 from "./pages/GLP1";
import ComparisonPage from "./pages/ComparisonPage";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import CustomerAuth from "./pages/CustomerAuth";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Account from "./pages/Account";
import Partners from "./pages/Partners";
import DeliveryInfo from "./pages/DeliveryInfo";
import HeatAndEat from "./pages/HeatAndEat";
import VideoPage from "./pages/VideoPage";
import FreezerMeals from "./pages/FreezerMeals";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about" element={<About />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/johnson-city" element={<JohnsonCity />} />
          <Route path="/kingsport" element={<Kingsport />} />
          <Route path="/bristol" element={<Bristol />} />
          <Route path="/asheville" element={<Asheville />} />
          <Route path="/greeneville" element={<Greeneville />} />
          <Route path="/knoxville" element={<Knoxville />} />
          <Route path="/elizabethton" element={<Elizabethton />} />
          <Route path="/abingdon" element={<Abingdon />} />
          <Route path="/piney-flats" element={<PineyFlats />} />
          <Route path="/blountville" element={<Blountville />} />
          <Route path="/erwin" element={<Erwin />} />
          <Route path="/washington-dc" element={<WashingtonDC />} />
          <Route path="/jonesborough" element={<Jonesborough />} />
          <Route path="/charlotte" element={<Charlotte />} />
          <Route path="/greenville" element={<Greenville />} />
          <Route path="/chattanooga" element={<Chattanooga />} />
          <Route path="/lexington" element={<Lexington />} />
          <Route path="/nashville" element={<Nashville />} />
          <Route path="/roanoke" element={<Roanoke />} />
          <Route path="/triad-nc" element={<TriadNC />} />
          <Route path="/richmond" element={<Richmond />} />
          <Route path="/charlottesville" element={<Charlottesville />} />
          <Route path="/boone-hickory" element={<BooneHickory />} />
          <Route path="/spartanburg" element={<Spartanburg />} />
          <Route path="/atlanta" element={<Atlanta />} />
          <Route path="/raleigh-durham" element={<RaleighDurham />} />
          <Route path="/charleston" element={<Charleston />} />
          <Route path="/columbia" element={<Columbia />} />
          <Route path="/thanksgiving" element={<Thanksgiving />} />
          <Route path="/glp1" element={<GLP1 />} />
          <Route path="/vs-clean-eatz" element={<ComparisonPage />} />
          <Route path="/comparison" element={<ComparisonPage />} />
          <Route path="/damascus" element={<Damascus />} />
          <Route path="/gray" element={<Gray />} />
          <Route path="/chucky" element={<Chucky />} />
          <Route path="/mosheim" element={<Mosheim />} />
          <Route path="/unicoi" element={<Unicoi />} />
          <Route path="/telford" element={<Telford />} />
          <Route path="/limestone" element={<Limestone />} />
          <Route path="/fall-branch" element={<FallBranch />} />
          <Route path="/mount-carmel" element={<MountCarmel />} />
          <Route path="/church-hill" element={<ChurchHill />} />
          <Route path="/rogersville" element={<Rogersville />} />
          <Route path="/morristown" element={<Morristown />} />
          <Route path="/mountain-city" element={<MountainCity />} />
          <Route path="/tusculum" element={<Tusculum />} />
          <Route path="/baileyton" element={<Baileyton />} />
          <Route path="/bulls-gap" element={<BullsGap />} />
          <Route path="/surgoinsville" element={<Surgoinsville />} />
          <Route path="/newport" element={<Newport />} />
          <Route path="/glade-spring" element={<GladeSpring />} />
          <Route path="/chilhowie" element={<Chilhowie />} />
          <Route path="/marion" element={<Marion />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/customer-auth" element={<CustomerAuth />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account" element={<Account />} />
          <Route path="/delivery-info" element={<DeliveryInfo />} />
          <Route path="/heat-and-eat" element={<HeatAndEat />} />
          <Route path="/freezer-meals" element={<FreezerMeals />} />
          <Route path="/meals/:slug" element={<MealDetail />} />
          <Route path="/gluten-free-meal-prep-guide" element={<GlutenFreeMealPrepGuide />} />
          <Route path="/video/:slug" element={<VideoPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
