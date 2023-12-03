import { Link } from "react-router-dom";

const UnAuth = () => {
  return (
    <div className="h-[30vh] w-[90vw] max-w-[25rem] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-md shadow-lg  ">
      <div className="h-[60%] w-full absolute top-6 left-[50%] translate-x-[-50%] text-center space-y-2">
        <h2 className="text-red-500 text-2xl font-semibold">UnAuthorized</h2>
        <p className="text-black font-thin">Please log in to go forward</p>
      </div>

      <Link
        to="/"
        className="px-4 py-2 border-none outline-none rounded-md bg-green-500 text-white absolute left-[50%] translate-x-[-50%] bottom-2"
      >
        Home
      </Link>
    </div>
  );
};

export default UnAuth;
