import { configureStore } from '@reduxjs/toolkit';
import productSlice from '../redux/features/products';

const store = configureStore({
  reducer: {
    products: productSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;