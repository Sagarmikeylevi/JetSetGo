import React, { Suspense } from "react";

const DashboardFlight = React.lazy(() => import("../../components/dashboard/DashboardFlight"));

const AdminFlight = () => {
  return (
    <Suspense
      fallback={
        <p className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-lg font-bold text-green-900">
          Loading....
        </p>
      }
    >
      <DashboardFlight />
    </Suspense>
  ); 
};

export default AdminFlight;
