import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./app/masters/products/products.slice";

const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
