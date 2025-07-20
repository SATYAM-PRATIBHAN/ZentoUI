import { motion, Variants } from "framer-motion";
import React from "react";

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

export interface RotatingButtonProps {
  children: React.ReactNode;
  className?: string;
}

export const RotatingButton: React.FC<RotatingButtonProps> = ({ children, className }) => (
  <motion.div
    className={className ? className : "flex flex-wrap gap-4 justify-center"}
    variants={itemVariants}
    initial="initial"
    animate="animate"
  >
    {children}
  </motion.div>
);
