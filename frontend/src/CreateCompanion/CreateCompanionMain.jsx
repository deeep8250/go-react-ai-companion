import React, { useState } from "react";
import Avatar from "./Avatar";
import SliderInputSec from "./SliderInputSec";
import AvatarOptions from "./AvatarOptions";
import { use } from "react";

const CreateCompanionMain = () => {
  const [name, SetName] = useState("Unknown");
  const [avatar, setAvatar] = useState("/assets/boy.png");
  const [mood,SetMood] = useState(
     { label: "happy", emoji: "☺️" }
  ); 

  return (
    <>
      <div className="min-h-screen bg-blue-950 flex flex-col gap-20 justify-center">
        <div className="flex  flex-col  ml-50 pt-10">
          <h1 className="text-5xl font-black text-cyan-300 drop-shadow-[0_0_20px_rgba(0,255,255,0.7)]">
            Forge New Companion
          </h1>
          <h2 className="text-2xl text-gray-400">
            Design every aspect of your AI companion's personality
          </h2>
        </div>

        <div className="flex gap-10  justify-center w-full">
          <div className="flex  flex-col w-[30%] gap-3">
            <Avatar name={name || "Unknown"} images={avatar} mood={mood} />
            <AvatarOptions setImages={setAvatar} />
          </div>

          <div className="flex ">
            <SliderInputSec sendData={SetName} setMood={SetMood}  />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCompanionMain;
