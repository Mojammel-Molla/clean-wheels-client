import { configureStore } from '@reduxjs/toolkit';
import { api } from './api/api';
import registerReducer from './features/registerSlice';
import loginReducer from './features/loginSlice';
import bookingReducer from './features/bookingSlice';
import reviewReducer from './features/reviewSlice';
import serviceReducer from './features/serviceSlice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    service: serviceReducer,
    booking: bookingReducer,
    review: reviewReducer,
    register: registerReducer,
    login: loginReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
