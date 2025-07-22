import { Sparkles } from "lucide-react";
import { OutLinedButton } from "../../../../components";

export default function InteractButtons() {
  return (
    <div className="mb-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <OutLinedButton className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-white px-5 py-2 font-medium text-sm text-white transition-colors duration-200 hover:bg-white hover:text-black sm:rounded-xl sm:px-6 sm:py-2 sm:text-base lg:text-lg">
        <Sparkles className="h-4 w-4" /> Start Building Now
      </OutLinedButton>
    </div>
  );
}
