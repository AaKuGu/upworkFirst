"use client";

import Model from "@/sections/dashboard/model/Model";
import Sidebar from "@/sections/dashboard/sidebar/Sidebar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

const layout = ({ children }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const loggedInUserDetails_selector = useSelector((state) => {
    const { loggedInUserDetails_reducer } = state;
    return loggedInUserDetails_reducer;
  });
  console.log(
    "🚀 ~ file: layout.jsx:10 ~ constloggedInUserDetails_selector=useSelector ~ loggedInUserDetails_selector:",
    loggedInUserDetails_selector
  );

  const selectedDesignCardInfo_selector = useSelector((state) => {
    const { selectedDesignCardInfo_reducer } = state;
    return selectedDesignCardInfo_reducer;
  });

  const { state, image, id } = selectedDesignCardInfo_selector;
  // console.log(
  //   "🚀 ~ file: Model.jsx:12 ~ constselectedDesignCardInfo_selector=useSelector ~ selectedDesignCardInfo_selector:",
  //   selectedDesignCardInfo_selector
  // );

  const showModelBoolean_selector = useSelector((state) => {
    const { showModelBoolean_reducer } = state;
    return showModelBoolean_reducer;
  });

  if (loggedInUserDetails_selector?.state) {
    return (
      <div
        aria-label="dashboard layout"
        className={`${""} w-full h-full flex items-center justify-center border-[1px] border-gray-400 relative`}
      >
        <div
          aria-label="sidebar"
          className={`${""} w-[20%] h-full flex items-center justify-center gap-5 flex-col border-[1px] border-gray-400`}
        >
          <Sidebar />
        </div>
        <div
          aria-label="right side of the dashboard"
          className={`${""} border-[1px] border-gray-400 w-[80%] h-full flex items-center justify-start gap-5 flex-col`}
        >
          {children}
        </div>
        {showModelBoolean_selector && (
          <Model action="showModelBooleanFalse_action">
            <div aria-label="image container" className={`${""} `}>
              <Image
                src={image}
                width={400}
                height={300}
                className="rounded-lg"
              />
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
                  router.push(`/dashboard/design?designId=${id}`);
                }}
              >
                Details
              </button>
            </div>
          </Model>
        )}
      </div>
    );
  } else {
    router.push("/");
  }
};

export default layout;
