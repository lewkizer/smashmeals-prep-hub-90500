import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const GLP1 = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>SmashMeals for GLP-1 | Protein-Forward, Gluten-Free Meal Prep</title>
        <meta 
          name="description" 
          content="SmashMeals helps people on GLP-1 medicines stay nourished with protein-forward, gluten-free breakfasts, entrees, sides, and snacks. Smart portions. Real food. Ready when you are." 
        />
      </Helmet>

      <Header />

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Hero Section */}
        <section className="grid lg:grid-cols-[1.3fr_0.7fr] gap-8 items-center mb-16">
          <div>
            <Badge className="mb-4 bg-trust text-white">
              GLP-1 Friendly · 100% Gluten-Free
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-black leading-tight mb-4">
              Fuel your GLP-1 journey with <span className="bg-gradient-to-r from-trust/30 to-trust/30 bg-[length:100%_40%] bg-no-repeat bg-bottom">protein-forward</span> meals that actually taste great.
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-prose">
              On Ozempic®, Wegovy®, Zepbound®, or Mounjaro®? SmashMeals makes it simple to hit your protein, fiber, and hydration goals while keeping portions in check. Breakfasts, entrees, sides, and snacks — chef-made, fridge-fresh, and ready in minutes.
            </p>
            <div className="flex flex-wrap gap-3 mb-4">
              <Button asChild size="lg" variant="hero">
                <a href="https://smashmeals.bottle.com">Order Now</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="/menu">See Weekly Menu</a>
              </Button>
            </div>
            <p className="font-bold text-sm">
              Tagline: <em>Eat Healthy. Live Healthy.</em>
            </p>
          </div>

          <Card className="bg-gradient-elegant text-white border-0 shadow-elegant">
            <CardContent className="pt-6">
              <div className="text-xs uppercase tracking-wider opacity-90 mb-2">Why this page</div>
              <h3 className="text-xl font-bold mb-4">GLP-1 Quick Wins</h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>Protein first: target ~20–35g per meal</li>
                <li>Fiber every day: veggies, legumes, whole-food sides</li>
                <li>Smaller portions, slower bites, more hydration</li>
                <li>Balance carbs you <em>feel</em> good on — no crash</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* How SmashMeals Helps */}
        <section className="mb-16">
          <div className="text-xs uppercase tracking-wider text-muted-foreground font-bold mb-2">How SmashMeals helps</div>
          <h2 className="text-3xl font-black mb-6">Four ways we support people on GLP-1s</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-accent/50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">1) Protein-forward menus</h3>
              <p className="text-muted-foreground">
                We build meals around lean proteins and fiber-rich sides to support satiety and preserve lean mass. Our cooks season boldly without relying on heavy creams or added sugar.
              </p>
            </div>
            <div className="bg-accent/50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">2) Smart portions</h3>
              <p className="text-muted-foreground">
                GLP-1s slow digestion. Our single-serve portions and family-style trays make it easy to eat just enough and save the rest for later — no pressure to finish a huge plate.
              </p>
            </div>
            <div className="bg-accent/50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">3) Gentle on the gut</h3>
              <p className="text-muted-foreground">
                Nausea or reflux? Choose lighter options (grilled chicken, salmon, rice, roasted veggies) and our lower-fat sauces. Heat fast, eat slow.
              </p>
            </div>
            <div className="bg-accent/50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">4) 100% gluten-free</h3>
              <p className="text-muted-foreground">
                Everything we make is naturally gluten-free — simple for sensitive stomachs and easy for the whole family.
              </p>
            </div>
          </div>
        </section>

        {/* Build Your Week */}
        <section className="mb-16">
          <div className="text-xs uppercase tracking-wider text-muted-foreground font-bold mb-2">Build your week</div>
          <h2 className="text-3xl font-black mb-6">Pick from Breakfasts, Entrees, Sides & Snacks</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-3">Breakfast (aim ~20–30g protein)</h3>
                <ul className="space-y-2 list-disc list-inside mb-4 text-muted-foreground">
                  <li>Southern Smash Cup (sausage, grits, egg whites)</li>
                  <li>Greek yogurt + berries + house granola</li>
                  <li>Chicken-sausage & egg-white scramble</li>
                  <li>Yogurt & Oat Blueberry Breakfast Cake (GF)</li>
                </ul>
                <Badge variant="secondary">Pro tip: split breakfast; finish the rest mid-morning.</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-3">Entrees (target ~25–40g protein)</h3>
                <ul className="space-y-2 list-disc list-inside mb-4 text-muted-foreground">
                  <li>Honey-Glazed Salmon with rice & green beans</li>
                  <li>Ground Turkey Marinara with GF pasta</li>
                  <li>Grilled Chicken Salad (add extra chicken for +protein)</li>
                  <li>Shrimp Power Bowl</li>
                </ul>
                <Badge variant="secondary">Keep sauces on the side if you're nausea-prone.</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-3">Sides (fiber + steady carbs)</h3>
                <ul className="space-y-2 list-disc list-inside mb-4 text-muted-foreground">
                  <li>Rice, Broccoli & Cheese Casserole</li>
                  <li>Roasted Brussels, carrots, or mixed veggies</li>
                  <li>Mashed potatoes (skins-on) or jasmine rice</li>
                  <li>Quinoa-veggie bowl add-on</li>
                </ul>
                <Badge variant="secondary">Veggies first → protein → starch. Slow bites, small sips.</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-3">Snacks (10–20g protein)</h3>
                <ul className="space-y-2 list-disc list-inside mb-4 text-muted-foreground">
                  <li>Protein pudding cups</li>
                  <li>Greek yogurt cups & fruit</li>
                  <li>Smash protein cookie (GF)</li>
                  <li>Cheese sticks + cucumber or pepper slices</li>
                </ul>
                <Badge variant="secondary">If appetite is low, go snack-size more often.</Badge>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* GLP-1 Bundles */}
        <section className="mb-16">
          <div className="text-xs uppercase tracking-wider text-muted-foreground font-bold mb-2">Easy starters</div>
          <h2 className="text-3xl font-black mb-6">GLP-1 Bundles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-3">Kickoff (light & simple)</h3>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                  <li>4 breakfasts · 4 entrees · 4 sides · 4 snacks</li>
                  <li>Focus: chicken, salmon, rice, roasted veg</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-3">Protein+ (muscle-protect)</h3>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                  <li>6 breakfasts · 6 entrees · 6 snacks</li>
                  <li>+ extra chicken add-ons</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-3">Family Plan</h3>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                  <li>2 family trays + 6 singles + sides</li>
                  <li>Great when only one person is on GLP-1</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <p className="mt-4 text-muted-foreground">
            Want this tailored to your macros? Leave a note at checkout and we'll guide selections.
          </p>
        </section>

        {/* Playbooks */}
        <section className="mb-16">
          <div className="text-xs uppercase tracking-wider text-muted-foreground font-bold mb-2">Playbooks</div>
          <h2 className="text-3xl font-black mb-6">How to use SmashMeals at each stage</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-accent/50 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-3">Week 1–4: Getting started</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>Choose lighter proteins (chicken, fish, shrimp)</li>
                <li>Go smaller portions, eat slowly</li>
                <li>Keep hydration up; add fiber gradually</li>
              </ul>
            </div>

            <div className="bg-accent/50 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-3">Week 5–12: Finding rhythm</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>Protein target every meal; veggies at lunch & dinner</li>
                <li>Swap creamy sauces for herbs, citrus, or salsa</li>
                <li>Use snacks to finish protein goals on low-appetite days</li>
              </ul>
            </div>

            <div className="bg-accent/50 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-3">Travel weeks</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>Order extra singles + snacks for the road</li>
                <li>Pack a cooler bag; refrigerate on arrival</li>
                <li>Hydrate; choose grilled over fried when dining out</li>
              </ul>
            </div>

            <div className="bg-accent/50 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-3">Maintaining (or tapering)</h3>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>Keep protein high to protect lean mass</li>
                <li>Steady carbs around activity; add strength training</li>
                <li>Use family trays for budget and convenience</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <div className="text-xs uppercase tracking-wider text-muted-foreground font-bold mb-2">FAQ</div>
          <h2 className="text-3xl font-black mb-6">GLP-1 & SmashMeals — quick answers</h2>
          <dl className="space-y-6">
            <div>
              <dt className="font-bold mb-2">Do you track macros?</dt>
              <dd className="text-muted-foreground">Yes. Many items list macros; ask for guidance at checkout if you're targeting a specific range.</dd>
            </div>
            <div>
              <dt className="font-bold mb-2">Are your meals frozen?</dt>
              <dd className="text-muted-foreground">No — cooked fresh, kept chilled for maximum quality. We sometimes ship frozen for safety during transit.</dd>
            </div>
            <div>
              <dt className="font-bold mb-2">What if I have nausea?</dt>
              <dd className="text-muted-foreground">Start with lean proteins + rice/veggies, smaller bites, and stop when satisfied. Reheat leftovers later.</dd>
            </div>
            <div>
              <dt className="font-bold mb-2">Is everything gluten-free?</dt>
              <dd className="text-muted-foreground">Always. SmashMeals is 100% gluten-free.</dd>
            </div>
          </dl>
        </section>

        {/* Final CTA */}
        <section className="mb-16">
          <Card className="shadow-elegant">
            <CardContent className="pt-6 flex flex-wrap gap-6 items-center justify-between">
              <div>
                <h2 className="text-3xl font-black mb-2">Ready to make GLP-1 simple?</h2>
                <p className="text-muted-foreground">Choose this week's meals and we'll handle the rest.</p>
              </div>
              <Button asChild size="lg" variant="hero">
                <a href="https://smashmeals.bottle.com">Build My Box</a>
              </Button>
            </CardContent>
          </Card>
          <p className="mt-4 text-xs text-muted-foreground">
            Medical note: We're a meal-prep company, not a clinic. Always follow your prescriber's guidance.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GLP1;
