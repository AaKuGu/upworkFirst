import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

const SignIn = ({}) => {
  const [emailOrPhone, setEmailOrPhone] = useState("email");
  console.log("🚀 ~ file: SignIn.jsx:7 ~ SignIn ~ emailOrPhone:", emailOrPhone);

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
    password: "sjkejw3483jj",
    // email: "",
    email: "pratham29@gmail.com",
    phoneNumber: "",
  };

  const validationSchema = Yup.object({
    email:
      emailOrPhone === "email" &&
      Yup.string()
        .required("email is required")
        .email()
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

  const onSubmit = (values) => {
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
    });
  };

  return (
    <div className="w-[400px] border-[1px] border-gray-400 h-auto p-5  gap-5 flex items-center justify-center flex-col  ">
      <div
        aria-label="header"
        className={`${""} font-bold text-3xl text-center`}
      >
        Sign In
      </div>

      {/* //choose between email or phone */}
      <div
        aria-label="choose email or phone number for login"
        className={`${""} w-full h-auto flex items-center justify-center gap-5 py-2 `}
      >
        <button
          role="email option"
          className={`${""} border-2 px-5 py-2 w-[170px]`}
          onClick={() => setEmailOrPhone("email")}
        >
          Email{" "}
        </button>
        <button
          role="phone number"
          className={`${""} border-2 px-5 py-2 w-[170px]`}
          onClick={() => setEmailOrPhone("phone")}
        >
          Phone Number
        </button>
      </div>

      {/* //actual form */}
      <div
        aria-label="form container"
        className={`${""} w-full h-auto flex items-center justify-center gap-5 py-2 flex-col`}
      >
        <Formik
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          initialValues={initialValues}
        >
          <Form className="flex flex-col items-start justify-center gap-5 text-xl font-bold">
            {emailOrPhone === "email" && (
              <div className="email">
                <label htmlFor="email">Email : </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="@apply px-5 py-1 rounded-lg outline-none border-b-2 cursor-default "
                  placeholder="example@example.com"
                />
                <ErrorMessage name="email" />
              </div>
            )}
            {emailOrPhone === "phone" && (
              <div className="phoneNumber">
                <label htmlFor="phoneNumber">Phone Number : </label>
                <Field
                  name="phoneNumber"
                  type="number"
                  id="number"
                  className="@apply px-5 py-1 rounded-lg outline-none border-b-2 cursor-default "
                  placeholder="Your 10 digits phone number"
                  onKeyDown={(evt) => evt.key === "e" && evt.preventDefault()}
                />
                <ErrorMessage name="phoneNumber" />
              </div>
            )}

            <div className="password">
              <label htmlFor="password">Password : </label>
              <Field
                name="password"
                type="password"
                id="password"
                className="@apply px-5 py-1 rounded-lg outline-none border-b-2 cursor-default "
              />
              <ErrorMessage name="password" />
            </div>
            <button
              type="submit"
              role="actual sign in button"
              className={`${""} border-2 px-5 py-2 `}
            >
              Sign In
            </button>
          </Form>
        </Formik>
      </div>

      {/* // sign in button */}
    </div>
  );
};

export default SignIn;
