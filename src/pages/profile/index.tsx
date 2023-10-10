import { useEffect, useState } from "react";
import BreadHeader from "../../components/breadheader";
import MainDashboard from "../../components/dashboards/main_dashboard";
import axiosPrivate from "../../api/axiosPrivate";
import { UserDetails } from "../../data/userData";
import { useUser } from "../../context/UserProvider";

export default function Profile() {
  const { userData } = useUser();
  const [user, setUser] = useState<UserDetails>();

  useEffect(() => {
    const PROFILE_URL = `/auth/${userData.id}`;
    axiosPrivate<UserDetails>({ method: "GET", url: PROFILE_URL })
      .then((data) => {
        setUser(data);
        // console.log("API Response:", user?.email);
        // alert(user?.email);
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  }, []);
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
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
                  </div>
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
              <form>
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
                        name="hs-firstname-hire-us-1"
                        id="hs-firstname-hire-us-1"
                        className="border py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      />
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
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="hs-work-email-hire-us-1"
                      id="hs-work-email-hire-us-1"
                      className="border py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    />
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
