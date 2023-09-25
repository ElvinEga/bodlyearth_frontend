import BreadHeader from "../../components/breadheader";
import MainDashboard from "../../components/dashboards/main_dashboard";
import ScoreChart from "../../components/scorechart";

const scoreData = [
  { month: "Jan", score: 10 },
  { month: "Feb", score: 50 },
  { month: "Mar", score: 44 },
  { month: "Apr", score: 12 },
  { month: "May", score: 65 },
  { month: "Jun", score: 34 },
  { month: "Jul", score: 80 },
  { month: "Agu", score: 90 },
  { month: "Sep", score: 70 },
  // Add more data for other months
];
const AdminHome = () => {
  return (
    <MainDashboard>
      <div>
        <BreadHeader
          home="Home"
          title="Hello Admin"
          description="Here's What We have today"
        />

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Card */}
          <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
            <div className="p-4 md:p-5 flex justify-between gap-x-3">
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Total users
                </p>
                <div className="mt-1 flex items-center gap-x-1">
                  <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200">
                    72,540
                  </h3>
                  <span className="flex items-center text-green-600">
                    <svg
                      className="inline-block w-7 h-7 self-center"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"
                      />
                    </svg>
                    <span className="inline-block text-lg">1.7%</span>
                  </span>
                </div>
              </div>
              <div className="flex-shrink-0 flex justify-center items-center w-[46px] h-[46px] bg-blue-600 text-white rounded-full dark:bg-blue-900 dark:text-blue-200">
                <i className="bi bi-people-fill"></i>
              </div>
            </div>
            <a
              className="py-3 px-4 md:px-5 inline-flex justify-between items-center text-sm text-gray-600 border-t border-gray-200 hover:bg-gray-50 rounded-b-xl dark:border-gray-700 dark:text-gray-400 dark:hover:bg-slate-800"
              href="#"
            >
              View reports
              <i className="bi bi-chevron-right"></i>
            </a>
          </div>
          {/* End Card */}
          {/* Card */}
          <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
            <div className="p-4 md:p-5 flex justify-between gap-x-3">
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Total Companies
                </p>
                <div className="mt-1 flex items-center gap-x-1">
                  <h3 className="mt-1 text-xl font-medium text-gray-800 dark:text-gray-200">
                    29
                  </h3>
                </div>
              </div>
              <div className="flex-shrink-0 flex justify-center items-center w-[46px] h-[46px] bg-blue-600 text-white rounded-full dark:bg-blue-900 dark:text-blue-200">
                <i className="bi bi-buildings-fill"></i>
              </div>
            </div>
            <a
              className="py-3 px-4 md:px-5 inline-flex justify-between items-center text-sm text-gray-600 border-t border-gray-200 hover:bg-gray-50 rounded-b-xl dark:border-gray-700 dark:text-gray-400 dark:hover:bg-slate-800"
              href="#"
            >
              View reports
              <i className="bi bi-chevron-right"></i>
            </a>
          </div>
          {/* End Card */}
          {/* Card */}
          <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
            <div className="p-4 md:p-5 flex justify-between gap-x-3">
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Avg Score Rate
                </p>
                <div className="mt-1 flex items-center gap-x-1">
                  <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-200">
                    56.8%
                  </h3>
                  <span className="flex items-center text-red-600">
                    <svg
                      className="inline-block w-7 h-7 self-center"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
                      />
                    </svg>
                    <span className="inline-block text-lg">1.7%</span>
                  </span>
                </div>
              </div>
              <div className="flex-shrink-0 flex justify-center items-center w-[46px] h-[46px] bg-blue-600 text-white rounded-full dark:bg-blue-900 dark:text-blue-200">
                <i className="bi bi-clipboard2-pulse-fill"></i>
              </div>
            </div>
            <a
              className="py-3 px-4 md:px-5 inline-flex justify-between items-center text-sm text-gray-600 border-t border-gray-200 hover:bg-gray-50 rounded-b-xl dark:border-gray-700 dark:text-gray-400 dark:hover:bg-slate-800"
              href="#"
            >
              View reports
              <i className="bi bi-chevron-right"></i>
            </a>
          </div>
          {/* End Card */}
          {/* Card */}
          <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-800">
            <div className="p-4 md:p-5 flex justify-between gap-x-3">
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-500">
                  Total requests
                </p>
                <div className="mt-1 flex items-center gap-x-1">
                  <h3 className="mt-1 text-xl font-medium text-gray-800 dark:text-gray-200">
                    2,913
                  </h3>
                </div>
              </div>
              <div className="flex-shrink-0 flex justify-center items-center w-[46px] h-[46px] bg-blue-600 text-white rounded-full dark:bg-blue-900 dark:text-blue-200">
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                </svg>
              </div>
            </div>
            <a
              className="py-3 px-4 md:px-5 inline-flex justify-between items-center text-sm text-gray-600 border-t border-gray-200 hover:bg-gray-50 rounded-b-xl dark:border-gray-700 dark:text-gray-400 dark:hover:bg-slate-800"
              href="#"
            >
              View reports
              <i className="bi bi-chevron-right"></i>
            </a>
          </div>
          {/* End Card */}
        </div>
        {/* End Grid */}

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5 mt-6">
          <div className="bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] bg-card col-span-3">
            <div className="flex flex-col p-6">
              <h3 className="font-semibold leading-none tracking-tight">
                Overview
              </h3>
            </div>
            <div>
              <ScoreChart data={scoreData} />
            </div>
          </div>
          <div className="bg-card text-card-foreground bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] col-span-2">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="font-semibold leading-none tracking-tight">
                Companies
              </h3>
            </div>
            <div>
              <div className="p-6 pt-0">
                <div className="space-y-8">
                  <div className="flex items-center">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
                      <span className="inline-flex items-center justify-center h-[2.375rem] w-[2.375rem] rounded-full bg-blue-300 dark:bg-blue-700">
                        <span className="font-medium text-blue-800 leading-none dark:text-blue-200">
                          N
                        </span>
                      </span>
                    </span>
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        NCBA BANK
                      </p>
                      <p className="text-sm text-muted-foreground">
                        olivia.martin@email.com
                      </p>
                    </div>
                    <div className="ml-auto">
                      <div className="flex w-32 h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                        <div
                          className="bg-red-600"
                          role="progressbar"
                          style={{ width: "70%" }}
                          aria-valuenow={70}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
                      <span className="inline-flex items-center justify-center h-[2.375rem] w-[2.375rem] rounded-full bg-blue-300 dark:bg-blue-700">
                        <span className="font-medium text-blue-800 leading-none dark:text-blue-200">
                          N
                        </span>
                      </span>
                    </span>
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        NCBA BANK
                      </p>
                      <p className="text-sm text-muted-foreground">
                        olivia.martin@email.com
                      </p>
                    </div>
                    <div className="ml-auto">
                      <div className="flex w-32 h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                        <div
                          className="bg-yellow-400"
                          role="progressbar"
                          style={{ width: "40%" }}
                          aria-valuenow={70}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
                      <span className="inline-flex items-center justify-center h-[2.375rem] w-[2.375rem] rounded-full bg-blue-300 dark:bg-blue-700">
                        <span className="font-medium text-blue-800 leading-none dark:text-blue-200">
                          N
                        </span>
                      </span>
                    </span>
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        NCBA BANK
                      </p>
                      <p className="text-sm text-muted-foreground">
                        olivia.martin@email.com
                      </p>
                    </div>
                    <div className="ml-auto">
                      <div className="flex w-32 h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                        <div
                          className="bg-green-600"
                          role="progressbar"
                          style={{ width: "20%" }}
                          aria-valuenow={70}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
                      <span className="inline-flex items-center justify-center h-[2.375rem] w-[2.375rem] rounded-full bg-blue-300 dark:bg-blue-700">
                        <span className="font-medium text-blue-800 leading-none dark:text-blue-200">
                          N
                        </span>
                      </span>
                    </span>
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        NCBA BANK
                      </p>
                      <p className="text-sm text-muted-foreground">
                        olivia.martin@email.com
                      </p>
                    </div>
                    <div className="ml-auto">
                      <div className="flex w-32 h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                        <div
                          className="bg-red-600"
                          role="progressbar"
                          style={{ width: "70%" }}
                          aria-valuenow={70}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
                      <span className="inline-flex items-center justify-center h-[2.375rem] w-[2.375rem] rounded-full bg-blue-300 dark:bg-blue-700">
                        <span className="font-medium text-blue-800 leading-none dark:text-blue-200">
                          N
                        </span>
                      </span>
                    </span>
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        NCBA BANK
                      </p>
                      <p className="text-sm text-muted-foreground">
                        olivia.martin@email.com
                      </p>
                    </div>
                    <div className="ml-auto">
                      <div className="flex w-32 h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                        <div
                          className="bg-red-600"
                          role="progressbar"
                          style={{ width: "70%" }}
                          aria-valuenow={70}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainDashboard>
  );
};
export default AdminHome;
