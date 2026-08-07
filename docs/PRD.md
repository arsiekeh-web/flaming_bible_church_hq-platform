# Flaming Evangelical Ministries International — Digital Platform PRD (v1 Concept)

**Status:** Concept / pitch draft — not an approved build
**Prepared for:** Pitch to Bishop Dr. Frederick Abu Sidique Koroma & Rev. Dr. Lady Patricia Koroma (General Overseers), and Head Pastor Rev. Olamide Macculey
**Location:** Ascension Town Road, Ascension Town Community, Freetown, Sierra Leone
**SDLC posture:** RAD (User Design stage) for tonight's prototype → Spiral for the funded build, given the risk profile of member data (see §7)

---

## Brand Reference

| Element | Value |
|---|---|
| Primary — Royal Blue | `#0A3B8C` |
| Secondary — Crimson Red | `#7A0C10` |
| Accent — Gold | `#C6952F` |
| Neutral — White | `#FFFFFF` |
| Typography direction | Serif/display for headers (matches the crest's formal, ecclesiastical mark), clean sans-serif for body copy |
| Motto | "How shall they hear without a preacher" — Romans 10:14 |

Hex values sampled directly from the submitted crest, then cleaned to standard brand-usable codes — confirm against any existing print/signage before locking as final.

---

## 1. Vision

A single platform that replaces fragmented tools (bulletin PDFs, a Facebook group, a paper sign-up sheet) with one system, scoped deliberately small for v1: **information and connection — not money, not pastoral casework.**

Giving/tithing is explicitly out of scope (see §2.2). This is a design decision, not a missing feature: it removes PCI-DSS scope, payment processor integration, and financial data from the schema entirely, which cuts the security surface area of v1 dramatically. Merchandise sales (§9) inherit the same reasoning.

---

## 2. Scope

### 2.1 In scope — v1 must-haves

| Feature | Description |
|---|---|
| Event calendar & RSVP | Public + member-only events, capacity limits. RSVP is **per-event, not universal** — staff mark an event `rsvp_required` only when headcount actually matters (catering, seating, resource planning). Routine services show info only, no RSVP block. When RSVP is required: full Member RSVP (tied to account) and a lightweight no-account **"I'm Interested"** path (name + phone) — see §2.1a. |
| Sermon streaming/archive | Video playback, searchable/filterable by date, speaker, series — filtering applies live on selection, no separate search button |
| Church Groups directory | Public to browse for everyone, including visitors. Joining a group requires a Member account, same as before — browsing does not. |
| Visit Us | Service times + physical address/directions, public, no account required |

**2.1a — Why two RSVP paths (for events that need one):** gating "I want to attend" behind account creation suppresses attendance signal from exactly the people a church most wants to reach — newcomers and the not-yet-committed. The guest path solves that without weakening the Member RSVP's value (history, reminders, portal integration). Neither path reaches people with zero internet access — that gap is inherent to any web platform and stays covered by existing offline channels (pulpit announcements, phone), which the site supplements rather than replaces. Note this only applies when `rsvp_required` is true for the event — most routine services won't set it.

### 2.2 Explicitly out of scope — v1

| Excluded | Why |
|---|---|
| Online giving/tithing | Avoids PCI-DSS scope, no payment integration, no financial data in schema. Revisit as a v2 initiative with its own risk review. |
| Shop / merchandise checkout | Same reasoning as giving — real payment processing, real cardholder data, same PCI-DSS exposure regardless of whether the product is a tithe or a t-shirt. Browsing (categories, product cards) is fine to demo; checkout is not v1. See §9.2. |
| Prayer requests (any form) | Cut from v1 entirely — see §6. Not deferred over an accountability tradeoff; removed from scope outright for the pitch. |
| Live chat / messaging between members | Moderation and safeguarding overhead not justified for v1 |
| Native mobile app | Responsive web only for v1 |
| Fully independent group "sub-platforms" | Church Groups get dedicated pages inside the main site (same login, same account, same database) — not separate builds with their own accounts. See §9.1. |

### 2.3 Phase 2 candidates (not committed)

- Online giving (separate risk review required)
- Shop checkout / payment processing (separate risk review required — see §9.2)
- Prayer requests (if reintroduced, needs its own accountability/anonymity design pass — see §6)
- Push notifications for event reminders
- Sermon note-taking / highlights tied to member accounts
- Group attendance tracking for leaders
- Volunteer scheduling
- Dedicated URL routing per group (`/groups/ydy`) if the group-page pattern scales past a handful of groups — see §9.1

---

## 3. User Roles

| Role | Can do | Cannot do |
|---|---|---|
| **Visitor** (unauthenticated) | View public events, browse/watch public sermons, browse Church Groups directory and group pages, submit "I'm Interested" for an event (no account), view church info, browse Shop (browse only) | RSVP as a member, join a group, see member-only content, check out in Shop |
| **Member** (authenticated) | Everything a Visitor can do, plus: RSVP to events (tracked), join Church Groups, full sermon archive | Access admin tools, manage content |
| **Staff/Admin** | Everything a Member can do, plus: manage events, upload/tag sermons, manage group rosters (including adding members who don't use the site themselves), manage member accounts | — |

---

## 4. Non-Functional Requirements

These are the pitch's "highly secured" commitment made concrete — architecture intent for the funded build, not claims about what exists tomorrow.

**Security**
- Encryption in transit (TLS) and at rest for all member data
- Role-based access control (RBAC) enforced at the API layer, not just hidden in the UI
- Secure authentication (hashed + salted credentials, or third-party auth provider; session expiry; no plaintext password storage)
- Written data-handling policy for member data (who can see what, retention period, deletion process) — a policy document, not just code

**Performance**
- Sermon video served via CDN/streaming, not raw file hosting, to keep page load reasonable on mobile data connections common in the congregation
- Calendar and RSVP interactions target sub-1s response for common actions

**Accessibility**
- WCAG 2.1 AA baseline: keyboard navigation, alt text, sufficient color contrast, captions on sermon video (also serves congregants with hearing loss and non-native English speakers)

**Responsive / cross-device (added after prototype QA)**
- Every page must render correctly at the device's actual width on first load — requires an explicit `<meta name="viewport">` declaration, not just CSS breakpoints. Missing this caused the prototype to render two different layouts (mobile hamburger nav vs. zoomed-out desktop nav) depending on which browser opened the same file. Test on at least two distinct mobile browsers before considering a page "responsive," not just one.

**Data handling**
- No financial data in schema (by design, see §2.2)
- No pastoral/prayer data in schema for v1 (by design, see §6) — the member data collected is limited to identity, event attendance, and group membership
- Guest interest submissions (name + phone, no login) are lower-sensitivity than member data but still personal data — same retention/deletion policy applies

---

## 5. Feature Tier Summary

**Must-have (v1):** Event calendar & RSVP (member + guest paths), sermon archive with live filtering, Church Groups directory (public browse, member join), Visit Us, RBAC across 3 roles, responsive design verified cross-browser.

**Phase 2:** Online giving, shop checkout, prayer requests (with its own accountability design pass), notifications, attendance tracking, volunteer scheduling, sermon notes, per-group URL routing.

---

## 6. Design Decision: Prayer Requests Cut From v1 (Pitch Talking Point)

**Decision:** Prayer requests are not part of v1 at all — not deferred as a feature with an anonymity tradeoff, removed from scope entirely.

**Why this framing matters for the pitch:** the earlier draft of this concept included prayer requests with staff-only visibility as a deliberate accountability design. That feature is now cut, which is a simpler story to tell leadership tonight, but it does remove one of the three original "non-negotiable" pillars from the original scope. Be ready for the question "wasn't prayer request submission one of the core features?" — the honest answer is yes, and it was cut to keep v1 tightly scoped to information + connection, with pastoral care handled the way it is today until a dedicated design pass justifies bringing it back.

**Suggested framing:** *"We deliberately left prayer requests out of this version. It's a feature that deserves its own careful design work around privacy and pastoral accountability — we didn't want to rush that decision just to hit a v1 deadline. This platform handles information and connection well; pastoral care stays personal for now."*

---

## 7. SDLC Rationale

- **Tonight's prototype:** RAD, User Design stage — fast, iterative, throwaway-friendly mockup built directly with stakeholder (you, then leadership) feedback in the loop. Appropriate because the goal is concept validation, not production code.
- **Funded build:** Spiral model. Justification: even without pastoral data, the system still handles member identity, contact info, and group affiliation — sensitive enough to warrant Spiral's repeated risk-analysis phases rather than a single upfront pass. Waterfall under-weights risk review for a system like this; pure Agile under-weights upfront security architecture for member data with real reputational risk if mishandled.

---

## 8. Open Items — Status

1. ~~Church name, neighborhood~~ — Flaming Evangelical Ministries International, Freetown ✓
2. ~~Logo file~~ — received ✓
3. ~~Brand colors~~ — sampled from logo, see Brand Reference above ✓
4. ~~Service times / leader names~~ — received ✓
5. ~~Photos~~ — real event/congregation photos received ✓
6. ~~Prayer request visibility decision~~ — moot, feature cut from v1 entirely ✓
7. ~~Street address~~ — Ascension Town Road, Ascension Town Community, Freetown ✓

No blockers remain.

---

## 9. Concept Additions Beyond Core v1 (Demo Scaffolding, Not Committed Scope)

These were added to the clickable prototype to make the pitch demo more compelling and to show *where this can go*. They are explicitly **not** part of the three-feature v1 commitment in §2.1 and §5 — worth stating out loud in the pitch so the vision doesn't get mistaken for the plan.

### 9.1 Church Groups as pages within the main site

Small Groups was renamed/restructured to **Church Groups**: a public directory (browsable by visitors) where each group can have its own dedicated page. One example — **YDY (Young Dynamic Youth)** — was built out as a fuller page with its own internal tabs (About / Events / Shop / Contact), demonstrating what a richer group page looks like without building a separate platform per group.

**Architectural principle:** one system, one login, one database — a Church Group page is a page, not a second product. If this scales to many groups wanting their own rich pages, the main open question for the funded build is whether each group needs a real distinct URL (e.g. `/groups/ydy`) versus staying tab-based on a shared template. Not a v1 decision.

### 9.2 Shop / Merchandise (browse-only)

Added as a browsable concept: three categories (Church Merch, Reverence Merch, group-specific merch), real product cards, no working checkout. Every "buy" action in the prototype explicitly states checkout isn't part of this concept. This exists to show the *idea* to leadership, not to commit to building commerce alongside a v1 that was deliberately scoped to avoid payment processing entirely (see §2.2).

### 9.3 Reverence — flagship event pattern

Reverence (the annual signature event) got its own dedicated page, separate from the regular event calendar entry — a two-segment pattern: (1) public info on the event card/calendar, (2) a link through to a fuller dedicated page with more detail and its own shop tie-in. This pattern is reusable for any future flagship/recurring event, not just Reverence, but wasn't built for every event in the prototype — only as a demonstrated example.
