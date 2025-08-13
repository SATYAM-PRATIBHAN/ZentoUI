"use client";

import { motion } from "framer-motion";
import ArrowLeft from "../../../../constants/icons/LeftArrow";
import ArrowRight from "../../../../constants/icons/RightArrow";
import { AnimatedButton, OutLinedButton } from "../../../../components";
import Link from "next/link";
import { DOC_ROUTES } from "../../../../constants/routes";

const HeroCTA = () => (
  <div className="mb-16 flex flex-col items-center justify-center gap-6 sm:flex-row">
    {/* Animate Arrow Left */}
    <motion.div
      className="hidden lg:block"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <ArrowLeft />
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      className="flex items-center justify-center gap-2 sm:gap-[12px]"
    >
      <Link href={DOC_ROUTES.DOCS.ROOT}>
        <AnimatedButton
          titleOne="Explore Components"
          titleTwo="Let's Get Started"
        />
      </Link>
      <Link href={DOC_ROUTES.CUSTOM_COMPONENTS}>
        <OutLinedButton>Custom Components</OutLinedButton>
      </Link>
    </motion.div>

    {/* Animate Arrow Right */}
    <motion.div
      className="hidden lg:block"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <ArrowRight />
    </motion.div>
  </div>
);

export default HeroCTA;
