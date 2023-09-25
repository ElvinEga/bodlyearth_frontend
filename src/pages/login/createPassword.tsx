"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Link, redirect } from "react-router-dom";

const CreatePassword = () => {
  const schema = yup.object().shape({
    password: yup.string().min(4).max(20).required("Password is Required!"),
    confirm_password: yup
      .string()
      .min(4)
      .max(20)
      .oneOf([yup.ref("password")], "Passwords must match"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    redirect("/verify");
  };
  return (
    <>
      <div className="flex justify-center h-screen">
        <div className="bg-white dark:bg-gray-800 shadow flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div>
              <Link to="/">
                <img
                  alt="Bitpulse"
                  className="w-56 mx-auto"
                  src="/img/logo.png"
                />
              </Link>
            </div>
            <div className="mt-4 flex flex-col items-center">
              <div className="w-full flex-1 mt-5">
                <div className="mx-auto flex w-full max-w-md flex-col space-y-8">
                  <div className="flex flex-col items-center justify-center text-center space-y-2">
                    <div className="font-semibold text-3xl">
                      <p>Create New Password</p>
                    </div>
                    <div className="flex flex-row text-sm font-medium text-gray-400">
                      <p>Create a secure password you will use to Sign in</p>
                    </div>
                  </div>
                  <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="flex flex-col space-y-8">
                        <div>
                          <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            New Password
                          </label>
                          <input
                            type="password"
                            id="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="••••••••"
                            {...register("password")}
                          />
                          <p
                            className="text-sm text-red-600 mt-2"
                            id="hs-validation-name-error-helper"
                          >
                            {errors.password?.message}
                          </p>
                        </div>
                        <div>
                          <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            id="confrim_password"
                            placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            {...register("confirm_password")}
                          />
                          <p
                            className="text-sm text-red-600 mt-2"
                            id="hs-validation-name-error-helper"
                          >
                            {errors.confirm_password?.message}
                          </p>
                        </div>
                        <div className="flex flex-col space-y-5">
                          <div>
                            <button
                              className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm"
                              type="submit"
                            >
                              Create Password
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePassword;
