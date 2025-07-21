"use client";

import { Button } from "@repo/ui";

interface ButtonProp {
  className?: string;
  children?: React.ReactNode;
}

export default function OutLinedButton({ children, className }: ButtonProp) {
  return (
    <div className="flex justify-center items-center px-4">
      <Button
        className={className || "border-2 border-black text-black py-2 px-5 sm:py-2 sm:px-6 rounded-lg sm:rounded-xl text-sm sm:text-base lg:text-lg font-medium duration-200 cursor-pointer hover:bg-black hover:text-white"}
      >
        {children || "Book a Call"}
      </Button>
    </div>
  );
}
