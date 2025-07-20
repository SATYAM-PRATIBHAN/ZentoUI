import { RoughNotation } from "react-rough-notation";

const HeroText = () => (
  <div className="w-full text-center px-4 sm:px-6 lg:px-8">
    <h1 className="text-3xl sm:text-5xl lg:text-7xl xl:text-[88px] font-extrabold text-black leading-tight lg:leading-[1.15] tracking-tight mb-4">
      Design with <RoughNotation animationDelay={500} type="highlight" color="#fcd34d" show={true}>Speed</RoughNotation>
      <br />
      Code with{" "}
      <span
        className="bg-clip-text text-transparent"
        style={{
          backgroundImage: "linear-gradient(89deg, #8ED3F1 49.69%, #FFF 85.8%)",
        }}
      >
        Confidence
      </span>
    </h1>

    <p className="mt-4 text-sm sm:text-lg lg:text-xl text-gray-600 max-w-2xl mb-6 md:mb-4 lg:mb-0 mx-auto">
      A modern, beautifully designed component library built for shipping clean and responsive UIs — without reinventing the wheel.
    </p>
  </div>
);

export default HeroText;
  