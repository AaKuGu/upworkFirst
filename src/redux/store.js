"use client";

import { configureStore } from "@reduxjs/toolkit";
import {
  showSignInComponentBoolean_reducer,
  //   userLoggedInBoolean_reducer,
  loggedInUserDetails_reducer,
  sidebarSelectedButton_reducer,
  purchasedDesignsData_reducer,
  showModelBoolean_reducer,
  selectedDesignCardInfo_reducer,
  allUsersDetails_reducer,
  createADesignData_reducer,
  designerApprovedDesignsData_reducer,
  designerPendingDesignsData_reducer,
  createAUserData_reducer,
  updateAUserData_reducer,
  // showModelDesignerCreateBoolean_reducer,
  adminPendingReviewsData_reducer,
  adminChooseDesignReview_reducer,
  designsInfo_reducer,
  loggedInUserId_reducer,
} from "./reducer";

export const store = configureStore({
  reducer: {
    showSignInComponentBoolean_reducer,
    // userLoggedInBoolean_reducer,
    loggedInUserDetails_reducer,
    sidebarSelectedButton_reducer,
    purchasedDesignsData_reducer,
    showModelBoolean_reducer,
    selectedDesignCardInfo_reducer,
    allUsersDetails_reducer,
    createADesignData_reducer,
    designerApprovedDesignsData_reducer,
    designerPendingDesignsData_reducer,
    createAUserData_reducer,
    updateAUserData_reducer,
    // showModelDesignerCreateBoolean_reducer,
    adminPendingReviewsData_reducer,
    adminChooseDesignReview_reducer,
    designsInfo_reducer,
    loggedInUserId_reducer,
  },
});
