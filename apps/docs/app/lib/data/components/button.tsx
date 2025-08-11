"use client";

import { DocContent } from "../../get-doc-content";
import { PreviewSwitcher } from "../../../components/ui/docs/PreviewSwitcher";
import { CodeBlock } from "../../../components/ui/docs/CodeBlock";
import React from "react";
import {
  Button,
  GlassyButton,
  NeumorphismButton,
  RotatingButton,
} from "@satyampratibhan/zento-ui";

// This is the raw code that will show in the "Code" tab
const rawButtonCodes = [
  `import { GlassyButton } from "@satyampratibhan/zento-ui";

export default function Example() {
  return (
    <div className="flex flex-col gap-4">
      <GlassyButton>
        Get Started
      </GlassyButton>
    </div>
  );
}`,
  `import { NeumorphismButton } from "@satyampratibhan/zento-ui";

export default function Example() {
  return (
    <div className="flex flex-col gap-4">
      <NeumorphismButton>
        Press me
      </NeumorphismButton>
    </div>
  );
}`,
  `import { Button } from "@satyampratibhan/zento-ui";

export default function Example() {
  return (
    <div className="flex flex-col gap-4">
      <Button className="px-4 py-2 bg-blue-500 text-white rounded"> // your custom style here
        Custom Styled
      </Button>
    </div>
  );
}`,
  `import { RotatingButton } from "@satyampratibhan/zento-ui";

export default function Example() {
  return (
    <div className="flex flex-col gap-4">
      <RotatingButton data={["Book a Call", "Contact us"]} />
    </div>
  );
}`,
];

const ButtonDocs: DocContent = {
  title: "Button",
  description:
    "Buttons are interactive elements used to trigger actions. ZentoUI provides four button styles — Glassy, Neumorphism, Basic, and Rotating — each designed for different aesthetics and interaction patterns.",
  content: (
    <div className="space-y-10 text-gray-700">
      {/* Individual button docs */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Glassy Button</h2>
        <p>
          The <code>GlassyButton</code> offers a modern frosted glass look with
          subtle scaling and shadow changes on hover. Perfect for call-to-action
          buttons in hero sections.
        </p>
        <PreviewSwitcher
          preview={<GlassyButton>Get Started</GlassyButton>}
          code={rawButtonCodes[0] || ""}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Neumorphism Button
        </h2>
        <p>
          The <code>NeumorphismButton</code> uses soft shadows and highlights to
          create a subtle 3D appearance. Great for minimal and modern
          interfaces.
        </p>
        <PreviewSwitcher
          preview={<NeumorphismButton>Hover over me</NeumorphismButton>}
          code={rawButtonCodes[1] || ""}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Basic Button</h2>
        <p>
          The <code>Button</code> component is a minimal wrapper for a native{" "}
          <code>&lt;button&gt;</code> element. Use it when you want full control
          over styling via Tailwind or custom CSS.
        </p>
        <PreviewSwitcher
          preview={
            <Button className="px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg shadow cursor-pointer hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1 transition-all">
              Custom Styled
            </Button>
          }
          code={rawButtonCodes[2] || ""}
          language="tsx"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Rotating Button</h2>
        <p>
          The <code>RotatingButton</code> swaps its label with an alternate text
          on hover, using Framer Motion for smooth animations.
        </p>
        <PreviewSwitcher
          preview={<RotatingButton data={["Book a Call", "Contact us"]} />}
          code={rawButtonCodes[3] || ""}
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
              {/* GlassyButton */}
              <tr className="bg-white">
                <td
                  rowSpan={2}
                  className="border border-gray-300 p-2 align-top font-medium"
                >
                  GlassyButton
                </td>
                <td className="border border-gray-300 p-2">children?</td>
                <td className="border border-gray-300 p-2">string</td>
                <td className="border border-gray-300 p-2">
                  Button label (default: "Get Started").
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 p-2">onClick?</td>
                <td className="border border-gray-300 p-2">() =&gt; void</td>
                <td className="border border-gray-300 p-2">Click handler.</td>
              </tr>

              {/* NeumorphismButton */}
              <tr className="bg-gray-50">
                <td
                  rowSpan={1}
                  className="border border-gray-300 p-2 align-top font-medium"
                >
                  NeumorphismButton
                </td>
                <td className="border border-gray-300 p-2">children</td>
                <td className="border border-gray-300 p-2">React.ReactNode</td>
                <td className="border border-gray-300 p-2">Button content.</td>
              </tr>

              {/* Button */}
              <tr className="bg-white">
                <td
                  rowSpan={3}
                  className="border border-gray-300 p-2 align-top font-medium"
                >
                  Button
                </td>
                <td className="border border-gray-300 p-2">children</td>
                <td className="border border-gray-300 p-2">React.ReactNode</td>
                <td className="border border-gray-300 p-2">Button content.</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 p-2">className?</td>
                <td className="border border-gray-300 p-2">string</td>
                <td className="border border-gray-300 p-2">
                  Custom class names.
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 p-2">onClick?</td>
                <td className="border border-gray-300 p-2">() =&gt; void</td>
                <td className="border border-gray-300 p-2">Click handler.</td>
              </tr>

              {/* RotatingButton */}
              <tr className="bg-gray-50">
                <td
                  rowSpan={2}
                  className="border border-gray-300 p-2 align-top font-medium"
                >
                  RotatingButton
                </td>
                <td className="border border-gray-300 p-2">data</td>
                <td className="border border-gray-300 p-2">[string, string]</td>
                <td className="border border-gray-300 p-2">
                  Primary and secondary text.
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-2">className?</td>
                <td className="border border-gray-300 p-2">string</td>
                <td className="border border-gray-300 p-2">
                  Optional custom classes.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  ),
};

export default ButtonDocs;
