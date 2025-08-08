"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { OutLinedButton } from "../../components";
import Link from "next/link";
import { DOC_ROUTES } from "../../constants/route";
import Github from "../../constants/icons/GithubLogo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
          <Link
            className="text-gray-600 transition-colors hover:text-black"
            href={DOC_ROUTES.THEMES}
          >
            Themes
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

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -10 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            key="mobile-menu"
            className="absolute rounded-3xl left-0 right-0 top-full z-50 space-y-2 bg-white px-4 py-4 shadow-md md:hidden"
          >
            <a
              className="block text-xl text-gray-700 transition-colors hover:text-black"
              href="#"
            >
              Home
            </a>
            <a
              className="block text-xl text-gray-700 transition-colors hover:text-black"
              href="#"
            >
              Docs
            </a>
            <a
              className="block text-xl text-gray-700 transition-colors hover:text-black"
              href="#"
            >
              Pricing
            </a>
            <a
              className="block text-xl text-gray-700 transition-colors hover:text-black"
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
