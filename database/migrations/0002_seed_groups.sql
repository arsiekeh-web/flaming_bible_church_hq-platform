-- Run this in Supabase SQL Editor to make the YDY page actually show real data.
-- Safe to run once; running it twice will create a duplicate row (no unique
-- constraint on name), so check the table first if unsure.

insert into public.church_groups (name, description, meeting_schedule, has_dedicated_page, page_slug)
values (
  'YDY — Young Dynamic Youth',
  'YDY is a small group within Flaming Evangelical Ministries International — worship, discussion, and community for young disciples growing together in faith.',
  'Fridays · 6:00 PM · Fellowship Hall',
  true,
  'ydy'
);

-- Optional: a second, simpler group with no dedicated mini-site, to see the
-- generic /groups/[id] detail page in action too.
insert into public.church_groups (name, description, meeting_schedule, has_dedicated_page, page_slug)
values (
  'Women''s Fellowship Circle',
  'A community for women growing in faith together — worship, discussion, and prayer.',
  'Saturdays · 10:00 AM',
  false,
  null
);
