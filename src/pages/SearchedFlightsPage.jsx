import React, { Suspense } from "react";
import { useLocation } from "react-router-dom";
const SearchedFlights = React.lazy(() =>
  import("../components/SearchedFlights")
);
import { useSelector } from "react-redux";

const SearchedFlightsPage = () => {
  const flights = useSelector((state) => state.flights.flights);
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  /* getting flight details from query params */
  const departure = queryParams.get("departure");
  const arrival = queryParams.get("arrival");
  const date = queryParams.get("date");
  const flightClass = queryParams.get("class");

  /* This will make the date DD/MM/YYYY format */
  const dateDDMMYYYY = date.split(",")[1];
  /* taking DD from DD/MM/YYYY */
  const monthDate = dateDDMMYYYY.split("/")[0];

  /* filtering the flights by departure and arrival destination and date */
  const searchedFlights = flights.filter(
    (flight) =>
      flight.departureDestination.toLowerCase() === departure.toLowerCase() &&
      flight.arrivalDestination.toLowerCase() === arrival.toLowerCase() &&
      flight.datesOfDeparture.includes(+monthDate)
  );

  const searchedFlightData = {
    searchedFlights,
    departureDestination: departure,
    arrivalDestination: arrival,
    classOfFlight: flightClass,
    departureDate: dateDDMMYYYY,
  };

  return (
    <Suspense
      fallback={
        <p className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-lg font-bold text-green-900">
          Loading....
        </p>
      }
    >
      <SearchedFlights searchedFlightDetails={searchedFlightData} />
    </Suspense>
  );
};

export default SearchedFlightsPage;
