import React from "react";

const Category = () => {
  return (
    <>
      <div className="absolute sm:right-10 sm:top-3">
        <h1 className="backdrop-blur-lg bg-white/10 border-2 border-b-violet-600 rounded-2xl p-2">
          Curious
        </h1>
      </div>

      <div className="absolute sm:left-3 sm:bottom-3">
        <h1 className="backdrop-blur-lg bg-white/10 border-2 border-b-violet-600 rounded-2xl p-2">
          love %
        </h1>
      </div>
    </>
  );
};

export default Category;
