"use client";

import { motion } from "framer-motion";
import { menuItems } from "../../../constants/menuItems";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuSubItem } from "../../../constants/types/MenuSubItem";

export default function Sidebar() {
  const path = usePathname();

  return (
    <div className="w-64 h-screen border-gray-200 px-4">
      <div className="space-y-1">
        {menuItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-full flex items-center px-3 py-2 text-left text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-150">
              <div className="flex items-center space-x-3">
                <span className="text-gray-500">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </div>
            </div>

            {"submenu" in item && Array.isArray(item.submenu) && (
              <div className="ml-8 mt-2 space-y-1 border-l-2 border-gray-200 pl-4">
                {item.submenu.map((subItem: MenuSubItem) => (
                  <Link href={subItem?.link || "/docs"} key={subItem.label}>
                    <motion.div
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.1 }}
                      className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-all duration-150 ${
                        path === subItem.link
                          ? "bg-white shadow-sm border border-gray-200"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <motion.span
                        className={`transition-colors duration-100 ${
                          path === subItem.link
                            ? "font-medium text-gray-900"
                            : ""
                        }`}
                      >
                        {subItem.label}
                      </motion.span>
                      {"badge" in subItem && subItem.badge && (
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${
                            subItem.badge === "5"
                              ? "bg-orange-200 text-orange-800"
                              : "bg-green-200 text-green-800"
                          }`}
                        >
                          {subItem.badge}
                        </span>
                      )}
                    </motion.div>
                  </Link>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
