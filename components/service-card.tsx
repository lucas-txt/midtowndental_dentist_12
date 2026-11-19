import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import type { ServiceCategory } from "@/lib/site";

export function ServiceCard({
  service,
  feature = false,
  index,
}: {
  service: ServiceCategory;
  feature?: boolean;
  index: number;
}) {
  return (
    <Link
      href={`/services#${service.id}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-card border border-line bg-cream shadow-soft transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-sage/40 hover:shadow-lift focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass",
        feature ? "md:col-span-2" : "",
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden",
          feature ? "aspect-[16/10] md:aspect-[4/3]" : "aspect-[16/10]",
        )}
      >
        <Image
          src={service.image}
          alt={service.imageAlt}
          width={856}
          height={373}
          loading="eager"
          sizes={feature ? "(min-width: 768px) 60vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-forest-deep/10 to-transparent" />
        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-cream/20 bg-forest-deep/50 px-3 py-1.5 text-[0.625rem] font-bold uppercase tracking-[0.16em] text-cream/85 backdrop-blur-md">
          <span className="text-brass-soft">0{index + 1}</span>
          {service.label}
        </div>
        <h3
          className={cn(
            "absolute bottom-5 left-5 right-5 font-display tracking-tight text-cream",
            feature ? "text-3xl sm:text-4xl" : "text-2xl",
          )}
        >
          {service.name}
        </h3>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-sm leading-relaxed text-ink/65">{service.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5 text-[0.8125rem] text-ink/70">
          {service.procedures.slice(0, feature ? 5 : 3).map((procedure) => (
            <li key={procedure.title} className="inline-flex items-center gap-1.5">
              <span
                aria-hidden="true"
                className="size-1 rounded-full bg-brass"
              />
              {procedure.title}
            </li>
          ))}
        </ul>
        <span className="mt-auto flex items-center gap-2 pt-6 text-[0.8125rem] font-semibold text-forest">
          Explore this care
          <ArrowUpRight
            aria-hidden="true"
            className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </Link>
  );
}
