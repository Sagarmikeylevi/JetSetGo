import { useActionData, useLocation } from "react-router-dom";
import PassengerDetails from "../components/PassengerDetails";
import { useDispatch, useSelector } from "react-redux";
import { setPassenger } from "../store/passenger-slice";

const PassengerDetailsPage = () => {
  const flights = useSelector((state) => state.flights.flights);
  const dispatch = useDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const flightId = queryParams.get("flightId");
  const flightClass = queryParams.get("class");
  const price = queryParams.get("price");
  const departureDate = queryParams.get("date");

  const specificFlight = flights.filter((flight) => flight._id === flightId);

  console.log("SPECIFIC FLIGHT ===> ", specificFlight);

  const passengerData = useActionData();

  if (passengerData) {
    const passengerDetails = {
      full_name: passengerData.fullName,
      date_of_birth: passengerData.dob,
      gender: passengerData.gender,
      nationality: passengerData.nationality,
      panCard: passengerData.panCard,
      phone: passengerData.phone,
      email: passengerData.email,
      departureDest: specificFlight[0].departureDestination,
      arrivalDest: specificFlight[0].arrivalDestination,
      flightClass: flightClass,
      airLine: specificFlight[0].airline,
      departureTime: specificFlight[0].timeOfDeparture,
      arrivalTime: specificFlight[0].timeOfArrival,
      departureDate: departureDate,
      price: price,
    };

    // console.log("PASSENGER DATA ===>", passengerDetails);
    dispatch(setPassenger(passengerDetails));
  }
  return <PassengerDetails />;
};

export default PassengerDetailsPage;

export const action = async ({ request }) => {
  try {
    const data = await request.formData();

    const passengerData = {
      fullName: data.get("fullName"),
      dob: data.get("dob"),
      gender: data.get("gender"),
      nationality: data.get("nationality"),
      panCard: data.get("panCard"),
      phone: data.get("phone"),
      email: data.get("email"),
    };

    return passengerData;
  } catch (error) {
    return error;
  }
};
