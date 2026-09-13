import { Award, Shield, Users, Star } from "lucide-react";

const TrustStrip = () => {
  const features = [
    {
      icon: Award,
      text: "8+ Years Serving Tri-Cities",
    },
    {
      icon: Shield,
      text: "100% Gluten-Free Kitchen",
    },
    {
      icon: Users,
      text: "Built for Active Lifestyles",
    },
    {
      icon: Star,
      text: "5-Star Catering Reviews",
    },
  ];

  const bgColors = [
    "bg-[hsl(var(--trust-green))]",
    "bg-[hsl(var(--trust-coral))]",
    "bg-[hsl(var(--trust-blue))]",
    "bg-[hsl(var(--trust-amber))]",
  ];

  const iconColors = [
    "text-primary",
    "text-accent",
    "text-[hsl(200_60%_50%)]",
    "text-[hsl(40_70%_50%)]",
  ];

  return (
    <section className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center space-y-3 group transition-transform hover:scale-105 duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl ${bgColors[index]} flex items-center justify-center shadow-card transition-all duration-300 group-hover:shadow-soft`}>
                <feature.icon className={`w-8 h-8 ${iconColors[index]} transition-transform group-hover:scale-110 duration-300`} />
              </div>
              <p className="text-sm font-medium font-inter text-foreground">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
