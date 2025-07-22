import { RoughNotation } from "react-rough-notation";

const HeroText = () => (
  <div className="w-full px-4 text-center sm:px-6 lg:px-8">
    <h1 className="mb-4 font-extrabold text-3xl text-black leading-tight tracking-tight sm:text-5xl lg:text-7xl lg:leading-[1.15] xl:text-[88px]">
      Design{" "}
      <span className="inline-flex items-center">
        <img
          src="/shape3.png"
          className="inline-block w-6 h-6 sm:w-10 sm:h-10 lg:w-18 lg:h-18 mx-1"
          alt=""
        />
      </span>{" "}
      with{" "}
      <RoughNotation
        animationDelay={500}
        color="#fcd34d"
        show={true}
        type="highlight"
      >
        Speed
      </RoughNotation>
      <br />
      Code{" "}
      <span className="inline-flex items-center">
        <img
          src="/shape4.png"
          className="inline-block w-6 h-6 sm:w-10 sm:h-10 lg:w-18 lg:h-18 mx-1"
          alt=""
        />
      </span>{" "}
      with Confidence{" "}
      <span className="inline-flex items-center">
        <img
          src="/shape5.png"
          className="inline-block w-6 h-6 sm:w-10 sm:h-10 lg:w-18 lg:h-18 mx-1"
          alt=""
        />
      </span>
    </h1>

    <p className="mx-auto mt-4 mb-6 max-w-2xl text-gray-600 text-sm sm:text-lg md:mb-4 lg:mb-0 lg:text-xl">
      A modern, beautifully designed component library built for shipping clean
      and responsive UIs — without reinventing the wheel.
    </p>
  </div>
);

export default HeroText;
