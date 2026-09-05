## Goal

Full UI/UX revamp of the portfolio: a new visual direction (retiring the terminal-as-chrome identity) plus restructured information architecture and content model, while keeping the one-section-at-a-time navigation model.

## Success Criteria

- All sections render in one coherent new visual system; no section still depends on the old terminal-chrome look to make sense.
- Project details use one generic pattern driven by data, not a hardcoded one-off view; every project can get a detail view without new components.
- Navigation keeps section-switching but supports hash deep links, browser back/forward, scroll-to-top, and focus-to-heading on every switch.
- Light mode, dark mode, and all four accent themes work across every reworked surface; layout holds from mobile to desktop.
- `npm run lint` and `npm run build` pass; every section is click-through verified including the contact form's idle/sending/success/error states.

## Context And Current Facts

- [App.tsx](/Users/shunsena/Desktop/personal-projects/cudiamat-vercel-portfolio/src/App.tsx) owns navigation as `activeSection` state (`home`, `projects`, `kasalo-kusina`, `experience`, `contact`); there is no router, so sections are not deep-linkable and back-button does not work. Sections below Home are lazy-loaded with an `AnimatePresence` fade/slide transition.
- [NavBar.tsx](/Users/shunsena/Desktop/personal-projects/cudiamat-vercel-portfolio/src/components/NavBar.tsx) is a floating icon-only pill (labels appear only as hover tooltips), plus accent picker and theme toggle.
- [Home.tsx](/Users/shunsena/Desktop/personal-projects/cudiamat-vercel-portfolio/src/sections/Home.tsx) pairs a typewriter hero with [TerminalShell.tsx](/Users/shunsena/Desktop/personal-projects/cudiamat-vercel-portfolio/src/components/TerminalShell.tsx) (interactive `help`/`neofetch`/`skills`/`projects`/`matrix`/`clear`/`contact` commands, matrix-rain canvas) and three `FEATURES` cards.
- [Projects.tsx](/Users/shunsena/Desktop/personal-projects/cudiamat-vercel-portfolio/src/sections/Projects.tsx) hardcodes its split: project `p5` is featured, everything else is "Other Works".
- [KasaloKusinaDetails.tsx](/Users/shunsena/Desktop/personal-projects/cudiamat-vercel-portfolio/src/sections/KasaloKusinaDetails.tsx) is a bespoke detail view reachable only via the `kasalo-kusina` section id.
- [Experience.tsx](/Users/shunsena/Desktop/personal-projects/cudiamat-vercel-portfolio/src/sections/Experience.tsx) renders roles as a timeline of [TerminalWindow.tsx](/Users/shunsena/Desktop/personal-projects/cudiamat-vercel-portfolio/src/components/TerminalWindow.tsx) log boxes with `[INFO]`/`[SUCCESS]`/`[DEBUG]`/`[WARN]` parsing, plus percentage skill bars.
- [GlassCard.tsx](/Users/shunsena/Desktop/personal-projects/cudiamat-vercel-portfolio/src/components/GlassCard.tsx) is defined but imported nowhere; card styling is instead duplicated inline across sections.
- Content is centralized in [portfolio.ts](/Users/shunsena/Desktop/personal-projects/cudiamat-vercel-portfolio/src/config/portfolio.ts) with types in [types.ts](/Users/shunsena/Desktop/personal-projects/cudiamat-vercel-portfolio/src/types.ts); motion variants live in [motion.ts](/Users/shunsena/Desktop/personal-projects/cudiamat-vercel-portfolio/src/constants/motion.ts).
- Tokens live in [tailwind.config.js](/Users/shunsena/Desktop/personal-projects/cudiamat-vercel-portfolio/tailwind.config.js) (`class` dark mode, accent CSS vars) and [index.css](/Users/shunsena/Desktop/personal-projects/cudiamat-vercel-portfolio/src/index.css) (`.glass`, `.glass-dark`, mesh backgrounds).
- [Contact.tsx](/Users/shunsena/Desktop/personal-projects/cudiamat-vercel-portfolio/src/sections/Contact.tsx) sends via EmailJS using `VITE_EMAILJS_*` env vars and handles missing keys as an error state; there is no site footer.
- [index.html](/Users/shunsena/Desktop/personal-projects/cudiamat-vercel-portfolio/index.html) pins a CSP (`style-src` allows Google Fonts) and the title/meta; real security headers live in `vercel.json`.
- No test suite exists (`package.json` has only `dev`, `build`, `lint`, `preview`), so validation is lint + build + structured manual checks.

## Constraints And Non-goals

- No new dependencies: the revamp stays on React 19, Tailwind 3.4 (`class` dark mode), Framer Motion, Lucide, and EmailJS already in `package.json`.
- ESM `import`/`export` throughout, per repo conventions.
- EmailJS integration and its env contract stay as-is; no backend or service changes.
- `vercel.json` headers are untouched; if the new direction changes font hosts, `index.html` CSP must be updated in the same step.
- Copy rewrite is limited to what restructuring requires (headings, labels, project-detail fields); full bio/project copy refresh needs user-supplied text.
- Non-goals: adding a test framework, adding routes beyond hash-synced sections, touching EmailJS/Vercel config behavior.

## Key Decisions

