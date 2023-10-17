import {
  sidebarButtons,
  sidebarButtonsAdmin,
  sidebarButtonsDesigner,
  sidebarButtonsUser,
} from "@/constants/constant";
import { usePathname, useRouter } from "next/navigation";
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = () => {
  // const [showButtonName, setShowButtonName] = useState(false);
  const [hoveredButtonDetails, setHoveredButtonDetails] = useState({
    id: "",
  });

  const dispatch = useDispatch();
  const pathname = usePathname();
  const router = useRouter();
  // console.log("🚀 ~ file: Sidebar.jsx:9 ~ Sidebar ~ pathname:", pathname);

  const sidebarSelectedButton_selector = useSelector((state) => {
    const { sidebarSelectedButton_reducer } = state;
    return sidebarSelectedButton_reducer;
  });
  console.log(
    "🚀 ~ file: Sidebar.jsx:11 ~ constsidebarSelectedButton_selector=useSelector ~ sidebarSelectedButton_selector:",
    sidebarSelectedButton_selector
  );

  const buttonHandler = (buttonData) => {
    dispatch({
      type: "sidebarSelectedButton_action",
      payload: buttonData,
    });
  };

  //   const sidebarButtons = [
  //     {
  //       id: 1,
  //       label: "Designs",
  //       name: "designs",
  //     },
  //     {
  //       id: 2,
  //       label: "Purchased Designs",
  //       name: "purchasedDesigns",
  //     },
  //     {
  //       id: 3,
  //       label: "Payments",
  //       name: "payments",
  //     },
  //     {
  //       id: 4,
  //       label: "Support",
  //       name: "support",
  //     },
  //   ];

  const loggedInUserDetails_selector = useSelector((state) => {
    const { loggedInUserDetails_reducer } = state;
    return loggedInUserDetails_reducer;
  });

  const { role } = loggedInUserDetails_selector;
  console.log("🚀 ~ file: Sidebar.jsx:57 ~ Sidebar ~ role:", role);

  const whatButtons = useMemo(() => {
    if (role === "designer") return sidebarButtonsDesigner;
    if (role === "user") return sidebarButtonsUser;
    if (role === "admin") return sidebarButtonsAdmin;
  }, [role]);

  return (
    <div
      aria-label="sidebar container"
      className={`${""} w-full h-full flex items-center justify-center gap-5 flex-col border-[1px] border-gray-400 `}
    >
      <div
        aria-label="buttons container"
        className={`${""} w-auto h-auto flex items-center justify-center gap-14 flex-col `}
      >
        {whatButtons.map((btn, i) => {
          return (
            <button
              role="Designs button"
              key={i}
              className={`${
                sidebarSelectedButton_selector.id === i + 1 && "bg-gray-300"
              } shadow-xl shadow-gray-300 px-2 py-2  w-full rounded-lg   font-bold text-2xl text-purple-600 font relative duration-300 hover:bg-purple-200
              `}
              // style={{ boxShadow: "2px 2px 5px #9FB9DF" }}
              onClick={() => {
                // alert("button clicked");
                buttonHandler(btn);
                if (pathname !== "/dashboard") {
                  router.push("/dashboard");
                }
              }}
              onMouseEnter={() => {
                setHoveredButtonDetails({ id: i });
              }}
              onMouseLeave={() => {
                setHoveredButtonDetails({ id: null });
              }}
            >
              {hoveredButtonDetails.id === i && (
                <div aria-label="button name" className={`${""} absolute left-[110%] rounded-lg text-sm top-0 shadow-sm h-full shadow-purple-200 px-5 py-2 bg-white text-purple-600  min-w-[150px] flex items-center justify-center gap-5 z-50`}>
                  {btn?.label}
                </div>
              )}
              {btn?.icon}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
