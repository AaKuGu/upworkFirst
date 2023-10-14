import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useMemo } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const Model = ({ children, action, _width = "40%"}) => {
  console.log("🚀 ~ file: Model.jsx:8 ~ Model ~ action:", action);
  const dispatch = useDispatch();
  const router = useRouter();

  // alert("functionName : " + action.name);

  // reason i am doing following is that, the model component will accept action this is just for the corss button on the model , in order to close the opoened model, which was primarily focused for hte redux action name but might we can have the close functioinality by the react state as well that's why we are first checking there whether is the redux action which will be string and will not be equal to 'bound dispatchSetState" , and if it does then we will know that it is basically the setter state so foir such case we not dispatch rather we will action(false) ; do
  const isThisReactStateSetter = useMemo(() => {
    if (action.name === "bound dispatchSetState") {
      // alert("hallo bro");
      return true;
    } else {
      return false;
    }
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center gap-5 absolute top-0 left-0 z-[20] ">
      <div
        aria-label="model"
        className={`${""} w-full h-full flex items-center justify-center gap-5 absolute top-0 left-0 z-[21] bg-gray-200 opacity-70`}
      ></div>
      <div
        aria-label="model"
        className={`${""} h-[95%] flex items-center justify-center gap-5 absolute bg-white z-[22] rounded-lg flex-col`}
        style={{width : _width}}
      >
        {children}
        {/* <div aria-label="image container" className={`${""} `}>
          <Image src={image} width={400} height={300} className="rounded-lg" />
        </div>
        <div
          aria-label="button container"
          className={`${""} w-full h-auto flex items-center justify-center gap-5 `}
        >
          <button
            role="details button"
            className={`${""} border-2 px-5 py-2 `}
            onClick={() => {
              dispatch({
                type: "showModelBooleanFalse_action",
              });
              router.push(`/dashboard/design?id=${id}`);
            }}
          >
            Details
          </button>
        </div> */}
        {/* // following div is for the cross button and is absolutely positioned */}
        <div
          aria-label="cross button"
          className={`${""} w-auto h-auto flex items-center justify-center gap-5 p-3 absolute top-2 right-2 font-bold text-2xl cursor-pointer`}
          onClick={() => {
            if (isThisReactStateSetter) {
              action((prev) => false);
            } else {
              dispatch({
                type: action,
              });
            }
          }}
        >
          <AiOutlineCloseCircle />
        </div>
      </div>
    </div>
  );
};

export default Model;
