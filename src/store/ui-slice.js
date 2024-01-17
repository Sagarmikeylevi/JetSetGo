import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    notification: null,
  },
  reducers: {
    showNotification(state, action) {
      const { status, title, message } = action.payload;
      state.notification = {
        status,
        title,
        message,
      };
    },
  },
});

export const { showNotification } = uiSlice.actions;

export default uiSlice;
