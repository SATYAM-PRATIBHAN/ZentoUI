import { GlassyButton } from "@satyampratibhan/zento-ui";
import React from "react";

export default function GlassButton({ children }: {children: React.ReactNode}) {
  return (
    <div className="flex items-center justify-center">
      <GlassyButton children={children}/>
    </div>
  );
}
