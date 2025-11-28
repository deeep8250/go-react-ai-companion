import React from "react";

const Sliders = () => {
  return (
    <>
      <div className="flex flex-col gap5 w-full backdrop-blur-lg bg-white/10 rounded-2xl  items-center p-5 gap-6 font-mono text-white">
        <div>
          <h2 className="text-3xl font-mono font-semibold">Personality</h2>
        </div>
        <div className=" w-[70%] flex flex-col">
          <div className="flex justify-between">
            <h1>😄 Humor</h1>
            <h1>80%</h1>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            className="w-full accent-indigo-600 h-2 bg-gray-200 rounded-lg cursor-pointer"
          />
        </div>

        <div className=" w-[70%] flex flex-col">
          <div className="flex justify-between">
            <h1>⚡Aggression</h1>
            <h1>80%</h1>
          </div>

          <input
            type="range"
            min={0}
            max={100}
            className="w-full accent-indigo-600 h-2 bg-gray-200 rounded-lg cursor-pointer"
          />
        </div>
        <div className=" w-[70%] flex flex-col">
          <div className="flex justify-between">
            <h1>🧠 Wisdom</h1>
            <h1>80%</h1>
          </div>

          <input
            type="range"
            min={0}
            max={100}
            className="w-full accent-indigo-600 h-2 bg-gray-200 rounded-lg cursor-pointer"
          />
        </div>
        <div className=" w-[70%] flex flex-col">
          <div className="flex justify-between">
            <h1>❤️ Empathy</h1>
            <h1>80%</h1>
          </div>

          <input
            type="range"
            min={0}
            max={100}
            className="w-full accent-indigo-600 h-2 bg-gray-200 rounded-lg cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default Sliders;
