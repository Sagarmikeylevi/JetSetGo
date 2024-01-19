import { useLocation } from "react-router-dom";
import Payment from "../components/Payment";

const PaymentPage = () => {
  const location = useLocation();
  const queryParamms = new URLSearchParams(location.search);
  const paymentId = queryParamms.get("paymentId");
  return <Payment paymentId={paymentId} />;
};

export default PaymentPage;
