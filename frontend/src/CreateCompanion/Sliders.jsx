import React from "react";

const Sliders = ({ setSliders, sliders }) => {
  return (
    <>
      <div className="flex flex-col gap5 w-full backdrop-blur-lg bg-white/10 rounded-2xl  items-center p-5 gap-6 font-mono text-white">
        <div>
          <h2 className="text-3xl font-mono font-semibold">Personality</h2>
        </div>
        <div className=" w-[70%] flex flex-col">
          <div className="flex justify-between">
            <h1>😄 Humor</h1>
            <h1>{sliders.Humor}%</h1>
          </div>
          <input
            onChange={(e) => {
              setSliders({ ...(sliders || {}), Humor: Number(e.target.value) });
            }}
            type="range"
            min={0}
            max={100}
            className="w-full accent-indigo-600 h-2 bg-gray-200 rounded-lg cursor-pointer"
          />
        </div>

        <div className=" w-[70%] flex flex-col">
          <div className="flex justify-between">
            <h1>⚡Aggression</h1>
            <h1>{sliders.Aggression}%</h1>
          </div>

          <input
            onChange={(e) => {
              setSliders({
                ...(sliders || {}),
                Aggression: Number(e.target.value),
              });
            }}
            type="range"
            min={0}
            max={100}
            className="w-full accent-indigo-600 h-2 bg-gray-200 rounded-lg cursor-pointer"
          />
        </div>
        <div className=" w-[70%] flex flex-col">
          <div className="flex justify-between">
            <h1>🧠 Wisdom</h1>
            <h1>{sliders.Wisdom}%</h1>
          </div>

          <input
          onChange={(e)=>setSliders({...(sliders || {}) ,Wisdom:Number(e.target.value)})}
            type="range"
            min={0}
            max={100}
            className="w-full accent-indigo-600 h-2 bg-gray-200 rounded-lg cursor-pointer"
          />
        </div>
        <div className=" w-[70%] flex flex-col">
          <div className="flex justify-between">
            <h1>❤️ Empathy</h1>
            <h1>{sliders.Empathy}%</h1>
          </div>

          <input
          onChange={(e)=>setSliders({...(sliders || {}),Empathy:Number(e.target.value)})}
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
