import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  services: [],
  totalPrice: 0,
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {},
});

export default bookingSlice.reducer;
