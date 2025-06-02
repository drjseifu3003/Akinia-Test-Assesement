// app/services/api.ts
import { Company, Contact, Fund, Investor, News } from '@/models';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    getCompanies: builder.query<Company[], Record<string, any>>({
      query: (filters) => {
        const params = new URLSearchParams(filters as any).toString();
        return `companies?${params}`;
      },
    }),
    getInvestors: builder.query<Investor[], Record<string, any>>({
      query: (filters) => {
        const params = new URLSearchParams(filters as any).toString();
        return `investors?${params}`;
      },
    }),
    getFunds: builder.query<Fund[], Record<string, any>>({
      query: (filters) => {
        const params = new URLSearchParams(filters as any).toString();
        return `funds?${params}`;
      },
    }),
    getContacts: builder.query<Contact[], Record<string, any>>({
      query: (filters) => {
        const params = new URLSearchParams(filters as any).toString();
        return `contacts?${params}`;
      },
    }),
    getNews: builder.query<News[], Record<string, any>>({
      query: (filters) => {
        const params = new URLSearchParams(filters as any).toString();
        return `news?${params}`;
      },
    }),
  }),
});

export const { useGetCompaniesQuery, useGetInvestorsQuery, useGetFundsQuery, useGetContactsQuery, useGetNewsQuery } = api;
