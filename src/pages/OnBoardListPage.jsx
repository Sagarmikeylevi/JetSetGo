import React, { Suspense } from "react";

const OnBoardList = React.lazy(() => import("../components/OnBoardList"));

const OnBoardListPage = () => {
  console.log("<OnBoardListPage /> rendered");
  return (
    <Suspense
      fallback={
        <p className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-lg font-bold text-green-900">
          Loading....
        </p>
      }
    >
      <OnBoardList />
    </Suspense>
  );
};

export default OnBoardListPage;
