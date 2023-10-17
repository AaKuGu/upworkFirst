"use client";

import Model from "@/sections/dashboard/model/Model";
import ViewUserDetails from "@/sections/dashboard/rightSide/mainContainer/SelectedButtonComponents/Admin/ViewUserDetails";
import React, { useMemo, useState } from "react";
import { GrView } from "react-icons/gr";
import { useSelector } from "react-redux";
import styles from "./reviewDesigns.module.css";
import DesignCard from "@/sections/dashboard/rightSide/mainContainer/DesignCard";
import { usePathname } from "next/navigation";

const FirstPage = ({ searchParams }) => {
  const [designerDetailsBoolean, setDesignerDetailsBoolean] = useState(false);
  const [pendingDesignsFullViewBoolean, setPendingDesignsFullViewBoolean] =
    useState(false);

  const { id } = searchParams;
  const pathname = usePathname();
  console.log("🚀 ~ file: page.jsx:19 ~ FirstPage ~ pathname:", pathname);

  console.log("🚀 ~ file: page.jsx:5 ~ FirstPage ~ id:", id);

  const adminPendingReviewsData_selector = useSelector((state) => {
    const { adminPendingReviewsData_reducer } = state;
    return adminPendingReviewsData_reducer;
  });
  console.log(
    "🚀 ~ file: page.jsx:14 ~ constadminPendingReviewsData_selector=useSelector ~ adminPendingReviewsData_selector:",
    adminPendingReviewsData_selector
  );

  // const finalData = adminPendingReviewsData_selector.map((data) => {
  //   if (data.id == id) {
  //     return data;
  //   }
  // });
  // console.log("🚀 ~ file: page.jsx:24 ~ finalData ~ finalData:", finalData);

  // const finalPendingDesignsPerDesigner = useMemo(() => {
  const finalData = adminPendingReviewsData_selector.find((data) => {
    return data.id == id;
  });
  // console.log("🚀 ~ file: page.jsx:30 ~ finalData ~ finalData:", finalData);
  // console.log("🚀 ~ file: page.jsx:23 ~ data ~ data:", data);
  // }, []);
  // console.log(
  //   "🚀 ~ file: page.jsx:22 ~ finalPendingDesignsPerDesigner ~ finalPendingDesignsPerDesigner:",
  //   finalPendingDesignsPerDesigner
  // );
  const { designs, userDetails, id: cardId } = finalData;

  const { id: userId } = userDetails;

  return (
    <div
      className={`h-full w-full flex items-center justify-center bg-green-500 flex-col px-5`}
    >
      <div
        aria-label="each review card container"
        className={`${""} w-full h-[100px] flex items-center justify-between px-5 gap-5 bg-white rounded-lg `}
      >
        <div aria-label="name container" className={`${""} `}>
          {userDetails.name}
        </div>
        <div
          aria-label="right side"
          className={`${""} w-auto h-full flex items-center justify-center gap-5 `}
        >
          <div
            aria-label="designer details"
            className={`${""} w-auto h-full flex items-center justify-center gap-5 flex-col `}
          >
            <div aria-label="user details label" className={`${""} `}>
              Designer Details
            </div>
            <div
              aria-label="user details view icon"
              className={`${""} `}
              onClick={() => {
                setDesignerDetailsBoolean(true);
              }}
            >
              <GrView />
            </div>
          </div>

          <div
            aria-label="pending designs no. details"
            className={`${""} w-auto h-full flex items-center justify-center gap-5 flex-col `}
          >
            <div aria-label="user details label" className={`${""}`}>
              Total Pending Reviews
            </div>
            <div aria-label="user details view icon" className={`${""} `}>
              {designs.length}
            </div>
          </div>

          {pathname === "/dashboard/design" && (
            <button
              role="review"
              className={`${""} border-2 px-5 py-2 `}
              onClick={() => {
                setReviewPerDesigner(true);
                router.push(`/dashboard/designReview?id=${id}`);
              }}
            >
              Review
            </button>
          )}
        </div>
        {designerDetailsBoolean && (
          <Model action={setDesignerDetailsBoolean} _width="30%">
            <div
              aria-label="create user title container"
              className={`${""} w-full h-[10%] flex items-center justify-center gap-5 `}
            >
              View User Details
            </div>
            <ViewUserDetails data={userDetails} />
          </Model>
        )}
      </div>
      <div
        aria-label="main container"
        className={`${styles.mainContainer} w-full  flex items-center justify-center gap-5 bg-blue-500`}
      >
        {designs.map((design, i) => {
          return (
            <DesignCard
              design={design}
              designId={design.id}
              userId={userId}
              cardId={cardId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FirstPage;
