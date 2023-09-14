import { requestRolesData } from "../../data/requestData";

export default function RolesTable() {
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
                      Create Role
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
                          Role
                        </span>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="pl-6 lg:pl-3 xl:pl-0 pr-6 py-3 text-left"
                    >
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Description
                        </span>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-left">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Permissions
                        </span>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-left">
                      <div className="flex items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                          Create
                        </span>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 text-right" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {requestRolesData.map((data) => (
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
                          <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">
                            {data.role}
                          </span>
                        </div>
                      </td>
                      <td className="h-px w-56">
                        <div className="pl-6 lg:pl-3 xl:pl-0 pr-6 py-3">
                          <p className="text-sm text-gray-500">
                            {data.description}
                          </p>
                        </div>
                      </td>

                      <td className="h-px w-80">
                        <div className="px-6 py-2">
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {/* {data.type} */}
                            {data.permissions.map((permission) => (
                              <span className="ml-2 mb-2 inline-flex items-center gap-1.5 py-1 px-2 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200">
                                {permission}
                              </span>
                            ))}
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
                            <div className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-orange-500 text-gray-100 shadow-sm align-middle hover:bg-orange-300 text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white">
                              <i className="bi bi-pen"></i>
                              Edit
                            </div>
                          </a>
                          <a
                            className="ml-3"
                            href="javascript:;"
                            data-hs-overlay="#hs-ai-invoice-modal"
                          >
                            <div className="py-1 px-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-red-500 text-gray-100 shadow-sm align-middle hover:bg-red-300 text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white">
                              <i className="bi bi-trash"></i>
                              Delete
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
