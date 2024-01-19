import axios from "axios";
import React, { Suspense } from "react";

const Login = React.lazy(() => import("../components/Login"));

const LoginPage = () => {
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
