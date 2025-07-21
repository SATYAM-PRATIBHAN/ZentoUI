import { CreditCard, LayoutTemplate } from "lucide-react";

export default function BottomText() {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-purple-200/70">
          <div className="flex items-center gap-1">
            <CreditCard className="w-4 h-4" />
            <span>All Free Components</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-purple-200/50 rounded-full"></div>
          <div className="flex items-center gap-1">
            <LayoutTemplate className="w-4 h-4" />
            <span>Open-source. Customizable.</span>
          </div>
        </div>
    )
}