import { MouseEventHandler, ReactNode } from "react";

import { cn } from "../lib/utils";

type ButtonProps = {
  name?: string;
  label?: string | ReactNode;
  className?: string;
  size?: string;
  type?: "button" | "submit" | "reset" | undefined;
  color?: string;
  rounded?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>
};

export function Button({
  name = "",
  label = "",
  className,
  size = "",
  color = "",
  rounded = "rounded-2xl",
  type = "button",
  onClick = () => {}
}: ButtonProps) {
  return (
    <div
      className={cn("relative flex flex-grow flex-col items-center", className)}
    >
      <button
        name={name}
        type={type}
        onClick={onClick}
        className={cn(
          "bg-[#B5F1F9] font-medium text-sm px-5 py-2.5 text-center me-2 mb-2 shadow shadow-black",
          size !== "" && size,
          color !== "" && color,
          rounded != "" && rounded,
        )}
      >
        {label}
      </button>
    </div>
  );
}
