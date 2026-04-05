# Technology Decisions — Bonsai Management Website

> Documented April 2026 during initial project setup. This file records the research and rationale behind our tech stack choices.

---

## Framework: Next.js (App Router) with TypeScript

### Options Evaluated

**1. Next.js (chosen)**
- React-based framework with built-in server-side rendering (SSR) and static site generation (SSG)
- App Router (introduced in Next.js 13+) provides modern routing with layouts, loading states, and server components
- Excellent SEO out of the box — server-rendered HTML means search engines see full page content on first load
- TypeScript support is first-class with zero-config setup
- Huge ecosystem, extensive documentation, active community
- Seamless deployment to Vercel (built by the same team)
- Image optimization built in via `next/image`
- Easy to add dynamic features later (contact forms, tenant portals) without switching frameworks

**2. Astro**
- Excellent for content-heavy static sites with its "islands" architecture
- Ships zero JavaScript by default — great for performance
- Good markdown/MDX support
- Smaller ecosystem than Next.js; fewer learning resources
- Less straightforward if we later need dynamic features (forms, authentication, dashboards)
- Would work well for our current needs but limits future flexibility

**3. Plain HTML/CSS**
- Simplest approach with no build step
- No framework overhead or dependencies
- Very fast initial load
- But: no component reuse, no templating, manual optimization for each page
- Maintaining 20+ pages with shared headers/footers becomes tedious quickly
- No SSR benefits for SEO — what you write is what gets served
- Adding interactivity requires manually wiring in JavaScript

### Decision Rationale

Next.js was chosen because it provides the best balance of current needs and future flexibility:

1. **SEO matters for a property management business.** Prospective tenants and property owners search for PM companies. Server-rendered pages rank better and load faster than client-only React apps.

2. **Content-driven architecture.** Our site is primarily content — property listings, market reports, tenant guides, area write-ups. Next.js handles markdown content well, and the App Router's layout system makes it easy to share navigation, footers, and styling across many content pages.

3. **TypeScript for reliability.** As the site grows to include property data, market analysis, and potentially dynamic features, TypeScript catches errors early and makes the codebase easier to maintain.

4. **Room to grow.** If we later need a tenant portal, maintenance request form, or owner dashboard, Next.js can handle that without a rewrite. Astro or plain HTML would require significant rearchitecting.

5. **Industry standard.** Next.js is widely used and well-documented, which makes it straightforward to get help, find examples, and onboard anyone who might contribute to the site later.

---

## Styling: Tailwind CSS

### Options Evaluated

**1. Tailwind CSS (chosen)**
- Utility-first CSS framework — style directly in JSX with class names
- Highly customizable via `tailwind.config.ts` — define brand colors, fonts, spacing once and use everywhere
- Responsive design built into the utility system (`md:`, `lg:` prefixes)
- Produces small CSS bundles in production (tree-shakes unused styles)
- Pairs extremely well with Next.js and React component architecture

**2. CSS Modules**
- Scoped CSS per component — good isolation
- No additional dependencies
- More verbose; requires writing traditional CSS in separate files
- Harder to maintain consistent design tokens across components

**3. Styled Components / Emotion**
- CSS-in-JS approach with dynamic styling capabilities
- Good for highly dynamic UIs
- Runtime overhead for a mostly static content site is unnecessary
- More complex setup with SSR

### Decision Rationale

Tailwind CSS is ideal for this project because:

1. **Brand consistency.** We define our earth-tone color palette, typography, and spacing scale once in the Tailwind config. Every component automatically uses consistent values.

2. **Fast development.** Building responsive layouts is significantly faster with utility classes than writing custom CSS for each component.

3. **Small bundle size.** For a content-heavy site, keeping CSS lean is important for performance. Tailwind's purge/tree-shaking removes unused styles in production.

4. **Co-located styling.** Styles live right in the component JSX, making it easy to see exactly how something looks without jumping between files.

---

## Hosting: Vercel

### Options Evaluated

**1. Vercel (chosen)**
- Built by the Next.js team — first-class support for all Next.js features
- Automatic deployments on every `git push` to main
- Preview deployments for pull requests
- Built-in SSL, CDN, and edge caching
- Free tier is generous for a small business site
- Custom domain configuration is simple
- Automatic image optimization
- Analytics available

**2. Netlify**
- Excellent static site hosting with good CI/CD
- Works with Next.js but not all features are natively supported (some SSR features require adapters)
- Good free tier
- Slightly more configuration needed for Next.js-specific features

**3. GitHub Pages**
- Free hosting for static sites
- Does not support server-side rendering at all
- Would require exporting Next.js as a fully static site, losing SSR benefits
- Limited build configuration
- No built-in form handling or edge functions

### Decision Rationale

Vercel is the natural choice for a Next.js project:

1. **Zero-config deployment.** Connect the GitHub repo, and every push automatically deploys. No CI/CD pipeline to configure.

2. **Full Next.js feature support.** SSR, ISR (Incremental Static Regeneration), API routes, image optimization — everything works out of the box on Vercel because they build both products.

3. **Automatic deployment logs.** Every deployment is timestamped and logged, creating an additional audit trail of website updates alongside git history.

4. **Performance.** Global CDN with edge caching means fast load times regardless of where visitors are located.

5. **Free for our scale.** The Vercel hobby/pro plan handles our traffic level comfortably.

---

## Content: Markdown Files in `content/` Directory

### Approach

All property data, market research, tenant resources, and area guides are stored as markdown (`.md`) files in a `content/` directory rather than hardcoded in React components or stored in a database.

### Rationale

1. **Clear git diffs.** Every content update — a new property description, updated rental pricing, revised tenant guide — shows up as a readable diff in git history. This creates a detailed, timestamped audit trail of all content work performed.

2. **Separation of content and presentation.** Property data lives in markdown; React components handle layout and styling. This makes it easy to update content without touching code, and vice versa.

3. **No database needed.** For a site with ~20-30 content pages, a database would be overkill. Markdown files are simple, fast, and version-controlled.

4. **Portable and future-proof.** If we ever need to migrate to a different framework or CMS, markdown content transfers easily.

---

## Summary

| Decision | Choice | Key Reason |
|----------|--------|------------|
| Framework | Next.js (App Router) + TypeScript | SEO, content-driven architecture, room to grow |
| Styling | Tailwind CSS | Brand consistency, fast responsive development |
| Hosting | Vercel | Zero-config Next.js deployment, audit-trail-friendly logs |
| Content | Markdown in `content/` | Clean git diffs for audit trail, separation of concerns |
