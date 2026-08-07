# User Flows — Flaming Evangelical Ministries International Platform

Reference against `church_platform_sitemap.mermaid` for page names.

---

## Flow 1 — Visitor: Discovering the church and watching a sermon

**Goal:** A person who has never attended finds the church online and gets enough to decide to visit or watch.

1. Lands on **Home** — sees service times teaser, a hero image, and a clear CTA to watch the latest sermon or plan a visit.
2. Clicks **Plan Your Visit** → scrolls to **Visit Us**, sees service times and the physical address (Ascension Town Road, Ascension Town Community, Freetown) with a "Get Directions" link.
3. Clicks **Sermon Archive** → browses without logging in.
4. Selects a speaker from the filter dropdown → sermon list updates immediately, no search button required.
5. Opens a **Sermon Player Page** → watches, no account required.

**Design implication:** nothing in this flow should require an account. Any login prompt here is a drop-off point.

---

## Flow 2 — Visitor: Expressing interest in an event without an account

**Goal:** Someone who isn't ready to create an account still wants to signal they're coming.

1. From **Home** or **Events Calendar**, opens an **Event Detail Page**.
2. Sees two CTAs: **"I'm Interested — No Account Needed"** and **"RSVP as Member."**
3. Clicks the guest option → **Guest Interest form** (name + phone, nothing else) → submits.
4. Lands on a **Guest Confirmation** screen: interest noted, a team member may follow up, no account created.

**Design implication:** this is the fix for a real accessibility problem — requiring account creation just to say "I'm coming" suppresses attendance signal from newcomers. The guest path and the Member RSVP path both write to the same event, just to different tables (`EVENT_INTEREST` vs `RSVP` in the ERD), so staff still see full interest in one place operationally, even though the technical records differ.

---

## Flow 3 — Visitor: Browsing Church Groups and a group microsite

**Goal:** Someone considers joining a small group before ever creating an account.

1. Clicks **Church Groups** in the main nav (or the dropdown) → lands on the **Church Groups Directory**, fully public.
2. Browses the list — most groups show a simple detail page (meeting time, description, member count).
3. Clicks **YDY** → lands on the YDY page, which has its own internal tab bar: **About / Events / Shop / Contact.**
4. Browses YDY's Events tab without logging in, and its Shop tab, which deep-links into the church-wide Shop filtered to YDY merch.
5. Decides to join → clicks **Join YDY** → since not logged in, redirected to Login/Register with context preserved ("Log in to join this small group").

**Design implication:** browsing is fully open; only the act of joining is gated. This mirrors the RSVP pattern — browsing and expressing interest stay open, committing requires identity.

---

## Flow 4 — Member: RSVP to an event and join a small group

**Goal:** An existing member uses the platform for the two things it actually replaces (paper sign-up sheet, word-of-mouth group invites).

1. Lands on **Home**, clicks **Login**.
2. Enters credentials → lands on **Member Portal**.
3. From portal, clicks **Events Calendar** → finds an upcoming members-only event.
4. Opens **Event Detail Page** → clicks **RSVP as Member** → since already logged in, skips the login gate → lands on **RSVP Confirmation**.
5. Separately, navigates to **Church Groups** from the portal or main nav → browses, opens a **Group Detail** page → clicks **Join This Group** → since logged in, skips the login gate → lands on **Join Confirmation**.

**Design implication:** the login gate (`JoinGate` / `LoginCheck` in the sitemap) is the one place Visitor and Member flows intersect for both RSVP and group-joining — a visitor who tries either gets redirected to Login/Register with intent preserved, then routed straight to the confirmation screen after logging in, not dropped back at Home.

---

## Flow 5 — Visitor/Member: Browsing the Shop (concept only)

**Goal:** Demonstrate the merchandise concept without implying a working payment system exists.

1. Clicks **Shop** in the main nav → sees three categories: Church Merch, Reverence Merch, Group Merch (e.g. YDY).
2. Selects a category → product grid appears with prices shown for illustration.
3. Clicks any "Checkout" button → sees an explicit message that checkout isn't part of this concept, with the same reasoning given for excluding online giving (PCI-DSS scope, payment processor integration).

**Design implication:** this flow exists to sell the *idea* in the pitch, not to imply commerce is v1. Keep the messaging on every checkout attempt — removing it would make the mockup look like a broken feature instead of a deliberate scope boundary.

---

## Flow 6 — Visitor: Reverence flagship event page

**Goal:** Show the two-segment pattern for major recurring events.

1. From **Events Calendar** or the Home hero, clicks through to **Reverence**.
2. Sees a dedicated page: hero treatment, "About Reverence" description, distinct from a regular event card.
3. Clicks **Shop Reverence Merch** → lands in the Shop, pre-filtered to the Reverence category.

**Design implication:** this pattern (calendar entry → dedicated page → shop tie-in) is reusable for future flagship events, but was only built for Reverence as a demonstrated example — not applied to every event in this prototype.

---

## Flow 7 — Staff/Admin: Publish a new sermon and manage an event

**Goal:** Church staff use the platform as their operational tool, not just a public-facing site.

1. Logs in with staff credentials → routed to **Admin Dashboard** instead of the Member Portal.
2. Clicks **Upload / Tag Sermons** → uploads video file (or streaming link), tags with speaker, series, and date.
3. Publishes → sermon becomes visible on the public **Sermon Archive** immediately.
4. Separately, clicks **Manage Events** → creates a new event, sets capacity, marks it members-only or public, and optionally flags it as a flagship event with its own dedicated page (see Flow 6).
5. Reviews **Manage Group Rosters** → can add a member to a group directly, without that member ever logging in — this matters because not every congregant will use the website, and group membership shouldn't require them to.
6. Reviews **Manage Member Accounts** → can deactivate accounts without deleting historical RSVP/attendance data.

**Note:** per the earlier scope discussion, this flow is documented here for completeness and for the funded-build spec, but is **not** part of the clickable prototype — the pitch demo runs through Flows 1–6.
