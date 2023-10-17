import React from "react";

const Title = ({ title }) => {
  return (
    <div
      aria-label="title"
      className={`${""} w-full h-[10%] flex items-center justify-center gap-5 text-2xl font-bold 
      bg-gradient-to-b from-red-500 via-purple-600 to-blue-500 bg-clip-text text-transparent
      `}
    >
      {title}
    </div>
  );
};

export default Title;
