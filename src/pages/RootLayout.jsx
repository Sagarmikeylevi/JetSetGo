import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Navigation from "../components/Navigation";
import { getTokenDuration } from "../utils/auth";
import { setUser, logout } from "../store/user-slice";
import { setFlights } from "../store/flight-slice";
import Error from "../components/UI/Error";

const api = axios.create({
  baseURL: "https://jetsetgoapi123.onrender.com/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

const API_BASE_URL = "https://jetsetgoapi123.onrender.com/api/";

const RootLayout = () => {
  const token = useSelector((state) => state.user.token);
  // const [logoutMsg, setLogOutMsg] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    let logoutTimer;

    const getUser = async (token) => {
      try {
        const response = await api.get("user/getUser", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const user = response.data.userDetails;
        dispatch(setUser({ user }));
      } catch (error) {
        console.log("Error fetching user:", error);
      }
    };

    const fetchFlight = async () => {
      try {
        const response = await api.get("flight/getFlights", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const flights = response.data.flights;
        dispatch(setFlights({ flights }));
      } catch (error) {
        console.log("Error fetching flights:", error);
      }
    };

    if (!token) {
      return;
    }

    if (token === "EXPIRED") {
      dispatch(logout());
      setLogOutMsg(true);
      return;
    }

    setLogOutMsg(false);

    const tokenDuration = getTokenDuration();

    logoutTimer = setTimeout(() => {
      dispatch(logout());
      // setLogOutMsg(true);
    }, tokenDuration);

    getUser(token);
    fetchFlight();

    return () => clearTimeout(logoutTimer);
  }, [token, dispatch]);

  // if (logoutMsg) {
  //   return <Error message="Logged Out!" />;
  // }

  return (
    <>
      <Navigation />

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
