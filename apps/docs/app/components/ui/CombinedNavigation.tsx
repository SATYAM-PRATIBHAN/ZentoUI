"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { OutLinedButton } from "../../components";
import Link from "next/link";
import { DOC_ROUTES } from "../../constants/routes";
import Github from "../../constants/icons/GithubLogo";
import { menuItems } from "../../constants/menuItems";
import { usePathname } from "next/navigation";
import { MenuSubItem } from "../../constants/types/MenuSubItem";

export default function CombinedNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative py-6 sm:px-6 lg:px-8">
      <motion.nav
        className="mx-auto flex max-w-7xl px-4 items-center justify-between"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo */}
        <motion.div
          className="font-bold text-black text-xl sm:text-2xl"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link href={DOC_ROUTES.HOME}>
            <Image
              alt="ZentoUI Logo"
              height={30}
              src="/ZentoUIBranding.webp"
              width={100}
            />
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <motion.div
          className="hidden items-center space-x-8 md:flex"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            className="text-gray-600 transition-colors hover:text-black"
            href={DOC_ROUTES.HOME}
          >
            Home
          </Link>
          <Link
            className="text-gray-600 transition-colors hover:text-black"
            href={DOC_ROUTES.DOCS.ROOT}
          >
            Docs
          </Link>
          <OutLinedButton className="flex items-center gap-2 lg:px-4 lg:py-[4px]">
            <Github />
            <Link href={DOC_ROUTES.SOCIAL.GITHUB}>Star on Github</Link>
          </OutLinedButton>
        </motion.div>

        {/* Mobile Toggle Button */}
        <button className="p-2 md:hidden" onClick={toggleMobileMenu}>
          <svg
            className="h-6 w-6 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <AnimatePresence initial={false} mode="wait">
              {isOpen ? (
                <motion.path
                  animate={{ opacity: 1, pathLength: 1 }}
                  d="M6 18L18 6M6 6l12 12"
                  exit={{ opacity: 0, pathLength: 0 }}
                  initial={{ opacity: 0, pathLength: 0 }}
                  key="close"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  transition={{ duration: 0.2 }}
                />
              ) : (
                <motion.path
                  animate={{ opacity: 1, pathLength: 1 }}
                  d="M4 6h16M4 12h16M4 18h16"
                  exit={{ opacity: 0, pathLength: 0 }}
                  initial={{ opacity: 0, pathLength: 0 }}
                  key="hamburger"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  transition={{ duration: 0.2 }}
                />
              )}
            </AnimatePresence>
          </svg>
        </button>
      </motion.nav>

      {/* Animated Mobile Menu with Combined Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -10 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            key="mobile-menu"
            className="absolute rounded-3xl left-0 right-0 top-full z-50 bg-white px-4 py-4 shadow-md md:hidden max-h-[80vh] overflow-y-auto"
          >
            {/* Main Navigation Links */}
            <div className="space-y-2 mb-6 border-b border-gray-200 pb-4">
              <Link
                className="block text-xl text-gray-700 transition-colors hover:text-black"
                href={DOC_ROUTES.HOME}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                className="block text-xl text-gray-700 transition-colors hover:text-black"
                href={DOC_ROUTES.DOCS.ROOT}
                onClick={() => setIsOpen(false)}
              >
                Docs
              </Link>
              <OutLinedButton
                className="w-full justify-center"
                onClick={() => setIsOpen(false)}
              >
                <Github />
                <Link href={DOC_ROUTES.SOCIAL.GITHUB}>Star on Github</Link>
              </OutLinedButton>
            </div>

            {/* Documentation Menu Items */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Documentation
              </h3>
              {menuItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-full flex items-center px-3 py-2 text-left text-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <span className="text-gray-500">{item.icon}</span>
                      <span className="font-medium">{item.label}</span>
                    </div>
                  </div>

                  {"submenu" in item && Array.isArray(item.submenu) && (
                    <div className="ml-8 mt-2 space-y-1 border-l-2 border-gray-200 pl-4">
                      {item.submenu.map((subItem: MenuSubItem) => (
                        <Link
                          href={subItem?.link || "/docs"}
                          key={subItem.label}
                          onClick={() => setIsOpen(false)}
                        >
                          <motion.div
                            whileTap={{ scale: 0.98 }}
                            transition={{ duration: 0.1 }}
                            className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-all duration-150 ${
                              path === subItem.link
                                ? "bg-gray-100 shadow-sm border border-gray-200"
                                : "text-gray-600 hover:bg-gray-50"
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
                                className={`px-1.5 py-0.5 text-xs font-medium rounded-full ${
                                  subItem.badge === "5"
                                    ? "bg-orange-200 text-orange-800"
                                    : "text-black bg-lime-400 rounded-full"
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
