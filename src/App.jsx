import React, { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const LandingPage = React.lazy(() => import("./pages/LandingPage"));
const LoginPage = React.lazy(() => import("./pages/LoginPage"));
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

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <RootLayout />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LandingPage />
          </Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LoginPage />
          </Suspense>
        ),
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
              <Suspense fallback={<div>Loading...</div>}>
                <FlightPage />
              </Suspense>
            ),
          },
          {
            path: "flight-results",
            element: (
              <Suspense fallback={<div>Loading...</div>}>
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
              <Suspense fallback={<div>Loading...</div>}>
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
                  <Suspense fallback={<div>Loading...</div>}>
                    <OnBoardListPage />,
                  </Suspense>
                ),
                loader: checkAuthLoader,
              },
              {
                path: "passengers",
                element: (
                  <Suspense fallback={<div>Loading...</div>}>
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
              <Suspense fallback={<div>Loading...</div>}>
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
                  <Suspense fallback={<div>Loading...</div>}>
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
                  <Suspense fallback={<div>Loading...</div>}>
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
      <Suspense fallback={<div>Loading...</div>}>
        <UnAuthPage />
      </Suspense>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
