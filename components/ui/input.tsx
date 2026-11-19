import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full rounded-xl border border-line bg-cream px-4 text-[0.9375rem] text-ink shadow-sm transition-[border-color,box-shadow] placeholder:text-ink/40 focus-visible:border-sage focus-visible:shadow-[0_0_0_3px_rgba(89,105,93,0.16)] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-danger",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
Input.displayName = "Input";

export { Input };
