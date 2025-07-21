
import { NeumorphismButton } from "@repo/ui";
import React from "react";

export default function NeumorphButton({ children }: {children?: React.ReactNode}) {
    return (
        <div className="flex justify-center items-center px-4">
            <NeumorphismButton>
                {children || "Neumorphism Button"}
            </NeumorphismButton>
        </div>
        
    )
}