import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  services: [],
  selectedItems: 0,
  totalPrice: 0,
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    addBooking: (state, action) => {
      state.services.push({ ...action.payload });

      // Calculate total price directly in the reducer
      state.totalPrice = state.services.reduce(
        (total, service) => total + service.price * (service.quantity || 1),
        0
      );
    },
  },
});

// Selector to get the total price
export const selectTotalPrice = (state: any) => {
  return state.booking.services.reduce(
    (total: number, service: any) =>
      total + service.price * (service.quantity || 1),
    0
  );
};

export const { addBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
