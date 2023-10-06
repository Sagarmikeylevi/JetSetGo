import { Link } from "react-router-dom";
import heroIcon from "../assets/hero_icon.png";
import { useSelector } from "react-redux";
import { getUser, getUserName } from "../utils/auth";

const Home = () => {
  const userName = getUserName();

  console.log(userName);
  return (
    <div className="h-[95vh] w-[95vw] bg-white rounded-md absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-xl">
      {/* navBar */}
      <div className="absolute h-[15%] top-0 left-[50%] translate-x-[-50%] w-[95%] flex flex-row justify-between items-center md:w-[80%] lg:[70%]">
        {/* logo */}
        <div className="flex flex-row items-center px-2 py-4">
          <img
            src="https://cdn-icons-png.flaticon.com/128/5333/5333722.png"
            alt="logo_img"
            className="h-[1.3rem] w-[1.3rem] mr-[5px] md:h-[1.5rem] md:w-[1.5rem] lg:h-[2rem] lg:w-[2rem]"
          />
          <h1 className="text-lg font-semibold text-green-500 md:text-xl lg:text-2xl">
            JetSetGo
          </h1>
        </div>
        {/* logo end */}

        {/* menu */}
        <div className="flex flex-row w-[50%] py-4 items-center justify-evenly">
          <p className="px-4 py-2 bg-gray-200 text-green-950 rounded-md text-sm cursor-pointer font-semibold tracking-wide hover:bg-green-600 hover:text-white hover:shadow-xl  transition-all duration-200 md:text-base lg:px-6 lg:text-lg">
            Flights
          </p>
          <p className="px-4 py-2 bg-gray-200 text-green-950 rounded-md text-sm cursor-pointer font-semibold tracking-wide hover:bg-green-600 hover:text-white hover:shadow-xl transition-all duration-200 md:text-base lg:px-6 lg:text-lg">
            Hotels
          </p>
        </div>
        {/* menu end */}

        {/* login */}

        {userName === null && (
          <Link to="/login" className="py-4 mr-2">
            <p className="px-6 py-2 bg-black text-white rounded-md  hover:bg-green-500  transition-all duration-200 text-sm md:text-base lg:px-6 lg:text-lg cursor-pointer">
              Login
            </p>
          </Link>
        )}

        {userName !== null && (
          <div className="py-4 mr-2">
            <p className="px-6 py-2 bg-green-500 text-white rounded-md  hover:bg-black  transition-all duration-200 text-sm md:text-base lg:px-6 lg:text-lg cursor-pointer">
              {userName}
            </p>
          </div>
        )}

        {/* login end */}
      </div>
      {/* navBar end */}

      {/* body */}
      <div className="mt-2 w-[90%] h-[75%] absolute top-[20%] md:top-[12%] left-[50%] translate-x-[-50%] md:flex md:flex-row lg:w-[80%]">
        <div className="w-[100%] h-[100%] flex flex-col justify-center items-center  space-y-[2rem] md:w-[60%]">
          <div className="px-4 flex flex-col">
            <p className="text-red-500 text-lg font-semibold mb-4 lg:text-xl">
              Beyond Boundaries, Beyond Expectations
            </p>

            <h1 className="text-[#003300] text-[3rem] font-extrabold uppercase leading-[3.5rem] lg:text-[3.5remrem]lg:leading-[4rem]">
              Enjoy your travel the best way
            </h1>
            <p className="mt-4 text-[#000000] tracking-wide lg:text-lg">
              Where travel dreams take flight. Your gateway to seamless
              adventures awaits, making every trip unforgettable.
            </p>
          </div>

          <div className="md:absolute left-6 bottom-[-1rem] lg:bottom-0">
            <p className="py-2 px-4 bg-green-600 text-white rounded-md hover:bg-black transition-all duration-200 cursor-pointer lg:px-6">
              Book Now
            </p>
          </div>
        </div>

        <div className="hidden w-[40%] h-[100%] md:flex items-center justify-center mt-6 relative">
          <img src={heroIcon} alt="img_1" className="h-[22rem] w-[22rem]" />

          <img
            src="https://cdn-icons-png.flaticon.com/128/1350/1350222.png"
            alt="plane_1"
            className="h-[2rem] w-[2rem] absolute left-[10%] top-[50%]"
          />

          <img
            src="https://cdn-icons-png.flaticon.com/128/1350/1350222.png"
            alt="plane_2"
            className="h-[2rem] w-[2rem] absolute left-[80%] top-[20%]"
          />
        </div>
      </div>
      {/* body end */}
    </div>
  );
};

export default Home;
