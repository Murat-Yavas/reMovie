import { createSlice } from "@reduxjs/toolkit";

const initialUserSlice = { isLogIn: false, userWatchList: [], isSignIn: false };
const userSlice = createSlice({
  name: "user",
  initialState: initialUserSlice,
  reducers: {
    logUser: (state) => {
      state.isLogIn = true;
    },

    userExit: (state) => {
      state.isLogIn = false;
    },

    signUser: (state) => {
      state.isSignIn = !state.isSignIn;
    },

    addItemToWatchList: (state, action) => {
      state.userWatchList.push(action.payload);
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
