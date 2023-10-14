import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

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
      {loggedInUserDetails_selector?.state ? (
        <button
          role="sign Out"
          className={`${""} border-2 px-5 py-2 `}
          onClick={() => {
            toast.success("Signed out successfully");
            dispatch({
              type: "loggedInUserDetails_action",
              payload: null,
            });
            router.push("/");
          }}
        >
          Sign Out
        </button>
      ) : (
        <button
          role="sign In"
          className={`${""} border-2 px-5 py-2 `}
          onClick={() => {
            dispatch({
              type: "showSignInComponentBoolean_action",
            });
          }}
        >
          Sign In
        </button>
      )}
    </>
  );
};

export default SignInOrOutButton;
