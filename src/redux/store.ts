import { configureStore } from "@reduxjs/toolkit";

import { cartReducer } from "../feature/Cart/cart-slice";
import { productsReducer } from "../feature/Products/products-slice";
import { orderReducer } from "feature/Order/order-slice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    order: orderReducer,
  },
  devTools: true,
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
