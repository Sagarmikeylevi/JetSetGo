import Card from "./UI/Card";
import flight_icon from "../assets/flight_icon.png";
import { FaCalendar, FaUser, FaSearch, FaCaretDown } from "react-icons/fa";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Flight = () => {
  const [openDestination, setOpenDestination] = useState(false);
  const [destinationQuery, setDestinationQuery] = useState("");
  const [isDepartureDest, setIsDepartureDest] = useState(false);
  const [isArrivalDest, setIsArrivalDest] = useState(false);
  const [departureDest, setDepartureDest] = useState("New Delhi");
  const [arrivalDest, setArrivalDest] = useState("Mumbai");
  const [departureDate, setDepartureDate] = useState(new Date());
  const [selectedClass, setSelectedClass] = useState("Economy");
  const [flightIcon, setFlightIcon] = useState("");

  const chooseDestinationHandler = (city) => {
    if (isDepartureDest) setDepartureDest(city);
    if (isArrivalDest) setArrivalDest(city);
    setTimeout(() => {
      setOpenDestination(false);
      setIsDepartureDest(false);
      setIsArrivalDest(false);
    }, 200);
  };

  const destinationHandler = (way) => {
    setTimeout(() => {
      if (way.toLowerCase() === "from") {
        setIsDepartureDest(true);
        setFlightIcon("https://cdn-icons-png.flaticon.com/128/192/192180.png");
      } else {
        setIsArrivalDest(true);
        setFlightIcon(
          "https://cdn-icons-png.flaticon.com/128/3436/3436569.png"
        );
      }

      setOpenDestination(true);
    }, 200);
  };

  const demoSuggestions = [
    {
      city: "Kolkata",
      airport: "Netaji Subhash Chandra Bose International Airport",
    },
    {
      city: "Mumbai",
      airport: "Chhatrapati Shivaji International Airport",
    },
  ];

  const filteredSuggestions = demoSuggestions.filter((suggestion) =>
    suggestion.city.toLowerCase().includes(destinationQuery.toLocaleLowerCase())
  );

  const flightDetails = [
    {
      id: 1,
      icon: "https://cdn-icons-png.flaticon.com/128/192/192180.png",
      way: "From",
      city: departureDest,
      country: "India",
    },
    {
      id: 2,
      icon: "https://cdn-icons-png.flaticon.com/128/3436/3436569.png",
      way: "To",
      city: arrivalDest,
      country: "India",
    },
  ];
  return (
    <>
      {openDestination && (
        <div className="h-[25rem] w-[25rem] z-[999] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-4">
          <input
            type="text"
            placeholder="Search Destination"
            className="w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none"
            value={destinationQuery}
            onChange={(e) => setDestinationQuery(e.target.value)}
          />
          <div className="w-full h-[80%] mt-2 space-y-2">
            {filteredSuggestions.map((suggestion, index) => (
              <div
                className="w-full h-[20%] bg-white rounded-md relative cursor-pointer"
                key={index}
                onClick={() => chooseDestinationHandler(suggestion.city)}
              >
                <img
                  src={flightIcon}
                  alt=""
                  className="absolute left-[5%] top-[50%] translate-x-[-5%] translate-y-[-50%] h-6 w-6"
                />

                <div className="absolute left-[15%] top-[50%] translate-y-[-50%]">
                  <p className="font-bold text-bold">{suggestion.city}</p>
                  <p className="text-xs text-gray-500">{suggestion.airport}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <Card
        className={`h-[95vh] w-[95vw] bg-white rounded-md absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-xl  ${
          openDestination ? "opacity-40" : ""
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
                  className="w-[80%] ml-[10%] h-[4rem] bg-[rgba(230,230,230,0.6)] rounded-lg shadow-md relative md:w-[45%] md:ml-0 cursor-pointer"
                  key={flight.id}
                  onClick={() => destinationHandler(flight.way)}
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

            <div className="mt-2 h-[25%] w-[80%] ml-[10%] space-x-4 flex flex-row md:h-[30%] md:mt-2 md:items-center md:justify-center">
              <div className="w-[48%] flex flex-col items-center space-y-2 md:w-[30%]">
                <div className="flex flex-row items-center space-x-2">
                  <FaCalendar className="text-gray-500" />
                  <p className="uppercase text-sm font-semibold text-gray-500">
                    Departure
                  </p>
                </div>

                <DatePicker
                  selected={departureDate}
                  onChange={(date) => setDepartureDate(date)}
                  minDate={new Date()}
                  maxDate={
                    new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000)
                  }
                  dateFormat="dd MMM yyyy"
                  className="py-2 px-2 rounded-md bg-[rgba(230,230,230,0.6)] text-sm font-semibold text-[rgba(13,13,13,0.8)] md:text-base lg:py-4 lg:px-8 cursor-pointer outline-none tracking-wider"
                />
              </div>
              <div className="w-[48%] flex flex-col items-center space-y-2 md:w-[30%]">
                <div className="flex flex-row items-center space-x-2 ">
                  <FaUser className="text-gray-500" />
                  <p className="uppercase text-sm font-semibold text-gray-500 ">
                    Class
                  </p>
                </div>

                <select
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  className="py-2 px-6 rounded-md bg-[rgba(230,230,230,0.6)]
                  text-sm font-semibold text-[rgba(13,13,13,0.8)] md:text-base
                  lg:py-4 lg:px-8 outline-none"
                >
                  <option value="Economy">Economy</option>
                  <option value="Premium Economy">Premium Economy</option>
                  <option value="Business">Business</option>
                </select>
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
