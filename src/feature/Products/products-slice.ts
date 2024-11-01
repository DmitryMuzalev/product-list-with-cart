import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "types";

const initialState: ProductType[] = [];

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    loadProducts(_, action: PayloadAction<ProductType[]>) {
      if (action.payload.length) {
        return action.payload;
      }
    },
  },
  selectors: {
    selectProducts: (state) => state,
  },
});

export const { loadProducts } = productsSlice.actions;
export const { selectProducts } = productsSlice.selectors;

export const productsReducer = productsSlice.reducer;
