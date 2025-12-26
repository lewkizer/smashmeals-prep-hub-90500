import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Navigation } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceAreas = () => {
  const regions = [
    {
      name: "Tri-Cities Area",
      priority: "high",
      cities: [
        { name: "Johnson City", slug: "johnson-city" },
        { name: "Kingsport", slug: "kingsport" },
        { name: "Bristol", slug: "bristol" },
        { name: "Elizabethton", slug: "elizabethton" },
        { name: "Greeneville", slug: "greeneville" },
        { name: "Jonesborough", slug: "jonesborough" },
        { name: "Erwin", slug: "erwin" },
      ]
    },
    {
      name: "East Tennessee",
      priority: "high",
      cities: [
        { name: "Knoxville", slug: "knoxville" },
        { name: "Sevierville", slug: "sevierville" },
        { name: "Gatlinburg", slug: "gatlinburg" },
        { name: "Pigeon Forge", slug: "pigeon-forge" },
        { name: "Maryville", slug: "maryville" },
        { name: "Oak Ridge", slug: "oak-ridge" },
        { name: "Morristown", slug: "morristown" },
        { name: "Cleveland", slug: "cleveland" },
        { name: "Cookeville", slug: "cookeville" },
        { name: "Crossville", slug: "crossville" },
        { name: "Jefferson City", slug: "jefferson-city" },
        { name: "White Pine", slug: "white-pine" },
        { name: "Strawberry Plains", slug: "strawberry-plains" },
      ]
    },
    {
      name: "Surrounding Communities",
      priority: "medium",
      cities: [
        { name: "Piney Flats", slug: "piney-flats" },
        { name: "Blountville", slug: "blountville" },
        { name: "Damascus", slug: "damascus" },
        { name: "Gray", slug: "gray" },
        { name: "Chucky", slug: "chucky" },
        { name: "Mosheim", slug: "mosheim" },
        { name: "Unicoi", slug: "unicoi" },
        { name: "Telford", slug: "telford" },
        { name: "Limestone", slug: "limestone" },
        { name: "Fall Branch", slug: "fall-branch" },
        { name: "Mount Carmel", slug: "mount-carmel" },
        { name: "Church Hill", slug: "church-hill" },
        { name: "Rogersville", slug: "rogersville" },
        { name: "Mountain City", slug: "mountain-city" },
        { name: "Tusculum", slug: "tusculum" },
        { name: "Baileyton", slug: "baileyton" },
        { name: "Bulls Gap", slug: "bulls-gap" },
        { name: "Surgoinsville", slug: "surgoinsville" },
        { name: "Newport", slug: "newport" },
        { name: "Dandridge", slug: "dandridge" },
        { name: "Seymour", slug: "seymour" },
        { name: "Alcoa", slug: "alcoa" },
        { name: "Athens", slug: "athens" },
        { name: "Lenoir City", slug: "lenoir-city" },
        { name: "Loudon", slug: "loudon" },
        { name: "Sweetwater", slug: "sweetwater" },
        { name: "Madisonville", slug: "madisonville" },
        { name: "Harriman", slug: "harriman" },
        { name: "La Follette", slug: "la-follette" },
        { name: "Tazewell", slug: "tazewell" },
        { name: "Jellico", slug: "jellico" },
      ]
    },
    {
      name: "Southwest Virginia",
      priority: "medium",
      cities: [
        { name: "Abingdon", slug: "abingdon" },
        { name: "Glade Spring", slug: "glade-spring" },
        { name: "Chilhowie", slug: "chilhowie" },
        { name: "Marion", slug: "marion" },
        { name: "Wytheville", slug: "wytheville" },
      ]
    },
    {
      name: "Major Metro Areas",
      priority: "high",
      cities: [
        { name: "Asheville, NC", slug: "asheville" },
        { name: "Charlotte, NC", slug: "charlotte" },
        { name: "Raleigh-Durham, NC", slug: "raleigh-durham" },
        { name: "Triad, NC", slug: "triad-nc" },
        { name: "Boone-Hickory, NC", slug: "boone-hickory" },
        { name: "Greensboro, NC", slug: "greensboro" },
        { name: "Banner Elk, NC", slug: "banner-elk" },
        { name: "Fayetteville, NC", slug: "fayetteville" },
        { name: "Greenville, SC", slug: "greenville" },
        { name: "Spartanburg, SC", slug: "spartanburg" },
        { name: "Charleston, SC", slug: "charleston" },
        { name: "Columbia, SC", slug: "columbia" },
        { name: "Savannah, GA", slug: "savannah" },
        { name: "Chattanooga, TN", slug: "chattanooga" },
        { name: "Nashville, TN", slug: "nashville" },
        { name: "Memphis, TN", slug: "memphis" },
        { name: "Birmingham, AL", slug: "birmingham" },
        { name: "Atlanta, GA", slug: "atlanta" },
        { name: "Richmond, VA", slug: "richmond" },
        { name: "Roanoke, VA", slug: "roanoke" },
        { name: "Charlottesville, VA", slug: "charlottesville" },
        { name: "Lexington, KY", slug: "lexington" },
        { name: "Washington, DC", slug: "washington-dc" },
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Service Areas - Meal Prep Delivery | SmashMeals</title>
        <meta name="description" content="Find out if SmashMeals delivers to your area. We serve 70+ cities across Tennessee, Virginia, North Carolina, South Carolina, Georgia, and beyond with fresh gluten-free meal prep delivery." />
        <meta name="keywords" content="meal prep delivery areas, SmashMeals locations, Tennessee meal delivery, gluten free delivery service areas" />
        <link rel="canonical" href="https://smashmeals.com/service-areas" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "SmashMeals Delivery Service",
            "description": "Fresh gluten-free meal prep delivery across Tennessee and surrounding states",
            "provider": {
              "@type": "LocalBusiness",
              "name": "SmashMeals",
              "url": "https://smashmeals.com"
            },
            "areaServed": regions.flatMap(region => 
              region.cities.map(city => ({
                "@type": "City",
                "name": city.name
              }))
            )
          })}
        </script>
      </Helmet>

      <Header />
      <PageBreadcrumb />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-2 text-primary">
                <Navigation className="w-8 h-8" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair">
                We Deliver Fresh Meal Prep<br />Across the Southeast
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                SmashMeals serves 70+ cities with FREE delivery on orders over $130. Find your city below to learn more about delivery to your area.
              </p>
            </div>
          </div>
        </section>

        {/* Service Areas by Region */}
        {regions.map((region, idx) => (
          <section key={idx} className={`py-16 px-4 ${idx % 2 === 0 ? 'bg-background' : 'bg-muted/30'}`}>
            <div className="container mx-auto max-w-6xl">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-2">
                  {region.name}
                </h2>
                {region.priority === "high" && (
                  <p className="text-sm text-primary font-semibold">⚡ Priority Delivery Area</p>
                )}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {region.cities.map((city, cityIdx) => (
                  <Link key={cityIdx} to={`/${city.slug}`}>
                    <Card className="p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                        <span className="font-semibold group-hover:text-primary transition-colors">
                          {city.name}
                        </span>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Ready to Order?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Choose your meals and we'll deliver fresh meal prep right to your door with FREE shipping on orders over $130.
            </p>
            <a href="https://smashmeals.bottle.com/b/9814360" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="text-lg">
                View This Week's Menu
              </Button>
            </a>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <article className="prose prose-lg max-w-none">
              <h2 className="font-playfair">About SmashMeals Delivery</h2>
              <p>
                SmashMeals is proud to serve communities across Tennessee, Virginia, North Carolina, South Carolina, Georgia, Kentucky, and Washington DC. Our fresh, gluten-free meal prep is chef-prepared weekly and delivered directly to your door.
              </p>
              <h3 className="font-playfair">How Our Delivery Works</h3>
              <ul>
                <li><strong>Order by Thursday:</strong> Browse our weekly menu and place your order online</li>
                <li><strong>We Prepare Friday:</strong> Our chefs prepare your meals fresh with premium ingredients</li>
                <li><strong>FREE Delivery:</strong> Orders over $130 ship free via FedEx with tracking</li>
                <li><strong>Enjoy All Week:</strong> Meals stay fresh in your fridge for 7-10 days</li>
              </ul>
              <h3 className="font-playfair">Coverage Map</h3>
              <p>
                We currently deliver to over 70 cities across the Southeast, with our primary service areas in the Tennessee Tri-Cities region and surrounding communities. Major metro areas including Knoxville, Asheville, Charlotte, Nashville, and Atlanta are also covered with regular FedEx shipping.
              </p>
              <p className="text-sm text-muted-foreground mt-8">
                Don't see your city listed? Contact us to inquire about delivery to your area. We're constantly expanding our service coverage.
              </p>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ServiceAreas;
