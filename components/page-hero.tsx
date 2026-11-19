import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  aside,
  tone = "light",
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  breadcrumb: { label: string; href?: string }[];
  aside?: ReactNode;
  tone?: "light" | "dark";
  children?: ReactNode;
}) {
  const dark = tone === "dark";

  return (
    <section
      className={cn(
        "grain relative overflow-hidden",
        dark ? "bg-forest-deep text-cream" : "bg-bone text-ink",
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -right-32 -top-40 size-[36rem] rounded-full blur-[130px]",
          dark ? "bg-sage/25" : "bg-sage-pale/60",
        )}
      />
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -bottom-48 left-1/3 size-[28rem] rounded-full blur-[120px]",
          dark ? "bg-brass/10" : "bg-brass/10",
        )}
      />
      <div className="container-page relative z-10 py-12 md:py-16 lg:py-20">
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex flex-wrap items-center gap-2 text-[0.6875rem] font-semibold uppercase tracking-[0.16em]">
            {breadcrumb.map((crumb, index) => (
              <li key={`${crumb.label}-${index}`} className="flex items-center gap-2">
                {index > 0 ? (
                  <ChevronRight
                    aria-hidden="true"
                    className={cn(
                      "size-3",
                      dark ? "text-cream/25" : "text-ink/25",
                    )}
                  />
                ) : null}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className={cn(
                      "transition-colors",
                      dark
                        ? "text-cream/70 hover:text-cream"
                        : "text-ink/65 hover:text-ink",
                    )}
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span
                    aria-current="page"
                    className={dark ? "text-cream/80" : "text-ink/70"}
                  >
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div
          className={cn(
            "grid items-end gap-12",
            aside ? "lg:grid-cols-[1.05fr_0.95fr] lg:gap-16" : "",
          )}
        >
          <Reveal>
            <p className={cn("eyebrow", dark ? "text-brass-soft" : "text-sage")}>
              {eyebrow}
            </p>
            <h1
              className={cn(
                "display-l mt-5 max-w-3xl",
                dark ? "text-cream" : "text-ink",
              )}
            >
              {title}
            </h1>
            <div
              className={cn(
                "lead mt-6 max-w-xl",
                dark ? "text-cream/70" : "text-ink/65",
              )}
            >
              {description}
            </div>
            {children ? <div className="mt-8">{children}</div> : null}
          </Reveal>
          {aside ? <Reveal delay={0.12}>{aside}</Reveal> : null}
        </div>
      </div>
    </section>
  );
}
