import React, { useState } from "react";
import { Form, Link } from "react-router-dom";

const PassengerDetails = () => {
   const [fullName, setFullName] = useState("");
   const [dob, setDob] = useState("");
   const [nationality, setNationality] = useState("");
   const [panCard, setPanCard] = useState("");
   const [phone, setPhone] = useState("");
   const [email, setEmail] = useState("");

  return (
    <div className="h-[95vh] w-[90%] max-w-[30rem] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-md bg-white shadow-md">
      <div className="absolute top-[2%] translate-y-[-2%] w-full flex flex-row space-x-2 items-center justify-center h-[10%]">
        <img
          src="https://cdn-icons-png.flaticon.com/128/7051/7051390.png"
          alt="passenger"
          className="w-10"
        />
        <h2 className="mt-3 text-2xl font-thin text-green-800 uppercase">
          Passenger Details
        </h2>
      </div>

      <Form className="absolute top-[15%] w-[90%] h-[85%] ml-[5%]">
        {/* Full name */}
        <div className="w-full mb-4">
          <label
            htmlFor="fullName"
            className="text-lg font-thin text-green-900"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className={`w-full h-12 border-[1px] ${
              fullName.length === 0 ? "border-red-400" : "border-green-400"
            }  rounded-md px-4 outline-none text-green-950 font-thin`}
            placeholder="John Doe"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        {/* Full name end*/}
        {/* Date of birth and Gender */}
        <div className="mb-4 w-full flex flex-row space-x-4">
          <div className="w-[60%]">
            <label htmlFor="dob" className="text-lg font-thin text-green-900">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              className={`w-full h-12 border-[1px] ${
                dob.length === 0 ? "border-red-400" : "border-green-400"
              }  rounded-md px-4 outline-none text-green-950 font-thin`}
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div className="w-[35%]">
            <label
              htmlFor="gender"
              className="text-lg font-thin text-green-900"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              className="w-full h-12 border-[1px] border-green-400 rounded-md px-4 outline-none text-green-950 font-thin"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        {/* Date of birth and Gender end */}
        {/* Nationality and Pan Card */}
        <div className="mb-4 w-full flex flex-row space-x-4">
          <div className="w-[48%]">
            <label
              htmlFor="nationality"
              className="text-lg font-thin text-green-900"
            >
              Nationality
            </label>
            <input
              type="text"
              id="nationality"
              name="nationality"
              className={`w-full h-12 border-[1px] ${
                nationality.length === 0 ? "border-red-400" : "border-green-400"
              } rounded-md px-4 outline-none text-green-950 font-thin`}
              placeholder="Country"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
            />
          </div>
          <div className="w-[48%]">
            <label
              htmlFor="panCard"
              className="text-lg font-thin text-green-900"
            >
              Pan Card Number
            </label>
            <input
              type="text"
              id="panCard"
              name="panCard"
              className={`w-full h-12 border-[1px] ${
                panCard.length === 0 ? "border-red-400" : "border-green-400"
              } rounded-md px-4 outline-none text-green-950 font-thin`}
              placeholder="ABCDE1234F"
              value={panCard}
              onChange={(e) => setPanCard(e.target.value)}
            />
          </div>
        </div>
        {/* Nationality and Pan Card end*/}
        {/* Contact information */}
        <div className="mb-4 w-full flex flex-row space-x-4">
          <div className="w-[48%]">
            <label htmlFor="phone" className="text-lg font-thin text-green-900">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className={`w-full h-12 border-[1px] ${
                phone.length === 0 ? "border-red-400" : "border-green-400"
              } rounded-md px-4 outline-none text-green-950 font-thin`}
              placeholder="9876543210"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="w-[48%]">
            <label htmlFor="email" className="text-lg font-thin text-green-900">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`w-full h-12 border-[1px] ${
                email.length === 0 ? "border-red-400" : "border-green-400"
              } rounded-md px-4 outline-none text-green-950 font-thin`}
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        {/* Contact information end */}
        {/* submission */}
        <div className="mt-8 w-full flex flex-row justify-end space-x-4">
          <button
            type="submit"
            className="border-none outline-none px-6 py-2 bg-green-500 text-white rounded-md font-thin text-lg"
          >
            Submit
          </button>
          <Link
            to="/flights"
            className="border-none outline-none px-6 py-2 bg-black text-white rounded-md font-thin text-lg"
          >
            Cancel
          </Link>
        </div>
        {/* submission end */}
      </Form>
    </div>
  );
};

export default PassengerDetails;
