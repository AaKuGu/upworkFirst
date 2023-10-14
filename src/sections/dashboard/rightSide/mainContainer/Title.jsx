import React from "react";

const Title = ({ title }) => {
  return (
    <div
      aria-label="title"
      className={`${""} w-full h-[10%] flex items-center justify-center gap-5 text-2xl font-bold text-gray-600 `}
    >
      {title}
    </div>
  );
};

export default Title;
