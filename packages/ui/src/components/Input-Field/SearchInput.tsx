interface SearchInputProps {
  placeholder?: string;
  type?: string;
}

export const SearchInput = (props: SearchInputProps) => {
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
          display: "flex",
          alignItems: "center",
          backgroundColor: "#EAEAEA",
          borderRadius: "clamp(12px, 4vw, 18px)",
          padding: "clamp(8px, 2vw, 12px) clamp(6px, 2vw, 10px)",
          width: "fit-content",
          boxShadow: "0px 12px 40px -4px rgba(0, 0, 0, 0.20)",
        }}
      >
        <input
          placeholder={props.placeholder || "Search"}
          style={{
            border: "none",
            outline: "none",
            backgroundColor: "transparent",
            color: "#000",
            fontSize: "clamp(14px, 2.5vw, 18px)",
            fontWeight: "400",
            fontFamily: "sans-serif",
            marginRight: "2px",
            padding: 0,
            width: "clamp(80px, 20vw, 120px)",
          }}
          type={props.type || "text"}
        />
        <div
          style={{
            width: "clamp(28px, 8vw, 36px)",
            height: "clamp(28px, 8vw, 36px)",
            borderRadius: "50%",
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            cursor: "pointer",
            marginLeft: "clamp(6px, 2vw, 10px)",
          }}
        >
          <svg
            fill="none"
            height="clamp(14px, 4vw, 18px)"
            width="clamp(14px, 4vw, 18px)"
            stroke="#888"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
      </div>
    </div>
  );
};
