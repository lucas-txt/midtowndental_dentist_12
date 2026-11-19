import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, GraduationCap } from "lucide-react";

import { CTABand } from "@/components/cta-band";
import { Reveal } from "@/components/motion/reveal";
import { PageHero } from "@/components/page-hero";
import { ReviewCTA } from "@/components/review-cta";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { doctors, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Meet Our Dentists",
  description: site.description,
  alternates: { canonical: "/meet-our-dentists" },
};

export default function DentistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Your dental team"
        title={
          <>
            Meet Our{" "}
            <span className="italic text-sage">Dentists</span>
          </>
        }
        description="Located in the heart of Bismarck, Midtown Dental is proud to serve the capital city and the surrounding area. We’re passionate about delivering quality dental care and enhancing this wonderful community we call home."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Meet Our Dentists" },
        ]}
        aside={
          <div className="mx-auto grid max-w-md grid-cols-2 gap-3 sm:gap-4 lg:max-w-none">
            {doctors.map((doctor, index) => (
              <figure
                key={doctor.slug}
                className={cn(
                  "relative overflow-hidden rounded-panel border border-line bg-cream shadow-lift",
                  index === 1 ? "translate-y-8" : "",
                )}
              >
                <div className="relative aspect-[4/5.2]">
                  <Image
                    src={doctor.image}
                    alt={doctor.imageAlt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 22vw, 45vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/65 via-transparent to-transparent" />
                  <figcaption className="absolute inset-x-3 bottom-3 text-center">
                    <p className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-cream">
                      {doctor.name}
                    </p>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        }
      />

      <section className="section-pad bg-cream">
        <div className="container-page">
          <SectionHeading
            eyebrow="Two dentists, one practice"
            title={
              <>
                The people behind{" "}
                <span className="italic text-sage">your care.</span>
              </>
            }
            description="Both dentists are Bismarck natives who chose to build their careers close to home. Read their stories, experience and approach to care."
          />

          <div className="mt-14 space-y-16 md:mt-20 md:space-y-24">
            {doctors.map((doctor, index) => {
              const reversed = index % 2 === 1;
              return (
                <article
                  key={doctor.slug}
                  className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14"
                >
                  <Reveal
                    className={cn(
                      "relative",
                      reversed ? "lg:order-2" : "lg:order-1",
                    )}
                  >
                    <figure className="relative overflow-hidden rounded-panel border border-line bg-cream shadow-lift">
                      <div className="relative aspect-[4/4.4]">
                        <Image
                          src={doctor.image}
                          alt={doctor.imageAlt}
                          fill
                          loading="eager"
                          sizes="(min-width: 1024px) 40vw, 100vw"
                          className="object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/45 via-transparent to-transparent" />
                      </div>
                    </figure>
                    <div className="absolute -bottom-5 right-4 rounded-full border border-line bg-cream px-4 py-2.5 text-[0.625rem] font-bold uppercase tracking-[0.18em] text-sage shadow-soft sm:right-6">
                      Bismarck, ND
                    </div>
                  </Reveal>

                  <Reveal
                    delay={0.08}
                    className={cn(reversed ? "lg:order-1" : "lg:order-2")}
                  >
                    <p className="eyebrow text-sage">Dentist</p>
                    <h2 className="heading-2 mt-4 text-ink">{doctor.name}</h2>
                    <p className="lead mt-4 text-ink/75">{doctor.intro}</p>
                    <div className="prose-copy mt-5 text-[0.9375rem] leading-relaxed text-ink/75">
                      {doctor.bio.map((paragraph) => (
                        <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                      ))}
                    </div>

                    <div className="mt-7 rounded-2xl border border-line bg-bone/70 p-5">
                      <p className="flex items-center gap-2 text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-sage">
                        <GraduationCap aria-hidden="true" className="size-3.5" />
                        Education
                      </p>
                      <ul className="mt-3 space-y-2 text-sm text-ink/80">
                        {doctor.education.map((entry) => (
                          <li
                            key={entry.school}
                            className="flex flex-wrap items-baseline gap-x-2"
                          >
                            <span className="font-semibold text-ink">
                              {entry.school}
                            </span>
                            <span className="text-ink/75">— {entry.detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-7 flex flex-wrap items-center gap-4">
                      <Button asChild>
                        <Link href={`/meet-our-dentists/${doctor.slug}`}>
                          Read full profile
                          <ArrowUpRight aria-hidden="true" className="size-4" />
                        </Link>
                      </Button>
                      <a
                        href={site.links.appointment}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-forest transition-colors hover:text-brass-deep"
                      >
                        Book a visit
                        <ArrowRight aria-hidden="true" className="size-4" />
                      </a>
                    </div>
                  </Reveal>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="grain relative overflow-hidden bg-forest-deep py-20 text-cream md:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-0 size-[28rem] rounded-full bg-sage/20 blur-[120px]"
        />
        <div className="container-page relative z-10 grid items-center gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow text-brass-soft">Care philosophy</p>
            <h2 className="heading-2 mt-4 max-w-xl text-cream">
              Confidence starts with{" "}
              <span className="italic text-brass-soft">understanding.</span>
            </h2>
            <p className="lead mt-5 max-w-xl text-cream/75">
              With every patient, we take the time to explain the procedures
              being performed so you can feel confident in your care. That
              approach begins with a warm and welcoming environment.
            </p>
            <div className="mt-8">
              <Button asChild variant="light">
                <a
                  href={site.links.appointment}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request an appointment
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <figure className="relative overflow-hidden rounded-panel border border-cream/15 bg-cream/5 shadow-lift">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/assets/images/team-together.jpg"
                  alt="The Midtown Dental team together"
                  fill
                  loading="eager"
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/55 to-transparent" />
              </div>
              <figcaption className="px-6 py-5 text-sm text-cream/80">
                The Midtown Dental team · Bismarck, North Dakota
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <ReviewCTA />
      <CTABand
        eyebrow="Book a visit"
        title="Come meet your next dental team."
        description="Request an appointment online or call the Bismarck office. We look forward to welcoming you."
      />
    </>
  );
}
