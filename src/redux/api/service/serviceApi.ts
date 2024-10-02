import { api } from '../api';

export const serviceApi = api.injectEndpoints({
  endpoints: builder => ({
    getAllServices: builder.query({
      query: () => {
        return {
          url: '/services',
          method: 'Get',
        };
      },
    }),
    getServicesById: builder.query({
      query: id => {
        return {
          url: `/services/${id}`,
          method: 'Get',
        };
      },
    }),
  }),
});

export const { useGetAllServicesQuery, useGetServicesByIdQuery } = serviceApi;
