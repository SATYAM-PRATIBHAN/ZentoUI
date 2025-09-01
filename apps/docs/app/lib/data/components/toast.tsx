"use client";

import { DocContent } from "../../get-doc-content";
import { PreviewSwitcher } from "../../../components/ui/docs/PreviewSwitcher";
import React from "react";
import { GlossyToast } from "@satyampratibhan/zento-ui";

// This is the raw code that will show in the "Code" tab
const rawToastCodes = [
  `import { GlossyToast } from "@satyampratibhan/zento-ui";

export default function App() {
  return (
    <div>
      <GlossyToast />
    </div>
  );
}`,
  `import { GlossyToast } from "@satyampratibhan/zento-ui";

export default function App() {
  return (
    <div className="flex flex-col gap-4">
      <GlossyToast 
        description="Would you like to save your changes before leaving?"
        option1="Save"
        option2="Don't Save"
      />
    </div>
  );
}`,
  `import { GlossyToast } from "@satyampratibhan/zento-ui";

export default function App() {
  return (
    <div className="flex flex-col gap-4">
      <GlossyToast 
        description="New update available! Would you like to install it now?"
        option1="Install Now"
        option2="Later"
      />
    </div>
  );
}`,
];

const ToastDocs: DocContent = {
  title: "Toast",
  description:
    "The GlossyToast component provides a beautiful, interactive toast notification system with a modern glassmorphism design. It includes an activation button to show/hide the toast and features smooth animations and hover effects. The component is fully customizable with props for message content and button labels.",
  content: (
    <div className="space-y-10 text-gray-700">
      {/* Main toast docs */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Glossy Toast</h2>
        <p>
          The <code>GlossyToast</code> component creates an elegant toast
          notification with a frosted glass appearance. It includes a toggle
          button to show/hide the toast and provides a rich user experience with
          interactive elements. The component is fully customizable through
          props for different use cases.
        </p>
        <PreviewSwitcher
          preview={<GlossyToast />}
          code={rawToastCodes[0] || ""}
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
                <th className="border border-gray-300 p-2 text-left">Prop</th>
                <th className="border border-gray-300 p-2 text-left">Type</th>
                <th className="border border-gray-300 p-2 text-left">
                  Default
                </th>
                <th className="border border-gray-300 p-2 text-left">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white">
                <td className="border border-gray-300 p-2 font-medium">
                  description?
                </td>
                <td className="border border-gray-300 p-2">string</td>
                <td className="border border-gray-300 p-2">
                  Default meeting message
                </td>
                <td className="border border-gray-300 p-2">
                  Custom message text to display in the toast notification
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 p-2 font-medium">
                  option1?
                </td>
                <td className="border border-gray-300 p-2">string</td>
                <td className="border border-gray-300 p-2">&quot;Yes&quot;</td>
                <td className="border border-gray-300 p-2">
                  Custom text for the first action button (left button)
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 p-2 font-medium">
                  option2?
                </td>
                <td className="border border-gray-300 p-2">string</td>
                <td className="border border-gray-300 p-2">&quot;No&quot;</td>
                <td className="border border-gray-300 p-2">
                  Custom text for the second action button (right button)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  ),
};

export default ToastDocs;
