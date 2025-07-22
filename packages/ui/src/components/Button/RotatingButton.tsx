import { motion, type Variants } from "framer-motion";
import type React from "react";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export interface RotatingButtonProps {
  children: React.ReactNode;
  className?: string;
}

export const RotatingButton: React.FC<RotatingButtonProps> = ({
  children,
  className,
}) => (
  <motion.div
    animate="animate"
    className={className ? className : "flex flex-wrap justify-center gap-4"}
    initial="initial"
    variants={itemVariants}
  >
    {children}
  </motion.div>
);
