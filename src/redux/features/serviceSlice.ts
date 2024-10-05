import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  description: '',
  price: 0,
  duration: 0,
  isDeleted: false,
};

const serviceSlice = createSlice({
  name: 'service',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setPrice: (state, action: PayloadAction<number>) => {
      state.price = action.payload;
    },
    setDuration: (state, action: PayloadAction<number>) => {
      state.duration = action.payload;
    },
  },
});

export const { setName, setDescription, setPrice, setDuration } =
  serviceSlice.actions;

export default serviceSlice.reducer;
