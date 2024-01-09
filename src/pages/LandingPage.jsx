import React, { Suspense } from "react";
import { useSelector } from "react-redux";

const Home = React.lazy(() => import("../components/Home"));

const LandingPage = () => {
  return (
    <Suspense
      fallback={
        <p className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-lg font-bold text-green-900">
          Loading....
        </p>
      }
    >
      <Home />
    </Suspense>
  );
};

export default LandingPage;
