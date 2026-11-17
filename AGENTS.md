# Ptich&Co — instructions for coding agents

> Draft v0.1, 17 November 2026. Review with Timofey before treating it as the final team policy.

## Project

Ptich&Co is a hospitality website for a family-run collection of guest houses in the Chemal district of the Altai Republic. The redesign replaces an existing Tilda site. The primary outcome is a clear, beautiful journey from discovering the property to choosing a house and booking through the **existing** external booking service.

**Always read `docs/PROJECT_CONTEXT.md` before starting a new implementation task.** It contains product context, agreed design decisions, priorities and open questions.

Design reference: https://www.figma.com/design/8EScOSv8Uqhaqgdd7qn5gu/Ptich-Co-Design-System

## Authority and sources of truth

1. The current user request and decisions explicitly approved by Timofey.
2. Latest **approved** desktop/mobile Figma layouts and their actual text styles, assets and measurements.
3. Confirmed product requirements in `docs/PROJECT_CONTEXT.md`.
4. Older discovery documents and suggestions, only when they do not conflict with newer decisions.

When sources disagree, **flag the conflict and ask**. Do not silently use an old specification to override an approved design. A Figma URL does not prove the agent can inspect the file; request exports, screenshots or configured Figma access if needed.

## Working approach

- Work in **small, reviewable iterations**: one scoped task, implementation, verification, report, stop. Do not advance to the next phase automatically.
- Before editing, inspect the current tree, existing instructions, dependencies, `git status` and relevant files. Preserve unrelated work and uncommitted changes.
- Explain any nontrivial design/architecture decision and its trade-offs. Ask when missing information materially affects the result.
- Keep diffs focused. Do not add speculative features, dependencies or abstractions just because they may be useful later.
- Do not create commits, push, deploy, alter production services, rewrite Git history, delete material files or change paid services without explicit authorization.
- After a task, report changed files, observable result, commands/checks run, remaining uncertainties and a sensible next step.

## Technical baseline

- Next.js (App Router), React, TypeScript, Tailwind CSS.
- Keep `app/` at the project root, as confirmed by Timofey. The `@/*` alias maps to the project root (`./*`); do not migrate to `src/app`.
- The website is predominantly content-driven. Avoid a custom backend, database or CMS for v1 unless requirements change.
- Represent house data with a typed, maintainable local data model initially; use a reusable detail-page template instead of duplicating house pages.
- Prefer server components where appropriate; use client components for actual interactivity (gallery, menu, booking triggers) rather than making everything client-side.
- Build accessible semantic interfaces: correct headings, focus states, keyboard navigation, descriptive alt text and reduced-motion consideration.
- Optimize images/video for mobile and avoid layout shift. Use placeholders when final approved media are missing; never disguise placeholders as final assets.
- Prepare basic SEO (titles, descriptions, indexable house pages, canonical/sitemap/robots where appropriate) and preserve a path for later RU/EN, but do not implement English translation now.

## Design and content rules

- Implement **approved Figma values**, not guessed spacing, colors or typography. Typography lives in Figma Foundations; Manrope is the primary family. An editorial serif was explored but is not a blanket requirement.
- Preserve the light, airy visual language: strong photography, generous whitespace, restrained UI and clear booking actions.
- The first release is in Russian. Do not mix in English UI labels such as `Book Now`.
- Respect individual visual composition of houses while keeping a consistent text and CTA system. For mobile galleries, show an explicit swipe affordance where images are horizontally scrollable.
- Never invent house areas, capacities, prices, rules, services, text, ratings, owner claims or booking URLs. Use clearly marked placeholders or ask for source data.
- Owner-approved copy, real photos, house specs and amenities supersede temporary mock content.

## Booking and external integrations

- The booking provider is **«Бронируй Онлайн»**. Integrate its supported widget/deep link/API as agreed; **do not build a proprietary booking engine or payment flow**.
- Booking CTAs should be easy to find in the header and house contexts. Exact UI/behavior follows approved designs and verified provider capabilities.
- Never invent an embed snippet or third-party API. Ask for documentation and configured identifiers.
- Analytics (including Yandex Metrica) and legal/cookie behavior need separate implementation tasks and verified requirements.

## Verification and completion

- Run the checks relevant to each change; for foundation/setup work this includes `npm run build` and any configured lint/type-check commands.
- Check responsive layouts at desktop and mobile, especially **320 px** and iPhone Safari behavior before marking visual work complete.
- A visual section is done only after review against its Figma state and functional interaction checks, not merely because it compiles.
- Report failures honestly; do not claim that checks passed if they were not run.

## Current priority

At the time of this draft, Codex was installed and the Next.js dependencies had been added to the local `ptichnco-web` directory, but the application scaffold had not yet been independently verified. First complete and validate project setup; next port Figma Foundations, then build the shared layout and the approved pages incrementally.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
