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
        element: <FlightPage />,
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
