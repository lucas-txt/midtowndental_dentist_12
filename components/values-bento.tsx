import Image from "next/image";
import { HeartHandshake, Sparkles, Users } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { practiceValues } from "@/lib/site";

const icons = [HeartHandshake, Sparkles, Users];

export function ValuesBento() {
  const [patientCare, technology, staff] = practiceValues;

  return (
    <div className="grid gap-4 lg:grid-cols-12 lg:gap-5">
      <Reveal className="lg:col-span-7">
        <article className="group relative flex h-full min-h-[26rem] flex-col justify-end overflow-hidden rounded-panel border border-line bg-forest shadow-soft sm:min-h-[32rem]">
          <Image
            src={patientCare.image}
            alt={patientCare.imageAlt}
            fill
            loading="eager"
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/45 to-forest-deep/5" />
          <div className="relative z-10 p-6 sm:p-8 lg:p-10">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full border border-cream/20 bg-cream/10 text-brass-soft backdrop-blur-md">
                <HeartHandshake aria-hidden="true" className="size-4" />
              </span>
              <span className="text-[0.625rem] font-bold uppercase tracking-[0.18em] text-brass-soft">
                01 · Patient care
              </span>
            </div>
            <h3 className="mt-5 font-display text-3xl tracking-tight text-cream sm:text-4xl">
              Patient Care
            </h3>
            <p className="mt-3 max-w-lg text-[0.9375rem] leading-relaxed text-cream/80">
              {patientCare.copy}
            </p>
          </div>
        </article>
      </Reveal>

      <div className="grid gap-4 lg:col-span-5 lg:gap-5">
        {[technology, staff].map((value, index) => {
          const Icon = icons[index + 1];
          return (
            <Reveal key={value.title} delay={0.1 + index * 0.06}>
              <article className="group flex h-full flex-col overflow-hidden rounded-panel border border-line bg-cream shadow-soft">
                <div className="relative aspect-[16/6] overflow-hidden">
                  <Image
                    src={value.image}
                    alt={value.imageAlt}
                    fill
                    loading="eager"
                    sizes="(min-width: 1024px) 38vw, 100vw"
                    className="object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/45 to-transparent" />
                  <span className="absolute right-4 top-4 text-[0.625rem] font-bold uppercase tracking-[0.18em] text-cream/80">
                    0{index + 2}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 items-center justify-center rounded-full bg-sage-pale text-forest">
                      <Icon aria-hidden="true" className="size-4" />
                    </span>
                    <h3 className="heading-3 text-ink">{value.title}</h3>
                  </div>
                  <p className="mt-3 text-[0.875rem] leading-relaxed text-ink/75">
                    {value.copy}
                  </p>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
