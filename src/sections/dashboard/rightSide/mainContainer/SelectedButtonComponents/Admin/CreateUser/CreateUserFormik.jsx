import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import { countryOptions } from "@/constants/constant";
import "../common/CreateUserFormik.css";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const CreateUserFormik = () => {
  const dispatch = useDispatch();

  const allUsersDetails_selector = useSelector((state) => {
    const { allUsersDetails_reducer } = state;
    return allUsersDetails_reducer;
  });
  console.log(
    "🚀 ~ file: CreateUserFormik.jsx:16 ~ constallUsersDetails_selector=useSelector ~ allUsersDetails_selector:",
    allUsersDetails_selector
  );

  const initialValues = {
    name: "Aadarsh Kumar Gupta",
    email: "prathamtogupta11@gmail.com",
    phoneNumber: "1212121212",
    country: "India",
    state: "Utter",
    city: "Pradesh",
    role: "user",
  };

  const onSubmit = (values, { resetForm }) => {
    console.log(
      "🚀 ~ file: CreateUserFormik.jsx:19 ~ onSubmit ~ values:",
      values
    );

    const { role } = values;
    if (role === "user") {
      values.paid = false;
    }
    console.log(
      "🚀 ~ file: CreateUserFormik.jsx:35 ~ onSubmit ~ values:",
      values
    );

    dispatch({
      type: "allUsersDetails_action",
      payload: [
        ...allUsersDetails_selector,
        { ...values, id: allUsersDetails_selector.length + 1 },
      ],
    });

    toast.success(`${values.role} added successfully`, { duration: 5000 });

    resetForm();
    // alert("submit is running");
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("name is required"),
    email: Yup.string()
      .required("email is required")
      .email()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid email format"
      ),

    phoneNumber: Yup.number()
      //   .min(10, "Minimum 10 numbers are required")
      //   .max(10, "maximum 10 numbers are required")
      .required("Phone number is required"),

    city: Yup.string().required("City is required"), // Add city validation
    country: Yup.string().required("Country is required"), // Add country validation
    state: Yup.string().required("State or province is required"),
    role: Yup.string().required("Role is required"), // Add role validation
  });

  return (
    <div
      aria-label="formik of add a user"
      className={`${""} w-full h-auto flex items-center justify-start gap-5 bg-blue-500 overflow-y-auto flex-col p-5`}
    >
      <Formik
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        initialValues={initialValues}
      >
        <Form className="flex flex-col items-start justify-start gap-5 text-xl font-bold">
          <div className="role">
            <label htmlFor="role">Role: </label>
            <Field name="role" as="select" className={`inputs`}>
              <option value="user">Normal User</option>
              <option value="designer">Designer User</option>
            </Field>
            <ErrorMessage name="role" />
          </div>
          <div className="name">
            <label htmlFor="name">Name : </label>
            <Field name="name" id="name" className={`inputs`} />
            <ErrorMessage name="name" />
          </div>
          <div className="email">
            <label htmlFor="email">Email : </label>
            <Field name="email" id="email" className={`inputs`} />
            <ErrorMessage name="email" />
          </div>
          <div className="phoneNumber">
            <label htmlFor="phoneNumber">Phone Number : </label>
            <Field
              name="phoneNumber"
              type="number"
              id="number"
              className={`inputs`}
              placeholder="Your 10 digits phone number"
              onKeyDown={(evt) => evt.key === "e" && evt.preventDefault()}
            />
            <ErrorMessage name="phoneNumber" />
          </div>
          <div className="city">
            <label htmlFor="city">City: </label>
            <Field name="city" id="city" className={`inputs`} />
            <ErrorMessage name="city" />
          </div>

          <div className="country">
            <label htmlFor="country">Country: </label>
            <Field name="country" as="select" className={`inputs w-[50%]`}>
              {countryOptions.map((option) => (
                <option key={option.value} value={option.label}>
                  {option.label}
                </option>
              ))}
            </Field>
            <ErrorMessage name="country" />
          </div>
          <div className="state">
            <label htmlFor="state">State: </label>
            <Field name="state" id="state" className={`inputs`} />
            <ErrorMessage name="state" />
          </div>
          <button
            type="submit"
            role="create user button"
            className={`${""} border-2 px-5 py-2 `}
          >
            Create
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateUserFormik;
