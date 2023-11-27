import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ShowPassenger = ({passenger}) => {
  console.log("PASSENGER ===>", passenger);
  // useEffect(())
  
  return (
    <div className="h-[95vh] w-[95%] max-w-[40rem] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white shadow-md rounded-md">
      <div className="absolute top-2 left-[50%] translate-x-[-50%] flex flex-row space-x-2 items-center h-[8%]">
        <img
          src="https://cdn-icons-png.flaticon.com/128/2570/2570687.png"
          alt="booking_icon"
          className="w-8"
        />
        <h2 className="text-xl text-green-700 font-semibold tracking-wider">
          Booking Details
        </h2>
      </div>

      <div className="absolute top-[15%] w-[90%] ml-[5%] max-h-[75%] flex flex-col space-y-8 overflow-hidden hover:overflow-y-auto scrollbar-thin scrollbar-thumb-[#e6fff5] scrollbar-track-transparent pb-8 px-2">
        <div className="flex flex-row justify-center space-x-2 w-full">
          <div className="w-[30%] h-full flex flex-col space-y-2 items-end text-xs uppercase text-white tracking-wide">
            <p className="px-3 py-2 bg-green-800 rounded-l-md w-full">Name</p>
            <p className="px-3 py-2 bg-green-800 rounded-l-md w-full">
              Date of Birth:
            </p>
            <p className="px-3 py-2 bg-green-800 rounded-l-md w-full">Sex</p>
            <p className="px-3 py-2 bg-green-800 rounded-l-md w-full">
              Nationality
            </p>
            <p className="px-3 py-2 bg-green-800 rounded-l-md w-full">
              Pancard
            </p>
            <p className="px-3 py-2 bg-green-800 rounded-l-md w-full">
              Phone no
            </p>
            <p className="px-3 py-2 bg-green-800 rounded-l-md w-full">Email</p>
            <p className="px-3 py-2 bg-green-800 rounded-l-md w-full">
              Departure
            </p>
            <p className="px-3 py-2 bg-green-800 rounded-l-md w-full">
              Arrival
            </p>
            <p className="px-3 py-2 bg-green-800 rounded-l-md w-full">Class</p>
            <p className="px-3 py-2 bg-green-800 rounded-l-md w-full">Date</p>
          </div>

          <div className="w-[60%] h-full flex flex-col space-y-2 items-start text-xs text-white">
            <p className="px-3 py-2 bg-green-600 rounded-r-md w-full">
              Sagar Das
            </p>
            <p className="px-3 py-2 bg-green-600 rounded-r-md w-full">
              16-09-1999
            </p>
            <p className="px-3 py-2 bg-green-600 rounded-r-md w-full">Male</p>
            <p className="px-3 py-2 bg-green-600 rounded-r-md w-full">Indian</p>
            <p className="px-3 py-2 bg-green-600 rounded-r-md w-full">
              ABCD12345F
            </p>
            <p className="px-3 py-2 bg-green-600 rounded-r-md w-full">
              8777318537
            </p>
            <p className="px-3 py-2 bg-green-600 rounded-r-md w-full">
              sagarmikeylevi@gmail.com
            </p>
            <p className="px-3 py-2 bg-green-600 rounded-r-md w-full">Kochi</p>
            <p className="px-3 py-2 bg-green-600 rounded-r-md w-full">Mumbai</p>
            <p className="px-3 py-2 bg-green-600 rounded-r-md w-full">
              Premium-Economy
            </p>
            <p className="px-3 py-2 bg-green-600 rounded-r-md w-full">
              Friday, 20th Nov, 2023
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center space-x-2 w-full">
          <div className="w-[30%] h-full flex flex-col space-y-2 items-end text-xs uppercase text-white tracking-wide">
            <p className="px-3 py-2 bg-black rounded-l-md w-full">
              Flight Price
            </p>
            <p className="px-3 py-2 bg-black rounded-l-md w-full">GST (18%)</p>
            <p className="px-3 py-2 bg-black rounded-l-md w-full">
              Total Amount
            </p>
          </div>

          <div className="w-[60%] h-full flex flex-col space-y-2 items-start text-xs text-white">
            {/* Replace the placeholder values with your actual flight price, GST, and total amount */}
            <p className="px-3 py-2 bg-yellow-500 rounded-r-md w-full">
              &#8377; 5000
            </p>
            <p className="px-3 py-2 bg-yellow-500 rounded-r-md w-full">
              &#8377; 900
            </p>
            <p className="px-3 py-2 bg-yellow-500 rounded-r-md w-full">
              &#8377; 5900
            </p>
          </div>
        </div>

        {/* here terms and conditions */}
        <div className="w-full h-[12%] flex items-center justify-center">
          <input type="checkbox" id="agreeCheckbox" className="mr-2" />
          <label htmlFor="agreeCheckbox" className="text-sm text-gray-700">
            I agree to the{" "}
            <span className="text-green-500 cursor-pointer underline">
              Terms and Conditions
            </span>
          </label>
        </div>
      </div>

      <div className="absolute top-[88%] w-full h-[12%] bg-[#e6ffe6] shadow-lg flex flex-row space-x-4 justify-end items-center px-4">
        <Link to="" className="px-4 py-2 bg-green-500 text-white rounded-md">
          Conform
        </Link>

        <Link to="" className="px-4 py-2 bg-black text-white rounded-md">
          Cancel
        </Link>
      </div>
    </div>
  );
};

export default ShowPassenger;
