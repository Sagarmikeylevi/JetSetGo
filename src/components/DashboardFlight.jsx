import { FaSearch, FaPlus } from "react-icons/fa";

import Card from "./UI/Card";
import { useState } from "react";

const DashboardFlight = () => {
  const [flightFormOpen, setFlightFormOpen] = useState(false);
  return (
    <Card className="h-[95vh] w-[95vw] bg-white rounded-md absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-xl">
      <div className="mt-8 h-[85%] w-[95%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] space-y-6">
        <div className="w-full h-[20%] flex flex-row items-center justify-between px-4 ">
          <div className="max-w-[25rem] w-[60%] h-[3rem] rounded-md bg-[#f2f2f2] shadow-sm relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent w-[90%] h-full border-2 border-teal-500 rounded-md outline-none border-none px-4 text-[#171616] font-bold placeholder:font-normal tracking-wide md:text-base"
            />
            <FaSearch className="absolute top-[50%] translate-y-[-50%] right-4 text-gray-500 opacity-60 text-lg" />
          </div>

          <div className="bg-green-400 h-[4rem] w-[4rem] rounded-full ml-4 relative shadow-lg cursor-pointer sm:hover:w-[10rem] hover:flex  hover:items-center group transition-all duration-300">
            <p className="hidden sm:group-hover:flex ml-4 text-white font-semibold text-lg">
              Add Flight
            </p>
            <FaPlus className="absolute top-[50%] translate-x-[-50%] left-[50%] translate-y-[-50%] text-white text-2xl sm:group-hover:left-[80%]" />
          </div>
        </div>

        <div className="h-[75%] w-full flex flex-col space-y-4 items-center py-4 overflow-hidden hover:overflow-y-auto scrollbar-thin scrollbar-thumb-[rgba(217,217,217,0.6)] scrollbar-track-transparent">
          {/* flight  */}
          <div className="max-w-[45rem] w-full min-h-[6rem] rounded-md bg-[#f5f5f5] shadow-md flex flex-row items-center px-6 relative cursor-pointer">
            <div className="flex flex-col">
              <div className="flex flex-row space-x-2 items-center text-lg font-semibold text-gray-600">
                <p>DEL</p>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/664/664866.png"
                  alt="arrow_right"
                  className="w-[2rem]"
                />
                <p>MUM</p>
              </div>

              <p className="text-sm text-gray-500 font-bold text-center">
                Non Stop
              </p>
            </div>

            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center space-x-2">
              <img
                src="https://cdn-icons-png.flaticon.com/128/66/66163.png"
                alt=""
                className="w-4"
              />
              <p>3 hr 20 min</p>
            </div>

            <div className="absolute top-[50%] right-6 translate-y-[-50%] space-y-4">
              <p className="text-lg text-green-600">$2953</p>
              <div
                className="flex items-center justify-center space-x-2 font-semibold text-gray-600
              "
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/11264/11264544.png"
                  alt="airlines_logo"
                  className="w-6"
                />
                <p>Air India</p>
              </div>
            </div>
          </div>
          {/* flight  */}
          {/* fligt - 2 */}
          <div className="max-w-[45rem] w-full min-h-[6rem] rounded-md bg-[#f5f5f5] shadow-md flex flex-row items-center px-6 relative cursor-pointer">
            <div className="flex flex-col">
              <div className="flex flex-row space-x-2 items-center text-lg font-semibold text-gray-600">
                <p>DEL</p>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/664/664866.png"
                  alt="arrow_right"
                  className="w-[2rem]"
                />
                <p>MUM</p>
              </div>

              <p className="text-sm text-gray-500 font-bold text-center">
                Non Stop
              </p>
            </div>

            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center space-x-2">
              <img
                src="https://cdn-icons-png.flaticon.com/128/66/66163.png"
                alt=""
                className="w-4"
              />
              <p>3 hr 20 min</p>
            </div>

            <div className="absolute top-[50%] right-6 translate-y-[-50%] space-y-4">
              <p className="text-lg text-green-600">$2953</p>
              <div
                className="flex items-center justify-center space-x-2 font-semibold text-gray-600
              "
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/11264/11264544.png"
                  alt="airlines_logo"
                  className="w-6"
                />
                <p>Air India</p>
              </div>
            </div>
          </div>
          {/* flight - 2 */}
          {/* flight  */}
          <div className="max-w-[45rem] w-full min-h-[6rem] rounded-md bg-[#f5f5f5] shadow-md flex flex-row items-center px-6 relative cursor-pointer">
            <div className="flex flex-col">
              <div className="flex flex-row space-x-2 items-center text-lg font-semibold text-gray-600">
                <p>DEL</p>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/664/664866.png"
                  alt="arrow_right"
                  className="w-[2rem]"
                />
                <p>MUM</p>
              </div>

              <p className="text-sm text-gray-500 font-bold text-center">
                Non Stop
              </p>
            </div>

            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center space-x-2">
              <img
                src="https://cdn-icons-png.flaticon.com/128/66/66163.png"
                alt=""
                className="w-4"
              />
              <p>3 hr 20 min</p>
            </div>

            <div className="absolute top-[50%] right-6 translate-y-[-50%] space-y-4">
              <p className="text-lg text-green-600">$2953</p>
              <div
                className="flex items-center justify-center space-x-2 font-semibold text-gray-600
              "
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/11264/11264544.png"
                  alt="airlines_logo"
                  className="w-6"
                />
                <p>Air India</p>
              </div>
            </div>
          </div>
          {/* flight  */}
          {/* flight  */}
          <div className="max-w-[45rem] w-full min-h-[6rem] rounded-md bg-[#f5f5f5] shadow-md flex flex-row items-center px-6 relative cursor-pointer">
            <div className="flex flex-col">
              <div className="flex flex-row space-x-2 items-center text-lg font-semibold text-gray-600">
                <p>DEL</p>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/664/664866.png"
                  alt="arrow_right"
                  className="w-[2rem]"
                />
                <p>MUM</p>
              </div>

              <p className="text-sm text-gray-500 font-bold text-center">
                Non Stop
              </p>
            </div>

            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center space-x-2">
              <img
                src="https://cdn-icons-png.flaticon.com/128/66/66163.png"
                alt=""
                className="w-4"
              />
              <p>3 hr 20 min</p>
            </div>

            <div className="absolute top-[50%] right-6 translate-y-[-50%] space-y-4">
              <p className="text-lg text-green-600">$2953</p>
              <div
                className="flex items-center justify-center space-x-2 font-semibold text-gray-600
              "
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/11264/11264544.png"
                  alt="airlines_logo"
                  className="w-6"
                />
                <p>Air India</p>
              </div>
            </div>
          </div>
          {/* flight  */}
        </div>
      </div>
    </Card>
  );
};

export default DashboardFlight;
