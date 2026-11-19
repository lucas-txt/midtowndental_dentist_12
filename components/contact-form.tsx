"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import { ArrowUpRight, CheckCircle2, Loader2, Mail, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/lib/site";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(80, "Please use a shorter name."),
  email: z
    .string()
    .trim()
    .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address.")
    .max(254, "Please use a shorter email address."),
  phone: z.string().trim().max(30, "Please use a shorter phone number."),
  message: z
    .string()
    .trim()
    .min(10, "Please share a little more so we can help.")
    .max(1500, "Please keep your message under 1,500 characters."),
});

type ContactValues = z.infer<typeof contactSchema>;

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-[0.75rem] font-medium text-danger">
      {message}
    </p>
  );
}

export function ContactForm() {
  const [prepared, setPrepared] = useState<ContactValues | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
    mode: "onTouched",
  });

  async function onSubmit(values: ContactValues) {
    await new Promise((resolve) => setTimeout(resolve, 450));
    setPrepared(values);
  }

  const mailto = prepared
    ? `mailto:${site.email}?subject=${encodeURIComponent(
        `Website inquiry from ${prepared.name}`,
      )}&body=${encodeURIComponent(
        `Name: ${prepared.name}\nEmail: ${prepared.email}\nPhone: ${
          prepared.phone || "Not provided"
        }\n\n${prepared.message}`,
      )}`
    : site.emailHref;

  if (prepared) {
    return (
      <div
        role="status"
        className="rounded-panel border border-sage/30 bg-sage-pale/40 p-7 text-center sm:p-9"
      >
        <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-forest text-cream">
          <CheckCircle2 aria-hidden="true" className="size-6" />
        </span>
        <h3 className="heading-3 mt-5 text-forest">Your message is ready.</h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-ink/65">
          We have prepared an email draft in your email app. Review it and send
          it whenever you are ready — or call us directly at {site.phone}.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild>
            <a href={mailto}>
              <Mail aria-hidden="true" className="size-4" />
              Open email draft
            </a>
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              reset();
              setPrepared(null);
            }}
          >
            Write another message
          </Button>
        </div>
        <p className="mt-5 text-[0.6875rem] text-ink/70">
          Prefer to email us directly?{" "}
          <a
            href={site.emailHref}
            className="font-semibold text-forest underline decoration-sage/40 underline-offset-2"
          >
            {site.email}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">
            Name <span className="text-brass-deep">*</span>
          </Label>
          <Input
            id="name"
            autoComplete="name"
            className="mt-2"
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
          />
          <FieldError id="name-error" message={errors.name?.message} />
        </div>
        <div>
          <Label htmlFor="email">
            Email <span className="text-brass-deep">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            className="mt-2"
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          <FieldError id="email-error" message={errors.email?.message} />
        </div>
      </div>

      <div>
        <Label htmlFor="phone">Phone (optional)</Label>
        <Input
          id="phone"
          type="tel"
          autoComplete="tel"
          className="mt-2"
          placeholder="(701) 555-0123"
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          {...register("phone")}
        />
        <FieldError id="phone-error" message={errors.phone?.message} />
      </div>

      <div>
        <Label htmlFor="message">
          How can we help? <span className="text-brass-deep">*</span>
        </Label>
        <Textarea
          id="message"
          className="mt-2"
          placeholder="Tell us what you would like to ask or schedule."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : "message-help"}
          {...register("message")}
        />
        <p id="message-help" className="mt-1.5 text-[0.75rem] text-ink/75">
          Please do not include personal health information in this form.
        </p>
        <FieldError id="message-error" message={errors.message?.message} />
      </div>

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[0.75rem] leading-relaxed text-ink/70">
          Prefer to talk? Call{" "}
          <a
            href={site.phoneHref}
            className="font-semibold text-forest underline decoration-sage/40 underline-offset-2"
          >
            {site.phone}
          </a>
          .
        </p>
        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting ? (
            <Loader2 aria-hidden="true" className="size-4 animate-spin" />
          ) : (
            <Send aria-hidden="true" className="size-4" />
          )}
          {isSubmitting ? "Preparing…" : "Prepare message"}
          <ArrowUpRight aria-hidden="true" className="size-3.5 opacity-60" />
        </Button>
      </div>
    </form>
  );
}
