import { useEffect, useState } from "react";

import { cn } from "../lib/utils";

type ButtonProps = {
  name: string;
  label?: string;
  className?: string;
  size?: string;
  color?: string;
};

export function Button({
  name,
  label = "",
  className,
  size = "",
  color = "",
}: ButtonProps) {
  return (
    <div
      className={cn("relative flex flex-grow flex-col items-center", className)}
    >
      <button
        type="button"
        name={name}
        className={cn(
          "bg-[#B5F1F9] font-medium rounded-2xl text-sm px-5 py-2.5 text-center me-2 mb-2 shadow shadow-black",
          size !== "" && size,
          color !== "" && color
        )}
      >
        {label}
      </button>
    </div>
  );
}
