"use client";

import { Button } from "@repo/ui";
import { cn } from "../../lib/utils";

interface ButtonProp {
  className?: string;
  children?: React.ReactNode;
}

export default function OutLinedButton({ children, className }: ButtonProp) {
  return (
    <div className="flex items-center justify-center px-4">
      <Button
        className={cn(
          "cursor-pointer rounded-lg border-2 border-black px-5 py-2 font-medium text-black text-sm duration-200 hover:bg-black hover:text-white sm:rounded-xl sm:px-6 sm:py-2 sm:text-base lg:text-lg",
          className,
        )}
      >
        {children || "Book a Call"}
      </Button>
    </div>
  );
}
