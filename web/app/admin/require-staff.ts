import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

// Every admin page calls this first. It's a UI-level convenience check —
// the real enforcement is the RLS policies in the database (see
// docs/auth-architecture.md). This just avoids showing a staff-only form
// to someone whose actual database writes would fail anyway.
export async function requireStaff() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login?redirect=/admin')
  }

  const { data: member } = await supabase.from('members').select('role, full_name').eq('id', user.id).single()

  if (!member || member.role !== 'staff') {
    redirect('/portal')
  }

  return { supabase, member }
}
