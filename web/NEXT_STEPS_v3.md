# What changed in this round

1. **Homepage hero photo** — replaced the generic worship photo with the joint photo of Bishop Dr. Frederick Abu Sidique Koroma and Rev. Dr. Lady Patricia Koroma (`public/about/general-overseers-joint.jpg`).
2. **Fixed broken General Overseer bio photos** — the previous upload of solo photos never actually landed in GitHub (confirmed by checking the live repo). This zip includes the real files: `public/about/bishop-solo.png` and `public/about/patricia-solo.png`, and `lib/leaders.ts` now points to them correctly.
3. **YDY About tab** — removed the "current theme... John 4:34" sentence per request.
4. **YDY Events tab** — now shows three real categories: Annual (Conference, Thanksgiving, Monthly Bible Study), Past (Annual Cleaning, Welcome Splash, Hiking), Upcoming (Conference, Thanksgiving). No photos attached yet — see "Still needed" below.
5. **Patricia Amara bio** — added as a full tap-to-expand card (same style as the General Overseers) under the YDY Coordinators tab, using the biography you provided.

# How to use this zip

This is the entire `web/` folder as it should be. Easiest path: extract it and use it to replace the `web/` folder in your GitHub repo entirely — either via a computer (much more reliable than phone uploads) or ask a friend with a laptop to push it for you. If you must stay on-phone, the individual files that changed are:

- `app/page.tsx`
- `app/fellowship/page.tsx`
- `lib/leaders.ts`
- `public/about/bishop-solo.png` (new)
- `public/about/patricia-solo.png` (new)
- `public/about/general-overseers-joint.jpg` (new)

# Still needed from you

- **Event photos** — you sent ~17 photos for Annual Cleaning, Welcome Splash, Bible Study, and Hiking, but the order you described didn't match the actual photo content when checked, so none were placed yet. To add them correctly: send each event's photos in a separate message clearly labeled with the event name (e.g. "these 3 are Hiking"), and I'll wire them into the gallery under `public/fellowship/ydy/events/`.
- **Conference photos** — you mentioned you don't have these yet; the Conference entries currently show with no gallery.
- Rev. Dr. Lady Patricia Koroma's own extended biography — still marked as needing more detail on the About page.
