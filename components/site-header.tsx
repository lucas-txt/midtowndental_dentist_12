"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  CalendarCheck,
  Menu,
  Phone,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Magnetic } from "@/components/motion/magnetic";
import { Button } from "@/components/ui/button";
import { navLinks, site } from "@/lib/site";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === "/meet-our-dentists") {
    return pathname.startsWith("/meet-our-dentists");
  }
  return pathname === href;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001,
  });

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="relative z-30 bg-forest-deep text-cream">
        <div className="container-wide flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-2.5 text-[0.6875rem] font-semibold uppercase tracking-[0.16em]">
          <p className="flex items-center gap-2.5 text-cream/75">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-brass-soft opacity-70 motion-reduce:animate-none" />
              <span className="relative inline-flex size-1.5 rounded-full bg-brass-soft" />
            </span>
            Now welcoming new patients in Bismarck, ND
          </p>
          <div className="flex items-center gap-5">
            <a
              href={site.phoneHref}
              className="hidden items-center gap-1.5 text-cream/75 transition-colors hover:text-cream sm:flex"
            >
              <Phone aria-hidden="true" className="size-3" />
              {site.phone}
            </a>
            <a
              href={site.links.payOnline}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-cream/75 transition-colors hover:text-cream"
            >
              Pay online
              <ArrowUpRight aria-hidden="true" className="size-3" />
            </a>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-40 border-b transition-[background-color,box-shadow,border-color] duration-300",
          scrolled
            ? "border-line/80 bg-bone/88 shadow-[0_12px_40px_-28px_rgba(18,33,25,0.45)] backdrop-blur-xl"
            : "border-transparent bg-bone/70 backdrop-blur-md",
        )}
      >
        <div className="container-wide flex h-[4.5rem] items-center justify-between gap-6 md:h-20">
          <Link
            href="/"
            aria-label="Midtown Dental — home"
            className="relative z-10 shrink-0 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass"
          >
            <Image
              src="/assets/images/logo.png"
              alt="Midtown Dental"
              width={180}
              height={106}
              priority
              className="h-10 w-auto md:h-11"
            />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 xl:flex">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-[0.8125rem] font-semibold tracking-tight transition-colors",
                    active
                      ? "bg-sage-pale/80 text-forest"
                      : "text-ink/65 hover:bg-sage-pale/45 hover:text-forest",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={site.phoneHref}
              className="hidden items-center gap-2 rounded-full px-3 py-2 text-[0.8125rem] font-semibold text-ink/70 transition-colors hover:text-forest 2xl:flex"
            >
              <Phone aria-hidden="true" className="size-3.5" />
              {site.phone}
            </a>
            <Magnetic className="hidden sm:inline-flex">
              <Button asChild size="sm" className="pr-4">
                <a
                  href={site.links.appointment}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CalendarCheck aria-hidden="true" className="size-4" />
                  Book a visit
                </a>
              </Button>
            </Magnetic>

            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <button
                  type="button"
                  aria-label="Open navigation menu"
                  className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-line bg-cream text-forest transition-colors hover:bg-sage-pale focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brass xl:hidden"
                >
                  <Menu aria-hidden="true" className="size-5" />
                </button>
              </DialogTrigger>
              <AnimatePresence>
                {open ? (
                  <DialogPortal forceMount>
                    <DialogOverlay asChild forceMount>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    </DialogOverlay>
                    <DialogContent asChild forceMount>
                      <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 30,
                        }}
                        className="overflow-y-auto"
                      >
                        <DialogTitle className="sr-only">
                          Site navigation
                        </DialogTitle>
                        <DialogDescription className="sr-only">
                          Primary navigation for Midtown Dental.
                        </DialogDescription>
                        <div className="container-page flex min-h-full flex-col pb-10 pt-24">
                          <nav
                            aria-label="Mobile"
                            className="flex flex-col border-t border-cream/10"
                          >
                            {navLinks.map((link, index) => (
                              <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                aria-current={
                                  isActive(pathname, link.href)
                                    ? "page"
                                    : undefined
                                }
                                className="group flex items-baseline justify-between gap-6 border-b border-cream/10 py-5"
                              >
                                <span className="flex items-baseline gap-4">
                                  <span className="font-sans text-[0.625rem] font-bold tracking-[0.18em] text-brass-soft">
                                    0{index + 1}
                                  </span>
                                  <span className="font-display text-[1.75rem] leading-none tracking-tight text-cream transition-colors group-hover:text-brass-soft sm:text-3xl">
                                    {link.label}
                                  </span>
                                </span>
                                <ArrowUpRight
                                  aria-hidden="true"
                                  className="size-4 shrink-0 text-cream/35 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brass-soft"
                                />
                              </Link>
                            ))}
                          </nav>

                          <div className="mt-10 grid gap-6 text-sm text-cream/65 sm:grid-cols-2">
                            <div>
                              <p className="eyebrow mb-3 text-brass-soft">
                                Visit
                              </p>
                              <a
                                href={site.links.directions}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block leading-relaxed transition-colors hover:text-cream"
                              >
                                {site.addressLines[0]}
                                <br />
                                {site.addressLines[1]}
                              </a>
                              <a
                                href={site.phoneHref}
                                className="mt-3 block text-lg font-semibold text-cream transition-colors hover:text-brass-soft"
                              >
                                {site.phone}
                              </a>
                              <a
                                href={site.emailHref}
                                className="mt-1 block transition-colors hover:text-cream"
                              >
                                {site.email}
                              </a>
                            </div>
                            <div>
                              <p className="eyebrow mb-3 text-brass-soft">
                                Hours
                              </p>
                              <dl className="space-y-1.5">
                                {site.hours.map((row) => (
                                  <div
                                    key={row.days}
                                    className="flex justify-between gap-3"
                                  >
                                    <dt>{row.days}</dt>
                                    <dd className="text-cream/85">
                                      {row.time}
                                    </dd>
                                  </div>
                                ))}
                              </dl>
                            </div>
                          </div>

                          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                            <Button asChild variant="light" size="lg">
                              <a
                                href={site.links.appointment}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <CalendarCheck
                                  aria-hidden="true"
                                  className="size-4"
                                />
                                Request an appointment
                              </a>
                            </Button>
                            <Button asChild variant="glass" size="lg">
                              <Link href="/contact-us" onClick={() => setOpen(false)}>
                                Contact us
                              </Link>
                            </Button>
                          </div>

                          <p className="mt-auto pt-10 text-[0.6875rem] uppercase tracking-[0.18em] text-cream/35">
                            {site.copyright} · Bismarck, ND
                          </p>
                        </div>
                      </motion.div>
                    </DialogContent>
                  </DialogPortal>
                ) : null}
              </AnimatePresence>
            </Dialog>
          </div>
        </div>
        <motion.div
          aria-hidden="true"
          style={{ scaleX: progress }}
          className="absolute inset-x-0 bottom-0 h-px origin-left bg-brass/80"
        />
      </header>
    </>
  );
}
