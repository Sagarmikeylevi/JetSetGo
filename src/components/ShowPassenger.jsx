import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Loading from "./UI/Loading";
import {
  checkOut,
  conformPassengerById,
  deletePassengerById,
} from "../store/passenger-action";

const ShowPassenger = () => {
  const bookingDetails = useSelector(
    (state) => state.passenger.passengerDetails
  );

  const totalAmmount = Number(
    bookingDetails?.price + bookingDetails?.price * 0.18
  );
  const passId = bookingDetails?._id;
  const [termsAndConditions, setTermsAndConditions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cancelHandler = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      dispatch(deletePassengerById(passId, token));
      navigate("/flights");
    }, 2000);
  };

  const conformHandler = () => {
    const passengerData = {
      name: bookingDetails.name,
      email: bookingDetails.email,
      phNo: bookingDetails.phoneNo,
    };

    dispatch(checkOut(passengerData, totalAmmount));
    dispatch(conformPassengerById(passId, token));
  };

  if (isLoading) {
    return <Loading message="Deleting...." />;
  }

  if (!bookingDetails) {
    return <Loading message="Fetching the passenger..." />;
  }

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
            <p className="px-3 py-2 bg-green-600 rounded-r-md w-full capitalize">
              {bookingDetails.name}
            </p>
            <p className="px-3 py-2 bg-green-600 rounded-r-md w-full">
              {bookingDetails.dob}
            </p>
            <p className="px-3 py-2 bg-green-600 rounded-r-md w-full capitalize">
              {bookingDetails.sex}
            </p>
            <p className="px-3 py-2 bg-green-600 rounded-r-md w-full capitalize">
              {bookingDetails.nationality}
            </p>
            <p className="px-3 py-2 bg-green-600 rounded-r-md w-full">
              {bookingDetails.panCard}
            </p>
            <p className="px-3 py-2 bg-green-600 rounded-r-md w-full">
              {bookingDetails.phoneNo}
            </p>
            <p className="px-3 py-2 bg-green-600 rounded-r-md w-full">
              {bookingDetails.email}
            </p>
            <p className="px-3 py-2 bg-green-600 rounded-r-md w-full capitalize">
              {bookingDetails.departure}
            </p>
            <p className="px-3 py-2 bg-green-600 rounded-r-md w-full capitalize">
              {bookingDetails.arrival}
            </p>
            <p className="px-3 py-2 bg-green-600 rounded-r-md w-full capitalize">
              {bookingDetails.class}
            </p>
            <p className="px-3 py-2 bg-green-600 rounded-r-md w-full">
              {bookingDetails.date}
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
              &#8377; {bookingDetails.price}
            </p>
            <p className="px-3 py-2 bg-yellow-500 rounded-r-md w-full">
              &#8377; {bookingDetails.price * 0.18}
            </p>
            <p className="px-3 py-2 bg-yellow-500 rounded-r-md w-full">
              &#8377; {totalAmmount}
            </p>
          </div>
        </div>

        {/* here terms and conditions */}
        {bookingDetails.status === "Not Confirmed" && (
          <div className="w-full h-[12%] flex items-center justify-center">
            <input
              type="checkbox"
              id="agreeCheckbox"
              className="mr-2"
              onClick={() => setTermsAndConditions((prev) => !prev)}
            />
            <label htmlFor="agreeCheckbox" className="text-sm text-gray-700">
              I agree to the{" "}
              <span className="text-green-500 cursor-pointer underline">
                Terms and Conditions
              </span>
            </label>
          </div>
        )}
      </div>

      <div className="absolute top-[88%] w-full h-[12%] bg-[#e6ffe6] shadow-lg flex flex-row space-x-4 justify-end items-center px-4 ">
        {bookingDetails.status === "Not Confirmed" && (
          <button
            className={`px-4 py-2 bg-yellow-500 text-white rounded-md ${
              termsAndConditions
                ? "cursor-pointer hover:bg-black"
                : "pointer-events-none"
            }`}
            onClick={conformHandler}
          >
            {!termsAndConditions
              ? "Please check T&C before clicking"
              : "Conform"}
          </button>
        )}

        {bookingDetails.status === "Confirmed" && (
          <Link
            to="/flights"
            className="px-4 py-2 bg-yellow-500 text-white rounded-md 
                cursor-pointer hover:bg-black"
          >
            Go Back
          </Link>
        )}

        <button
          className="px-4 py-2 bg-red-400 text-white rounded-md hover:bg-black"
          onClick={cancelHandler}
        >
          {bookingDetails.status === "Not Confirmed" ? "Cancel" : "Delete"}
        </button>
      </div>
    </div>
  );
};

export default ShowPassenger;
