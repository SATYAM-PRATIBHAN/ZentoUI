"use client"

import { Button } from "@repo/ui/button";

export default function NormalButton() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Button
        appName="test file"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        Hello world
      </Button>
    </div>
  );
}
