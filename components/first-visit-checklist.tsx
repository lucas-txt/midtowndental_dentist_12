"use client";

import { useState } from "react";
import { Check, RotateCcw } from "lucide-react";

import { firstVisitItems } from "@/lib/site";
import { cn } from "@/lib/utils";

export function FirstVisitChecklist() {
  const [checked, setChecked] = useState<number[]>([]);

  function toggle(index: number) {
    setChecked((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index],
    );
  }

  const progress = Math.round((checked.length / firstVisitItems.length) * 100);

  return (
    <div className="rounded-panel border border-line bg-cream p-6 shadow-soft sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-sage">
            First visit
          </p>
          <h3 className="heading-3 mt-2 text-ink">Bring these with you</h3>
        </div>
        <span className="rounded-full border border-line bg-bone px-3 py-1.5 text-[0.75rem] font-semibold text-forest">
          {checked.length} of {firstVisitItems.length} ready
        </span>
      </div>

      <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-sand">
        <div
          className="h-full rounded-full bg-forest transition-[width] duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="sr-only" aria-live="polite">
        {checked.length} of {firstVisitItems.length} items ready for your first
        visit.
      </p>

      <ul className="mt-5 space-y-2.5">
        {firstVisitItems.map((item, index) => {
          const isChecked = checked.includes(index);
          return (
            <li key={item}>
              <label
                className={cn(
                  "flex cursor-pointer items-start gap-3 rounded-xl border p-3.5 transition-colors",
                  isChecked
                    ? "border-sage/35 bg-sage-pale/45"
                    : "border-line bg-bone/50 hover:border-sage/30",
                )}
              >
                <input
                  type="checkbox"
                  className="peer sr-only"
                  checked={isChecked}
                  onChange={() => toggle(index)}
                />
                <span
                  className={cn(
                    "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md border transition-colors peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-brass",
                    isChecked
                      ? "border-forest bg-forest text-cream"
                      : "border-line bg-cream text-transparent",
                  )}
                >
                  <Check aria-hidden="true" className="size-3.5" />
                </span>
                <span
                  className={cn(
                    "text-[0.875rem] leading-relaxed",
                    isChecked ? "text-ink/70" : "text-ink/80",
                  )}
                >
                  {item}
                </span>
              </label>
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        onClick={() => setChecked([])}
        disabled={checked.length === 0}
        className="mt-5 inline-flex cursor-pointer items-center gap-1.5 text-[0.75rem] font-semibold text-ink/75 transition-colors hover:text-forest disabled:cursor-not-allowed disabled:opacity-40"
      >
        <RotateCcw aria-hidden="true" className="size-3.5" />
        Reset checklist
      </button>
    </div>
  );
}
