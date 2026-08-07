# Flaming Evangelical Ministries International — Digital Platform

Concept prototype and planning documents for the FEMI church platform. This repo covers two distinct phases: **the pitch deliverable** (frozen, presented to leadership) and **funded-build planning** (active, ongoing).

## Structure

```
femi-platform/
├── docs/                      Planning documents — living, updated as decisions are made
│   ├── VISION.md               ⭐ Start here — the project's purpose, audience, and direction
│   ├── PRD.md                 Scope, roles, feature tiers, NFRs
│   ├── ERD.mermaid            Database schema (render at mermaid.live or in any Mermaid-aware viewer)
│   ├── sitemap.mermaid         Full site structure by role
│   ├── user-flows.md          Step-by-step flows per role/scenario
│   ├── auth-architecture.md   RBAC, RLS policies, session model for the funded build
│   └── BACKEND-HANDOFF.md     Step-by-step setup and build guide for backend developers
│
├── database/
│   └── migrations/
│       └── 0001_init.sql      Real, runnable Postgres — the ERD turned into actual schema + RLS
│
├── web/                       Next.js walking skeleton — login → session → protected route.
│                               Not the real site. See web/README.md before running anything.
│
└── prototype/
    └── index.html              The clickable concept prototype — frozen as of the pitch, not updated
                                with post-pitch planning decisions (see docs/ for those)
```

## Status

- **Prototype:** presented for leadership approval. Not touched since the pitch — treat as a snapshot, not a living build.
- **Docs:** active. `PRD.md` and `ERD.mermaid` reflect decisions made *after* the prototype (e.g. per-event RSVP, auth model) that are not yet reflected in `prototype/index.html` by design.
- **Database migration:** written, not yet run — run it in Supabase before touching `web/`.
- **Web skeleton:** written, not yet tested — see `web/README.md` for the exact steps to prove it works before building real features on top.

## Viewing the ERD / sitemap

`.mermaid` files aren't images — paste their contents into [mermaid.live](https://mermaid.live) or any Mermaid-compatible renderer (many Markdown editors, including Notion and VS Code with the right extension, render them inline).
