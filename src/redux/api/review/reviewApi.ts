import { api } from '../api';

export const ReviewApi = api.injectEndpoints({
  endpoints: builder => ({
    getAllReviews: builder.query({
      providesTags: ['review'],
      query: () => ({
        url: '/reviews',
        method: 'GET',
      }),
    }),

    createReview: builder.mutation({
      query: userInfo => {
        return {
          url: '/reviews',
          method: 'POST',
          body: userInfo,
        };
      },
      invalidatesTags: ['review'],
    }),
  }),
});

export const { useGetAllReviewsQuery, useCreateReviewMutation } = ReviewApi;
