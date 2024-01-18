import { createSlice } from "@reduxjs/toolkit";

const passengerSlice = createSlice({
  name: "passenger",
  initialState: {
    passengerList: [],
    passengerDetails: null,
  },
  reducers: {
    setPassenger(state, action) {
      state.passengerList = action.payload.allPassengers;
    },
    setPassengerDetails(state, action) {
      state.passengerDetails = action.payload.passengerDetails;
    },
    deletePass(state, action) {
      const { passId } = action.payload;
      state.passengerList = state.passengerList.filter(
        (passenger) => passenger._id !== passId
      );
    },
  },
});

export const { setPassenger, setPassengerDetails, deletePass } =
  passengerSlice.actions;

export default passengerSlice;
