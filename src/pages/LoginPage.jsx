import axios from "axios";
import React, { Suspense } from "react";

const Login = React.lazy(() => import("../components/Login"));

const LoginPage = () => {
  // console.log("<LoginPage /> rendered");
  return (
    <Suspense
      fallback={
        <p className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-lg font-bold text-green-900">
          Loading....
        </p>
      }
    >
      <Login />
    </Suspense>
  );
};

export default LoginPage;

// This is for taking login data and make a post request
export const action = async ({ request }) => {
  try {
    const data = await request.formData();

    // user data from the login form
    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    // post request
    const res = await axios.post(
      "https://jetsetgoapi123.onrender.com/api/user/login",
      userData
    );

    return { ok: true, data: res.data.data.token };
  } catch (error) {
    // console.log(error.response);
    return { ok: false, data: error.response.data };
  }
};
