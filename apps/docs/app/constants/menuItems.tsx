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
      { label: "Accordion" },
      { label: "Badge/Chip" },
      { label: "Button" },
      { label: "Card" },
      { label: "Input/Field" },
      { label: "Modal" },
      { label: "Switch", badge: "New" },
      { label: "Toast/Alert" },
    ],
  },
  {
    id: "sections",
    label: "Sections",
    icon: <Box strokeWidth={1} className="w-5 h-5" />,
    hasSubmenu: true,
    submenu: [
      { label: "Feature" },
      { label: "Hero" },
      { label: "Pricing", link: `${DOC_ROUTES.DOCS.SECTION.PRICING}` },
    ],
  },
];
