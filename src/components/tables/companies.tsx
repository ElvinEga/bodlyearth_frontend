import { requestCompaniesData } from "../../data/requestData";
import Flag from "react-flagkit";

function getStatusClassName(status: string) {
  let className = "";

  if (status === "Registred") {
    className =
      "inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
  } else if (status === "Pending") {
    className =
      "inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
  } else if (status === "Suspended") {
    className =
      "inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
  }

  return className;
}
export default function CompaniesTable() {
  return (
    <>
      {/* Card */}
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
              {/* Header */}
              <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
                <div>
                  {/* Input */}
                  <div className="sm:col-span-1">
                    <label
                      htmlFor="hs-as-table-product-review-search"
                      className="sr-only"
                    >
                      Search
                    </label>
                    <div className="relative lg:w-64 xl:w-96">
                      <input
                        type="text"
                        id="hs-as-table-product-review-search"
                        name="hs-as-table-product-review-search"
                        className="py-2 px-3  pl-11  block w-full border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                        placeholder="Search"
                      />
                      <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none pl-4">
                        <svg
                          className="h-4 w-4 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* End Input */}
                </div>
                <div>
                  <div className="inline-flex gap-x-2">
                    <div
                      className="hs-dropdown relative inline-block [--placement:bottom-right]"
                      data-hs-dropdown-auto-close="inside"
                    >
                      <button
                        id="hs-as-table-table-filter-dropdown"
                        type="button"
                        className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                      >
                        <svg
                          className="w-3 h-3"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        Filter
                      </button>
                      <div
                        className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mt-2 divide-y divide-gray-200 min-w-[12rem] z-10 bg-white shadow-md rounded-lg mt-2 dark:divide-gray-700 dark:bg-gray-800 dark:border dark:border-gray-700"
                        aria-labelledby="hs-as-table-table-filter-dropdown"
                      >
                        <div className="divide-y divide-gray-200 dark:divide-gray-700">
                          <label
                            htmlFor="hs-as-filters-dropdown-all"
                            className="flex py-2.5 px-3"
                          >
                            <input
                              type="checkbox"
                              className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-as-filters-dropdown-all"
                            />
                            <span className="ml-3 text-sm text-gray-800 dark:text-gray-200">
                              All
                            </span>
                          </label>
                          <label
                            htmlFor="hs-as-filters-dropdown-paid"
                            className="flex py-2.5 px-3"
                          >
                            <input
                              type="checkbox"
                              className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-as-filters-dropdown-paid"
                            />
                            <span className="ml-3 text-sm text-gray-800 dark:text-gray-200">
                              Accepted
                            </span>
                          </label>
                          <label
                            htmlFor="hs-as-filters-dropdown-pending"
                            className="flex py-2.5 px-3"
                          >
                            <input
                              type="checkbox"
                              className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-as-filters-dropdown-pending"
                            />
                            <span className="ml-3 text-sm text-gray-800 dark:text-gray-200">
                              Pending
                            </span>
                          </label>
                          <label
                            htmlFor="hs-as-filters-dropdown-declined"
                            className="flex py-2.5 px-3"
                          >
                            <input
                              type="checkbox"
                              className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-as-filters-dropdown-declined"
                            />
                            <span className="ml-3 text-sm text-gray-800 dark:text-gray-200">
                              Declined
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <a
                      className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                      href="#"
                    >
                      <svg
                        className="w-3 h-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M2.63452 7.50001L13.6345 7.5M8.13452 13V2"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                        />
                      </svg>
                      Register Company
                    </a>
                  </div>
                </div>
              </div>
              {/* End Header */}
              {/* Table */}
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-slate-800">
                  <tr>
                    <th scope="col" className="pl-6 py-3 text-left">
                      <label
                        htmlFor="hs-at-with-checkboxes-main"
                        className="flex"
                      >
                        <input
                          type="checkbox"
                          className="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                          id="hs-at-with-checkboxes-main"
                        />
                        <span className="sr-only">Checkbox</span>
                      </label>
                    </th>
                    <th
                      scope="col"
                      className="pl-6 lg:pl-3 xl:pl-0 pr-6 py-3 text-left"
                    >
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Name
                        </span>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-left">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Counrty
                        </span>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-left">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Status
                        </span>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-left">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Created
                        </span>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-right" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {requestCompaniesData.map((data) => (
                    <tr>
                      <td className="h-px w-px whitespace-nowrap">
                        <div className="pl-6 py-3">
                          <label
                            htmlFor="hs-at-with-checkboxes-1"
                            className="flex"
                          >
                            <input
                              type="checkbox"
                              className="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              id="hs-at-with-checkboxes-1"
                            />
                            <span className="sr-only">Checkbox</span>
                          </label>
                        </div>
                      </td>
                      <td className="h-px w-px whitespace-nowrap">
                        <div className="pl-6 lg:pl-3 xl:pl-0 pr-6 py-3">
                          <div className="flex items-center gap-x-3">
                            <span className="inline-flex items-center justify-center h-[2.375rem] w-[2.375rem] rounded-full bg-blue-300 dark:bg-blue-700">
                              <span className="font-medium text-blue-800 leading-none dark:text-blue-200">
                                {data.name.charAt(0)}
                              </span>
                            </span>
                            <div className="grow">
                              <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                                {data.name}
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="h-px w-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="inline-flex items-centertext-sm font-semibold text-gray-800 dark:text-gray-200">
                            <Flag
                              size={24}
                              className="mr-2"
                              country={data.countryCode}
                            />
                          </span>
                          <span className="inline-flex items-centertext-sm font-semibold text-gray-800 dark:text-gray-200">
                            {data.country}
                          </span>
                        </div>
                      </td>

                      <td className="h-px w-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className={getStatusClassName(data.status)}>
                            {data.status}
                          </span>
                        </div>
                      </td>
                      <td className="h-px w-px whitespace-nowrap">
                        <div className="px-6 py-3">
                          <span className="text-sm text-gray-500">
                            {data.created}
                          </span>
                        </div>
                      </td>
                      <td className="h-px w-px whitespace-nowrap">
                        <div className="px-6 py-1.5">
                          <a
                            className="ml-3"
                            href="javascript:;"
                            data-hs-overlay="#hs-ai-invoice-modal"
                          >
                            <div className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white">
                              <i className="bi bi-eye"></i>
                              View
                            </div>
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* End Table */}
              {/* Footer */}
              <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                      6
                    </span>{" "}
                    results
                  </p>
                </div>
                <div>
                  <div className="inline-flex gap-x-2">
                    <button
                      type="button"
                      className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                    >
                      <svg
                        className="w-3 h-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                        />
                      </svg>
                      Prev
                    </button>
                    <button
                      type="button"
                      className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                    >
                      Next
                      <svg
                        className="w-3 h-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              {/* End Footer */}
            </div>
          </div>
        </div>
      </div>
      {/* End Card */}
    </>
  );
}
