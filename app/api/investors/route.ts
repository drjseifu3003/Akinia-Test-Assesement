// app/api/companies/route.ts
import { applyFilters } from '@/lib/applySupabaseFilter';
import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const supabase = await createClient()
  const filters = Object.fromEntries(new URL(req.url).searchParams);

  const query = applyFilters(
    supabase
      .from('investors')
      .select(`*, investor_portfolio_companies (company:companies (*))`),
    filters
  );

  const { data, error } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data, { status: 200 });
}
