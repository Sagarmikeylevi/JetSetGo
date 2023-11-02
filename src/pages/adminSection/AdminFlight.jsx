import axios from "axios";
import DashboardFlight from "../../components/dashboard/DashboardFlight";
import { getAuthToken } from "../../utils/auth";
import { useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setFlights } from "../../store/flight-slice";

const AdminFlight = () => {
  const flights = useLoaderData();
  const dispatch = useDispatch();

  dispatch(setFlights({ flights }));
  return <DashboardFlight />;
};

export default AdminFlight;

export const loader = async () => {
  try {
    const token = getAuthToken();
    const response = await axios.get(
      "http://localhost:8000/api/flight/getFlights",
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    // console.log(response.data);

    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
