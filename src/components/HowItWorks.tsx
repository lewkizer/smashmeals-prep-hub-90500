import { ShoppingCart, MapPin, Utensils } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: ShoppingCart,
      title: "Choose Your Meals",
      description: "Select from our rotating weekly menu of fresh, gluten-free options.",
      step: "1",
    },
    {
      icon: MapPin,
      title: "Pick Up, Deliver, or Ship",
      description: "Convenient pickup sites, doorstep delivery, or insulated shipping nationwide.",
      step: "2",
    },
    {
      icon: Utensils,
      title: "Heat & Eat",
      description: "Ready in minutes, fresh all week. No prep, no stress, just delicious meals.",
      step: "3",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting your weekly meals is simple. Just three easy steps to healthy eating.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                {step.step}
              </div>

              {/* Card */}
              <div className="bg-card border border-border rounded-lg p-8 pt-12 text-center hover:shadow-lg transition-all h-full card-hover">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
