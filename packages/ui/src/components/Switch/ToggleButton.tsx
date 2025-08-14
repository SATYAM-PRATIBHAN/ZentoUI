"use client";

import { useEffect, useState } from "react";

interface ToggleButtonProps {
  checkedValue: boolean;
  onChange: () => void;
}

export function ToggleButton(props: ToggleButtonProps) {
  const [checked, setChecked] = useState(props.checkedValue);
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    setChecked(props.checkedValue);
  }, [props.checkedValue]);

  useEffect(() => {
    const checkSize = () => setIsSmall(window.innerWidth < 500);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const handleToggle = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    props.onChange();
  };

  const containerStyle = {
    position: "relative",
    width: isSmall ? "100px" : "150px",
    height: isSmall ? "40px" : "60px",
    background: "#e8e8e8",
    borderRadius: "50px",
    boxShadow: "inset -8px -8px 16px #ffffff, inset 8px 8px 16px #e0e0e0",
  };

  const switchStyle = {
    position: "absolute",
    top: "50%",
    left: 0,
    width: "100%",
    height: "100%",
    transform: "translateY(-50%)",
    borderRadius: "50px",
    overflow: "hidden",
    cursor: "pointer",
  };

  const toggleStyle = {
    position: "absolute",
    width: isSmall ? "52px" : "80px",
    height: isSmall ? "30px" : "50px",
    top: isSmall ? "5px" : "5px",
    left: checked ? (isSmall ? "43px" : "65px") : "5px",
    borderRadius: "50px",
    paddingLeft: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    background: checked
      ? "linear-gradient(145deg, #cfcfcf, #a9a9a9)"
      : "linear-gradient(145deg, #d9d9d9, #bfbfbf)",
    boxShadow: checked
      ? "-4px -4px 8px #ffffff, 4px 4px 8px #8a8a8a"
      : "-4px -4px 8px #ffffff, 4px 4px 8px #b0b0b0",
    transition: "all 0.3s ease-in-out",
  };

  const ledStyle = {
    width: isSmall ? "8px" : "10px",
    height: isSmall ? "8px" : "10px",
    borderRadius: "50%",
    background: checked ? "yellow" : "grey",
    boxShadow: checked
      ? "0 0 15px 4px yellow"
      : "0 0 10px 2px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s ease-in-out",
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
      <div style={containerStyle as React.CSSProperties}>
        <input
          checked={checked}
          id="toggle-switch"
          onChange={handleToggle}
          style={{ display: "none" }}
          type="checkbox"
        />
        <label
          htmlFor="toggle-switch"
          onMouseEnter={(e) => {
            const toggle = e.currentTarget.querySelector(
              ".toggle",
            ) as HTMLElement | null;
            if (toggle) {
              toggle.style.boxShadow =
                "-4px -4px 12px #ffffff, 4px 4px 12px #9b9b9b";
            }
          }}
          onMouseLeave={(e) => {
            const toggle = e.currentTarget.querySelector(
              ".toggle",
            ) as HTMLElement | null;
            if (toggle) {
              toggle.style.boxShadow = checked
                ? "-4px -4px 8px #ffffff, 4px 4px 8px #8a8a8a"
                : "-4px -4px 8px #ffffff, 4px 4px 8px #b0b0b0";
            }
          }}
          style={switchStyle as React.CSSProperties}
        >
          <div className="toggle" style={toggleStyle as React.CSSProperties}>
            <div className="led" style={ledStyle as React.CSSProperties} />
          </div>
        </label>
      </div>
    </div>
  );
}
