"use client";

import SignIn from "@/sections/firstPage/SignIn";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const FirstPage = () => {
  //the following selector will result true or false , whether to show signin component or not
  const showSignInComponentBoolean_selector = useSelector((state) => {
    const { showSignInComponentBoolean_reducer } = state;
    return showSignInComponentBoolean_reducer;
  });
  // console.log(
  //   "🚀 ~ file: page.js:12 ~ constshowSignInComponentBoolean_selector=useSelector ~ showSignInComponentBoolean_selector:",
  //   showSignInComponentBoolean_selector
  // );
  return <div>{showSignInComponentBoolean_selector && <SignIn />}</div>;
};

export default FirstPage;
