import { useState } from "react";
import BreadHeader from "../../components/breadheader";
import MainDashboard from "../../components/dashboards/main_dashboard";
import axiosPrivate from "../../api/axiosPrivate";
import { UserDetails } from "../../data/userData";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";

interface FormData {
  old_password: string;
  new_password: string;
  confirm_password: string;
  email: string;
}

export default function Profile() {
  const [user, setUser] = useState<UserDetails>();
  const storedUserId = localStorage.getItem("userId");
  // const accessToken = localStorage.getItem("accesstoken");
  const email = localStorage.getItem("email");

  useQuery(["userDetails"], () => {
    const PROFILE_URL = `/app_auth/v1/${storedUserId}`;
    return axiosPrivate<UserDetails>({ method: "GET", url: PROFILE_URL })
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  });

  const schema = yup.object().shape({
    new_password: yup.string().min(8).max(20).required("Password is Required!"),
    old_password: yup.string().min(8).max(20).required("Password is Required!"),
    confirm_password: yup
      .string()
      .min(8)
      .max(20)
      .oneOf([yup.ref("confirm_password")], "Passwords must match"),
  });
  const {
    register: changePassword,
    handleSubmit: handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: yupResolver(schema) as any,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    data.email = email;
    console.log(data);
    const PROFILE_URL = `/app_auth/v1/reset_password/`;
    axiosPrivate({
      method: "POST",
      url: PROFILE_URL,
      data: JSON.stringify(data),
    })
      .then((data) => {
        // setUser(data);
        console.log(JSON.stringify(data));
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Password Chnaged",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error("API Error:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  return (
    <MainDashboard>
      <div>
        <BreadHeader
          title="Profile"
          description="Search, Edit and View Scores For Land Profiles"
        />
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            {/* Card */}
            <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-10 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                General information
              </h2>
              <form>
                <div className="mt-6 grid gap-4 lg:gap-6">
                  {/* Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                      <label
                        htmlFor="hs-firstname-hire-us-1"
                        className="block text-sm text-gray-700 font-medium dark:text-white"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name="hs-firstname-hire-us-1"
                        id="hs-firstname-hire-us-1"
                        value={user?.first_name}
                        className="border py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="hs-lastname-hire-us-1"
                        className="block text-sm text-gray-700 font-medium dark:text-white"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={user?.last_name}
                        name="hs-lastname-hire-us-1"
                        id="hs-lastname-hire-us-1"
                        className="border py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      />
                    </div>
                  </div>
                  {/* End Grid */}
                  <div>
                    <label
                      htmlFor="hs-work-email-hire-us-1"
                      className="block text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      value={user?.email}
                      name="hs-work-email-hire-us-1"
                      id="hs-work-email-hire-us-1"
                      autoComplete="email"
                      className="border py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    />
                  </div>
                  {/* Grid */}
                  {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                      <label
                        htmlFor="hs-company-hire-us-1"
                        className="block text-sm text-gray-700 font-medium dark:text-white"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        name="hs-company-hire-us-1"
                        id="hs-company-hire-us-1"
                        className="border py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="hs-company-website-hire-us-1"
                        className="block text-sm text-gray-700 font-medium dark:text-white"
                      >
                        Role
                      </label>
                      <input
                        type="text"
                        value={user?.role_name}
                        name="hs-company-website-hire-us-1"
                        id="hs-company-website-hire-us-1"
                        className="border py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      />
                    </div>
                  </div> */}
                  {/* End Grid */}
                </div>
                {/* End Grid */}
                <div className="mt-6 grid">
                  <button
                    type="submit"
                    className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                  >
                    Save All
                  </button>
                </div>
              </form>
            </div>
            {/* End Card */}
          </div>
          <div>
            {/* Card */}
            <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-10 dark:border-gray-700">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Password information
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-6 grid gap-4 lg:gap-6">
                  {/* Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                      <label
                        htmlFor="hs-firstname-hire-us-1"
                        className="block text-sm text-gray-700 font-medium dark:text-white"
                      >
                        Current password
                      </label>
                      <input
                        type="password"
                        id="old_password"
                        className="border py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                        {...changePassword("old_password")}
                      />
                      <p
                        className="text-sm text-red-600 mt-2"
                        id="hs-validation-name-error-helper"
                      >
                        {errors.confirm_password?.message}
                      </p>
                    </div>
                    <div>
                      <label
                        htmlFor="hs-lastname-hire-us-1"
                        className="block text-sm text-gray-700 font-medium dark:text-white"
                      >
                        New password
                      </label>
                      <input
                        type="password"
                        id="new_password"
                        className="border py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                        {...changePassword("new_password")}
                      />
                      <p
                        className="text-sm text-red-600 mt-2"
                        id="hs-validation-name-error-helper"
                      >
                        {errors.new_password?.message}
                      </p>
                    </div>
                  </div>
                  {/* End Grid */}
                  <div>
                    <label
                      htmlFor="hs-work-email-hire-us-1"
                      className="block text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="border py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      {...changePassword("confirm_password")}
                    />
                    <p
                      className="text-sm text-red-600 mt-2"
                      id="hs-validation-name-error-helper"
                    >
                      {errors.confirm_password?.message}
                    </p>
                  </div>
                </div>
                {/* End Grid */}
                <div className="mt-6 grid">
                  <button
                    type="submit"
                    className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                  >
                    Update Password
                  </button>
                </div>
              </form>
            </div>
            {/* End Card */}
          </div>
        </div>
      </div>
    </MainDashboard>
  );
}
