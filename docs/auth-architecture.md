# Auth & RBAC Architecture — Flaming Evangelical Ministries International Platform

**Provider:** Supabase Auth (Postgres + built-in auth + Row Level Security)
**Status:** Architecture spec for the funded build — not implemented in the pitch prototype.

---

## 1. Trust levels (not just "logged in or not")

| Level | Has an `auth.users` row? | How they act |
|---|---|---|
| Visitor | No | Browses everything public — sermons, events, groups, shop |
| Guest (event interest) | No | Submits name + phone via a public insert, no session created |
| Member | Yes, `role = 'member'` | RSVPs, joins groups, has portal state |
| Staff | Yes, `role = 'staff'` | Manages content, rosters, accounts |

Visitor and Guest never touch `auth.users` at all — the guest path is a plain public `INSERT` into `event_interest`, not a lightweight account. That distinction matters: if guest submissions accidentally created shadow auth users, you'd have silently undermined the "no account needed" promise from the PRD.

---

## 2. Roles table

Supabase's `auth.users` stays untouched (email, password hash, etc. — Supabase's problem, not yours). Extend it with a `public.members` table, one row per authenticated user:

```sql
create table public.members (
  id uuid primary key references auth.users(id),
  full_name text not null,
  role text not null default 'member' check (role in ('member','staff')),
  created_at timestamptz default now(),
  is_active boolean default true
);
```

No self-service path to `role = 'staff'`. First staff row is seeded manually at deployment; further staff accounts are promoted by an existing staff member through an admin-only action, never through signup.

---

## 3. Session model

- Supabase issues a short-lived JWT access token (1 hour) plus a rotating refresh token on login.
- Tokens live in **httpOnly, secure cookies**, set via Supabase's server-side session helper — not `localStorage`. This is the one non-negotiable call here: `localStorage` tokens are readable by any injected script (XSS), and this system holds real member PII. Cookie-based sessions with the SSR helper close that off with no added complexity over the alternative.
- The JWT carries the user's `id`; every RLS policy below resolves role by joining back to `public.members` from `auth.uid()` — the role is never trusted from client-sent data.

---

## 4. Row Level Security — the actual enforcement layer

This is what makes RBAC real instead of decorative. The NFR in the PRD says "enforced at the API layer, not just hidden in the UI" — RLS is that layer; it runs in Postgres itself, so even a compromised or buggy frontend can't bypass it.

```sql
-- Members: a member reads/updates their own row; staff reads/updates all
create policy "member_read_own" on members
  for select using (auth.uid() = id);
create policy "staff_read_all_members" on members
  for select using (exists (select 1 from members m where m.id = auth.uid() and m.role = 'staff'));
create policy "staff_manage_members" on members
  for update using (exists (select 1 from members m where m.id = auth.uid() and m.role = 'staff'));

-- Events, Sermons, Church Groups: public read for everyone, including anonymous visitors
create policy "public_read_events" on events for select using (true);
create policy "staff_write_events" on events
  for insert with check (exists (select 1 from members m where m.id = auth.uid() and m.role = 'staff'));
-- (same pattern for update/delete, and mirrored for sermons and church_groups)

-- RSVP: a member manages only their own; staff reads all
create policy "member_own_rsvp" on rsvp
  for all using (auth.uid() = member_id);
create policy "staff_read_all_rsvp" on rsvp
  for select using (exists (select 1 from members m where m.id = auth.uid() and m.role = 'staff'));

-- Event Interest (guest path): anyone can insert, nobody but staff can read
create policy "anyone_submits_interest" on event_interest
  for insert with check (true);
create policy "staff_reads_interest" on event_interest
  for select using (exists (select 1 from members m where m.id = auth.uid() and m.role = 'staff'));

-- Member ↔ Group: a member can join themselves; staff can add anyone (the "no login required" roster case from the PRD)
create policy "member_joins_self" on member_group
  for insert with check (auth.uid() = member_id);
create policy "staff_manages_rosters" on member_group
  for all using (exists (select 1 from members m where m.id = auth.uid() and m.role = 'staff'));
```

---

## 5. Guest interest abuse prevention (production requirement, not prototype scope)

A public `INSERT` with no auth is also an open door for spam. Before this ships:
- Rate-limit by IP and by phone number (a Postgres function checking submission frequency, or a Supabase Edge Function in front of the insert)
- Add a lightweight bot check (e.g. Cloudflare Turnstile) on the guest form — not a full CAPTCHA, just enough friction to stop scripted abuse without adding friction for a real visitor typing their name on a phone

---

## 6. Why this over custom auth

Hand-rolling JWT issuance, password hashing, and session refresh is real security surface area for a team of one to maintain indefinitely. Supabase's auth is a dedicated vendor's core product; RLS policies are the part that's actually yours to get right, and they're auditable as plain SQL — something a future developer (or a security-minded volunteer) can read and verify without reverse-engineering custom middleware.
