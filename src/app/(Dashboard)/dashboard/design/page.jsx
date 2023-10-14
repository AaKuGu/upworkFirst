"use client";

import Image from "next/image";
import React from "react";
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

  const { state, image, id: dbId, details } = selectedDesignCardInfo_selector;

  return (
    <div
      aria-label="design complete details"
      className={`${""} w-full h-full flex items-center justify-center gap-5 `}
    >
      <div
        aria-label="design image"
        className={`${""} w-[40%] h-auto flex items-center justify-center gap-5`}
      >
        <Image width={300} height={300} src={image} />
      </div>
      <div
        aria-label="details container"
        className={`${""} w-[50%] h-auto flex items-center justify-center gap-5 flex-col`}
      >
        <div
          aria-label="text details"
          className={`${""} w-full h-full flex items-center justify-center gap-5 flex-col`}
        >
          {details}
        </div>
        <div
          aria-label="button"
          className={`${""} w-full h-auto flex items-center justify-center gap-5 `}
        >
          <button
            role="download button"
            className={`${""} border-2 px-5 py-2 `}
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
