"use client";

import { motion } from "framer-motion";
import { easeInOut } from "framer-motion"; // ✅ Add this line
import Image from "next/image";

const fadeIn = (direction = "up", delay = 0) => {
  const distance = 40;
  return {
    initial: {
      opacity: 0,
      x:
        direction === "left" ? -distance : direction === "right" ? distance : 0,
      y: direction === "up" ? distance : direction === "down" ? -distance : 0,
    },
    whileInView: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: easeInOut, // ✅ Use imported easing function instead of string
      },
    },
    viewport: { once: true, amount: 0.3 },
  };
};

export default function FeatureSection() {
  return (
    <section className="pb-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Feature 1 */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div className="md:w-1/2 space-y-6" {...fadeIn("left")}>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-12 text-balance">
              Build Interfaces, Not Boilerplate
            </h2>
            <p className="text-gray-600">
              ZentoUI provides ready-to-use components with elegant styles,
              minimal setup, and maximum flexibility. You get to focus on
              crafting great user experiences, not styling buttons from scratch.
            </p>
          </motion.div>
          <motion.div className="md:w-1/2" {...fadeIn("right", 0.1)}>
            <Image
              src="/feature1.webp"
              alt="Feature 1 illustration"
              width={400}
              height={300}
              className="w-full rounded-3xl max-w-md mx-auto"
            />
          </motion.div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <motion.div className="md:w-1/2" {...fadeIn("left")}>
            <Image
              src="/feature2.webp"
              alt="Feature 2 illustration"
              width={400}
              height={300}
              className="w-full rounded-3xl max-w-md mx-auto"
            />
          </motion.div>
          <motion.div className="md:w-1/2 space-y-6" {...fadeIn("right", 0.1)}>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-12 text-balance">
              Designed for Modern Development
            </h2>
            <p className="text-gray-600">
              Built with Tailwind CSS and Framer Motion, every ZentoUI component
              is performant, theme-aware, and easily animated. Whether
              you&apos;re building a dashboard or a marketing site, your UI
              stays fast and fluid.
            </p>
          </motion.div>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div className="md:w-1/2 space-y-6" {...fadeIn("left")}>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-12 text-balance">
              Production Ready, Out of the Box
            </h2>
            <p className="text-gray-600">
              Every component ships with accessibility baked in and responsive
              styles. No plugin hell, no custom hacks, just drop it in and ship
              confidently.
            </p>
          </motion.div>
          <motion.div className="md:w-1/2" {...fadeIn("right", 0.1)}>
            <Image
              src="/feature3.webp"
              alt="Feature 3 illustration"
              width={400}
              height={300}
              className="w-full rounded-3xl max-w-md mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
