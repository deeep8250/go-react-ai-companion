import React from "react";

const Mood = ({setMood}) => {
  const array = [
    { label: "happy", emoji: "☺️" },
    { label: "calm", emoji: "😌" },
    { label: "Determined", emoji: "😤" },
    { label: "Curious", emoji: "🤔" },
    { label: "Confident", emoji: "😎" },
  ];

  return (
    <>
      <div>
        <div className="w-120 backdrop-blur-lg bg-white/10 rounded-2xl flex  justify-center items-center p-5 gap-6">
          {array.map((item, index) => (
            <button
              key={index}
              className="text-3xl hover:scale-130 transition duration-300"
              onClick={()=>setMood(item)}
            >
              {" "}
              {item.emoji}{" "}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Mood;
