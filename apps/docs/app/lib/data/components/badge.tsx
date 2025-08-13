"use client";

import { DocContent } from "../../get-doc-content";
import { PreviewSwitcher } from "../../../components/ui/docs/PreviewSwitcher";
import React from "react";
import { OnlineBadge, InProgressBadge, CancelledBadge } from "@satyampratibhan/zento-ui";

const rawBadgeCode = [
`import { OnlineBadge } from "@satyampratibhan/zento-ui";

export default function App() {
  return <OnlineBadge>Online</OnlineBadge>;
};`,
`import { InProgressBadge } from "@satyampratibhan/zento-ui";

export default function App() {
  return <InProgressBadge>In Progress</InProgressBadge>;
};`,
`import { CancelledBadge } from "@satyampratibhan/zento-ui";

export default function App() {
  return <CancelledBadge>Cancelled</CancelledBadge>;
};`
];

const BadgeDocs: DocContent = {
  title: "Badge",
  description:
    "The Badge component is used to display short status labels, indicators, or tags with distinct colors to represent different states.",
  content: (
    <div className="space-y-10 text-gray-700">
      {/* Online Badge */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Online Badge</h2>
        <p>
          The <code>OnlineBadge</code> is a green-colored badge indicating a positive or active status.
        </p>
        <PreviewSwitcher
          preview={<OnlineBadge>Online</OnlineBadge>}
          code={rawBadgeCode[0] || ""}
          language="tsx"
        />
      </section>

      {/* In Progress Badge */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">In Progress Badge</h2>
        <p>
          The <code>InProgressBadge</code> is a yellow-colored badge representing an ongoing process or task.
        </p>
        <PreviewSwitcher
          preview={<InProgressBadge>In Progress</InProgressBadge>}
          code={rawBadgeCode[1] || ""}
          language="tsx"
        />
      </section>

      {/* Cancelled Badge */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Cancelled Badge</h2>
        <p>
          The <code>CancelledBadge</code> is a red-colored badge indicating a stopped or terminated state.
        </p>
        <PreviewSwitcher
          preview={<CancelledBadge>Cancelled</CancelledBadge>}
          code={rawBadgeCode[2] || ""}
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
                <th className="border border-gray-300 p-2 text-left">Component</th>
                <th className="border border-gray-300 p-2 text-left">Prop</th>
                <th className="border border-gray-300 p-2 text-left">Type</th>
                <th className="border border-gray-300 p-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              {["OnlineBadge", "InProgressBadge", "CancelledBadge"].map((comp) => (
                <tr key={comp} className="bg-white">
                  <td className="border border-gray-300 p-2 font-medium">{comp}</td>
                  <td className="border border-gray-300 p-2">children</td>
                  <td className="border border-gray-300 p-2">string</td>
                  <td className="border border-gray-300 p-2">
                    The content to display inside the badge (usually text).
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  ),
};

export default BadgeDocs;
