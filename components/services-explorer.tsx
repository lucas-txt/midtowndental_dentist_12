"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRight, Phone } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { site, type ServiceCategory } from "@/lib/site";
import { cn } from "@/lib/utils";

export function ServicesExplorer({
  categories,
}: {
  categories: ServiceCategory[];
}) {
  const [active, setActive] = useState(categories[0]?.id ?? "");

  useEffect(() => {
    function syncFromHash() {
      const id = window.location.hash.replace("#", "");
      if (categories.some((category) => category.id === id)) {
        setActive(id);
      }
    }

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [categories]);

  function handleChange(value: string) {
    setActive(value);
    window.history.replaceState(null, "", `#${value}`);
  }

  return (
    <Tabs
      value={active}
      onValueChange={handleChange}
      orientation="vertical"
      className="grid gap-8 lg:grid-cols-[17rem_1fr] lg:items-start lg:gap-12"
    >
      <div className="lg:sticky lg:top-28">
        <p className="mb-4 text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-sage">
          Explore by category
        </p>
        <TabsList
          aria-label="Dental service categories"
          className="flex h-auto w-full flex-col items-stretch gap-2"
        >
          {categories.map((category, index) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className={cn(
                "group justify-start gap-3 rounded-xl border px-4 py-3.5 text-left transition-all duration-200",
                active === category.id
                  ? "border-forest bg-forest text-cream shadow-soft"
                  : "border-line bg-cream text-ink hover:border-sage/40 hover:bg-sage-pale/40",
              )}
            >
              <span
                className={cn(
                  "text-[0.625rem] font-bold tracking-[0.14em]",
                  active === category.id ? "text-brass-soft" : "text-sage",
                )}
              >
                0{index + 1}
              </span>
              <span className="flex flex-col items-start gap-0.5">
                <span className="text-sm font-semibold leading-tight">
                  {category.name}
                </span>
                <span
                  className={cn(
                    "text-[0.625rem] font-bold uppercase tracking-[0.14em]",
                    active === category.id ? "text-cream/70" : "text-ink/65",
                  )}
                >
                  {category.label}
                </span>
              </span>
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="mt-5 hidden rounded-card border border-line bg-cream p-5 lg:block">
          <p className="text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-sage">
            Not sure where to start?
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink/75">
            Call our Bismarck office and we will help you find the right
            appointment.
          </p>
          <a
            href={site.phoneHref}
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-forest transition-colors hover:text-brass-deep"
          >
            <Phone aria-hidden="true" className="size-4" />
            {site.phone}
          </a>
        </div>
      </div>

      <div>
        {categories.map((category) => (
          <TabsContent
            key={category.id}
            value={category.id}
            className="mt-0 animate-[fade-in_320ms_ease-out]"
          >
            <article className="overflow-hidden rounded-panel border border-line bg-cream shadow-soft">
              <div className="relative aspect-[16/9] overflow-hidden sm:aspect-[16/6]">
                <Image
                  src={category.image}
                  alt={category.imageAlt}
                  width={856}
                  height={373}
                  loading="eager"
                  sizes="(min-width: 1024px) 65vw, 100vw"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="text-[0.625rem] font-bold uppercase tracking-[0.18em] text-brass-soft">
                    {category.label}
                  </p>
                  <h2 className="mt-2 font-display text-3xl tracking-tight text-cream sm:text-4xl">
                    {category.name}
                  </h2>
                </div>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <p className="max-w-2xl text-[0.9375rem] leading-relaxed text-ink/65">
                  {category.summary}
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {category.procedures.map((procedure, index) => (
                    <div
                      key={procedure.title}
                      className={cn(
                        "rounded-2xl border border-line/80 bg-bone/60 p-5",
                        category.procedures.length % 2 === 1 &&
                          index === category.procedures.length - 1
                          ? "md:col-span-2"
                          : "",
                      )}
                    >
                      <div className="flex items-baseline gap-3">
                        <span className="font-display text-lg text-brass-deep">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-[0.9375rem] font-semibold leading-snug text-ink">
                          {procedure.title}
                        </h3>
                      </div>
                      <p className="mt-2.5 text-[0.875rem] leading-relaxed text-ink/65">
                        {procedure.copy}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
                  <p className="text-sm text-ink/70">
                    Have a question about {category.name.toLowerCase()}?
                  </p>
                  <a
                    href={site.links.appointment}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-forest transition-colors hover:text-brass-deep"
                  >
                    Request an appointment
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </a>
                </div>
              </div>
            </article>
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
}
