import { BottomText, Heading, InteractButtons } from "./components";

export default function CTA() {
  return (
    <section className="relative mx-8 overflow-hidden rounded-3xl bg-[url('/CTABackground.png')] bg-center bg-cover px-6 py-24 text-center md:mx-12 lg:mx-24">
      <div className="pointer-events-none absolute inset-0 z-0 bg-black/60" />
      <div className="relative px-8 py-16 text-center">
        <Heading />
        <InteractButtons />
        <BottomText />
      </div>
    </section>
  );
}
