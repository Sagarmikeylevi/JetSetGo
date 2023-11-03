import { useSelector } from "react-redux";
import FlightDetails from "../../components/dashboard/FlightDetails";

const FlightDetailsPage = () => {
  const flights = useSelector((state) => state.flights.flights);
  const currentURL = window.location.href;

  const urlParts = currentURL.split("/");

  const flightId = urlParts[urlParts.length - 1];

  // const flight = flights.filter((flight) => flight._id === flightId);
  console.log(flights)

  // console.log(flight);

  return <FlightDetails />;
};

export default FlightDetailsPage;
