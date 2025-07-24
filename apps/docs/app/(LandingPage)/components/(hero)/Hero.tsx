"use client";

import Image from "next/image";
import { HeroCTA, HeroImageMockUp, HeroText } from "./components";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Shapes */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-[15%] left-0 w-20 sm:w-32 md:w-40 lg:w-[250px] h-auto -translate-x-1/3 z-0 pointer-events-none"
      >
        <Image
          src="/shape1.webp"
          alt="Left shape"
          width={250}
          height={250}
          priority
        />
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-[25%] right-0 w-20 sm:w-32 md:w-40 lg:w-[250px] h-auto translate-x-1/4 z-0 pointer-events-none"
      >
        <Image
          src="/shape2.webp"
          alt="Right shape"
          width={250}
          height={250}
          priority
        />
      </motion.div>

      <div className="relative z-10">
        <main className="px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
          {/* HeroText Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <HeroText />
          </motion.div>

          {/* HeroCTA Animation */}

          <HeroCTA />

          {/* HeroImageMockUp Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          >
            <HeroImageMockUp />
          </motion.div>
        </main>
      </div>
    </div>
  );
}
