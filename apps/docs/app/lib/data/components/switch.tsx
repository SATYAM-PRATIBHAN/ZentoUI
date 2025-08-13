"use client";

import { DocContent } from "../../get-doc-content";
import { PreviewSwitcher } from "../../../components/ui/docs/PreviewSwitcher";
import React from "react";
import { ThemeSwitch, ToggleButton } from "@satyampratibhan/zento-ui";

const rawSwitchCode = [`import { ToggleButton } from "@satyampratibhan/zento-ui";
import { useState } from "react";

export default function App() {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = (checked: boolean) => {
    setIsChecked(checked);
    console.log("Toggle changed to:", checked);
  };

  return (
    <ToggleButton 
      checkedValue={isChecked} 
      onChange={handleToggle} 
    />
  );
};`,
`import { ThemeSwitch } from "@satyampratibhan/zento-ui";

export default function App() {
  const handleThemeChange = (theme: "light" | "dark" | "system") => {
    console.log("Theme changed to:", theme);
    // Implement your theme switching logic here
    // For example: document.documentElement.setAttribute('data-theme', theme);
  };

  return (
    <ThemeSwitch 
      onChange={handleThemeChange}
      initialTheme="light"
    />
  );
};`];

const SwitchDocs: DocContent = {
  title: "Switch",
  description:
    "The Switch is a toggle control that lets users turn an option on or off, commonly used for settings and preferences.",
  content: (
    <div className="space-y-10 text-gray-700">
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Toggle Switch</h2>
        <p>
          The <code>Switch</code> component provides a simple on/off toggle UI
          with smooth animations. It's great for enabling or disabling features
          without using traditional checkboxes.
        </p>
        <PreviewSwitcher
          preview={<ToggleButton checkedValue={false} onChange={() => console.log("clicked")} />}
          code={rawSwitchCode[0] || ""}
          language="tsx"
        />
      </section>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Theme Switch</h2>
        <p>
          The <code>ThemeSwitch</code> component allows users to easily switch between light, dark, and system themes with animated transitions. It's ideal for providing a user-friendly way to control the application's appearance.
        </p>
        <PreviewSwitcher
          preview={<ThemeSwitch onChange={(theme) => console.log("Theme changed to:", theme)} />}
          code={rawSwitchCode[1] || ""}
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
                  ToggleButton
                </td>
                <td className="border border-gray-300 p-2">checkedValue</td>
                <td className="border border-gray-300 p-2">boolean</td>
                <td className="border border-gray-300 p-2">
                  Whether the toggle is on (<code>true</code>) or off (<code>false</code>).
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 p-2">onChange</td>
                <td className="border border-gray-300 p-2">
                  (checked: boolean) =&gt; void
                </td>
                <td className="border border-gray-300 p-2">
                  Callback function triggered when the toggle changes state.
                </td>
              </tr>
              <tr className="bg-white">
                <td
                  rowSpan={2}
                  className="border border-gray-300 p-2 align-top font-medium"
                >
                  ThemeSwitch
                </td>
                <td className="border border-gray-300 p-2">onChange</td>
                <td className="border border-gray-300 p-2">
                  (theme: "light" | "dark" | "system") =&gt; void
                </td>
                <td className="border border-gray-300 p-2">
                  Callback function triggered when the theme changes.
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-300 p-2">initialTheme</td>
                <td className="border border-gray-300 p-2">
                  "light" | "dark" | "system"
                </td>
                <td className="border border-gray-300 p-2">
                  The initial theme to display. Defaults to "light".
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  ),
};

export default SwitchDocs;
