# Lakshmiprabha — AI Platform Engineer Portfolio

A multi-page portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and
Framer Motion — dark AI-infra theme, real routes for every section, animated page
transitions, and an animated terminal hero.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Pages / routes

| Route | What's there |
|---|---|
| `/` | Hero, 2 featured projects, an "explore" tile grid, contact CTA |
| `/projects` | All 5 projects as clickable cards |
| `/projects/[slug]` | Full case study per project — highlights, tech stack, architecture flow, prev/next nav |
| `/skills` | LLM / Backend / Cloud / MLOps skill grid |
| `/experience` | Career timeline |
| `/architecture` | RAG / Agentic Workflow / Eval Pipeline flow diagrams |
| `/education` | Degrees, honors, achievements & recognized strengths |
| `/contact` | Email (click-to-copy), GitHub, LinkedIn, Resume |

## Interaction details

- **Sticky nav with a sliding active-page pill** (Framer Motion `layoutId`) — shows exactly
  where you are at a glance.
- **Page transitions** — every route fades/slides in via `app/template.tsx`, so navigating
  between pages feels continuous rather than a hard reload.
- **Ambient cursor glow** (`components/CursorGlow.tsx`) — a soft accent-colored glow follows
  the pointer on desktop; automatically disabled for touch devices and
  `prefers-reduced-motion`.
- **Click-to-copy email** on the Contact page with inline "Copied!" feedback.
- **Scroll-reveal animations** throughout (`whileInView`), plus hover-lift cards and a
  rotating arrow icon on every clickable project tile.
- **Back links + prev/next project navigation** on every sub-page and case study, so it's
  always obvious how to get back or keep exploring.

## Before you deploy — personalize these

1. **`lib/constants.ts`**
   - `site.links.github`, `site.links.linkedin`, `site.links.email`, `site.links.resume`
2. **`components/Contact.tsx`** and **`components/Footer.tsx`**
   - Update the visible placeholder strings (email, GitHub handle) to match step 1.
3. **`public/`** — add `resume.pdf` (used by "Download Resume" and the Contact page card).
4. **Content** — all copy lives in `/data`, fully typed, edit without touching layout:
   - `data/skills.ts`, `data/experience.ts`, `data/architecture.ts`
   - `data/projects.ts` — includes `slug` per project (keep unique/URL-safe) and an optional
     `scopeNote` for clarifying what you personally built vs. what another team owned
     (e.g. infra deployment, a Lex bot config) — shown on the case-study page and list card
   - `data/education.ts` — degrees (with optional `honor` badge), plus `achievements` and
     `strengths` arrays rendered on the Education page

## Project structure

```
app/
  layout.tsx            Root shell: fonts, Navbar, Footer, CursorGlow
  template.tsx           Page-transition wrapper (re-animates on every route change)
  page.tsx                Home
  globals.css
  fonts/                  Self-hosted JetBrains Mono (no external font request)
  projects/page.tsx        Projects list
  projects/[slug]/page.tsx Project case study (generateStaticParams from data/projects)
  skills/page.tsx
  experience/page.tsx
  architecture/page.tsx
  education/page.tsx
  contact/page.tsx
components/
  Navbar.tsx              Sticky nav, animated active pill, mobile menu
  Hero.tsx / TerminalCard.tsx
  FeaturedProjects.tsx     Home-page 2-project teaser
  ExploreGrid.tsx          Home-page navigation tiles
  CtaBanner.tsx            Home-page contact callout
  Skills.tsx / Experience.tsx / Architecture.tsx / Education.tsx / Contact.tsx  Full pages
  Projects.tsx             Projects list page
  ProjectListCard.tsx      Compact card used on the list page
  ProjectCaseStudy.tsx     Full detail layout used on [slug] pages
  BackLink.tsx / SectionHeading.tsx / CursorGlow.tsx / Footer.tsx
data/                      All editable content (typed)
lib/constants.ts            Site-wide config + nav links
```

## Notes

- Fonts are fully self-hosted (no Google Fonts dependency at build or runtime).
- Verified with `npm run build` — compiles, type-checks, statically generates all 9 routes
  (including 5 SSG project pages), and was smoke-tested with `npm run start` (correct page
  titles per route, unknown project slugs correctly 404).
- Animations respect `prefers-reduced-motion`.

## Deploying

See **`DEPLOY.md`** for a step-by-step, beginner-friendly guide to putting this online for
free with Vercel (push to GitHub → import on Vercel → live URL). No server, Docker, or
Kubernetes knowledge required for this — it's a static/serverless Next.js site.
