import React from "react";
import Sliders from "./Sliders";
import Mood from "./Mood";

const SliderInputSec = ({ sendData, setMood ,setBackstory,setSliders,oncreate,sliders }) => {
  const handleSubmit = (e) => {
    
    
    e.preventDefault();
    if (oncreate) oncreate()
       window.location.href = "/";
    console.log("Form submitted");
  };
  return (
    <form
      className="flex items-start justify-center w-full p-7 "
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-5  w-full">
        <div className="  backdrop-blur-lg bg-white/10 rounded-2xl text-2xl text-white font-mono font-bold p-5 flex flex-col gap-10">
          <h1 className="text-3xl text-white font-mono font-bold">Identity</h1>
          <div className="flex flex-col">
            <h1>Name</h1>
            <input
            required
              type="text"
              onChange={(e) => sendData(e.target.value)}
              className="backdrop-blur-lg bg-white/10 rounded-2xl  text-2xl p-2  focus:outline-none focus:ring-3 focus:ring-cyan-500"
              placeholder="Enter your companion's  name"
            />
          </div>

          <div className="flex flex-col">
            <h1>Backstory</h1>
            <textarea
            required
            onChange={(e)=>setBackstory(e.target.value)}
              className="backdrop-blur-lg bg-white/10 rounded-2xl  text-sm h-50 p-2 focus:outline-none focus:ring-3 focus:ring-cyan-500 "
              placeholder="describe your companion's origin story"
            />
          </div>
        </div>

        <Sliders setSliders={setSliders} sliders={sliders}/>
        <Mood setMood={setMood} />

        <button
      
              


          type="submit"
          aria-label="Violet hover button"
          class="
    backdrop-blur-2xl
    bg-white/10
    rounded-3xl
    px-6
    py-3
    text-lg
    text-white
    font-semibold
    transform
    transition
    duration-300
    ease-out
    shadow-md
    hover:scale-105
    hover:shadow-[0_12px_30px_rgba(229,46,113,0.55)]
    focus:outline-none

    focus:ring-pink-400/30
  "
        >
          Create
        </button>
      </div>
    </form>
  );
};

export default SliderInputSec;
