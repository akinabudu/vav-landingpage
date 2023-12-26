"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

const SignInSchema = Yup.object({
  fullName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export default function Giveaway() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { toast } = useToast();
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
    },
    validationSchema: SignInSchema,

    onSubmit: async (values) => {
      setIsLoading(true);
      const url = `/api/v1/giveaway`;
      await axios
        .post(url, { fullName: values.fullName, email: values.email })
        .then(
          function (response) {
            setTimeout(() => {
              toast({
                title: response.data,
                description: "Link has been sent to your email.",
              });
              axios.post(`/api/v1/email`, {
                fullName: values.fullName,
                email: values.email,
              });
              setIsLoading(false);
            }, 3000);
            console.log(response); // Success
          },
          function (error) {
            console.log('GA: ',error); // Failure
          }
        );
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="giveaway"
      className="md:h-full w-full  flex flex-col items-center justify-center rounded mt-10 mb-20 gap-5 bg-gradient-to-r from-sky-500 to-indigo-500 p-10"
    >
      <div className="text-3xl  text-center my-5 w-full">
        <span className="font-bold mb-2">Get your free e-Book</span> <br />
        How to find what Tech Career works Best with who you are.
      </div>
      <form
        className="w-full flex flex-col justify-end items-center gap-6"
        onSubmit={formik.handleSubmit}
      >
        <div className="w-full md:w-3/6 flex flex-col justify-end items-center gap-5">
          <div className="w-full  text-center flex items-center justify-end">
            <label className="font-bold text-lg" htmlFor="email">
              Full Name:
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              className="w-5/6  border mx-5 text-md p-1 px-3 rounded-md"
              onChange={formik.handleChange}
              value={formik.values.fullName}
              placeholder="Adams Smith"
              required
            />
          </div>
          <div className="w-full text-center flex items-center justify-end">
            <label className="font-bold text-lg" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder="name@example.com"
              className="w-5/6  border mx-5 text-md p-1 px-3 rounded-md"
              required
            />
          </div>
        </div>
        <Button
          type="submit"
          disabled={isLoading}
          className="border border-yellow-600 py-2 px-10 hover:text-yellow-800 bg-yellow-600 hover:bg-gray-50 rounded-lg text-md font-bold"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </>
          ) : (
            <>SEND TO MY INBOX</>
          )}
        </Button>
      </form>
    </motion.div>
  );
}
