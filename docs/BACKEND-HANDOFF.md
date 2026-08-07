# FEMI Platform — Backend Handoff & Project Plan

**For:** the new team member handling backend
**Purpose:** everything you need to understand what this project is, what's already done, and exactly what to do next. No prior context assumed.

---

## 1. What this project actually is

Flaming Evangelical Ministries International (FEMI), a church in Freetown, wants a website. Not just a static "about us" page — a real platform with three types of users (visitors, members, staff) doing real things: watching sermons, RSVPing to events, browsing/joining small groups.

This went through two phases:

1. **A pitch phase** (done) — a fake-but-clickable prototype was built to get church leadership to approve the idea. That's finished and frozen. It's not what you'll be working on.
2. **The real build** (starting now) — this is your job. Real database, real accounts, real security.

**The most important thing to understand:** the prototype and the real build are two separate things on purpose. The prototype was built fast with fake data to sell an idea in one night. The real build is slower, deliberate, and handles real people's real information — so it gets treated with real engineering discipline.

---

## 2. The stack — what we're building with and why

| Piece | Tool | Why |
|---|---|---|
| Database + Auth | **Supabase** | Hosted Postgres database with built-in login/signup and a security feature called Row Level Security (RLS) — explained in §4. We chose this over rolling our own login system because getting authentication wrong is a common, serious security mistake, and Supabase is a company whose whole job is getting that part right. |
| Frontend framework | **Next.js** (React-based) | The framework the actual website pages get built in. Has official, well-documented support for Supabase. |
| Language | **TypeScript** | JavaScript with type-checking — catches a category of bugs before the code even runs. |
| Hosting (planned, not done yet) | Vercel (frontend) + Supabase (database) | Standard pairing for this stack, cheap to start. Not set up yet — comes later. |

You do not need to be an expert in all of these before starting. You need to be able to read SQL (for the database part) and comfortable-enough with JavaScript/React to extend what's already scaffolded.

---

## 3. What's already done (as of today)

