"use client";

import { useState } from "react";

export function GlassyButton({
  children = "Get Started",
  onClick,
}: {
  children?: string;
  onClick?: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        borderRadius: "15px",
        border: isHovered
          ? "1px solid rgba(255,255,255,0.4)"
          : "1px solid transparent",
        background: "white",
        boxShadow: isHovered
          ? "3px 4px 15px rgba(165, 86, 251, 0.35)"
          : "3px 4px 11.1px rgba(165, 86, 251, 0.23)",
        width: "116px",
        height: "50px",
        color: "black",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "500",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        transition: "all 0.25s ease-in-out",
        transform: isHovered ? "scale(1.05)" : "scale(1)",
      }}
    >
      {children}
    </button>
  );
}
