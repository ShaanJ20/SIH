import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils" // Make sure tsconfig paths are set

const inputVariants = cva(
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-input",
        destructive: "border-destructive focus-visible:ring-destructive",
        success: "border-green-500 focus-visible:ring-green-500",
      },
      size: {
        default: "h-10",
        sm: "h-8 px-2 text-xs",
        lg: "h-12 px-4 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">, // ⚡ fix conflict
    VariantProps<typeof inputVariants> {
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  error?: string
  success?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, leftIcon, rightIcon, error, success, ...props }, ref) => {
    const hasError = Boolean(error)
    const hasSuccess = Boolean(success) && !hasError
    const effectiveVariant = hasError ? "destructive" : hasSuccess ? "success" : variant

    return (
      <div className="space-y-1">
        <div className="relative">
          {leftIcon && <div className="absolute left-3 top-1/2 -translate-y-1/2">{leftIcon}</div>}
          <input
            ref={ref}
            className={cn(inputVariants({ variant: effectiveVariant, size, className }), leftIcon && "pl-10", rightIcon && "pr-10")}
            {...props}
          />
          {rightIcon && <div className="absolute right-3 top-1/2 -translate-y-1/2">{rightIcon}</div>}
        </div>
        {error && <p className="text-xs text-destructive">{error}</p>}
        {success && !error && <p className="text-xs text-green-600">{success}</p>}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input, inputVariants }
