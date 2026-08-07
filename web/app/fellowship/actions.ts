'use server'

import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

// Fellowship's own join action — same shape as the Church Groups join action
// (church_groups/member_group + RLS), kept separate since Fellowship is its
// own top-level section rather than a subpath of /groups.
export async function joinFellowship(groupId: string, returnPath: string) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    // Not logged in — send to login, then bounce back here after.
    redirect(`/login?redirect=${encodeURIComponent(returnPath)}&intent=join`)
  }

  // RLS policy "member_joins_self" only allows this insert when
  // member_id matches the logged-in user's own id.
  const { error } = await supabase.from('member_group').insert({
    member_id: user.id,
    group_id: groupId,
  })

  if (error) {
    // Most common cause: already a member (unique constraint on member_id+group_id)
    redirect(`${returnPath}?error=${encodeURIComponent(error.message)}`)
  }

  redirect(`${returnPath}?joined=true`)
}
