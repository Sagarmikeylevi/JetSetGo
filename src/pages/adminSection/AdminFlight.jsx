import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchFlights } from "../../store/flight-action";

const DashboardFlight = React.lazy(() =>
  import("../../components/dashboard/DashboardFlight")
);

const AdminFlight = () => {
  const dispatch = useDispatch();
  const showNotification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchFlights());
  }, [dispatch]);

  if (showNotification?.status === "error") {
    <Error message={showNotification.message} />;
  }

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
