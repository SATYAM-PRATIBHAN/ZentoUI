import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, X } from "lucide-react";
import { useEffect, useState } from "react";

export function ToastDemo() {
  const [showToast, setShowToast] = useState(false);

  const handleShowToast = () => {
    setShowToast(true);
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <div>
      <button
        onClick={handleShowToast}
        style={{
          background: "#333",
          color: "#fff",
          border: "none",
          padding: "10px 16px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Show Toast
      </button>

      {/* Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            initial={{ opacity: 0, y: 50 }}
            style={{
              position: "fixed",
              bottom: "30px",
              right: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center", // <-- changed from "flex-center" to "center"
              gap: "12px",
              padding: "18px 28px 18px 20px",
              borderRadius: "14px",
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
              color: "#eaeaea",
              fontWeight: 500,
              fontSize: "15px",
              letterSpacing: "0.3px",
              zIndex: 1000,
              minWidth: "320px",
              maxWidth: "360px",
            }}
            transition={{ duration: 0.3 }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <CheckCircle color="#34d399" size={22} />
            </span>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: "16px",
                  marginBottom: "2px",
                  color: "#34d399",
                }}
              >
                Payment Successful!
              </div>
              <div
                style={{ fontWeight: 400, fontSize: "10px", color: "#34d399" }}
              >
                Your payment has been processed and your order is on its way.
              </div>
            </div>
            <button
              aria-label="Close"
              onClick={handleCloseToast}
              style={{
                border: "none",
                cursor: "pointer",
                padding: 0,
                marginLeft: "8px",
                lineHeight: 0,
                display: "flex",
                alignItems: "center",
              }}
            >
              <X color="black" size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
