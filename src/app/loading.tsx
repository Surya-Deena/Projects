"use client";
import React, { useEffect, useState } from "react";
const Loading = () => {
  const [rating, setRating] = useState(75);

  useEffect(() => {
    const tym: any = setInterval(() => {
      setRating(rating + 10);
    }, 100);
    return () => {
      clearInterval(tym);
    };
  }, [rating]);
  console.log(rating, 200);
  return (
    <div className="">
      <div className="flex items-center justify-center h-[90vh]">
        <div
          className="text-center text-5xl font-bold textes w-full"
          style={{ backgroundSize: `${rating}%` }}
        >
          <span className="ml-3">S</span>
          <span className="ml-3">U</span>
          <span className="ml-3">R</span>
          <span className="ml-3">Y</span>
          <span className="ml-3">A</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;

/* CSS styels */
// .textes {
//     background: linear-gradient(to right,red,blue, red, blue, white 50%);
//     /* background: linear-gradient(to right, orange, blue, orange, white 50%); */
//     /* background: radial-gradient(circle, #ffa500, #0000ff, #ffffff); */
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//   }
