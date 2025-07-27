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
  <>
    <motion.div
      animate="visible"
      initial="hidden"
      variants={itemVariants}
      className={className ?? ""}
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <div className="group">
        <span className="button-text">
          <span className="group-title-one">{data[0] || "Book a Call"}</span>
          <span className="group-title-two">{data[1] || "Contact us"}</span>
        </span>
      </div>
    </motion.div>

    {/* Inline CSS styles */}
    <style>{`
      .group {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border-radius: 0.5rem;
        background-color: black;
        padding: 0.8rem 1.25rem;
        color: white;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: all 300ms ease-in-out;
      }

      .button-text {
        position: relative;
        overflow: hidden;
        font-weight: 500;
        font-size: 0.875rem;
        line-height: 1.25;
      }

      .group-title-one {
        display: block;
        transform: translateY(0);
        transition: transform 300ms ease-in-out;
      }

      .group:hover .group-title-one {
        transform: translateY(-100%);
      }

      .group-title-two {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        transform: translateY(100%);
        transition: transform 300ms ease-in-out;
      }

      .group:hover .group-title-two {
        transform: translateY(0);
      }

      /* Responsive font sizes */
      @media (min-width: 640px) {
        .button-text {
          font-size: 1rem;
        }
      }

      @media (min-width: 1024px) {
        .button-text {
          font-size: 1.125rem;
        }
      }

      /* Responsive padding and border-radius */
      @media (min-width: 640px) {
        .group {
          border-radius: 0.75rem;
          padding: 0.75rem 1.5rem;
        }
      }
    `}</style>
  </>
);
