import { api } from '../api';

export const SlotApi = api.injectEndpoints({
  endpoints: builder => ({
    getAllSlots: builder.query({
      providesTags: ['slot'],
      query: () => ({
        url: '/service/slots',
        method: 'GET',
      }),
    }),

    createSlot: builder.mutation({
      query: slotInfo => {
        return {
          url: '/reviews',
          method: 'POST',
          body: slotInfo,
        };
      },
      invalidatesTags: ['slot'],
    }),
  }),
});

export const { useCreateSlotMutation, useGetAllSlotsQuery } = SlotApi;
