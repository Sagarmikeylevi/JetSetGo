import axios from "axios";
import OnBoardPassenger from "../components/OnBoardPassenger";
import { useDispatch, useSelector } from "react-redux";
import { getAuthToken } from "../utils/auth";
import { setPassenger } from "../store/passenger-slice";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loading from "../components/UI/Loading";

const OnBoardPassengerPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [conformPass, setConformPass] = useState([]);
  const [nonconformPass, setNonconformPass] = useState([]);

  const passengers = useSelector((state) => state.passenger.passengerList);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const isConform = queryParams.get("isConform");

  const dispatch = useDispatch();
  const token = getAuthToken();
  const fetchPassengers = async () => {
    try {
      const response = await axios.get(
        "https://jetsetgoapi123.onrender.com/api/passenger/getAllPassengers",
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
  };

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

  return <OnBoardPassenger passengers={filteredPassengers} />;
};

export default OnBoardPassengerPage;
