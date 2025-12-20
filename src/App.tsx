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
import Sevierville from "./pages/Sevierville";
import Gatlinburg from "./pages/Gatlinburg";
import PigeonForge from "./pages/PigeonForge";
import OakRidge from "./pages/OakRidge";
import Cleveland from "./pages/Cleveland";
import Cookeville from "./pages/Cookeville";
import Crossville from "./pages/Crossville";
import Maryville from "./pages/Maryville";
import Dandridge from "./pages/Dandridge";
import Seymour from "./pages/Seymour";
import Alcoa from "./pages/Alcoa";
import Athens from "./pages/Athens";
import LenoirCity from "./pages/LenoirCity";
import Loudon from "./pages/Loudon";
import Sweetwater from "./pages/Sweetwater";
import Madisonville from "./pages/Madisonville";
import Harriman from "./pages/Harriman";
import LaFollette from "./pages/LaFollette";
import Tazewell from "./pages/Tazewell";
import Jellico from "./pages/Jellico";
import ServiceAreas from "./pages/ServiceAreas";
import Louisville from "./pages/Louisville";
import BowlingGreen from "./pages/BowlingGreen";
import Owensboro from "./pages/Owensboro";
import Paducah from "./pages/Paducah";
import RichmondKY from "./pages/RichmondKY";
import Frankfort from "./pages/Frankfort";
import Blacksburg from "./pages/Blacksburg";
import Lynchburg from "./pages/Lynchburg";
import TriCitiesMealPrep from "./pages/TriCitiesMealPrep";
import HighProteinShipping from "./pages/HighProteinShipping";
import PersonaMealPrep from "./pages/PersonaMealPrep";
import Athletes from "./pages/Athletes";
import Bariatric from "./pages/Bariatric";
import BariatricLine from "./pages/BariatricLine";
import Families from "./pages/Families";
import Elderly from "./pages/Elderly";
import Winchester from "./pages/Winchester";
import Staunton from "./pages/Staunton";
import Harrisonburg from "./pages/Harrisonburg";
import Danville from "./pages/Danville";
import Martinsville from "./pages/Martinsville";
import Hickory from "./pages/Hickory";
import Gastonia from "./pages/Gastonia";
import Wilmington from "./pages/Wilmington";
import HighPoint from "./pages/HighPoint";
import WinstonSalem from "./pages/WinstonSalem";
import MyrtleBeach from "./pages/MyrtleBeach";
import RockHill from "./pages/RockHill";
import Augusta from "./pages/Augusta";
import Columbus from "./pages/Columbus";
import CharlestonWV from "./pages/CharlestonWV";
import Huntington from "./pages/Huntington";
import Huntsville from "./pages/Huntsville";
import CharitysChocolate from "./pages/CharitysChocolate";
import Sneedville from "./pages/Sneedville";
import Rutledge from "./pages/Rutledge";
import BeanStation from "./pages/BeanStation";
import NewTazewell from "./pages/NewTazewell";
import Harrogate from "./pages/Harrogate";
import Maynardville from "./pages/Maynardville";
import MacroCalculator from "./pages/MacroCalculator";
import MealQuiz from "./pages/MealQuiz";
import Order from "./pages/Order";
import KetoMeals from "./pages/KetoMeals";
import HighProtein from "./pages/HighProtein";
import PaleoMeals from "./pages/PaleoMeals";
import LowCarb from "./pages/LowCarb";
import GiftCards from "./pages/GiftCards";

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
          <Route path="/service-areas" element={<ServiceAreas />} />
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
          <Route path="/sevierville" element={<Sevierville />} />
          <Route path="/gatlinburg" element={<Gatlinburg />} />
          <Route path="/pigeon-forge" element={<PigeonForge />} />
          <Route path="/oak-ridge" element={<OakRidge />} />
          <Route path="/cleveland" element={<Cleveland />} />
          <Route path="/cookeville" element={<Cookeville />} />
          <Route path="/crossville" element={<Crossville />} />
          <Route path="/maryville" element={<Maryville />} />
          <Route path="/dandridge" element={<Dandridge />} />
          <Route path="/seymour" element={<Seymour />} />
          <Route path="/alcoa" element={<Alcoa />} />
          <Route path="/athens" element={<Athens />} />
          <Route path="/lenoir-city" element={<LenoirCity />} />
          <Route path="/loudon" element={<Loudon />} />
          <Route path="/sweetwater" element={<Sweetwater />} />
          <Route path="/madisonville" element={<Madisonville />} />
          <Route path="/harriman" element={<Harriman />} />
          <Route path="/la-follette" element={<LaFollette />} />
          <Route path="/tazewell" element={<Tazewell />} />
          <Route path="/jellico" element={<Jellico />} />
          <Route path="/louisville" element={<Louisville />} />
          <Route path="/bowling-green" element={<BowlingGreen />} />
          <Route path="/owensboro" element={<Owensboro />} />
          <Route path="/paducah" element={<Paducah />} />
          <Route path="/richmond-ky" element={<RichmondKY />} />
          <Route path="/frankfort" element={<Frankfort />} />
          <Route path="/blacksburg" element={<Blacksburg />} />
          <Route path="/lynchburg" element={<Lynchburg />} />
          <Route path="/tri-cities-meal-prep" element={<TriCitiesMealPrep />} />
          <Route path="/high-protein-shipping" element={<HighProteinShipping />} />
          <Route path="/persona-meal-prep" element={<PersonaMealPrep />} />
          <Route path="/athletes" element={<Athletes />} />
          <Route path="/bariatric" element={<Bariatric />} />
          <Route path="/bariatric-line" element={<BariatricLine />} />
          <Route path="/families" element={<Families />} />
          <Route path="/elderly" element={<Elderly />} />
          <Route path="/winchester" element={<Winchester />} />
          <Route path="/staunton" element={<Staunton />} />
          <Route path="/harrisonburg" element={<Harrisonburg />} />
          <Route path="/danville" element={<Danville />} />
          <Route path="/martinsville" element={<Martinsville />} />
          <Route path="/hickory" element={<Hickory />} />
          <Route path="/gastonia" element={<Gastonia />} />
          <Route path="/wilmington" element={<Wilmington />} />
          <Route path="/high-point" element={<HighPoint />} />
          <Route path="/winston-salem" element={<WinstonSalem />} />
          <Route path="/myrtle-beach" element={<MyrtleBeach />} />
          <Route path="/rock-hill" element={<RockHill />} />
          <Route path="/augusta" element={<Augusta />} />
          <Route path="/columbus" element={<Columbus />} />
          <Route path="/charleston-wv" element={<CharlestonWV />} />
          <Route path="/huntington" element={<Huntington />} />
          <Route path="/huntsville" element={<Huntsville />} />
          <Route path="/charitys-chocolate" element={<CharitysChocolate />} />
          <Route path="/sneedville" element={<Sneedville />} />
          <Route path="/rutledge" element={<Rutledge />} />
          <Route path="/bean-station" element={<BeanStation />} />
          <Route path="/new-tazewell" element={<NewTazewell />} />
          <Route path="/harrogate" element={<Harrogate />} />
          <Route path="/maynardville" element={<Maynardville />} />
          <Route path="/macro-calculator" element={<MacroCalculator />} />
          <Route path="/meal-quiz" element={<MealQuiz />} />
          <Route path="/order" element={<Order />} />
          <Route path="/gift-cards" element={<GiftCards />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
