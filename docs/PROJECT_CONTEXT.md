# Ptich&Co — project context for development

**Status:** consolidated working brief, draft v0.1 · **As of:** 17 November 2026 · **Owner/developer:** Timofey (Тимофей)

This file consolidates the September owner interview and requirements document with later Figma/design decisions from October–November 2026. It is intended for developers and coding agents. It is **not** proof that every item from the early requirements PDF has been designed or approved for the MVP.

## 1. Source material and priority

1. **Latest accepted Figma designs (November 2026):** https://www.figma.com/design/8EScOSv8Uqhaqgdd7qn5gu/Ptich-Co-Design-System
2. **Owner's approvals and decisions (November 2026):** overall design approved; owner will provide final copy and additional photos later.
3. **Owner interview (15 September 2026)** and `PtichCo_requirements_v0.1.pdf` (older product brief, 15 pages).
4. **«Бронируй Онлайн» property audit (14 September 2026)** (older audit with period-specific metrics).

For visual implementation, the approved Figma layout and its current Text Styles are the source of truth. A recommendation in the September PDF is not equivalent to a finished November design. Where a requirement is older or unresolved, it is explicitly labeled below.

## 2. Business and product

- **Property:** Ptich&Co, a family-operated guest-house complex in the Chemal district, Altai Republic (Gorny Altai).
- **Existing site:** https://ptich-n-co.ru/ (Tilda). Goal: redesign and rebuild, rather than stay on Tilda.
- **Primary business goal:** grow direct bookings through the property's own site and reduce friction/dependence on aggregators.
- **Primary journey:** discover the atmosphere/location → explore houses → inspect a specific house → check dates → book and pay through the existing service.
- **Main audience:** couples (~50–60%); families with children are the next largest group (~30–40% as discussed during design). Also groups, pet owners, and potential retreat organizers.
- **Geography:** the September owner interview estimated ~80% of guests from Siberia; this is background, not a current measured website audience.
- **Positioning:** intimate, calm family-owned property; unusual houses inspired by local/ethnic architecture, views and quiet, personal attention from hosts, a convenient base for trips around Chemal.
- **Brand voice:** warm, grounded and concise; never generic 'unforgettable vacation' marketing or invented promises.
- **Seasonality:** the property is closed in winter, per September requirements; confirm live operating dates before publishing seasonal messaging.

### Historical baseline (August 2026; not current KPIs)

The booking provider's audit reported occupancy 33%, ADR 8,417 RUB, RevPAR 3,689 RUB, revenue 538,712.5 RUB and **1 booking from the site/module**. Website conversion was not measured. Treat these as dated context: the primary initial analytics need is to establish a reliable funnel baseline, not to claim a validated causal lift from redesign.

## 3. Scope and priority

### Confirmed product direction

- A modern responsive multi-page website with a strong image-led landing page.
- A house catalogue and an individual detail page for every house.
- Visible booking actions and the **existing «Бронируй Онлайн» system**, not a new reservation backend.
- Russian-language first release; plan architecture so English can be added later without a destructive rewrite.
- Search-engine-friendly pages, optimized media, working mobile layouts and contacts.

### Designed and discussed in detail by November

1. **Home (`/`)** — large Hero, short Intro, visual/sticky section, amenities, About/hosts, final booking CTA, footer. Exact content/order follows approved frames.
2. **Houses catalogue (`/houses`, proposed route)** — spacious house sections with strong photography, compact descriptions and links to individual houses.
3. **House detail (`/houses/[slug]`, proposed route)** — house Hero, photo gallery (with mobile swiping), 'О доме' description, characteristics/amenities, booking integration.

### Present in the September v0.1 requirements, but scope/design to reconfirm

- Retreats/group bookings (`/retreats`), About (`/about`), Contacts (`/contacts`), FAQ/rules (`/faq`), privacy/legal pages, testimonials, promotions/loyalty, map and local-area information.
- A booking widget/search dates area, potentially also on catalogue pages.

These are valid earlier product requirements, not permission for an agent to invent new pages or designs. Before implementation, agree with Timofey which should be part of the **December MVP** and which can follow. The September document suggested an extensive launch; November design progress focused first on Home, Houses and House Details.

### Explicitly out of scope for v1 without a new decision

- Custom booking engine, payment processing, guest account, proprietary backend or full CMS.
- Automatic third-party review aggregation, 3D tours, major marketing automation.
- English user-facing content in the first launch; independent photography/video production.

