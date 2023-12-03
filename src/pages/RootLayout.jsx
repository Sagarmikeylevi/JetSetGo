import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Navigation from "../components/Navigation";
import { getTokenDuration } from "../utils/auth";
import { setUser, logout } from "../store/user-slice";
import { setFlights } from "../store/flight-slice";
import Error from "../components/UI/Error";

const RootLayout = () => {
  const token = useSelector((state) => state.user.token);
  const AllFlights = useSelector((state) => state.flights.flights);
  const [logoutMsg, setLogOutMsg] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) {
      return;
    }
    if (token === "EXPIRED") {
      dispatch(logout());
      setLogOutMsg(true);
      return;
    }

    if (token) {
      setLogOutMsg(false);
    }

    const tokenDuration = getTokenDuration();
    console.log(tokenDuration);

    setTimeout(() => {
      dispatch(logout());
      setLogOutMsg(true);
    }, tokenDuration);
    const getUser = async (token) => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/user/getUser",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          }
        );

        const user = response.data.userDetails;

        dispatch(setUser({ user }));
      } catch (error) {
        console.log(error);
      }
    };

    const fetchFlight = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/flight/getFlights",
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );

        // console.log("FLIGHT ===>", response.data.flights);
        const flights = response.data.flights;
        dispatch(setFlights({ flights }));
      } catch (error) {
        console.log(error);
      }
    };

    getUser(token);
    fetchFlight();
  }, [token]);

  if (logoutMsg) {
    return <Error message="Logged Out!" />;
  }

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
