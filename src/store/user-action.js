import axios from "axios";
import { setUser } from "./user-slice";
import { showNotification } from "./ui-slice";
import config from "../config";

const apiUrl = config.development.apiUrl;

export const fetchUser = (token) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const respponse = await axios.get(`${apiUrl}/api/user/getUser`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      return respponse.data.userDetails;
    };

    try {
      const user = await fetchData();
      dispatch(setUser({ user }));
    } catch (error) {
      dispatch(
        showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching user data failed",
        })
      );
    }
  };
};
