import React, { useMemo } from "react";

const ViewUserDetails = ({ data }) => {
  console.log(
    "🚀 ~ file: ViewUserDetails.jsx:4 ~ ViewUserDetails ~ data:",
    data
  );

  const labelStyle = `w-[30%]`;
  const valueStyle = `w-[60%]`;

  const finalData = useMemo(() => {
    return [
      { value: data.name, label: "Name" },
      { value: data.email, label: "Email" },
      {
        value: data.phoneNumber,
        label: "Phone Number",
      },
      {
        value: data.country,
        label: "Country",
      },
      {
        value: data.city,
        label: "City",
      },
      {
        value: data.state,
        label: "State",
      },
      {
        value: data.role,
        label: "Role",
      },
    ];
  });

  return (
    <div
      aria-label="view user details container"
      className={`${""} w-full h-full flex items-center justify-center gap-5 flex-col px-5 overflow-auto`}
    >
      {/* <div
        aria-label="data container"
        className={`${""} w-[200px] h-full flex items-center justify-center gap-5 flex-col  overflow-auto`}
      > */}
      {finalData.map((data, i) => {
        return (
          <div
            aria-label="field container"
            className={`${""} w-full h-auto flex items-center justify-center gap-5 `}
            key={i}
          >
            <div aria-label="label" className={`${labelStyle} `}>
              {data.label}
            </div>
            <div aria-label="label value" className={`${valueStyle} `}>
              {data.value}
            </div>
          </div>
        );
      })}
      {/* </div> */}
    </div>
  );
};

export default ViewUserDetails;