## 4. Design direction and accepted interaction patterns

### Visual language

- Light, restrained, spacious composition with large photographic blocks and generous gaps.
- Full-screen/immersive Hero approach was liked in Arcana/Treehotel and similar references.
- Home Hero direction accepted with **left-aligned text**, careful crop and a header without a heavy background plate; centered Hero typography was rejected during review.
- Navigation should feel minimal and unobtrusive. Exact mobile-menu behavior is defined by the approved Figma frames, not inferred from inspiration sites.
- The goal is cozy and distinctive, **not** cold generic luxury and not a template tourist-camp aesthetic.

### Home and sticky section

- Desktop composition includes a sticky image/content interaction. The **image container** carries the sticky behavior while adjacent text flows with the parent section; the sticky boundary is the section's container.
- Do not interpret a Figma prototype's whole-frame `sticky` property as the desired CSS implementation.
- The homepage may showcase the property's atmosphere separately from the more detailed house catalogue. The latest approved frames decide exactly which imagery appears.

### Houses catalogue on mobile

- Shared reading order: **house name → photo composition/gallery → short description → subtle 'Смотреть подробнее' link**.
- Individual houses may use different photo compositions (one large photo, vertical pair, grid or horizontal swipe); do not flatten them into an identical gallery without looking at Figma.
- Keep text alignment, outer gutters and CTA styling coherent across houses.
- When a gallery scrolls horizontally, make it discoverable through a visible next-image edge, indicator/counter or the affordance approved in the mockup; avoid invisible overflow.
- Discussed/approved swipe indicators concern at least **«Дуплекс» and «Листва»**. Mobile house-detail Hero/gallery also supports swiping.
- Use accessible scroll/snap behavior or a well-justified simple gallery component; avoid heavy carousels solely for an effect.

### House detail

- The desktop 'О доме' section uses a text/characteristics composition. Design discussion led to adding a **Body Large** text style for better hierarchy; exact final values are in Figma.
- On mobile, use the reviewed compact layout with swipe-capable photos. Verify readable text and safe controls at 320 px.
- Information about area, capacity, features and equipment has not all been confirmed by the owner; placeholders must be recognizable as placeholders.

### Design Foundations / typography

- Actual Figma Text Styles have been created (not just a visual specimen table).
- **Primary family:** Manrope. Cormorant Garamond was an experimental accent, not permission to spread a serif across the UI.
- Historical typography v1.0 estimates from October (font-size/line-height in px, mobile → desktop):

| Style | Mobile | Desktop |
| --- | --- | --- |
| Display | 32/38 | 68/74 |
| H1 | 28/34 | 48/56 |
| H2 | 22/28 | 32/40 |
| H3 | 18/26 | 24/32 |
| Body | 16/24 | 18/28 |
| Small | 14/22 | 16/24 |
| UI | 14/20 | 14/20 (verify) |
| Caption | 12/18 | 13/20 |

**Important:** these are historical reference values, not a substitute for inspecting the final Figma Foundations, especially after the Body Large addition. Do not hardcode proposed background colors or generic spacing tokens unless confirmed in Figma.

### Working house names and media

Discussed house identifiers include **Парнас, Прованс, Дуплекс, Гжель, Листва**. Confirm the final owner-approved names, count, slugs, booking category IDs and media sets before generating route data.

Some key photos are missing. The owner plans a new photoshoot at the start of the next season; temporary placeholders are acceptable in agreed positions. Do not fill them with unrelated stock photos and present them as actual houses.

## 5. Booking and conversion

- The booking provider is **«Бронируй Онлайн»**. The existing widget/module and its payment route remain in use.
- Important CTAs: booking button visible in the header and booking access for each house. Use Russian UI (`Забронировать`, `Проверить свободные даты` as appropriate).
- The house detail should lead to booking the **selected** house whenever the provider permits deep links/parameters; verify provider capabilities rather than assume them.
- Confirm available integration modes: embed widget, modal, external hosted page, deep link, API; verify passing house, dates and guest count.
- Prices, promotions, availability, payment and business rules are owned by the provider; do **not** calculate or simulate bookings locally.
- Contact paths may include Telegram, WhatsApp and phone, with owner-confirmed URLs/numbers.

## 6. Technology and engineering

### Chosen working stack

