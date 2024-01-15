import React, { Suspense, useCallback, useEffect, useState } from "react";
import axios from "axios";
const OnBoardPassenger = React.lazy(() =>
  import("../components/OnBoardPassenger")
);
import { useDispatch, useSelector } from "react-redux";
import { getAuthToken } from "../utils/auth";
import { setPassenger } from "../store/passenger-slice";

import { useLocation } from "react-router-dom";
import Loading from "../components/UI/Loading";
import config from "../config";

const OnBoardPassengerPage = () => {
  // console.log("<OnBoardPassengerPage /> rendered");
  const [isLoading, setIsLoading] = useState(false);
  const [conformPass, setConformPass] = useState([]);
  const [nonconformPass, setNonconformPass] = useState([]);
  const apiUrl = config.development.apiUrl;

  const passengers = useSelector((state) => state.passenger.passengerList);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const isConform = queryParams.get("isConform");

  const dispatch = useDispatch();
  const token = getAuthToken();
  const fetchPassengers = useCallback(async () => {
    try {
      const response = await axios.get(
        `${apiUrl}/api/passenger/getAllPassengers`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      const allPassengers = response.data.data;

      dispatch(setPassenger({ allPassengers }));
    } catch (error) {
      console.log(error);
    }
  }, [dispatch, token]);

  useEffect(() => {
    fetchPassengers();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (isConform === "true") {
      const conformPassengerList = passengers.filter(
        (pass) => pass.status !== "Not Confirmed"
      );
      setConformPass(conformPassengerList);
    } else {
      const nonConformPassengerList = passengers.filter(
        (pass) => pass.status === "Not Confirmed"
      );

      setNonconformPass(nonConformPassengerList);
    }
  }, [passengers, isConform]);

  if (isLoading) {
    return <Loading message="Fetching Passengers..." />;
  }

  const filteredPassengers =
    isConform === "true" ? conformPass : nonconformPass;

  return (
    <Suspense
      fallback={
        <p className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-lg font-bold text-green-900">
          Loading....
        </p>
      }
    >
      <OnBoardPassenger passengers={filteredPassengers} />
    </Suspense>
  );
};

export default OnBoardPassengerPage;
