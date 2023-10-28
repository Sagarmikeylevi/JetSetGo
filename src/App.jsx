import { RouterProvider, createBrowserRouter } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import LoginPage, { action as loginAction } from "./pages/LoginPage";
import RegisterPage, { action as registerAction } from "./pages/RegisterPage";
import RootLayout, { Loader } from "./pages/RootLayout";
import FlightPage from "./pages/FlightPage";
import AdminPage from "./pages/AdminPage";
import AdminFlight from "./pages/AdminFlight";
import AddFlightFormPage, {
  action as addFlightAction,
} from "./pages/AddFlightFormPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: Loader,
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
