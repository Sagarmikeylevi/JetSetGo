import { useEffect, useState } from "react";
import ShowPassenger from "../components/ShowPassenger";

import { useLocation } from "react-router-dom";
import axios from "axios";
import { getAuthToken } from "../utils/auth";
import { useSelector } from "react-redux";

const ShowPassengerPage = () => {
  const [bookingDetails, setBookingDetails] = useState({});
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = getAuthToken();
  const flights = useSelector((state) => state.flights.flights);

  console.log("Flights", flights);

  const passengerId = queryParams.get("id");

  useEffect(() => {
    const fetchPassenger = async () => {
      try {
        const response = await axios.get(
          `https://jetsetgoapi123.onrender.com/api/passenger//getPassenger/${passengerId}`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );

        const passengerFlight = flights.find(
          (flight) => flight._id === response.data.data.flightId
        );

        console.log("PASSENGER FLIGHT ===>", passengerFlight);
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
          departure: passengerFlight.departureDestination,
          arrival: passengerFlight.arrivalDestination,
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

  return <ShowPassenger bookingDetails={bookingDetails} />;
};

export default ShowPassengerPage;
