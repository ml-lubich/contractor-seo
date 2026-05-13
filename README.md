# ContractorSEO

> AI SEO page generator for contractors (HVAC, plumbing, electrical,
> roofing, landscaping, painting). Enter your trade + city, get a
> ready-to-publish landing page optimized for local search.

```mermaid
flowchart LR
    USER[("👤 contractor")]
    LANDING["🌐 / · landing"]
    AUTH{{"🔐 /signup · /login<br/>Supabase Auth"}}
    DASH["📊 /dashboard<br/>your pages"]
    GEN["🪄 /generate<br/>wizard"]
    AI["🤖 AI page gen<br/>SEO copy"]
    DB[("🗄 Supabase<br/>Postgres + Storage")]
    PREVIEW[/"🖼 /preview/[slug]"/]
    PRICING[/"💳 /pricing"/]

    USER --> LANDING
    LANDING --> AUTH --> DASH
    DASH --> GEN --> AI --> DB
    DB --> PREVIEW
    LANDING --> PRICING

    classDef io fill:#0e1116,stroke:#2f81f7,stroke-width:1.5px,color:#e6edf3;
    classDef tool fill:#161b22,stroke:#3fb950,stroke-width:1.5px,color:#e6edf3;
    classDef brain fill:#161b22,stroke:#d29922,stroke-width:1.5px,color:#e6edf3;
    classDef out fill:#0e1116,stroke:#a371f7,stroke-width:1.5px,color:#e6edf3;
    class USER,DB io;
    class GEN,AI,LANDING,DASH tool;
    class AUTH brain;
    class PREVIEW,PRICING out;
```

## Table of contents

- [Stack](#stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Deploy](#deploy)

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

## Getting Started

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Deploy

The easiest way to deploy is via the [Vercel Platform](https://vercel.com/new). See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for details.
