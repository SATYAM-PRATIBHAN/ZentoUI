import { MenuSubItem } from "./MenuSubItem";

export type MenuItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
  hasSubmenu: boolean;
  submenu?: MenuSubItem[];
};
