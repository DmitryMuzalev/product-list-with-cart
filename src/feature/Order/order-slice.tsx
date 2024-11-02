import { createSlice } from "@reduxjs/toolkit";
import { resetToDefault } from "redux/root-actions";

const initialState: boolean = false;

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    confirmOrder: () => true,
  },
  extraReducers: (builder) => {
    builder.addCase(resetToDefault, () => false);
  },
  selectors: {
    selectOrder: (state) => state,
  },
});

export const { confirmOrder } = orderSlice.actions;

export const { selectOrder } = orderSlice.selectors;

export const orderReducer = orderSlice.reducer;
