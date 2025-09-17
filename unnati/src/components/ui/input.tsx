// src/components/ui/Input.tsx
import React from "react";
import { cn } from "../../lib/helpers"; // relative import guaranteed

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
