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
  }),
});

export const { useRegisterMutation, useLoginMutation, useGetAllUsersQuery } =
  authApi;
