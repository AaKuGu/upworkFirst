import React from "react";
import Title from "../../../Title";
import { designsInfo } from "@/constants/constant";
import DesignCard from "../../../DesignCard";

const Payments = ({ title }) => {
  return (
    <div className="w-full h-full flex-col flex items-center justify-center gap-5 bg-red-500">
      <Title title={title} />
      <div
        aria-label="designcard map container"
        className={`${""} w-full h-full flex-wrap flex items-center justify-center gap-5 overflow-y-auto`}
      >
        {designsInfo.map((design, i) => {
          return <DesignCard />;
        })}
      </div>
    </div>
  );
};

export default Payments;
