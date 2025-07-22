import Navbar from "../Navbar";
import { HeroCTA, HeroImageMockUp, HeroText } from "./components";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* <div className="absolute inset-0 w-full h-full">
          <BackGround />
        </div> */}
      <img
        src="/shape1.png"
        alt="Left shape"
        className="absolute top-[15%] left-0 w-20 sm:w-32 md:w-40 lg:w-[250px] h-auto -translate-x-1/3 z-0 pointer-events-none"
      />

      <img
        src="/shape2.png"
        alt="Right shape"
        className="absolute top-[25%] right-0 w-20 sm:w-32 md:w-40 lg:w-[250px] h-auto translate-x-1/4 z-0 pointer-events-none"
      />

      <div className="relative z-10">
        <Navbar />

        {/* Hero Section */}
        <main className="px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <HeroText />
            <HeroCTA />
            <HeroImageMockUp />
          </div>
        </main>
      </div>
    </div>
  );
}
