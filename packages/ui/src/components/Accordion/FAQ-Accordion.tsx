
import { useState } from "react";
import { cn } from "../../lib/utils"; // Use your utility
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "../../../styles.css";

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
    <div className="max-w-2xl mx-auto">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <motion.div
            layout
            transition={{ layout: { duration: 0.4, type: "spring" } }}
            className={cn(
              "glass-card w-full mb-4 px-6 py-6 rounded-2xl border transition-all duration-300 shadow-lg",
              activeId === item.id
                ? "border-gray-200 bg-white/10 dark:bg-black/10"
                : "border-white"
            )}
            onClick={() => handleCardClick(item.id)}
          >
            <div className="flex justify-between items-center cursor-pointer">
              <h3 className="text-gray-200 text-lg font-medium pr-4">{item.question}</h3>
              <motion.div
                animate={{ rotate: activeId === item.id ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-center w-6 h-6 rounded-full bg-premium-gold/20 text-premium-gold"
              >
                {activeId === item.id ? <Minus size={16} /> : <Plus size={16} />}
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
                  className="overflow-hidden mt-4 text-premium-muted text-sm"
                >
                  <p className="text-gray-600">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};
