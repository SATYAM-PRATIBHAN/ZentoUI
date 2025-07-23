import { FAQAccordion, type FAQItem } from "@repo/ui";

const faqData: FAQItem[] = [
  {
    id: 2,
    question: "Like the Design?",
    answer:
      "Still thinking of a design, just use it the ZentoUI components already.",
  },
  // ... add others
];

export default function FAQ({ data }: { data?: FAQItem[] }) {
  return (
    <section>
      <FAQAccordion items={data || faqData} />
    </section>
  );
}
