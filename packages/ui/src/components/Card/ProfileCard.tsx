"use client";

import { useEffect, useState } from "react";

export function ContactCard() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        width: isMobile ? "90%" : "457px",
        padding: "8px",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        borderRadius: "24px",
        background: "#FFF",
        boxShadow: "0px 12px 40px -4px rgba(0, 0, 0, 0.20)",
        margin: "0 auto",
        zIndex: 0,
      }}
    >
      {/* Banner */}
      <div style={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            height: isMobile ? "150px" : "199px",
            borderRadius: "16px",
            background: "radial-gradient(circle at center, #FFA07A, #BA86FC)",
            backgroundImage: "url(/shoes.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            zIndex: 1,
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: isMobile ? "-30px" : "-40px",
          }}
        >
          <div
            style={{
              zIndex: 2,
              width: isMobile ? "60px" : "80px",
              height: isMobile ? "60px" : "80px",
              borderRadius: "1000px",
              border: "3.5px solid #FFF",
              background: "url(/profilepicture.webp) center/cover no-repeat",
              boxShadow: "6px 6px 15px 0px rgba(120, 132, 149, 0.15)",
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "4px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            color: "#161619",
            fontSize: isMobile ? "13px" : "14px",
            fontWeight: 500,
            margin: 0,
          }}
        >
          ZentoUI Creations
        </h2>
        <p
          style={{
            fontSize: isMobile ? "11px" : "12px",
            fontWeight: 500,
            color: "#A0A9B4",
            margin: 0,
          }}
        >
          UI Designer at <span style={{ color: "#161619" }}>@ZentoUI</span>
        </p>
      </div>

      {/* Button */}
      <button
        style={{
          cursor: "pointer",
          display: "flex",
          padding: isMobile ? "8px 12px" : "10px 16px",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          borderRadius: "8px",
          border: "1px solid #EAECF0",
          boxShadow: "6px 6px 10px 0px rgba(120, 132, 149, 0.05)",
          color: "#656D76",
          fontSize: "10px",
          fontWeight: 500,
          textTransform: "uppercase",
          background: "#FFF",
        }}
      >
        Contact Me
      </button>
    </div>
  );
}
