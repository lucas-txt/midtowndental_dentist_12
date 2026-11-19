import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import type { Doctor } from "@/lib/site";

export function DoctorCard({
  doctor,
  tone = "light",
}: {
  doctor: Doctor;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";

  return (
    <Link
      href={`/meet-our-dentists/${doctor.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-panel border transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass",
        dark
          ? "border-cream/12 bg-cream/[0.055] hover:border-cream/25"
          : "border-line bg-cream shadow-soft hover:border-sage/40 hover:shadow-lift",
      )}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={doctor.image}
          alt={doctor.imageAlt}
          width={800}
          height={800}
          loading="eager"
          sizes="(min-width: 1024px) 42vw, 100vw"
          className="h-full w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/55 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 rounded-full border border-cream/20 bg-forest-deep/45 px-3 py-1.5 text-[0.625rem] font-bold uppercase tracking-[0.16em] text-cream/80 backdrop-blur-md">
          Bismarck, ND
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3
              className={cn(
                "heading-3",
                dark ? "text-cream" : "text-ink",
              )}
            >
              {doctor.name}
            </h3>
            <p
              className={cn(
                "mt-1 text-[0.6875rem] font-bold uppercase tracking-[0.14em]",
                dark ? "text-brass-soft" : "text-sage",
              )}
            >
              Dentist
            </p>
          </div>
          <span
            className={cn(
              "flex size-10 shrink-0 items-center justify-center rounded-full border transition-colors",
              dark
                ? "border-cream/20 text-cream/70 group-hover:border-brass-soft group-hover:text-brass-soft"
                : "border-line text-sage group-hover:border-forest group-hover:bg-forest group-hover:text-cream",
            )}
          >
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </span>
        </div>
        <p
          className={cn(
            "mt-4 text-sm leading-relaxed",
            dark ? "text-cream/75" : "text-ink/70",
          )}
        >
          {doctor.intro}
        </p>
        <span
          className={cn(
            "mt-6 text-[0.8125rem] font-semibold",
            dark ? "text-brass-soft" : "text-forest",
          )}
        >
          Read full profile
        </span>
      </div>
    </Link>
  );
}
