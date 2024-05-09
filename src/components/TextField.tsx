import { useEffect, useState } from "react";

import { cn } from "../lib/utils";

type TextFieldProps = {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  handleInputChange?: React.ChangeEventHandler<HTMLInputElement>;
  defaultValue?: string;
  className?: string;
  mode?: "filled" | "outlined";
};

export function Textfield({
  name,
  label,
  placeholder = "",
  handleInputChange,
  className,
  type = "text",
  defaultValue = "",
}: TextFieldProps) {
  return (
    <div
      className={cn(
        "relative flex flex-grow flex-col",
        className,
      )}
    >
      <label htmlFor="first_name" className="block mb-2 ml-2 text-sm font-medium text-white">{label}</label>
      <input
        className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-2xl shadow-md shadow-black focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        id={label + placeholder}
        type={type}
        onChange={handleInputChange}
        placeholder={placeholder}
        defaultValue={defaultValue}
        name={name}
      />
    </div>
  );
}