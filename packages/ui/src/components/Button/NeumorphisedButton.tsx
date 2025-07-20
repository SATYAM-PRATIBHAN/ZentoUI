import React from "react";

interface GlowingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const LiqiudGlassButton: React.FC<GlowingButtonProps> = ({ children, ...props }) => (
  <button
    {...props}
    style={{
      background: "#F1F5F9",
      boxShadow: "8px 8px 16px #C9D9E8, -8px -8px 16px #FFFFFF, inset 2px 2px 6px #E2E8F0, inset -2px -2px 6px #FFFFFF",
      color: "#22223B",
      border: "none",
      borderRadius: "9999px",
      padding: "0.75rem 2rem",
      fontWeight: 600,
      fontSize: "1rem",
      cursor: "pointer",
      transition: "box-shadow 0.2s, transform 0.2s",
      outline: "none",
    }}
  >
    {children}
  </button>
);
