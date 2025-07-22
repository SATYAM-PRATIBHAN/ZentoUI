import { CreditCard, LayoutTemplate } from "lucide-react";

export default function BottomText() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-purple-200/70 text-sm sm:flex-row">
      <div className="flex items-center gap-1">
        <CreditCard className="h-4 w-4" />
        <span>All Free Components</span>
      </div>
      <div className="hidden h-1 w-1 rounded-full bg-purple-200/50 sm:block" />
      <div className="flex items-center gap-1">
        <LayoutTemplate className="h-4 w-4" />
        <span>Open-source. Customizable.</span>
      </div>
    </div>
  );
}
