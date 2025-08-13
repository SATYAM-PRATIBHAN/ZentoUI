export const OnlineBadge = ({ children }: { children?: string }) => {
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
          backgroundColor: "#C6F6D5",
          color: "#38A169",
          borderRadius: "9px",
          padding: "6px 14px",
          fontSize: "16px",
          fontWeight: "400",
          fontFamily: "sans-serif",
          boxShadow: "0px 6px 20.4px -9px rgba(0, 0, 0, 0.25)",
        }}
      >
        <span
          style={{
            display: "inline-block",
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            backgroundColor: "#38A169",
            marginRight: "6px",
          }}
        />
        {children || "Online"}
      </div>
    </div>
  );
};
