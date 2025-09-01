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
import AccordionDocs from "./data/components/accordion";
import InputDocs from "./data/components/input";
import SwitchDocs from "./data/components/switch";
import BadgeDocs from "./data/components/badge";
import CardDocs from "./data/components/card";
import FeaturesSection from "./data/sections/features";
import ToastDocs from "./data/components/toast";
import SignInSection from "./data/sections/signin";

export const docs: Record<string, DocContent> = {
  introduction: Introduction,
  installation: Installation,
  usage: Usage,
  "components/button": ButtonDocs,
  "components/accordion": AccordionDocs,
  "components/input": InputDocs,
  "components/switch": SwitchDocs,
  "components/badge": BadgeDocs,
  "components/card": CardDocs,
  "components/toast": ToastDocs,
  "sections/pricing": PricingSection,
  "sections/features": FeaturesSection,
  "sections/signin": SignInSection,
};

export function getDocBySlug(slug: string[]): DocContent | null {
  const joined = slug.join("/");
  return docs[joined] ?? null;
}
