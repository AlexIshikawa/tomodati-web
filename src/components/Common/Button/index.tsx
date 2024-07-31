import { cn } from "@/lib/utils";
import React from "react";

const buttonVariants = {
  primary: "bg-primary text-white hover:bg-primary-hover skew",
};

export const Button = ({ children, variant, ...rest }: TButton) => {
  const base = "px-4 py-2 -skew-x-12 relative primary-button__effect";
  return (
    <button
      className={cn(base, buttonVariants[variant ?? "primary"])}
      {...rest}
    >
      {children}
    </button>
  );
};
