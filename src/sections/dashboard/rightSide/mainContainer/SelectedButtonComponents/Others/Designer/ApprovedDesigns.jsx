import React from "react";
import DesignCard from "../../../DesignCard";
import { useSelector } from "react-redux";

const ApprovedDesigns = () => {
  const designerApprovedDesignsData_selector = useSelector((state) => {
    const { designerApprovedDesignsData_reducer } = state;
    return designerApprovedDesignsData_reducer;
  });

  const approvedDesignsNumber = designerApprovedDesignsData_selector.length;
  //   console.log(
  //     "🚀 ~ file: YourDesigns.jsx:10 ~ constdesignerApprovedDesignsData_selector=useSelector ~ designerApprovedDesignsData_selector:",
  //     designerApprovedDesignsData_selector
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
          Approved Designs
        </div>
        <div aria-label="pending approval number" className={`${""} `}>
          {approvedDesignsNumber}
        </div>
      </div>

      <div
        aria-label="approved designs container"
        className={`${""} flex-wrap w-full h-[70%] flex items-center justify-center gap-5 `}
      >
        {designerApprovedDesignsData_selector.map((design, i) => {
          return <DesignCard design={design} />;
        })}
      </div>
    </div>
  );
};

export default ApprovedDesigns;
