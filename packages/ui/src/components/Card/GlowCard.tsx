export function GlowCard() {
  return (
    <div
      style={{
        width: "400px",
        height: "400px",
        borderRadius: "80px",
        background: "linear-gradient(180deg, #0A0909 0%, #09101F 100%)",
        boxShadow:
          "0px 6px 6px -2px rgba(35, 101, 255, 0.15) inset, 0px -20px 20px -6px rgba(255, 255, 255, 0.60) inset, 0px -40px 30px -8px rgba(102, 148, 255, 0.50) inset, 0px -80px 60px -30px #144CCD inset",
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      <div>
        <h2 style={{ fontSize: "24px", marginBottom: "8px" }}>Premium Access</h2>
        <p style={{ fontSize: "14px", color: "#ccc" }}>
          Unlock advanced components and design systems with full access.
        </p>
      </div>

      <button
        style={{
          background: "#2365FF",
          border: "none",
          borderRadius: "16px",
          padding: "12px 20px",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
          fontSize: "14px",
          boxShadow: "0 4px 12px rgba(35, 101, 255, 0.4)",
          transition: "all 0.3s ease",
        }}
      >
        Get Started
      </button>
    </div>
  );
}
