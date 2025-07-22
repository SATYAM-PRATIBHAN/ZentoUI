import BackGround from "../../../assets/svgs/Background";
import { 
  HeroCTA,
  HeroImageMockUp, 
  HeroText, 
  Navbar 
} from "./components";


export default function Home() {
    return (
      <div className="min-h-screen relative overflow-hidden">
        {/* <div className="absolute inset-0 w-full h-full">
          <BackGround />
        </div> */}

        <div className="relative z-10">
          <Navbar />
  
          {/* Hero Section */}
          <main className="px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
            <div className="max-w-7xl mx-auto text-center">
              <HeroText />
              <HeroCTA />
              <HeroImageMockUp />
            </div>
          </main>
        </div>
      </div>
    )
  }
  