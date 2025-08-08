import { CodeBlock } from "../../components/ui/docs/CodeBlock";
import { DocContent } from "../get-doc-content";

const Installation: DocContent = {
  title: "Component Library Documentation",
  description: "Getting Started",
  content: (
    <div>
      <div className="max-w-5xl mx-auto">
        <div className="space-y-8">
          {/* Intro */}
          <section>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Welcome to our component library! This guide will help you set up
              a new Next.js project and integrate our components. Our library is
              designed for modern React apps, offering flexibility,
              accessibility, and theming out of the box.
            </p>
          </section>

          {/* Create Project */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Initialize a Next.js Project
            </h2>
            <p className="text-gray-600 mb-3">
              If you haven&apos;t created a Next.js app yet, start with the
              following command:
            </p>
            <CodeBlock language="bash" code="npx create-next-app@latest" />

            <p className="text-gray-600 mt-4 mb-2 font-medium">
              Recommended Setup Options:
            </p>
            <ul className="text-gray-600 list-disc list-inside space-y-1">
              <li>
                ✔ Project Name: <strong>my-app</strong> (your wish)
              </li>
              <li>
                ✔ TypeScript: <strong>Yes</strong>
              </li>
              <li>
                ✔ ESLint: <strong>Yes</strong> (optional but recommended)
              </li>
              <li>
                ✔ Tailwind CSS: <strong>Yes</strong>
              </li>
              <li>✘ `src/` directory: (it&apos;s your choise)</li>
              <li>
                ✔ App Router (recommended): <strong>Yes</strong>
              </li>
              <li>✘ Import alias: optional, based on your preference</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Start Your Project</h2>
            <CodeBlock code={`cd my-app\nnpm run dev`} />
            <p className="text-gray-600 mt-3">
              Now you can visit the http://localhost:3000 (on any browser) 
              for your project rendering.
            </p>
          </section>

          {/* Install Component Library */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Install the Component Library
            </h2>
            <CodeBlock code="npm install @satyampratibhan/zento-ui" />
            <p className="text-gray-600 mt-3">
              Once installed, you&apos;re ready to start using components in
              your project.
            </p>
          </section>

          {/* Features Summary */}
        </div>
      </div>
    </div>
  ),
};

export default Installation;
