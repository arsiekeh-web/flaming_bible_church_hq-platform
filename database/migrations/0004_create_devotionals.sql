-- Daily Devotional section: one reading per day, staff-authored.
-- Public can read every devotional (past and present); only staff can write.

create table public.devotionals (
  id uuid primary key default gen_random_uuid(),
  devotional_date date not null unique,
  title text not null,
  scripture_reference text,
  scripture_text text,
  body text not null,
  author text,
  created_at timestamptz not null default now()
);

alter table public.devotionals enable row level security;

-- Same public-read / staff-write shape as speakers, series, sermons, events,
-- and church_groups above — see is_staff() defined earlier in 0001_init.sql.
create policy "public_read_devotionals" on public.devotionals for select using (true);
create policy "staff_write_devotionals" on public.devotionals for insert with check (public.is_staff());
create policy "staff_update_devotionals" on public.devotionals for update using (public.is_staff());
create policy "staff_delete_devotionals" on public.devotionals for delete using (public.is_staff());
