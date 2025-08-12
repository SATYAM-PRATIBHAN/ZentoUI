"use client";

import { DocContent } from "../../get-doc-content";
import { PreviewSwitcher } from "../../../components/ui/docs/PreviewSwitcher";
import React from "react";
import { FAQAccordion, FAQItem } from "@satyampratibhan/zento-ui";

const rawAccordionCode = `import { FAQAccordion, FAQItem } from "@satyampratibhan/zento-ui";

const faqItems: FAQItem[] = [
  { id: 1, question: "What is Zento UI?", answer: "Zento UI is a modern React component library with stunning animated and glassmorphic designs." },
  { id: 2, question: "Is it free to use?", answer: "Yes, Zento UI is free and open-source under the MIT license." },
  { id: 3, question: "Does it work with Next.js?", answer: "Absolutely! All components are fully compatible with Next.js and modern React tooling." },
];

export default function App() {
  return <FAQAccordion items={faqItems} />;
};`;

const sampleItems : FAQItem[] = [
  {
    id: 1,
    question: "What is Zento UI?",
    answer:
      "Zento UI is a modern React component library with stunning animated and glassmorphic designs.",
  },
  {
    id: 2,
    question: "Is it free to use?",
    answer:
      "Yes, Zento UI is free and open-source under the MIT license.",
  },
  {
    id: 3,
    question: "Does it work with Next.js?",
    answer:
      "Absolutely! All components are fully compatible with Next.js and modern React tooling.",
  },
];

const AccordionDocs: DocContent = {
  title: "Accordion",
  description:
    "The FAQAccordion displays collapsible sections for FAQs or other content. It uses Framer Motion for smooth animations and Lucide icons for expand/collapse indicators.",
  content: (
    <div className="space-y-10 text-gray-700">
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">FAQ Accordion</h2>
        <p>
          The <code>FAQAccordion</code> component displays a list of items where
          each can be expanded to reveal more content. Perfect for help centers,
          product pages, or Q&A sections.
        </p>
        <PreviewSwitcher
          preview={<FAQAccordion items={sampleItems} />}
          code={rawAccordionCode}
          language="tsx"
        />
      </section>

      {/* API Reference */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800">API Reference</h2>
        <div className="overflow-x-auto mt-4">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 p-2 text-left">
                  Component
                </th>
                <th className="border border-gray-300 p-2 text-left">Prop</th>
                <th className="border border-gray-300 p-2 text-left">Type</th>
                <th className="border border-gray-300 p-2 text-left">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td
                  rowSpan={2}
                  className="border border-gray-300 p-2 align-top font-medium"
                >
                  FAQAccordion
                </td>
                <td className="border border-gray-300 p-2">items</td>
                <td className="border border-gray-300 p-2">
                  FAQItem[]
                </td>
                <td className="border border-gray-300 p-2">
                  Array of FAQ objects containing <code>id</code>,{" "}
                  <code>question</code>, and <code>answer</code>.
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 p-2">items[].id</td>
                <td className="border border-gray-300 p-2">number</td>
                <td className="border border-gray-300 p-2">
                  Unique identifier for each FAQ entry.
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td></td>
                <td className="border border-gray-300 p-2">items[].question</td>
                <td className="border border-gray-300 p-2">string</td>
                <td className="border border-gray-300 p-2">
                  The question text displayed in the header.
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td></td>
                <td className="border border-gray-300 p-2">items[].answer</td>
                <td className="border border-gray-300 p-2">string</td>
                <td className="border border-gray-300 p-2">
                  The answer text revealed when expanded.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  ),
};

export default AccordionDocs;
