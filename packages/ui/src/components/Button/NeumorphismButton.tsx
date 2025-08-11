import React from "react";

export const NeumorphismButton = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);

  const baseStyle: React.CSSProperties = {
    backgroundColor: "#f9f9f9",
    borderRadius: "50px",
    color: "#333333",
    cursor: "pointer",
    fontSize: "18px",
    padding: "15px 40px",
    transition: "all 0.2s ease-in-out",
    border: "2px solid #f0f0f0",
    boxShadow:
      isFocused || isHovered
        ? "inset 2px 2px 5px #e6e6e6, inset -2px -2px 5px #ffffff, 2px 2px 5px #e6e6e6, -2px -2px 5px #ffffff"
        : "inset 4px 4px 10px #e6e6e6, inset -4px -4px 10px #ffffff",
    outline: "none",
  };

  return (
    <div 
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "1rem",
    }}
    >
      <button
      onBlur={() => setIsFocused(false)}
      onFocus={() => setIsFocused(true)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={baseStyle}
    >
      {children || "Press me"}
    </button>
    </div>
    
  );
};
