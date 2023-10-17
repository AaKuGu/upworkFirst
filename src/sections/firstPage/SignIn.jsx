import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const SignIn = ({}) => {
  const [emailOrPhone, setEmailOrPhone] = useState("email");
  console.log("🚀 ~ file: SignIn.jsx:7 ~ SignIn ~ emailOrPhone:", emailOrPhone);

  // styles

  const emailOrPhoneNumberStyles = `px-5 py-2 w-[200px] text-purple-700 border-2 border-b-2 shadow-lg border-white font-bold rounded-lg hover:bg-gray-200 flex items-center justify-center gap-3`;

  const dispatch = useDispatch();
  const router = useRouter();

  const loggedInUserDetails_selector = useSelector((state) => {
    const { loggedInUserDetails_reducer } = state;
    return loggedInUserDetails_reducer;
  });
  console.log(
    "🚀 ~ file: SignIn.jsx:19 ~ constloggedInUserDetails_selector=useSelector ~ loggedInUserDetails_selector:",
    loggedInUserDetails_selector
  );
  const allUsersDetails_selector = useSelector((state) => {
    const { allUsersDetails_reducer } = state;
    return allUsersDetails_reducer;
  });
  console.log(
    "🚀 ~ file: SignIn.jsx:23 ~ constallUsersDetails_selector=useSelector ~ allUsersDetails_selector:",
    allUsersDetails_selector
  );

  //changesToMakeUpwork

  const initialValues = {
    // password: "",
    password: "",
    // email: "",
    email: "",
    phoneNumber: "",
  };

  const validationSchema = Yup.object({
    email:
      emailOrPhone === "email" &&
      Yup.string()
        .required("email is required")
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          "Invalid email format"
        ),
    phoneNumber:
      emailOrPhone === "phone" &&
      Yup.string()
        .min(10, "Minimum 10 numbers are required")
        .max(10, "maximum 10 numbers are required")
        .required("Phone number is required"),

    password: Yup.string().required("Password is required"),
  });

  //   const validationSchema = Yup.object.shape({
  //     email:
  //       emailOrPhone === "email" &&
  //       Yup.string().required("email is required").email(),
  //     phoneNumber:
  //       emailOrPhone === "phone" &&
  //       Yup.string()
  //         .test("no-e", "The letter 'e' is not allowed", (value) => {
  //           return value ? !value.includes("e") : true;
  //         })
  //         .min(10, "Minimum 10 numbers are required")
  //         .max(10, "maximum 10 numbers are required")
  //         .required("Phone number is required"),

  //     password: Yup.string().required("Password is required"),
  //   });

  const onSubmit = (values, { resetForm }) => {
    // alert("submit is ruuning")

    console.log("🚀 ~ file: SignIn.jsx:30 ~ onSubmit ~ values:", values);
    // alert("submit is running");
    // Object.entries(values).map(([key, value]) => {
    //   console.log("🚀 ~ file: SignIn.jsx:35 ~ Object.entries ~ key:", key);
    //   console.log("🚀 ~ file: SignIn.jsx:33 ~ Object.entries ~ value:", value);

    //   if (value === "") {
    //     // alert("key" + key);
    //     //   // console.log("key : ", key);
    //     delete values[key];
    //     console.log("🚀 ~ file: SignIn.jsx:88 ~ Object.entries ~ key:", key);
    //     console.log(
    //       "🚀 ~ file: SignIn.jsx:82 ~ Object.entries ~ values:",
    //       values
    //     );

    //     // if (key === "email" || key === "phoneNumber") {
    //     //   alert("key is this" + key);
    //     // }

    //     //   // if (key === "phoneNumber") {
    //     //   //   alert("phone number is this");
    //     //   // } else if (key === "email") {
    //     //   //   alert("email is this");
    //     //   // }

    //     //   // if (key !== "password") {
    //     //   //   alert("this is working");
    //     //   //   const user = allUsersDetails_selector.find(
    //     //   //     (dbUser) => dbUser[key] === value
    //     //   //   );
    //     //   //   console.log(
    //     //   //     "🚀 ~ file: SignIn.jsx:87 ~ Object.entries ~ user:",
    //     //   //     user
    //     //   //   );
    //   }

    //   //   dispatch({
    //   //     type: "loggedInUserDetails_action",
    //   //     payload: { ...loggedInUserDetails_selector, state: true },
    //   //   });
    //   //   toast.success("Logged In Successfully");
    //   //   router.push("/dashboard");
    //   // }
    //   // alert("hallo");
    // });
    Object.entries(values).map(([key, value]) => {
      console.log("🚀 ~ file: SignIn.jsx:127 ~ Object.entries ~ key:", key);
      console.log("🚀 ~ file: SignIn.jsx:125 ~ Object.entries ~ value:", value);
      if (value === "") {
        delete values[key];
      }
    });

    console.log("value sbro : ", values);

    // const finalKeys = Object.keys(values);
    // console.log("🚀 ~ file: SignIn.jsx:135 ~ onSubmit ~ finalKeys:", finalKeys);
    Object.entries(values).forEach(([key, value]) => {
      console.log("🚀 ~ file: SignIn.jsx:139 ~ Object.entries ~ key:", key);

      console.log("🚀 ~ file: SignIn.jsx:137 ~ Object.entries ~ value:", value);
      if (key === "email") {
        // alert("email : ", email);
        //backend logic is following ========================
        // const user = allUsersDetails_selector.find((dbUser) => {
        //   return dbUser.email === value;
        // });
        // console.log("🚀 ~ file: SignIn.jsx:145 ~ user ~ user:", user);
        // if (user && user.password === values.password) {
        //   alert("user is real");
        // }
        dispatch({
          type: "loggedInUserDetails_action",
          payload: { ...loggedInUserDetails_selector, state: true },
        });
        toast.success("Logged In Successfully");
        router.push("/dashboard");
      } else if (key === "phoneNumber") {
        // console.log("kolo", value);
        // alert("phoneNumber : ", phoneNumber);
        //backend logic ===========================
      }
      // if (key !== "password") {
      //   console.log("key : ", key);
      //   console.log("value : ", value);

      //   const user = allUsersDetails_selector.find((dbUser) => {
      //     return dbUser[key] === value;
      //   });
      //   // console.log("🚀 ~ file: SignIn.jsx:147 ~ user ~ user:", user);
      // }

      resetForm();
    });
  };

  return (
    <div className="w-[60%] h-[450px] flex items-center justify-center  rounded-lg shadow-lg shadow-purple-300 border-[2px] border-gray-300 overflow-hidden  ">
      {/* // left side */}
      <div
        aria-label="left side"
        className={`${""} w-[50%] h-full flex items-center justify-center gap-5 flex-col `}
      >
        <div
          aria-label="header"
          className={`${""} font-bold text-5xl text-center text-black flex items-center justify-center gap-4 `}
          // style={{ textShadow: "2px 2px 4px blue" }}
        >
          Sign In
        </div>

        {/* //choose between email or phone */}
        <div
          aria-label="choose email or phone number for login"
          className={`${""} w-full h-auto flex items-center justify-center gap-5 py-2 flex-col`}
        >
          {/* <select
          onClick={(e) => {
            setEmailOrPhone(e.target.value);
          }}
          className="px-5 py-2 border-2 rounded-lg"
        >
          <option value="email" className="px-5 py-2 w-[150px] bg-red-500">Email</option>
          <option value="phone">Phone Number </option>
        </select> */}

          <button
            role="email option"
            className={`${emailOrPhoneNumberStyles} `}
            onClick={() => setEmailOrPhone("email")}
          >
            <AiOutlineMail />
            Email{" "}
          </button>
          <button
            role="phone number"
            className={`${emailOrPhoneNumberStyles} `}
            onClick={() => setEmailOrPhone("phone")}
          >
            <AiOutlinePhone />
            Phone Number
          </button>
        </div>

        {/* //actual form */}
        <div
          aria-label="form container"
          className={`${""} w-full h-auto flex items-center justify-center gap-5 py-2 flex-col `}
        >
          <Formik
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            initialValues={initialValues}
          >
            <Form className="flex flex-col items-start justify-center gap-10 text-xl font-bold ">
              {emailOrPhone === "email" && (
                <div className="email flex flex-col      items-center justify-center gabarito gap-2">
                  <div
                    aria-label="input and error message"
                    className={`${""} email flex items-center justify-center gabarito gap-2`}
                  >
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className="@apply px-5 py-1  outline-none  cursor-default bg-transparent text-white border-b-2"
                      component="input"
                      autoFocus
                      placeholder="Enter Your Eamil..."
                    />
                  </div>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 "
                  />
                </div>
              )}
              {emailOrPhone === "phone" && (
                <div className="password flex flex-col items-center justify-center gabarito gap-2">
                  <div
                    aria-label="input and error message"
                    className={`${""} email flex items-center justify-center gabarito gap-2`}
                  >
                    {/* <label htmlFor="phoneNumber" className="text-white">
                    Phone No:{" "}
                  </label> */}
                    <Field
                      name="phoneNumber"
                      type="number"
                      id="number"
                      className="@apply bg-blue-500 py-1  outline-none  cursor-default bg-transparent text-black border-b-2 "
                      autoFocus
                      placeholder="Your phone number"
                      onKeyDown={(evt) =>
                        evt.key === "e" && evt.preventDefault()
                      }
                    />
                  </div>
                  <ErrorMessage
                    name="phoneNumber"
                    component="div"
                    className="text-red-500 "
                  />
                </div>
              )}

              {/* <div className="password">
              <label htmlFor="password">Password : </label>
              <Field
                name="password"
                type="password"
                id="password"
                className="@apply px-5 py-1 rounded-lg outline-none border-b-2 cursor-default "
              />
              <ErrorMessage name="password" />
            </div> */}
              <div
                aria-label="submit button container"
                className={`${""} w-full h-auto flex items-center justify-center gap-5 `}
              >
                <button
                  type="submit"
                  role="actual sign in button"
                  className={`${""}  shadow-lg border-b-2 border-gray-300 rounded-lg   font-bold w-auto px-5 py-2 duration-600 flex items-center justify-center gap-3 bg-white text-white`}
                  style={{ backgroundImage: "url('/signInImage.png')" }}
                >
                  <div
                    aria-label="icon"
                    className={`${""}  text-lg text-green-500 font-bold`}
                  >
                    <LiaSignOutAltSolid />
                  </div>
                  Sign In
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      {/* // right side */}
      <div
        aria-label="right side"
        className={`${""} w-[50%] h-full flex items-center justify-center gap-5 flex-col bg-green-500 `}
        style={{ backgroundImage: "url('/signInImage.png')" }}
      >
        <div
          aria-label="welcome text"
          className={`${""} w-full h-full flex items-center justify-center gap-5 text-5xl font-bold text-white`}
        >
          Welcome Back!
        </div>
      </div>
    </div>
  );
};

export default SignIn;
