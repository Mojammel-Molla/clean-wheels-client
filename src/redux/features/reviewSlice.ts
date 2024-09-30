import { api } from '../api/api';

export const ReviewApi = api.injectEndpoints({
  endpoints: builder => ({
    getAllReviews: builder.query({
      query: () => '/reviews',
    }),
  }),
});

export const { useGetAllReviewsQuery } = ReviewApi;
