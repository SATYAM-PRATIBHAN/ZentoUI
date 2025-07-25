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
  data: [titleOne: string, titleTwo: string];
  className?: string;
}

export const RotatingButton: React.FC<RotatingButtonProps> = ({
  data,
  className,
}) => (
  <motion.div
    animate="visible"
    className={className ? className : "flex flex-wrap justify-center gap-4"}
    initial="hidden"
    variants={itemVariants}
  >
    <div
      style={{
        position: "relative",
        display: "flex",
        cursor: "pointer",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.5rem",
        borderRadius: "0.5rem",
        backgroundColor: "black",
        padding: "0.8rem 1.25rem",
        color: "white",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "all 300ms ease-in-out",
      }}
      className="group"
    >
      <span
        style={{
          position: "relative",
          overflow: "hidden",
          fontWeight: 500,
          fontSize: "0.875rem",
          lineHeight: 1.25,
        }}
      >
        <span className="group-title-one">{data[0] || "Book a Call"}</span>
        <span className="group-title-two">{data[1] || "Contact us"}</span>
      </span>
    </div>
  </motion.div>
);
