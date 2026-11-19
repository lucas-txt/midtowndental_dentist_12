import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Banknote, Check, CreditCard, HeartHandshake, PenLine, Phone } from "lucide-react";

import { CoverageChecker } from "@/components/coverage-checker";
import { CTABand } from "@/components/cta-band";
import { FAQSection } from "@/components/faq-section";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/page-hero";
import { ReviewCTA } from "@/components/review-cta";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import {
  insuranceFaqs,
  insuranceProviders,
  paymentMethods,
  site,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Insurance and Payment Information",
  description:
    "Midtown Dental Bismarck works with many different insurance companies and convenient payment options, including CareCredit, MasterCard, Visa and Discover.",
  alternates: { canonical: "/insurance-and-payment-information" },
};

const paymentIcons = {
  banknote: Banknote,
  "pen-line": PenLine,
  "credit-card": CreditCard,
  "heart-handshake": HeartHandshake,
} as const;

export default function InsurancePage() {
  return (
    <>
      <PageHero
        eyebrow="Coverage & payment"
        title={
          <>
            Insurance and{" "}
            <span className="italic text-sage">Payment Information</span>
          </>
        }
        description="Midtown Dental Bismarck works with many different insurance companies and convenient payment options, including CareCredit, MasterCard, Visa and Discover."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Insurance & Payment" },
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
                  alt="The welcoming waiting room at Midtown Dental"
                  fill
                  priority
                  sizes="(min-width: 1024px) 44vw, 90vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-forest-deep/15 to-transparent" />
                <p className="absolute bottom-5 left-5 right-5 font-display text-2xl leading-tight text-cream sm:text-3xl">
                  Simple coverage.
                  <br />
                  <span className="italic text-brass-soft">Flexible payments.</span>
                </p>
              </div>
              <div className="flex flex-wrap gap-2 p-4">
                {insuranceProviders.map((provider) => (
                  <span
                    key={provider.name}
                    className="rounded-full border border-line bg-bone px-3 py-1.5 text-[0.6875rem] font-semibold text-ink/75"
                  >
                    {provider.name}
                  </span>
                ))}
              </div>
            </div>
          </figure>
        }
      />

      <section className="section-pad bg-cream">
        <div className="container-page">
          <SectionHeading
            eyebrow="Your plan"
            title="Insurance"
            description="We are currently providers of:"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {insuranceProviders.map((provider, index) => (
                <Reveal key={provider.name} delay={index * 0.05}>
                  <div className="group flex h-full flex-col justify-between rounded-card border border-line bg-bone/70 p-6 transition-colors hover:border-sage/40 hover:bg-sage-pale/30">
                    <span className="flex size-10 items-center justify-center rounded-full bg-sage-pale text-forest">
                      <Check aria-hidden="true" className="size-4" />
                    </span>
                    <div className="mt-8">
                      <p className="text-[0.625rem] font-bold uppercase tracking-[0.16em] text-sage">
                        Listed provider
                      </p>
                      <h3 className="heading-3 mt-2 text-ink">
                        {provider.name}
                      </h3>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.1}>
              <CoverageChecker />
            </Reveal>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-ink/70">
            Midtown Dental works with many different insurance companies. Call{" "}
            <a
              href={site.phoneHref}
              className="font-semibold text-forest underline decoration-sage/40 underline-offset-2"
            >
              {site.phone}
            </a>{" "}
            to verify your specific plan before your visit.
          </p>
        </div>
      </section>

      <section className="section-pad bg-bone">
        <div className="container-page">
          <SectionHeading
            eyebrow="Easy options"
            title="Payment Methods"
            description="We accept the following payment methods"
            action={
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
            }
          />
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {paymentMethods.map((method, index) => {
              const Icon =
                paymentIcons[method.icon as keyof typeof paymentIcons] ??
                CreditCard;
              return (
                <Reveal key={method.name} delay={index * 0.04}>
                  <div className="flex h-full flex-col items-center justify-center rounded-card border border-line bg-cream px-4 py-7 text-center shadow-sm transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-sage/40 hover:shadow-soft">
                    <span className="flex size-11 items-center justify-center rounded-full bg-sage-pale text-forest">
                      <Icon aria-hidden="true" className="size-4" />
                    </span>
                    <p className="mt-4 text-sm font-semibold text-ink">
                      {method.name}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <p className="mt-6 text-sm text-ink/70">
            Prefer to pay from home? Use our secure online payment link, or ask
            our front desk at your next visit.
          </p>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-page">
          <Reveal>
            <div className="grain relative overflow-hidden rounded-panel bg-forest-deep text-cream shadow-lift">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-24 -top-24 size-80 rounded-full bg-sage/25 blur-[100px]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-24 right-1/3 size-72 rounded-full bg-brass/10 blur-[90px]"
              />
              <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="p-7 sm:p-10 lg:p-12">
                  <p className="eyebrow text-brass-soft">Financing</p>
                  <h2 className="heading-2 mt-4 text-cream">CareCredit</h2>
                  <p className="lead mt-5 max-w-xl text-cream/75">
                    Take control of the health of your mouth. With the CareCredit
                    healthcare credit card you can benefit from special dental
                    financing options for your dental care. Call or ask us at your
                    next appointment to learn more.
                  </p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button asChild variant="light">
                      <a href={site.phoneHref}>
                        <Phone aria-hidden="true" className="size-4" />
                        Ask about CareCredit
                      </a>
                    </Button>
                    <Button asChild variant="glass">
                      <a
                        href={site.links.payOnline}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Pay online
                        <ArrowUpRight aria-hidden="true" className="size-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="px-7 pb-7 sm:px-10 sm:pb-10 lg:py-10 lg:pl-0 lg:pr-10">
                  <div className="overflow-hidden rounded-2xl border border-cream/15 bg-cream p-4">
                    <Image
                      src="/assets/images/carecredit-payment.png"
                      alt="CareCredit payment card information for Midtown Dental"
                      width={700}
                      height={728}
                      loading="eager"
                      sizes="(min-width: 1024px) 34vw, 90vw"
                      className="h-auto w-full rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FAQSection
        items={insuranceFaqs}
        eyebrow="Coverage questions"
        title="Before you book."
        description="A few answers about insurance, payment methods and financing. Call the office if your plan is not listed."
      />

      <ReviewCTA />

      <CTABand
        eyebrow="We can help"
        title="Questions about your coverage?"
        description="Call the Bismarck office and we will review your plan together, or request an appointment online."
      />
    </>
  );
}
