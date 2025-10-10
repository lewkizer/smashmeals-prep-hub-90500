import { Button } from "@/components/ui/button";
import { Users, Briefcase, Heart, Trophy } from "lucide-react";

const Catering = () => {
  const eventTypes = [
    { icon: Briefcase, name: "Corporate Events" },
    { icon: Heart, name: "Weddings" },
    { icon: Trophy, name: "Sports Teams" },
    { icon: Users, name: "Private Parties" },
  ];

  return (
    <section id="catering" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Catering Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Need meals for a team, wedding, or corporate event? SmashMeals catering delivers flavor at scale.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {eventTypes.map((event, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <event.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold">{event.name}</h3>
              </div>
            ))}
          </div>

          <div className="bg-card border border-border rounded-lg p-8 text-center">
            <div className="mb-6">
              <div className="flex items-center justify-center space-x-1 text-yellow-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground italic">
                "Outstanding catering service! The gluten-free options were delicious and accommodated all our guests perfectly."
              </p>
              <p className="text-sm text-muted-foreground mt-2">— Verified ezCater Review</p>
            </div>
            <Button variant="hero" size="lg">
              Request a Catering Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catering;
