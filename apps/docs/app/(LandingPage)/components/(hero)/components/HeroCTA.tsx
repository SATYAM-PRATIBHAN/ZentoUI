import ArrowLeft from "../../../../assets/LeftArrow";
import ArrowRight from "../../../../assets/RightArrow";
import { AnimatedButton, OutLinedButton } from "../../../../components";

const HeroCTA = () => (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
        <div className="hidden lg:block">
            <ArrowLeft />
        </div>

        <div className="flex gap-2 sm:gap-[12px] justify-center items-center">
            <AnimatedButton titleOne="Explore Components" titleTwo="Get Started"/>
            <OutLinedButton data="View Docs" />
        </div>

        <div className="hidden lg:block">
            <ArrowRight />
        </div>
    </div>
);
export default HeroCTA;