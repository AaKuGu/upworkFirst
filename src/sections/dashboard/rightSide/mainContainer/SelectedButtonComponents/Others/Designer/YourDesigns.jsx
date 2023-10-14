import React, { useState } from "react";
import Title from "../../../Title";
import { useSelector } from "react-redux";
import ApprovedDesigns from "./ApprovedDesigns";
import PendingApproval from "./PendingApproval";

const YourDesigns = ({ title }) => {
  const [whichButton, setWhichButton] = useState("approvedDesigns");

 
  const yourDesignMainButton = [
    {
      id: 1,
      label: "Approved Designs",
      name: "approvedDesigns",
    },
    {
      id: 2,
      label: "Pending Approval",
      name: "pendingApproval",
    },
  ];

  return (
    <div className="w-full h-full flex-col flex items-center justify-center gap-5 p-3">
      <Title title={title} />
      <div
        aria-label="designcard map container"
        className={`${""} w-full h-[85%] flex items-center justify-start py-5 gap-10 overflow-y-auto border-2 border-gray-400 flex-col bg-blue-500 `}
      >
        <div
          aria-label="status title"
          className={`${""} w-full h-[10%] flex items-center justify-between gap-5 px-5 py-2`}
        >
          {yourDesignMainButton.map((btn, i) => {
            return (
              <button
                role="approved or pending design buttton"
                className={`${""} border-2 px-5 py-2 hover:bg-red-500`}
                onClick={() => {
                  setWhichButton(btn.name);
                }}
              >
                {btn.label}
              </button>
            );
          })}
        </div>

        <div
          aria-label="approved or prending designs container"
          className={`${""} w-full h-[70%] flex items-center justify-center gap-5 `}
        >
          {whichButton === "approvedDesigns" && <ApprovedDesigns />}
          {whichButton === "pendingApproval" && <PendingApproval />}
        </div>
      </div>
    </div>
  );
};

export default YourDesigns;
