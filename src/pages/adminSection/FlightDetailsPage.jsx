import { useSelector } from "react-redux";
import FlightDetails from "../../components/dashboard/FlightDetails";
import { useParams } from "react-router-dom";

const FlightDetailsPage = () => {
  const { flightID } = useParams();

  // console.log(flightID);
  const flights = useSelector((state) => state.flights.flights);

  const flight = flights.filter((flight) => flight._id === flightID);

  return <FlightDetails flight={flight[0]} />;
};

export default FlightDetailsPage;
