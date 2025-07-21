import { Sparkles } from "lucide-react";
import { OutLinedButton } from "../../../../components";

export default function InteractButtons() {
    return (
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <OutLinedButton className="border-2 flex justify-center items-center gap-2  border-white cursor-pointer text-white py-2 px-5 sm:py-2 sm:px-6 rounded-lg sm:rounded-xl text-sm sm:text-base lg:text-lg font-medium transition-colors duration-200 hover:bg-white hover:text-black">
                <Sparkles className="w-4 h-4"/> Start Building Now
            </OutLinedButton>
        </div>
    )
}