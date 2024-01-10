import React, { Suspense, useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const LandingPage = React.lazy(() => import("./pages/LandingPage"));
import LoginPage, { action as loginAction } from "./pages/LoginPage";
import RegisterPage, { action as registerAction } from "./pages/RegisterPage";
const RootLayout = React.lazy(() => import("./pages/RootLayout"));
const FlightPage = React.lazy(() => import("./pages/FlightPage"));
const AdminPage = React.lazy(() => import("./pages/adminSection/AdminPage"));
const AdminFlight = React.lazy(() =>
  import("./pages/adminSection/AdminFlight")
);
import AddFlightFormPage, {
  action as addFlightAction,
} from "./pages/adminSection/AddFlightFormPage";
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));
const FlightDetailsPage = React.lazy(() =>
  import("./pages/adminSection/FlightDetailsPage")
);
const SearchedFlightsPage = React.lazy(() =>
  import("./pages/SearchedFlightsPage")
);
import PassengerDetailsPage, {
  action as passengerAction,
} from "./pages/PassengerDetailsPage";
const ShowPassengerPage = React.lazy(() => import("./pages/ShowPassengerPage"));
const OnBoardListPage = React.lazy(() => import("./pages/OnBoardListPage"));
const OnBoardPassengerPage = React.lazy(() =>
  import("./pages/OnBoardPassengerPage")
);
const UnAuthPage = React.lazy(() => import("./pages/UnAuthPage"));
import { checkAuthLoader } from "./utils/auth";
import HotelsPage from "./pages/HotelsPage";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUser } from "./store/user-slice";
import { setFlights } from "./store/flight-slice";
import Error from "./components/UI/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense
        fallback={
          <p className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-lg font-bold text-green-900">
            Loading....
          </p>
        }
      >
        <RootLayout />
      </Suspense>
    ),
    errorElement: (
      <Suspense
        fallback={
          <p className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-lg font-bold text-green-900">
            Loading....
          </p>
        }
      >
        <ErrorPage />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense
            fallback={
              <p className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-lg font-bold text-green-900">
                Loading....
              </p>
            }
          >
            <LandingPage />
          </Suspense>
        ),
      },
      {
        path: "login",
        element: <LoginPage />,
        action: loginAction,
      },
      {
        path: "register",
        element: <RegisterPage />,
        action: registerAction,
      },
      {
        path: "hotels",
        element: <HotelsPage />,
      },
      {
        path: "flights",
        children: [
          {
            index: true,
            element: (
              <Suspense
                fallback={
                  <p className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-lg font-bold text-green-900">
                    Loading....
                  </p>
                }
              >
                <FlightPage />
              </Suspense>
            ),
          },
          {
            path: "flight-results",
            element: (
              <Suspense
                fallback={
                  <p className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-lg font-bold text-green-900">
                    Loading....
                  </p>
                }
              >
                <SearchedFlightsPage />
              </Suspense>
            ),
            loader: checkAuthLoader,
          },
          {
            path: "passenger-details",
            element: <PassengerDetailsPage />,
            action: passengerAction,
            loader: checkAuthLoader,
          },
          {
            path: "show-passenger",
            element: (
              <Suspense
                fallback={
                  <p className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-lg font-bold text-green-900">
                    Loading....
                  </p>
                }
              >
                <ShowPassengerPage />
              </Suspense>
            ),
            loader: checkAuthLoader,
          },
          {
            path: "on-board-list",
            children: [
              {
                index: true,
                element: (
                  <Suspense
                    fallback={
                      <p className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-lg font-bold text-green-900">
                        Loading....
                      </p>
                    }
                  >
                    <OnBoardListPage />,
                  </Suspense>
                ),
                loader: checkAuthLoader,
              },
              {
                path: "passengers",
                element: (
                  <Suspense
                    fallback={
                      <p className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-lg font-bold text-green-900">
                        Loading....
                      </p>
                    }
                  >
                    <OnBoardPassengerPage />,
                  </Suspense>
                ),
                loader: checkAuthLoader,
              },
            ],
          },
        ],
      },
      {
        path: "dashboard",
        children: [
          {
            index: true,
            element: (
              <Suspense
                fallback={
                  <p className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-lg font-bold text-green-900">
                    Loading....
                  </p>
                }
              >
                <AdminPage />
              </Suspense>
            ),
            loader: checkAuthLoader,
          },
          {
            path: "flight",

            children: [
              {
                index: true,
                element: (
                  <Suspense
                    fallback={
                      <p className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-lg font-bold text-green-900">
                        Loading....
                      </p>
                    }
                  >
                    <AdminFlight />
                  </Suspense>
                ),
                loader: checkAuthLoader,
              },
              {
                path: "addFlight",
                element: <AddFlightFormPage />,
                action: addFlightAction,
                loader: checkAuthLoader,
              },
              {
                path: ":flightID",
                element: (
                  <Suspense
                    fallback={
                      <p className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-lg font-bold text-green-900">
                        Loading....
                      </p>
                    }
                  >
                    <FlightDetailsPage />
                  </Suspense>
                ),
                loader: checkAuthLoader,
              },
              {
                path: "update/:id",
                element: <AddFlightFormPage />,
                action: addFlightAction,
                loader: checkAuthLoader,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/unAuth",
    element: (
      <Suspense
        fallback={
          <p className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-lg font-bold text-green-900">
            Loading....
          </p>
        }
      >
        <UnAuthPage />
      </Suspense>
    ),
  },
]);

function App() {
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const [isError, setIsError] = useState({
    error: false,
    message: "",
  });

  // Retching user and storing the data in redux store
  const fetchUser = async (token) => {
    try {
      const res = await axios.get(
        "https://jetsetgoapi123.onrender.com/api/user/getUser",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const user = res.data.userDetails;
      dispatch(setUser({ user }));
    } catch (error) {
      console.log(error);
      setIsError({
        error: true,
        message: error.response?.error || "Some thing went wrong",
      });
    }
  };

  // Fetching the flights and storing the data in the redux store
  const fetchFlights = async () => {
    try {
      const res = await axios.get(
        "https://jetsetgoapi123.onrender.com/api/flight/getFlights",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const flights = res.data.flights;
      dispatch(setFlights({ flights }));
    } catch (error) {
      console.log(error);
      setIsError({
        error: true,
        message: error.response?.error || "Some thing went wrong",
      });
    }
  };

  useEffect(() => {
    // fetching user
    if (token) {
      fetchUser(token);
    }

    // fetching flights
    fetchFlights();
  }, [token]);

  if (isError.error) {
    <Error message={isError.message} />;
  }

  return <RouterProvider router={router} />;
}

export default App;
