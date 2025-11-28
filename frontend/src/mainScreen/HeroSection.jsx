import React from "react";

import { useNavigate } from "react-router-dom";

const Hero = () => {

    const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col justify-center items-center  pt-5 text-center space-y-4 animate-fade-in w-full">
        <div className="flex gap-4 leading-tight p-5">
          <h1 className="text-5xl md:text-7xl  font-black text-cyan-300 drop-shadow-[0_0_20px_rgba(0,255,255,0.7)]">
            AI Companion Forge
          </h1>
        </div>
        <p className="text-lg md:text-xl text-white p-2">
          Craft unique AI companions with distinct personalities, emotions, and
          magical abilities
        </p>
        <button className="bg-violet-400 rounded-2xl p-4 hover:bg-violet-800 hover:scale-110 transition  duration-300"
        onClick={()=>navigate("/Create-Companion")}
        
        >
          <h1 className="sm:text-2xl"> + Create New Companion </h1>
        </button>
      </div>
    </>
  );
};

export default Hero;
