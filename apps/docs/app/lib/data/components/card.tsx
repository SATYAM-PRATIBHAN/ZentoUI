"use client";

import { DocContent } from "../../get-doc-content";
import { PreviewSwitcher } from "../../../components/ui/docs/PreviewSwitcher";
import React from "react";
import { GlowCard, ContactCard } from "@satyampratibhan/zento-ui";

const rawCardCode = [
  `import { GlowCard } from "@satyampratibhan/zento-ui";

export default function App() {
  return (
    <GlowCard />
  );
};`,
  `import { ContactCard } from "@satyampratibhan/zento-ui";

export default function App() {
  return (
    <ContactCard />
  );
};`,
];

const CardDocs: DocContent = {
  title: "Card",
  description:
    "The Card component is used to display content in a structured container with distinct styles. Variants like GlowCard and ContactCard provide specialized layouts.",
  content: (
    <div className="space-y-10 text-gray-700">
      {/* Glow Card */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Glow Card</h2>
        <p>
          The <code>GlowCard</code> component wraps any content and adds a
          glowing border effect. It accepts <code>children</code> of type{" "}
          <code>React.ReactNode</code>.
        </p>
        <PreviewSwitcher
          preview={<GlowCard />}
          code={rawCardCode[0] || ""}
          language="tsx"
        />
      </section>

      {/* Contact Card */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Contact Card</h2>
        <p>
          The <code>ContactCard</code> component displays contact information in
          a neatly styled format.
        </p>
        <PreviewSwitcher
          preview={<ContactCard />}
          code={rawCardCode[1] || ""}
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
                <td className="border border-gray-300 p-2 font-medium">
                  GlowCard
                </td>
                <td className="border border-gray-300 p-2">children</td>
                <td className="border border-gray-300 p-2">React.ReactNode</td>
                <td className="border border-gray-300 p-2">
                  Content to display inside the card.
                </td>
              </tr>
              {[
                "bannerImage",
                "profileImage",
                "name",
                "description",
                "buttonLabel",
              ].map((prop) => (
                <tr key={prop} className="bg-white">
                  <td className="border border-gray-300 p-2 font-medium">
                    {prop === "bannerImage" ? "ContactCard" : ""}
                  </td>
                  <td className="border border-gray-300 p-2">{prop}</td>
                  <td className="border border-gray-300 p-2">string</td>
                  <td className="border border-gray-300 p-2">
                    {prop === "bannerImage"
                      ? "URL of the banner image to display at the top of the card."
                      : prop === "profileImage"
                        ? "URL of the profile image to display in the card."
                        : prop === "name"
                          ? "Name of the contact."
                          : prop === "description"
                            ? "Short description or role of the contact."
                            : prop === "buttonLabel"
                              ? "Label text for the action button."
                              : ""}
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

export default CardDocs;
