"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { getDocBySlug } from "../../lib/get-doc-content";
import { motion } from "framer-motion";

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

export default function DocPage({ params }: PageProps) {
  const { slug } = use(params);

  const doc = getDocBySlug(slug);

  if (!doc) return notFound();

  return (
    <motion.div
      className="max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.h1
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        {doc.title}
      </motion.h1>

      <motion.p
        className="text-muted-foreground mb-8"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        {doc.description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
      >
        {doc.content}
      </motion.div>
    </motion.div>
  );
}
