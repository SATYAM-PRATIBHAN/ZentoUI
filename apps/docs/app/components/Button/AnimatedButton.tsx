import { RotatingButton } from "@repo/ui";

interface ButtonProps {
  titleOne?: string;
  titleTwo?: string;
}

export default function AnimatedButton({ titleOne, titleTwo }: ButtonProps) {
  return (
    <div className="flex justify-center items-center px-4">
      <RotatingButton>
        <a
          className="group relative flex items-center cursor-pointer gap-2 bg-black text-white py-2.5 px-5 sm:py-3 sm:px-6 rounded-lg sm:rounded-xl shadow-lg transition-all duration-300 ease-in-out"
        >
          <span className="relative text-sm sm:text-base lg:text-lg font-medium overflow-hidden leading-tight">
            <span className="block transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
              {titleOne || "Book a Call"}
            </span>
            <span className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
              {titleTwo || "Contact us"}
            </span>
          </span>
        </a>
      </RotatingButton>
    </div>
  );
}
