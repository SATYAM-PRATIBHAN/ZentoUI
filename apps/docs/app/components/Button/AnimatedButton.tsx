import { RotatingButton } from "zento-ui";

interface ButtonProps {
  titleOne?: string;
  titleTwo?: string;
}

export default function AnimatedButton({ titleOne, titleTwo }: ButtonProps) {
  return (
    <div className="flex items-center justify-center px-4">
      <RotatingButton
        data={[titleOne || "Button", titleTwo || "Button"]}
      ></RotatingButton>
    </div>
  );
}
