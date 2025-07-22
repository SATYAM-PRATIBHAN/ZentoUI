import { useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import { motion } from "framer-motion";

const icons = {
  light: <Sun size={20} color="black" />,
  dark: <Moon size={20} color="black" />,
  system: <Monitor size={20} color="black" />,
};

export function ThemeSwitch() {
  const [active, setActive] = useState<"light" | "dark" | "system">("light");

  const options: ("light" | "dark" | "system")[] = ["light", "dark", "system"];
  const activeIndex = options.indexOf(active);
  const buttonWidth = 44;

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        background: "#EAEAEA",
        padding: "8px",
        borderRadius: "14px",
        gap: "10px",
      }}
    >
      {/* Animated background highlight */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        style={{
          position: "absolute",
          top: 6,
          left: 8 + activeIndex * (buttonWidth + 10), // +gap
          width: buttonWidth,
          height: 44,
          background: "white",
          borderRadius: "12px",
          boxShadow: "0px 12px 40px -4px rgba(0, 0, 0, 0.40)",
          zIndex: 1,
        }}
      />

      {options.map((mode) => (
        <button
          key={mode}
          onClick={() => setActive(mode)}
          style={{
            position: "relative",
            zIndex: 2,
            background: "transparent",
            border: "none",
            borderRadius: "12px",
            padding: "10px 12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "color 0.2s ease",
          }}
        >
          {icons[mode]}
        </button>
      ))}
    </div>
  );
}
