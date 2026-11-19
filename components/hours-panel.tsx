import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function HoursPanel({
  tone = "light",
  className,
  showContact = true,
}: {
  tone?: "light" | "dark";
  className?: string;
  showContact?: boolean;
}) {
  const dark = tone === "dark";

  return (
    <div
      className={cn(
        "rounded-card border p-6 sm:p-8",
        dark
          ? "border-cream/12 bg-cream/[0.055] text-cream backdrop-blur-md"
          : "border-line bg-cream text-ink shadow-soft",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <span
          className={cn(
            "flex size-10 items-center justify-center rounded-full",
            dark ? "bg-cream/10 text-brass-soft" : "bg-sage-pale text-forest",
          )}
        >
          <Clock aria-hidden="true" className="size-4" />
        </span>
        <h3 className={cn("heading-3", dark ? "text-cream" : "text-ink")}>
          Hours
        </h3>
      </div>
      <dl className="mt-6 divide-y divide-line/70">
        {site.hours.map((row) => (
          <div
            key={row.days}
            className={cn(
              "flex items-baseline justify-between gap-4 py-3 text-sm",
              dark ? "divide-cream/10" : "",
            )}
          >
            <dt className={dark ? "text-cream/75" : "text-ink/70"}>
              {row.days}
            </dt>
            <dd
              className={cn(
                "font-semibold",
                dark ? "text-cream" : "text-ink",
              )}
            >
              {row.time}
            </dd>
          </div>
        ))}
      </dl>

      {showContact ? (
        <div
          className={cn(
            "mt-6 space-y-3 border-t pt-5 text-sm",
            dark ? "border-cream/10" : "border-line",
          )}
        >
          <a
            href={site.links.directions}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-start gap-2.5 transition-colors",
              dark
                ? "text-cream/65 hover:text-cream"
                : "text-ink/65 hover:text-forest",
            )}
          >
            <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-sage" />
            <span>{site.address}</span>
          </a>
          <a
            href={site.phoneHref}
            className={cn(
              "flex items-center gap-2.5 font-semibold transition-colors",
              dark
                ? "text-cream hover:text-brass-soft"
                : "text-forest hover:text-brass-deep",
            )}
          >
            <Phone aria-hidden="true" className="size-4 shrink-0 text-sage" />
            {site.phone}
          </a>
          <a
            href={site.emailHref}
            className={cn(
              "flex items-center gap-2.5 break-all transition-colors",
              dark
                ? "text-cream/65 hover:text-cream"
                : "text-ink/65 hover:text-forest",
            )}
          >
            <Mail aria-hidden="true" className="size-4 shrink-0 text-sage" />
            {site.email}
          </a>
        </div>
      ) : null}
    </div>
  );
}
