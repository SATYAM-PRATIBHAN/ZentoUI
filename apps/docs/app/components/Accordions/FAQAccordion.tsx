import { FAQAccordion, type FAQItem } from "zento-ui";

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Like the Design?",
    answer:
      "Still thinking of a design, just use it the ZentoUI components already.",
  },
  // ... add others
];

export default function FAQ({ data }: { data?: FAQItem[] }) {
  return <FAQAccordion items={data || faqData} />;
}
