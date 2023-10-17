import React, { useMemo, useState } from "react";
import Title from "../../Title";
import { useSelector } from "react-redux";
import UserCard from "./UserCard";
import UserContainerComponent from "./UserContainerComponent";
import Model from "@/sections/dashboard/model/Model";
import CreateUserFormik from "./CreateUser/CreateUserFormik";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { FcBusinessman } from "react-icons/fc";

const Users = ({ title }) => {
  const [whichUser, setWhichUser] = useState("normalUsers");
  const [createUserModelBoolean, setCreateUserModelBoolean] = useState(false);
  const [createNormalUserOrDesigner, setCreateNormalUserOrDesigner] =
    useState("user");

  console.log(
    "🚀 ~ file: Users.jsx:12 ~ Users ~ createNormalUserOrDesigner:",
    createNormalUserOrDesigner
  );

  const allUsersDetails_selector = useSelector((state) => {
    const { allUsersDetails_reducer } = state;
    return allUsersDetails_reducer;
  });

  const finalUsers = useMemo(() => {
    const normalUsers = allUsersDetails_selector.filter(
      (user) => user.role === "user"
    );

    const designerUsers = allUsersDetails_selector.filter(
      (user) => user.role === "designer"
    );

    return { normalUsers, designerUsers };
  }, [allUsersDetails_selector]);

  const { normalUsers, designerUsers } = finalUsers;
  console.log("🚀 ~ file: Users.jsx:38 ~ Users ~ normalUsers:", normalUsers);

  const usersData = [
    {
      id: 1,
      name: "normalUsers",
      label: "Normal Users",
      icon: <AiOutlineUserSwitch />,
    },
    {
      id: 2,
      name: "designerUsers",
      label: "Designer Users",
      icon: <FcBusinessman />,
    },
  ];

  const sendDataToUserContainerComponent = useMemo(
    (state) => {
      if (whichUser === "designerUsers") {
        return {
          role: "designer",
          data: designerUsers,
          label: "Designer Users",
          noOfUsers: designerUsers.length,
        };
      }
      if (whichUser === "normalUsers") {
        return {
          role: "user",
          data: normalUsers,
          label: "Normal Users",
          noOfUsers: normalUsers.length,
        };
      }
    },
    [whichUser, allUsersDetails_selector]
  );

  return (
    <div className="w-full h-full flex-col flex items-center justify-center gap-5 ">
      <Title title={title} />
      <div
        aria-label="designcard map container"
        className={`${""} w-full h-[85%] flex items-center justify-center  overflow-y-auto flex-col`}
      >
        <button
          role="create a user "
          className={`${""}  shadow-lg border-b-2 border-gray-300 rounded-lg  text-gray-700 font-bold w-auto px-5 py-2 duration-600 flex items-center justify-center gap-3 bg-white`}
          onClick={() => {
            setCreateUserModelBoolean(true);
          }}
        >
          Create A User
        </button>
        <div
          aria-label="normal user or designer user bar container"
          className={`${""} w-full h-[10%] flex items-center justify-between px-10 gap-5  text-gray-600`}
        >
          {usersData.map((user, i) => {
            return (
              <button
                role={user.name + "button"}
                className={`${
                  user.name === whichUser && "bg-gray-200"
                } border-2 bg-gray-200 hover:bg-gray-300 rounded-lg px-5 py-2 duration-100 w-auto h-fit flex items-center justify-center gap-5 `}
                // className={`${
                //   whichButton === btn.name && "border-2 border-purple-600"
                // } bg-gray-200 hover:bg-gray-300 rounded-lg px-5 py-3 duration-100 w-auto h-fit flex items-center justify-center gap-5  `}
                key={i}
                onClick={() => {
                  setWhichUser(user.name);
                }}
              >
                <div
                  aria-label="icon"
                  className={`${""} text-3xl text-blue-600`}
                >
                  {user.icon}
                </div>
                <div
                  aria-label="label"
                  className={`${""} font-bold text-gray-700 `}
                >
                  {user.label}
                </div>
              </button>
            );
          })}
        </div>

        <UserContainerComponent
          sendDataToUserContainerComponent={sendDataToUserContainerComponent}
        />

        {/* {designsInfo.map((design, i) => {
          return <DesignCard design={design} />;
        })} */}
      </div>

      {/* when adim wants to create an account for user then the following will be shown up */}
      {createUserModelBoolean && (
        <Model action={setCreateUserModelBoolean}>
          <div
            aria-label=""
            className={`${""} w-full h-full flex items-center justify-center gap-5 bg-red-500 flex-col `}
          >
            <div
              aria-label="create user title container"
              className={`${""} w-full h-[10%] flex items-center justify-center gap-5 `}
            >
              Create A User
            </div>
            {/* <select
              onChange={(e) => {
                setCreateNormalUserOrDesigner(e.target.value);
              }}
              value={createNormalUserOrDesigner}
            >
              <option value="user">Normal User</option>
              <option value="designer">Designer User</option>
            </select> */}

            <CreateUserFormik />
          </div>
        </Model>
      )}
    </div>
  );
};

export default Users;
