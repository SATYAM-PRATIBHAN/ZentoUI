"use client";

import { DocContent } from "../../get-doc-content";
import { cn } from "../../utils";
import { PreviewSwitcher } from "../../../components/ui/docs/PreviewSwitcher";
import { CodeBlock } from "../../../components/ui/docs/CodeBlock";
import React from "react";

const PricingSection: DocContent = {
  title: "Pricing Section",
  description:
    "A ready-to-use pricing section component built for easy customization. Modify plans, features, and styles directly in code to match your product or brand.",
  content: <PricingPreviewWithToggle />,
};

function PricingPreviewWithToggle() {
  return (
    <>
      <PreviewSwitcher
        preview={<PricingSectionContent />}
        code={rawCode}
        language="tsx"
      />
      <div className="max-w-4xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-semibold mb-4">
          How to use this component
        </h3>
        <ol className="list-decimal space-y-4 pl-5 text-gray-800 text-base">
          <li>
            <strong>Copy the component:</strong> Copy the{" "}
            <code>PricingSection</code> component and place it in your project’s{" "}
            <code>components/</code> folder.
          </li>
          <li>
            <strong>Import & use it:</strong> Wherever you want to show the
            pricing section, import and render it like this:
            <div className="mt-2">
              <CodeBlock
                language="tsx"
                code={`import PricingSection from "@/components/PricingSection";

export default function Page() {
  return (
    <main>
      <PricingSection />
    </main>
  );
}`}
              />
            </div>
          </li>
          <li>
            <strong>Customize if needed:</strong> You can tweak the text, plans,
            features, or button styles directly in the component to match your
            needs.
          </li>
        </ol>
      </div>
    </>
  );
}

function PricingSectionContent() {
  return (
    <section>
      <div className="py-20 px-4 sm:px-8 lg:px-16 border border-gray-300 rounded-2xl">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-12 text-balance">
            Simple, scalable pricing
          </h2>
          <p className="text-gray-600 mt-4">
            Choose a plan that fits your design system and scaling needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Free Plan */}
          <PricingCard
            title="Free plan"
            price="$0"
            description="Perfect for small teams exploring ZentoUI components."
            features={[
              "✓ Access to core components",
              "✓ Community support",
              "✓ Up to 5 custom themes",
              "✓ Basic motion utilities",
            ]}
            button={{ label: "Get started for free", variant: "dark" }}
          />

          {/* Startup Plan */}
          <PricingCard
            title="Startup"
            price="$49"
            description="Ideal for teams building production-grade UI at scale."
            features={[
              "✓ Access to all components",
              "✓ Priority email support",
              "✓ 100+ theme presets",
              "✓ Advanced animation utilities",
            ]}
            button={{ label: "Buy this plan", variant: "blue" }}
            borderColor="blue-500"
          />

          {/* Enterprise Plan */}
          <PricingCard
            title="Enterprise"
            price="Custom"
            description="For large orgs looking for full customization and white-labeling."
            features={[
              "✓ Custom component theming",
              "✓ Custom licensing",
              "✓ Slack & SSO integration",
              "✓ Design system consultation",
            ]}
            variant="gradient"
            button={{ label: "Talk to sales", variant: "light" }}
          />
        </div>
      </div>
    </section>
  );
}

function PricingCard({
  title,
  price,
  description,
  features,
  button,
  borderColor,
  variant,
}: {
  title: string;
  price: string;
  description: string;
  features: string[];
  button: { label: string; variant: "dark" | "blue" | "light" };
  borderColor?: string;
  variant?: "gradient";
}) {
  const cardClass =
    variant === "gradient"
      ? "bg-gradient-to-b from-blue-500 to-blue-700 text-white"
      : "bg-white text-gray-900";

  const buttonClass =
    button.variant === "dark"
      ? "bg-gray-900 text-white"
      : button.variant === "blue"
        ? "bg-blue-600 hover:bg-blue-700 text-white"
        : "bg-white text-blue-600";

  return (
    <div>
      <div
        className={cn(
          "rounded-2xl p-8 shadow-md flex flex-col border",
          cardClass,
          borderColor ? `border-${borderColor}` : "border-gray-200",
        )}
      >
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-3xl font-bold">{price}</p>
        <p className="text-sm mt-1 mb-6">{description}</p>
        <button
          className={cn(
            "cursor-pointer py-2 rounded-lg font-medium mt-auto",
            buttonClass,
          )}
        >
          {button.label}
        </button>
      </div>
      <ul className={cn("text-sm text-left mt-8 space-y-4 px-4 text-gray-700")}>
        {features.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

const rawCode = ` 
export default function PricingSection() {
    return (
        <section className="py-20 px-4 sm:px-8 lg:px-16 rounded-4xl">
            <div className="max-w-6xl mx-auto text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-12 text-balance">
                    Simple, scalable pricing
                </h2>
                <p className="text-gray-600 mt-4">
                    Choose a plan that fits your design system and scaling needs.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Free Plan */}
                <div>
                    <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-200 flex flex-col">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Free plan
                        </h3>
                        <p className="text-3xl font-bold text-gray-900">$0</p>
                        <p className="text-sm text-gray-500 mt-1 mb-6">
                            Perfect for small teams exploring ZentoUI components.
                        </p>
                        <button className="bg-gray-900 cursor-pointer text-white py-2 rounded-lg font-medium mt-auto">
                            Get started for free
                        </button>
                    </div>
                    <ul className="text-sm text-left mt-8 space-y-4 px-4 text-gray-700">
                        <li>
                            ✓ Access to core <span className="font-bold">components</span>
                        </li>
                        <li>✓ Community support</li>
                        <li>✓ Up to 5 custom themes</li>
                        <li>✓ Basic motion utilities</li>
                    </ul>
                </div>

                {/* Startup Plan */}
                <div>
                    <div className="bg-white rounded-2xl p-8 shadow-md border border-blue-500 flex flex-col">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Startup
                        </h3>
                        <p className="text-3xl font-bold text-gray-900">$49</p>
                        <p className="text-sm text-gray-500 mt-1 mb-6">
                            Ideal for teams building production-grade UI at scale.
                        </p>
                        <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white py-2 rounded-lg font-medium mt-auto">
                            Buy this plan
                        </button>
                    </div>
                    <ul className="text-sm text-left mt-8 space-y-4 text-gray-700">
                        <li>
                            ✓ Access to all <span className="font-bold">components</span>
                        </li>
                        <li>✓ Priority email support</li>
                        <li>
                            ✓ 100+ <span className="font-bold">theme </span>presets
                        </li>
                        <li>✓ Advanced animation utilities</li>
                    </ul>
                </div>

                {/* Enterprise Plan */}
                <div>
                    <div className="bg-gradient-to-b from-blue-500 to-blue-700 rounded-2xl p-8 text-white shadow-md flex flex-col">
                        <h3 className="text-lg font-semibold mb-2">Enterprise</h3>
                        <p className="text-3xl font-bold">Custom</p>
                        <p className="text-sm mt-1 mb-6">
                            For large orgs looking for full customization and
                            white-labeling.
                        </p>
                        <button className="bg-white cursor-pointer text-blue-600 font-medium py-2 rounded-lg mt-auto">
                            Talk to sales
                        </button>
                    </div>
                    <ul className="text-sm text-left mt-8 space-y-4">
                        <li>✓ Custom component theming</li>
                        <li>
                            ✓ <span className="font-bold">Custom licensing</span>
                        </li>
                        <li>✓ Slack & SSO integration</li>
                        <li>
                            ✓ <span className="font-bold">Design system consultation</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>  
    );
}
`;

export default PricingSection;
