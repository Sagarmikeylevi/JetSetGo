import { Link, useNavigate } from "react-router-dom";
import Card from "../UI/Card";
import { useDispatch, useSelector } from "react-redux";
import { deleteFlight } from "../../store/flight-action";
import Error from "../UI/Error";
import { useState } from "react";
import { showNotification } from "../../store/ui-slice";
import Loading from "../UI/Loading";
const FlightDetails = ({ flightId }) => {
  const token = useSelector((state) => state.user.token);
  const flights = useSelector((state) => state.flights.flights);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [flight, ...others] = flights.filter(
    (flight) => flight._id === flightId
  );

  const deleteFlightHandler = (flightId) => {
    setIsLoading(true);
    dispatch(deleteFlight(flightId, token));
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard/flight");
    }, 2000);
  };

  if (notification?.status === "error") {
    return <Error message={showNotification.message} />;
  }

  if (isLoading) {
    return <Loading message="Deleting..." />;
  }
  return (
    <Card className="h-[95vh] w-[95vw] bg-white rounded-md absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-xl">
      <div className="h-[85%] w-[90%] rounded-md absolute top-[12%] left-[50%] translate-x-[-50%] bg-[rgba(230,230,230,0.66)] shadow-lg p-8 max-w-[30rem]">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
          Flight Details
        </h2>

        <div className="mb-4">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-gray-500">Flight Id:</span>
            <p className="text-gray-700">{flight ? flight._id : ""}</p>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-gray-500">
              Departure Destination:
            </span>
            <p className="text-gray-700">
              {flight ? flight.departureDestination : ""}
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <span className="font-semibold text-gray-500">
              Arrival Destination:
            </span>
            <p className="text-gray-700">
              {flight ? flight.arrivalDestination : ""}
            </p>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-gray-500">Departure Time:</span>
            <p className="text-gray-700">
              {flight ? flight.timeOfDeparture : ""}
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <span className="font-semibold text-gray-500">Arrival Time:</span>
            <p className="text-gray-700">
              {flight ? flight.timeOfArrival : ""}
            </p>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-gray-500">Airline:</span>
            <p className="text-gray-700">{flight ? flight.airline : ""}</p>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-gray-500">Economy Seats:</span>
            <p className="text-gray-700">
              {flight ? flight.seatsAvailable.economy : ""}
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <span className="font-semibold text-gray-500">
              Premium Economy Seats:
            </span>
            <p className="text-gray-700">
              {flight ? flight.seatsAvailable.premiumEconomy : ""}
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <span className="font-semibold text-gray-500">Business Seats:</span>
            <p className="text-gray-700">
              {flight ? flight.seatsAvailable.business : ""}
            </p>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <Link
            to={`/dashboard/flight/update/${flight ? flight._id : ""}`}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none"
          >
            Update
          </Link>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
            onClick={() => deleteFlightHandler(flight._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </Card>
  );
};

export default FlightDetails;
