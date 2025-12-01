import React from "react";
import ProgressbarCard from "./ProgressbarCard";
import Category from "./Category";

const Cards = ({image}) => {
  return (
    <div className="sm:h-170 w-full bg-gray-800 rounded-2xl hover:scale-110 transition duration-300 overflow-hidden m-10">
      <div className="w-full  h-[60%] relative">
        <img src={image} className="w-full h-full object-cover"/>
        <Category />
      </div>

      <div className="flex flex-col gap-6 p-5 justify-center h-auto">
        <h1 className="text-2xl text-white font-bold">Name</h1>

        <div className="flex gap-10">
          <h2 className="backdrop-blur-lg bg-white/10 border-b border-b-blue-500 rounded-2xl p-2 text-white">
            Tag 1
          </h2>
          <h2 className="backdrop-blur-lg bg-white/10 border-b border-b-blue-500 rounded-2xl p-2 text-white">
            tag2
          </h2>
          <h2 className="backdrop-blur-lg bg-white/10 border-b border-b-blue-500 rounded-2xl p-2 text-white">
            tag3
          </h2>
        </div>

        <div className="flex flex-col gap-1 ">
          <h1 className="text-lg text-white">Power Level</h1>
          <ProgressbarCard Percentage="80%" />
        </div>
        
     <button className="w-[50%] backdrop-blur-lg bg-white/10 border-2 rounded-2xl mb-100 hover:scale-110 transition ml-20 text-white">Chat Now</button>       
      </div>
    </div>
  );
};

export default Cards;
