import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "types";

const initialState: ProductType[] = [];

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: (create) => ({
    loadProducts: create.reducer<{ products: ProductType[] }>((_, action) => {
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
