"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const HeroText = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="w-full px-4 text-center sm:px-6 lg:px-8"
  >
    <h1 className="mb-4 font-bold text-4xl text-black leading-tight tracking-tight sm:text-5xl lg:text-7xl lg:leading-[1.15] xl:text-[88px]">
      Design{" "}
      <span className="inline-flex items-center">
        <Image
          src="/shape3.webp"
          width={40}
          height={40}
          className="inline-block w-6 h-6 sm:w-10 sm:h-10 lg:w-18 lg:h-18 mx-1"
          alt="Shape-1"
        />
      </span>{" "}
      with Speed <br />
      Code{" "}
      <span className="inline-flex items-center">
        <Image
          src="/shape4.webp"
          width={40}
          height={40}
          className="inline-block w-6 h-6 sm:w-10 sm:h-10 lg:w-18 lg:h-18 mx-1"
          alt="Shape-2"
        />
      </span>{" "}
      with Confidence{" "}
      <span className="inline-flex items-center">
        <Image
          src="/shape5.webp"
          width={40}
          height={40}
          className="inline-block w-6 h-6 sm:w-10 sm:h-10 lg:w-18 lg:h-18 mx-1"
          alt="Shape-3"
        />
      </span>
    </h1>

    <p className="mx-auto mt-4 mb-6 max-w-2xl text-gray-600 text-sm sm:text-lg md:mb-4 lg:mb-0 lg:text-xl">
      A modern, beautifully designed component library built for shipping clean
      and responsive UIs — without reinventing the wheel.
    </p>
  </motion.div>
);

export default HeroText;
