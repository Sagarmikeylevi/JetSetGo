import axios from "axios";
import config from "../config";
import { flightDelete, setFlights } from "./flight-slice";
import { showNotification } from "./ui-slice";

const apiUrl = config.development.apiUrl;

export const fetchFlights = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await axios.get(`${apiUrl}/api/flight/getFlights`, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response.data.flights;
    };

    try {
      const flights = await fetchData();
      dispatch(setFlights({ flights }));
    } catch (error) {
      dispatch(
        showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching flight data failed",
        })
      );
    }
  };
};

export const deleteFlight = (flightId, token) => {
  return async (dispatch) => {
    const deleteRequest = async () => {
      await axios.delete(`${apiUrl}/api/flight/delete/${flightId}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
    };

    try {
      await deleteRequest();
      dispatch(flightDelete({ flightId }));
    } catch (error) {
      dispatch(
        showNotification({
          status: "error",
          title: "Deletion Failed",
          message:
            "There was an error deleting the flight. Please try again later.",
        })
      );
    }
  };
};
