import React, { Suspense } from "react";
import { useLocation } from "react-router-dom";
const Payment = React.lazy(() => import("../components/Payment"));

const PaymentPage = () => {
  const location = useLocation();
  const queryParamms = new URLSearchParams(location.search);
  const paymentId = queryParamms.get("paymentId");
  return (
    <Suspense
      fallback={
        <p className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-lg font-bold text-green-900">
          Loading....
        </p>
      }
    >
      <Payment paymentId={paymentId} />
    </Suspense>
  );
};

export default PaymentPage;
