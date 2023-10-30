import { FaBomb } from "react-icons/fa";

const Error = ({message}) => {
  return (
    <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] h-[45%] w-[90%] max-w-[40rem] rounded-md bg-white shadow-xl">
      <div className="h-[30%] w-full bg-red-500 rounded-t-md flex justify-center items-center space-x-2">
        <FaBomb className="text-white text-[3rem]" />
        <p className="text-white text-[2.5rem] mt-2 uppercase">Error</p>
      </div>

      <div className="h-[50%] w-full flex items-center justify-center">
        <p className="px-8 text-xl font-thin tracking-wide text-center">
          {message}
        </p>
      </div>

      <button
        className="absolute bottom-4 left-[50%] translate-x-[-50%] px-6 py-2 bg-amber-500 text-white rounded-md cursor-pointer"
        onClick={() => window.history.back()}
      >Go Back</button>
    </div>
  );
};

export default Error;
