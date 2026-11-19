import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="grain relative overflow-hidden bg-forest-deep py-28 text-cream md:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-0 size-[32rem] rounded-full bg-sage/20 blur-[120px]"
      />
      <div className="container-page relative z-10 grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow text-brass-soft">404 — Page not found</p>
          <h1 className="display-l mt-6">
            This page took a different{" "}
            <em className="text-brass-soft">turn.</em>
          </h1>
          <p className="lead mt-6 max-w-lg text-cream/70">
            The page you are looking for is not here, but your Midtown Dental
            team is. Head back home or give us a call at {site.phone}.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild variant="light" size="lg">
              <Link href="/">
                <Home aria-hidden="true" className="size-4" />
                Back home
              </Link>
            </Button>
            <Button asChild variant="glass" size="lg">
              <Link href="/contact-us">
                Contact us
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          <div className="overflow-hidden rounded-panel border border-cream/15 shadow-lift">
            <Image
              src="/assets/images/waiting-room.jpg"
              alt="The Midtown Dental waiting room in Bismarck"
              width={600}
              height={400}
              loading="eager"
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="glass-dark absolute -bottom-6 left-5 rounded-2xl px-5 py-4 text-sm text-cream/80">
            <p className="font-semibold text-cream">Midtown Dental</p>
            <p className="mt-1 text-cream/75">{site.address}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
