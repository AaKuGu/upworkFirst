import React from "react";
import { useSelector } from "react-redux";

const Role = () => {
  const loggedInUserDetails_selector = useSelector((state) => {
    const { loggedInUserDetails_reducer } = state;
    return loggedInUserDetails_reducer;
  });

  const { role } = loggedInUserDetails_selector;

  return (
    <div
      className="font-bold text-lg roboto text-gray-700 font"
      // style={{ textShadow: "2px 2px 4px blue" }}
    >
      {role.charAt(0).toUpperCase() + role.slice(1)}
    </div>
  );
};

export default Role;
