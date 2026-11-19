"use client";

import { useState } from "react";
import { Check, CircleHelp, Phone, ShieldCheck } from "lucide-react";

import { insuranceProviders, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function CoverageChecker() {
  const [selected, setSelected] = useState<string | null>(null);
  const [notListed, setNotListed] = useState(false);

  const selectedProvider = insuranceProviders.find(
    (provider) => provider.name === selected,
  );

  return (
    <div className="rounded-panel border border-line bg-cream p-6 shadow-soft sm:p-8">
      <div className="flex items-start gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-sage-pale text-forest">
          <ShieldCheck aria-hidden="true" className="size-4" />
        </span>
        <div>
          <h3 className="heading-3 text-ink">Check your coverage</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink/75">
            Choose your dental plan to see whether Midtown Dental is a listed
            provider.
          </p>
        </div>
      </div>

      <div
        role="group"
        aria-label="Insurance providers"
        className="mt-6 flex flex-wrap gap-2"
      >
        {insuranceProviders.map((provider) => (
          <button
            key={provider.name}
            type="button"
            aria-pressed={selected === provider.name && !notListed}
            onClick={() => {
              setSelected(provider.name);
              setNotListed(false);
            }}
            className={cn(
              "inline-flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2.5 text-[0.8125rem] font-semibold transition-colors",
              selected === provider.name && !notListed
                ? "border-forest bg-forest text-cream"
                : "border-line bg-bone text-ink/70 hover:border-sage/50 hover:bg-sage-pale/50",
            )}
          >
            {selected === provider.name && !notListed ? (
              <Check aria-hidden="true" className="size-3.5" />
            ) : null}
            {provider.name}
          </button>
        ))}
        <button
          type="button"
          aria-pressed={notListed}
          onClick={() => {
            setSelected(null);
            setNotListed(true);
          }}
          className={cn(
            "inline-flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2.5 text-[0.8125rem] font-semibold transition-colors",
            notListed
              ? "border-forest bg-forest text-cream"
              : "border-dashed border-sage/45 bg-transparent text-ink/75 hover:border-sage hover:text-forest",
          )}
        >
          <CircleHelp aria-hidden="true" className="size-3.5" />
          Not listed
        </button>
      </div>

      <div
        aria-live="polite"
        className={cn(
          "mt-6 rounded-xl border p-4 text-sm leading-relaxed transition-colors",
          selectedProvider || notListed
            ? "border-sage/30 bg-sage-pale/40 text-ink/75"
            : "border-line/70 bg-bone text-ink/75",
        )}
      >
        {selectedProvider ? (
          <>
            <p className="font-semibold text-forest">
              Midtown Dental is currently a provider of{" "}
              {selectedProvider.name}.
            </p>
            <p className="mt-1.5">
              Coverage and benefits vary by plan. Call{" "}
              <a
                href={site.phoneHref}
                className="font-semibold text-forest underline decoration-sage/40 underline-offset-2"
              >
                {site.phone}
              </a>{" "}
              to verify your specific plan before your visit.
            </p>
          </>
        ) : notListed ? (
          <>
            <p className="font-semibold text-forest">
              We would still be glad to check with you.
            </p>
            <p className="mt-1.5">
              Midtown Dental works with many different insurance companies.
              Call{" "}
              <a
                href={site.phoneHref}
                className="font-semibold text-forest underline decoration-sage/40 underline-offset-2"
              >
                {site.phone}
              </a>{" "}
              and we will review your plan together.
            </p>
          </>
        ) : (
          <p>
            Select a provider above, or call{" "}
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-1 font-semibold text-forest"
            >
              <Phone aria-hidden="true" className="size-3.5" />
              {site.phone}
            </a>{" "}
            with any coverage questions.
          </p>
        )}
      </div>
    </div>
  );
}
