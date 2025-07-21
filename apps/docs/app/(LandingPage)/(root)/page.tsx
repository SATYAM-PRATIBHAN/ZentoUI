"use client"
import { 
  Hero, 
  Footer, 
  CTA, 
  ComponentShowcase 
} from "../components";

export default function Home() {
  return (
    <main>
      <Hero /> 
      <ComponentShowcase />
      <CTA />
      <Footer />
    </main>
  );
}
