import { HeroCTA, HeroImageMockUp, HeroText, Navbar } from "./components";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* <div className="absolute inset-0 w-full h-full">
          <BackGround />
        </div> */}

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
