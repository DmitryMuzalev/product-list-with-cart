import { createSlice } from "@reduxjs/toolkit";
import { OrderItemType } from "../../types/order";

const initialState: OrderItemType[] = [];

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
});

export const orderReducer = orderSlice.reducer;
