import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    token:
      localStorage.getItem("token") !== null
        ? localStorage.getItem("token")
        : null,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload.user;
    },

    logout(state) {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
      localStorage.removeItem("expiration");
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export default userSlice;
