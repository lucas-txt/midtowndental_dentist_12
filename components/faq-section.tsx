import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export type FaqItem = {
  question: string;
  answer: string;
};

export function FAQSection({
  items,
  eyebrow = "Good to know",
  title = "Questions, answered.",
  description = "A few helpful answers before your visit. If you do not see your question, our team is a phone call away.",
  tone = "light",
  className,
}: {
  items: readonly FaqItem[];
  eyebrow?: string;
  title?: string;
  description?: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  const dark = tone === "dark";

  return (
    <section
      className={cn(
        "section-pad",
        dark ? "bg-forest-deep text-cream" : "bg-bone",
        className,
      )}
    >
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <p className={cn("eyebrow", dark ? "text-brass-soft" : "text-sage")}>
            {eyebrow}
          </p>
          <h2
            className={cn(
              "heading-2 mt-4",
              dark ? "text-cream" : "text-ink",
            )}
          >
            {title}
          </h2>
          <p
            className={cn(
              "lead mt-5 max-w-md",
              dark ? "text-cream/65" : "text-ink/65",
            )}
          >
            {description}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="w-full">
            {items.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`item-${index}`}
                className={dark ? "border-cream/12" : ""}
              >
                <AccordionTrigger
                  className={cn(
                    dark
                      ? "text-cream hover:text-brass-soft"
                      : "text-ink hover:text-sage",
                  )}
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent
                  className={cn(
                    dark ? "text-cream/75" : "text-ink/75",
                  )}
                >
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
