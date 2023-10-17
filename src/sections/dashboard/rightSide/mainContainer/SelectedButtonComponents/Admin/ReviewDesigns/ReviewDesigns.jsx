import React, { useEffect, useMemo } from "react";
import Title from "../../../Title";
import { useSelector } from "react-redux";
import ReviewCard from "./ReviewCard";

const ReviewDesigns = ({ title }) => {
  const adminPendingReviewsData_selector = useSelector((state) => {
    const { adminPendingReviewsData_reducer } = state;
    return adminPendingReviewsData_reducer;
  });
  console.log(
    "🚀 ~ file: ReviewDesigns.jsx:11 ~ constadminPendingReviewsData_selector=useSelector ~ adminPendingReviewsData_selector:",
    adminPendingReviewsData_selector
  );

  const totalPendingReviews = useMemo(() => {
    let _length = 0;

    adminPendingReviewsData_selector.forEach((eachCardData, i) => {
      _length += eachCardData.designs.length;
    });

    return _length;
  }, [adminPendingReviewsData_selector]);

  useEffect(() => {});

  return (
    <div className="w-full h-full flex-col flex items-center justify-center gap-5 ">
      <Title title={title} />
      <div
        aria-label="designcard map container"
        className={`${""} w-full h-[85%] flex-wrap flex items-center justify-center gap-5 overflow-y-auto bg-red-500 flex-col`}
      >
        <div
          aria-label="pending reviews number container"
          className={`${""} w-full h-[10%] flex items-center justify-center gap-5 `}
        >
          <div
            aria-label="pending reviews main container"
            className={`${""} w-[200px] h-full flex items-center justify-center gap-5 border-2 border-gray-400`}
          >
            <div aria-label="label" className={`${""} `}>
              Total Pending Reviews :
            </div>
            <div aria-label="pending reviews number" className={`${""} `}>
              {totalPendingReviews}
            </div>
          </div>
        </div>
        <div
          aria-label="pending reviews actual container"
          className={`${""} w-full h-[80%] flex items-center justify-center gap-5 flex-col px-5`}
        >
          {adminPendingReviewsData_selector.map((data, i) => {
            if (data.designs.length > 0) {
              return <ReviewCard data={data} key={i} />;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default ReviewDesigns;
