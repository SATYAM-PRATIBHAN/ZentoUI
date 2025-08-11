// src/lib/docs/get-doc-content.tsx
import type React from "react";

export interface DocContent {
  title: string;
  description?: string;
  content: React.ReactNode;
}

// Lazy imports from data folder
import Introduction from "./data/introduction";
import Installation from "./data/installation";
import Usage from "./data/usage";
import PricingSection from "./data/sections/pricing";
import ButtonDocs from "./data/components/button";

export const docs: Record<string, DocContent> = {
  introduction: Introduction,
  installation: Installation,
  usage: Usage,
  "sections/pricing": PricingSection,
  "components/button": ButtonDocs,
  // "components/accordion": accordion,
};

export function getDocBySlug(slug: string[]): DocContent | null {
  const joined = slug.join("/");
  return docs[joined] ?? null;
}
