# ContractorSEO — AI SEO Page Generator for Contractors

## What This Is
A SaaS tool that generates SEO-optimized landing pages for contractors (HVAC, plumbing, electrical, roofing, landscaping, painting). Contractors enter their trade + city and get a ready-to-publish landing page optimized for local search.

## Stack
- Next.js 16 + React 19 + Tailwind CSS 4
- Supabase (auth + database + storage)
- Vercel deployment
- TypeScript strict mode

## Architecture
- `/` — Landing page with demo
- `/signup`, `/login` — Auth flows (Supabase)
- `/dashboard` — User's generated pages
- `/generate` — Page generator wizard
- `/preview/[slug]` — Live preview of generated page
- `/pricing` — Plans (Free: 1 page, Pro: $19/mo unlimited)

## Coding Standards
- Clean Code (Uncle Bob): DRY, SRP, SOC
- All components in `src/components/`
- All API routes in `src/app/api/`
- All types in `src/lib/types.ts`
- All Supabase clients in `src/lib/supabase/`
- Error boundaries on every page
- Loading states on every async operation
- Mobile-first responsive design

## Commands
- `bun dev` — local dev
- `bun run build` — production build
- `bun run lint` — ESLint

## What Needs Doing
1. Connect to real Supabase instance (share with scrapechat: yxpxfmsyyhcnllqcpicp)
2. Make the page generator actually work (AI-powered content generation)
3. Add Playwright e2e tests
4. Polish UI/UX — dark theme, animations, professional feel
5. SEO meta tags on all pages
6. Error handling everywhere
7. Deploy to Vercel
8. Make it production-ready — not a demo
