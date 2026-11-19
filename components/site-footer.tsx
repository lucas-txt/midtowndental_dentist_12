import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { FacebookIcon, InstagramIcon } from "@/components/brand-icons";
import { Button } from "@/components/ui/button";
import { navLinks, services, site } from "@/lib/site";

const exploreLinks = navLinks.slice(0, 4);

export function SiteFooter() {
  return (
    <footer className="grain relative overflow-hidden bg-forest-deep text-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 size-[34rem] rounded-full bg-sage/20 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 size-[30rem] rounded-full bg-brass/10 blur-[120px]"
      />

      <div className="container-page relative z-10">
        <div className="grid gap-12 py-16 md:grid-cols-2 md:py-20 lg:grid-cols-[1.35fr_0.65fr_0.75fr_1fr] lg:gap-10">
          <div>
            <Link
              href="/"
              aria-label="Midtown Dental — home"
              className="inline-flex rounded-lg bg-cream/95 p-3.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass-soft"
            >
              <Image
                src="/assets/images/logo.png"
                alt="Midtown Dental"
                width={180}
                height={106}
                loading="eager"
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream/75">
              {site.tagline}. Quality dental care in the heart of Bismarck.
            </p>
            <div className="mt-6 flex items-center gap-2.5">
              <a
                href={site.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Midtown Dental on Facebook"
                className="flex size-10 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-cream/40 hover:bg-cream/10 hover:text-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass-soft"
              >
                <FacebookIcon className="size-4" />
              </a>
              <a
                href={site.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Midtown Dental on Instagram"
                className="flex size-10 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-cream/40 hover:bg-cream/10 hover:text-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass-soft"
              >
                <InstagramIcon className="size-4" />
              </a>
              <a
                href={site.links.payOnline}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pay your bill online"
                className="flex size-10 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-cream/40 hover:bg-cream/10 hover:text-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass-soft"
              >
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer — explore">
            <p className="text-[0.6875rem] font-bold uppercase tracking-[0.18em] text-brass-soft">
              Explore
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/65 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer — services">
            <p className="text-[0.6875rem] font-bold uppercase tracking-[0.18em] text-brass-soft">
              Services
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-cream/65 transition-colors hover:text-cream"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[0.6875rem] font-bold uppercase tracking-[0.18em] text-brass-soft">
              Visit us
            </p>
            <address className="mt-5 space-y-3 text-sm not-italic text-cream/65">
              <a
                href={site.links.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2.5 transition-colors hover:text-cream"
              >
                <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-sage-soft" />
                <span>
                  {site.addressLines[0]}
                  <br />
                  {site.addressLines[1]}
                </span>
              </a>
              <a
                href={site.phoneHref}
                className="flex items-center gap-2.5 transition-colors hover:text-cream"
              >
                <Phone aria-hidden="true" className="size-4 shrink-0 text-sage-soft" />
                {site.phone}
              </a>
              <a
                href={site.emailHref}
                className="flex items-center gap-2.5 break-all transition-colors hover:text-cream"
              >
                <Mail aria-hidden="true" className="size-4 shrink-0 text-sage-soft" />
                {site.email}
              </a>
            </address>

            <div className="mt-6 border-t border-cream/10 pt-5">
              <p className="flex items-center gap-2 text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-cream/65">
                <Clock aria-hidden="true" className="size-3.5" />
                Hours
              </p>
              <dl className="mt-3 space-y-1.5 text-[0.8125rem] text-cream/65">
                {site.hours.map((row) => (
                  <div
                    key={row.days}
                    className="flex items-baseline justify-between gap-3"
                  >
                    <dt>{row.days}</dt>
                    <dd className="text-cream/85">{row.time}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <Button asChild variant="light" size="sm" className="mt-6">
              <a
                href={site.links.appointment}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a visit
              </a>
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-cream/10 py-7 text-[0.75rem] text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p>{site.copyright} · All rights reserved.</p>
          <p>
            Website Development by{" "}
            <a
              href={site.links.developer}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/75 underline decoration-cream/25 underline-offset-4 transition-colors hover:text-cream"
            >
              MINT Brand Marketing
            </a>
          </p>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="pointer-events-none select-none overflow-hidden whitespace-nowrap text-center font-display text-[22vw] leading-[0.68] text-cream/[0.035] lg:text-[17vw]"
      >
        Midtown
      </p>
    </footer>
  );
}
