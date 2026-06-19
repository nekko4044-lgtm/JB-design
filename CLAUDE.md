# Julia Busygina — Interior Design Landing Page

Client: Julia Busygina, interior designer, Dubai & Abu Dhabi (@busigina__design)

## Stack
- **Next.js 16** App Router (see AGENTS.md — breaking changes vs older versions)
- **Tailwind v4** — config is CSS-only via `@theme inline` in `globals.css`, NO `tailwind.config.ts`
- **Framer Motion** — scroll animations via `whileInView`
- **yet-another-react-lightbox** — for project galleries
- **Lucide React** — icons

## Design Tokens (globals.css)
```
bg-canvas       #F4EEE7   main background
bg-canvas-alt   #FAF7F2   alternate sections
text-ink        #241F1C   main text
bg-brand        #5C1A33   bordeaux CTA/buttons/footer
bg-brand-hover  #74233F   hover state
text-greige     #B6A597   secondary text
bg-border       #DCD0C3   borders/dividers
text-accent     #C9A38C   compass star, accents
```

## Fonts
- Display/headings: **Cormorant Garamond** → CSS var `--font-display`
- Body: **Jost** → CSS var `--font-body`
- Usage: `style={{ fontFamily: "var(--font-display)" }}`

## Structure
```
src/
  app/
    page.tsx                    # Main landing page
    projects/[slug]/page.tsx    # Dynamic project pages
  components/
    layout/Header.tsx Footer.tsx
    sections/Hero About Services Projects Process Contact
    ui/CompassStar ProjectCard
  content/projects.ts           # All 6 project data
```

## Current Status
- Dev: `npm run dev` → localhost:3000
- TypeScript: clean
- Images: placeholder grey — replace with real photos in `/public/images/{slug}/`

## Waiting on Client
- Hi-res photos (min 2000px) for all 6 projects
- SVG compass star logo (`/public/icons/compass-star.svg`)
- Name spelling: Busygina vs Busigina?
- Domain
- Contact form destination

## Deploy
```bash
git push  # then Vercel auto-deploys
```
