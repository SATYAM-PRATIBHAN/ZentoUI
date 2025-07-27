// utils/flattenMenuItems.ts
import { menuItems } from "../constants/menuItems";

export const getFlattenedDocLinks = () => {
  const links: { label: string; link: string }[] = [];

  for (const item of menuItems) {
    if ("submenu" in item && Array.isArray(item.submenu)) {
      for (const sub of item.submenu) {
        if ("link" in sub && typeof sub.link === "string") {
          links.push({ label: sub.label, link: sub.link });
        }
      }
    }
  }

  return links;
};
