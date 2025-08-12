"use client";

import { DocContent } from "../../get-doc-content";
import { PreviewSwitcher } from "../../../components/ui/docs/PreviewSwitcher";
import React from "react";
import { SearchInput } from "@satyampratibhan/zento-ui";

const rawSearchInputCode = `import { SearchInput } from "@satyampratibhan/zento-ui";

export default function App() {
  return <SearchInput placeholder={/* default is Search */} type={/* Default is text */}/>;
};`;

const InputDocs: DocContent = {
  title: "Input",
  description:
    "The SearchInput is a styled input field with a built-in search icon, ideal for search bars in modern UIs.",
  content: (
    <div className="space-y-10 text-gray-700">
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Search Input</h2>
        <p>
          The <code>SearchInput</code> component combines a clean, rounded input
          with an integrated search icon button. Great for site-wide search
          bars, dashboards, or filtering lists.
        </p>
        <PreviewSwitcher
          preview={<SearchInput />}
          code={rawSearchInputCode}
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
                  SearchInput
                </td>
                <td className="border border-gray-300 p-2">placeholder</td>
                <td className="border border-gray-300 p-2">string</td>
                <td className="border border-gray-300 p-2">
                  Placeholder text shown when the input is empty.
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 p-2">type</td>
                <td className="border border-gray-300 p-2">string</td>
                <td className="border border-gray-300 p-2">
                  The HTML input type (default is <code>"text"</code>).
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  ),
};

export default InputDocs;
