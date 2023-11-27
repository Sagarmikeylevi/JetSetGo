import { createSlice } from "@reduxjs/toolkit";

const passengerSlice = createSlice({
  name: "passenger",
  initialState: {
    passengerList: [],
    passenger: null,
  },
  reducers: {
    setPassenger(state, action) {
      const { passengerDetails } = action.payload;
      console.log("WOOOOO ====>", action.payload);
      state.passenger = passengerDetails;
    },
  },
});

export const { setPassenger } = passengerSlice.actions;

export default passengerSlice;
