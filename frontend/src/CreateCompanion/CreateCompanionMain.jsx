import React, { useState } from "react";
import Avatar from "./Avatar";
import SliderInputSec from "./SliderInputSec";
import AvatarOptions from "./AvatarOptions";
import { use } from "react";

const CreateCompanionMain = () => {
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [createdId, setCreatedId] = useState();

  const [settings, SetSettings] = useState({
    name: "Unknown",
    avatar: "/assets/boy.png",
    mood: { label: "happpy", emoji: "☺️" },
    backstory: "",
    sliders: {
      Humor : 50,
      Aggression: 50,
      Wisdom: 50,
      Empathy: 50,
    },
  });

  const setName = (name) => SetSettings((s) => ({ ...s, name }));
  const setAvatar = (avatar) => SetSettings((s) => ({ ...s, avatar }));
  const setMood = (mood) => SetSettings((s) => ({ ...s, mood }));
  const setBackstory = (backstory) => SetSettings((s) => ({ ...s, backstory }));
  const setSliders = (sliders) => SetSettings((s) => ({ ...s, sliders }));

  const handleSubmit = async (e) => {
    setLoading(true);
    setError(null);

    try {
      const resp = await fetch("http://localhost:8080/health", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });

      if (!resp.ok) {
        const text = await resp.text();
        throw new Error(`server error : ${resp.status} ${text}`);
      }

      const data = await resp.json();
      setCreatedId(data.id || data._id || null);
      console.log("Companion created:", data);
    } catch (err) {
      console.error("failed to create companion  : ", err);
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

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
            <Avatar
              name={settings.name || "Unknown"}
              images={settings.avatar}
              mood={settings.mood}
            />
            <AvatarOptions setImages={setAvatar} />
          </div>

          <div className="flex ">
            <SliderInputSec
              sendData={setName}
              setMood={setMood}
              setBackstory={setBackstory}
              setSliders={setSliders}
              sliders={settings.sliders}
              oncreate = {handleSubmit}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCompanionMain;
