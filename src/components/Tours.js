import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, filtered }) => {
  return (
    <div className="flex flex-col justify-between item-center">
      <div className="flex justify-center">
        <h1 className="text-orange-700 font-bold text-3xl">choose our tours</h1>
      </div>

      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} filtered={filtered} />;
      })}
    </div>
  );
};

export default Tours;