1. **New visual system, terminal demoted not deleted.** Terminal chrome (window frames, log-style experience entries) is removed as the primary metaphor and replaced by a new token-driven system. `TerminalShell` survives as one restyled interactive block on Home because it is the signature interactive piece and costs little to keep. Rejected: deleting it outright (loses the site's most distinctive interaction) and keeping terminal-everywhere (contradicts the requested new direction).
2. **Generic project-detail pattern.** `KasaloKusinaDetails` becomes a data-driven `ProjectDetails` view: detail fields move into `portfolio.ts`/`types.ts` so any project can have a detail page. Rejected: keeping the bespoke view (repeats the one-off problem for the next project) and detail-per-project components (multiplies maintenance).
3. **Keep state-section switching, add URL + focus behavior.** Hash-synced sections (`#/projects`, …), back/forward support, scroll-to-top and focus-to-heading on navigate. Rejected: full router migration (unneeded weight for five views) and single-scroll page (user chose to keep switching).
4. **Tokens first, sections after.** New palette, type scale, spacing, and surface styles land in `tailwind.config.js` + `index.css` before any section is rewritten, so sections converge instead of drifting.
5. **NavBar keeps its floating position but gains text labels.** Icon-only navigation with hover tooltips is the weakest usability point of the current shell; the pill stays, keywords become visible.
6. **Motion stays centralized.** `constants/motion.ts` remains the single authority; the revamp reduces variant count and durations rather than adding per-section animation schemes.

## Recommended Approach

Build the new design language as tokens and two or three shared primitives (`SectionHeader`, one card surface absorbing the unused `GlassCard`, one detail layout), then rewrite sections in dependency order: shell/navigation first (it frames everything), Home second (sets the tone), Projects + generic detail third (the structural core), Experience and Contact after (they consume the settled patterns), finishing with a responsive/accessibility/performance and content pass. Content-model changes (`types.ts`, `portfolio.ts`) land with the Projects phase since that phase defines the new fields.

## Work Plan

1. **Tokens and primitives.** Rework `tailwind.config.js` and `src/index.css` (palette, type, surfaces, replacement for `.glass`/`.glass-dark`); rewrite `SectionHeader`; either adopt or delete the unused `GlassCard`. No dependencies.
2. **App shell and navigation.** `App.tsx`: hash sync, back/forward handling, scroll-to-top, focus-to-heading, preserve lazy loading and reduced-motion behavior; `NavBar.tsx`: visible labels, keyboard/ARIA treatment, restyled accent and theme controls. Depends on 1.
3. **Home.** Rewrite hero (no typewriter dependency unless the new direction keeps it), restyle `TerminalShell` into the new system, restructure `FEATURES` cards. Depends on 1.
4. **Projects and generic detail.** Remove the hardcoded `p5` split; add detail fields to `types.ts` + `portfolio.ts`; replace `KasaloKusinaDetails` with data-driven `ProjectDetails` reachable for any project; fix `localhost:*` endpoints so they never render as visitable links. Depends on 1 and 2.
5. **Experience and skills.** Replace `TerminalWindow` log boxes and `[LEVEL]` parsing with a timeline suited to the new direction; redesign skill presentation (current percentage bars imply false precision). Depends on 1.
6. **Contact and footer.** Restyle the EmailJS form preserving all four send states; add a site footer carrying the social links currently stranded at the bottom of Contact. Depends on 1.
7. **Polish pass.** Responsive sweep (mobile widths first), keyboard-only and screen-reader pass, animation/asset weight check, `index.html` title/meta/CSP alignment, content consistency pass over `portfolio.ts`. Depends on 3–6.

## Validation Plan

- Per phase: `npm run dev`, open the touched surfaces at mobile and desktop widths, toggle light/dark and each accent theme, and exercise every control on screen.
- Phase 2: deep-link each `#/section` directly, use back/forward, and confirm focus lands on the new section heading.
- Phase 4: open detail views for a deployed, an in-development, and a `localhost` project; confirm no dead "Visit" links.
- Phase 6: submit the form with and without EmailJS env vars to see success and error states; confirm social links.
- Final: `npm run lint` and `npm run build` both green, then one full click-through of every section.
- Highest-risk step is phase 4 (generic detail) combined with phase 2 (hash nav): state/URL sync bugs hide there, so that pairing gets the deepest manual pass.

## Risks / Rollback

- **Style drift across phases:** mitigated by doing tokens first and reviewing each section against them; each phase is a separate change so any phase can be reverted via git without touching the others.
- **Shared content model:** `portfolio.ts` is imported by several sections, so phase 4 edits it while later phases consume it; a typed `Project` with optional detail fields keeps old consumers compiling.
- **Font/CSP coupling:** a new typeface from a new host breaks styling silently under the current CSP; the polish phase updates `index.html` CSP alongside any font change.
- **Scope creep into copy:** project-detail fields need real copy; placeholder text ships clearly marked if final copy is not provided rather than blocking the build.

## Open Questions

- Should the matrix-rain easter egg and typewriter hero survive in the new direction, or should both retire with the terminal theme? (Default if unanswered: retire matrix rain, keep a short typewriter accent only if it fits the new hero.)
- Which projects beyond Kasalo Kusina get full detail views, and can you supply 2–4 sentences plus a canonical live URL for each? (Default: migrate existing descriptions verbatim; `localhost` endpoints render as plain text, never links.)
- Do skill percentages still reflect reality, or should the redesign drop numbers for grouped proficiency bands? (Default: drop numbers.)
