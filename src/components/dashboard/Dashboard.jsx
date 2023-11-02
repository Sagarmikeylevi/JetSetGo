import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../UI/Card";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import flight_icon from "../../assets/flight_icon.png";
import hotel_icon from "../../assets/hotel_icon.png";

const Dashboard = () => {
  const [currentSection, setCurrentSection] = useState("Flight");

  const handleNextSection = () => {
    setCurrentSection(currentSection === "Flight" ? "Hotel" : "Flight");
  };

  const handlePreviousSection = () => {
    setCurrentSection(currentSection === "Flight" ? "Hotel" : "Flight");
  };

  return (
    <Card className="h-[95vh] w-[95vw] bg-white rounded-md absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-xl">
      {/* mobile version */}
      <div className="md:hidden w-[90%] ml-[5%] h-[80%] mt-[15%]  flex flex-row relative items-center justify-center ">
        <div
          className={` w-[90%] h-[80%] min-w-[20rem] rounded-md flex flex-col items-center justify-center sm:w-[80%] ${
            currentSection === "Flight" ? "" : "hidden"
          }`}
        >
          <img
            src={flight_icon}
            alt="flight_icon"
            className="h-[80%] w-[100%]"
          />
          <Link
            to="flight"
            className="py-4 px-8 cursor-pointer bg-green-400 text-white tracking-wide rounded-md flex items-center justify-center text-lg font-bold"
          >
            Flight
          </Link>
        </div>

        <div
          className={`w-[90%] h-[90%] min-w-[20rem] rounded-md flex flex-col items-center justify-center sm:w-[80%] ${
            currentSection === "Hotel" ? "" : "hidden"
          }`}
        >
          <img
            src={hotel_icon}
            alt="flight_icon"
            className="h-[80%] w-[100%]"
          />
          <div className="py-4 px-8 cursor-pointer bg-green-400 text-white tracking-wide rounded-md flex items-center justify-center text-lg font-bold">
            Hotel
          </div>
        </div>

        <div className="h-10 w-10 rounded-full absolute top-[50%] translate-y-[-50%] right-0 bg-green-400">
          <FaChevronRight
            onClick={handleNextSection}
            className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] text-2xl text-white cursor-pointer"
          />
        </div>

        <div className="h-10 w-10 rounded-full absolute top-[50%] translate-y-[-50%] left-0 bg-green-400">
          <FaChevronLeft
            onClick={handlePreviousSection}
            className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] text-2xl text-white cursor-pointer"
          />
        </div>
      </div>
      {/* mobile version end */}

      {/* desktrop version */}
      <div className="hidden md:flex w-[90%] absolute  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex-row space-x-8 justify-center items-center lg:w-[70%]">
        <div className="w-[40%] h-[80%]  flex flex-col items-center justify-center">
          <img
            src={flight_icon}
            alt="flight_icon"
            className="h-[80%] w-[100%]"
          />
          <Link
            to="flight"
            className="py-4 px-8 cursor-pointer bg-green-400 text-white tracking-wide rounded-md flex items-center justify-center text-lg font-bold uppercase"
          >
            Flight
          </Link>
        </div>

        <div className="w-[40%] h-[80%]  flex flex-col items-center justify-center">
          <img src={hotel_icon} alt="hotel_icon" className="h-[80%] w-[100%]" />
          <div className="py-4 px-8 cursor-pointer bg-green-400 text-white tracking-wide rounded-md flex items-center justify-center text-lg font-bold uppercase">
            Hotel
          </div>
        </div>
      </div>
      {/* desktrop version end */}
    </Card>
  );
};

export default Dashboard;
