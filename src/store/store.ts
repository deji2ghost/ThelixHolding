import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import paginationReducer from './pagination';

const store = configureStore({
  reducer: {
    products: productsReducer,
    pagination: paginationReducer,
  }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;