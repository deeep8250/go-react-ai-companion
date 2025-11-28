// ProgressPill.jsx
import React from "react";

const ProgressbarCard = ({ Percentage }) => {
  return (
    <div className="w-[70%] h-4 bg-green-100 rounded-2xl">
      <div
        className=" bg-green-400 rounded-2xl flex justify-center items-center h-4"
        style={{ width: Percentage }}
      >
        
        <h1 className="font-bold font-mono "> {Percentage} </h1>
      </div>
    </div>
  );
};

export default ProgressbarCard;
