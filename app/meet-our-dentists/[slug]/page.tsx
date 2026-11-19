import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CalendarCheck,
  GraduationCap,
  MapPin,
  Phone,
  Quote,
} from "lucide-react";

import { CTABand } from "@/components/cta-band";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { doctors, site, type Doctor } from "@/lib/site";
import { cn } from "@/lib/utils";

type DoctorPageProps = {
  params: Promise<{ slug: string }>;
};

function getDoctor(slug: string): Doctor | undefined {
  return doctors.find((doctor) => doctor.slug === slug);
}

export function generateStaticParams() {
  return doctors.map((doctor) => ({ slug: doctor.slug }));
}

export async function generateMetadata({
  params,
}: DoctorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const doctor = getDoctor(slug);

  if (!doctor) {
    return { title: "Dentist" };
  }

  return {
    title: doctor.name,
    description: `Meet ${doctor.name} of Midtown Dental in Bismarck, North Dakota.`,
    alternates: { canonical: `/meet-our-dentists/${doctor.slug}` },
  };
}

export default async function DoctorPage({ params }: DoctorPageProps) {
  const { slug } = await params;
  const doctor = getDoctor(slug);

  if (!doctor) {
    notFound();
  }

  const otherDoctor = doctors.find((entry) => entry.slug !== doctor.slug);
  const imageFirst = doctor.slug === "dr-andrew-schmid";
  const isSchmid = doctor.slug === "dr-andrew-schmid";

  return (
    <>
      <section className="grain relative overflow-hidden bg-forest-deep text-cream">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-10 size-[30rem] rounded-full bg-sage/20 blur-[130px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-32 size-[28rem] rounded-full border border-brass/15"
        />

        <div className="container-page relative z-10 py-10 md:py-14">
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex flex-wrap items-center gap-2 text-[0.6875rem] font-semibold uppercase tracking-[0.16em]">
              <li>
                <Link
                  href="/"
                  className="text-cream/70 transition-colors hover:text-cream"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-cream/25">
                /
              </li>
              <li>
                <Link
                  href="/meet-our-dentists"
                  className="text-cream/70 transition-colors hover:text-cream"
                >
                  Meet Our Dentists
                </Link>
              </li>
              <li aria-hidden="true" className="text-cream/25">
                /
              </li>
              <li aria-current="page" className="text-cream/85">
                {doctor.name}
              </li>
            </ol>
          </nav>

          <div
            className={cn(
              "grid items-center gap-10 lg:grid-cols-2 lg:gap-16",
            )}
          >
            <Reveal className={imageFirst ? "lg:order-1" : "lg:order-2"}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div
                  aria-hidden="true"
                  className="absolute -inset-4 rounded-[2.5rem] border border-brass/20"
                />
                <figure className="relative overflow-hidden rounded-panel border border-cream/15 shadow-lift">
                  <div className="relative aspect-[4/4.6]">
                    <Image
                      src={doctor.image}
                      alt={doctor.imageAlt}
                      fill
                      priority
                      sizes="(min-width: 1024px) 44vw, 90vw"
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/55 via-transparent to-transparent" />
                    <figcaption className="absolute bottom-5 left-5 rounded-full border border-cream/25 bg-forest-deep/45 px-3.5 py-2 text-[0.625rem] font-bold uppercase tracking-[0.16em] text-cream/90 backdrop-blur-md">
                      Midtown Dental · Bismarck
                    </figcaption>
                  </div>
                </figure>
              </div>
            </Reveal>

            <Reveal
              delay={0.08}
              className={imageFirst ? "lg:order-2" : "lg:order-1"}
            >
              <Link
                href="/meet-our-dentists"
                className="inline-flex items-center gap-2 text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-cream/70 transition-colors hover:text-cream"
              >
                <ArrowLeft aria-hidden="true" className="size-3.5" />
                All dentists
              </Link>
              <p className="eyebrow mt-7 text-brass-soft">Your dentist</p>
              <h1 className="display-l mt-5 text-cream">{doctor.name}</h1>
              <p className="mt-3 text-[0.6875rem] font-bold uppercase tracking-[0.18em] text-brass-soft">
                {doctor.role}
              </p>
              <p className="lead mt-6 max-w-xl text-cream/75">{doctor.intro}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="light">
                  <a
                    href={site.links.appointment}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CalendarCheck aria-hidden="true" className="size-4" />
                    Book a visit
                  </a>
                </Button>
                <Button asChild variant="glass">
                  <a href={site.phoneHref}>
                    <Phone aria-hidden="true" className="size-4" />
                    {site.phone}
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad bg-bone">
        <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow text-sage">Biography</p>
              <h2 className="heading-2 mt-4 text-ink">
                About {doctor.name}
              </h2>
              <div className="prose-copy mt-6 text-[1.0625rem] leading-relaxed text-ink/80">
                {doctor.bio.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-14">
              <div className="rounded-panel border border-line bg-cream p-6 shadow-soft sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-sage-pale text-forest">
                    <GraduationCap aria-hidden="true" className="size-4" />
                  </span>
                  <h2 className="heading-2 text-ink">Education</h2>
                </div>
                <ol className="mt-6 divide-y divide-line">
                  {doctor.education.map((entry, index) => (
                    <li
                      key={entry.school}
                      className="flex gap-5 py-5 first:pt-2 last:pb-1"
                    >
                      <span className="font-display text-xl leading-none text-brass-deep">
                        0{index + 1}
                      </span>
                      <div>
                        <p className="font-semibold text-ink">{entry.school}</p>
                        <p className="mt-1 text-sm text-ink/70">
                          {entry.detail}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            {isSchmid && doctor.memberships ? (
              <Reveal className="mt-14">
                <p className="eyebrow text-sage">In the community</p>
                <h2 className="heading-2 mt-4 text-ink">
                  Community &amp; Memberships
                </h2>
                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {doctor.memberships.map((membership) => (
                    <li
                      key={membership}
                      className="rounded-full border border-line bg-cream px-4 py-2.5 text-[0.8125rem] font-semibold text-ink/80 shadow-sm"
                    >
                      {membership}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ) : null}

            {!isSchmid ? (
              <Reveal className="mt-14">
                <p className="eyebrow text-sage">How she practices</p>
                <h2 className="heading-2 mt-4 text-ink">Care Philosophy</h2>
                <div className="relative mt-6 overflow-hidden rounded-panel border border-line bg-forest-deep p-7 text-cream shadow-lift sm:p-9">
                  <Quote
                    aria-hidden="true"
                    className="size-8 text-brass-soft/70"
                  />
                  <blockquote className="mt-4">
                    <p className="font-display text-2xl italic leading-snug tracking-tight text-cream sm:text-3xl">
                      “{doctor.quote ?? doctor.intro}”
                    </p>
                  </blockquote>
                  <p className="mt-5 text-sm font-semibold text-brass-soft">
                    {doctor.name}
                  </p>
                </div>
              </Reveal>
            ) : null}

            <Reveal className="mt-14">
              <div className="grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-center">
                <div>
                  <p className="eyebrow text-sage">Beyond the practice</p>
                  <h2 className="heading-2 mt-4 text-ink">
                    Outside the Office
                  </h2>
                  <p className="mt-5 text-[1.0625rem] leading-relaxed text-ink/80">
                    {doctor.personal}
                  </p>
                </div>
                <figure className="overflow-hidden rounded-panel border border-line bg-cream shadow-soft">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/assets/images/team-together.jpg"
                      alt="The Midtown Dental team together in Bismarck"
                      fill
                      loading="eager"
                      sizes="(min-width: 768px) 30vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </figure>
              </div>
            </Reveal>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-panel border border-line bg-cream p-6 shadow-soft">
              <p className="eyebrow text-sage">Book a visit</p>
              <p className="mt-4 text-sm leading-relaxed text-ink/75">
                Request an appointment online, or call our Bismarck office
                during business hours.
              </p>
              <Button asChild className="mt-5 w-full">
                <a
                  href={site.links.appointment}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CalendarCheck aria-hidden="true" className="size-4" />
                  Request appointment
                </a>
              </Button>
              <a
                href={site.phoneHref}
                className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-forest transition-colors hover:text-brass-deep"
              >
                <Phone aria-hidden="true" className="size-4" />
                {site.phone}
              </a>
              <a
                href={site.links.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-start gap-2.5 border-t border-line pt-5 text-sm leading-relaxed text-ink/70 transition-colors hover:text-forest"
              >
                <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-sage" />
                {site.address}
              </a>
            </div>

            {otherDoctor ? (
              <div className="mt-5 rounded-panel border border-line bg-sand/50 p-5">
                <p className="text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-sage">
                  Also at Midtown
                </p>
                <Link
                  href={`/meet-our-dentists/${otherDoctor.slug}`}
                  className="group mt-3 flex items-center gap-3"
                >
                  <span className="relative size-12 shrink-0 overflow-hidden rounded-full border border-line">
                    <Image
                      src={otherDoctor.image}
                      alt={otherDoctor.imageAlt}
                      fill
                      loading="eager"
                      sizes="48px"
                      className="object-cover object-top"
                    />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-ink group-hover:text-forest">
                      {otherDoctor.name}
                    </span>
                    <span className="mt-0.5 inline-flex items-center gap-1 text-[0.75rem] font-semibold text-sage">
                      View profile
                      <ArrowUpRight aria-hidden="true" className="size-3" />
                    </span>
                  </span>
                </Link>
              </div>
            ) : null}
          </aside>
        </div>
      </section>

      <CTABand
        eyebrow="Your next visit"
        title={`Ready to meet ${doctor.name}?`}
        description="Request an appointment online or call our Bismarck office during business hours."
      />
    </>
  );
}
