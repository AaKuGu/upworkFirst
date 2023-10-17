import { designsInfo } from "@/constants/constant";
import React from "react";
import DesignCard from "../../DesignCard";
import Title from "../../Title";
import { useDispatch, useSelector } from "react-redux";

const Designs = ({ title }) => {
  const dispatch = useDispatch();

  const designsInfo_selector = useSelector((state) => {
    const { designsInfo_reducer } = state;
    return designsInfo_reducer;
  });

  
  return (
    <div className="w-full h-full flex-col flex items-center justify-center gap-5 bg-gray-50 ">
      <Title title={title} />
      <div
        aria-label="designcard map container"
        className={`${""} w-full h-[85%] flex-wrap flex items-center justify-center gap-10 overflow-y-auto py-2 `}
      >
        {designsInfo_selector.map((design, i) => {
          return <DesignCard design={design} />;
        })}
      </div>
    </div>
  );
};

export default Designs;
