import { useEffect } from "react";
import Home from "../components/Home";
import { getAuthToken } from "../utils/auth";
import { setFlights } from "../store/flight-slice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const LandingPage = () => {
  const dispatch = useDispatch();
  const AllFlights = useSelector((state) => state.flights.flights);
  console.log("FLIGHT IN REDUX ===>", AllFlights);

  // console.log("ALL PASSENGERS ===> ", allPassengers);

  // useEffect(() => {
  //   dispatch(setPassenger({ allPassengers }));
  // }, []);

  const token = getAuthToken();

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

      console.log("FLIGHT ===>", response.data.flights);
      const flights = response.data.flights;
      dispatch(setFlights({ flights }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFlight();
  }, []);
  return <Home />;
};

export default LandingPage;

// export const loader = async () => {
//   try {
//     const token = getAuthToken();
//     const response = await axios.get(
//       "http://localhost:8000/api/flight/getFlights",
//       {
//         headers: {
//           Authorization: "Bearer " + token,
//         },
//       }
//     );

//     // console.log(response.data);

//     return response.data;
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// };
