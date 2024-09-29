import { api } from '../api/api';

export const serviceApi = api.injectEndpoints({
  endpoints: builder => ({
    getAllServices: builder.query({
      query: () => '/services',
    }),
  }),
});

export const { useGetAllServicesQuery } = serviceApi;
