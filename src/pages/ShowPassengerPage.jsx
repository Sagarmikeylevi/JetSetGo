import React, { Suspense, useEffect, useState } from "react";
const ShowPassenger = React.lazy(() => import("../components/ShowPassenger"));

import { useLocation } from "react-router-dom";
import axios from "axios";
import { getAuthToken } from "../utils/auth";
import { useSelector } from "react-redux";
import config from "../config";

const ShowPassengerPage = () => {
  console.log("<ShowPassengerPage /> rendered");
  const [bookingDetails, setBookingDetails] = useState({
    _id: "",
    name: "",
    dob: "",
    sex: "",
    nationality: "",
    panCard: "",
    phoneNo: "",
    email: "",
    departure: "",
    arrival: "",
    class: "",
    date: "",
    price: "",
    status: "",
  });
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = getAuthToken();
  const flights = useSelector((state) => state.flights.flights);
  const apiUrl = config.development.apiUrl;

  // console.log("Flights", flights);

  const passengerId = queryParams.get("id");

  useEffect(() => {
    const fetchPassenger = async () => {
      try {
        const response = await axios.get(
          `${apiUrl}/api/passenger//getPassenger/${passengerId}`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );

        const passengerFlight = await flights.find(
          (flight) => flight._id === response.data.data.flightId
        );

        // console.log("PASSENGER FLIGHT ===>", passengerFlight);
        const dateString = response.data.data.date_of_birth;
        const dateObject = new Date(dateString);

        const day = dateObject.getUTCDate();
        const month = dateObject.getUTCMonth() + 1; // month is zero based
        const year = dateObject.getUTCFullYear();

        const formattedDate = `${day}-${month < 10 ? "0" : ""}${month}-${year}`;

        const details = {
          _id: response.data.data._id,
          name: response.data.data.full_name,
          dob: formattedDate,
          sex: response.data.data.gender,
          nationality: response.data.data.nationality,
          panCard: response.data.data.panCard,
          phoneNo: response.data.data.phone,
          email: response.data.data.email,
          departure: passengerFlight
            ? passengerFlight.departureDestination
            : "",
          arrival: passengerFlight ? passengerFlight.arrivalDestination : "",
          class: response.data.data.flightClass,
          date: response.data.data.departureDate,
          price: response.data.data.price,
          status: response.data.data.status,
        };
        setBookingDetails(details);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPassenger();
  }, [flights, token, passengerId]);

  return (
    <Suspense
      fallback={
        <p className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-lg font-bold text-green-900">
          Loading....
        </p>
      }
    >
      <ShowPassenger bookingDetails={bookingDetails} />
    </Suspense>
  );
};

export default ShowPassengerPage;
