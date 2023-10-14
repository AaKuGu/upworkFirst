import React from "react";
import { useSelector } from "react-redux";

const Role = () => {
  const loggedInUserDetails_selector = useSelector((state) => {
    const { loggedInUserDetails_reducer } = state;
    return loggedInUserDetails_reducer;
  });

  const { role } = loggedInUserDetails_selector;

  return <div>{role.charAt(0).toUpperCase() + role.slice(1)}</div>;
};

export default Role;
