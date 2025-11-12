import { Heart, Users, Clock } from "lucide-react";

const Mission = () => {
  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-foreground mb-6">
              Our Why
            </h2>
            <p className="text-2xl md:text-3xl font-playfair text-primary mb-8 italic">
              "We started SmashMeals to give families their time back—without sacrificing health or flavor."
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              For 8+ years, we've been the Tri-Cities' trusted meal prep partner. We believe everyone deserves 
              delicious, nutritious meals that fit their lifestyle—especially those navigating gluten-free living. 
              From busy parents to fitness enthusiasts, we're here to fuel your life so you can focus on what matters most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Health First</h3>
              <p className="text-muted-foreground">
                100% gluten-free, made with real ingredients you can trust
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Driven</h3>
              <p className="text-muted-foreground">
                Built by locals, for locals—serving the Tri-Cities with pride
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Time Back</h3>
              <p className="text-muted-foreground">
                Spend less time cooking, more time living your best life
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
