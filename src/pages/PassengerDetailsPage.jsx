import React, { Suspense } from "react";
import { redirect } from "react-router-dom";
const PassengerDetails = React.lazy(() =>
  import("../components/PassengerDetails")
);
import axios from "axios";
import { getAuthToken } from "../utils/auth";
import config from "../config";

const PassengerDetailsPage = () => {
  return (
    <Suspense
      fallback={
        <p className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-lg font-bold text-green-900">
          Loading....
        </p>
      }
    >
      <PassengerDetails />
    </Suspense>
  );
};

export default PassengerDetailsPage;

export const action = async ({ request }) => {
  try {
    const data = await request.formData();
    const urlParams = new URLSearchParams(window.location.search);
    const apiUrl = config.production.apiUrl;

    // Get values by key
    const flightId = urlParams.get("flightId");
    const travelClass = urlParams.get("class");
    const price = urlParams.get("price");
    const date = urlParams.get("date");

    const passengerData = {
      full_name: data.get("fullName"),
      date_of_birth: data.get("dob"),
      gender: data.get("gender"),
      nationality: data.get("nationality"),
      panCard: data.get("panCard"),
      phone: data.get("phone"),
      email: data.get("email"),
      flightClass: travelClass,
      departureDate: date,
      price: price,
      flightId: flightId,
    };

    const token = getAuthToken();
    await axios.post(`${apiUrl}/api/passenger/add`, passengerData, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    return redirect("/flights/on-board-list");
  } catch (error) {
    console.log(error);
    return error;
  }
};
