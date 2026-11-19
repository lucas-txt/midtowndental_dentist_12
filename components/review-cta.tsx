import { ArrowUpRight, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export function ReviewCTA() {
  return (
    <section className="bg-bone py-6 md:py-10">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-panel border border-line bg-sage-pale/60 px-6 py-10 sm:px-10 md:flex md:items-center md:justify-between md:gap-10 md:py-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-16 size-56 rounded-full border border-forest/10"
          />
          <div className="relative flex items-start gap-5">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-forest/10 bg-cream font-display text-3xl text-forest shadow-sm">
              G
            </span>
            <div>
              <p className="flex items-center gap-1.5 text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-sage">
                <Star aria-hidden="true" className="size-3.5 fill-brass text-brass" />
                Google reviews
              </p>
              <h2 className="heading-3 mt-2 text-forest">Rate us on Google</h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/65">
                Your review helps your Bismarck neighbors find trusted dental
                care. Thank you for taking a moment to share your experience.
              </p>
            </div>
          </div>
          <Button asChild variant="primary" className="relative mt-7 shrink-0 md:mt-0">
            <a
              href={site.links.googleReviews}
              target="_blank"
              rel="noopener noreferrer"
            >
              Leave a review
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
