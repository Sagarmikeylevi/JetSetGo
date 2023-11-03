import Home from "../components/Home";

const LandingPage = () => {
  return <Home />;
};

export default LandingPage;

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
