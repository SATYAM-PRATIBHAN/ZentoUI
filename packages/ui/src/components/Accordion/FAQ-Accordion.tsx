import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { cn } from "../../lib/utils"; // Use your utility
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
    <div className="mx-auto max-w-2xl">
      {items.map((item, index) => (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          key={item.id}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <motion.div
            className={cn(
              "glass-card mb-4 w-full rounded-2xl border px-6 py-6 shadow-lg transition-all duration-300",
              activeId === item.id
                ? "border-gray-200 bg-white/10 dark:bg-black/10"
                : "border-white"
            )}
            layout
            onClick={() => handleCardClick(item.id)}
            transition={{ layout: { duration: 0.4, type: "spring" } }}
          >
            <div className="flex cursor-pointer items-center justify-between">
              <h3 className="pr-4 font-medium text-gray-200 text-lg">
                {item.question}
              </h3>
              <motion.div
                animate={{ rotate: activeId === item.id ? 180 : 0 }}
                className="flex h-6 w-6 items-center justify-center rounded-full bg-premium-gold/20 text-premium-gold"
                transition={{ duration: 0.3 }}
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
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-4 overflow-hidden text-premium-muted text-sm"
                  exit={{ opacity: 0, height: 0 }}
                  initial={{ opacity: 0, height: 0 }}
                  key="answer"
                  transition={{ duration: 0.4 }}
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
