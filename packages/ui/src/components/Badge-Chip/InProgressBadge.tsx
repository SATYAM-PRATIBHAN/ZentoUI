export const InProgressBadge = ({ children }: { children?: string }) => {
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
          backgroundColor: "#ffffff",
          color: "#118AED",
          borderRadius: "16px",
          padding: "10px 16px",
          fontSize: "16px",
          fontWeight: "400",
          fontFamily: "sans-serif",
          boxShadow: "0px 6px 20.4px -9px rgba(0, 0, 0, 0.25)",
        }}
      >
        <span
          style={{
            display: "inline-block",
            width: "16px",
            height: "16px",
            border: "2px dashed #3182CE",
            borderRadius: "50%",
            marginRight: "8px",
          }}
        />
        {children || "In progress"}
      </div>
    </div>
  );
};
