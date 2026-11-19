import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => (
  <textarea
    className={cn(
      "flex min-h-32 w-full resize-y rounded-xl border border-line bg-cream px-4 py-3 text-[0.9375rem] leading-relaxed text-ink shadow-sm transition-[border-color,box-shadow] placeholder:text-ink/40 focus-visible:border-sage focus-visible:shadow-[0_0_0_3px_rgba(89,105,93,0.16)] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-danger",
      className,
    )}
    ref={ref}
    {...props}
  />
));
Textarea.displayName = "Textarea";

export { Textarea };
