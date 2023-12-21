import React, { Suspense, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const SearchedFlights = React.lazy(() =>
  import("../components/SearchedFlights")
);
import { useSelector } from "react-redux";

import Loading from "../components/UI/Loading";

const SearchedFlightsPage = () => {
  console.log("<SearchedFlightsPage /> rendered");
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const flights = useSelector((state) => state.flights.flights);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Loading message="Fetching Flights..." />;
  }

  const queryParams = new URLSearchParams(location.search);

  const departure = queryParams.get("departure");
  const arrival = queryParams.get("arrival");
  const date = queryParams.get("date");
  const flightClass = queryParams.get("class");

  const combinedDate = date.split(",");

  const weekDay = combinedDate[0];
  const flightDate = combinedDate[combinedDate.length - 1];

  const searchedFlights = flights.filter(
    (flight) =>
      flight.departureDestination.toLowerCase() === departure.toLowerCase() &&
      flight.arrivalDestination.toLowerCase() === arrival.toLowerCase() &&
      flight.datesOfDeparture.includes(21)
  );

  const data = [
    {
      searchDetails: {
        departure,
        arrival,
        date,
        flightClass,
        weekDay,
        flightDate,
      },
    },
    {
      searchFlights: {
        searchedFlights,
      },
    },
  ];
  return (
    <Suspense
      fallback={
        <p className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-lg font-bold text-green-900">
          Loading....
        </p>
      }
    >
      <SearchedFlights data={data} />
    </Suspense>
  );
};

export default SearchedFlightsPage;
