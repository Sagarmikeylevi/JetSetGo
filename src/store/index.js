import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user-slice";
import flightSlice from "./flight-slice";
import passengerSlice from "./passenger-slice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    flights: flightSlice.reducer,
    passenger: passengerSlice.reducer,
  },
});

export default store;
