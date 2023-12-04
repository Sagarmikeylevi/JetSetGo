import { useLocation } from "react-router-dom";
import SearchedFlights from "../components/SearchedFlights";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Loading from "../components/UI/Loading";

const SearchedFlightsPage = () => {
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

  const dateQuery = flightDate.split("/");

  // console.log(departure.toLowerCase());

  console.log(flights.filter((flight) => flight.datesOfDeparture.includes(21)));

  const searchedFlights = flights.filter(
    (flight) =>
      flight.departureDestination.toLowerCase() === departure.toLowerCase() &&
      flight.arrivalDestination.toLowerCase() === arrival.toLowerCase() &&
      flight.datesOfDeparture.includes(21)
  );

  console.log(searchedFlights);

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
  return <SearchedFlights data={data} />;
};

export default SearchedFlightsPage;
