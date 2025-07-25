import { CodeBlock } from "../../components/ui/docs/CodeBlock";
import { DocContent } from "../get-doc-content";

const Installation: DocContent = {
  title: "Component Library Documentation",
  description: "Getting Started",
  content: (
    <div className="">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-8">
          <section>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Welcome to our component library! This documentation will help you
              get started with using our components in your projects. Our
              library is designed to be flexible, accessible, and easy to
              integrate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Installation</h2>
            <CodeBlock
              language="bash"
              code="npm install @your-org/component-library"
            />
            <p className="text-gray-600 mt-3">
              After installation, you can import components directly into your
              React application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Usage</h2>
            <p className="text-gray-600 mb-4">
              Import the components you need and start building amazing user
              interfaces. Each component comes with comprehensive documentation
              and examples.
            </p>
            <CodeBlock
              code="import { Button, Card } from '@your-org/component-library'"
              language="tsx"
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Features</h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Fully responsive components
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Accessibility-first design
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Customizable themes
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                TypeScript support
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  ),
};

export default Installation;
