import React from "react";
import { useSelector } from "react-redux";
import Title from "../../../Title";
import DesignCard from "../../../DesignCard";

const PurchasedDesigns = ({ title }) => {
  const purchasedDesignsData_selector = useSelector((state) => {
    const { purchasedDesignsData_reducer } = state;
    return purchasedDesignsData_reducer;
  });
  console.log(
    "🚀 ~ file: PurchasedDesigns.jsx:9 ~ constpurchasedDesignsData_selector=useSelector ~ purchasedDesignsData_selector:",
    purchasedDesignsData_selector
  );

  return (
    <div className="w-full h-full flex-col flex items-center justify-center gap-5 bg-red-500">
      <Title title={title} />
      <div
        aria-label="designcard map container"
        className={`${""} w-full h-[85%] flex-wrap flex items-center justify-center gap-5 overflow-y-auto`}
      >
        {purchasedDesignsData_selector.map((design, i) => {
          return <DesignCard />;
        })}
      </div>
    </div>
  );
};

export default PurchasedDesigns;
