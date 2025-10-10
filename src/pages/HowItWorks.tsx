import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, DollarSign, ShoppingBag, MapPin, Clock, Calendar, Package, Truck, Snowflake, Star } from "lucide-react";
import fedexMap from "@/assets/fedex-coverage-map.webp";

const HowItWorks = () => {
  const steps = [
    {
      icon: BookOpen,
      title: "See What's New",
      description: "Each Monday our website will be updated with new menu items and link to order. Breakfasts, Entrees and Snack options change weekly. Additionally, we always have our sides and bulk foods items available on our order site.",
    },
    {
      icon: DollarSign,
      title: "Order Your Delicious Meal",
      description: "Orders are taken through our online ordering system. You may choose to pay for your order via card or an offline option. If wanting to use cash, check, PayPal or Venmo, then the offline option is for you.",
    },
    {
      icon: ShoppingBag,
      title: "Pick Up Your Meals",
      description: "We offer a variety of pickup locations for your convenience throughout Kingsport, Greeneville and Johnson City, TN. We also offer home delivery in the area and shipping with FedEx.",
    },
  ];

  const pickupSchedule = {
    sunday: [
      { location: "SmashMeals Kitchen", time: "2:00 – 3:00 PM", link: "https://www.smashmeals.com/" },
      { location: "Bristol Pinnacle", address: "Parking lot between Dick's Sporting Goods and Tesla Charging", time: "2:00 PM", link: "https://www.tesla.com/findus/location/supercharger/bristoltnsupercharger" },
      { location: "Collart Chiropractic", time: "4:00 – 4:15 PM", link: "https://www.collartchiro.com/" },
      { location: "Misfits fitness Drop off Fridge", time: "Available after 4:30 PM" },
    ],
    monday: [
      { location: "Crossfit Arcane", address: "75 Tusculum Heights Dr, Tusculum, TN 37745", link: "https://www.google.com/maps/search/75+Tusculum+Heights+Dr+Tusculum+TN+37745" },
      { location: "Olson's Martial Arts", address: "Under ECU sign, Johnson City", time: "5:00 PM", link: "https://olsonsma.com/" },
      { location: "Build power grind", time: "6:00 PM" },
      { location: "Center of Strength", address: "Bulls Gap, TN", time: "9:00 – 10:00 AM & 4:30 – 6:30 PM", link: "https://www.cosfit22.com/" },
    ],
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold font-playfair mb-6">
              How It Works
            </h1>
            <p className="text-xl font-inter text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to healthy, delicious gluten-free meals
            </p>
          </div>

          {/* Weekly Timeline - Most Important Info */}
          <div className="max-w-5xl mx-auto">
            <Card className="p-8 md:p-12 border-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 backdrop-blur-sm shadow-elevated">
              <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-8">
                Your Weekly Schedule
              </h2>
              
              <div className="grid md:grid-cols-4 gap-6">
                {/* Monday */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-card">
                    <Calendar className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-playfair mb-2">Monday</h3>
                  <p className="text-sm font-inter text-muted-foreground">New menu posted</p>
                </div>

                {/* Thursday */}
                <div className="text-center relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-xs font-bold animate-pulse">
                    DEADLINE
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-elevated">
                    <Clock className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-bold font-playfair mb-2 text-accent">Thursday</h3>
                  <p className="text-sm font-inter font-semibold">Order by 11:59 PM</p>
                </div>

                {/* Friday */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-card">
                    <Package className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold font-playfair mb-2">Friday</h3>
                  <p className="text-sm font-inter text-muted-foreground">We cook your meals</p>
                </div>

                {/* Sunday/Monday */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-elevated">
                    <ShoppingBag className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold font-playfair mb-2">Sun & Mon</h3>
                  <p className="text-sm font-inter text-muted-foreground">Pick up your meals</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-center mb-16">
            Getting Started is Easy
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <Card 
                key={index} 
                className="p-8 text-center hover:shadow-soft transition-all duration-300 border-0 bg-white/60 dark:bg-card/60 backdrop-blur-sm group hover:scale-105"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto shadow-card group-hover:shadow-elevated transition-all">
                    <step.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-sm shadow-card">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-bold font-playfair mb-4">{step.title}</h3>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  {step.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pickup Schedule - Prominent & Clear */}
      <section className="py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
              Pickup Locations & Times
            </h2>
            <p className="text-xl font-inter text-muted-foreground">
              Choose the location that works best for you
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Sunday Pickups */}
            <Card className="p-8 border-0 bg-white/80 dark:bg-card/80 backdrop-blur-sm shadow-elevated">
              <div className="flex items-center justify-between mb-8 pb-6 border-b-2 border-primary/20">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center shadow-card">
                    <Calendar className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold font-playfair">Sunday</h3>
                    <p className="text-sm font-inter text-muted-foreground">4 pickup options</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                {pickupSchedule.sunday.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-transparent hover:from-primary/10 transition-all group">
                    {item.link ? (
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-primary/20 hover:bg-primary/30 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm transition-all duration-300 hover:scale-110"
                        title="Open in Maps"
                      >
                        <MapPin className="w-6 h-6 text-primary" />
                      </a>
                    ) : (
                      <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                    )}
                    <div className="flex-1">
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                          <h4 className="font-bold font-playfair text-lg mb-1 group-hover:text-primary transition-colors">{item.location}</h4>
                        </a>
                      ) : (
                        <h4 className="font-bold font-playfair text-lg mb-1">{item.location}</h4>
                      )}
                      {item.address && (
                        <p className="text-xs text-muted-foreground mb-1 font-inter">{item.address}</p>
                      )}
                      <div className="flex items-center gap-2 text-primary font-semibold font-inter">
                        <Clock className="w-4 h-4" />
                        <span>{item.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Monday Pickups */}
            <Card className="p-8 border-0 bg-white/80 dark:bg-card/80 backdrop-blur-sm shadow-elevated">
              <div className="flex items-center justify-between mb-8 pb-6 border-b-2 border-accent/20">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center shadow-card">
                    <Calendar className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold font-playfair">Monday</h3>
                    <p className="text-sm font-inter text-muted-foreground">4 pickup options</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                {pickupSchedule.monday.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-accent/5 to-transparent hover:from-accent/10 transition-all group">
                    {item.link ? (
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-accent/20 hover:bg-accent/30 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm transition-all duration-300 hover:scale-110"
                        title="Open in Maps"
                      >
                        <MapPin className="w-6 h-6 text-accent" />
                      </a>
                    ) : (
                      <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                        <MapPin className="w-6 h-6 text-accent" />
                      </div>
                    )}
                    <div className="flex-1">
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                          <h4 className="font-bold font-playfair text-lg mb-1 group-hover:text-accent transition-colors">{item.location}</h4>
                        </a>
                      ) : (
                        <h4 className="font-bold font-playfair text-lg mb-1">{item.location}</h4>
                      )}
                      {item.address && (
                        <p className="text-xs text-muted-foreground mb-1 font-inter">{item.address}</p>
                      )}
                      {item.time && (
                        <div className="flex items-center gap-2 text-accent font-semibold font-inter">
                          <Clock className="w-4 h-4" />
                          <span>{item.time}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Kitchen Address - Prominent */}
          <div className="mt-12">
            <Card className="p-8 md:p-12 max-w-4xl mx-auto border-0 bg-gradient-to-br from-primary/10 via-background to-accent/5 backdrop-blur-sm shadow-elevated text-center">
              <a 
                href="https://maps.google.com/?q=1917+Meadowview+Parkway+Suite+100+Kingsport+TN+37660"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:scale-110 transition-transform duration-300"
                title="Open in Maps"
              >
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              </a>
              <h4 className="text-2xl font-bold font-playfair mb-4">SmashMeals Kitchen</h4>
              <a 
                href="https://maps.google.com/?q=1917+Meadowview+Parkway+Suite+100+Kingsport+TN+37660"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <p className="font-inter text-xl mb-2">1917 Meadowview Parkway Suite 100</p>
                <p className="font-inter text-xl text-muted-foreground mb-8">Kingsport, TN 37660</p>
              </a>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="tel:4235252489">
                  <Button variant="default" size="lg" className="font-inter">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    (423) 525-2489
                  </Button>
                </a>
                <a href="mailto:lew@smashmeals.com">
                  <Button variant="outline" size="lg" className="font-inter">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Email Us
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Shipping Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold mb-6 shadow-card">
                NEW - NATIONWIDE SHIPPING
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
                Can't Pick Up? We Ship!
              </h2>
              <p className="text-xl font-inter text-muted-foreground max-w-3xl mx-auto">
                Now shipping our gluten-free meals anywhere FedEx can deliver in 2 days. <span className="font-bold text-foreground">Shipped meals arrive frozen</span> for maximum freshness.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-8 text-center border-0 bg-white/80 dark:bg-card/80 backdrop-blur-sm shadow-elevated hover:scale-105 transition-all">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-card">
                  <Truck className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold font-playfair mb-3">FedEx 2-Day</h3>
                <p className="text-muted-foreground font-inter">Fast, reliable nationwide delivery</p>
              </Card>

              <Card className="p-8 text-center border-0 bg-white/80 dark:bg-card/80 backdrop-blur-sm shadow-elevated hover:scale-105 transition-all">
                <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-card">
                  <Snowflake className="w-10 h-10 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold font-playfair mb-3">Frozen Fresh</h3>
                <p className="text-muted-foreground font-inter">Arrives frozen with ice packs and insulation</p>
              </Card>

              <Card className="p-8 text-center border-0 bg-white/80 dark:bg-card/80 backdrop-blur-sm shadow-elevated hover:scale-105 transition-all">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-card">
                  <Package className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold font-playfair mb-3">Insulated Packaging</h3>
                <p className="text-muted-foreground font-inter">Stays cold during transit</p>
              </Card>
            </div>

            <Card className="p-8 md:p-12 border-0 bg-white/90 dark:bg-card/90 backdrop-blur-sm shadow-elevated">
              <h3 className="text-3xl font-bold font-playfair text-center mb-8">
                Shipping Coverage Area
              </h3>
              <div className="mb-6">
                <img 
                  src={fedexMap} 
                  alt="FedEx 2-day shipping coverage map showing delivery areas across the United States" 
                  className="w-full h-auto rounded-lg shadow-soft"
                />
              </div>
              <div className="flex flex-wrap gap-6 justify-center items-center text-center">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-8 bg-[#FF1493] rounded"></div>
                  <span className="font-inter font-semibold">1-Day Delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-8 bg-[#00CED1] rounded"></div>
                  <span className="font-inter font-semibold">2-Day Delivery</span>
                </div>
              </div>
              <p className="text-center text-muted-foreground font-inter mt-6 text-lg">
                We ship to all <span className="font-bold text-foreground">blue and red areas</span> shown on the map
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl font-inter text-muted-foreground mb-12">
              Trusted by over 10,000 satisfied customers
            </p>
            
            <div className="flex justify-center items-center gap-2 mb-12">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-2xl font-bold font-inter ml-2">5.0 on Google</span>
            </div>

            <Card className="p-8 border-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 backdrop-blur-sm shadow-elevated">
              <div className="text-center mb-6">
                <a 
                  href="https://www.google.com/search?q=smashmeals+kingsport" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="hero" size="lg" className="font-inter shadow-elevated">
                    Read Our Google Reviews
                  </Button>
                </a>
              </div>
              <p className="text-muted-foreground font-inter">
                See what our customers are saying about SmashMeals on Google
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-secondary to-background text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Ready to Get Started?
            </h3>
            <p className="text-xl font-inter text-muted-foreground mb-8">
              Browse this week's menu and place your order before <span className="text-accent font-bold">Thursday at midnight</span>
            </p>
            <a href="https://smashmeals.bottle.com/b/9521039" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="text-lg px-12 py-7 h-auto font-inter shadow-elevated hover:shadow-[0_30px_90px_-20px_hsl(var(--primary)/0.6)]">
                View Menu & Order Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
