"use client";

import Image from "next/image";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { useState, type KeyboardEvent } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";

export type GalleryImage = {
  src: string;
  alt: string;
  label: string;
};

export function Gallery({ images }: { images: GalleryImage[] }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const current = images[index];

  function openAt(nextIndex: number) {
    setIndex(nextIndex);
    setOpen(true);
  }

  function previous() {
    setIndex((value) => (value - 1 + images.length) % images.length);
  }

  function next() {
    setIndex((value) => (value + 1) % images.length);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      previous();
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      next();
    }
  }

  return (
    <div>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {images.map((image, imageIndex) => (
          <button
            key={image.src}
            type="button"
            onClick={() => openAt(imageIndex)}
            className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-card border border-line focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass"
            aria-label={`Open larger image: ${image.label}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              loading="eager"
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-forest-deep/70 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 text-left text-[0.75rem] font-semibold text-cream">
              {image.label}
            </span>
            <span className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full border border-cream/25 bg-forest-deep/40 text-cream opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
              <Expand aria-hidden="true" className="size-3.5" />
            </span>
          </button>
        ))}
      </div>

      <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-forest-deep/85 backdrop-blur-sm data-[state=closed]:animate-[fade-out_180ms_ease-out] data-[state=open]:animate-[fade-in_180ms_ease-out]" />
          <DialogPrimitive.Content
            onKeyDown={handleKeyDown}
            className="fixed left-1/2 top-1/2 z-50 max-h-[92vh] w-[calc(100vw-1.5rem)] max-w-5xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-panel border border-cream/15 bg-forest-deep p-3 text-cream shadow-lift focus:outline-none sm:w-[calc(100vw-3rem)] sm:p-4"
          >
            <DialogPrimitive.Title className="sr-only">
              Midtown Dental photo gallery
            </DialogPrimitive.Title>
            <DialogPrimitive.Description className="sr-only">
              {current?.label ?? "Practice photo"}
            </DialogPrimitive.Description>

            <div className="relative flex h-[62vh] w-full items-center justify-center overflow-hidden rounded-xl bg-forest-deep sm:h-[68vh]">
              {current ? (
                <Image
                  src={current.src}
                  alt={current.alt}
                  fill
                  sizes="95vw"
                  className="object-contain"
                />
              ) : null}
            </div>

            <div className="flex items-center justify-between gap-4 px-1 pb-1 pt-4">
              <p className="text-sm font-semibold text-cream/80">
                {current?.label}
                <span className="ml-2 text-[0.6875rem] font-normal uppercase tracking-[0.16em] text-cream/35">
                  {index + 1} / {images.length}
                </span>
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={previous}
                  aria-label="Previous image"
                  className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:bg-cream/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass-soft"
                >
                  <ChevronLeft aria-hidden="true" className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next image"
                  className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:bg-cream/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass-soft"
                >
                  <ChevronRight aria-hidden="true" className="size-4" />
                </button>
              </div>
            </div>

            <DialogPrimitive.Close className="absolute right-3 top-3 flex size-10 cursor-pointer items-center justify-center rounded-full border border-cream/20 bg-forest-deep/60 text-cream backdrop-blur-md transition-colors hover:bg-cream/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass-soft sm:right-4 sm:top-4">
              <X aria-hidden="true" className="size-4" />
              <span className="sr-only">Close gallery</span>
            </DialogPrimitive.Close>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </div>
  );
}
