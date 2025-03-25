import { configureStore } from "@reduxjs/toolkit";

import { cartReducer, cartSlice } from "../feature/Cart/cartSlice";
import {
  productsReducer,
  productsSlice,
} from "../feature/Products/productsSlice";

export const store = configureStore({
  reducer: {
    [productsSlice.name]: productsReducer,
    [cartSlice.name]: cartReducer,
  },
  devTools: true,
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
