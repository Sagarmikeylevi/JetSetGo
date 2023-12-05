import React, { Suspense } from "react";
import { useSelector } from "react-redux";
const FlightDetails = React.lazy(() =>
  import("../../components/dashboard/FlightDetails")
);
import { useParams } from "react-router-dom";

const FlightDetailsPage = () => {
  const { flightID } = useParams();

  const flights = useSelector((state) => state.flights.flights);

  const flight = flights.filter((flight) => flight._id === flightID);

  return (
    <Suspense
      fallback={
        <p className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-lg font-bold text-green-900">
          Loading....
        </p>
      }
    >
      <FlightDetails flight={flight[0]} />
    </Suspense>
  );
};

export default FlightDetailsPage;
