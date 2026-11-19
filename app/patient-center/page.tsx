import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowUpRight,
  CalendarCheck,
  Clock,
  Download,
  FileText,
  Mail,
  Phone,
} from "lucide-react";

import { CTABand } from "@/components/cta-band";
import { FAQSection } from "@/components/faq-section";
import { FirstVisitChecklist } from "@/components/first-visit-checklist";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/page-hero";
import { ReviewCTA } from "@/components/review-cta";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { patientFaqs, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Patient Center",
  description:
    "Midtown Dental patient center: appointment scheduling, first visit information and new patient forms.",
  alternates: { canonical: "/patient-center" },
};

export default function PatientCenterPage() {
  return (
    <>
      <PageHero
        eyebrow="Patient center"
        title="Midtown Dental Patient Center"
        description="At Midtown Dental Bismarck, we want to make your visit as comfortable and enjoyable as possible. If you have any questions prior to your appointment, please call us at (701) 222-1286."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Patient Center" },
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
                  src="/assets/images/waiting-room.jpg"
                  alt="The Midtown Dental waiting room in Bismarck"
                  fill
                  priority
                  sizes="(min-width: 1024px) 44vw, 90vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/75 via-transparent to-transparent" />
              </div>
            </div>
            <div className="glass-light absolute -bottom-6 left-4 right-4 flex items-center gap-3 rounded-2xl p-4 shadow-soft sm:left-6 sm:right-auto sm:max-w-xs">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-forest text-cream">
                <Phone aria-hidden="true" className="size-4" />
              </span>
              <div>
                <p className="text-[0.625rem] font-bold uppercase tracking-[0.16em] text-sage">
                  Questions before your visit?
                </p>
                <a
                  href={site.phoneHref}
                  className="text-sm font-semibold text-ink transition-colors hover:text-forest"
                >
                  {site.phone}
                </a>
              </div>
            </div>
          </figure>
        }
      />

      <section className="section-pad bg-cream">
        <div className="container-page">
          <SectionHeading
            eyebrow="Plan your visit"
            title="Appointment Scheduling"
            description="Give us a call at (701) 222-1286 during business hours to schedule your appointment, or request one online."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal>
              <div className="grain relative h-full overflow-hidden rounded-panel bg-forest-deep p-7 text-cream shadow-lift sm:p-9">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-20 size-64 rounded-full bg-sage/25 blur-[80px]"
                />
                <div className="relative z-10">
                  <p className="eyebrow text-brass-soft">Two ways to book</p>
                  <h3 className="heading-2 mt-4 max-w-md text-cream">
                    Find a time that works for you.
                  </h3>
                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    <a
                      href={site.phoneHref}
                      className="group rounded-2xl border border-cream/15 bg-cream/[0.06] p-5 transition-colors hover:border-cream/30 hover:bg-cream/10"
                    >
                      <Phone aria-hidden="true" className="size-5 text-brass-soft" />
                      <p className="mt-4 text-sm font-semibold text-cream">
                        Call the office
                      </p>
                      <p className="mt-1 text-lg font-semibold text-cream">
                        {site.phone}
                      </p>
                      <p className="mt-1 text-[0.75rem] text-cream/75">
                        During business hours
                      </p>
                    </a>
                    <a
                      href={site.links.appointment}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group rounded-2xl border border-cream/15 bg-cream/[0.06] p-5 transition-colors hover:border-cream/30 hover:bg-cream/10"
                    >
                      <CalendarCheck
                        aria-hidden="true"
                        className="size-5 text-brass-soft"
                      />
                      <p className="mt-4 text-sm font-semibold text-cream">
                        Request online
                      </p>
                      <p className="mt-1 inline-flex items-center gap-1.5 text-[0.8125rem] font-semibold text-cream">
                        PatientConnect365
                        <ArrowUpRight
                          aria-hidden="true"
                          className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </p>
                      <p className="mt-1 text-[0.75rem] text-cream/75">
                        Opens in a new tab
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex h-full flex-col rounded-panel border border-line bg-bone/70 p-7">
                <Clock aria-hidden="true" className="size-6 text-sage" />
                <h3 className="heading-3 mt-4 text-ink">Arrive early</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink/75">
                  On the day of your appointment, please arrive{" "}
                  <strong className="font-semibold text-forest">
                    10 minutes early
                  </strong>{" "}
                  so we can get you checked in and to fill out any additional
                  paperwork.
                </p>
                <div className="mt-auto border-t border-line pt-5">
                  <p className="text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-sage">
                    Office hours
                  </p>
                  <dl className="mt-3 space-y-1.5 text-sm">
                    {site.hours.map((row) => (
                      <div
                        key={row.days}
                        className="flex items-baseline justify-between gap-3"
                      >
                        <dt className="text-ink/70">{row.days}</dt>
                        <dd className="font-semibold text-ink">{row.time}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad bg-bone">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow text-sage">Your first visit</p>
            <h2 className="heading-2 mt-4 text-ink">First Visit</h2>
            <p className="lead mt-5 max-w-xl text-ink/75">
              At your first visit, we will need your new patient forms, medical
              history, list of medications you are currently taking and your
              insurance card if applicable.
            </p>
            <figure className="mt-8 overflow-hidden rounded-panel border border-line bg-cream shadow-soft">
              <div className="relative aspect-[16/9]">
                <Image
                  src="/assets/images/friendly-staff.jpg"
                  alt="The friendly staff at Midtown Dental"
                  width={856}
                  height={373}
                  loading="eager"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="h-full w-full object-cover"
                />
              </div>
            </figure>
          </Reveal>
          <Reveal delay={0.1}>
            <FirstVisitChecklist />
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-page">
          <SectionHeading
            eyebrow="Paperwork, simplified"
            title="New Patient Forms"
            description="Click on the link below to download your new patient form. Please fill out and bring with you to your first appointment or email them to us at NewPatientServices@midtowndb.com."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <div className="flex h-full flex-col justify-between rounded-panel border border-line bg-bone/70 p-7 sm:flex-row sm:items-center sm:gap-8 sm:p-9">
                <div>
                  <span className="flex size-12 items-center justify-center rounded-full bg-sage-pale text-forest">
                    <FileText aria-hidden="true" className="size-5" />
                  </span>
                  <h3 className="heading-3 mt-5 text-ink">New Patient Forms</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">
                    Download the PDF, complete it at home and bring it with you.
                  </p>
                </div>
                <Button asChild size="lg" className="mt-6 shrink-0 sm:mt-0">
                  <a href={site.links.patientForm} download>
                    <Download aria-hidden="true" className="size-4" />
                    Download PDF
                  </a>
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="flex h-full flex-col justify-center rounded-panel border border-line bg-cream p-7 shadow-soft sm:p-9">
                <span className="flex size-12 items-center justify-center rounded-full bg-sand text-forest">
                  <Mail aria-hidden="true" className="size-5" />
                </span>
                <h3 className="heading-3 mt-5 text-ink">
                  Prefer to email your forms?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  Send completed forms to our new patient services team and we
                  will have them ready for your visit.
                </p>
                <a
                  href={site.formsEmailHref}
                  className="mt-4 inline-flex items-center gap-2 break-all text-sm font-semibold text-forest transition-colors hover:text-brass-deep"
                >
                  <Mail aria-hidden="true" className="size-4 shrink-0" />
                  {site.formsEmail}
                </a>
                <a
                  href={site.phoneHref}
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-ink/70 transition-colors hover:text-forest"
                >
                  <Phone aria-hidden="true" className="size-4 shrink-0" />
                  {site.phone}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FAQSection
        items={patientFaqs}
        eyebrow="Before your appointment"
        title="Patient questions, answered."
        description="Helpful answers about scheduling, forms, arrival and insurance. Call the office if you need anything else."
      />

      <ReviewCTA />

      <CTABand
        eyebrow="We are ready when you are"
        title="Make your first visit a simple one."
        description="Download your forms, call the Bismarck office, or request an appointment online."
      />
    </>
  );
}
