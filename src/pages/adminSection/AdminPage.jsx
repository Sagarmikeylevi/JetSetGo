import React, { Suspense } from "react";

const Dashboard = React.lazy(() =>
  import("../../components/dashboard/Dashboard")
);

const AdminPage = () => {
  return (
    <Suspense
      fallback={
        <p className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-lg font-bold text-green-900">
          Loading....
        </p>
      }
    >
      <Dashboard />
    </Suspense>
  );
};

export default AdminPage;
