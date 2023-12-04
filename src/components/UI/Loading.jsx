import React from "react";

const Loading = ({ message }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full  border-solid h-12 w-12">
        <img
          src="https://cdn-icons-png.flaticon.com/128/189/189792.png"
          alt="loading_icon"
        />
      </div>
      <div className="ml-4 text-green-700 font-thin tracking-wide text-lg ">{message}</div>
    </div>
  );
};

export default Loading;
