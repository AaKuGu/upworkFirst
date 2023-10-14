import React from "react";
import { useSelector } from "react-redux";
import DesignCard from "../../../DesignCard";

const PendingApproval = () => {
  const designerPendingDesignsData_selector = useSelector((state) => {
    const { designerPendingDesignsData_reducer } = state;
    return designerPendingDesignsData_reducer;
  });
  //   console.log("🚀 ~ file: PendingApproval.jsx:9 ~ constdesignerPendingDesignsData_selector=useSelector ~ designerPendingDesignsData_selector:", designerPendingDesignsData_selector);

  const noOfPendingDesigns = designerPendingDesignsData_selector.length;
  //   console.log(
  //     "🚀 ~ file: PendingApproval.jsx:12 ~ PendingApproval ~ noOfPendingDesigns:",
  //     noOfPendingDesigns
  //   );

  return (
    <div
      aria-label="pending approval container"
      className={`${""} flex-wrap w-full h-full flex items-center justify-center gap-5 `}
    >
      <div
        aria-label="pending approval number container"
        className={`${""} w-full h-[10%] flex items-center justify-between px-10 gap-5 `}
      >
        <div aria-label="title" className={`${""} `}>
          Pending Approval
        </div>
        <div aria-label="pending approval number" className={`${""} `}>
          {noOfPendingDesigns}
        </div>
      </div>

      <div
        aria-label="approved designs container"
        className={`${""} flex-wrap w-full h-[70%] flex items-center justify-center gap-5 `}
      >
        {designerPendingDesignsData_selector.map((design, i) => {
          return <DesignCard design={design} />;
        })}
      </div>
    </div>
  );
};

export default PendingApproval;
