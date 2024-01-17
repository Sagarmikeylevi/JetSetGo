import React, { Suspense, useEffect } from "react";

const FlightDetails = React.lazy(() =>
  import("../../components/dashboard/FlightDetails")
);
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { fetchFlights } from "../../store/flight-action";

const FlightDetailsPage = () => {
  const { flightID } = useParams();

  const dispatch = useDispatch();
  const showNotification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchFlights());
  }, [dispatch]);

  if (showNotification?.status) {
    <Error message={showNotification.message} />;
  }

  return (
    <Suspense
      fallback={
        <p className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-lg font-bold text-green-900">
          Loading....
        </p>
      }
    >
      <FlightDetails flightId={flightID} />
    </Suspense>
  );
};

export default FlightDetailsPage;
