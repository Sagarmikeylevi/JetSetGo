import React, { Suspense, useEffect } from "react";
const ShowPassenger = React.lazy(() => import("../components/ShowPassenger"));

import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPassengerById } from "../store/passenger-action";

const ShowPassengerPage = () => {
  const token = useSelector((state) => state.user.token);
  const flights = useSelector((state) => state.flights.flights);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const passId = queryParams.get("id");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPassengerById(passId, token, flights));
  }, [passId, token, flights, dispatch]);

  return (
    <Suspense
      fallback={
        <p className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-lg font-bold text-green-900">
          Loading....
        </p>
      }
    >
      <ShowPassenger />
    </Suspense>
  );
};

export default ShowPassengerPage;
