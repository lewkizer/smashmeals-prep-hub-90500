import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, PackageCheck, ShieldCheck, Utensils, Gift, ArrowRight } from "lucide-react";

const MealsForCancerPatients = () => {
  const url = "https://smashmeals.com/meals-for-cancer-patients";
  const faq = [
    { q: "What meals are good for someone going through cancer treatment?", a: "There is no single cancer diet. Needs vary by diagnosis, treatment, symptoms and medical advice. The National Cancer Institute notes that some people need extra protein and calories during treatment, while nausea, taste changes, mouth soreness, swallowing difficulty and appetite loss may change which foods are easiest to tolerate. Ask the oncology team or a registered dietitian for individualized guidance." },
    { q: "Can I send prepared meals to a friend or family member with cancer?", a: "Yes. Prepared meals can be a practical way to reduce shopping and cooking for a household dealing with treatment. Before ordering, ask about food allergies, treatment-related restrictions, preferred textures, appetite and delivery timing." },
    { q: "Are SmashMeals gluten-free?", a: "SmashMeals operates a 100% gluten-free kitchen. This can simplify meal selection for people who also need to avoid gluten, but gluten-free food is not itself a cancer treatment." },
    { q: "Should cancer patients eat high-protein meals?", a: "Protein needs are individual. The National Cancer Institute and American Cancer Society explain that some people with cancer need additional protein and calories, particularly when maintaining weight or recovering from treatment is difficult. The patient's oncology team or registered dietitian should set personal targets." },
    { q: "What if treatment causes nausea or a low appetite?", a: "The National Cancer Institute recommends discussing symptoms with the care team and notes that smaller, more frequent meals and foods that are easier to tolerate may help some people. Prepared meals can be divided into smaller portions, but medical guidance should come first." },
    { q: "Can I order meals for the whole family, not only the patient?", a: "Yes. One of the most useful forms of support can be taking dinner off the family's to-do list. SmashMeals offers individual prepared meals and family-oriented options, subject to the current weekly menu." }
  ];

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(({q,a}) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
  const articleSchema = {
    "@context": "https://schema.org", "@type": "Article", headline: "Meals for Cancer Patients and Families: A Practical Prepared Meal Guide",
    description: "A practical guide to choosing and sending prepared meals for cancer patients and their families, with nutrition guidance from NCI and ACS.",
    mainEntityOfPage: url, author: { "@type": "Organization", name: "SmashMeals", url: "https://smashmeals.com" },
    publisher: { "@type": "Organization", name: "SmashMeals", url: "https://smashmeals.com" }, dateModified: "2026-09-16"
  };

  return <>
    <Helmet>
      <title>Meals for Cancer Patients & Families | Prepared Meal Delivery Guide</title>
      <meta name="description" content="Looking for meals for cancer patients and family? Learn what to consider during treatment and how prepared meal delivery can make practical support easier." />
      <meta name="keywords" content="meals for cancer patients and family, meal delivery for cancer patients, prepared meals during chemotherapy, food gift for cancer patient, cancer caregiver meals, high protein prepared meals" />
      <link rel="canonical" href={url} />
      <meta property="og:title" content="Meals for Cancer Patients & Families | A Practical Guide" />
      <meta property="og:description" content="Practical, evidence-informed guidance for choosing or sending prepared meals to someone navigating cancer treatment." />
      <meta property="og:url" content={url} /><meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
    <Header /><PageBreadcrumb currentPage="Meals for Cancer Patients & Families" />
    <main className="min-h-screen pt-20">
      <section className="py-16 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto max-w-5xl text-center space-y-6">
          <span className="inline-flex items-center gap-2 text-primary font-semibold"><Heart className="w-5 h-5"/>Food is one less thing to manage</span>
          <h1 className="text-4xl md:text-6xl font-bold font-playfair">Meals for Cancer Patients & Their Families</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">When someone is going through cancer treatment, the best meal is not a trendy “cancer diet.” It is food that fits the person's medical guidance, symptoms, appetite and preferences — without adding another cooking job to the day.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3"><a href="/menu"><Button variant="hero" size="lg">See This Week's Meals</Button></a><a href="/gift-cards"><Button variant="outline" size="lg">Send a Meal Gift</Button></a></div>
          <p className="text-sm text-muted-foreground">Nutrition needs during cancer treatment are highly individual. This page is educational and does not replace advice from an oncology team or registered dietitian.</p>
        </div>
      </section>

      <section className="py-14 px-4"><div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-5">What should you feed someone going through cancer treatment?</h2>
        <p className="text-lg text-muted-foreground mb-5">Start with the person, not a generic diet. Cancer and treatment can change appetite, taste, smell, digestion and swallowing. The National Cancer Institute explains that some patients need additional protein and calories to maintain strength and reduce malnutrition risk. The American Cancer Society likewise emphasizes adequate nutrients and calories during treatment.</p>
        <div className="grid md:grid-cols-3 gap-5 my-8">
          <Card className="p-6"><Utensils className="w-8 h-8 text-primary mb-3"/><h3 className="font-bold text-xl mb-2">Make eating easier</h3><p className="text-muted-foreground">Smaller portions, familiar foods and easy reheating can matter when energy or appetite is limited.</p></Card>
          <Card className="p-6"><PackageCheck className="w-8 h-8 text-primary mb-3"/><h3 className="font-bold text-xl mb-2">Reduce the workload</h3><p className="text-muted-foreground">Prepared meals remove shopping, chopping, cooking and cleanup from an already demanding week.</p></Card>
          <Card className="p-6"><ShieldCheck className="w-8 h-8 text-primary mb-3"/><h3 className="font-bold text-xl mb-2">Follow the care plan</h3><p className="text-muted-foreground">Food safety and nutrition needs can change during treatment. Follow the patient's oncology team's instructions.</p></Card>
        </div>
        <p>For evidence-based guidance, see the <a className="text-primary underline" href="https://www.cancer.gov/about-cancer/treatment/side-effects/nutrition" target="_blank" rel="noopener noreferrer">National Cancer Institute's nutrition during cancer treatment guide</a> and the <a className="text-primary underline" href="https://www.cancer.org/cancer/supportive-care/nutrition-activity-with-cancer.html" target="_blank" rel="noopener noreferrer">American Cancer Society's nutrition and activity resources</a>.</p>
      </div></section>

      <section className="py-14 px-4 bg-muted/30"><div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-8">Choose meals around the day they are having</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6"><h3 className="text-xl font-bold mb-3">When appetite is small</h3><p className="text-muted-foreground">A full entrée does not have to be eaten at once. If appropriate for the person's care plan, portion a prepared meal into smaller servings. NCI notes that small, frequent meals can help some people experiencing appetite loss.</p></Card>
          <Card className="p-6"><h3 className="text-xl font-bold mb-3">When protein and calories are a priority</h3><p className="text-muted-foreground">Look at the nutrition information instead of relying on “healthy” labels. Individual protein and calorie targets should come from the care team or registered dietitian.</p></Card>
          <Card className="p-6"><h3 className="text-xl font-bold mb-3">When nausea or taste changes hit</h3><p className="text-muted-foreground">Preferences may change from day to day. Keep choices flexible and ask what currently sounds tolerable rather than surprising the person with a large quantity of one food.</p></Card>
          <Card className="p-6"><h3 className="text-xl font-bold mb-3">When the caregiver is exhausted too</h3><p className="text-muted-foreground">Meal support is not only for the patient. Sending dinner for a spouse, children or caregiver can remove a daily decision and give the household time back.</p></Card>
        </div>
      </div></section>

      <section className="py-14 px-4"><div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-5">Why prepared meal delivery can be a meaningful gift</h2>
        <p className="text-lg mb-6">People often ask, “What can I do?” A meal is concrete. It can be sent to a friend, neighbor, parent, coworker or family member and used when it is actually needed. NCI specifically recommends planning ahead, keeping easy foods available, freezing meal-sized portions and accepting help with shopping and cooking.</p>
        <div className="bg-primary/5 border rounded-xl p-7"><div className="flex gap-4"><Gift className="w-9 h-9 text-primary shrink-0"/><div><h3 className="text-2xl font-bold mb-2">Before you send food, ask four questions</h3><ol className="list-decimal pl-5 space-y-2 text-muted-foreground"><li>Are there allergies, intolerances or medically required restrictions?</li><li>Are there foods or smells that are difficult right now?</li><li>Would individual meals or food for the whole household help more?</li><li>What delivery day and address will actually be convenient?</li></ol></div></div></div>
      </div></section>

      <section className="py-14 px-4 bg-muted/30"><div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-5">Where SmashMeals fits</h2>
        <p className="text-lg text-muted-foreground mb-6">SmashMeals prepares ready-to-heat meals in a 100% gluten-free kitchen. The weekly menu includes nutrition information so customers can choose meals that fit their preferences and any guidance they have received from their care team. We do not claim that a meal treats cancer; our job is simpler: cook good food and make getting meals on the table easier.</p>
        <div className="flex flex-wrap gap-3"><a href="/how-it-works"><Button variant="outline">How SmashMeals Works</Button></a><a href="/high-protein"><Button variant="outline">High-Protein Options</Button></a><a href="/freezer-meals"><Button variant="outline">Freezer Meals</Button></a><a href="/delivery-info"><Button variant="outline">Delivery Information</Button></a><a href="/faq"><Button variant="outline">FAQs</Button></a></div>
      </div></section>

      <section className="py-14 px-4"><div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-8">Frequently asked questions</h2>
        <div className="space-y-5">{faq.map(({q,a}) => <div key={q} className="border-b pb-5"><h3 className="text-xl font-bold mb-2">{q}</h3><p className="text-muted-foreground">{a}</p></div>)}</div>
      </div></section>

      <section className="py-16 px-4 bg-primary text-primary-foreground"><div className="container mx-auto max-w-4xl text-center"><h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Send food. Give time back.</h2><p className="text-lg opacity-90 mb-7">Choose from the current SmashMeals menu for yourself or someone you care about.</p><a href="/menu"><Button size="lg" variant="secondary">View the Menu <ArrowRight className="ml-2 w-4 h-4"/></Button></a></div></section>
    </main><Footer />
  </>;
};
export default MealsForCancerPatients;
