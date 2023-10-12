import Card from "./UI/Card";
import flight_icon from "../assets/flight_icon.png";
import { FaCalendar, FaUser, FaSearch } from "react-icons/fa";
import { useState } from "react";

const Flight = () => {
  const [destinationForm, setDestinationForm] = useState(true);
  const flightDetails = [
    {
      id: 1,
      icon: "https://cdn-icons-png.flaticon.com/128/192/192180.png",
      way: "From",
      city: "New Delhi",
      country: "India",
    },
    {
      id: 2,
      icon: "https://cdn-icons-png.flaticon.com/128/3436/3436569.png",
      way: "To",
      city: "Mumbai",
      country: "India",
    },
  ];
  return (
    <>
      {destinationForm && (
        <div className="h-[25rem] w-[25rem] z-[999] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-4">
          <input
            type="text"
            placeholder="Search Destination"
            className="w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none"
          />

          <div className="w-full h-[80%] mt-2">
            <div className="w-full h-[20%] bg-[#f0efef] rounded-md"></div>
          </div>
        </div>
      )}

      <Card
        className={`h-[95vh] w-[95vw] bg-white rounded-md absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-xl  ${
          destinationForm ? "opacity-40" : ""
        }`}
      >
        <div className="absolute top-[15%] w-[100%] h-[85%] flex flex-col justify-center items-center">
          <div className="h-[30%] w-[100%] flex items-center justify-center md:h-[40%]">
            <img
              src={flight_icon}
              alt="flight_icon"
              className="w-[20rem] md:w-[25rem] lg:w-[30rem]"
            />
          </div>

          <div className="h-[65%] w-[100%] md:[50%]">
            {/* destination details */}
            <div className="mt-[-0.5rem] w-[100%] h-[55%] flex flex-col space-y-4 relative justify-center md:w-[90%] md:ml-[5%] md:items-center md:flex-row md:space-x-[8%] md:mt-4 md:h-[30%] md:space-y-0 lg:w-[80%] lg:ml-[10%]">
              {flightDetails.map((flight) => (
                <div
                  className="w-[80%] ml-[10%] h-[4rem] bg-[rgba(230,230,230,0.6)] rounded-lg shadow-md relative md:w-[45%] md:ml-0"
                  key={flight.id}
                >
                  <img
                    src={flight.icon}
                    alt="plane_icon"
                    className="h-8 w-8 absolute top-[50%] left-[4%] translate-x-[-4%] translate-y-[-50%]"
                  />

                  <div className="absolute top-[50%] left-[28%] translate-x-[-28%] translate-y-[-50%] h-[100%] flex flex-col justify-center ">
                    <p className="font-bold text-gray-400">{flight.way}</p>
                    <div className="font-semibold text-lg space-x-2">
                      <span>{flight.city}</span>
                      <span className="text-sm text-gray-400">
                        {flight.country}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              <img
                src="https://cdn-icons-png.flaticon.com/128/5297/5297943.png"
                alt="one_way_to_another"
                className="absolute top-[35%] left-[80%] translate-x-[-80%] translate-y-[-35%] h-12 w-12  md:rotate-90 md:top-[50%] md:left-[41.4%] md:translate-y-[-50%]  md:translate-x-[-41.4%] lg:h-16 lg:w-16"
              />
            </div>
            {/* destination details end */}

            <div className="mt-2 h-[25%] w-[80%] ml-[10%] flex flex-row md:h-[30%] md:mt-2 md:items-center md:justify-center">
              <div className="w-[50%] flex flex-col items-center space-y-2 md:w-[30%]">
                <div className="flex flex-row items-center space-x-2">
                  <FaCalendar className="text-gray-500" />
                  <p className="uppercase text-sm font-semibold text-gray-500 ">
                    Departure
                  </p>
                </div>
                <p className="py-2 px-6 rounded-md bg-[rgba(230,230,230,0.6)] text-sm font-semibold text-[rgba(13,13,13,0.8)] md:text-base lg:py-4 lg:px-8">
                  17 Sept 2021
                </p>
              </div>
              <div className="w-[50%] flex flex-col items-center space-y-2 md:w-[30%]">
                <div className="flex flex-row items-center space-x-2">
                  <FaUser className="text-gray-500" />
                  <p className="uppercase text-sm font-semibold text-gray-500 ">
                    Class
                  </p>
                </div>
                <p className="py-2 px-6 rounded-md bg-[rgba(230,230,230,0.6)] text-sm font-semibold text-[rgba(13,13,13,0.8)] md:text-base lg:py-4 lg:px-8">
                  Economy
                </p>
              </div>
            </div>

            <div className="mt-2 h-[16%] w-[50%] ml-[25%] rounded-md bg-green-400 flex items-center justify-center space-x-2 text-[rgba(255,255,255,0.9)] hover:bg-black transition-all duration-200 cursor-pointer md:mt-4 md:w-[30%] md:ml-[35%] md:h-[20%] md:text-lg">
              <FaSearch />
              <p className="font-semibold">Search Flights</p>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Flight;
