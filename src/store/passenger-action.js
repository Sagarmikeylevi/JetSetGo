import axios from "axios";
import config from "../config";
import {
  deletePass,
  setPassenger,
  setPassengerDetails,
} from "./passenger-slice";
import { showNotification } from "./ui-slice";

const apiUrl = config.development.apiUrl;

export const fetchPassengers = (token) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await axios.get(
        `${apiUrl}/api/passenger/getAllPassengers`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      return response.data.data;
    };

    try {
      const allPassengers = await fetchData();
      dispatch(setPassenger({ allPassengers }));
    } catch (error) {
      dispatch(
        showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching passengers data failed",
        })
      );
    }
  };
};

export const fetchPassengerById = (passId, token, flights) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await axios.get(
        `${apiUrl}/api/passenger/getPassenger/${passId}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      return response.data.data;
    };

    try {
      const passenger = await fetchData();
      const flight = flights.find(
        (flight) => flight._id === passenger.flightId
      );
      const DOB = passenger.date_of_birth;
      const DOBObject = new Date(DOB);

      const day = DOBObject.getUTCDate();
      const month = DOBObject.getUTCMonth() + 1;
      const year = DOBObject.getUTCFullYear();

      const formattedDOB = `${day}-${month < 10 ? "0" : ""}${month}-${year}`;

      const passengerDetails = {
        _id: passenger._id,
        name: passenger.full_name,
        dob: formattedDOB,
        sex: passenger.gender,
        nationality: passenger.nationality,
        panCard: passenger.panCard,
        phoneNo: passenger.phone,
        email: passenger.email,
        departure: flight ? flight.departureDestination : "",
        arrival: flight ? flight.arrivalDestination : "",
        class: passenger.flightClass,
        date: passenger.departureDate,
        price: passenger.price,
        status: passenger.status,
      };

      dispatch(setPassengerDetails({ passengerDetails }));
    } catch (error) {
      dispatch(
        showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching passenger data failed",
        })
      );
    }
  };
};

export const deletePassengerById = (passId, token) => {
  return async (dispatch) => {
    const deleteRequest = async () => {
      await axios.delete(`${apiUrl}/api/passenger/delete/${passId}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
    };

    try {
      await deleteRequest();
      dispatch(deletePass({ passId }));
    } catch (error) {
      dispatch(
        showNotification({
          status: "error",
          title: "Error!",
          message: "Deleting passenger Failed",
        })
      );
    }
  };
};

export const conformPassengerById = (passId, token) => {
  return async (dispatch) => {
    const conformRequest = async () => {
      await axios.put(
        `${apiUrl}/api/passenger/conform/${passId}`,
        {},
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
    };

    try {
      await conformRequest();
    } catch (error) {
      dispatch(
        showNotification({
          status: "error",
          title: "Error!",
          message: "Conform request failed",
        })
      );
    }
  };
};
