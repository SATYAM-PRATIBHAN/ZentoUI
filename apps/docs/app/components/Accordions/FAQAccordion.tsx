import { FAQAccordion, type FAQItem } from '@repo/ui';

const faqData: FAQItem[] = [
  {
    id: 1,
    question: 'How do you approach a new project?',
    answer:
      'We begin with a deep discovery phase, understanding your business goals, target audience, and competitive landscape.',
  },
  {
    id: 2,
    question: 'What services do you offer?',
    answer:
      'Our premium services include website development, design, optimization, and ongoing maintenance and support.',
  },
  // ... add others
];

export default function FAQ({ data }: { data?: FAQItem[] }) {
  return (
    <section className="w-full">
      <FAQAccordion items={data || faqData} />
    </section>
  );
}
