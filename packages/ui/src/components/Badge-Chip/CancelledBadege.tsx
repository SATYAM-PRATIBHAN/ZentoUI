export const CancelledBadge = ({ children }: { children?: string }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          backgroundColor: "#FEE2E2",
          color: "#DC2626",
          borderRadius: "9px",
          padding: "6px 14px",
          fontSize: "16px",
          fontWeight: "400",
          boxShadow: "0px 6px 20.4px -9px rgba(0, 0, 0, 0.25)",
        }}
      >
        <span
          style={{
            width: "0.4rem",
            height: "0.4rem",
            borderRadius: "9999px",
            backgroundColor: "#DC2626",
            marginRight: "0.5rem",
          }}
        />
        {children || "Cancelled"}
      </div>
    </div>
  );
};
