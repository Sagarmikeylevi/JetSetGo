import { useSelector } from "react-redux";
import Card from "./UI/Card";
import { Link, useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import Loading from "./UI/Loading";

const SearchedFlights = ({ searchedFlightDetails }) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    searchedFlights,
    departureDestination,
    arrivalDestination,
    classOfFlight,
    departureDate,
  } = searchedFlightDetails;

  const prices = useSelector((state) => state.flights.prices);
  const navigate = useNavigate();

  /* making the departure date to an actual date */
  const parseDateString = (dateString) => {
    const [day, month, year] = dateString.split("/");
    return new Date(`${year}-${month}-${day}`);
  };

  const searchDate = parseDateString(departureDate);

  const formattedSearchDate = `${searchDate.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  })}`;

  /* Here it will take 30 days from today
   ***Note: As we will change the dates it will go till 30th day fro tpday */
  const today = new Date();
  const thirtyDaysFromToday = new Date();
  thirtyDaysFromToday.setDate(today.getDate() + 30);

  const dateArray = Array.from({ length: 5 }, (_, index) => {
    const newDate = new Date(searchDate);
    newDate.setDate(searchDate.getDate() + index);

    // Check if the newDate is within the next 30 days
    if (newDate <= thirtyDaysFromToday) {
      return newDate;
    }

    return null; // Exclude dates outside the 30-day range
  }).filter((dates) => dates !== null);

  /* date changes handler it will search flights of that given day */
  const handleSearchFlights = useCallback(
    (departureDate) => {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      const departure_date = departureDate.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        weekday: "long",
      });

      const url = `flight-results?departure=${departureDestination}&arrival=${arrivalDestination}&date=${departure_date}&class=${classOfFlight}`;

      navigate(`/flights/${url}`);
    },
    [departureDestination, arrivalDestination, classOfFlight, navigate]
  );

  if (isLoading) {
    return <Loading message="Fetching Flights..." />;
  }

  return (
    <Card className="h-[95vh] w-[95vw] bg-white rounded-md absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-xl">
      <div className="absolute top-[15%] w-[100%] h-[85%] flex flex-col justify-center items-center space-y-4">
        {/* section - 1 */}
        <div className="w-full h-[15%] flex flex-row justify-center items-center space-x-4">
          <div className="flex flex-col justify-center space-y-[-5px]">
            <p className="text-lg font-semibold text-green-900">
              {departureDestination?.slice(0, 3).toUpperCase()}
            </p>
            <p className="text-sm font-medium text-green-900 opacity-80">
              India
            </p>
          </div>

          <div className="w-[20%] border-b-2 border-b-green-600 border-dashed"></div>

          <img
            src="https://cdn-icons-png.flaticon.com/128/3097/3097160.png"
            alt="plane_icon"
            className="h-8 w-8"
          />

          <div className="w-[20%] border-b-2 border-b-green-600 border-dashed"></div>

          <div className="flex flex-col justify-center space-y-[-5px]">
            <p className="text-lg font-semibold text-green-900">
              {arrivalDestination?.slice(0, 3).toUpperCase()}
            </p>
            <p className="text-sm font-medium text-green-900 opacity-80">
              India
            </p>
          </div>
        </div>
        {/* section - 1 end */}
        {/* section - 2 */}
        <div className="h-[15%] w-full flex flex-row justify-center items-center space-x-4 md:space-x-8">
          {dateArray.map((date, index) => (
            <div
              key={index}
              className={`h-full w-[15%] max-w-[6rem] ${
                index === 0 ? "bg-green-900" : "bg-green-600 opacity-70"
              }  rounded-md shadow-md flex flex-col text-white justify-center items-center cursor-pointer`}
              onClick={() => handleSearchFlights(date)}
            >
              <p className="text-2xl font-semibold">{date.getDate()}</p>
              <p className="uppercase font-thin text-sm">
                {date.toLocaleDateString("en-US", { month: "short" })}
              </p>
            </div>
          ))}
        </div>
        {/* section - 2 end */}
        {/* section - 3*/}
        <div className="max-h-[60%] w-[95%] flex flex-col space-y-2 items-center p-4 bg-[#e6e6e6] rounded-md overflow-hidden hover:overflow-y-auto scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-transparent relative">
          {searchedFlights.length === 0 && (
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-xl text-gray-600 font-semibold uppercase">
              No Flights{" "}
            </div>
          )}
          {searchedFlights.map((flight) => {
            const airLine = flight.airline;
            let price = "";
            if (classOfFlight === "economy") {
              price = prices.others.economy;

              if (prices[airLine]) {
                price = prices[airLine].economy;
              }
            } else if (classOfFlight === "business") {
              price = prices.others.business;

              if (prices[airLine]) {
                price = prices[airLine].business;
              }
            } else {
              price = prices.others.premiumEconomy;

              if (prices[airLine]) {
                price = prices[airLine].premiumEconomy;
              }
            }

            return (
              <Link
                to={`/flights/passenger-details?flightId=${flight._id}&class=${classOfFlight}&price=${price}&date=${formattedSearchDate}`}
                className="max-w-[45rem] w-full min-h-[6rem] rounded-md bg-[#f5f5f5] shadow-md flex flex-row items-center px-8 relative cursor-pointer justify-between"
                key={flight._id}
              >
                <div className="flex flex-row space-x-1 items-center">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/11264/11264544.png"
                    alt="airlines_logo"
                    className="w-8 md:w-12"
                  />
                  <p className="font-semibold text-green-900 tracking-wide md:text-lg">
                    <span className="font-bold text-xl md:text-2xl">
                      {flight.airline.slice(0, 1)}
                    </span>
                    {flight.airline.slice(1)}
                  </p>
                </div>

                <div className="flex flex-row items-center justify-center space-x-1 text-green-900">
                  <p className="font-bold text-2xl md:text-3xl">
                    {flight.timeOfDeparture}
                  </p>
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/3248/3248150.png"
                    alt="arrow"
                    className="w-12 md:w-16"
                  />
                  <p className="font-semibold md:text-xl">
                    {flight.timeOfArrival}
                  </p>
                </div>

                <div className="text-lg md:text-xl md:mt-2 text-green-900 flex flex-row items-center space-x-[1px]">
                  <span className="text-2xl font-semiboldd:text-3xl">$</span>
                  <span>{price}</span>
                </div>

                <p className="absolute top-0 left-[105%] translate-x-[-105%] px-4 py-2 bg-[rgba(30,69,43,0.8)] rounded-md text-white text-xs md:text-sm capitalize">
                  {classOfFlight.toLowerCase() === "premium economy"
                    ? "PremiumEconomy"
                    : classOfFlight}
                </p>
              </Link>
            );
          })}
        </div>
        {/* section - 3 end */}
      </div>
    </Card>
  );
};

export default SearchedFlights;
