import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useLoaderData } from "react-router-dom";
import axios from "axios";
import Navigation from "../components/Navigation";
import { getAuthToken, getTokenDuration } from "../utils/auth";
import { setUser, logout } from "../store/user-slice";
import { setFlights } from "../store/flight-slice";

const RootLayout = () => {
  let user = null;
  let flights = null;
  const token = getAuthToken();
  const response = useLoaderData();
  const dispatch = useDispatch();
  const statusCode = response.status;

  useEffect(() => {
    if (statusCode !== 200) {
      // console.log(response.data.message);
    } else {
      user = response.data.user;
      flights = response.data.flights;
    }

    dispatch(setUser({ user }));
    dispatch(setFlights({ flights }));
  }, [statusCode, response]);

  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === "EXPIRED") {
      dispatch(logout());
      return;
    }

    const tokenDuration = getTokenDuration();
    console.log(tokenDuration);

    setTimeout(() => {
      dispatch(logout());
    }, tokenDuration);
  }, [token]);

  // console.log(response);

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

export const Loader = async () => {
  try {
    const token = getAuthToken();

    if (!token)
      return { status: 500, data: { message: "Could not find the token" } };

    const responseOne = await axios.get(
      "http://localhost:8000/api/user/getUser",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );

    const responseTwo = await axios.get(
      "http://localhost:8000/api/flight/getFlights",
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    return {
      status: 200,
      data: {
        user: responseOne.data.userDetails,
        flights: responseTwo.data.flights,
      },
    };
  } catch (error) {
    return {
      status: error.response.status,
      data: { message: error.message },
    };
  }
};
