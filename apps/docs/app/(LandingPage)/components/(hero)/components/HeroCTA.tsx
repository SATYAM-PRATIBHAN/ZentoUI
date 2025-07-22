import ArrowLeft from "../../../../assets/svgs/LeftArrow";
import ArrowRight from "../../../../assets/svgs/RightArrow";
import { AnimatedButton, OutLinedButton } from "../../../../components";

const HeroCTA = () => (
  <div className="mb-16 flex flex-col items-center justify-center gap-6 sm:flex-row">
    <div className="hidden lg:block">
      <ArrowLeft />
    </div>

    <div className="flex items-center justify-center gap-2 sm:gap-[12px]">
      <AnimatedButton titleOne="Explore Components" titleTwo="Get Started" />
      <OutLinedButton>View Docs</OutLinedButton>
    </div>

    <div className="hidden lg:block">
      <ArrowRight />
    </div>
  </div>
);
export default HeroCTA;
