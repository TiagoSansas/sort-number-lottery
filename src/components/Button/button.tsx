import { PropsWithChildren } from "react";

import { tv } from "tailwind-variants";

interface ButtonProps extends PropsWithChildren {
  colorSelect: "add" | "sort" | "remove";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

const button = tv({
  base: "rounded-md bg-gray-300 p-2 font-bold font-medium",
  variants: {
    color: {
      add: "bg-green-400 text-white",
      sort: "bg-orange-400 text-white",
      remove: "bg-red-400 text-white",
    },
    size: {
      sm: "py-1 px-3 text-xs",
      md: "py-1.5 px-4 text-sm",
      lg: "py-2 px-6 text-2xl",
    },
  },
});

export function Button({
  children,
  colorSelect,
  onClick,
  size = "sm",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={button({ color: colorSelect, size: size })}
    >
      {children}
    </button>
  );
}
