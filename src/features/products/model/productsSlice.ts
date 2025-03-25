import { createSlice } from "@reduxjs/toolkit";
import { Product } from "common/types";

const initialState: Product[] = [];

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: (create) => ({
    loadProducts: create.reducer<{ products: Product[] }>((_, action) => {
      if (action.payload.products.length) {
        return action.payload.products;
      }
    }),
  }),
  selectors: {
    selectProducts: (state) => state,
  },
});

export const { loadProducts } = productsSlice.actions;
export const { selectProducts } = productsSlice.selectors;

export const productsReducer = productsSlice.reducer;
