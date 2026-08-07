-- ============================================================
-- FEMI Platform — Initial Schema Migration
-- Run this in the Supabase SQL Editor (Project → SQL Editor → New Query)
-- or via `supabase db push` if you set up the CLI later.
-- ============================================================

-- ------------------------------------------------------------
-- 1. MEMBERS (extends auth.users — one row per authenticated person)
-- ------------------------------------------------------------
create table public.members (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  role text not null default 'member' check (role in ('member','staff')),
  created_at timestamptz default now(),
  is_active boolean default true
);

-- Auto-create a members row whenever someone signs up via Supabase Auth.
-- Without this, auth.users and public.members drift out of sync.
create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.members (id, full_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'full_name', 'New Member'));
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ------------------------------------------------------------
-- 2. SERMONS (speakers, series, sermons)
-- ------------------------------------------------------------
create table public.speakers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  bio text
);

create table public.series (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  start_date date,
  end_date date
);

create table public.sermons (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  speaker_id uuid references public.speakers(id),
  series_id uuid references public.series(id),
  sermon_date date not null,
  video_url text,
  duration_seconds int,
  description text,
  published boolean default false
);

-- ------------------------------------------------------------
-- 3. EVENTS + RSVP + GUEST INTEREST
-- ------------------------------------------------------------
create table public.events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  start_time timestamptz not null,
  end_time timestamptz,
  location text,
  capacity int,
  members_only boolean default false,
  rsvp_required boolean default false, -- most routine services stay false
  is_flagship boolean default false,   -- true for events like Reverence
  dedicated_page_slug text,            -- only set when is_flagship
  created_by uuid references public.members(id)
);

create table public.rsvp (
  id uuid primary key default gen_random_uuid(),
  member_id uuid not null references public.members(id) on delete cascade,
  event_id uuid not null references public.events(id) on delete cascade,
  status text default 'going' check (status in ('going','waitlist','cancelled')),
  rsvp_at timestamptz default now(),
  unique (member_id, event_id)
);

create table public.event_interest (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references public.events(id) on delete cascade,
  full_name text not null,
  phone text not null,
  submitted_at timestamptz default now()
  -- no member_id — this is the no-account guest path, by design
);

-- ------------------------------------------------------------
-- 4. CHURCH GROUPS
-- ------------------------------------------------------------
create table public.church_groups (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  meeting_schedule text,
  leader_id uuid references public.members(id),
  capacity int,
  has_dedicated_page boolean default false, -- true for groups like YDY
  page_slug text
);

create table public.member_group (
  id uuid primary key default gen_random_uuid(),
  member_id uuid not null references public.members(id) on delete cascade,
  group_id uuid not null references public.church_groups(id) on delete cascade,
  role_in_group text default 'member' check (role_in_group in ('member','leader')),
  joined_at timestamptz default now(),
  unique (member_id, group_id)
);

-- ============================================================
-- ROW LEVEL SECURITY
-- Enable on every table — nothing is readable/writable until
-- a policy explicitly allows it. This is the enforcement layer;
-- see docs/auth-architecture.md for the reasoning.
-- ============================================================

alter table public.members enable row level security;
alter table public.speakers enable row level security;
alter table public.series enable row level security;
alter table public.sermons enable row level security;
alter table public.events enable row level security;
alter table public.rsvp enable row level security;
alter table public.event_interest enable row level security;
alter table public.church_groups enable row level security;
alter table public.member_group enable row level security;

-- Helper: is the current user staff? Used across many policies below.
create function public.is_staff()
returns boolean as $$
  select exists (
    select 1 from public.members m
    where m.id = auth.uid() and m.role = 'staff'
  );
$$ language sql security definer stable;

-- --- members ---
create policy "member_read_own" on public.members
  for select using (auth.uid() = id);
create policy "staff_read_all_members" on public.members
  for select using (public.is_staff());
create policy "staff_manage_members" on public.members
  for update using (public.is_staff());

-- --- speakers / series / sermons: public read, staff write ---
create policy "public_read_speakers" on public.speakers for select using (true);
create policy "staff_write_speakers" on public.speakers for insert with check (public.is_staff());
create policy "staff_update_speakers" on public.speakers for update using (public.is_staff());
create policy "staff_delete_speakers" on public.speakers for delete using (public.is_staff());

create policy "public_read_series" on public.series for select using (true);
create policy "staff_write_series" on public.series for insert with check (public.is_staff());
create policy "staff_update_series" on public.series for update using (public.is_staff());
create policy "staff_delete_series" on public.series for delete using (public.is_staff());

create policy "public_read_sermons" on public.sermons for select using (published = true or public.is_staff());
create policy "staff_write_sermons" on public.sermons for insert with check (public.is_staff());
create policy "staff_update_sermons" on public.sermons for update using (public.is_staff());
create policy "staff_delete_sermons" on public.sermons for delete using (public.is_staff());

-- --- events: public read, staff write ---
create policy "public_read_events" on public.events for select using (true);
create policy "staff_write_events" on public.events for insert with check (public.is_staff());
create policy "staff_update_events" on public.events for update using (public.is_staff());
create policy "staff_delete_events" on public.events for delete using (public.is_staff());

-- --- rsvp: member manages own, staff reads/manages all ---
create policy "member_own_rsvp" on public.rsvp
  for all using (auth.uid() = member_id) with check (auth.uid() = member_id);
create policy "staff_read_all_rsvp" on public.rsvp
  for select using (public.is_staff());
create policy "staff_manage_rsvp" on public.rsvp
  for update using (public.is_staff());

-- --- event_interest: anyone (including anon) can submit, only staff can read ---
create policy "anyone_submits_interest" on public.event_interest
  for insert with check (true);
create policy "staff_reads_interest" on public.event_interest
  for select using (public.is_staff());

-- --- church_groups: public read, staff write ---
create policy "public_read_groups" on public.church_groups for select using (true);
create policy "staff_write_groups" on public.church_groups for insert with check (public.is_staff());
create policy "staff_update_groups" on public.church_groups for update using (public.is_staff());
create policy "staff_delete_groups" on public.church_groups for delete using (public.is_staff());

-- --- member_group: member joins self, staff manages any (no-login roster additions) ---
create policy "member_joins_self" on public.member_group
  for insert with check (auth.uid() = member_id);
create policy "member_reads_own_membership" on public.member_group
  for select using (auth.uid() = member_id);
create policy "staff_manages_rosters" on public.member_group
  for all using (public.is_staff());

-- ============================================================
-- SEED: promote your own first account to staff manually after signup:
--
--   update public.members set role = 'staff' where id = '<your-auth-user-id>';
--
-- Find your id in Supabase: Authentication → Users, after you sign up once
-- through the app. There is no self-service way to become staff — by design.
-- ============================================================
