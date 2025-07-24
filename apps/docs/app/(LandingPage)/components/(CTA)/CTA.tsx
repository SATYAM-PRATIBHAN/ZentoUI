import { BottomText, Heading, InteractButtons } from "./components";

export default function CTA() {
  return (
    <section className="relative mx-6 overflow-hidden rounded-3xl bg-[url('/noisebackground.webp')] bg-center bg-cover px-6 py-6 text-center md:mx-12 lg:mx-28">
      <div className="pointer-events-none absolute inset-0 z-0 bg-black/20" />
      <div className="relative px-8 py-16 text-center">
        <Heading />
        <InteractButtons />
        <BottomText />
      </div>
    </section>
  );
}
