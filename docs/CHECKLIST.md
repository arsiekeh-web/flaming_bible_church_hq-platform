# FEMI Platform — Completion Checklist

**Purpose:** one authoritative list of what's done, what's left, and what's genuinely out of scope for now. Organized by what actually blocks a real launch, not just by category.

---

## Phase A — Core pages (the "frontend" work, same as Backend Handoff Step 7)

| Page | Status | Notes |
|---|---|---|
| Home | ✅ Built | Real branding, live Supabase queries, honest empty states |
| Login / Signup | ✅ Built | Restyled, functional |
| Portal | ✅ Built (simplified) | Shows member info + groups; RSVP section removed per your call |
| Sermons | ❌ Not built | See Handoff §7a |
| Events + RSVP | ❌ Not built | See Handoff §7b — two RSVP paths, `rsvp_required` flag |
| Church Groups directory | ❌ Not built | See Handoff §7c |
| YDY mini-site page | ❌ Not built | Tabs pattern from prototype, not yet ported to real Next.js |
| Admin dashboard | ❌ Not built | See Handoff §7d — deliberately last |

**This phase is the actual bulk of remaining work.** Everything below matters, but this is what makes the site *functional* rather than a styled shell.

---

## Phase B — Cross-cutting frontend work (easy to forget, not page-specific)

- [ ] **`loading.tsx` files** — Next.js shows a blank white screen while a page's data loads unless you add one. Each major route (`sermons/`, `events/`, `groups/`) should have a simple loading state.
- [ ] **`error.tsx` / `not-found.tsx`** — right now, a broken query or a bad URL shows Next.js's raw default error screen, not anything branded. Worth at least one root-level `error.tsx` and `not-found.tsx`.
- [ ] **Form validation and user-facing error messages** — the login form has basic validation; RSVP forms, guest interest forms, and join-group actions need the same treatment (what does the person see if a submission fails?).
- [ ] **Real images beyond the logo** — the Next.js app currently only has `public/logo.png`. The prototype had real congregation/event photos base64-embedded; the real app needs those as actual files in `public/` or Supabase Storage, referenced properly.
- [ ] **Metadata per page** — right now only the root layout sets a page title. Each route should set its own (`export const metadata` in each `page.tsx`) so browser tabs and search results show useful titles, not all "FEMI Platform" repeated.
- [ ] **Mobile responsiveness check on the real Next.js app** — the *prototype* got the viewport-meta fix; the actual Next.js app hasn't been checked on a real phone yet at all. Don't assume it's fine because the prototype was fixed — verify separately.
- [ ] **Accessibility basics** — the PRD's NFR section commits to WCAG 2.1 AA: alt text on every image, keyboard navigation working (tab through the site, can you reach every link/button?), sufficient color contrast (check the gold-on-white text especially).

---

## Phase C — Backend/data work not covered by page-building

- [ ] **Seed data** — every table is currently empty. Before this feels like a real site (even to you, testing it), someone needs to add a handful of real events, a few real sermons, and real group info via SQL Editor or (once built) the admin dashboard.
- [ ] **Video hosting decision** — the `sermons` table has a `video_url` field, but nothing decides *where* that video actually lives. YouTube (free, has ads) vs. Vimeo/Cloudflare Stream (paid, no ads) — this was flagged early in our planning and never actually decided.
- [ ] **Image storage** — for event photos, group photos, etc. Supabase has a Storage feature for this (separate from the database) — not yet set up or decided on.
- [ ] **Guest interest abuse prevention** — flagged in `auth-architecture.md` §5 as a production requirement: rate-limiting and light bot protection on the no-login `event_interest` form. Not implemented — currently anyone can spam that form with no friction.
- [ ] **Email delivery for real signups** — Supabase's default confirmation emails run on a shared, rate-limited service, fine for testing, not reliable enough for a real launch with real congregation signups. Production needs a proper email provider (e.g. Resend, Postmark) connected to Supabase.

---

## Phase D — Infrastructure / going live

- [ ] **Domain name** — not purchased yet
- [ ] **Hosting** — Vercel account not created; this is the natural pairing for Next.js but hasn't been set up
- [ ] **Environment variables in production** — the `.env.local` values need to be configured in Vercel's dashboard separately; they don't travel with the code
- [ ] **A real Supabase production tier decision** — you're currently on Supabase's Free tier (per your earlier screenshot). Free tier pauses projects after a week of inactivity and has real limits — worth knowing before this is live and depended on
- [ ] **Backups** — Supabase handles some of this on paid tiers; worth explicitly confirming what backup policy applies before real member data lives there
- [ ] **Basic monitoring** — knowing if the site goes down, not just hoping someone notices

---

## Phase E — Non-technical / organizational (not code, but blocks a real launch)

- [ ] **Who is staff, ongoing** — a named real person, not just whoever's testing tonight, needs to own publishing sermons and managing events after this ships
- [ ] **Content production pipeline** — someone has to actually film/edit sermons and write event descriptions weekly; the site is only as good as what gets put into it
- [ ] **Data-handling policy sign-off** — PRD §4 describes the policy; someone in leadership needs to actually approve it, not just have it exist as a paragraph

---

## Explicitly NOT in scope right now (Phase 2, not forgotten)

- Online giving / tithing — needs its own payment-processing security review
- Prayer requests — needs its own pastoral-accountability design pass
- Shop / merchandise checkout — same payment-processing reasoning as giving
- Push notifications
- Volunteer scheduling
- Per-group dedicated URLs beyond YDY's tab pattern (e.g. `/groups/ydy` as a real distinct route structure, if more groups need YDY's level of richness)

---

## Suggested order if you want a straight line to "launch-ready"

1. **Phase A** (Sermons → Events → Groups → Admin) — this is the actual product
2. **Phase C's seed data + video hosting decision** — needed to make Phase A pages show anything real
3. **Phase B's cross-cutting polish** — do this alongside Phase A, not after; each page you build should get its loading/error/metadata treatment as you build it, not retrofitted later
4. **Phase D** — only once A–C work locally and you're ready for the public to actually see it
5. **Phase E** — should be happening in parallel the whole time, since it's not code-blocked
