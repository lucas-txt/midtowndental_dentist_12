"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogClose = DialogPrimitive.Close;
const DialogPortal = DialogPrimitive.Portal;
const DialogTitle = DialogPrimitive.Title;
const DialogDescription = DialogPrimitive.Description;

const DialogOverlay = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-forest-deep/70 backdrop-blur-sm data-[state=closed]:animate-[fade-out_180ms_ease-out] data-[state=open]:animate-[fade-in_180ms_ease-out]",
      className,
    )}
    {...props}
  />
));
DialogOverlay.displayName = "DialogOverlay";

const DialogContent = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPrimitive.Content
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 flex flex-col bg-forest-deep text-cream focus:outline-none",
      className,
    )}
    {...props}
  >
    {children}
    <DialogPrimitive.Close className="absolute right-5 top-6 flex size-11 cursor-pointer items-center justify-center rounded-full border border-cream/20 bg-cream/5 text-cream transition-colors hover:bg-cream/15 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brass-soft">
      <X aria-hidden="true" className="size-5" />
      <span className="sr-only">Close menu</span>
    </DialogPrimitive.Close>
  </DialogPrimitive.Content>
));
DialogContent.displayName = "DialogContent";

export {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogPortal,
  DialogTitle,
  DialogDescription,
  DialogOverlay,
  DialogContent,
};
