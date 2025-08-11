import { FAQItem } from "@satyampratibhan/zento-ui";
import { FAQ } from "../../components";
import Github from "../../constants/icons/GithubLogo";
import type { DocContent } from "../get-doc-content";
import Link from "next/link";
import { DOC_ROUTES } from "../../constants/route";

const data: FAQItem[] = [
  {
    id: 1,
    question: "What is ZentoUI best suited for?",
    answer:
      "ZentoUI is ideal for building modern UIs for React and Next.js applications, especially when you want clean design, motion-based components, and utility-first styling out of the box.",
  },
  {
    id: 2,
    question: "Is it compatible with Next.js?",
    answer:
      "Yes, ZentoUI works seamlessly with Next.js and is optimized for server-side rendering, dynamic imports, and the app router.",
  },
  {
    id: 3,
    question: "Does ZentoUI support dark mode?",
    answer:
      "For now it doesn't, but for sure we would be accepting dark mode very soon.",
  },
  {
    id: 4,
    question: "Can I customize the components?",
    answer:
      "Yes. Every component is designed with extensibility in mind. You can pass class names, override props, or fork components to tailor them to your design system.",
  },
];

const Introduction: DocContent = {
  title: "Introduction",
  description:
    "Discover ZentoUI — a thoughtfully designed component library for building elegant, interactive, and responsive web interfaces with minimal effort.",
  content: (
    <>
      <div className="space-y-6 text-gray-700">
        <p>
          <strong>ZentoUI</strong> is a modern, lightweight, and accessible UI
          component library built with Tailwind CSS and Framer Motion. It&apos;s
          crafted to help developers build interactive and aesthetically
          pleasing web apps faster — with minimal setup and maximum flexibility.
        </p>

        <p>
          Whether you&apos;re designing a marketing page, product dashboard, or
          design system, ZentoUI provides beautifully animated, customizable
          components that reduce boilerplate and enhance consistency across your
          UI. With first-class support for dark mode, motion animations,
          keyboard accessibility, and responsiveness, ZentoUI adapts to your
          project&apos;s needs while maintaining a modern look and feel.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href={DOC_ROUTES.SOCIAL.GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-black px-5 py-2 text-sm font-semibold text-white shadow hover:bg-gray-800 transition"
          >
            <Github />
            GitHub
          </Link>
          <Link
            href="/docs/installation"
            className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-5 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 transition"
          >
            Get Started
          </Link>
        </div>

        <h2 className="mt-10 text-xl font-bold text-gray-800">
          Frequently Asked Questions
        </h2>
        <FAQ data={data} />
      </div>
    </>
  ),
};

export default Introduction;
