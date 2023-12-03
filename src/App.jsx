import { RouterProvider, createBrowserRouter } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage, { action as registerAction } from "./pages/RegisterPage";
import RootLayout from "./pages/RootLayout";
import FlightPage from "./pages/FlightPage";
import AdminPage from "./pages/adminSection/AdminPage";
import AdminFlight from "./pages/adminSection/AdminFlight";
import AddFlightFormPage, {
  action as addFlightAction,
} from "./pages/adminSection/AddFlightFormPage";
import ErrorPage from "./pages/ErrorPage";
import FlightDetailsPage from "./pages/adminSection/FlightDetailsPage";
import SearchedFlightsPage from "./pages/SearchedFlightsPage";
import PassengerDetailsPage, {
  action as passengerAction,
} from "./pages/PassengerDetailsPage";
import ShowPassengerPage from "./pages/ShowPassengerPage";
import OnBoardListPage from "./pages/OnBoardListPage";
import OnBoardPassengerPage from "./pages/OnBoardPassengerPage";
import UnAuthPage from "./pages/UnAuthPage";
import { checkAuthLoader } from "./utils/auth";
import HotelsPage from "./pages/HotelsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
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
            element: <FlightPage />,
          },
          {
            path: "flight-results",
            element: <SearchedFlightsPage />,
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
            element: <ShowPassengerPage />,
            loader: checkAuthLoader,
          },
          {
            path: "on-board-list",
            children: [
              {
                index: true,
                element: <OnBoardListPage />,
                loader: checkAuthLoader,
              },
              {
                path: "passengers",
                element: <OnBoardPassengerPage />,
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
            element: <AdminPage />,
            loader: checkAuthLoader,
          },
          {
            path: "flight",

            children: [
              {
                index: true,
                element: <AdminFlight />,
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
                element: <FlightDetailsPage />,
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
    element: <UnAuthPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
