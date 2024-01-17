import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user-slice";
import flightSlice from "./flight-slice";
import passengerSlice from "./passenger-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    flights: flightSlice.reducer,
    passenger: passengerSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export default store;
