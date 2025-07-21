import { useState } from "react";

export function ToggleButton() {
  const [checked, setChecked] = useState(false);

  const containerStyle = {
    position: "relative",
    width: "150px",
    height: "60px",
    background: "#e8e8e8", // more whitish background
    borderRadius: "50px",
    boxShadow: "inset -8px -8px 16px #ffffff, inset 8px 8px 16px #e0e0e0", // lighter shadow for a whiter look
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
    width: "80px",
    height: "50px",
    top: "5px",
    left: checked ? "65px" : "5px",
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
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: checked ? "yellow" : "grey",
    boxShadow: checked
      ? "0 0 15px 4px yellow"
      : "0 0 10px 2px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s ease-in-out",
  };

  return (
    <div style={containerStyle as React.CSSProperties}>
      <input
        type="checkbox"
        id="toggle-switch"
        checked={checked}
        onChange={() => setChecked(!checked)}
        style={{ display: "none" }}
      />
      <label
        htmlFor="toggle-switch"
        style={switchStyle as React.CSSProperties}
        onMouseEnter={(e) => {
          const toggle = e.currentTarget.querySelector(".toggle") as HTMLElement | null;
          if (toggle) {
            toggle.style.boxShadow = "-4px -4px 12px #ffffff, 4px 4px 12px #9b9b9b";
          }
        }}
        onMouseLeave={(e) => {
          const toggle = e.currentTarget.querySelector(".toggle") as HTMLElement | null;
          if (toggle) {
            toggle.style.boxShadow = checked
              ? "-4px -4px 8px #ffffff, 4px 4px 8px #8a8a8a"
              : "-4px -4px 8px #ffffff, 4px 4px 8px #b0b0b0";
          }
        }}
      >
        <div className="toggle" style={toggleStyle as React.CSSProperties}>
          <div className="led" style={ledStyle as React.CSSProperties}></div>
        </div>
      </label>
    </div>
  );
}
