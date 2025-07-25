"use client";

import { useState, ReactNode } from "react";
import { cn } from "../../../lib/utils";
import { CodeBlock } from "./CodeBlock";

type PreviewSwitcherProps = {
  preview: ReactNode;
  code: string;
  language?: string;
};

export function PreviewSwitcher({
  preview,
  code,
  language,
}: PreviewSwitcherProps) {
  const [mode, setMode] = useState<"preview" | "code">("preview");

  return (
    <div className="space-y-6">
      {/* Toggle Switch */}
      <div className="flex gap-2 border border-gray-300 rounded-lg p-1 w-fit bg-gray-100 text-sm font-medium">
        <button
          onClick={() => setMode("preview")}
          className={cn(
            "px-3 py-1 cursor-pointer rounded-md transition-all",
            mode === "preview"
              ? "bg-white text-black"
              : "text-gray-500  hover:text-black ",
          )}
        >
          Preview
        </button>
        <button
          onClick={() => setMode("code")}
          className={cn(
            "px-3 py-1 cursor-pointer rounded-md transition-all",
            mode === "code"
              ? "bg-white text-black"
              : "text-gray-500 hover:text-black ",
          )}
        >
          Code
        </button>
      </div>

      {/* Rendered content */}
      <div>
        {mode === "preview" ? (
          preview
        ) : (
          <CodeBlock code={code} language={language} />
        )}
      </div>
    </div>
  );
}
