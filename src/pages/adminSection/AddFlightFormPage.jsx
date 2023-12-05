import React, { Suspense } from "react";
const AddFlightForm = React.lazy(() =>
  import("../../components/dashboard/AddFlightForm")
);
import axios from "axios";
import { getAuthToken } from "../../utils/auth";
import { redirect } from "react-router-dom";

const AddFlightFormPage = () => {
  return (
    <Suspense
      fallback={
        <p className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-lg font-bold text-green-900">
          Loading....
        </p>
      }
    >
      <AddFlightForm />
    </Suspense>
  );
};

export default AddFlightFormPage;

export const action = async ({ request }) => {
  try {
    const currentURL = window.location.href;
    console.log("Current URL:", currentURL);
    const token = getAuthToken();
    const data = await request.formData();
    const dates = data.get("dates");
    const datesArray = dates.split("-").map(Number);
    if (isNaN(datesArray[0])) {
      // error
      return null;
    }

    const departureTime = data.get("departure-time");
    const timeParts = departureTime.split(":");
    const dep_hours = parseInt(timeParts[0], 10);
    const dep_minutes = parseInt(timeParts[1], 10);
    const arrivalTime = data.get("arrival-time");
    const timePartsTwo = arrivalTime.split(":");
    const arr_hours = parseInt(timePartsTwo[0], 10);
    const arr_minutes = parseInt(timePartsTwo[0], 10);

    const seatsClass = {
      economy: +data.get("economy"),
      premiumEconomy: +data.get("premium-economy"),
      business: +data.get("business"),
    };

    if (
      !(dep_hours >= 6 && dep_hours <= 22) ||
      !(dep_minutes >= 0 && dep_minutes <= 60)
    ) {
      console.log("rrrrrr");
      return null;
    }

    if (
      !(arr_hours >= 7 && arr_hours <= 24) ||
      !(arr_minutes >= 0 && arr_minutes <= 60)
    ) {
      console.log("rrrrrr");
      return null;
    }
    const flightData = {
      departureDestination: data.get("departure-destination"),
      arrivalDestination: data.get("arrival-destination"),
      datesOfDeparture: datesArray,
      timeOfDeparture: departureTime,
      timeOfArrival: arrivalTime,
      airline: data.get("airlines"),
      seatsAvailable: seatsClass,
    };

    console.log("Its working....");

    let response = "";

    if (currentURL.includes("update")) {
      const UrlParts = currentURL.split("/");
      const Id = UrlParts[UrlParts.length - 1];

      response = await axios.put(
        `https://jetsetgoapi123.onrender.com/api/flight/update/${Id}`,
        flightData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
    } else {
      response = await axios.post(
        "https://jetsetgoapi123.onrender.com/api/flight/add",
        flightData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
    }

    return redirect("/dashboard/flight");
  } catch (error) {
    console.log(error);
    return error.response;
  }
};
