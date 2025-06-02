// lib/applyFilters.ts
export function applyFilters<T>(
  query: T,
  filters: Record<string, unknown>
): T {
  for (const [key, value] of Object.entries(filters)) {
    if (value === undefined || value === null || value === '') continue;

    if (typeof value === 'string') {
      query = (query as any).ilike(key, `%${value}%`);
    } else {
      query = (query as any).eq(key, value);
    }
  }

  return query;
}
