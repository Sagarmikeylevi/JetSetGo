import React from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router

const Payment = ({ paymentId }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-white">
      <div className="bg-green-600 p-8 rounded shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Payment Successful</h2>
        <p className="text-lg mb-8">Your payment was successful!</p>
        <p className="text-gray-300">Payment ID: {paymentId}</p>

        <Link
          to="/"
          className="bg-white text-green-800 px-6 py-3 rounded-full inline-block mt-4 hover:bg-gray-300 hover:text-green-800 transition duration-300 ease-in-out"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Payment;
