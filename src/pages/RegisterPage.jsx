import React, { Suspense } from "react";
import axios from "axios";
import { redirect } from "react-router-dom";
import config from "../config";
const Register = React.lazy(() => import("../components/Register"));

const RegisterPage = () => {
  // console.log("<RegisterPage /> rendered");
  return (
    <Suspense
      fallback={
        <p className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-lg font-bold text-green-900">
          Loading....
        </p>
      }
    >
      <Register />
    </Suspense>
  );
};

export default RegisterPage;

// This will get the user data and then make a post request
export const action = async ({ request }) => {
  try {
    const data = await request.formData();
    const apiUrl = config.development.apiUrl;

    // user data
    const userData = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
    };

    // Post request
    await axios.post(`${apiUrl}/api/user/register`, userData);

    return redirect("/login");
  } catch (error) {
    return error.response;
  }
};
