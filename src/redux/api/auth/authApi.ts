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
  }),
});

export const { useRegisterMutation } = authApi;
