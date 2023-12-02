import { createSlice } from "@reduxjs/toolkit";

const passengerSlice = createSlice({
  name: "passenger",
  initialState: {
    passengerList: [],
  },
  reducers: {
    setPassenger(state, action) {
      console.log("WOOOOO ====>", action.payload);
      state.passengerList = action.payload.allPassengers;
    },
  },
});

export const { setPassenger } = passengerSlice.actions;

export default passengerSlice;
