import { configureStore } from "@reduxjs/toolkit";
import { cartReducer, cartSlice } from "features/cart/model/cartSlice";
import {
  productsReducer,
  productsSlice,
} from "features/products/model/productsSlice";

export const store = configureStore({
  reducer: {
    [productsSlice.name]: productsReducer,
    [cartSlice.name]: cartReducer,
  },
  devTools: true,
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
