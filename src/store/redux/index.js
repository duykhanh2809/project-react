import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart-slice";
import accountReducer from "./account-slice";

const store = configureStore({
  reducer: { cart: cartReducer, account: accountReducer },
});

export default store;
