import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { resetToDefault } from "redux/root-actions";

import { CartItemType } from "types";
import { ProductType } from "types";

const initialState: CartItemType[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductType>) => {
      state.push({ ...action.payload, quantity: 1 });
    },

    removeProduct: (state, action: PayloadAction<string>) => {
      return state.filter((p) => p.name !== action.payload);
    },

    incrementQuantity: (state, action: PayloadAction<string>) => {
      const product = state.find((p) => p.name === action.payload);
      if (product) {
        state.map((p) => {
          if (p.name === action.payload) {
            p.quantity += 1;
          }
        });
      } else {
        state.filter((p) => p.name !== action.payload);
      }
    },

    decrementQuantity: (state, action: PayloadAction<string>) => {
      const product = state.find((p) => p.name === action.payload);
      if (product) {
        if (product.quantity !== 1) {
          state.map((p) => {
            if (p.name === action.payload) {
              p.quantity -= 1;
            }
          });
        } else {
          return state.filter((p) => p.name !== action.payload);
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(resetToDefault, () => initialState);
  },
  selectors: {
    selectCart: (state) => state,
    selectCartItemQuantity: (state, name: string) =>
      state.find((item) => item.name === name)?.quantity || 0,
  },
});

export const { selectCart, selectCartItemQuantity } = cartSlice.selectors;

export const {
  addProduct,
  removeProduct,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
