"use client";

import { Button } from "@repo/ui";

interface ButtonProp {
  data?: string;
}

export default function OutLinedButton({ data }: ButtonProp) {
  return (
    <div className="flex justify-center items-center px-4">
      <Button
        className="border-2 cursor-pointer border-black text-black py-2 px-5 sm:py-2 sm:px-6 rounded-lg sm:rounded-xl text-sm sm:text-base lg:text-lg font-medium transition-colors duration-200 hover:bg-black hover:text-white"
      >
        {data || "Book a Call"}
      </Button>
    </div>
  );
}
