"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Sidebar() {
  const [activeSubmenuItem, setActiveSubmenuItem] = useState("Installation");

  const menuItems = [
    {
      id: "getting-started",
      label: "Getting Started",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
        </svg>
      ),
      hasSubmenu: true,
      submenu: [
        { label: "Introduction" },
        { label: "Installation" },
        { label: "Configuration" },
        { label: "Usage" },
      ],
    },
    {
      id: "components",
      label: "Components",
      icon: (
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="6" width="18" height="14" rx="2" ry="2" />
          <path d="M9 20v-3.87a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3.87" />
        </svg>
      ),
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
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
        </svg>
      ),
      hasSubmenu: true,
      submenu: [{ label: "Feature" }, { label: "Card" }, { label: "Hero" }],
    },
    {
      id: "resources",
      label: "Resources",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      hasSubmenu: false,
    },
  ];

  return (
    <div className="w-64 h-screen border-gray-200 px-4">
      <div className="space-y-1">
        {menuItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full flex items-center px-3 py-2 text-left text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-150">
              <div className="flex items-center space-x-3">
                <span className="text-gray-500">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </div>
            </div>

            {item.hasSubmenu && item.submenu && (
              <div className="ml-8 mt-2 space-y-1 border-l-2 border-gray-200 pl-4">
                {item.submenu.map((subItem, index) => (
                  <motion.div
                    layout
                    key={index}
                    onClick={() => setActiveSubmenuItem(subItem.label)}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 ${
                      activeSubmenuItem === subItem.label
                        ? "bg-white shadow-sm border border-gray-200"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <motion.span
                      layout
                      className={`transition-colors duration-150 ${
                        activeSubmenuItem === subItem.label
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
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
