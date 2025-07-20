"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { OutLinedButton } from "../../../../components";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="px-4 sm:px-6 lg:px-8 py-6">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-xl sm:text-2xl font-bold text-black">
          <Image
            src="/ZentoUIBranding.png"
            alt="ZentoUI Logo"
            width={100}
            height={30}
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-black transition-colors">Home</a>
          <a href="#" className="text-gray-700 hover:text-black transition-colors">Docs</a>
          <a href="#" className="text-gray-700 hover:text-black transition-colors">Pricing</a>
          <a href="#" className="text-gray-700 hover:text-black transition-colors">Contact</a>
          <OutLinedButton data="Get Started"/>
        </div>

        {/* Mobile Toggle Button */}
        <button onClick={toggleMobileMenu} className="md:hidden p-2">
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.path
                  key="close"
                  initial={{ opacity: 0, pathLength: 0 }}
                  animate={{ opacity: 1, pathLength: 1 }}
                  exit={{ opacity: 0, pathLength: 0 }}
                  transition={{ duration: 0.2 }}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <motion.path
                  key="hamburger"
                  initial={{ opacity: 0, pathLength: 0 }}
                  animate={{ opacity: 1, pathLength: 1 }}
                  exit={{ opacity: 0, pathLength: 0 }}
                  transition={{ duration: 0.2 }}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
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
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden px-4 mt-4 overflow-hidden space-y-4"
          >
            <a href="#" className="block text-gray-700 hover:text-black transition-colors">Home</a>
            <a href="#" className="block text-gray-700 hover:text-black transition-colors">Docs</a>
            <a href="#" className="block text-gray-700 hover:text-black transition-colors">Pricing</a>
            <a href="#" className="block text-gray-700 hover:text-black transition-colors">Contact</a>
            <OutLinedButton data="Star on Github"/>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
