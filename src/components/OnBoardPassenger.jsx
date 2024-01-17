import React, { useEffect, useState } from "react";
import Card from "./UI/Card";
import { Link, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "./UI/Loading";

const OnBoardPassenger = ({ passengerState }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [passengers, setPassengers] = useState([]);
  const allPassengers = useSelector((state) => state.passenger.passengerList);

  useEffect(() => {
    setIsLoading(true);
    if (passengerState === "conform") {
      const passenger = allPassengers.filter(
        (pass) => pass.status !== "Not Confirmed"
      );

      setPassengers(passenger);
    } else {
      const passenger = allPassengers.filter(
        (pass) => pass.status === "Not Confirmed"
      );

      setPassengers(passenger);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [passengerState, allPassengers]);

  const filteredPassengers = passengers.filter((passenger) =>
    passenger.full_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) {
    return <Loading message="Fetching Passengers..." />;
  }

  return (
    <Card className="h-[95vh] w-[95vw] bg-white rounded-md absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-xl">
      <div className="mt-2 w-[90%] h-[75%] absolute top-[15%] md:top-[12%] left-[50%] translate-x-[-50%]">
        <div className="absolute left-[5%] top-[5%] translate-x-[-5%] translate-y-[-5%] w-[20rem] h-[3rem] border-[1px] bg-green-50 border-green-400 rounded-md flex flex-row items-center justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/128/11134/11134411.png"
            alt="search_icon"
            className="w-6"
          />
          <input
            type="text"
            className="w-[90%] h-full px-2 placeholder:text-green-800 text-green-700 border-none outline-none placeholder:font-thin bg-transparent"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="absolute left-[50%] translate-x-[-50%] top-[20%] w-[80%] max-w-[30rem] max-h-[80%] py-4 flex flex-col space-y-4 overflow-hidden hover:overflow-y-auto scrollbar-thin scrollbar-thumb-[#ffff80] scrollbar-track-transparent px-4">
          {filteredPassengers.length === 0 && (
            <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-green-950 font-bold text-2xl opacity-80">
              No Passengers
            </p>
          )}
          {filteredPassengers.map((passenger) => (
            <div
              className="w-full min-h-[3.5rem] rounded-md bg-green-500 flex items-center px-4 text-white text-xl font-thin uppercase tracking-wide relative"
              key={passenger._id}
            >
              <p>{passenger.full_name}</p>
              <Link
                to={`/flights/show-passenger?id=${passenger._id}`}
                className="w-8 absolute left-[95%] translate-x-[-95%] cursor-pointer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/1294/1294758.png"
                  alt="arrow_right"
                  className="w-full"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default OnBoardPassenger;
