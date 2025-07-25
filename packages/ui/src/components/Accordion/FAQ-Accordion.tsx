"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const FAQAccordion = ({ items }: { items: FAQItem[] }) => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div style={{ maxWidth: "640px", margin: "0 auto" }}>
      {items.map((item) => (
        <motion.div key={item.id}>
          <motion.div
            layout
            onClick={() => handleCardClick(item.id)}
            transition={{ layout: { duration: 0.4, type: "spring" } }}
            style={{
              width: "100%",
              borderRadius: "16px",
              border: "1px solid",
              borderColor:
                activeId === item.id ? "rgba(200, 200, 200, 0.4)" : "#fff",
              padding: "24px",
              marginBottom: "16px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
              background:
                activeId === item.id
                  ? "rgba(255, 255, 255, 0.05)"
                  : "rgba(255, 255, 255, 0.02)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              transition: "all 0.3s ease-in-out",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 500,
                  paddingRight: "16px",
                  color: "white",
                }}
              >
                {item.question}
              </h3>
              <motion.div
                animate={{ rotate: activeId === item.id ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  height: "24px",
                  width: "24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "9999px",
                  backgroundColor: "white",
                  color: "black",
                }}
              >
                {activeId === item.id ? (
                  <Minus size={16} />
                ) : (
                  <Plus size={16} />
                )}
              </motion.div>
            </div>

            <AnimatePresence initial={false}>
              {activeId === item.id && (
                <motion.div
                  key="answer"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    textAlign: "left",
                    marginTop: "16px",
                    overflow: "hidden",
                    fontSize: "14px",
                    color: "#4b5563",
                  }}
                >
                  <p>{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};
