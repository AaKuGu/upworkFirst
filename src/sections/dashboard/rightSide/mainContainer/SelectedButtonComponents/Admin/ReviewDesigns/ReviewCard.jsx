import Model from "@/sections/dashboard/model/Model";
import React, { useState } from "react";
import { GrView } from "react-icons/gr";
import ViewUserDetails from "../ViewUserDetails";
import { useRouter } from "next/navigation";

const ReviewCard = ({ data }) => {
  const [designerDetailsBoolean, setDesignerDetailsBoolean] = useState(false);
  const [ReviewPerDesigner, setReviewPerDesigner] = useState(false);

  const router = useRouter();

  const { userDetails, designs, id } = data;
  return (
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
  );
};

export default ReviewCard;
