import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { FacebookIcon, InstagramIcon } from "@/components/brand-icons";
import { ContactForm } from "@/components/contact-form";
import { CTABand } from "@/components/cta-band";
import { HoursPanel } from "@/components/hours-panel";
import { MapPanel } from "@/components/map-panel";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/page-hero";
import { ReviewCTA } from "@/components/review-cta";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Midtown Dental in Bismarck, North Dakota. Call (701) 222-1286 or visit 2000 N 12th St, Bismarck, ND 58501.",
  alternates: { canonical: "/contact-us" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title={
          <>
            Contact <span className="italic text-sage">Us</span>
          </>
        }
        description="Midtown Dental Bismarck is in the heart of Bismarck at 2000 N 12th St. Call (701) 222-1286, email info@midtowndb.com, or send a message and our team will help you plan your visit."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Contact Us" },
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
                  alt="The welcoming waiting room at Midtown Dental in Bismarck"
                  fill
                  priority
                  sizes="(min-width: 1024px) 44vw, 90vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-forest-deep/10 to-transparent" />
                <p className="absolute bottom-5 left-5 right-5 font-display text-2xl leading-tight text-cream sm:text-3xl">
                  Come see us in{" "}
                  <span className="italic text-brass-soft">Bismarck.</span>
                </p>
              </div>
            </div>
            <div className="glass-light absolute -bottom-6 left-4 right-4 rounded-2xl p-4 shadow-soft sm:left-6 sm:right-auto sm:max-w-[17rem]">
              <p className="text-[0.625rem] font-bold uppercase tracking-[0.16em] text-sage">
                Call the office
              </p>
              <a
                href={site.phoneHref}
                className="mt-1.5 flex items-center gap-2 text-lg font-semibold text-forest transition-colors hover:text-brass-deep"
              >
                <Phone aria-hidden="true" className="size-4" />
                {site.phone}
              </a>
              <p className="mt-1 text-[0.75rem] text-ink/70">
                Monday - Wednesday, 8am - 5pm
              </p>
            </div>
          </figure>
        }
      />

      <section className="section-pad bg-bone">
        <div className="container-page grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <div className="space-y-5">
            <Reveal>
              <div className="rounded-panel border border-line bg-cream p-7 shadow-soft sm:p-8">
                <p className="eyebrow text-sage">The office</p>
                <h2 className="heading-2 mt-4 text-ink">
                  Midtown Dental Bismarck
                </h2>
                <address className="mt-6 space-y-4 text-sm not-italic">
                  <a
                    href={site.links.directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-ink/75 transition-colors hover:text-forest"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-sage-pale text-forest">
                      <MapPin aria-hidden="true" className="size-4" />
                    </span>
                    <span className="pt-1.5 leading-relaxed">
                      {site.addressLines[0]}
                      <br />
                      {site.addressLines[1]}
                    </span>
                  </a>
                  <a
                    href={site.phoneHref}
                    className="flex items-center gap-3 text-ink/75 transition-colors hover:text-forest"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-sage-pale text-forest">
                      <Phone aria-hidden="true" className="size-4" />
                    </span>
                    <span className="font-semibold text-ink">{site.phone}</span>
                  </a>
                  <a
                    href={site.emailHref}
                    className="flex items-center gap-3 break-all text-ink/75 transition-colors hover:text-forest"
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-sage-pale text-forest">
                      <Mail aria-hidden="true" className="size-4" />
                    </span>
                    {site.email}
                  </a>
                </address>

                <div className="mt-6 flex flex-wrap items-center gap-2.5 border-t border-line pt-5">
                  <Button asChild size="sm">
                    <a
                      href={site.links.appointment}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book a visit
                      <ArrowUpRight aria-hidden="true" className="size-3.5" />
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <a
                      href={site.links.payOnline}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Pay online
                    </a>
                  </Button>
                  <div className="ml-auto flex items-center gap-1.5">
                    <a
                      href={site.links.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Midtown Dental on Facebook"
                      className="flex size-9 items-center justify-center rounded-full border border-line text-sage transition-colors hover:border-forest hover:text-forest"
                    >
                      <FacebookIcon className="size-4" />
                    </a>
                    <a
                      href={site.links.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Midtown Dental on Instagram"
                      className="flex size-9 items-center justify-center rounded-full border border-line text-sage transition-colors hover:border-forest hover:text-forest"
                    >
                      <InstagramIcon className="size-4" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <HoursPanel />
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <div className="rounded-panel border border-line bg-cream p-6 shadow-soft sm:p-8 lg:p-10">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-sage-pale text-forest">
                  <Clock aria-hidden="true" className="size-4" />
                </span>
                <div>
                  <p className="text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-sage">
                    Send a message
                  </p>
                  <h2 className="heading-3 mt-1 text-ink">
                    How can we help?
                  </h2>
                </div>
              </div>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink/70">
                Share your question or request below. Submitting the form
                prepares an email draft in your email app — review it and send
                it when you are ready.
              </p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-page">
          <SectionHeading
            eyebrow="Find us"
            title="Directions"
            description="Midtown Dental Bismarck is located at 2000 N 12th St, Bismarck, ND 58501 — in the heart of Bismarck, serving the capital city and surrounding area."
            action={
              <Button asChild variant="outline">
                <a
                  href={site.links.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Google Maps
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
              </Button>
            }
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
            <Reveal>
              <MapPanel className="h-full" />
            </Reveal>
            <Reveal delay={0.1} className="flex">
              <figure className="flex w-full flex-col overflow-hidden rounded-panel border border-line bg-cream shadow-soft">
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/assets/images/waiting-room.jpg"
                    alt="Midtown Dental waiting room"
                    width={600}
                    height={400}
                    loading="eager"
                    sizes="(min-width: 1024px) 32vw, 100vw"
                    className="h-full w-full object-cover"
                  />
                </div>
                <figcaption className="flex flex-1 flex-col justify-center p-6">
                  <p className="text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-sage">
                    Midtown Dental Bismarck
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/75">
                    {site.address}
                  </p>
                  <a
                    href={site.links.directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-forest transition-colors hover:text-brass-deep"
                  >
                    Get directions
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </a>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <ReviewCTA />
      <CTABand
        eyebrow="We would love to meet you"
        title="Your first visit starts here."
        description="Request an appointment online or call the Bismarck office. Our team will help you find the right time."
      />
    </>
  );
}
