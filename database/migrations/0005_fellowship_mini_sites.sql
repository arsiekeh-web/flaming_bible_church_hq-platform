-- Gives Women's Fellowship a dedicated mini-site (it already exists as a row,
-- just needs has_dedicated_page + page_slug flipped on), and creates three
-- new fellowship rows — Men's, Youth, and Young Adults — that did not
-- previously exist in the database.
--
-- Safe to run once; running it twice will create duplicate Men's/Youth/Young
-- Adults rows (no unique constraint on name), so check the table first if unsure.

-- 1. Women's Fellowship Circle — already seeded in 0002, just enable its page.
update public.church_groups
set has_dedicated_page = true,
    page_slug = 'womens-fellowship'
where name = 'Women''s Fellowship Circle';

-- 2. Men's Fellowship — new
insert into public.church_groups (name, description, meeting_schedule, has_dedicated_page, page_slug, category)
values (
  'Men''s Fellowship',
  'A community for men growing in faith together — worship, discussion, accountability, and prayer.',
  'Saturdays · 8:00 AM · Fellowship Hall',
  true,
  'mens-fellowship',
  'fellowship'
);

-- 3. Youth Fellowship — new (distinct from YDY; adjust or remove if this
-- should instead be merged with the existing YDY group)
insert into public.church_groups (name, description, meeting_schedule, has_dedicated_page, page_slug, category)
values (
  'Youth Fellowship',
  'A gathering space for teens to grow in faith together — worship, discussion, and community.',
  'Sundays · 4:00 PM · Youth Room',
  true,
  'youth-fellowship',
  'fellowship'
);

-- 4. Young Adults — new
insert into public.church_groups (name, description, meeting_schedule, has_dedicated_page, page_slug, category)
values (
  'Young Adults',
  'For young adults navigating faith, career, and life together — worship, discussion, and community.',
  'Fridays · 7:00 PM · Fellowship Hall',
  true,
  'young-adults',
  'fellowship'
);
