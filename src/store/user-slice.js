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
    setToken(state, action) {
      const { token } = action.payload;
      state.token = token;
      // save token to the local storage
      localStorage.setItem("token", token);
      const expiration = new Date();
      expiration.setHours(expiration.getHours() + 1);
      localStorage.setItem("expiration", expiration.toISOString());
    },
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

export const { setToken, setUser, logout } = userSlice.actions;

export default userSlice;
