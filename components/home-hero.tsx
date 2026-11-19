"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, CalendarCheck, MapPin, Phone } from "lucide-react";

import { Magnetic } from "@/components/motion/magnetic";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function HomeHero() {
  const imageWrap = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageWrap,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-2%", "6%"]);

  return (
    <section className="grain relative overflow-hidden bg-forest-deep text-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 size-[34rem] rounded-full bg-sage/20 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/3 size-[26rem] rounded-full bg-brass/10 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-56 size-[42rem] rounded-full border border-cream/[0.07]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-40 size-[31rem] rounded-full border border-brass/15"
      />

      <div className="container-wide relative z-10 grid items-center gap-14 pb-16 pt-14 md:pb-20 md:pt-20 lg:grid-cols-[1.04fr_0.96fr] lg:gap-16 lg:pb-28 lg:pt-24">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow text-brass-soft">
              Bismarck, North Dakota
            </p>
            <h1 className="display-xl mt-6 text-cream">
              Serving{" "}
              <span className="font-display italic text-brass-soft">
                Bismarck
              </span>{" "}
              and the surrounding community
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="lead mt-7 max-w-xl text-cream/75">
              Located in the heart of Bismarck, Midtown Dental is proud to serve
              the capital city and the surrounding area. We&rsquo;re passionate
              about delivering quality dental care and enhancing this wonderful
              community we call home.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Magnetic>
                <Button asChild variant="light" size="lg" className="w-full sm:w-auto">
                  <a
                    href={site.links.appointment}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CalendarCheck aria-hidden="true" className="size-4" />
                    Request an appointment
                  </a>
                </Button>
              </Magnetic>
              <Button asChild variant="glass" size="lg" className="w-full sm:w-auto">
                <Link href="/services">
                  Explore our services
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-cream/10 pt-6 text-sm">
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 font-semibold text-cream transition-colors hover:text-brass-soft"
              >
                <Phone aria-hidden="true" className="size-3.5 text-brass-soft" />
                {site.phone}
              </a>
              <span aria-hidden="true" className="hidden h-3 w-px bg-cream/20 sm:block" />
              <a
                href={site.links.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cream/75 transition-colors hover:text-cream"
              >
                <MapPin aria-hidden="true" className="size-3.5 text-brass-soft" />
                {site.address}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="relative">
          <div ref={imageWrap} className="relative mx-auto max-w-xl lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[2.25rem] border border-cream/10 sm:-inset-4"
            />
            <figure className="relative overflow-hidden rounded-panel border border-cream/15 bg-cream/5 shadow-lift">
              <div className="relative aspect-square sm:aspect-[5/5.4]">
                <motion.div
                  style={{ y: imageY }}
                  className="absolute inset-[-4%]"
                >
                  <Image
                    src="/assets/images/team-together.jpg"
                    alt="The Midtown Dental team together in Bismarck, North Dakota"
                    fill
                    priority
                    sizes="(min-width: 1024px) 46vw, (min-width: 640px) 80vw, 92vw"
                    className="object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/10 to-transparent" />
                <div className="absolute right-4 top-4 rounded-full border border-cream/25 bg-forest-deep/45 px-3.5 py-2 text-[0.625rem] font-bold uppercase tracking-[0.18em] text-cream/90 backdrop-blur-md">
                  Bismarck, ND
                </div>
                <figcaption className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 sm:bottom-6 sm:left-6 sm:right-6">
                  <p className="font-display text-2xl leading-tight text-cream sm:text-3xl">
                    Care that feels
                    <br />
                    <span className="italic text-brass-soft">like home.</span>
                  </p>
                  <span className="hidden text-right text-[0.625rem] font-bold uppercase leading-relaxed tracking-[0.16em] text-cream/75 sm:block">
                    Midtown
                    <br />
                    Dental
                  </span>
                </figcaption>
              </div>
            </figure>

            <div className="glass-dark absolute -bottom-7 left-4 right-4 rounded-2xl p-4 shadow-lift sm:left-6 sm:right-auto sm:max-w-[17rem] sm:p-5">
              <p className="text-[0.625rem] font-bold uppercase tracking-[0.18em] text-brass-soft">
                Visit the office
              </p>
              <p className="mt-2 text-sm leading-relaxed text-cream/85">
                2000 N 12th St
                <br />
                Bismarck, ND 58501
              </p>
              <a
                href={site.phoneHref}
                className="mt-2.5 inline-flex items-center gap-2 text-sm font-semibold text-cream transition-colors hover:text-brass-soft"
              >
                <Phone aria-hidden="true" className="size-3.5 text-brass-soft" />
                {site.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="relative z-10 border-t border-cream/10">
        <div className="container-wide flex flex-wrap items-center justify-between gap-4 py-5 text-[0.6875rem] font-bold uppercase tracking-[0.18em] text-cream/70">
          <span className="inline-flex items-center gap-2.5">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-brass-soft" />
            Family &amp; cosmetic dentistry
          </span>
          <span className="hidden h-3 w-px bg-cream/15 sm:block" />
          <span>Routine to restorative care</span>
          <span className="hidden h-3 w-px bg-cream/15 sm:block" />
          <span>Bismarck &amp; Mandan</span>
        </div>
      </div>
    </section>
  );
}
