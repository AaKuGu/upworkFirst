import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { LiaSignOutAltSolid } from "react-icons/lia";

const SignInOrOutButton = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const loggedInUserDetails_selector = useSelector((state) => {
    const { loggedInUserDetails_reducer } = state;
    return loggedInUserDetails_reducer;
  });
  console.log(
    "🚀 ~ file: SignInOrOutButton.jsx:14 ~ constloggedInUserDetails_selector=useSelector ~ loggedInUserDetails_selector:",
    loggedInUserDetails_selector
  );

  return (
    <>
      {/* {loggedInUserDetails_selector?.state ? ( */}
      {/* <button
          role="sign Out"
          className={`${""} border-[3px] shadow-md shadow-slate-400 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 text-white font-bold w-auto px-5 py-2 hover:from-green-500 hover:to-purple-500 duration-600 flex items-center justify-center gap-3`}
          onClick={() => {
            toast.success("Signed out successfully");
            dispatch({
              type: "loggedInUserDetails_action",
              payload: null,
            });
            router.push("/");
          }}
        >
          <div aria-label="icon" className={`${""}  text-lg`}>
            <LiaSignOutAltSolid />
          </div>
          <div aria-label="text" className={`${""} `}>
            Sign Out
          </div>
        </button> */}
      {/* ) : ( */}
      <button
        role="sign In"
        className={`${""}  shadow-lg border-b-2 border-gray-300 rounded-lg  text-gray-700 font-bold w-auto px-5 py-2 duration-600 flex items-center justify-center gap-3 bg-white`}
        onClick={() => {
          dispatch({
            type: "showSignInComponentBoolean_action",
          });
        }}
      >
        <div aria-label="icon" className={`${""}  text-lg text-green-500 font-bold`}>
          <LiaSignOutAltSolid />
        </div>
        <div aria-label="text" className={`${""} `}>
          Sign In
        </div>
      </button>
      {/* )} */}
    </>
  );
};

export default SignInOrOutButton;
