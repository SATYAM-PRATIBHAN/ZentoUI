"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { OutLinedButton } from "../../../../components";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="px-4 py-6 sm:px-6 lg:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <div className="font-bold text-black text-xl sm:text-2xl">
          <Image
            alt="ZentoUI Logo"
            height={30}
            src="/ZentoUIBranding.png"
            width={100}
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden items-center space-x-8 md:flex">
          <a
            className="text-gray-600 transition-colors hover:text-black"
            href="#"
          >
            Home
          </a>
          <a
            className="text-gray-600 transition-colors hover:text-black"
            href="#"
          >
            Docs
          </a>
          <a
            className="text-gray-600 transition-colors hover:text-black"
            href="#"
          >
            Pricing
          </a>
          <a
            className="text-gray-600 transition-colors hover:text-black"
            href="#"
          >
            Contact
          </a>
          <OutLinedButton className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-gray-400 px-5 py-2 font-medium text-gray-500 text-sm duration-200 hover:text-gray-800 sm:rounded-xl sm:px-4 sm:py-1 sm:text-base lg:text-md">
            <Star className="h-4 w-4" />
            Star on Github
          </OutLinedButton>
        </div>

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
      </nav>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            animate={{ opacity: 1, height: "auto" }}
            className="mt-4 space-y-4 overflow-hidden px-4 md:hidden"
            exit={{ opacity: 0, height: 0 }}
            initial={{ opacity: 0, height: 0 }}
            key="mobile-menu"
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <a
              className="block text-gray-700 transition-colors hover:text-black"
              href="#"
            >
              Home
            </a>
            <a
              className="block text-gray-700 transition-colors hover:text-black"
              href="#"
            >
              Docs
            </a>
            <a
              className="block text-gray-700 transition-colors hover:text-black"
              href="#"
            >
              Pricing
            </a>
            <a
              className="block text-gray-700 transition-colors hover:text-black"
              href="#"
            >
              Contact
            </a>
            <OutLinedButton>Star on Github</OutLinedButton>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
