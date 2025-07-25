"use client";

import { CTA, FeatureSection, Hero } from "../components";

export default function Home() {
  return (
    <main style={{ position: "relative", overflow: "hidden" }}>
      <div style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <FeatureSection />
        <CTA />
      </div>
    </main>
  );
}
