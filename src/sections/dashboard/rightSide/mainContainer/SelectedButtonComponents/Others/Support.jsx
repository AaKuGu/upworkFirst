import React from "react";
import Title from "../../Title";
import { designsInfo } from "@/constants/constant";
import DesignCard from "../../DesignCard";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import { AiOutlineSend } from "react-icons/ai";
import "../Fields.css";

const Support = ({ title }) => {
  const initialValues = {
    name: "Aadarsh",
    email: "pratham29@gmail.com",
    query: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid email format"
      ),
    name: Yup.string()
      .min(3, "Minimum 3 characters are required")
      .max(15, "Maximum 10 numbers are required")
      .required("Name is required"),

    query: Yup.string().required("Type your query"),
  });

  const onSubmit = (values) => {
    console.log("🚀 ~ file: SignIn.jsx:30 ~ onSubmit ~ values:", values);
    alert("submit is running");
    // alert("submit is running");
    //  Object.entries(values).map(([key, value]) => {
    //    //   console.log("🚀 ~ file: SignIn.jsx:35 ~ Object.entries ~ key:", key);
    //    //   console.log("🚀 ~ file: SignIn.jsx:33 ~ Object.entries ~ value:", value);
    //    if (value === "") {
    //      // console.log("key : ", key);
    //      delete values[key];
    //      dispatch({
    //        type: "loggedInUserDetails_action",
    //        payload: { ...loggedInUserDetails_selector, state: true },
    //      });
    //      toast.success("Logged In Successfully");
    //      router.push("/dashboard");
    //    }
    //  });
  };

  return (
    <div className="w-full h-full flex-col flex items-center justify-center gap-5 ">
      <Title title={title} />
      <div
        aria-label="contactUs container"
        className={`${""} w-full h-[85%] flex items-center justify-center gap-16 `}
        // style={{ height: "calc(85% - 20px)" }}
      >
        <div
          aria-label="image container for contact us"
          className={`${""} w-[400px] `}
        >
          <Image width={400} height={200} src="/contact.svg" />
        </div>
        <div
          aria-label="form"
          className={`${""} w-[370px] h-full overflow-y-auto flex items-center justify-center gap-5 flex-col border-[2px] border-gray-300 p-5 `}
        >
          <Formik
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            initialValues={initialValues}
          >
            <Form className="flex flex-col items-start justify-start gap-5 text-xl font-bold w-full h-full">
              <div className="fieldContainer">
                <label htmlFor="email">Email : </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="fields"
                  placeholder="example@example.com"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-sm "
                />
              </div>
              <div className="fieldContainer">
                <label htmlFor="name">Name : </label>
                <Field
                  name="name"
                  type="text"
                  id="name"
                  className="fields"
                  placeholder="Your Name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-sm "
                />
              </div>

              <div className="fieldContainer">
                <label htmlFor="query">Your Query: </label>
                <Field
                  name="query"
                  as="textarea"
                  rows="5"
                  cols="22"
                  id="query"
                  className="fields"
                  placeholder="Your query"
                />
                <ErrorMessage
                  name="query"
                  component="div"
                  className="text-sm"
                />
              </div>
              <button
                type="submit"
                role="actual sign in button"
                className={`${""} border-2 px-5 py-2 w-full rounded-lg flex items-center justify-center gap-5 `}
              >
                <div aria-label="label" className={`${""} `}>
                  Send
                </div>
                <div aria-label="icon" className={`${""} `}>
                  <AiOutlineSend />
                </div>
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Support;
