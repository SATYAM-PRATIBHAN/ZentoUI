import ComponentShowcase from "./ComponentShowcase";

const HeroImageMockUp = () => (
  <div className="mx-auto max-w-6xl py-10" style={{ minHeight: "800px" }}>
    <div className="bg-[url('/Noise.png')] rounded-3xl border border-gray-200 bg-white/80 p-4 shadow-3xl backdrop-blur-sm sm:p-8">
      <ComponentShowcase />
    </div>
  </div>
);

export default HeroImageMockUp;
