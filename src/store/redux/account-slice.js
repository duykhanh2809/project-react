import { createSlice } from "@reduxjs/toolkit";

const userDataStorage = JSON.parse(localStorage.getItem("user"));

const initialState = {
  isLoggedIn: userDataStorage ? userDataStorage.isLoggedIn : false,
  userData: {
    email: userDataStorage ? userDataStorage.email : "",
    displayName: userDataStorage ? userDataStorage.displayName : "",
  },
};

const accountSlice = createSlice({
  name: "accountState",
  initialState,
  reducers: {
    updateState(state) {
      state.isLoggedIn = !state.isLoggedIn;
    },
    updateUserData(state, action) {
      state.userData = {
        email: action.payload.email,
        displayName: action.payload.displayName,
      };
    },
    initialReset(state) {
      state.isLoggedIn = false;
      state.userData = {
        displayName: "",
        email: "",
      };
    },
  },
});

export const accountActions = accountSlice.actions;
export default accountSlice.reducer;
