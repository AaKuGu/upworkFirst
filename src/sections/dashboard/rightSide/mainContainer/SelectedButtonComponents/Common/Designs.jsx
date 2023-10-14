import { designsInfo } from "@/constants/constant";
import React from "react";
import DesignCard from "../../DesignCard";
import Title from "../../Title";
import { useDispatch } from "react-redux";

const Designs = ({ title }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full h-full flex-col flex items-center justify-center gap-5 ">
      <Title title={title} />
      <div
        aria-label="designcard map container"
        className={`${""} w-full h-[85%] flex-wrap flex items-center justify-center gap-5 overflow-y-auto`}
      >
        {designsInfo.map((design, i) => {
          return <DesignCard design={design} />;
        })}
      </div>
    </div>
  );
};

export default Designs;
