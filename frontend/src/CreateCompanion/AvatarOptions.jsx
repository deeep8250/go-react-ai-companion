import React from "react";

const AvatarOptions = ({setImages}) => {
  const array = [
    "/assets/boy.png",
    "/assets/female.png",
    "/assets/male.png",
    "/assets/old.png",
  ];

  return (
    <>
      <div>
        <div className="w-full backdrop-blur-lg bg-white/10 rounded-2xl flex  justify-center items-center p-5 gap-6">
          {array.map((item, index) => (
            <button
              key={index}
              className="rounded-2xl overflow-hidden hover:scale-110 transition duration-300"
              onClick={()=>setImages(item)}
            >
              <img src={item} />
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default AvatarOptions;
