"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Link } from "react-router-dom";

const LogIn = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required("Please Enter a Valid Email Address"),
    password: yup
      .string()
      .min(4)
      .max(20)
      .required("A Valid Password is Required!"),
  });
  const schemaRecover = yup.object().shape({
    recover_email: yup
      .string()
      .email()
      .required("Please Enter a Valid Email Address"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const {
    handleSubmit: handleSubmitRecover,
    register: regRecover,
    formState: { errors: errorsRecover },
  } = useForm({
    resolver: yupResolver(schemaRecover),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  const onSubmitRecover = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="flex justify-center h-screen">
        <div className="bg-white dark:bg-gray-800 shadow flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div>
              <Link to="/">
                <img
                  alt="Adapta"
                  className="w-56 mx-auto"
                  src="/img/logo.png"
                />
              </Link>
            </div>
            <div className="mt-4 flex flex-col items-center">
              <h5 className="mb-4 text-2xl font-medium text-gray-900 dark:text-white">
                Sign in
              </h5>
              <p className="text-base text-gray-500 dark:text-gray-400 sm:text-lg">
                Welcome back! Please enter your details.
              </p>
              <div className="w-full flex-1 mt-12">
                <div className="mx-auto max-w-xs">
                  <form
                    className="mt-8 space-y-6"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                        {...register("email")}
                      />
                      <p
                        className="text-sm text-red-600 mt-2"
                        id="hs-validation-name-error-helper"
                      >
                        {errors.email?.message}
                      </p>
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        {...register("password")}
                      />
                      <p
                        className="text-sm text-red-600 mt-2"
                        id="hs-validation-name-error-helper"
                      >
                        {errors.password?.message}
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          name="remember"
                          type="checkbox"
                          className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="remember"
                          className="font-medium text-gray-500 dark:text-gray-400"
                        >
                          Remember this device
                        </label>
                      </div>
                      <button
                        data-hs-overlay="#hs-modal-recover-account"
                        className="ml-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                      >
                        Lost Password?
                      </button>
                    </div>
                    <button
                      className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      type="submit"
                    >
                      Login to your account
                    </button>
                  </form>
                  <div
                    id="hs-modal-recover-account"
                    className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
                  >
                    <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                      <div className="bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-4 sm:p-7">
                          <div className="text-center">
                            <h2 className="block text-2xl font-bold text-gray-800 dark:text-gray-200">
                              Forgot password?
                            </h2>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                              Remember your password?
                              <a
                                className="ml-3 text-blue-600 decoration-2 hover:underline font-medium"
                                href="/"
                              >
                                Sign in here
                              </a>
                            </p>
                          </div>
                          <div className="mt-5">
                            {/* Form */}
                            <form
                              onSubmit={handleSubmitRecover(onSubmitRecover)}
                            >
                              <div className="grid gap-y-4">
                                {/* Form Group */}
                                <div>
                                  <label
                                    htmlFor="recover_email"
                                    className="block text-sm mb-2 dark:text-white"
                                  >
                                    Email address
                                  </label>
                                  <div className="relative">
                                    <input
                                      type="email"
                                      id="recover_email"
                                      className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                                      {...regRecover("recover_email")}
                                    />
                                  </div>
                                  <p
                                    className="text-xs text-red-600 mt-2"
                                    id="email-error"
                                  >
                                    {errorsRecover.recover_email?.message}
                                  </p>
                                </div>
                                {/* End Form Group */}
                                <button
                                  type="submit"
                                  className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                                >
                                  Reset password
                                </button>
                              </div>
                            </form>
                            {/* End Form */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 text-center lg:flex hidden dark:bg-gray-900">
            <div className="hidden md:block md:absolute md:top-0 md:left-1/2 md:right-0 h-full bg-[url('/img/login.jpeg')] bg-no-repeat bg-center bg-cover" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
