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
import Configuration from "./data/configuration";

export const docs: Record<string, DocContent> = {
  introduction: Introduction,
  installation: Installation,
  usage: Usage,
  configuration: Configuration,
  // "components/button": button,
  // "components/accordion": accordion,
};

export function getDocBySlug(slug: string[]): DocContent | null {
  const joined = slug.join("/");
  return docs[joined] ?? null;
}