- Next.js App Router, React, TypeScript, Tailwind CSS.
- At setup time (17 Nov 2026), local dependencies reported `next@16.4.6`, `react@19.3.1`, `react-dom@19.3.1`, with Node `22.22.0`, npm `10.9.4`. The local scaffold's final state must be inspected rather than presumed.
- Prefer a small data-driven content model in TypeScript, shared components and one reusable `[slug]` template for individual houses.
- No CMS or custom database initially.

### Considered but not yet locked

- GitHub + Vercel for repo/deployment.
- Hosting heavy media with a CDN/Cloudinary or another image service instead of indiscriminately bundling huge originals.
- Concrete route slugs and folder/module structure; choose after checking the real code and design.

### Quality requirements

- Responsive down to **320 px**, verify iPhone Safari and mainstream desktop browsers.
- Images: responsive sizes, appropriate compression/modern formats, sensible loading priority for Hero, no heavy raw video by default, minimal layout shift.
- SEO: per-page title/description, semantic heading hierarchy, sitemap, robots, canonical, structured data where accurate, redirects from old key URLs as needed.
- Analytics: proposed Yandex Metrica events for booking CTAs, contact clicks and key navigation. Verify current configuration and privacy requirements before implementation.
- Accessible keyboard/gesture controls, useful focus states, descriptive real-image alt text.
- All owner-specific claims, guest policies, prices and legal wording require explicit approval before publication.

## 7. Content model and information still required

For each house, collect:

- Approved public name and URL slug.
- Booking provider category/house ID and booking link rules.
- Capacity, area, sleeping places, floor plan and distinctive features.
- Full amenities list and property-level shared amenities.
- Rules for children, pets, check-in/out, parking and Wi-Fi.
- Approved summary/long description; price presentation only if owner/provider confirms rules.
- Gallery order, image captions/alt information, approved placeholder states.

For the property, collect final text about hosts/history/activities, real contact details and map coordinates, legal/privacy copy, approved reviews, policies and links.

**Do not invent these details.** In the November review the owner agreed to supply copy and remaining images; Timofey expected to clarify house characteristics and amenities with his mother.

## 8. Timeline and current state

- September 2026: owner interview, external booking audit, initial requirements and visual research.
- October–early November 2026: desktop/mobile Figma design, house catalogue, individual-house template, Foundations/Text Styles.
- **15 November:** overall design approved by owner; minor polish, copy and media remain.
- **16 November:** agreed target to start writing frontend code.
- **17 November:** local `ptichnco-web` project initially has installed Next/React dependencies; Codex CLI `0.169.0` installed. Agent initialization/startup is underway; verified scaffold/code changes not yet known.
- **Target MVP/release:** by **30 December 2026**, with earlier business target no later than 1 January 2027. This is a planning target, conditional on content/integration readiness—not a release guarantee.

### Suggested implementation order (proposal, approve one stage at a time)

1. Scaffold/app setup, scripts, lint/build check, Git hygiene.
2. Import Figma Foundations: fonts, text styles, colors, containers, spacing and responsive rules.
3. Shared Header, Footer, buttons/links and layout primitives.
4. Homepage in reviewed sections, starting with Hero.
5. Houses catalogue and its mobile photo variations.
6. Typed house data + reusable house details, galleries and booking placeholders.
7. Actual booking provider integration and CTA checks.
8. Missing approved content, SEO, analytics, legal pages, redirects, mobile QA and release review.

Additional sections from the September PDF must be separately prioritized before implementation; do not silently extend the MVP scope.

## 9. Open decisions / blockers

1. Exact integration format, IDs/URLs and styling constraints for «Бронируй Онлайн».
2. Final house inventory, names, slugs, attributes, rules and booking mappings.
3. Final owner-authored Russian text, amenities list and missing photography.
4. Approved Figma token values and which frames are the definitive implementation targets.
5. Which additional September sections/pages (retreats, FAQ, about, contacts, reviews, loyalty) belong to the December MVP and which are deferred.
6. Final static-asset strategy and deployment/hosting selection.
7. Legal copy, contacts, privacy/cookies consent and analytics implementation.
8. Verified media rights, images/alt/crop variants and fallback rules.
9. Exact contact channels, map coordinates and travel directions.
10. A project definition of done and owner sign-off before public launch.

## 10. Operating agreement with Codex

Read `AGENTS.md` and this file. At the start of each task, distinguish **confirmed decisions**, **draft requirements** and **unknowns**. Make only the requested scoped changes. After implementation, provide changed files, checks run, notable trade-offs and open questions. Do not self-author business copy or design decisions, and do not take release/commit/push actions without explicit approval.
