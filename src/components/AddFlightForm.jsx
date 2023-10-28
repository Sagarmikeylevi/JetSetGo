import { useState } from "react";
import { Form, Link } from "react-router-dom";

const InputField = ({ label, id, name, placeholder, value, onChange }) => {
  return (
    <div className="w-[47.5%] space-y-1">
      <label htmlFor={id} className="text-sm font-bold">
        {label}
      </label>
      <input
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full h-[3rem] border-[1px] rounded-md px-2 text-sm outline-none font-semibold text-gray-600 placeholder:opacity-80 ${
          value.trim().length === 0 ? "border-red-400" : "border-green-400"
        }`}
      />
    </div>
  );
};

const SelectField = ({ label, id, name, options, value, onChange }) => {
  return (
    <div className="w-[47.5%] space-y-1">
      <label htmlFor={id} className="text-sm font-bold">
        {label}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full h-[3rem] border-[1px] border-green-400 rounded-md px-2 text-sm outline-none font-semibold text-gray-600 placeholder:opacity-80"
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

const NumberInputField = ({
  label,
  id,
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="w-[30%] space-y-1">
      <label htmlFor={id} className="text-sm font-bold">
        {label}
      </label>
      <input
        type="number"
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full h-[3rem] border-[1px] rounded-md px-2 text-sm outline-none font-semibold text-gray-600 placeholder:opacity-80 ${
          value.trim().length === 0 ? "border-red-400" : "border-green-400"
        }`}
      />
    </div>
  );
};

const AddFlightForm = () => {
  const [departureDest, setDepartureDest] = useState("");
  const [arrivalDest, setArrivalDest] = useState("");
  const [dates, setDates] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [economy, setEconomy] = useState("");
  const [premiumEconomy, setPremiumEconomy] = useState("");
  const [business, setBusiness] = useState("");
  const airlines = ["Air India", "AirAsia", "IndiGo", "SpiceJet", "Vistara"];

  return (
    <Form
      method="POST"
      className="h-[90%] w-[90%] px-4 py-8 sm:px-8 max-w-[40rem] bg-white rounded-md absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-xl space-y-4"
    >
      {/* section-1 */}
      <div className="flex flex-row w-full space-x-[5%] h-[5rem]">
        <InputField
          label="Departure Destination"
          id="departure-destination"
          name="departure-destination"
          placeholder="City-Country"
          value={departureDest}
          onChange={(e) => setDepartureDest(e.target.value)}
          error={departureDest.trim().length === 0}
        />
        <InputField
          label="Arrival Destination"
          id="arrival-destination"
          name="arrival-destination"
          placeholder="City-Country"
          value={arrivalDest}
          onChange={(e) => setArrivalDest(e.target.value)}
          error={arrivalDest.trim().length === 0}
        />
      </div>
      {/* section-1 end */}
      {/* section-2 */}
      <div className="flex flex-row w-full space-x-[5%] h-[5rem]">
        <InputField
          label="Dates of Departure"
          id="dates"
          name="dates"
          placeholder="date1 - date2 - ----"
          value={dates}
          onChange={(e) => setDates(e.target.value)}
          error={dates.trim().length === 0}
        />
        <InputField
          label="Departure Time"
          id="departure-time"
          name="departure-time"
          placeholder="6:00 to 22:00"
          value={departureTime}
          onChange={(e) => setDepartureTime(e.target.value)}
          error={departureTime.trim().length === 0}
        />
      </div>
      {/* section-2 end */}
      {/* section-3 */}
      <div className="flex flex-row w-full space-x-[5%] h-[5rem]">
        <InputField
          label="Arrival Time"
          id="arrival-time"
          name="arrival-time"
          placeholder="7:00 to 24:00"
          value={arrivalTime}
          onChange={(e) => setArrivalTime(e.target.value)}
          error={arrivalTime.trim().length === 0}
        />
        <SelectField
          label="Airlines"
          id="airlines"
          name="airlines"
          options={airlines}
          onChange={() => {}}
        />
      </div>
      {/* section-3 end */}
      {/* section-4 */}
      <div className="flex flex-row w-full space-x-[3.33%] h-[6rem]">
        <NumberInputField
          label="Economy"
          id="economy"
          name="economy"
          placeholder="0 to 15"
          value={economy}
          onChange={(e) => setEconomy(e.target.value)}
          error={economy.trim().length === 0}
        />
        <NumberInputField
          label="P-Economy"
          id="premium-economy"
          name="premium-economy"
          placeholder="0 to 10"
          value={premiumEconomy}
          onChange={(e) => setPremiumEconomy(e.target.value)}
          error={premiumEconomy.trim().length === 0}
        />
        <NumberInputField
          label="Business"
          id="business"
          name="business"
          placeholder="0 to 5"
          value={business}
          onChange={(e) => setBusiness(e.target.value)}
          error={business.trim().length === 0}
        />
      </div>
      {/* section-4 end */}

      {/* section-5 */}
      <div className="w-full flex flex-row space-x-4 justify-center">
        <button
          type="submit"
          className="px-6 bg-green-500 rounded-md text-white cursor-pointer"
        >
          Submit
        </button>
        <Link
          to="/dashboard/flight"
          className="px-6 py-2 bg-black rounded-md text-white cursor-pointer"
        >
          Cancel
        </Link>
      </div>
      {/* section-5 end */}
    </Form>
  );
};

export default AddFlightForm;
