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
- [Page generation (sequence)](#page-generation-sequence)
- [User flow (state)](#user-flow-state)
- [Getting Started](#getting-started)
- [Deploy](#deploy)
- [🗺️ Repository map](#️-repository-map)

## Page generation (sequence)

```mermaid
sequenceDiagram
    participant U as contractor
    participant W as /generate wizard
    participant API as /api/generate
    participant AI as LLM (SEO copy)
    participant DB as Supabase
    participant ST as Supabase Storage

    U->>W: enter trade + city
    W->>API: POST {trade, city}
    API->>AI: prompt(SEO landing for trade+city)
    AI-->>API: title + meta + sections
    API->>ST: store assets (if any)
    API->>DB: insert page row
    DB-->>API: slug
    API-->>W: redirect /preview/[slug]
    W-->>U: live preview + publish CTA
```

## User flow (state)

```mermaid
stateDiagram-v2
    [*] --> Visitor
    Visitor --> Auth: signup / login
    Auth --> Dashboard
    Dashboard --> Generate: new page
    Generate --> Preview: AI returns draft
    Preview --> Dashboard: save
    Preview --> Published: publish slug
    Visitor --> Pricing: view plans
    Pricing --> Auth
    Published --> [*]
```

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


## 🗺️ Repository map

Top-level layout of `contractor-seo` rendered as a Mermaid mindmap (auto-generated from the on-disk tree).

```mermaid
mindmap
  root((contractor-seo))
    public/
      file.svg
      globe.svg
      next.svg
      vercel.svg
      window.svg
    src/
      app
      components
      lib
      middleware.ts
    supabase/
      migrations
    files
      README.md
      next.config.ts
      package.json
      tsconfig.json
```
