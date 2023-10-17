import React from "react";
import UserCard from "./UserCard";

const UserContainerComponent = ({ sendDataToUserContainerComponent }) => {
  const { role, label, data, noOfUsers } = sendDataToUserContainerComponent;
  console.log(
    "🚀 ~ file: UserContainerComponent.jsx:6 ~ UserContainerComponent ~ data:",
    data
  );

  //   console.log(
  //     "🚀 ~ file: UserContainerComponent.jsx:4 ~ UserContainerComponent ~ sendDataToUserContainerComponent:",
  //     sendDataToUserContainerComponent
  //   );

  //   console.log(
  //     "🚀 ~ file: UserContainerComponent.jsx:10 ~ UserContainerComponent ~ role:",
  //     role
  //   );
  return (
    <div
      aria-label="normal users container"
      className={`${""} w-full h-[80%] flex items-center justify-center gap-5 flex-col px-10  `}
    >
      <div
        aria-label="no of users"
        className={`${""} w-full h-[10%] flex items-center justify-start gap-5  `}
      >
        <div
          aria-label="pending approval number container"
          className={`${""} w-full h-[10%] flex items-center justify-start gap-3 `}
        >
          <div aria-label="title" className={`${""}  text-blue-500`}>
            {label} : 
          </div>
          <div aria-label="pending approval number" className={`${""} `}>
            {noOfUsers}
          </div>
        </div>
        {/* <div
          aria-label="no of users container child"
          className={`${""} w-[200px] h-full flex items-center justify-start px-5 gap-5 border-2 `}
        >
          <div aria-label="title" className={`${""} `}>
            {label}
          </div>
          <div aria-label="no of users count" className={`${""} `}>
            {noOfUsers}
          </div>
        </div> */}
      </div>
      <div
        aria-label="normal users container"
        className={`${""} w-full h-[80%] flex items-center justify-start rounded-lg gap-2 flex-col  overflow-y-auto border-2 border-purple-600`}
      >
        {data.map((user, i) => {
          return <UserCard user={user} key={i} serialNo={i + 1} />;
        })}
      </div>
    </div>
  );
};

export default UserContainerComponent;
