# FEMI Platform — Web (walking skeleton)

This is **not** the real site yet. It's the thinnest possible slice proving
one thing end to end: real login → real session → a real RLS-protected
database query. If this works, the architecture in `../docs/auth-architecture.md`
is validated. If it doesn't, better to find out now than after three features
are built on top of it.

## Setup

1. **Run the migration first** — this app does nothing useful without it.
   - Open your Supabase project → SQL Editor → New Query
   - Paste the entire contents of `../database/migrations/0001_init.sql`
   - Run it

2. **Get your API keys**
   - Supabase project → Settings → API
   - Copy the Project URL and the `anon` `public` key

3. **Configure environment**
   ```
   cp .env.example .env.local
   ```
   Then paste your real anon key into `.env.local` (the URL is already filled in
   from your project screenshot — double check it matches).

4. **Install and run**
   ```
   npm install
   npm run dev
   ```
   Open http://localhost:3000

## What to actually test

1. Go to `/login`, use the **Sign Up** button with a real email + password.
   - If email confirmation is on by default in your Supabase project, check
     your inbox and confirm before logging in.
2. Log in with the same credentials.
3. You should land on `/portal` and see your own name, role (`member` by
   default), and join date.
4. **This is the important part:** open your Supabase project → Table Editor →
   `members` table. Manually change your row's `role` to `staff`, then reload
   `/portal` — the role shown should update. That single test proves the
   database is the source of truth, not the app pretending client-side.

## What this skeleton deliberately does NOT include

Events, sermons, RSVP, groups, shop — none of it. Those are real features to
build next, once this thin slice is confirmed working. Adding them before
confirming this would mean building on an unproven foundation.
