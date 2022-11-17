import React from "react";
import { BiLoaderCircle } from "react-icons/bi";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <BiLoaderCircle className="text-[50px]" />
      <h1 className="text-[40px]">LOADING</h1>
    </div>
  );
};

export default Loading;
