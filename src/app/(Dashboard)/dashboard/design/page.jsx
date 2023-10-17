"use client";

import Image from "next/image";
import React from "react";
import { BiSolidDownload } from "react-icons/bi";
import { MdOutlineDescription } from "react-icons/md";
import { useSelector } from "react-redux";

const page = ({ searchParams }) => {
  const { designId } = searchParams;
  const queryId = designId;
  // console.log("🚀 ~ file: page.jsx:5 ~ page ~ designId:", id);
  // alert("id : " + id);

  const selectedDesignCardInfo_selector = useSelector((state) => {
    const { selectedDesignCardInfo_reducer } = state;
    return selectedDesignCardInfo_reducer;
  });

  const {
    state,
    image,
    id: dbId,
    details,
    name,
    likesCount,
  } = selectedDesignCardInfo_selector;

  return (
    <div
      aria-label="design complete details"
      className={`${""} w-full h-full flex items-center justify-center gap-10 flex-col p-5`}
    >
      <div
        aria-label="header"
        className={`${""} w-full h-[10%] flex items-center justify-between gap-5 shadow-lg text-purple-600  px-5 py-2 rounded-lg `}
      >
        <div
          aria-label="name"
          className={`${""}  font-bold w-auto h-auto flex items-center justify-center gap-2 `}
        >
          <div
            aria-label="label"
            className={`${""} text-green-500 font-normal `}
          >
            Name :{" "}
          </div>
          <div
            aria-label="value"
            className={`${""}  bg-gradient-to-b from-amber-500 via-purple-600 to-blue-500 bg-clip-text text-transparent font-bold`}
          >
            {name}
          </div>
        </div>
        <div
          aria-label="likesCount"
          className={`${""} font-bold w-auto h-auto flex items-center justify-center gap-2  `}
        >
          <div
            aria-label="label"
            className={`${""} text-green-500 font-normal `}
          >
            Likes :{" "}
          </div>
          <div
            aria-label="value"
            className={`${""}  bg-gradient-to-b from-amber-500 via-purple-600 to-blue-500 bg-clip-text text-transparent font-bold`}
          >
            {likesCount}
          </div>
        </div>
      </div>
      <div
        aria-label="image,details,button,container"
        className={`${""}  w-full h-[70%] flex items-center justify-center gap-10 `}
      >
        <div
          aria-label="design image"
          className={`${""} w-auto p-2 h-auto flex items-center justify-center gap-5 shadow-xl  `}
        >
          <Image width={330} height={330} src={image} className=" " />
        </div>
        <div
          aria-label="details container"
          className={`${""} w-[50%] h-full flex items-center justify-center gap-5 flex-col shadow-lg p-5 py-10`}
        >
          <div
            aria-label="title"
            className={`${""} w-auto px-5 py-2 h-auto flex items-center justify-center bg-gray-200 gap-5 rounded-lg `}
          >
            <MdOutlineDescription className="text-blue-600 font-bold text-xl" />
            <div aria-label="" className={`${""} font-bold text-xl`}>
              Description
            </div>
          </div>
          <div
            aria-label="text details"
            className={`${""} w-full h-full flex items-center justify-start gap-5 flex-col gabarito overflow-y-auto text-base font-bold text-gray-700`}
          >
            {details}
          </div>
          <div
            aria-label="button"
            className={`${""} w-full h-auto flex items-center justify-center gap-5 `}
          >
            <button
              role="download button"
              className={`${""}  text-purple-700 font-bold shadow-lg px-5 py-2 flex items-center hover:bg-purple-100 duration-300 justify-center rounded-lg shadow-purple-200 gap-3 `}
            >
              <BiSolidDownload />
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
