import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: JSON.parse(localStorage.getItem("cart")) || [],
  totalQuantity: 0,
  change: false,
};

const cartSlice = createSlice({
  name: "shopping bag",
  initialState,
  reducers: {
    updateCart(state, action) {
      state.item = action.payload;
    },
  },
});

export default cartSlice.reducer;

export const cartSliceActions = cartSlice.actions;
