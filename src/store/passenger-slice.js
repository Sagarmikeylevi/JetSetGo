import { createSlice } from "@reduxjs/toolkit";

const passengerSlice = createSlice({
  name: "passenger",
  initialState: {
    passengerList: [],
    passenger: null,
  },
  reducers: {
    setPassenger(state, action) {
      state.passenger = action.payload;
    },
  },
});

export const { setPassenger } = passengerSlice.actions;

export default passengerSlice;
