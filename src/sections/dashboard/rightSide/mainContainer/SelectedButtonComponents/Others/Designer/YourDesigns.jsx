import React, { useState } from "react";
import Title from "../../../Title";
import { useSelector } from "react-redux";
import ApprovedDesigns from "./ApprovedDesigns";
import PendingApproval from "./PendingApproval";
import { FcApprove, FcDisapprove } from "react-icons/fc";
import { MdOutlinePending } from "react-icons/md";

const YourDesigns = ({ title }) => {
  const [whichButton, setWhichButton] = useState("approvedDesigns");

  const yourDesignMainButton = [
    {
      id: 1,
      label: "Approved Designs",
      name: "approvedDesigns",
      icon: <FcApprove />,
    },
    {
      id: 2,
      label: "Pending Approval",
      name: "pendingApproval",
      icon: <MdOutlinePending />,
    },
  ];

  return (
    <div className="w-full h-full flex-col flex items-center justify-center gap-5 p-3 bg-gray-50 ">
      <Title title={title} />
      <div
        aria-label="designcard map container"
        className={`${""} w-full h-[85%] flex items-center justify-start py-5 gap-10 overflow-y-auto  flex-col  `}
      >
        <div
          aria-label="status title"
          className={`${""} w-full h-[10%] flex items-center justify-between gap-5 px-5 py-2`}
        >
          {yourDesignMainButton.map((btn, i) => {
            return (
              <button
                role="approved or pending design buttton"
                className={`${whichButton === btn.name && "border-2 border-purple-600"} bg-gray-200 hover:bg-gray-300 rounded-lg px-5 py-3 duration-100 w-auto h-fit flex items-center justify-center gap-5  `}
                onClick={() => {
                  setWhichButton(btn.name);
                }}
              >
                <div aria-label="icon" className={`${""} text-3xl text-blue-600`}>
                  {btn.icon}
                </div>
                <div aria-label="label" className={`${""} font-bold text-gray-700 `}>
                  {btn.label}
                </div>
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
