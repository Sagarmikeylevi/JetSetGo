import { createSlice } from "@reduxjs/toolkit";

const flightSlice = createSlice({
  name: "flight",
  initialState: {
    flights: [],
    searchedFlightDetails: {},
    prices: {
      AirIndia: {
        economy: 1500,
        premiumEconomy: 2500,
        business: 5000,
      },
      AirAsia: {
        economy: 2000,
        premiumEconomy: 3000,
        business: 6000,
      },
      IndiGo: {
        economy: 1000,
        premiumEconomy: 2200,
        business: 4500,
      },
      others: {
        economy: 2700,
        premiumEconomy: 4000,
        business: 7000,
      },
    },
  },

  reducers: {
    setFlights(state, action) {
      state.flights = action.payload.flights;
    },
  },
});

export const { setFlights } = flightSlice.actions;

export default flightSlice;
