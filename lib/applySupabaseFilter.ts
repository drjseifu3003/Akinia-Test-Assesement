type FilterableQuery<T> = {
  ilike: (column: keyof T | string, pattern: string) => FilterableQuery<T>;
  eq: (column: keyof T | string, value: unknown) => FilterableQuery<T>;
};

export function applyFilters<T>(
  query: FilterableQuery<T>,
  filters: Record<string, unknown>
): FilterableQuery<T> {
  for (const [key, value] of Object.entries(filters)) {
    if (value === undefined || value === null || value === '') continue;

    if (typeof value === 'string') {
      query = query.ilike(key, `%${value}%`);
    } else {
      query = query.eq(key, value);
    }
  }

  return query;
}
