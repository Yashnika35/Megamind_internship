import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { Navbar, Topbar, Footer } from "../components";
const data = [
  {
    label: "Faculty Login",
    value: "faculty",
    color: "blue",
    user: "Username",
    color: "bg-blue-800",
    bg: "bg-gradient-to-r from-cyan-500 to-indigo-500",
    button: "blue",
  },
  {
    label: "Student Login",
    value: "student",
    color: "pink",
    user: "Admission No.",
    color: "bg-pink-400",
    bg: "bg-gradient-to-l from-purple-400 to-pink-400",
    button: "pink",
  },
];

const initialValues = {
  title: "",
  image: null,
  magazine: null,
  month: "",
};

// function uImage(name = "hello", setImage, storage, image, e) {
//   setImage(e.target.files[0]);
//   const storageRef = ref(storage, `images/${name}`);
//   uploadBytes(storageRef, image).then((snapshot) => {
//     console.log("Uploaded a blob or file");
//   });
// }

// function uMagazine(name, setImage, storage, magazine) {
//   setImage(e.target.files[0]);
//   const storageRef = ref(storage, `magazine/${name}.jpg`);
//   uploadBytes(storageRef, magazine).then((snapshot) => {
//     console.log("Uploaded a blob or file");
//   });
// }

const uploadFile = async (file) => {
  const storage = getStorage();
  const storageRef = storage.ref();
  const uniqueFileName = `${file.name}_${Date.now()}`;
  const fileRef = storageRef.child(`images/${uniqueFileName}`);
  await fileRef.put(file);

  return fileRef.getDownloadURL();
};

const Dashboard = () => {
  const [image, setImage] = useState(null);
  const [magazine, setMagazine] = useState(null);
  const storage = getStorage();
  const storageRef1 = ref(storage, "images/");
  const storageRef2 = ref(storage, "gs://sahyadri-ba9de.appspot.com/magazine/");
  uploadBytes(storageRef1, image).then((snapshot) => {
    console.log("Uploaded a blob or file");
  });
  uploadBytes(storageRef2, magazine).then((snapshot) => {
    console.log("Uploaded a blob or file");
  });
  return (
    <div>
      <div className="fixed z-50">
        <Topbar />
        <Navbar />
      </div>
      <section className="px-40 py-16 bg-[#eceff1] pt-40">
        <h1 className="lg:text-2xl uppercase">Magazine</h1>
        <hr className="w-12 h-1 bg-green-600 mt-2" />
        <div className="px-16 py-4 mt-8 rounded-xl bg-white">
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
              const docRef = setDoc(
                doc(db, "magazine", values.month),
                {
                  name: values.name,
                  image: values.image,
                },
                { merge: true }
              );
              console.log("Document written with ID: ", docRef);
            }}
          >
            {(formik) => {
              const { errors, touched, isValid, dirty } = formik;
              return (
                <Form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                  <div className="mb-1 flex flex-col gap-6">
                    <Typography
                      variant="h6"
                      className="-mb-3 text-lg font-bold"
                    >
                      Title :
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
                  </div>
                  <div className="mb-1 flex flex-col gap-6">
                    <Typography
                      variant="h6"
                      className="-mb-3 text-lg font-bold"
                    >
                      Month :
                    </Typography>
                    <Field
                      type="text"
                      name="month"
                      placeholder="Month"
                      id="month"
                      class="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-black focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                      className={
                        errors.month && touched.month ? "input-error" : null
                      }
                    />
                    <ErrorMessage
                      name="month"
                      component="span"
                      className="error"
                    />
                  </div>
                  <div className="py-10">
                    <label htmlFor="images" className="text-lg font-bold">
                      Upload an Image
                    </label>
                    <Field
                      type="file"
                      accept="image/*"
                      onChange={() => {
                        setImage = uploadFile;
                      }}
                      name="images"
                      id="file"
                      className={
                        errors.image && touched.image ? "input-error" : null
                      }
                    />
                    <ErrorMessage
                      name="images"
                      component="span"
                      className="error"
                    />
                  </div>
                  <div classNmae="py-10">
                    <label htmlFor="images" className="text-lg font-bold">
                      Upload Pdf
                    </label>
                    <input
                      type="file"
                      accept="pdf/*"
                      onChange={(e) => {
                        setMagazine(e.target.files[0]);
                      }}
                      name="magzine"
                      id="file"
                      className={
                        errors.magazine && touched.magazine
                          ? "input-error"
                          : null
                      }
                    />
                    <ErrorMessage
                      name="magzine"
                      component="span"
                      className="error"
                    />
                  </div>
                  <div className="py-10">
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
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </section>
      <section className="px-40 py-16 bg-[#fcfcfc]">
        <h1 className="lg:text-2xl uppercase">Table</h1>
        <hr className="w-12 h-1 bg-green-600 mt-2" />
      </section>
      <section className="px-40 py-16 bg-[#eceff1]">
        <h1 className="lg:text-2xl uppercase">Gallery</h1>
        <hr className="w-12 h-1 bg-green-600 mt-2" />
      </section>

      <Footer />
    </div>
  );
};
export default Dashboard;
