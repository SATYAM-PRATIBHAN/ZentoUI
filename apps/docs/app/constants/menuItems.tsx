import React from "react";
import { MenuItem } from "./types/MenuItem";
import { Box, LibraryBig, ListPlus } from "lucide-react";
import { GettingStarted } from "./icons/GettingStarted";

export type MenuItems = MenuItem[];

export const menuItems = [
  {
    id: "getting-started",
    label: "Getting Started",
    icon: <GettingStarted />,
    hasSubmenu: true,
    submenu: [
      { label: "Introduction", link: "/docs/introduction" },
      { label: "Installation", link: "/docs/installation" },
      { label: "Configuration", link: "/docs/configuration" },
      { label: "Usage", link: "/docs/usage" },
    ],
  },
  {
    id: "components",
    label: "Components",
    icon: <LibraryBig strokeWidth={1} className="h-5 w-5" />,
    hasSubmenu: true,
    submenu: [
      { label: "Accordion" },
      { label: "Badge/Chip", badge: "new" },
      { label: "Button" },
      { label: "Card", badge: "new" },
      { label: "Input/Field" },
      { label: "Modal" },
      { label: "Switch", badge: "new" },
      { label: "Toast/Alert" },
    ],
  },
  {
    id: "sections",
    label: "Sections",
    icon: <Box strokeWidth={1} className="w-5 h-5" />,
    hasSubmenu: true,
    submenu: [{ label: "Feature" }, { label: "Hero" }],
  },
  {
    id: "resources",
    label: "Resources",
    icon: <ListPlus strokeWidth={1} className="h-5 w-5" />,
    hasSubmenu: false,
  },
];
