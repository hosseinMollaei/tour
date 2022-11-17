import React, { useState } from "react";

const Tour = ({ name, image, id, info, price, filtered }) => {
  const [readmore, setreadmore] = useState(false);

  return (
    <div>
      <div className="w-full mx-3 h-full md:w-[550px]  lg:w-[700px] rounded-[10px]  mt-5 bg-slate-400">
        <img
          className="rounded-t-[10px] object-cover w-full h-[200px] md:h-[400px]"
          src={image}
          alt={id}
        />
        <div className=" mx-3 flex justify-between items-center">
          <h2 className="font-bold py-2 text-2xl">{name}</h2>
          <h2 className="font-bold py-2 text-orange-700 pr-4 text-2xl">
            {price} $
          </h2>
        </div>
        <p className="mx-2 text-lg">
          {readmore ? info : `${info.substring(0, 200)}...`}
          <button
            className="text-orange-700  px-1 font-bold"
            onClick={() => setreadmore(!readmore)}
          >
            {readmore ? "readless" : "readmore"}
          </button>
        </p>
        <div className="flex justify-center">
          <button
            className=" bg-red-600 my-4 rounded-3xl py-1 px-2 hover:scale-105 lg:text-[20px] "
            onClick={() => filtered(id)}
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tour;
