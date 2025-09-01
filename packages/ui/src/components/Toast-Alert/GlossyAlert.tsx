"use client";

import { useState, useEffect } from "react";

interface GlossyToastProps {
  description?: string;
  option1?: string;
  option2?: string;
}

export function GlossyToast(props: GlossyToastProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsOpen(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

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
        onClick={handleToggle}
        style={{
          borderRadius: "15px",
          border: "1px solid rgba(255,255,255,0.4)",
          background: "white",
          boxShadow: "3px 4px 15px rgba(165, 86, 251, 0.35)",
          width: "116px",
          height: "50px",
          color: "black",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "500",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        Show Toast
      </button>

      {/* Toast Component */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            zIndex: 20,
          }}
        >
          <div
            style={{
              width: "450px",
              position: "relative",
              background:
                "linear-gradient(to bottom right, rgba(96,165,250,0.3), rgba(59,130,246,0.3), rgba(37,99,235,0.3))",
              backdropFilter: "blur(16px)",
              padding: "1.5rem",
              borderRadius: "1rem",
              boxShadow:
                "0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)",
              border: "1px solid rgba(147,197,253,0.3)",
              color: "white",
            }}
          >
            <button
              onClick={handleClose}
              style={{
                position: "absolute",
                top: "0.5rem",
                right: "0.5rem",
                color: "rgba(255,255,255,0.7)",
                cursor: "pointer",
                transition: "color 0.2s ease",
                background: "none",
                border: "none",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "white")}
              onMouseOut={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.7)")
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>

            <div style={{ display: "flex", gap: "0.75rem" }}>
              <div style={{ flexShrink: 0 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ color: "rgb(147,197,253)" }}
                >
                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
                  <path d="M20 3v4"></path>
                  <path d="M22 5h-4"></path>
                  <path d="M4 17v2"></path>
                  <path d="M5 18h3"></path>
                </svg>
              </div>
              <div style={{ minHeight: "80px" }}>
                <p
                  style={{ fontSize: "1rem", fontWeight: 300, color: "white" }}
                >
                  {props.description ||
                    `Looks like you don't have that any meetings today. Shall
                  I play some Hans Zimmer essentials to help you get into your
                  Flow State?`}
                </p>
              </div>
            </div>

            <div
              style={{
                marginTop: "1.5rem",
                display: "flex",
                gap: "0.75rem",
              }}
            >
              <button
                style={{
                  flex: 1,
                  padding: "0.625rem 0",
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: "0.75rem",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  transition: "background 0.2s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.background = "rgba(255,255,255,0.2)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.background = "rgba(255,255,255,0.1)")
                }
              >
                {props.option1 || "Yes"}
              </button>
              <button
                style={{
                  flex: 1,
                  padding: "0.625rem 0",
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: "0.75rem",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  transition: "background 0.2s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.background = "rgba(255,255,255,0.2)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.background = "rgba(255,255,255,0.1)")
                }
              >
                {props.option2 || "No"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
