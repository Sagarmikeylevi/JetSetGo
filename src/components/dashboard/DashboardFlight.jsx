import { FaSearch, FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux";

import Card from "../UI/Card";
import { useState } from "react";
import { Link } from "react-router-dom";

const DashboardFlight = () => {
  const flights = useSelector((state) => state.flights.flights);
  const prices = useSelector((state) => state.flights.prices);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredFlights = flights.length === 0 ? "" : flights.filter(
    (flight) =>
      flight.departureDestination
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      flight.arrivalDestination
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      flight.airline.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Card className="h-[95vh] w-[95vw] bg-white rounded-md absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-xl">
      <div className="mt-8 h-[85%] w-[95%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] space-y-6">
        <div className="w-full h-[20%] flex flex-row items-center justify-between px-4">
          <div className="max-w-[25rem] w-[60%] h-[3rem] rounded-md bg-[#f2f2f2] shadow-sm relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent w-[90%] h-full border-2 border-teal-500 rounded-md outline-none border-none px-4 text-[#171616] font-bold placeholder:font-normal tracking-wide md:text-base"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="absolute top-[50%] translate-y-[-50%] right-4 text-gray-500 opacity-60 text-lg" />
          </div>

          <Link
            to="addFlight"
            className="bg-green-400 h-[4rem] w-[4rem] rounded-full ml-4 relative shadow-lg cursor-pointer sm:hover:w-[10rem] hover:flex  hover:items-center group transition-all duration-300"
          >
            <p className="hidden sm:group-hover:flex ml-4 text-white font-semibold text-lg">
              Add Flight
            </p>
            <FaPlus className="absolute top-[50%] translate-x-[-50%] left-[50%] translate-y-[-50%] text-white text-2xl sm:group-hover:left-[80%]" />
          </Link>
        </div>

        <div className="h-[75%] w-full flex flex-col space-y-4 items-center py-4 overflow-hidden hover:overflow-y-auto scrollbar-thin scrollbar-thumb-[rgba(217,217,217,0.6)] scrollbar-track-transparent relative">
          {!filteredFlights && (
            <div className="uppercase text-xl tracking-wide absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-gray-500 font-semibold">
              No Flights
            </div>
          )}

          {filteredFlights &&
            filteredFlights.map((flight) => {
              const startTime = flight.timeOfDeparture;
              const endTime = flight.timeOfArrival;

              // Split the time strings into hours and minutes
              const startTimeParts = startTime.split(":");
              const endTimeParts = endTime.split(":");

              // Parse hours and minutes into integers
              const startHours = parseInt(startTimeParts[0]);
              const startMinutes = parseInt(startTimeParts[1]);
              const endHours = parseInt(endTimeParts[0]);
              const endMinutes = parseInt(endTimeParts[1]);

              // Calculate the time in minutes since midnight
              const startTimeInMinutes = startHours * 60 + startMinutes;
              const endTimeInMinutes = endHours * 60 + endMinutes;

              // Calculate the time difference in minutes
              const timeDifferenceInMinutes =
                endTimeInMinutes - startTimeInMinutes;

              // Calculate the hours and minutes of the duration
              const durationHours = Math.floor(timeDifferenceInMinutes / 60);
              const durationMinutes = timeDifferenceInMinutes % 60;

              const airLine = flight.airline;
              let basePrice = prices.others.economy;

              if (airLine === "Air India") {
                basePrice = prices.AirIndia.economy;
              }

              if (airLine === "AirAsia") {
                basePrice = prices.AirAsia.economy;
              }

              if (airLine == "IndiGo") {
                basePrice = prices.IndiGo.economy;
              }

              return (
                <Link
                  to={`${flight._id}`}
                  className="max-w-[45rem] w-full min-h-[6rem] rounded-md bg-[#f5f5f5] shadow-md flex flex-row items-center px-6 relative cursor-pointer"
                  key={flight._id}
                >
                  <div className="flex flex-col">
                    <div className="flex flex-row space-x-2 items-center text-lg font-semibold text-gray-600 uppercase">
                      <p>{flight.departureDestination.substring(0, 3)}</p>
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/664/664866.png"
                        alt="arrow_right"
                        className="w-[2rem]"
                      />
                      <p>{flight.arrivalDestination.substring(0, 3)}</p>
                    </div>

                    <p className="text-sm text-gray-500 font-bold text-center">
                      {Math.random() < 0.5 ? "Non Stop" : "One Stop"}
                    </p>
                  </div>

                  <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center space-x-2">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/66/66163.png"
                      alt=""
                      className="w-4"
                    />
                    <p>{`${durationHours} hr ${
                      durationMinutes < 10
                        ? `0${durationMinutes}`
                        : durationMinutes
                    } min`}</p>
                  </div>

                  <div className="absolute top-[50%] right-6 translate-y-[-50%] space-y-4">
                    <p className="text-lg text-green-600">
                      {`$${basePrice.toLocaleString()}`}
                    </p>
                    <div
                      className="flex items-center justify-center space-x-2 font-semibold text-gray-600
              "
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/11264/11264544.png"
                        alt="airlines_logo"
                        className="w-6"
                      />
                      <p>{airLine}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </Card>
  );
};

export default DashboardFlight;
