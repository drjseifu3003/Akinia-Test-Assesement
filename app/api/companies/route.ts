// app/api/companies/route.ts
import { applyFilters } from '@/lib/applySupabaseFilter';
import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const supabase = await createClient()
  const filters = Object.fromEntries(new URL(req.url).searchParams);

  const query = applyFilters(
    supabase
      .from('companies')
      .select(`*,primary_investor:primary_investor_id (*)`),
    filters
  );

  const { data, error } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data, { status: 200 });
}