### 3.1 Planning documents (`docs/` folder)
- **PRD.md** — the actual scope. What v1 includes, what's explicitly excluded (online giving, prayer requests — both deliberately cut, read the doc for why), and the three user roles.
- **ERD.mermaid** — the database design, as a diagram. Paste it into [mermaid.live](https://mermaid.live) to see it visually.
- **sitemap.mermaid** — every page in the site, by user role.
- **user-flows.md** — step-by-step walkthroughs of what a Visitor, a Member, and Staff each do.
- **auth-architecture.md** — the security model. Read this before touching the database.

**Read these in order before writing any code.** They're not optional context — the database migration and the app code both assume you've read them.

### 3.2 Database migration (`database/migrations/0001_init.sql`)
This is the ERD turned into real, runnable Postgres SQL. It creates:
- 9 tables (members, sermons, events, RSVPs, guest event interest, church groups, etc.)
- Row Level Security policies on every single table

**This has been written but needs to be run** — see §5, Step 1.

### 3.3 Web app skeleton (`web/` folder)
A minimal but real Next.js app proving one specific thing: **login → session → a database query that only works because of security rules, not app code.** It has:
- A home page
- A login/signup page
- A protected "portal" page that shows your own member record

This is deliberately tiny. It does **not** have events, sermons, RSVP, or groups built yet — that's the next phase of work, and probably where you'll spend most of your time.

**Status right now:** it's running locally, signup/login is being tested. Not yet 100% confirmed working end-to-end — that's the very next thing to finish.

---

## 4. The one security concept you must understand: Row Level Security (RLS)

This is the most important idea in the whole backend. Read this twice if needed.

Normally, when an app wants to control who sees what data, the *app code* decides — "if user.role == staff, show this." The problem: that's only as safe as every single place in the code that remembers to check it. Forget one check, and you've leaked data.

**RLS moves that decision into the database itself.** Postgres (the database) is told, as a rule: "nobody can read a prayer request unless they're staff" (we don't have prayer requests in v1, but you get the idea) — and it enforces that rule no matter what the app code does or forgets to do. Even a bug in the frontend can't leak data the database itself refuses to hand over.

Every table in `0001_init.sql` has RLS turned on, with specific policies already written — e.g., a member can read their own row, staff can read everyone's, a guest can submit event interest but never read anyone else's submission. **Your job is to build features on top of this, not to bypass it or write your own separate permission checks in the app code.** If a feature seems to need different access rules than what's there, that's a real conversation to have, not a reason to route around RLS in JavaScript.

---

## 5. Exact next steps, in order

**A note before starting:** every step below assumes zero prior backend experience. If a step feels obvious to you, skip ahead — nothing here is meant to be condescending, it's written so nobody gets stuck on something unstated.

### Step 1 — Get access to the two accounts you need

You need to be invited to two separate places before you can do anything:

1. **Supabase** (the database) — ask the project lead to invite your email to the Supabase organization. You'll get an email invite; accept it and create a Supabase account if you don't have one.
2. **GitHub** (where the code lives) — ask to be added as a collaborator on the `fem-platform` repository. You'll need a GitHub account (free, github.com) if you don't already have one.

Don't proceed past this step until both invites are accepted — everything below depends on having access.

### Step 2 — Get the actual code onto your computer

**What you need installed first:**
- **Node.js** — download from nodejs.org, get the "LTS" version, run the installer, click through with defaults. This is what lets your computer run and understand the code (the app is written in JavaScript/TypeScript, and Node.js is the program that runs that).
- **Git** — download from git-scm.com, same idea, click through the installer with defaults. Git is the tool that downloads the code from GitHub and keeps track of changes.
- **A code editor** — install VS Code (code.visualstudio.com), free. This is just a fancy text editor built for reading and writing code — you'll use it to open and look at files, not just Notepad.

**What a "terminal" is, if you've never used one:** it's a text-only window where you type commands instead of clicking buttons. On Windows, search "cmd" in the Start menu. Every instruction below that starts with a `$` or is in a gray code box is something you type into that window, followed by pressing Enter.

**Actually getting the code:**
1. Open a terminal
2. Navigate to wherever you want the project folder to live on your computer — e.g. your Desktop. Type `cd Desktop` and press Enter (this means "change directory into Desktop")
3. Type this exactly and press Enter:
   ```
   git clone https://github.com/arsiekeh-web/fem-platform.git
   ```
4. This downloads the entire project into a new folder called `fem-platform` inside wherever you were standing. You'll see some text scroll — that's normal.
5. Move into that new folder: `cd fem-platform`, then `cd web` (this is the specific part of the project you'll actually be running)

### Step 3 — Run the database migration (do this before touching the app)

The database tables described in the ERD don't exist yet as real, working tables — they're currently just a plan written in a file. This step turns that plan into an actual, running database.

1. Open the Supabase dashboard → your project
2. Left sidebar → **SQL Editor** → **New Query**
3. Open the file `database/migrations/0001_init.sql` in VS Code (it's in the project folder you cloned)
4. Select everything in that file (Ctrl+A), copy it (Ctrl+C)
5. Paste it into the Supabase SQL Editor, click **Run** (or press Ctrl+Enter)
6. You should see "Success. No rows returned" — that means it worked
7. Confirm it: left sidebar → **Table Editor** — you should now see 9 tables listed (members, sermons, events, etc.)

**If you get an error here, stop and share the exact error text** — don't try to guess-fix SQL errors, since a half-applied migration can leave the database in a confusing partial state.

### Step 4 — Set up your local environment file

The app needs a secret key to talk to the Supabase database, and that key is never stored in the code itself (storing secrets in code is a real security mistake — anyone who sees the code would see the key). Instead, each person running the app locally has their own private copy.

1. Inside the `web` folder, find a file called `.env.example`
2. Make a copy of it, rename the copy to exactly `.env.local` (not `.env.local.txt` — if you can't see file extensions, that's a Windows setting, but just make sure the final name is right)
3. Open `.env.local` in VS Code (right-click the file → "Open with Code," or open VS Code first and drag the file in)
4. You'll see a line like `NEXT_PUBLIC_SUPABASE_ANON_KEY=paste-your-anon-public-key-here`
5. Go to the Supabase dashboard → your project → **Settings** (gear icon, usually bottom-left) → **API**
6. Find the key labeled **anon** / **public** (there's also a `service_role` key — **never use that one**, it bypasses all the security rules and should never be used here)
7. Copy it, paste it in place of `paste-your-anon-public-key-here` in `.env.local`, save the file (Ctrl+S)

### Step 5 — Install the app's dependencies and run it

"Dependencies" just means other people's code this project relies on (for example, the code that talks to Supabase) — instead of writing everything from scratch, the project lists what it needs and one command downloads all of it.

In your terminal, make sure you're inside the `web` folder (type `dir` on Windows or `ls` on Mac — you should see files like `package.json`), then:

```
npm install
```
This will take a minute or two and print a lot of text — that's normal, don't worry if it looks chaotic. It's done when you get your typing cursor back with no more text appearing.

```
npm run dev
```
This actually starts the app. You'll see a line like `Local: http://localhost:3000` — **leave this terminal window open**, closing it stops the app.

Open a web browser, type `localhost:3000` in the address bar, press Enter. You should see a plain page titled "FEMI Platform — dev skeleton."

### Step 6 — Prove the whole chain actually works

This is the most important test in this whole document. It proves five things are correctly connected at once: your computer → the app → Supabase → the database → the security rules.

1. On that `localhost:3000` page, click "Go to Login"
2. Fill in a name, a real email you can check, and any password (6+ characters)
3. Click **Sign Up**
4. Depending on the project's settings, you'll either land straight on a page called `/portal`, or see a message asking you to check your email for a confirmation link first — if so, check your inbox (and spam folder), click the link, then come back and click **Log In** with the same email/password
5. Once you land on `/portal`, you should see your own name and a role (`member` by default)

**Now the actual security proof:** go to your Supabase dashboard → **Table Editor** → find the `members` table → find your row → change the `role` column from `member` to `staff` → save → go back to your browser and refresh the `/portal` page. If it now shows `staff`, that confirms the database itself is controlling what you see — not just something the app is faking on screen. That's the entire point of the security model described in §4 above, proven working.

**If literally anything in Steps 3–6 doesn't match what's described**, stop and ask, with a screenshot of exactly what you see and which step you were on. Guessing past a step that didn't work correctly just means debugging something bigger later.

### Step 7 — Build the real features, one at a time

Once Step 6 is confirmed working, the actual build order (matches the PRD's priority). This section explains *how* to approach each one, not just what it's called.

**First — look at what's already built as your reference pattern.** The home page (`web/app/page.tsx`) and portal page (`web/app/portal/page.tsx`) already show the exact pattern every new feature should follow:
1. Import `createClient` from `@/lib/supabase/server`
2. Call `await createClient()` to get a Supabase connection
3. Run a query like `supabase.from('table_name').select('...')`
4. Handle the case where the result is empty (don't assume data exists)
5. Render it

Every feature below is that same pattern, applied to a different table.

---

**7a. Sermons — build this first**

- **Tables involved** (see `docs/ERD.mermaid`): `sermons`, `speakers`, `series`
- **What to build:** a page at `web/app/sermons/page.tsx` listing all published sermons, and a way to filter by speaker, series, or date. Each sermon links to (or expands into) a detail view with the video.
- **Concretely:** query `sermons` where `published = true`, joined with `speakers` and `series` for the display names (the home page's sermon query already does a version of this join — copy that pattern). For filtering, either do it with URL search params (e.g. `/sermons?speaker=xyz`) and filter the Supabase query server-side, or fetch everything and filter client-side if the list stays small.
- **Why this one first:** it's the simplest — no write operations (no RSVP, no joining), no two-tier public/member logic. Just reading and displaying data. Good for getting comfortable with the pattern before the harder features.

**7b. Events + RSVP**

- **Tables involved:** `events`, `rsvp`, `event_interest`
- **What to build:** a page at `web/app/events/page.tsx` listing events, and a detail page per event. Each event detail page needs to check `rsvp_required` on that event — if false, just show event info; if true, show the two RSVP paths.
- **The two RSVP paths, concretely:**
  - **Member RSVP:** requires a logged-in user (check `supabase.auth.getUser()` same as the portal page does). Writing an RSVP means an `insert` into the `rsvp` table with `member_id` and `event_id`. This needs to be a **Server Action** (see `web/app/login/actions.ts` for the pattern — a function marked `'use server'`).
  - **Guest "I'm interested":** no login required. A simple form (name + phone) that inserts into `event_interest`. Also a Server Action, but doesn't check for a logged-in user at all — the whole point is it doesn't need one.
- **Watch out for:** the RLS policy on `rsvp` only lets a member insert a row where `member_id` matches their own logged-in id — if you try to insert on behalf of someone else, Postgres will silently refuse it. That's the security model working correctly, not a bug to work around.

**7c. Church Groups**

- **Tables involved:** `church_groups`, `member_group`
- **What to build:** a public directory page at `web/app/groups/page.tsx`, plus a detail page per group. For a group with `has_dedicated_page = true` (like YDY), build a richer page with its own internal navigation (tabs), matching what the prototype showed for YDY specifically.
- **Joining a group** follows the same pattern as Member RSVP above: logged-in-only, a Server Action inserting into `member_group`.
- **A detail to get right:** staff should also be able to add a member to a group *without* that member ever logging in (see PRD — not every congregant will use the website). That's a separate, staff-only insert path into `member_group`, which comes with the admin tools in 7d, not this step.

**7d. Staff/Admin tools — build this last**

- **Tables involved:** all of them, but with `role = 'staff'` required
- **What to build:** an admin section (e.g. `web/app/admin/`) for creating/editing events, uploading and publishing sermons, and managing group rosters and member accounts.
- **Every page here needs an extra check** beyond just "is someone logged in" — it needs to confirm the logged-in member's `role` is `staff` (query the `members` table, same as the portal page already does, and check the `role` field before rendering anything or allowing any action). The RLS policies already block staff-only writes at the database level, but checking in the UI too avoids showing someone a form that's just going to fail.
- **Why last:** staff tools manage content that the public pages (7a–7c) display. Building admin before there's anything to display through it means testing against an empty, meaningless database the whole time.

---

For each feature: check `docs/ERD.mermaid` for the relevant tables, check `docs/auth-architecture.md` for the RLS policies already written for those tables, then build the page(s) in `web/app/`, following the pattern already established in `web/app/page.tsx` and `web/app/portal/page.tsx`.

---

## 6. Tools you'll need access to

| Tool | What for | Who has it now |
|---|---|---|
| Supabase project | The actual database | Project owner — get added as a collaborator |
| GitHub (not set up yet) | Version control — so you and the other developer aren't emailing zip files back and forth | Needs to be created — recommend doing this before Step 3 above, not after |
| Node.js | Runs the app locally | Install yourself, free |
| A code editor | VS Code is the standard choice, free, has good TypeScript/React support | Install yourself |
| Vercel account (later) | Where the site actually gets hosted once ready for the public | Not needed yet |

**Recommended immediate action beyond the steps above:** move this project from zip-file-sharing into a real GitHub repository. Working via zip files stops scaling the moment two people are touching code — you'll overwrite each other's work with no way to merge changes safely. This should happen before real feature-building starts, not after.

---

## 7. Who to ask when stuck

- **"What's this feature actually supposed to do?"** → the PRD and user-flows docs answer this first. If genuinely ambiguous, ask the project lead — don't guess on scope.
- **"Is this database change safe?"** → check auth-architecture.md's reasoning first; any new table or policy should follow the same pattern (RLS on by default, explicit policies for each access type).
- **"How do I do X in Next.js/Supabase?"** → Supabase's own docs (supabase.com/docs) and Next.js's docs (nextjs.org/docs) are both good and current — better than guessing from general React knowledge, since the Supabase SSR integration has specific patterns already used in `web/lib/supabase/`.
