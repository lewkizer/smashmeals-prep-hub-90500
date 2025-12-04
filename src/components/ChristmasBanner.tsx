import { Gift, Snowflake } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ChristmasBanner = () => {
  return (
    <section className="relative overflow-hidden bg-red-600 py-6 md:py-8 px-4">
      {/* Decorative snowflakes */}
      <div className="absolute inset-0 opacity-20">
        <Snowflake className="absolute top-2 left-[10%] h-8 w-8 text-white animate-pulse" />
        <Snowflake className="absolute bottom-2 left-[30%] h-6 w-6 text-white animate-pulse" />
        <Snowflake className="absolute top-3 right-[20%] h-10 w-10 text-white animate-pulse" />
        <Snowflake className="absolute bottom-1 right-[40%] h-5 w-5 text-white animate-pulse" />
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center justify-center gap-4 text-white text-center">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4">
            <Gift className="hidden md:block h-10 w-10 md:h-12 md:w-12 text-yellow-300 animate-bounce" />
            <div>
              <h2 className="text-lg md:text-2xl lg:text-3xl font-bold font-playfair">
                🎄 Christmas Menu Now Available!
              </h2>
              <p className="text-xs md:text-base text-white/90 font-inter mt-1">
                Order by Thursday, Dec 19th for Christmas Week Delivery • 100% Gluten-Free Holiday Meals
              </p>
            </div>
          </div>
          
          <a 
            href="/christmas" 
            className="shrink-0"
          >
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-red-700 hover:bg-yellow-100 font-bold shadow-lg hover:shadow-xl transition-all"
            >
              <Gift className="mr-2 h-5 w-5" />
              View Christmas Menu
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ChristmasBanner;