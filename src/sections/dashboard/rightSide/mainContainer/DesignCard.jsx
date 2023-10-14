import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { GrView } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";

const DesignCard = ({
  design,
  cameFrom = null,
  cardId = null,
  userId = null,
  designId = null,
}) => {
  const [grayForeground, setForeground] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <div
      aria-label="designCard"
      className={`${""} w-[220px] h-[220px] flex items-center justify-center gap-5 flex-col  rounded-lg relative`}
      onMouseEnter={() => {
        setForeground(true);
      }}
      onMouseLeave={() => {
        setForeground(false);
      }}
      onClick={() => {
        dispatch({
          type: "selectedDesignCardInfo_action",
          payload: { ...design },
        });
      }}
    >
      <div
        aria-label="design image container"
        className={`${""} rounded-lg w-full h-[80%] flex items-center justify-center gap-5 `}
      >
        <Image
          width={200}
          height={200}
          src="/designImage.png"
          className="rounded-lg"
        />
      </div>

      {grayForeground && (
        <>
          <div
            aria-label="gray foreground div"
            className={`${""} w-full h-full absolute z-[10] bg-gray-200 opacity-50 flex items-center justify-center rounded-lg`}
          />
          <div
            aria-label="gray foreground div"
            className={`${""} w-full h-full absolute z-[12] flex items-center justify-center `}
          >
            <button
              role="purchase this design on design foreground"
              className={`${""} border-2 px-5 py-2 bg-gray-300 flex items-center justify-center rounded-lg gap-2`}
              onClick={() => {
                if (cameFrom === "cameFromPreviewDesign") {
                  router.push(
                    `/dashboard/design?cardId=${cardId}&userId=${userId}&designId=${designId}`
                  );
                } else {
                  dispatch({
                    type: "showModelBooleanTrue_action",
                  });
                }
              }}
            >
              <div aria-label="" className={`${""} `}>
                View
              </div>
              <div aria-label="icon" className={`${""} `}>
                <GrView />
              </div>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default DesignCard;
