import React from "react";

const Itemless = ({ refresh }) => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="m-4 text-3xl">no items left</h1>
      <button
        onClick={refresh}
        className="bg-blue-800 rounded-2xl text-gray-200 p-3 hover:scale-105"
      >
        refresh
      </button>
    </div>
  );
};

export default Itemless;
