import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../../types";

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
});

export const { loadProducts } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
