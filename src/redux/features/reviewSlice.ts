import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  comment: '',
  rating: '',
};

const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setComment: (state, action: PayloadAction<string>) => {
      state.comment = action.payload;
    },
    setRating: (state, action: PayloadAction<string>) => {
      state.rating = action.payload;
    },
  },
});

export const { setName, setComment, setRating } = reviewSlice.actions;

export default reviewSlice.reducer;
