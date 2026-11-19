import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";

import { CTABand } from "@/components/cta-band";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ServicesExplorer } from "@/components/services-explorer";
import { Button } from "@/components/ui/button";
import { services, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Midtown Dental Bismarck services: routine dental care, periodontal care, cosmetic dentistry, restorative dentistry and pediatric dentistry.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What we offer"
        title={
          <>
            Midtown Dental Bismarck{" "}
            <span className="italic text-sage">Services Offered</span>
          </>
        }
        description="At Midtown Dental Bismarck, we are proud to offer a wide range of services to meet your dental needs."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
        aside={
          <figure className="relative mx-auto max-w-md lg:mx-0 lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[2.25rem] border border-forest/10"
            />
            <div className="relative overflow-hidden rounded-panel border border-line bg-cream shadow-lift">
              <div className="relative aspect-[16/11]">
                <Image
                  src="/assets/images/service-routine.jpg"
                  alt="Dental cleaning tools prepared for a routine visit"
                  fill
                  priority
                  sizes="(min-width: 1024px) 44vw, 90vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-forest-deep/15 to-transparent" />
                <p className="absolute bottom-5 left-5 right-5 font-display text-2xl leading-tight text-cream sm:text-3xl">
                  Five pillars of care.
                  <br />
                  <span className="italic text-brass-soft">One practice.</span>
                </p>
              </div>
              <ul className="flex flex-wrap gap-2 p-4">
                {services.map((service) => (
                  <li
                    key={service.id}
                    className="rounded-full border border-line bg-bone px-3 py-1.5 text-[0.6875rem] font-semibold text-ink/75"
                  >
                    {service.name}
                  </li>
                ))}
              </ul>
            </div>
          </figure>
        }
      />

      <section className="section-pad bg-cream">
        <div className="container-page">
          <SectionHeading
            eyebrow="Explore by category"
            title={
              <>
                Everything we do,{" "}
                <span className="italic text-sage">explained.</span>
              </>
            }
            description="Choose a category to see every treatment, what it involves and how it can help. No abbreviations, no guesswork."
            action={
              <Button asChild variant="outline">
                <a
                  href={site.links.appointment}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a visit
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
              </Button>
            }
          />
          <div className="mt-12 md:mt-16">
            <ServicesExplorer categories={services} />
          </div>

          <Reveal className="mt-8">
            <div className="rounded-panel border border-line bg-bone/70 p-6 sm:p-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-sage">
                    Every treatment
                  </p>
                  <h2 className="heading-3 mt-2 text-ink">Treatment index</h2>
                </div>
                <p className="max-w-md text-[0.8125rem] leading-relaxed text-ink/70">
                  A quick reference for every service listed above. Select a
                  category to read the full details.
                </p>
              </div>
              <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
                {services.map((category) => (
                  <div key={category.id}>
                    <p className="text-[0.625rem] font-bold uppercase tracking-[0.14em] text-sage">
                      {category.name}
                    </p>
                    <ul className="mt-3 space-y-1.5 text-[0.8125rem] leading-snug text-ink/75">
                      {category.procedures.map((procedure) => (
                        <li key={procedure.title}>{procedure.title}</li>
                      ))}
                      {category.id === "periodontal" ? (
                        <li>Scaling and Root Planing</li>
                      ) : null}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="grain relative overflow-hidden bg-forest-deep py-20 text-cream md:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-28 top-0 size-[26rem] rounded-full bg-sage/20 blur-[120px]"
        />
        <div className="container-page relative z-10">
          <div className="grid items-end gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal>
              <p className="eyebrow text-brass-soft">The care promise</p>
              <h2 className="heading-2 mt-4 max-w-lg text-cream">
                Explained clearly.{" "}
                <span className="italic text-brass-soft">Delivered gently.</span>
              </h2>
              <p className="lead mt-5 max-w-xl text-cream/75">
                With every patient, we take the time to explain the procedures
                being performed so you can feel confident in your care.
              </p>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: HeartHandshake,
                  title: "Patient care",
                  copy: "Dignity, care, respect, kindness and understanding — every visit.",
                },
                {
                  icon: Sparkles,
                  title: "Modern technology",
                  copy: "We stay up to date on the latest technology to make your smile sparkle.",
                },
                {
                  icon: ShieldCheck,
                  title: "Friendly & prompt",
                  copy: "A team committed to your most positive dental experience.",
                },
              ].map((item, index) => (
                <Reveal key={item.title} delay={0.08 + index * 0.06}>
                  <div className="h-full rounded-card border border-cream/12 bg-cream/[0.055] p-5 backdrop-blur-md">
                    <span className="flex size-10 items-center justify-center rounded-full bg-cream/10 text-brass-soft">
                      <item.icon aria-hidden="true" className="size-4" />
                    </span>
                    <h3 className="mt-4 text-sm font-semibold text-cream">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[0.8125rem] leading-relaxed text-cream/70">
                      {item.copy}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Not sure where to start?"
        title="Tell us what your smile needs."
        description="Call the Bismarck office or request an appointment online. We will help you find the right visit."
      />
    </>
  );
}
