import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderItemType } from "../../types/order";
import { ProductType } from "../../types";

const initialState: OrderItemType[] = [];

const orderSlice = createSlice({
  name: "order",
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
  selectors: {
    selectOrder: (state) => state,
    selectOrderItemQuantity: (state, name: string) =>
      state.find((item) => item.name === name)?.quantity || 0,
  },
});

export const { selectOrder, selectOrderItemQuantity } = orderSlice.selectors;

export const {
  addProduct,
  removeProduct,
  incrementQuantity,
  decrementQuantity,
} = orderSlice.actions;

export const orderReducer = orderSlice.reducer;
