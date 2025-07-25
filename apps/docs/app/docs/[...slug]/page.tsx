"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { getDocBySlug } from "../../lib/get-doc-content";

type PageProps = {
  params: Promise<{ slug: string[] }>; // `params` is now a Promise
};

export default function DocPage({ params }: PageProps) {
  const { slug } = use(params); // ✅ unwrap the Promise using `use()`

  const doc = getDocBySlug(slug);

  if (!doc) return notFound();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{doc.title}</h1>
      <p className="text-muted-foreground mb-8">{doc.description}</p>
      <div>{doc.content}</div>
    </div>
  );
}
