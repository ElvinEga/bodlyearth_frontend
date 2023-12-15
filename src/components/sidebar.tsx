import { Link } from "react-router-dom";
import NavComponent from "./list/NavComponent";

const Sidebar = () => {
  return (
    <>
      {/* Sidebar */}
      <div
        id="application-sidebar"
        className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-[28rem]  bg-white border-r border-gray-200  overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700"
      >
        <div className="flex h-full">
          <nav className="flex-none flex flex-col items-center text-center bg-teal-900 text-gray-400 border-r">
            <div className="h-16 flex items-center w-full">
              <img
                className="h-6 w-6 mx-auto"
                src="https://raw.githubusercontent.com/bluebrown/tailwind-zendesk-clone/master/public/assets/leaves.png"
              />
            </div>
            <ul>
              <li>
                <a
                  title="Home"
                  href="/dashboard"
                  className="h-16 px-6 flex items-center text-white bg-teal-700 w-full"
                >
                  <i className="bi bi-house-door-fill text-xl"></i>
                </a>
              </li>
              <li>
                <div className="hs-tooltip inline-block [--placement:right]">
                  <a
                    href="#views"
                    className="h-16 px-6 flex items-center hover:text-white w-full"
                  >
                    <i className="fa-solid fa-cloud-sun-rain text-xl"></i>
                  </a>
                  <span
                    className="p-10 hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
                    role="tooltip"
                  >
                    Rainfall
                  </span>
                </div>
              </li>
              <li>
                <div className="hs-tooltip inline-block [--placement:right]">
                  <a
                    title="Customer Lists"
                    href="#customer-lists"
                    className="h-16 px-6 flex items-center hover:text-white w-full"
                  >
                    <i className="fa-solid fa-temperature-high text-xl"></i>
                  </a>
                  <span
                    className="p-10 hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
                    role="tooltip"
                  >
                    Tempreture
                  </span>
                </div>
              </li>
              <li>
                <div className="hs-tooltip inline-block [--placement:right]">
                  <a
                    href="#reporting"
                    className="h-16 px-6 flex items-center hover:text-white w-full"
                  >
                    <i className="bi bi-globe-americas text-xl"></i>
                  </a>
                  <span
                    className="p-10 hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
                    role="tooltip"
                  >
                    Climate Change
                  </span>
                </div>
              </li>
              <li>
                <a
                  title="Admin"
                  href="#admin"
                  className="h-16 px-6 flex items-center hover:text-white w-full"
                >
                  <i className="fa-solid fa-seedling text-xl"></i>
                </a>
              </li>
              <li>
                <a
                  title="Admin"
                  href="#admin"
                  className="h-16 px-6 flex items-center hover:text-white w-full"
                >
                  <i className="fa-solid fa-mosquito text-xl"></i>
                </a>
              </li>
            </ul>
            <div className="mt-auto h-16 flex items-center w-full">
              <i className="bi bi-gear-fill text-xl mx-auto"></i>
            </div>
          </nav>

          <div>
            <div className="px-6">
              <div className="hidden sm:block mt-5">
                <label htmlFor="icon" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                    <i className="bi bi-search"></i>
                  </div>
                  <input
                    type="text"
                    id="icon"
                    name="icon"
                    className="py-2 px-4 ps-11 block border w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>

            <div className="px-6 pt-6">
              <h1 className="flex-none text-xl font-semibold text-green-800 dark:text-white">
                Lists
              </h1>
            </div>

            <NavComponent />
          </div>
        </div>
      </div>
      {/* End Sidebar */}
    </>
  );
};

export default Sidebar;
