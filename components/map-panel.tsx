import { ArrowUpRight, MapPin, Navigation } from "lucide-react";

import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function MapPanel({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-panel border border-line bg-sand shadow-soft",
        className,
      )}
    >
      <svg
        viewBox="0 0 640 440"
        role="img"
        aria-label="Illustrated map showing Midtown Dental at 2000 N 12th St in Bismarck, North Dakota"
        className="h-auto w-full"
      >
        <rect width="640" height="440" fill="var(--color-sand)" />
        <path d="M-20 84 H660" stroke="var(--color-map-line)" strokeWidth="1.2" />
        <path d="M-20 196 H660" stroke="var(--color-map-line)" strokeWidth="1.2" />
        <path d="M-20 320 H660" stroke="var(--color-map-line)" strokeWidth="1.2" />
        <path d="M96 -20 V460" stroke="var(--color-map-line)" strokeWidth="1.2" />
        <path d="M236 -20 V460" stroke="var(--color-map-line)" strokeWidth="1.2" />
        <path d="M430 -20 V460" stroke="var(--color-map-line)" strokeWidth="1.2" />
        <path d="M556 -20 V460" stroke="var(--color-map-line)" strokeWidth="1.2" />

        <path
          d="M-20 274 C110 262 170 238 250 246 C340 254 380 210 470 206 C540 203 600 218 660 204"
          fill="none"
          stroke="var(--color-map-river)"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M236 -20 V460"
          fill="none"
          stroke="var(--color-bone)"
          strokeWidth="18"
        />
        <path
          d="M236 -20 V460"
          fill="none"
          stroke="var(--color-map-road)"
          strokeWidth="1.2"
          strokeDasharray="10 12"
        />
        <path
          d="M-20 196 H660"
          fill="none"
          stroke="var(--color-bone)"
          strokeWidth="14"
        />
        <path
          d="M-20 196 H660"
          fill="none"
          stroke="var(--color-map-road)"
          strokeWidth="1"
          strokeDasharray="8 12"
        />

        <g fill="var(--color-map-block)">
          <rect x="36" y="32" width="38" height="26" rx="5" />
          <rect x="130" y="32" width="58" height="20" rx="5" />
          <rect x="290" y="40" width="76" height="18" rx="5" />
          <rect x="480" y="36" width="48" height="22" rx="5" />
          <rect x="36" y="120" width="54" height="22" rx="5" />
          <rect x="290" y="118" width="82" height="24" rx="5" />
          <rect x="472" y="122" width="60" height="22" rx="5" />
          <rect x="36" y="330" width="44" height="30" rx="5" />
          <rect x="290" y="330" width="68" height="24" rx="5" />
          <rect x="472" y="334" width="54" height="28" rx="5" />
          <rect x="36" y="386" width="64" height="20" rx="5" />
          <rect x="290" y="388" width="48" height="22" rx="5" />
          <rect x="472" y="390" width="70" height="20" rx="5" />
        </g>
        <g fill="var(--color-map-block-deep)" fontSize="10" fontFamily="Manrope, sans-serif" letterSpacing="1.4">
          <text x="352" y="112">BISMARCK</text>
          <text x="250" y="178" transform="rotate(-90 250 178)" />
        </g>
        <text
          x="222"
          y="150"
          fill="var(--color-map-label)"
          fontSize="10"
          fontFamily="Manrope, sans-serif"
          letterSpacing="2"
          transform="rotate(-90 222 150)"
        >
          N 12TH ST
        </text>

        <circle cx="420" cy="258" r="58" fill="var(--color-sage)" opacity="0.08" />
        <circle cx="420" cy="258" r="34" fill="var(--color-sage)" opacity="0.12" />
        <circle cx="420" cy="258" r="7" fill="var(--color-brass)" />
      </svg>

      <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4 rounded-2xl border border-line bg-cream/90 p-4 backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:p-5">
        <div className="flex items-start gap-3">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-forest text-cream">
            <MapPin aria-hidden="true" className="size-4" />
          </span>
          <div>
            <p className="text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-sage">
              Midtown Dental
            </p>
            <p className="mt-1 text-sm leading-snug text-ink">
              2000 N 12th St
              <br />
              Bismarck, ND 58501
            </p>
          </div>
        </div>
        <a
          href={site.links.directions}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-forest/20 px-3 py-2 text-[0.75rem] font-semibold text-forest transition-colors hover:bg-forest hover:text-cream"
        >
          <Navigation aria-hidden="true" className="size-3.5" />
          <span className="hidden sm:inline">Directions</span>
          <ArrowUpRight aria-hidden="true" className="size-3.5" />
        </a>
      </div>
    </div>
  );
}
