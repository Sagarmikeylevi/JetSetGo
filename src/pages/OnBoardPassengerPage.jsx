import axios from "axios";
import OnBoardPassenger from "../components/OnBoardPassenger";
import { useDispatch, useSelector } from "react-redux";
import { getAuthToken } from "../utils/auth";
import { setPassenger } from "../store/passenger-slice";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const OnBoardPassengerPage = () => {
  const [filteredPassengers, setFilteredPassengers] = useState([]);
  const passengers = useSelector((state) => state.passenger.passengerList);
  console.log("Passengers ===>", passengers);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const isConform = queryParams.get("isConform");

  console.log("IS CONFORM ===>", isConform);

  const dispatch = useDispatch();
  const token = getAuthToken();
  const fetchPassengers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/passenger/getAllPassengers",
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
  }, []);

  useEffect(() => {
    if (isConform === true) {
      const conformPassengerList = passengers.filter(
        (pass) => pass.status !== "Not Confirmed"
      );
      setFilteredPassengers(conformPassengerList);
    } else {
      const nonConformPassengerList = passengers.filter(
        (pass) => pass.status === "Not Confirmed"
      );
      setFilteredPassengers(nonConformPassengerList);
    }
  }, [passengers, isConform]);

  console.log("FILTERED PASSENGERS ===>", filteredPassengers);

  return <OnBoardPassenger passengers={filteredPassengers} />;
};

export default OnBoardPassengerPage;
