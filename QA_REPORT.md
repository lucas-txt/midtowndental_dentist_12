# QA Report — Midtown Dental

- **Target:** `build/midtowndental_dentist_12`
- **Date:** 2026-11-19
- **Harness:** `bash .agents/qa/run-qa.sh midtowndental_dentist_12` (immutable, unmodified)
- **Result:** **30/30 Playwright tests passed, 0 failed, 0 flaky** — exit code `0`
- **Build under test:** Next.js 16.4.6 production build, 16 prerendered routes

## Gate summary

| Gate | Status | Evidence |
| --- | --- | --- |
| **L0** contract | **PASS** | `npx tsc --noEmit` clean; `npx eslint .` clean; `next build` clean (16/16 static pages). The harness' `next lint` step is unavailable in Next 16 and falls through to the ESLint command, which exits 0. |
| **L1** smoke | **PASS** | 10 smoke tests (9 routes + internal-link crawl) passed. No console errors, failed requests, broken images, placeholder text, or horizontal overflow; every route has a visible `<h1>`. Evidence: `.agents/qa/artifacts/results.json` (`expected: 30`, `unexpected: 0`). |
| **L2** parity | **PASS** | Both parity tests passed: all facts from `content-manifest.json` are present in rendered text, and all 9 manifest routes return `<400` with real content. Oracle: 9 routes, 19 assets, 15 fact groups. |
| **L3** a11y | **PASS** | 9/9 axe scans (WCAG 2.1 A/AA) passed with zero `critical`/`serious` violations. |
| **L4** visual | **PASS** | 27 full-page screenshots (9 routes × 360/768/1440) in `.agents/qa/artifacts/screens/`; zero failed webfonts and 0px horizontal overflow at every viewport. |
| **L5** rubric | **PASS — 10/10** | Scored below from the captured screenshots and structural evidence. |

## L5 design rubric

| Item | Score | Evidence |
| --- | --- | --- |
| Typography | 2/2 | One display family (Fraunces) + one text family (Manrope), both self-hosted via `next/font/local` (`app/layout.tsx:11`, `app/layout.tsx:29`, tokens at `app/globals.css:26-27`). Four-step fluid display scale at `app/globals.css:214-249`; no failed webfonts in the visual gate. |
| Layout | 2/2 | All screenshots render complete, populated sections with no horizontal overflow at 360/768/1440. Supplemental 1920×1080 run: 0px overflow on all 9 routes. |
| Color | 2/2 | Entire palette is tokenized in `app/globals.css:3-23` — forest/sage, bone/cream/sand, brass. Axe color-contrast passes on every route; sampled screenshots are dominated by the intended `#fcfaf5` / `#f7f3ea` / `#15241c` palette. The map illustration was moved from inline hex values to tokens (`components/map-panel.tsx`, tokens at `app/globals.css:19-24`). |
| Motion | 2/2 | `MotionConfig reducedMotion="user"` (`components/providers.tsx:7`) plus a global `prefers-reduced-motion` reset (`app/globals.css:328-340`). A reduced-motion production run completed with zero console errors and static final transforms. |
| Consistency | 2/2 | Shared `SiteHeader`/`SiteFooter` in `app/layout.tsx:156-158`; header and footer text were verified identical across all 9 routes. Components share the same radius, shadow and spacing tokens. |

## Manual checks not covered by the harness

| Check | Status | Evidence |
| --- | --- | --- |
| Contact form — invalid submit | **PASS** | Empty submit produced 3 accessible `role="alert"` errors and `aria-invalid="true"` on the 3 required fields; URL unchanged. Invalid email produced “Please enter a valid email address.” (`components/contact-form.tsx:126-180`). |
| Contact form — valid submit | **PASS** | Valid submit reached the `role="status"` success panel “Your message is ready.” and generated a `mailto:` draft to `info@midtowndb.com` with encoded subject/body; “Write another message” restores a cleared form (`components/contact-form.tsx:72-105`). |
| Runtime errors during form flow | **PASS** | Zero console errors, zero page errors, zero failed requests. |
| 1920 responsiveness | **PASS** | All 9 routes return 200 with 0px overflow at 1920×1080. |
| External destinations | **PASS** | Appointment, pay-online, Google Maps, Google reviews CID, Facebook, Instagram and developer links all return HTTP 200. |
| Source hygiene | **PASS** | No `any`, `@ts-ignore`, `@ts-expect-error`, or `eslint-disable` in `app/`, `components/`, `lib/`. |
| Hardcoded colors | **PASS** | No styling hex values remain in `app/`, `components/`, `lib/`; remaining hex values are PWA metadata and JSON-LD (`app/layout.tsx:98`, `app/manifest.ts:11-12`). |
| Broken internal links | **PASS** | Harness crawl of every internal `href` passed; all return `<400`. |
| Header/footer consistency | **PASS** | Identical header and footer text across all 9 routes. |
| Reduced-motion hydration | **PASS** | Fixed during QA: conditional `useReducedMotion` branches were replaced by a consistent tree + `MotionConfig`, eliminating React error #418 under reduced motion. |

## Fixes applied during QA

1. **Axe color contrast** — muted text on sage/cream surfaces was darkened across `components/stats-row.tsx`, doctor education details, `components/coverage-checker.tsx`, contact-form help text, and shared muted utilities.
2. **A11y semantics** — accordion/details controls, coverage-checker status messaging, and form error/help associations now expose correct roles and descriptions.
3. **Reduced-motion hydration** — `components/motion/reveal.tsx`, `components/motion/magnetic.tsx`, `app/template.tsx`, and `components/home-hero.tsx` no longer branch to different DOM trees based on `useReducedMotion`; animation is disabled through `MotionConfig` instead.
4. **Design-token hygiene** — the custom map illustration now consumes palette tokens instead of inline hex values (`app/globals.css:19-24`, `components/map-panel.tsx`).

## Screenshot evidence

Current-route captures (27 files, regenerated on the final passing run):

- `artifacts/screens/home-{mobile,tablet,desktop}.png`
- `artifacts/screens/about-us-{mobile,tablet,desktop}.png`
- `artifacts/screens/meet-our-dentists-{mobile,tablet,desktop}.png`
- `artifacts/screens/meet-our-dentists-dr-andrew-schmid-{mobile,tablet,desktop}.png`
- `artifacts/screens/meet-our-dentists-dr-madison-morrell-{mobile,tablet,desktop}.png`
- `artifacts/screens/services-{mobile,tablet,desktop}.png`
- `artifacts/screens/insurance-and-payment-information-{mobile,tablet,desktop}.png`
- `artifacts/screens/patient-center-{mobile,tablet,desktop}.png`
- `artifacts/screens/contact-us-{mobile,tablet,desktop}.png`

All paths are relative to `.agents/qa/`.

## Open blockers

None.
