import ArrowLeft from "../../../../assets/svgs/LeftArrow";
import ArrowRight from "../../../../assets/svgs/RightArrow";
import { AnimatedButton, OutLinedButton } from "../../../../components";

const HeroCTA = () => (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
        <div className="hidden lg:block">
            <ArrowLeft />
        </div>

        <div className="flex gap-2 sm:gap-[12px] justify-center items-center">
            <AnimatedButton titleOne="Explore Components" titleTwo="Get Started"/>
            <OutLinedButton>View Docs</OutLinedButton>
        </div>

        <div className="hidden lg:block">
            <ArrowRight />
        </div>
    </div>
);
export default HeroCTA;