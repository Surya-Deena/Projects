"use client";
import React, { useEffect, useState } from "react";
const RatingComponent = () => {
  const starColor = "gold";
  const emptyStarColor = "gray";
  const [rating, setRating] = useState(0);

  useEffect(() => {
    // rating <200 ?
    const tym =
      rating < 210
        ? setInterval(() => {
            setRating(rating + 4);
          }, 100)
        : setRating(-100);
    return () => {
      clearInterval(tym);
    };
  }, [rating]);
  // rating < 200
  //   ? setInterval(() => {
  //       setRating(rating + 1);
  //     })
  //   : clearInterval();
  console.log(rating, 200);
  return (
    <div className="">
      <div className="flex items-center justify-center h-[90vh]">
        <div
          className="text-center text-5xl font-bold textes"
          style={{ backgroundSize: `${rating}%` }}
        >
          <span className="ml-5 uppercase">A</span>
          <span className="ml-5 uppercase">p</span>
          <span className="ml-5 uppercase">p</span>
          <span className="ml-5 uppercase">l</span>
          <span className="ml-5 uppercase">o</span>
          <span className="ml-5 uppercase">g</span>
          <span className="ml-5 uppercase">i</span>
          <span className="ml-5 uppercase">Q</span>
        </div>
      </div>
    </div>
  );
};

export default RatingComponent;
