import { RouterProvider, createBrowserRouter } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import LoginPage, { action as loginAction } from "./pages/LoginPage";
import RegisterPage, { action as registerAction } from "./pages/RegisterPage";
import RootLayout, { Loader } from "./pages/RootLayout";
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: Loader,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
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
        path: "flights",
        children: [
          {
            index: true,
            element: <FlightPage />,
          },
          {
            path: "flight-results",
            element: <SearchedFlightsPage />,
          },
          {
            path: "passenger-details",
            element: <PassengerDetailsPage />,
            action: passengerAction,
          },
          {
            path: "show-passenger",
            element: <ShowPassengerPage />,
          },
          {
            path: "on-board-list",
            children: [
              {
                index: true,
                element: <OnBoardListPage />,
              },
              {
                path: "conform",
                element: <OnBoardPassengerPage />,
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
          },
          {
            path: "flight",

            children: [
              {
                index: true,
                element: <AdminFlight />,
              },
              {
                path: "addFlight",
                element: <AddFlightFormPage />,
                action: addFlightAction,
              },
              {
                path: ":flightID",
                element: <FlightDetailsPage />,
              },
              {
                path: "update/:id",
                element: <AddFlightFormPage />,
                action: addFlightAction,
              },
            ],
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
