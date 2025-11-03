import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
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
import PineyFlats from "./pages/PineyFlats";
import Blountville from "./pages/Blountville";
import Erwin from "./pages/Erwin";
import WashingtonDC from "./pages/WashingtonDC";
import Jonesborough from "./pages/Jonesborough";
import Thanksgiving from "./pages/Thanksgiving";
import GLP1 from "./pages/GLP1";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";

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
          <Route path="/thanksgiving" element={<Thanksgiving />} />
          <Route path="/glp1" element={<GLP1 />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin" element={<Admin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
