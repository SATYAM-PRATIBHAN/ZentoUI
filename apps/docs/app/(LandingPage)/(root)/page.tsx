"use client"
import { 
  Hero, 
  Footer, 
  Features, 
  CTA, 
  ComponentShowcase 
} from "../components";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <ComponentShowcase />
      <CTA />
      <Footer />
    </main>
  );
}
