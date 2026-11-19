import Link from "next/link";
import { ArrowRight, CalendarCheck, Phone } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function CTABand({
  eyebrow = "Your next visit",
  title = "Ready for a healthier, brighter smile?",
  description = "Request an appointment online, or call our Bismarck office during business hours. We would love to meet you.",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-bone py-16 md:py-24">
      <div className="container-page">
        <Reveal>
          <div className="grain relative overflow-hidden rounded-panel bg-forest-deep px-6 py-14 text-cream shadow-lift sm:px-10 md:px-14 md:py-20 lg:px-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-32 size-[30rem] rounded-full border border-cream/10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-20 size-[22rem] rounded-full border border-cream/10"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 top-1/2 size-72 -translate-y-1/2 rounded-full bg-sage/25 blur-[100px]"
            />

            <div className="relative z-10 max-w-2xl">
              <p className="eyebrow text-brass-soft">{eyebrow}</p>
              <h2 className="heading-2 mt-5 text-cream">{title}</h2>
              <p className="lead mt-5 max-w-xl text-cream/65">{description}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="light" size="lg">
                  <a
                    href={site.links.appointment}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CalendarCheck aria-hidden="true" className="size-4" />
                    Request an appointment
                  </a>
                </Button>
                <Button asChild variant="glass" size="lg">
                  <Link href="/contact-us">
                    Contact the office
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </Link>
                </Button>
              </div>
              <p className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-cream/70">
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 transition-colors hover:text-cream"
                >
                  <Phone aria-hidden="true" className="size-3.5" />
                  {site.phone}
                </a>
                <span className="hidden h-3 w-px bg-cream/20 sm:block" />
                <span>{site.address}</span>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
