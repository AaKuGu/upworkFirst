import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { MdLooks } from "react-icons/md";

const DesignCard = ({
  design,
  designId = null,
  cardId = null,
  userId = null,
}) => {
  const [grayForeground, setForeground] = useState(false);
  const [lovedDesign, setLovedDesign] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const selectedDesignCardInfo_selector = useSelector((state) => {
    const { selectedDesignCardInfo_reducer } = state;
    return selectedDesignCardInfo_reducer;
  });

  return (
    <div
      aria-label="designCard"
      className={`${""} w-[320px] h-auto py-2 flex items-center justify-start gap-2 flex-col  rounded-lg  shadow-xl shadow-gray-300  bg-white hover:translate-y-[-5px] duration-500 `}
      // style={{ boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)" }}
      onMouseEnter={() => {
        setForeground(true);
      }}
      onMouseLeave={() => {
        setForeground(false);
      }}
      /* The `onClick` event handler is triggered when the user clicks on the `DesignCard` component.
      When this happens, it dispatches an action to the Redux store. The action type is
      "selectedDesignCardInfo_action" and the payload is an object containing the `design` data.
      This action is typically used to update the state in the Redux store with the selected design
      card information. */
      onClick={() => {
        dispatch({
          type: "selectedDesignCardInfo_action",
          payload: { ...design },
        });
      }}
    >
      <div
        aria-label="info & like button bar"
        className={`${""} w-full h-[50px] flex items-center justify-around gap-5 py-2`}
      >
        <div
          aria-label="title"
          className={`${""} roboto font-bold text-gray-600`}
        >
          {design.name}
        </div>
        <div
          aria-label="like and likesCount"
          className={`${""} w-auto h-auto flex items-center justify-center gap-5 `}
        >
          <div
            aria-label="like button"
            className={`${
              lovedDesign && "text-red-500"
            } w-auto h-auto flex items-center justify-center gap-5 bg-gray-200 px-2 py-2 rounded-lg text-[25px] hover:bg-gray-300`}
            onClick={() => {
              setLovedDesign(!lovedDesign);
            }}
          >
            {lovedDesign ? <AiFillHeart /> : <AiOutlineHeart />}
          </div>
          <div aria-label="noOfcounts" className={`${""} gabarito`}>
            {design.likesCount}
          </div>
        </div>
      </div>
      <div
        aria-label="design image container"
        className={`${""} rounded-lg w-full h-[80%] flex items-center justify-center gap-5 `}
      >
        <div
          aria-label="image exact height width container"
          className={`${""} w-[280px] h-[330px] flex items-center justify-center relative`}
        >
          <Image
            width={280}
            height={330}
            src={design.image}
            className="rounded-lg min-h-[330px] relative z-[0]"
          />
          {grayForeground && (
            <>
              <div
                aria-label="gray foreground div"
                className={`${""} w-full h-full absolute z-[10] bg-gray-500 opacity-50 flex items-center justify-center rounded-lg`}
              />
              <div
                aria-label="gray foreground div"
                className={`${""} w-full h-full absolute z-[12] flex items-center justify-center `}
              >
                <button
                  role="purchase this design on design foreground"
                  className={`${""} shadow-sm shadow-gray-400 px-2 py-2 bg-white flex items-center justify-center rounded-lg gap-2 duration-300`}
                  onClick={() => {
                    if (pathname === "/dashboard/designReview") {
                      router.push(
                        `/dashboard/designReview/designReviewEach?cardId=${cardId}&userId=${userId}&designId=${designId}`
                      );
                    } else
                      dispatch({
                        type: "showModelBooleanTrue_action",
                      });
                  }}
                >
                  <div
                    aria-label="icon"
                    className={`${""} text-purple-600 bg-purple-300 p-1 font-bold rounded-lg`}
                  >
                    <MdLooks />
                  </div>
                  <div
                    aria-label=""
                    className={`${""} roboto font-bold text-gray-700 `}
                  >
                    View
                  </div>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DesignCard;
