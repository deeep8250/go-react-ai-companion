import React from "react";

const Avatar = ({name,images,mood}) => {
  return (
    // FIX 1: Removed invalid 'h-150' class. Height will now be determined by content.
    <div className="w-120 backdrop-blur-lg bg-white/10 rounded-2xl flex flex-col items-center p-5 gap-6">
      {/* This inner div's width is controlled by the outer w-1/3 */}
      <div className="flex flex-col gap-5 overflow-hidden rounded-2xl relative">
        <h1 className="text-gray-400 font-mono font-bold text-4xl">Preview</h1>
        <img
          src={images}
          // FIX 2: Added object-contain to ensure the whole image is visible.
          className="w-full rounded-2xl object-contain"
        />
        <div className="backdrop-blur-lg bg-white/10 rounded-2xl flex flex-col items-center absolute bottom-3 w-[80%] ml-10 ">
          <h1 className="text-2xl font-semibold font-mono text-white">{name}</h1>
          <h1>power level</h1>
        </div>
      </div>

      <div className="backdrop-blur-lg bg-white/10 rounded-2xl text-2xl text-white font-mono font-bold p-4 w-[70%] text-center flex gap-10 justify-center">
       <h1>{mood.emoji}</h1>
       <div className="flex flex-col">
        <h1 className="text-2xl">Current Mood</h1>
        <h1 className="text-sm">{mood.label}</h1>
       </div>
      </div>
    </div>
  );
};

export default Avatar;
