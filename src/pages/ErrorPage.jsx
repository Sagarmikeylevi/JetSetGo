import React, { Suspense } from "react";
const ShowError = React.lazy(() => import("../components/ShowError"));
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  let title = "An error occurred!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = error.data.message; // Updates the message if the error status is 500
  }

  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page."; // Updates the title and message if the error status is 404
  }
  return (
    <Suspense
      fallback={
        <p className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-lg font-bold text-green-900">
          Loading....
        </p>
      }
    >
      <ShowError title={title} message={message} />
    </Suspense>
  );
};

export default ErrorPage;
