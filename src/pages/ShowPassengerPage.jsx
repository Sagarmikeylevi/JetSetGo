import { useSelector } from "react-redux";
import ShowPassenger from "../components/ShowPassenger";
import { useEffect, useState } from "react";

const ShowPassengerPage = () => {
  const [passengerDetails, setPassengerDetails] = useState("");
  const passenger = useSelector((state) => state.passenger.passenger);

  useEffect(() => {
    setPassengerDetails(passenger);
  }, [passenger]);

  return <ShowPassenger passenger={passengerDetails} />;
};

export default ShowPassengerPage;
