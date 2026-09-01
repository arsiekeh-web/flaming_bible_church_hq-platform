# What changed (round 1 — content update)

- Removed Login / My Portal — nav no longer has an auth link.
- Removed Supabase entirely — no login page, no /portal, no /admin dashboard, no middleware, no database calls anywhere. All content (events, YDY roster, etc.) is now hardcoded in the page files — to change it later, edit the arrays/JSX at the top of the relevant page.tsx.
- Sermons tab replaced with a "Watch & Listen" page linking to your Facebook page and YouTube channel.
- About page: real Bishop Dr. Frederick Abu Sidique Koroma biography, awards, and PhDs filled in from your uploaded materials. Rev. Dr. Lady Patricia Koroma's bio is still thin — I only had her mission-statement quote, not a real biography.
- Fellowship (YDY) page: real "About YDY" history (formed 1998/99, bridging Children's Church and Youth Fellowship) added. Executives/coordinators left as-is per your instruction. YDY App link removed.
- Reverence event page: real "About" section written from Lady Patricia's mission statement and Bishop Frederick's interview. Two real event photos added to the gallery (cropped from your Reverence book PDF) alongside the existing gallery images.

# What changed (round 2 — SEO & site hygiene)

- **Favicon & app icons**: generated from your church crest logo — `favicon.ico`, `icon-32.png`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` (all in `public/`), wired up in `app/layout.tsx`.
- **Open Graph share image**: `public/og-image.jpg` — what shows up when someone shares your site link on Facebook/WhatsApp. Built from your hero worship photo + crest + site name.
- **Meta descriptions**: every page now has a real, keyword-relevant description (previously only titles were set, and Google mostly ignores pages with no description).
- **Keywords**: added a site-wide keyword list relevant to a Freetown/Sierra Leone Pentecostal church (this mainly helps structured understanding, not raw ranking — modern Google relies more on content quality, but it doesn't hurt).
- **robots.txt**: added at `public/robots.txt` — tells search engines they're allowed to crawl the whole site and points them to the sitemap.
- **sitemap.xml**: added `app/sitemap.ts` — Next.js auto-generates `/sitemap.xml` at build time from this file, listing all real pages. It'll include new pages automatically if you add routes the same way.
- **Custom 404 page**: `app/not-found.tsx` — matches the site's branding instead of showing a generic error.

## ⚠️ One thing YOU must do before this goes live

Both `app/layout.tsx` and `app/sitemap.ts` and `public/robots.txt` currently have:

```
https://your-domain-here.com
```

as a placeholder. Once you buy your real domain, search each of those three files for `your-domain-here.com` and replace it with your actual domain. This is required for the Open Graph image, canonical URL, and sitemap to work correctly — leaving it as-is would tell Google and Facebook the wrong URL for your own site.

## Still placeholder / needs you

- Rev. Dr. Lady Patricia Koroma's biography (About page)
- Rev. Olamide Macculey's biography (About page)
- Reverence "Shop" section (no products yet)

## After you buy the domain (per our earlier conversation)

1. Submit the site to Google Search Console, verify ownership of the new domain.
2. Submit `https://yourdomain.com/sitemap.xml` in Search Console (it's auto-generated, no manual file needed).
3. Everything else — meta titles/descriptions, robots.txt, sitemap code, favicon, OG image — is already done and just needs the domain swapped in.
