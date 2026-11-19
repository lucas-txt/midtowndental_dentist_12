import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full text-center font-semibold transition-[background-color,color,border-color,box-shadow,transform] duration-200 ease-out select-none focus-visible:outline-2 focus-visible:outline-offset-3 disabled:pointer-events-none disabled:opacity-55 active:scale-[0.985]",
  {
    variants: {
      variant: {
        primary:
          "bg-forest text-cream shadow-soft hover:bg-forest-deep hover:shadow-lift",
        light:
          "bg-cream text-forest shadow-soft hover:bg-white hover:shadow-lift",
        outline:
          "border border-forest/25 bg-transparent text-forest hover:border-forest hover:bg-forest hover:text-cream",
        ghost:
          "bg-transparent text-forest hover:bg-sage-pale",
        glass:
          "border border-cream/25 bg-cream/10 text-cream backdrop-blur-md hover:border-cream/45 hover:bg-cream/20",
      },
      size: {
        sm: "h-10 px-4 text-[0.8125rem]",
        md: "h-12 px-6 text-sm",
        lg: "h-14 px-7 text-[0.9375rem]",
        icon: "size-11 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
