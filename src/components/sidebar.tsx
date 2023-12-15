import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      {/* Sidebar */}
      <div
        id="application-sidebar"
        className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-[22rem]  bg-white border-r border-gray-200  overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700"
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
                    <svg
                      className="flex-shrink-0 h-4 w-4 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx={11} cy={11} r={8} />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
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
            <nav
              className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
              data-hs-accordion-always-open=""
            >
              <ul className="space-y-1.5">
                <li>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-900 dark:text-white"
                    href="/dashboard"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                      />
                      <path
                        fillRule="evenodd"
                        d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                      />
                    </svg>
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300"
                    href="/engagement"
                  >
                    <i className="bi bi-stickies" />
                    Scores History
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300"
                    href="/resources"
                  >
                    <i className="bi bi-flag"></i>
                    Resources
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300"
                    href="/help"
                  >
                    <i className="bi bi-question-circle"></i>
                    Help
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300"
                    href="/profile"
                  >
                    <i className="bi bi-person-circle"></i>
                    Profile
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* End Sidebar */}
    </>
  );
};

export default Sidebar;
