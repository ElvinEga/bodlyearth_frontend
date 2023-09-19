"use client";

import { Link } from "react-router-dom";

const OtpPage = () => {
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
              <div className="w-full flex-1 mt-12">
                <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
                  <div className="flex flex-col items-center justify-center text-center space-y-2">
                    <div className="font-semibold text-3xl">
                      <p>Email Verification</p>
                    </div>
                    <div className="flex flex-row text-sm font-medium text-gray-400">
                      <p>
                        We have sent a code to your email ba**@dipainhouse.com
                      </p>
                    </div>
                  </div>
                  <div>
                    <form action="" method="post">
                      <div className="flex flex-col space-y-16">
                        <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                          <div className="w-12 h-16 ">
                            <input
                              className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                              type="text"
                              name=""
                              id=""
                            />
                          </div>
                          <div className="w-12 h-16 ">
                            <input
                              className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                              type="text"
                              name=""
                              id=""
                            />
                          </div>
                          <div className="w-12 h-16 ">
                            <input
                              className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                              type="text"
                              name=""
                              id=""
                            />
                          </div>
                          <div className="w-12 h-16 ">
                            <input
                              className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                              type="text"
                              name=""
                              id=""
                            />
                          </div>
                          <div className="w-12 h-16 ">
                            <input
                              className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                              type="text"
                              name=""
                              id=""
                            />
                          </div>
                          <div className="w-12 h-16 ">
                            <input
                              className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                              type="text"
                              name=""
                              id=""
                            />
                          </div>
                        </div>
                        <div className="flex flex-col space-y-5">
                          <div>
                            <button className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
                              Verify Account
                            </button>
                          </div>
                          <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                            <p>Didn't recieve code?</p>{" "}
                            <a
                              className="flex flex-row items-center text-blue-600"
                              href="http://"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Resend
                            </a>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 text-center lg:flex hidden dark:bg-gray-900">
            <div className="hidden md:block md:absolute md:top-0 md:left-1/2 md:right-0 h-full bg-[url('/img/veges.jpg')] bg-no-repeat bg-center bg-cover" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OtpPage;
