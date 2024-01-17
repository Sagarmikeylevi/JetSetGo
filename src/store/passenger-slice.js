import { createSlice } from "@reduxjs/toolkit";

const passengerSlice = createSlice({
  name: "passenger",
  initialState: {
    passengerList: [],
  },
  reducers: {
    setPassenger(state, action) {
      state.passengerList = action.payload.allPassengers;
    },
    deletePass(state, action) {
      const { id } = action.payload.id;
      state.passengerList = state.passengerList.filter(
        (passenger) => passenger._id !== id
      );
    },
  },
});

export const { setPassenger, deletePass } = passengerSlice.actions;

export default passengerSlice;
