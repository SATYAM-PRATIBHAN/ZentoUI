import { NeumorphismButton } from "@satyampratibhan/zento-ui";
import type React from "react";

export default function NeumorphButton({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center px-4">
      <NeumorphismButton>{children || "Button"}</NeumorphismButton>
    </div>
  );
}
