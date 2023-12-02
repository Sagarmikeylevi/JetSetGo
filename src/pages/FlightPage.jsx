import Flight from "../components/Flight";

const FlightPage = () => {
  return <Flight />;
};

export default FlightPage;

// export const loader = async () => {
//   try {
//     const token = getAuthToken();

//     const response = await axios.get(
//       "http://localhost:8000/api/passenger/getAllPassengers",
//       {
//         headers: {
//           Authorization: "Bearer " + token,
//         },
//       }
//     );

//     return response.data.data;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };
