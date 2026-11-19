import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

const stats = [
  { value: "5", label: "service pillars", detail: "Routine to restorative" },
  { value: "2", label: "Bismarck dentists", detail: "Dr. Schmid & Dr. Morrell" },
  { value: "4", label: "insurance providers", detail: "Including Delta Dental" },
  { value: "6", label: "ways to pay", detail: "Including CareCredit" },
];

export function StatsRow({ className }: { className?: string }) {
  return (
    <Reveal
      className={cn(
        "grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line lg:grid-cols-4",
        className,
      )}
    >
      {stats.map((stat) => (
        <div key={stat.label} className="bg-cream px-6 py-7 sm:px-8">
          <p className="font-display text-5xl leading-none tracking-tight text-forest">
            {stat.value}
          </p>
          <p className="mt-3 text-[0.6875rem] font-bold uppercase tracking-[0.16em] text-sage">
            {stat.label}
          </p>
          <p className="mt-1 text-[0.8125rem] text-ink/70">{stat.detail}</p>
        </div>
      ))}
    </Reveal>
  );
}
