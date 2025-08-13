import React from "react";
import { MenuItem } from "./types/MenuItem";
import { Box, LibraryBig } from "lucide-react";
import { GettingStarted } from "./icons/GettingStarted";
import { DOC_ROUTES } from "./route";

export type MenuItems = MenuItem[];

export const menuItems = [
  {
    id: "getting-started",
    label: "Getting Started",
    icon: <GettingStarted />,
    hasSubmenu: true,
    submenu: [
      { label: "Introduction", link: `${DOC_ROUTES.DOCS.INTRODUCTION}` },
      { label: "Installation", link: `${DOC_ROUTES.DOCS.INSTALLATION}` },
      { label: "Usage", link: `${DOC_ROUTES.DOCS.USAGE}` },
    ],
  },
  {
    id: "components",
    label: "Components",
    icon: <LibraryBig strokeWidth={1} className="h-5 w-5" />,
    hasSubmenu: true,
    submenu: [
      { label: "Accordion", link: `${DOC_ROUTES.DOCS.COMPONENTS.ACCORDION}` },
      { label: "Badge/Chip", link: `${DOC_ROUTES.DOCS.COMPONENTS.BADGE}` },
      { label: "Button", link: `${DOC_ROUTES.DOCS.COMPONENTS.BUTTON}` },
      { label: "Card", link: `${DOC_ROUTES.DOCS.COMPONENTS.CARD}` },
      { label: "Input/Field", link: `${DOC_ROUTES.DOCS.COMPONENTS.INPUT}` },
      { label: "Modal" },
      {
        label: "Switch",
        badge: "New",
        link: `${DOC_ROUTES.DOCS.COMPONENTS.SWITCH}`,
      },
      { label: "Toast/Alert" },
    ],
  },
  {
    id: "sections",
    label: "Sections",
    icon: <Box strokeWidth={1} className="w-5 h-5" />,
    hasSubmenu: true,
    submenu: [
      { label: "Feature", link: `${DOC_ROUTES.DOCS.SECTION.FEATURES}` },
      { label: "Hero" },
      { label: "Pricing", link: `${DOC_ROUTES.DOCS.SECTION.PRICING}` },
    ],
  },
];
