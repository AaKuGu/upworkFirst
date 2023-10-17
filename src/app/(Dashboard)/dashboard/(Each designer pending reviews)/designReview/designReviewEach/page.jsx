"use client";

import { designReviewEachButtons } from "@/constants/constant";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const page = ({ searchParams }) => {
  const dispatch = useDispatch();

  //   const queryId = designId;
  // console.log("🚀 ~ file: page.jsx:5 ~ page ~ designId:", id);
  // alert("id : " + id);

  const selectedDesignCardInfo_selector = useSelector((state) => {
    const { selectedDesignCardInfo_reducer } = state;
    return selectedDesignCardInfo_reducer;
  });
  const adminPendingReviewsData_selector = useSelector((state) => {
    const { adminPendingReviewsData_reducer } = state;
    return adminPendingReviewsData_reducer;
  });
  console.log(
    "🚀 ~ file: page.jsx:23 ~ constadminPendingReviewsData_selector=useSelector ~ adminPendingReviewsData_selector:",
    adminPendingReviewsData_selector
  );

  const designsInfo_selector = useSelector((state) => {
    const { designsInfo_reducer } = state;
    return designsInfo_reducer;
  });

  const { state, image, id, details } = selectedDesignCardInfo_selector;
  const { designId, cardId, userId } = searchParams;

  const removeADesignFromAdminPendingReviews = () => {
    const temp = [...adminPendingReviewsData_selector];
    console.log(
      "🚀 ~ file: page.jsx:32 ~ approveOrRejectHandler ~ temp:",
      temp
    );

    const _temp = temp.map((data) => {
      console.log(
        "🚀 ~ file: page.jsx:38 ~ const_temp=temp.forEach ~ data:",
        data
      );
      if (data.id == cardId) {
        // alert(
        //   "cardid, id, designId : " + cardId + " " + data.id + " " + designId
        // );

        let tempObj = { ...data };
        const { designs, ...res } = tempObj;

        const __temp = designs.filter((design) => {
          if (design.id == designId) {
            // alert("same same");
            return false;
          } else {
            // alert("not same same");
            return true;
          }
        });

        console.log(
          "🚀 ~ file: page.jsx:55 ~ const_temp=temp.map ~ designs:",
          designs
        );

        tempObj.designs = __temp;

        console.log(
          "🚀 ~ file: page.jsx:53 ~ const_temp=temp.map ~ tempObj:",
          tempObj
        );

        return tempObj;

        // const __temp = data.designs.filter((design) => {
        //   design.id != designId;
        // });

        // console.log(
        //   "🚀 ~ file: page.jsx:36 ~ const__temp=data.designs.filter ~ __temp:",
        //   __temp
        // );
      } else {
        return data;
      }
    });
    console.log(
      "🚀 ~ file: page.jsx:73 ~ const_temp=temp.forEach ~ _temp:",
      _temp
    );
    console.log(
      "🚀 ~ file: page.jsx:73 ~ const_temp=temp.forEach ~ _temp:",
      _temp
    );

    dispatch({
      type: "adminPendingReviewsData_action",
      payload: [..._temp],
    });
  };
  const approveOrRejectHandler = (option) => {
    if (option === "approve") {
      const answer = confirm("Are you sure you want to approve this design ?");
      if (answer) {
        removeADesignFromAdminPendingReviews();
        // const temp = [...adminPendingReviewsData_selector];
        // console.log(
        //   "🚀 ~ file: page.jsx:32 ~ approveOrRejectHandler ~ temp:",
        //   temp
        // );
        // // const temp = adminPendingReviewsData_selector.filter()
        // const _temp = temp.map((data) => {
        //   console.log(
        //     "🚀 ~ file: page.jsx:38 ~ const_temp=temp.forEach ~ data:",
        //     data
        //   );
        //   if (data.id == cardId) {
        //     alert(
        //       "cardid, id, designId : " +
        //         cardId +
        //         " " +
        //         data.id +
        //         " " +
        //         designId
        //     );

        //     let tempObj = { ...data };
        //     const { designs, ...res } = tempObj;

        //     const __temp = designs.filter((design) => {
        //       if (design.id == designId) {
        //         // alert("same same");
        //         return false;
        //       } else {
        //         // alert("not same same");
        //         return true;
        //       }
        //     });

        //     tempObj.designs = __temp;

        //     console.log(
        //       "🚀 ~ file: page.jsx:53 ~ const_temp=temp.map ~ tempObj:",
        //       tempObj
        //     );

        //     return tempObj;

        //     // const __temp = data.designs.filter((design) => {
        //     //   design.id != designId;
        //     // });

        //     // console.log(
        //     //   "🚀 ~ file: page.jsx:36 ~ const__temp=data.designs.filter ~ __temp:",
        //     //   __temp
        //     // );
        //   } else {
        //     return data;
        //   }
        // });
        // console.log(
        //   "🚀 ~ file: page.jsx:73 ~ const_temp=temp.forEach ~ _temp:",
        //   _temp
        // );

        // dispatch({
        //   type: "adminPendingReviewsData_action",
        //   payload: [..._temp],
        // });
      }
      // update the data in all designs reducer
      //   const temp = [...designsInfo_selector];
      dispatch({
        type: "designsInfo_action",
        payload: [
          ...designsInfo_selector,
          { ...selectedDesignCardInfo_selector },
        ],
      });
    } else {
      const answer = confirm("Are you sure you want to decline this design ?");
      if (answer) {
        removeADesignFromAdminPendingReviews();

        // alert("declined");
        // const temp = [...adminPendingReviewsData_selector];
        // console.log(
        //   "🚀 ~ file: page.jsx:32 ~ approveOrRejectHandler ~ temp:",
        //   temp
        // );
        // // const temp = adminPendingReviewsData_selector.filter()
        // const _temp = temp.map((data) => {
        //   console.log(
        //     "🚀 ~ file: page.jsx:38 ~ const_temp=temp.forEach ~ data:",
        //     data
        //   );
        //   if (data.id == cardId) {
        //     alert(
        //       "cardid, id, designId : " +
        //         cardId +
        //         " " +
        //         data.id +
        //         " " +
        //         designId
        //     );

        //     let tempObj = { ...data };
        //     const { designs, ...res } = tempObj;

        //     const __temp = designs.filter((design) => {
        //       if (design.id == designId) {
        //         // alert("same same");
        //         return false;
        //       } else {
        //         // alert("not same same");
        //         return true;
        //       }
        //     });

        //     tempObj.designs = __temp;

        //     console.log(
        //       "🚀 ~ file: page.jsx:53 ~ const_temp=temp.map ~ tempObj:",
        //       tempObj
        //     );

        //     return tempObj;

        //     // const __temp = data.designs.filter((design) => {
        //     //   design.id != designId;
        //     // });

        //     // console.log(
        //     //   "🚀 ~ file: page.jsx:36 ~ const__temp=data.designs.filter ~ __temp:",
        //     //   __temp
        //     // );
        //   } else {
        //     return data;
        //   }
        // });
        // console.log(
        //   "🚀 ~ file: page.jsx:73 ~ const_temp=temp.forEach ~ _temp:",
        //   _temp
        // );

        // dispatch({
        //   type: "adminPendingReviewsData_action",
        //   payload: [..._temp],
        // });
      }
    }
  };

  return (
    <div
      aria-label="design complete details"
      className={`${""} w-full h-full flex items-center justify-center gap-5 flex-col `}
    >
      <div
        aria-label="image and detils and download button container"
        className={`${""} w-full h-[70%] flex items-center justify-center gap-5 `}
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
      <div
        aria-label="approve or reject button parent container"
        className={`${""} w-full h-[20%] flex items-center justify-center gap-5 `}
      >
        <div
          aria-label="approve reject button container"
          className={`${""} w-[400px] h-full flex items-center justify-center gap-5 `}
        >
          {designReviewEachButtons.map((btn, i) => {
            return (
              <button
                role={btn.name + "button"}
                className={`${""} border-2 px-5 py-2 `}
                onClick={() => approveOrRejectHandler(btn.name)}
              >
                {btn.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
