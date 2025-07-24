import { motion } from "framer-motion";
import { Monitor, Moon, Sun } from "lucide-react";
import { useState } from "react";

const icons = {
  light: [<Sun key="light" color="black" size={20} />, "Light Theme"],
  dark: [<Moon key="dark" color="black" size={20} />, "Dark Theme"],
  system: [<Monitor key="system" color="black" size={20} />, "System Theme"],
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
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />

      {options.map((mode) => (
        <button
          key={mode}
          onClick={() => setActive(mode)}
          aria-label={mode[1]}
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
          {icons[mode][0]}
        </button>
      ))}
    </div>
  );
}
