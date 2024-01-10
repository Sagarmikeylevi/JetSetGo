import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import { getTokenDuration } from "../utils/auth";
import { logout } from "../store/user-slice";

const RootLayout = () => {
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  useEffect(() => {
    let logoutTimer;

    if (!token) {
      return;
    }

    // if the token is expired its autoetically logged out
    if (token === "EXPIRED") {
      dispatch(logout());
      return;
    }

    // getting the token duration
    const tokenDuration = getTokenDuration();

    logoutTimer = setTimeout(() => {
      dispatch(logout());
    }, tokenDuration);

    return () => clearTimeout(logoutTimer);
  }, [token, dispatch]);

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
