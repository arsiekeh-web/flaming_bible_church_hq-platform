'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/lib/supabase/server'
import { requireStaff } from './require-staff'

// Every action here re-checks staff status server-side before writing.
// The RLS policies would block the write anyway if this check were
// somehow bypassed, but checking here gives a cleaner failure than a
// raw database error.

// --- Members ---
export async function setMemberRole(formData: FormData) {
  await requireStaff()
  const supabase = await createClient()
  const id = formData.get('id') as string
  const role = formData.get('role') as string
  await supabase.from('members').update({ role }).eq('id', id)
  revalidatePath('/admin/members')
}

// --- Church Groups (category = 'ministry') ---
export async function createGroup(formData: FormData) {
  await requireStaff()
  const supabase = await createClient()
  await supabase.from('church_groups').insert({
    name: formData.get('name') as string,
    description: (formData.get('description') as string) || null,
    meeting_schedule: (formData.get('meeting_schedule') as string) || null,
    has_dedicated_page: formData.get('has_dedicated_page') === 'on',
    page_slug: (formData.get('page_slug') as string) || null,
    category: 'ministry',
  })
  revalidatePath('/admin/groups')
  revalidatePath('/groups')
}

export async function deleteGroup(formData: FormData) {
  await requireStaff()
  const supabase = await createClient()
  await supabase.from('church_groups').delete().eq('id', formData.get('id') as string)
  revalidatePath('/admin/groups')
  revalidatePath('/groups')
}

// --- Fellowship (category = 'fellowship') ---
// Same church_groups table as Church Groups, just tagged with the other
// category value — mirrors createGroup/deleteGroup above.
export async function createFellowship(formData: FormData) {
  await requireStaff()
  const supabase = await createClient()
  await supabase.from('church_groups').insert({
    name: formData.get('name') as string,
    description: (formData.get('description') as string) || null,
    meeting_schedule: (formData.get('meeting_schedule') as string) || null,
    has_dedicated_page: formData.get('has_dedicated_page') === 'on',
    page_slug: (formData.get('page_slug') as string) || null,
    category: 'fellowship',
  })
  revalidatePath('/admin/fellowship')
  revalidatePath('/fellowship')
}

export async function deleteFellowship(formData: FormData) {
  await requireStaff()
  const supabase = await createClient()
  await supabase.from('church_groups').delete().eq('id', formData.get('id') as string)
  revalidatePath('/admin/fellowship')
  revalidatePath('/fellowship')
}

// --- Events ---
export async function createEvent(formData: FormData) {
  const { supabase, member } = await requireStaff()
  const startTime = formData.get('start_time') as string
  await supabase.from('events').insert({
    title: formData.get('title') as string,
    description: (formData.get('description') as string) || null,
    start_time: new Date(startTime).toISOString(),
    location: (formData.get('location') as string) || null,
    members_only: formData.get('members_only') === 'on',
    rsvp_required: formData.get('rsvp_required') === 'on',
    created_by: null, // set via a follow-up query below if needed
  })
  revalidatePath('/admin/events')
  revalidatePath('/events')
  revalidatePath('/')
}

export async function deleteEvent(formData: FormData) {
  await requireStaff()
  const supabase = await createClient()
  await supabase.from('events').delete().eq('id', formData.get('id') as string)
  revalidatePath('/admin/events')
  revalidatePath('/events')
}

// --- Speakers ---
export async function createSpeaker(formData: FormData) {
  await requireStaff()
  const supabase = await createClient()
  await supabase.from('speakers').insert({
    name: formData.get('name') as string,
    bio: (formData.get('bio') as string) || null,
  })
  revalidatePath('/admin/speakers')
}

export async function deleteSpeaker(formData: FormData) {
  await requireStaff()
  const supabase = await createClient()
  await supabase.from('speakers').delete().eq('id', formData.get('id') as string)
  revalidatePath('/admin/speakers')
}

// --- Series ---
export async function createSeries(formData: FormData) {
  await requireStaff()
  const supabase = await createClient()
  await supabase.from('series').insert({
    title: formData.get('title') as string,
    description: (formData.get('description') as string) || null,
  })
  revalidatePath('/admin/series')
}

export async function deleteSeries(formData: FormData) {
  await requireStaff()
  const supabase = await createClient()
  await supabase.from('series').delete().eq('id', formData.get('id') as string)
  revalidatePath('/admin/series')
}

// --- Devotionals ---
export async function createDevotional(formData: FormData) {
  await requireStaff()
  const supabase = await createClient()
  await supabase.from('devotionals').insert({
    devotional_date: formData.get('devotional_date') as string,
    title: formData.get('title') as string,
    scripture_reference: (formData.get('scripture_reference') as string) || null,
    scripture_text: (formData.get('scripture_text') as string) || null,
    body: formData.get('body') as string,
    author: (formData.get('author') as string) || null,
  })
  revalidatePath('/admin/devotionals')
  revalidatePath('/devotional')
  revalidatePath('/devotional/archive')
}

export async function updateDevotional(formData: FormData) {
  await requireStaff()
  const supabase = await createClient()
  const id = formData.get('id') as string
  await supabase
    .from('devotionals')
    .update({
      devotional_date: formData.get('devotional_date') as string,
      title: formData.get('title') as string,
      scripture_reference: (formData.get('scripture_reference') as string) || null,
      scripture_text: (formData.get('scripture_text') as string) || null,
      body: formData.get('body') as string,
      author: (formData.get('author') as string) || null,
    })
    .eq('id', id)
  revalidatePath('/admin/devotionals')
  revalidatePath('/devotional')
  revalidatePath('/devotional/archive')
}

export async function deleteDevotional(formData: FormData) {
  await requireStaff()
  const supabase = await createClient()
  await supabase.from('devotionals').delete().eq('id', formData.get('id') as string)
  revalidatePath('/admin/devotionals')
  revalidatePath('/devotional')
  revalidatePath('/devotional/archive')
}

// --- Sermons ---
export async function createSermon(formData: FormData) {
  await requireStaff()
  const supabase = await createClient()
  const sermonDate = formData.get('sermon_date') as string
  await supabase.from('sermons').insert({
    title: formData.get('title') as string,
    speaker_id: (formData.get('speaker_id') as string) || null,
    series_id: (formData.get('series_id') as string) || null,
    sermon_date: sermonDate,
    video_url: (formData.get('video_url') as string) || null,
    description: (formData.get('description') as string) || null,
    published: formData.get('published') === 'on',
  })
  revalidatePath('/admin/sermons')
  revalidatePath('/sermons')
  revalidatePath('/')
}

export async function togglePublish(formData: FormData) {
  await requireStaff()
  const supabase = await createClient()
  const id = formData.get('id') as string
  const published = formData.get('published') === 'true'
  await supabase.from('sermons').update({ published: !published }).eq('id', id)
  revalidatePath('/admin/sermons')
  revalidatePath('/sermons')
}

export async function deleteSermon(formData: FormData) {
  await requireStaff()
  const supabase = await createClient()
  await supabase.from('sermons').delete().eq('id', formData.get('id') as string)
  revalidatePath('/admin/sermons')
  revalidatePath('/sermons')
}
