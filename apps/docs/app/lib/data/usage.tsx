import { CodeBlock } from "../../components/ui/docs/CodeBlock";
import { DocContent } from "../get-doc-content";

const Usage: DocContent = {
  title: "Component Library Documentation",
  description: "Using the Components",
  content: (
    <div>
      <div className="max-w-5xl mx-auto">
        <div className="space-y-8">
          <section>
            <p className="text-gray-600 leading-relaxed mb-4">
              After installing the component library, you can start using the
              components directly in your project. All components are
              tree-shakable and written in TypeScript with full type support.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Importing Components
            </h2>
            <p className="text-gray-600 mb-4">
              Import the components you need from the package. For example, to
              use the <code className="bg-gray-100 px-1 rounded">Button</code>{" "}
              and <code className="bg-gray-100 px-1 rounded">Card</code>{" "}
              components:
            </p>
            <CodeBlock
              code={`import { Button, Card } from '@your-org/component-library';`}
              language="tsx"
            />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Basic Usage Example</h2>
            <p className="text-gray-600 mb-4">
              Here’s how you can use a couple of components inside your page or
              layout:
            </p>
            <CodeBlock
              language="tsx"
              code={`export default function Example() {
  return (
    <div className="space-y-6 p-4">
      <Card>
        <h2 className="text-xl font-semibold">Welcome</h2>
        <p>This is a sample card component.</p>
      </Card>
      
      <Button className="{your custom class}">
        Click Me
      </Button>
    </div>
  );
}`}
            />
          </section>
        </div>
      </div>
    </div>
  ),
};

export default Usage;
