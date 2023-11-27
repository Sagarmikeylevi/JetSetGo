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
    if (
      location.pathname === "/login" ||
      location.pathname === "/register" ||
      location.pathname === "/dashboard/flight/addFlight" ||
      location.pathname.startsWith("/dashboard/flight/update") ||
      location.pathname === "/flights/passenger-details" ||
      location.pathname === "/flights/show-passenger"
    ) {
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
            <Link
              to="/"
              className="text-lg font-semibold text-green-500 md:text-xl lg:text-2xl"
            >
              JetSetGo
            </Link>
          </div>
          {/* logo end */}

          {/* menu */}

          <div className="flex flex-row w-[50%] py-4 items-center justify-evenly">
            {!(
              location.pathname === "/dashboard" ||
              location.pathname.startsWith("/dashboard/flight")
            ) && (
              <>
                <Link
                  to="/flights"
                  className={`px-4 py-2 ${
                    location.pathname === "/flights"
                      ? "hidden"
                      : "bg-gray-200 text-green-950hover:bg-green-600 hover:text-white hover:shadow-xl transition-all duration-200"
                  }  rounded-md text-sm  font-semibold tracking-wide cursor-pointer md:text-base lg:px-6 lg:text-lg`}
                >
                  Flights
                </Link>
                {location.pathname === "/flights" && (
                  <Link
                    to="/flights/on-board-list"
                    className="px-4 py-2 bg-gray-200 text-green-950 rounded-md text-sm cursor-pointer font-semibold tracking-wide hover:bg-green-600 hover:text-white hover:shadow-xl transition-all duration-200 md:text-base lg:px-6 lg:text-lg"
                  >
                    OnBoardList
                  </Link>
                )}
                <p className="px-4 py-2 bg-gray-200 text-green-950 rounded-md text-sm cursor-pointer font-semibold tracking-wide hover:bg-green-600 hover:text-white hover:shadow-xl transition-all duration-200 md:text-base lg:px-6 lg:text-lg">
                  Hotels
                </p>
              </>
            )}
            {user !== null && user.role === "admin" && (
              <>
                <Link
                  to="/dashboard"
                  className={`hidden sm:flex ml-4 px-4 py-2 ${
                    location.pathname === "/dashboard"
                      ? "bg-black shadow-xl"
                      : "bg-yellow-500 hover:bg-black  hover:shadow-xl ld tracking-wide  transition-all duration-200"
                  }  text-white rounded-md text-sm cursor-pointer font-semibo md:text-base lg:px-6 lg:text-lg`}
                >
                  DashBoard
                </Link>

                <Link to="/dashboard">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828765.png"
                    alt="dashboard_icon"
                    className="ml-4 h-8 w-8 cursor-pointer sm:hidden"
                  />
                </Link>
              </>
            )}
          </div>
          {/* menu end */}

          {/* login */}

          {user === null && (
            <Link to="/login" className="sm:py-4 mr-2">
              <img
                src="https://cdn-icons-png.flaticon.com/128/11823/11823852.png"
                alt="logout_icon"
                className="h-6 w-6 cursor-pointer sm:hidden"
              />
              <p className="hidden sm:flex px-6 py-2 bg-black text-white rounded-md  hover:bg-green-500  transition-all duration-200 text-sm md:text-base lg:px-6 lg:text-lg cursor-pointer">
                Login
              </p>
            </Link>
          )}

          {user !== null && (
            <div className="sm:py-4 mr-2" onClick={logoutHandler}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/1077/1077114.png"
                alt="user_icon"
                className="h-6 w-6 cursor-pointer sm:hidden"
              />
              <p className="hidden sm:flex px-6 py-2 bg-green-500 text-white rounded-md  hover:bg-black  transition-all duration-200 text-sm md:text-base lg:px-6 lg:text-lg cursor-pointer">
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
