import { Card } from "@/components/ui/card";
import { Star, Quote, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import GoogleReviews from "./GoogleReviews";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Randy Johnson",
      location: "Tri-Cities, TN",
      rating: 5,
      text: "Over the last 3 months, SmashMeals has been a huge part of my Fit by 51 journey. I'm down over 20 pounds, and for the first time in a long time, it feels sustainable, not extreme. What sets SmashMeals apart isn't just the taste — it's the clarity and consistency. Every meal is clearly labeled with calories and macros, which makes planning my week simple and stress-free. SmashMeals has removed the daily decision-fatigue around food. If fat loss, structure, and long-term consistency matter to you, SmashMeals delivers.",
      meal: "Fit by 51 Journey",
      verified: true,
      source: "Google",
      tags: ["Weight loss", "Macro tracking", "Consistency", "Fat loss"],
      featured: true
    },
    {
      name: "Amanda Smith",
      location: "Tri-Cities, TN",
      rating: 5,
      text: "This has honestly been a life saver! On days like today when school lets out early and I'm trying to navigate the day, it takes the guess work out. I came home, put the kids down for a nap, and had lunch ready in 90 seconds.",
      meal: "Busy Mom Favorite",
      verified: true,
      source: "Facebook",
      tags: ["Time saver", "Busy parents", "Quick meals", "Family-friendly"],
      featured: true
    },
    {
      name: "Becky Halbrook",
      location: "Sullivan County, TN",
      rating: 5,
      text: "We recently utilized Smash Meals for a football banquet in Sullivan County, and I must say that Smash Meals was truly exceptional. The food was remarkable, and not a single barbecue sandwich remained. He was very helpful even when I asked a million questions. I highly recommend their services for your meal preparation and catering requirements.",
      meal: "Catering - Football Banquet",
      verified: true,
      source: "Facebook",
      tags: ["Fast delivery", "Comfort food", "Large portions", "Child-friendly"]
    },
    {
      name: "Sarah M.",
      location: "Kingsport, TN",
      rating: 5,
      text: "SmashMeals has been a game-changer for our family! As someone with celiac disease, I finally have a meal prep service I can trust completely. The food is delicious and saves me hours every week.",
      meal: "Bourbon Chicken Bowl",
    },
    {
      name: "Mike R.",
      location: "Johnson City, TN",
      rating: 5,
      text: "I've tried other meal prep services, but nothing compares to SmashMeals. The portions are perfect for my fitness goals, and I love that the menu changes every week. Never boring!",
      meal: "Protein Pancakes",
    },
    {
      name: "Jennifer L.",
      location: "Bristol, TN",
      rating: 5,
      text: "As a busy mom of three, SmashMeals has given me my evenings back. No more 'what's for dinner?' stress. The kids love the meals, and I love knowing they're eating healthy gluten-free food.",
      meal: "Teriyaki Beef Bowl",
    },
    {
      name: "David K.",
      location: "Greeneville, TN",
      rating: 5,
      text: "The convenience can't be beat! I pick up meals on Sunday, and I'm set for the week. Everything tastes fresh and restaurant-quality. Worth every penny.",
      meal: "BBQ Chicken",
    },
    {
      name: "Amanda T.",
      location: "Kingsport, TN",
      rating: 5,
      text: "I was skeptical about gluten-free meals tasting good, but SmashMeals proved me wrong. The flavors are incredible, and knowing exactly what I'm eating helps me hit my health goals.",
      meal: "Chicken Chili",
    },
    {
      name: "Robert H.",
      location: "Johnson City, TN",
      rating: 5,
      text: "Best decision I've made this year! SmashMeals is more affordable than grocery shopping when you factor in time saved and zero food waste. Plus, Lewis and the team are amazing to work with.",
      meal: "Taco Bowl",
    },
  ];

  // Generate Organization schema with aggregateRating (no nested reviews)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://smashmeals.com/#organization",
    "name": "SmashMeals",
    "url": "https://smashmeals.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://smashmeals.com/og-image.jpg",
      "width": "1200",
      "height": "630"
    },
    "image": "https://smashmeals.com/og-image.jpg",
    "description": "100% gluten-free meal prep delivery service serving the Tri-Cities area and shipping nationwide.",
    "telephone": "+1-423-525-2489",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1917 Meadowview Pkwy Suite 100",
      "addressLocality": "Kingsport",
      "addressRegion": "TN",
      "postalCode": "37660",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.facebook.com/smashmeals",
      "https://www.instagram.com/smashmeals"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>
      <section id="testimonials" className="py-12 md:py-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 md:mb-16">
            <div className="flex justify-center items-center gap-1 md:gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 md:w-8 md:h-8 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-3 md:mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg md:text-xl font-inter text-muted-foreground mb-4 md:mb-6">
              Join over 10,000 satisfied customers in the Tri-Cities
            </p>
            <div className="inline-flex items-center gap-2 md:gap-3 bg-white/80 dark:bg-card/80 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full shadow-card">
              <div className="flex gap-0.5 md:gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-base md:text-lg font-bold font-inter">5.0 on Google</span>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="p-5 md:p-8 border-0 bg-white/80 dark:bg-card/80 backdrop-blur-sm shadow-card hover:shadow-elevated transition-all hover:scale-105 relative"
              >
                <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
                
                {/* Verified Badge */}
                {testimonial.verified && (
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-xs font-semibold text-green-600 dark:text-green-400">
                      Verified {testimonial.source} Review
                    </span>
                  </div>
                )}

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-inter text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Tags */}
                {testimonial.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {testimonial.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full font-inter"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Reviewer Info */}
                <div className="border-t border-border pt-4">
                  <p className="font-bold font-playfair text-lg">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground font-inter">{testimonial.location}</p>
                  <p className="text-sm text-primary font-semibold font-inter mt-2">
                    {testimonial.meal.includes("Catering") ? testimonial.meal : `Favorite: ${testimonial.meal}`}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Live Google Reviews */}
          <GoogleReviews />

          {/* Google Reviews CTA */}
          <div className="text-center">
            <Card className="inline-block p-8 border-0 bg-gradient-to-br from-primary/10 via-background to-accent/5 backdrop-blur-sm shadow-elevated">
              <p className="text-lg font-inter text-muted-foreground mb-6">
                Want to see more? Check out our reviews on Google
              </p>
              <a 
                href="https://www.google.com/search?q=smashmeals+kingsport" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="font-inter">
                  Read All Google Reviews
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Testimonials;
