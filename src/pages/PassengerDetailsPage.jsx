import { redirect } from "react-router-dom";
import PassengerDetails from "../components/PassengerDetails";
import axios from "axios";
import { getAuthToken } from "../utils/auth";

const PassengerDetailsPage = () => {
  return <PassengerDetails />;
};

export default PassengerDetailsPage;

export const action = async ({ request }) => {
  try {
    const data = await request.formData();
    const urlParams = new URLSearchParams(window.location.search);

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
    await axios.post("http://localhost:8000/api/passenger/add", passengerData, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    return redirect("/flights");
  } catch (error) {
    console.log(error);
    return error;
  }
};
