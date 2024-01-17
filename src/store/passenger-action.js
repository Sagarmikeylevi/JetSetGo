import axios from "axios";
import config from "../config";
import { setPassenger } from "./passenger-slice";
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
