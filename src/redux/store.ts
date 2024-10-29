import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./slices/products-slice";
import { orderReducer } from "./slices/order-slice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    order: orderReducer,
  },
  devTools: true,
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
