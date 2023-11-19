import { Card, Typography } from "@material-tailwind/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";
import { setDoc, doc, arrayUnion } from "firebase/firestore";
import { db } from "../firebase";
import Footer from "./Footer";
import { Navbar, Topbar } from "../components";

const initialValues = {
  name: "",
  email: "",
  password: "",
  number: "",
  message: "",
};

const SignInSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .matches(/\D/, "Name should not contain any numbers")
    .matches(/^[A-Za-z]+$/, "Name should not contain special character"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Pasword must be 8 or more characters")
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])\w+/,
      "Password ahould contain at least one uppercase and lowercase character"
    )
    .matches(/\d/, "Password should contain at least one number")
    .matches(
      /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/,
      "Password should contain at least one special character"
    ),
  number: Yup.string()
    .required("Number is required")
    .min(10, "Phone Number must be 10 characters")
    .max(10, "Phone Number must be 10 characters")
    .matches(/\d/, "Phone number should contain only number"),
  message: Yup.string().max(1000, "Max limit 100 characters"),
});

const AdmissionEnquiry = () => {
  return (
    <div>
      <div className="fixed z-50">
        <Topbar />
        <Navbar />
      </div>
      <div className="bg-gray-200 pt-40 pb-20">
        <div className="mx-auto max-w-xl p-5 pt-10 bg-white drop-shadow-md rounded-md">
          <div className="pl-16">
            <Formik
              initialValues={initialValues}
              validationSchema={SignInSchema}
              onSubmit={(values) => {
                const docRef = setDoc(
                  doc(db, "admission", values.email),
                  {
                    name: values.name,
                    email: values.email,
                    phone: values.number,
                    message: arrayUnion(values.message),
                    password: values.password,
                  },
                  { merge: true }
                );
                console.log("Document written with ID: ", docRef);
              }}
            >
              {(formik) => {
                const { errors, touched, isValid, dirty } = formik;
                return (
                  <Card color="transparent" shadow={false}>
                    <Typography variant="h4" color="blue-gray">
                      ADMISSION ENQUIRY
                      <hr className="h-1 w-40 bg-gray-800 mt-2" />
                    </Typography>
                    <Form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                      <div className="mb-1 flex flex-col gap-6">
                        <Typography
                          variant="h6"
                          color="blue-gray"
                          className="-mb-3"
                        >
                          Your Name
                        </Typography>
                        <Field
                          type="text"
                          name="name"
                          placeholder="Name"
                          id="name"
                          class="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-black focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                          className={
                            errors.name && touched.name ? "input-error" : null
                          }
                        />
                        <ErrorMessage
                          name="name"
                          component="span"
                          className="error"
                        />
                        <Typography
                          variant="h6"
                          color="blue-gray"
                          className="-mb-3"
                          htmlFor="email"
                        >
                          Your Email
                        </Typography>
                        <Field
                          type="email"
                          name="email"
                          placeholder="name@mail.com"
                          id="email"
                          className={
                            errors.email && touched.email ? "input-error" : null
                          }
                          class="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-black focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        />
                        <ErrorMessage
                          name="email"
                          component="span"
                          className="error"
                        />
                        <Typography
                          variant="h6"
                          color="blue-gray"
                          className="-mb-3"
                          htmlFor="number"
                        >
                          Phone Number
                        </Typography>
                        <Field
                          type="text"
                          name="number"
                          placeholder="XXXXX-XXXXX"
                          id="number"
                          class="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-black focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                          className={
                            errors.number && touched.number
                              ? "input-error"
                              : null
                          }
                        />
                        <ErrorMessage
                          name="number"
                          component="span"
                          className="error"
                        />
                        <Typography
                          variant="h6"
                          color="blue-gray"
                          className="-mb-3"
                          htmlFor="password"
                        >
                          Password
                        </Typography>
                        <Field
                          type="password"
                          name="password"
                          id="password"
                          class="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-black focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                          className={
                            errors.password && touched.password
                              ? "input-error"
                              : null
                          }
                        />
                        <ErrorMessage
                          name="password"
                          component="span"
                          className="error"
                        />
                      </div>

                      <div className="flex w-72 flex-col gap-6 my-8">
                        <Typography
                          variant="h6"
                          color="blue-gray"
                          className="-mb-3"
                        >
                          Select Program
                        </Typography>
                        <select className="p-2" name="program" id="program">
                          <option value="">--select program--</option>
                          <option value="ug">UG</option>
                          <option value="pg">PG</option>
                        </select>
                      </div>

                      <div className="flex w-72 flex-col gap-6 my-8">
                        <Typography
                          variant="h6"
                          color="blue-gray"
                          className="-mb-3"
                        >
                          Select Course
                        </Typography>
                        <select className="p-2" name="course" id="course">
                          <option value="">--select course--</option>
                          <option value="ug">UG</option>
                          <option value="pg">PG</option>
                        </select>
                      </div>

                      <div className="flex w-72 flex-col gap-6 my-8">
                        <Typography
                          variant="h6"
                          color="blue-gray"
                          className="-mb-3"
                        >
                          Select Country
                        </Typography>
                        <select className="p-2" name="country" id="country">
                          <option value="">--select country--</option>
                          <option value="us">US</option>
                          <option value="india">India</option>
                          <option value="australia">Australia</option>
                        </select>
                      </div>

                      <div className="flex w-72 flex-col gap-6 my-8">
                        <Typography
                          variant="h6"
                          color="blue-gray"
                          className="-mb-3"
                        >
                          Select State
                        </Typography>
                        <select className="p-2" name="state" id="state">
                          <option value="">--select state--</option>
                          <option value="us">US</option>
                          <option value="india">India</option>
                          <option value="australia">Australia</option>
                        </select>
                      </div>

                      <div className="flex w-72 flex-col gap-6 my-8">
                        <Typography
                          variant="h6"
                          color="blue-gray"
                          className="-mb-3"
                        >
                          Select City
                        </Typography>
                        <select className="p-2" name="city" id="city">
                          <option value="">--select city--</option>
                          <option value="us">US</option>
                          <option value="india">India</option>
                          <option value="australia">Australia</option>
                        </select>
                      </div>

                      <div className="w-96 my-8">
                        <Field
                          id="message"
                          name="message"
                          rows="4"
                          cols="40"
                          placeholder="Message"
                          className={
                            errors.message && touched.message
                              ? "input-error"
                              : null
                          }
                        />
                        <ErrorMessage
                          name="message"
                          component="span"
                          className="error"
                        />
                      </div>
                      <button
                        type="submit"
                        className={!(dirty && isValid) ? "disabled-btn" : ""}
                        disabled={!(dirty && isValid)}
                      >
                        <span className="mt-6 middle none center rounded-lg bg-black py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-black/20 transition-all hover:shadow-lg hover:shadow-black/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                          {" "}
                          Submit
                        </span>
                      </button>
                    </Form>
                  </Card>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdmissionEnquiry;
