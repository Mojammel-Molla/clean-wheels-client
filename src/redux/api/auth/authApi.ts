import { api } from '../api';

const authApi = api.injectEndpoints({
  endpoints: builder => ({
    register: builder.mutation({
      query: userInfo => ({
        url: '/auth/register',
        method: 'POST',
        body: userInfo,
      }),
    }),
    getAllUsers: builder.query({
      providesTags: ['user'],
      query: () => ({
        url: '/auth/register',
        method: 'GET',
      }),
    }),

    login: builder.mutation({
      query: userInfo => ({
        url: '/auth/login',
        method: 'POST',
        body: userInfo,
      }),
    }),
    updateRole: builder.mutation({
      query: (id: string) => ({
        url: `/auth/register/${id}`,
        method: 'PUT',
      }),
      invalidatesTags: ['user'],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetAllUsersQuery,
  useUpdateRoleMutation,
} = authApi;
