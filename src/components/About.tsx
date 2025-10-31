const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">About SmashMeals</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in Kingsport in 2017, SmashMeals was the <span className="text-primary font-bold">FIRST meal prep company</span> in the Tri-Cities region. 
                For over 8 years, we've been serving our community with the region's <span className="text-primary font-semibold">ONLY 100% gluten-free kitchen</span>.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                While others have come and gone, we've remained committed to our founding mission: make healthy eating accessible, delicious, and stress-free. 
                Every meal is chef-crafted with high-quality ingredients in our dedicated gluten-free facility—never cross-contaminated, always trustworthy.
              </p>
              <p className="text-lg font-semibold text-foreground">
                Eat Healthy. Live Healthy.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-primary/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl font-bold text-primary mb-2">8+</div>
                  <div className="text-xl font-semibold text-foreground">Years Serving</div>
                  <div className="text-muted-foreground mt-2">Tri-Cities Area</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-card border-4 border-background rounded-xl p-6 shadow-xl">
                <div className="text-4xl font-bold text-primary">100%</div>
                <div className="text-sm font-semibold text-foreground">Gluten-Free</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
