import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CreditCard,
  ShieldCheck,
} from "lucide-react";

import { CTABand } from "@/components/cta-band";
import { DoctorCard } from "@/components/doctor-card";
import { FAQSection } from "@/components/faq-section";
import { HomeHero } from "@/components/home-hero";
import { HoursPanel } from "@/components/hours-panel";
import { MapPanel } from "@/components/map-panel";
import { Reveal } from "@/components/motion/reveal";
import { ReviewCTA } from "@/components/review-cta";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { StatsRow } from "@/components/stats-row";
import { Button } from "@/components/ui/button";
import { ValuesBento } from "@/components/values-bento";
import {
  doctors,
  faqs,
  insuranceProviders,
  paymentMethods,
  services,
  site,
} from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Midtown Dental | Serving Bismarck and the surrounding community",
  },
  description: site.description,
  alternates: { canonical: "/" },
};

const homeFaqs = faqs.slice(0, 4);

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <div className="overflow-hidden border-b border-line bg-sand/70">
        <div className="flex w-max animate-marquee items-center motion-reduce:animate-none">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1 ? "true" : undefined}
              className="flex items-center"
            >
              {services.map((service) => (
                <li
                  key={`${copy}-${service.id}`}
                  className="flex items-center gap-5 px-5 py-4 text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-forest/80 sm:gap-7 sm:px-7"
                >
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-brass" />
                  {service.name}
                </li>
              ))}
              <li className="flex items-center gap-5 px-5 py-4 text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-forest/80 sm:gap-7 sm:px-7">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-brass" />
                Bismarck, North Dakota
              </li>
            </ul>
          ))}
        </div>
      </div>

      <section className="section-pad bg-bone">
        <div className="container-page">
          <SectionHeading
            eyebrow="The Midtown difference"
            title={
              <>
                A practice built around{" "}
                <span className="italic text-sage">people</span>, not paperwork.
              </>
            }
            description="Our high level patient care starts with a warm and welcoming environment. We will treat you with dignity, care, respect, kindness and understanding."
            action={
              <Button asChild variant="outline">
                <Link href="/about-us">
                  More about us
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </Link>
              </Button>
            }
          />
          <div className="mt-12 md:mt-16">
            <ValuesBento />
          </div>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-page">
          <SectionHeading
            eyebrow="Comprehensive care"
            title="Our Services"
            description="At Midtown Dental Bismarck, we are proud to offer a wide range of services to meet your dental needs — from routine cleanings and preventive care to cosmetic, restorative and pediatric dentistry."
            action={
              <Button asChild variant="outline">
                <Link href="/services">
                  All services
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </Link>
              </Button>
            }
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:mt-16">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                feature={index === 0}
              />
            ))}
          </div>
          <Reveal className="mt-8 flex flex-col gap-3 rounded-card border border-line bg-bone/70 px-6 py-5 text-sm sm:flex-row sm:items-center sm:justify-between">
            <p className="text-ink/75">
              Not sure which appointment is right for you? Our Bismarck team can
              help.
            </p>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 font-semibold text-forest transition-colors hover:text-brass-deep"
            >
              Call {site.phone}
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </Reveal>
        </div>
      </section>

      <section className="grain relative overflow-hidden bg-forest py-20 text-cream md:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-0 size-[28rem] rounded-full bg-sage/20 blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 bottom-0 size-[24rem] rounded-full bg-brass/10 blur-[100px]"
        />
        <div className="container-page relative z-10">
          <SectionHeading
            tone="dark"
            eyebrow="Your dental team"
            title={
              <>
                Two Bismarck dentists.
                <br />
                <span className="italic text-brass-soft">One hometown practice.</span>
              </>
            }
            description="Get to know Dr. Andrew Schmid and Dr. Madison Morrell — the people behind your care at Midtown Dental."
            action={
              <Button asChild variant="glass">
                <Link href="/meet-our-dentists">
                  Meet our dentists
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </Link>
              </Button>
            }
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 md:gap-6">
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.slug} doctor={doctor} tone="dark" />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone py-16 md:py-20">
        <div className="container-page">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow text-sage">At a glance</p>
              <h2 className="heading-2 mt-4 text-ink">
                Real details,{" "}
                <span className="italic text-sage">not big promises.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-ink/75">
              A five-pillar practice with two hometown dentists, four listed
              insurance providers and six ways to pay.
            </p>
          </div>
          <StatsRow />
        </div>
      </section>

      <section className="section-pad bg-sand/45">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow text-sage">Insurance &amp; payments</p>
            <h2 className="heading-2 mt-4 max-w-lg text-ink">
              Care that fits your{" "}
              <span className="italic text-sage">plan and your budget.</span>
            </h2>
            <p className="lead mt-5 max-w-xl text-ink/75">
              Midtown Dental Bismarck works with many different insurance
              companies and convenient payment options, including CareCredit,
              MasterCard, Visa and Discover.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/insurance-and-payment-information">
                  Insurance &amp; payment details
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <a
                  href={site.links.payOnline}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CreditCard aria-hidden="true" className="size-4" />
                  Pay online
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-panel border border-line bg-cream p-6 shadow-soft sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-sage-pale text-forest">
                  <ShieldCheck aria-hidden="true" className="size-4" />
                </span>
                <div>
                  <p className="text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-sage">
                    Insurance
                  </p>
                  <p className="text-sm font-semibold text-ink">
                    We are currently providers of:
                  </p>
                </div>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {insuranceProviders.map((provider) => (
                  <li
                    key={provider.name}
                    className="rounded-full border border-line bg-bone px-3.5 py-2 text-[0.8125rem] font-semibold text-ink/80"
                  >
                    {provider.name}
                  </li>
                ))}
              </ul>

              <div className="mt-7 border-t border-line pt-6">
                <p className="text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-sage">
                  Payment methods
                </p>
                <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {paymentMethods.map((method) => (
                    <li
                      key={method.name}
                      className="flex items-center gap-2 rounded-xl border border-line/80 bg-bone/60 px-3 py-2.5 text-[0.8125rem] font-semibold text-ink/80"
                    >
                      <span
                        aria-hidden="true"
                        className="size-1.5 rounded-full bg-brass"
                      />
                      {method.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ReviewCTA />

      <section className="section-pad bg-cream">
        <div className="container-page">
          <SectionHeading
            eyebrow="Visit Midtown"
            title="Directions"
            description="Find us in the heart of Bismarck at 2000 N 12th St, Bismarck, ND 58501 — serving the capital city and surrounding area."
            action={
              <Button asChild variant="outline">
                <a
                  href={site.links.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get directions
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
              </Button>
            }
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <Reveal>
              <MapPanel />
            </Reveal>
            <Reveal delay={0.1} className="grid gap-5">
              <HoursPanel />
              <figure className="overflow-hidden rounded-card border border-line bg-cream shadow-soft">
                <div className="relative aspect-[16/9]">
                  <Image
                    src="/assets/images/waiting-room.jpg"
                    alt="Midtown Dental waiting room in Bismarck, North Dakota"
                    width={600}
                    height={400}
                    loading="eager"
                    sizes="(min-width: 1024px) 34vw, 100vw"
                    className="h-full w-full object-cover"
                  />
                </div>
                <figcaption className="flex items-center justify-between gap-4 px-5 py-4">
                  <span className="text-sm font-semibold text-ink">
                    Midtown Dental Bismarck
                  </span>
                  <span className="text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-sage">
                    Bismarck, ND
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <FAQSection items={homeFaqs} />

      <CTABand />
    </>
  );
}
