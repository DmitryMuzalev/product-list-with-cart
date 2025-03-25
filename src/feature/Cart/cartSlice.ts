import { createSlice } from "@reduxjs/toolkit";
import { resetToDefault } from "redux/root-actions";

import { CartItemType } from "types";
import { ProductType } from "types";

const initialState = {
  items: [] as CartItemType[],
  isOrdered: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: (create) => ({
    addProduct: create.reducer<{ product: ProductType }>((state, action) => {
      const index = state.items.findIndex(
        (p) => p.id === action.payload.product.id
      );
      if (index === -1) {
        state.items.push({ ...action.payload.product, quantity: 1 });
      } else {
        state.items[index].quantity += 1;
      }
    }),
    removeProduct: create.reducer<{ id: string }>((state, action) => {
      const index = state.items.findIndex((p) => p.id === action.payload.id);
      if (index === -1) {
        state.items.splice(index, 1);
      } else {
        state.items[index].quantity -= 1;
        if (!state.items[index].quantity) state.items.splice(index, 1);
      }
    }),
    confirmOrder: create.reducer((state) => {
      state.isOrdered = true;
    }),
  }),
  extraReducers: (builder) => {
    builder.addCase(resetToDefault, () => initialState);
  },
  selectors: {
    selectCart: (state) => state.items,
    selectCartItem: (state, id: string) =>
      state.items.find((item) => item.id === id) ?? null,
    selectIsOrdered: (state) => state.isOrdered,
  },
});

export const { selectCart, selectCartItem, selectIsOrdered } =
  cartSlice.selectors;

export const { addProduct, removeProduct, confirmOrder } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
