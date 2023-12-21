import React, { Suspense } from "react";

const Flight = React.lazy(() => import("../components/Flight"));

const FlightPage = () => {
  console.log("<FlightPage /> rendered");
  return (
    <Suspense
      fallback={
        <p className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-lg font-bold text-green-900">
          Loading....
        </p>
      }
    >
      <Flight />
    </Suspense>
  );
};

export default FlightPage;
