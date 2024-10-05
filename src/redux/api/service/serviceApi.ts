import { api } from '../api';

export const serviceApi = api.injectEndpoints({
  endpoints: builder => ({
    createServices: builder.mutation({
      query: service => {
        return {
          url: '/services',
          method: 'POST',
          body: service,
        };
      },
      invalidatesTags: ['service'],
    }),
    getAllServices: builder.query({
      providesTags: ['service'],
      query: () => {
        return {
          url: '/services',
          method: 'Get',
        };
      },
    }),
    getServiceById: builder.query({
      query: id => {
        return {
          url: `/services/${id}`,
          method: 'Get',
        };
      },
    }),
    deleteServices: builder.mutation({
      query: id => {
        return {
          url: `/services/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['service'],
    }),
  }),
});

export const {
  useGetAllServicesQuery,
  useGetServiceByIdQuery,
  useCreateServicesMutation,
  useDeleteServicesMutation,
} = serviceApi;
