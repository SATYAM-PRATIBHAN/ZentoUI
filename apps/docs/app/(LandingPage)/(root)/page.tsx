"use client";
import { CTA, Footer, Hero } from "../components";

export default function Home() {
  return (
    <main style={{ position: "relative", overflow: "hidden" }}>
      <div style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
