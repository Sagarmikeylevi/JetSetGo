import React, { Suspense, useEffect } from "react";
const OnBoardPassenger = React.lazy(() =>
  import("../components/OnBoardPassenger")
);
import { useDispatch, useSelector } from "react-redux";

import { useLocation } from "react-router-dom";
import { fetchPassengers } from "../store/passenger-action";

const OnBoardPassengerPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const isConform = queryParams.get("isConform");

  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    dispatch(fetchPassengers(token));
  }, [dispatch]);

  const passengerState = isConform === "true" ? "conform" : "not-conform";

  return (
    <Suspense
      fallback={
        <p className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-lg font-bold text-green-900">
          Loading....
        </p>
      }
    >
      <OnBoardPassenger passengerState={passengerState} />
    </Suspense>
  );
};

export default OnBoardPassengerPage;
