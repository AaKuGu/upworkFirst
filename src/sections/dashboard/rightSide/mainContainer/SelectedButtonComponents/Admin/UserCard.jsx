import Model from "@/sections/dashboard/model/Model";
import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { GrDocumentUpdate, GrView } from "react-icons/gr";
import UpdateUserFormik from "./UpdateUser/UpdateUserFormik";
import { allUsersDetails_reducer } from "@/redux/reducer";
import { useDispatch, useSelector } from "react-redux";
import ViewUserDetails from "./ViewUserDetails";

const UserCard = ({ user, serialNo }) => {
  const dispatch = useDispatch();

  const [hoveredEmail, setHoveredEmail] = useState(false);
  const [updateUserBoolean, setUpdateUserBoolean] = useState(false);
  const [viewUserDetails, setViewUserDetails] = useState(false);

  console.log("🚀 ~ file: UserCard.jsx:4 ~ UserCard ~ user:", user);

  const allUsersDetails_selector = useSelector((state) => {
    const { allUsersDetails_reducer } = state;
    return allUsersDetails_reducer;
  });

  const { paid, email, name, role, id } = user;
  console.log("🚀 ~ file: UserCard.jsx:7 ~ UserCard ~ paid:", paid);
  console.log("🚀 ~ file: UserCard.jsx:7 ~ UserCard ~ role:", role);

  const deleteParticularUser = () => {
    const yesOrNo = confirm("Are you sure you want to delete");
    if (yesOrNo) {
      const dataAfterDeletion = allUsersDetails_selector.filter(
        (user) => user.id !== id
      );

      dispatch({
        type: "allUsersDetails_action",
        payload: [...dataAfterDeletion],
      });

      //   console.log(
      //     "🚀 ~ file: UserCard.jsx:24 ~ deleteParticularUser ~ dataAfterDeletion:",
      //     dataAfterDeletion
      //   );
    }
  };

  return (
    <div
      aria-label="user card container"
      className={`${""} w-full h-[50px] flex items-center justify-center   rounded-lg px-0`}
    >
      <div aria-label="serial no" className={`${""} w-[5%] `}>
        {serialNo + "."}
      </div>
      <div aria-label="name" className={`${""} w-[25%] `}>
        {name}
      </div>
      <div
        aria-label="email"
        className={`${
          hoveredEmail ? "overflow-x-auto" : "truncate"
        } w-[350px] h-[90%] flex items-center justify-start `}
        onMouseEnter={(e) => {
          setHoveredEmail(true);
        }}
        onMouseLeave={() => {
          setHoveredEmail(false);
        }}
      >
        {email}
      </div>
      <div aria-label="pay status" className={`${""} w-[10%] text-center `}>
        {role === "user" ? (paid ? "Paid" : "Un Paid") : ""}
      </div>
      <button
        role=""
        className={`${""} border-2 px-5 py-2 w-[17%]  h-auto flex items-center justify-center gap-5 text-xl `}
      >
        <div
          aria-label="update button container"
          className={`${""} `}
          onClick={() => {
            setUpdateUserBoolean(true);
          }}
        >
          <GrDocumentUpdate />
        </div>
        <div
          aria-label="delete"
          className={`${""} `}
          onClick={deleteParticularUser}
        >
          <AiFillDelete />
        </div>
        <div
          aria-label="view"
          className={`${""} `}
          onClick={() => {
            setViewUserDetails(true);
          }}
        >
          <GrView />
        </div>
      </button>

      {updateUserBoolean && (
        <Model action={setUpdateUserBoolean}>
          <div
            aria-label="create user title container"
            className={`${""} w-full h-[10%] flex items-center justify-center gap-5 `}
          >
            Create A User
          </div>
          <UpdateUserFormik user={user} />
        </Model>
      )}

      {viewUserDetails && (
        <Model action={setViewUserDetails} _width="25%">
          <div
            aria-label="create user title container"
            className={`${""} w-full h-[10%] flex items-center justify-center gap-5 `}
          >
            View User Details
          </div>
          <ViewUserDetails data={user} />
        </Model>
      )}
    </div>
  );
};

export default UserCard;
