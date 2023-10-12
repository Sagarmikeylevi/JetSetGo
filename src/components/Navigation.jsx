import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/user-slice";

const Navigation = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  let userName;
  if (user !== null) {
    userName = user.name;
  }

  // console.log(user);

  const location = useLocation();

  const logoutHandler = () => {
    dispatch(logout());
  };
  const renderNavbar = () => {
    if (location.pathname === "/login" || location.pathname === "/register") {
      return null;
    } else {
      return (
        <div className="absolute h-[15%] top-2 left-[50%] translate-x-[-50%] w-[95%] flex flex-row justify-between items-center md:w-[80%] lg:[70%] z-10">
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

          {user === null && (
            <Link to="/login" className="py-4 mr-2">
              <p className="px-6 py-2 bg-black text-white rounded-md  hover:bg-green-500  transition-all duration-200 text-sm md:text-base lg:px-6 lg:text-lg cursor-pointer">
                Login
              </p>
            </Link>
          )}

          {user !== null && (
            <div className="py-4 mr-2" onClick={logoutHandler}>
              <p className="px-6 py-2 bg-green-500 text-white rounded-md  hover:bg-black  transition-all duration-200 text-sm md:text-base lg:px-6 lg:text-lg cursor-pointer">
                {userName}
              </p>
            </div>
          )}

          {/* login end */}
        </div>
      );
    }
  };

  return renderNavbar();
};

export default Navigation;