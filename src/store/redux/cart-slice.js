import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: JSON.parse(localStorage.getItem("cart")) || [],
  totalQuantity: localStorage.getItem("totalQuantity") || 0,
  totalPrice: localStorage.getItem("totalPrice") || 0,
};

const cartSlice = createSlice({
  name: "shopping bag",
  initialState,
  reducers: {
    updateCart(state, action) {
      state.item = action.payload.item;
      state.totalQuantity = action.payload.counter;
      state.totalPrice = action.payload.sum;
    },
  },
});

export default cartSlice.reducer;

export const cartSliceActions = cartSlice.actions;
