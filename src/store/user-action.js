import axios from "axios";
import { setToken, setUser } from "./user-slice";
import { showNotification } from "./ui-slice";
import config from "../config";
import { redirect } from "react-router-dom";

const apiUrl = config.development.apiUrl;

export const loginRequest = (userData) => {
  return async (dispatch) => {
    const postReq = async () => {
      const response = await axios.post(`${apiUrl}/api/user/login`, userData);

      return response.data.data.token;
    };

    try {
      const token = await postReq();
      dispatch(setToken({ token }));
    } catch (error) {
      dispatch(
        showNotification({
          status: "error",
          title: "Error!",
          message: error.response.data?.error,
        })
      );
    }
  };
};

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
