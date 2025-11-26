import { Card } from "@/components/ui/card";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  faqs: FAQItem[];
  includeSchema?: boolean;
}

const FAQSection = ({ title = "Frequently Asked Questions", faqs, includeSchema = true }: FAQSectionProps) => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-20 px-4">
      {includeSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold font-playfair text-center mb-12">
          {title}
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
