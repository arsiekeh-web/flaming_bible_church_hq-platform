-- Adds the Fellowship vs Church Group distinction requested by church leadership.
-- Fellowship = age/life-stage groups (youth, women, men) — e.g. YDY
-- Ministry = functional church teams — e.g. choir, ushers, media team

alter table public.church_groups
  add column category text not null default 'fellowship' check (category in ('fellowship', 'ministry'));

-- Move YDY specifically into the fellowship category (it already defaults there,
-- this is explicit so it's not relying on the default silently).
update public.church_groups
set category = 'fellowship'
where page_slug = 'ydy';
