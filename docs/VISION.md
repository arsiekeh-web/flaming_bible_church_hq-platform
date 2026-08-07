# FEMI Platform — Project Vision

**Purpose of this document:** everything else (PRD, ERD, handoff docs) assumes you already understand *why* this project exists and *what it's ultimately trying to become*. This document is that missing piece.

---

## 1. The problem, in plain terms

Flaming Evangelical Ministries International is a real, active church in Freetown, Sierra Leone, currently running on the same tools most churches run on: a bulletin, a Facebook page, word of mouth, and a paper sign-up sheet. That works, but it has real gaps:

- Someone who wants to check service times or watch a past sermon has no single place to go
- RSVPing to an event means catching someone in person or seeing a Facebook post before it scrolls away
- Small groups (like YDY) have no online presence beyond whatever their leader personally posts
- None of this is searchable, archived, or accessible to someone who's just curious about the church before ever walking in

The platform exists to fix that — not by replacing the church's actual community and pastoral relationships, but by giving people a reliable digital front door to it.

## 2. Who this is actually for

Three different people use this, and the whole design follows from taking each of them seriously:

- **A visitor** who's never been to the church — maybe searching online, maybe told about it by a friend — wants to see what it's about, watch a sermon, and figure out when/where to show up. They should be able to do all of that without creating an account or talking to anyone first.
- **A member** who already attends wants a faster way to do things they'd otherwise do in person: RSVP to events, join a small group, keep track of what they're part of.
- **Staff** need a way to actually run the operational side — publish sermons, manage events, manage group rosters — without needing a developer involved every time something needs updating.

## 3. What v1 actually is (and deliberately isn't)

The pitch to church leadership scoped v1 down to three things on purpose, not because the rest doesn't matter, but because a first version that does three things well beats a first version that does ten things badly:

**In v1:** sermon archive (searchable by speaker/series/date), event calendar with RSVP (both a full member RSVP and a no-account "I'm interested" path for visitors), and Church Groups with public browsing.

**Deliberately cut from v1:** online giving/tithing (real payment processing is a separate, harder problem with its own security requirements — PCI-DSS scope, specifically), and prayer requests (a feature that touches real pastoral sensitivity and deserves its own careful design pass, not something to rush alongside everything else).

This wasn't a limitation of what's possible — it was a deliberate choice to ship something trustworthy and complete rather than something broad and half-finished. See `docs/PRD.md` §2 for the full reasoning.

## 4. The bigger arc — where this goes after v1

v1 is the foundation, not the ceiling. Once it's live and being used, the natural next layers are:

- **Online giving** — once there's a real security review specifically for handling money and payment data
- **Prayer requests** — once there's a real design decision about anonymity vs. pastoral accountability (this was actually debated and cut during planning — see `docs/PRD.md` §6 for the reasoning that got shelved, not lost)
- **Richer Church Group pages** — YDY already has a small internal "mini-site" pattern (About/Events/Shop/Contact tabs) as a proof of concept; if that's valuable, more groups get the same treatment
- **Staff/Admin tools** — right now, staff would need direct database access to add an event or upload a sermon. A real admin dashboard is the next major build after the public-facing features work

None of this is committed or scheduled — it's the direction, not a promise. The PRD is the source of truth for what's actually been decided as in-scope right now.

## 5. Why the engineering choices are what they are

This matters for a backend developer specifically: every major technical decision was made with a reason, not by default.

- **Supabase over rolling custom auth:** getting login/security wrong is a common, serious mistake. Supabase is a company whose whole job is getting that part right, so we don't have to build and maintain it ourselves.
- **Row Level Security (RLS) as the actual enforcement layer:** access control lives in the database itself, not just in app code that could have a bug. See `docs/auth-architecture.md`.
- **RAD for the prototype, Spiral for the real build:** the prototype was built fast and disposably to sell an idea in one night. The real build moves slower and re-evaluates risk at each stage, because it handles real people's real data — see `docs/PRD.md` §7.
- **A "walking skeleton" before real features:** before building sermons, events, or groups, the very first thing built was the smallest possible proof that login → session → a real database query actually works end to end. Building real features on an unproven foundation would mean debugging everything at once instead of one layer at a time.

## 6. What "done" looks like for v1

Not a specific date — the honest measure is: a visitor can find the church, watch a sermon, and RSVP to (or express interest in) an event without creating an account. A member can log in, RSVP properly, and join a group. Staff can publish a sermon and create an event without a developer's help. When all three of those are true, v1 is functionally complete, even if there's polish left to do.
