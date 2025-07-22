import { RotatingButton } from "@repo/ui";

interface ButtonProps {
  titleOne?: string;
  titleTwo?: string;
}

export default function AnimatedButton({ titleOne, titleTwo }: ButtonProps) {
  return (
    <div className="flex items-center justify-center px-4">
      <RotatingButton>
        <a className="group relative flex cursor-pointer items-center gap-2 rounded-lg bg-black px-5 py-2.5 text-white shadow-lg transition-all duration-300 ease-in-out sm:rounded-xl sm:px-6 sm:py-3">
          <span className="relative overflow-hidden font-medium text-sm leading-tight sm:text-base lg:text-lg">
            <span className="group-hover:-translate-y-full block transition-transform duration-300 ease-in-out">
              {titleOne || "Book a Call"}
            </span>
            <span className="absolute inset-0 translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
              {titleTwo || "Contact us"}
            </span>
          </span>
        </a>
      </RotatingButton>
    </div>
  );
}
