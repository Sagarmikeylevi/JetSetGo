import React, { Suspense } from "react";
import axios from "axios";
import { redirect } from "react-router-dom";
const Register = React.lazy(() => import("../components/Register"));

const RegisterPage = () => {
  console.log("<RegisterPage /> rendered");
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

export const action = async ({ request }) => {
  try {
    const data = await request.formData();

    const userData = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
    };

    await axios.post(
      "https://jetsetgoapi123.onrender.com/api/user/register",
      userData
    );

    return redirect("/login");
  } catch (error) {
    return error.response;
  }
};
