import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Quote } from "lucide-react";

import { CTABand } from "@/components/cta-band";
import { Gallery } from "@/components/gallery";
import { HoursPanel } from "@/components/hours-panel";
import { MapPanel } from "@/components/map-panel";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/page-hero";
import { ReviewCTA } from "@/components/review-cta";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { ValuesBento } from "@/components/values-bento";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: site.description,
  alternates: { canonical: "/about-us" },
};

const galleryImages = [
  {
    src: "/assets/images/team-together.jpg",
    alt: "The Midtown Dental team together in Bismarck, North Dakota",
    label: "Our team",
  },
  {
    src: "/assets/images/waiting-room.jpg",
    alt: "The welcoming Midtown Dental waiting room",
    label: "Waiting room",
  },
  {
    src: "/assets/images/patient-care.jpg",
    alt: "A calm, welcoming moment at Midtown Dental",
    label: "Patient care",
  },
  {
    src: "/assets/images/friendly-staff.jpg",
    alt: "The friendly staff at Midtown Dental",
    label: "Friendly staff",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our practice"
        title={
          <>
            About <span className="italic text-sage">Us</span>
          </>
        }
        description="Located in the heart of Bismarck, Midtown Dental is proud to serve the capital city and the surrounding area. We’re passionate about delivering quality dental care and enhancing this wonderful community we call home."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
        aside={
          <figure className="relative mx-auto max-w-md lg:mx-0">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[2.25rem] border border-forest/10"
            />
            <div className="relative overflow-hidden rounded-panel border border-line bg-cream shadow-lift">
              <div className="relative aspect-[5/5.4]">
                <Image
                  src="/assets/images/team-together.jpg"
                  alt="The Midtown Dental team together in Bismarck, North Dakota"
                  fill
                  priority
                  sizes="(min-width: 1024px) 44vw, 90vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/70 via-transparent to-transparent" />
                <figcaption className="absolute left-5 top-5 rounded-full border border-cream/30 bg-forest-deep/45 px-3.5 py-2 text-[0.625rem] font-bold uppercase tracking-[0.18em] text-cream backdrop-blur-md">
                  Bismarck, North Dakota
                </figcaption>
              </div>
            </div>
            <div className="glass-light absolute -bottom-6 left-4 right-4 flex items-center gap-3 rounded-2xl p-4 shadow-soft sm:left-6 sm:right-auto sm:max-w-xs">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-forest text-cream">
                <MapPin aria-hidden="true" className="size-4" />
              </span>
              <div>
                <p className="text-[0.625rem] font-bold uppercase tracking-[0.16em] text-sage">
                  Find us in the heart of
                </p>
                <p className="text-sm font-semibold text-ink">
                  Bismarck, North Dakota
                </p>
              </div>
            </div>
          </figure>
        }
      />

      <section className="bg-cream py-16 md:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow text-sage">Our story</p>
            <h2 className="heading-2 mt-4 text-ink">
              Rooted in{" "}
              <span className="italic text-sage">Bismarck.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
            <div className="prose-copy text-[1.0625rem] leading-relaxed text-ink/75">
              <p>
                Midtown Dental Bismarck is located at 2000 N 12th St, in the
                heart of Bismarck, North Dakota. Our practice brings together
                Dr. Andrew Schmid and Dr. Madison Morrell — both Bismarck
                natives — and a team committed to friendly, prompt care.
              </p>
              <p>
                We offer five pillars of care: routine dental care, periodontal
                care, cosmetic dentistry, restorative dentistry and pediatric
                dentistry. From pediatric to preventative care and everything in
                between, Midtown Dental has you covered.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:min-w-[12rem]">
              <div className="rounded-2xl border border-line bg-bone px-5 py-4">
                <p className="font-display text-3xl text-forest">5</p>
                <p className="mt-1 text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-sage">
                  service pillars
                </p>
              </div>
              <div className="rounded-2xl border border-line bg-bone px-5 py-4">
                <p className="font-display text-3xl text-forest">2</p>
                <p className="mt-1 text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-sage">
                  Bismarck dentists
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-bone">
        <div className="container-page">
          <SectionHeading
            eyebrow="What we stand for"
            title={
              <>
                The details that make a{" "}
                <span className="italic text-sage">difference.</span>
              </>
            }
            description="Patient care, modern technology and a friendly team — the three constants behind every visit."
            action={
              <Button asChild variant="outline">
                <Link href="/meet-our-dentists">
                  Meet the dentists
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

      <section className="grain relative overflow-hidden bg-forest-deep py-20 text-cream md:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-0 size-96 rounded-full bg-sage/20 blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 bottom-0 size-80 rounded-full bg-brass/10 blur-[100px]"
        />
        <div className="container-page relative z-10">
          <Reveal className="mx-auto max-w-4xl text-center">
            <Quote
              aria-hidden="true"
              className="mx-auto size-10 text-brass-soft/70"
            />
            <blockquote className="mt-7">
              <p className="font-display text-[clamp(1.9rem,4.2vw,3.6rem)] italic leading-[1.1] tracking-tight text-cream">
                “We will treat you with dignity, care, respect, kindness and
                understanding.”
              </p>
            </blockquote>
            <p className="mt-7 text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-brass-soft">
              The Midtown Dental team
            </p>
            <p className="mx-auto mt-7 max-w-2xl text-[0.9375rem] leading-relaxed text-cream/75">
              With every patient, we take the time to explain the procedures
              being performed so you can feel confident in your care. Our high
              level patient care starts with a warm and welcoming environment.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-page">
          <SectionHeading
            eyebrow="A look inside"
            title={
              <>
                Warm, modern and{" "}
                <span className="italic text-sage">welcoming.</span>
              </>
            }
            description="A glimpse of the people, spaces and care you will find at our Bismarck office."
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
          <Reveal className="mt-12">
            <Gallery images={galleryImages} />
          </Reveal>
          <p className="mt-5 text-sm text-ink/70">
            Select any photo to open the gallery. Use the arrow keys to move
            between images and Escape to close.
          </p>
        </div>
      </section>

      <ReviewCTA />

      <section className="section-pad bg-bone">
        <div className="container-page">
          <SectionHeading
            eyebrow="Visit Midtown"
            title="Directions"
            description="Midtown Dental Bismarck is located at 2000 N 12th St, Bismarck, ND 58501 — in the heart of Bismarck, serving the capital city and surrounding area."
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
            <Reveal delay={0.1}>
              <HoursPanel />
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
