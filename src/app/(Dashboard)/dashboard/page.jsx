/* The code is a React component named `FirstPage`. It imports various components and hooks from
different files and libraries. It uses the `useSelector` hook from `react-redux` to access the state
of the application and retrieve the `name` property from the `sidebarSelectedButton_reducer` slice
of the state. */
"use client";

import Model from "@/sections/dashboard/model/Model";
import MainContainer from "@/sections/dashboard/rightSide/mainContainer/MainContainer";
import CreateADesign from "@/sections/dashboard/rightSide/mainContainer/SelectedButtonComponents/Others/Designer/CreateADesign";
import Designs from "@/sections/dashboard/rightSide/mainContainer/SelectedButtonComponents/Common/Designs";
import Payments from "@/sections/dashboard/rightSide/mainContainer/SelectedButtonComponents/Others/User/Payments";
import PurchasedDesigns from "@/sections/dashboard/rightSide/mainContainer/SelectedButtonComponents/Others/User/PurchasedDesigns";
import Support from "@/sections/dashboard/rightSide/mainContainer/SelectedButtonComponents/Others/Support";
import Title from "@/sections/dashboard/rightSide/mainContainer/Title";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import YourDesigns from "@/sections/dashboard/rightSide/mainContainer/SelectedButtonComponents/Others/Designer/YourDesigns";
import Users from "@/sections/dashboard/rightSide/mainContainer/SelectedButtonComponents/Admin/Users";
import ReviewDesigns from "@/sections/dashboard/rightSide/mainContainer/SelectedButtonComponents/Admin/ReviewDesigns/ReviewDesigns";

const FirstPage = () => {
  const dispatch = useDispatch();

  /* The code `const sidebarSelectedButton_selector = useSelector((state) => {
      const { sidebarSelectedButton_reducer } = state;
      return sidebarSelectedButton_reducer;
    });` is using the `useSelector` hook from the `react-redux` library to access the state of the
  application and retrieve the `sidebarSelectedButton_reducer` slice of the state. */
  const sidebarSelectedButton_selector = useSelector((state) => {
    const { sidebarSelectedButton_reducer } = state;
    return sidebarSelectedButton_reducer;
  });
  console.log(
    "🚀 ~ file: page.jsx:16 ~ constsidebarSelectedButton_selector=useSelector ~ sidebarSelectedButton_selector:",
    sidebarSelectedButton_selector
  );

  const { name } = sidebarSelectedButton_selector;

  // the parent of it is in layout of the dashboard
  // this is basically the right side of the sidebar of the dashboard route

  // const showModelDesignerCreateBoolean_selector = useSelector((state) => {
  //   const { showModelDesignerCreateBoolean_reducer } = state;
  //   return showModelDesignerCreateBoolean_reducer;
  // });

  // useEffect(() => {
  //   name === "createADesign" &&
  //     dispatch({ type: "showModelDesignerCreateBooleanTrue_action" });
  // }, [name]);

  return (
    <div
      aria-label="mainContainer"
      className={`${""} w-full h-full flex items-center justify-start gap-5 flex-wrap overflow-y-auto`}
    >
      {/* <MainContainer /> */}
      {name === "designs" && <Designs title="Our Designs" />}
      {name === "purchasedDesigns" && (
        <PurchasedDesigns title="Purchased Designs" />
      )}
      {name === "payments" && <Payments title="Payments" />}
      {name === "support" && <Support title="Support" />}
      {name === "createADesign" && <CreateADesign title="Create A Design" />}
      {name === "yourDesigns" && <YourDesigns title="Your Designs" />}
      {name === "adminUsers" && <Users title="All Users" />}
      {name === "reviewDesigns" && <ReviewDesigns title="Review Design" />}
      
    </div>
  );
};

export default FirstPage;
