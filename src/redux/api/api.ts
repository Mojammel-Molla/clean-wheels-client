// src/api/api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['review', 'slot', 'service', 'user'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/v1',
    // 'https://clean-wheels-backend.vercel.app/api/v1',
    credentials: 'include',
  }),
  endpoints: () => ({} as any),
});
