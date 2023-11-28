import Swal from "sweetalert2";
import axiosPrivate from "../../api/axiosPrivate";
import BreadHeader from "../../components/breadheader";
import MainDashboard from "../../components/dashboards/main_dashboard";
import { ecropData } from "../../data/ecoData";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

export default function EcoCrop() {
  const URL_LIST = `/back_office/v1/eco-crop`;
  const [cropList, setCrop] = useState<ecropData>();
  // const loadCrops = () => {
  //   axiosPrivate<ecropData>({ method: "GET", url: URL_LIST })
  //     .then((data) => {
  //       setCrop(data);
  //     })
  //     .catch((error) => {
  //       Swal.fire({
  //         icon: "error",
  //         title: "Not Authorized.",
  //         text: "You are not Authorized to access this Section",
  //       });
  //       console.error("API Error:", error);
  //     });
  // };

  useQuery(["userDetails"], () => {
    return axiosPrivate<ecropData>({ method: "GET", url: URL_LIST })
      .then((data) => {
        setCrop(data);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Not Authorized.",
          text: "You are not Authorized to access this Section",
        });
        console.error("API Error:", error);
      });
  });
  return (
    <MainDashboard>
      <div>
        <BreadHeader
          title="Eco Crops"
          description="Add, Edit and Search Crops"
        />
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="border rounded-lg overflow-hidden dark:border-gray-700">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th scope="col" className="py-3 ps-4">
                          <div className="flex items-center h-5">
                            <input
                              id="hs-table-checkbox-all"
                              type="checkbox"
                              className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                            />
                            <label
                              htmlFor="hs-table-checkbox-all"
                              className="sr-only"
                            >
                              Checkbox
                            </label>
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                        >
                          Id
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                        >
                          Name
                        </th>

                        <th
                          scope="col"
                          className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {cropList?.data.map((crop, key) => (
                        <tr>
                          <td className="py-3 ps-4">
                            <div className="flex items-center h-5">
                              <input
                                id="hs-table-checkbox-1"
                                type="checkbox"
                                className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              />
                              <label
                                htmlFor="hs-table-checkbox-1"
                                className="sr-only"
                              >
                                Checkbox
                              </label>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                            {key}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                            {crop}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                            <button
                              type="button"
                              className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <a
                  className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="#"
                >
                  Add Crop
                </a>
              </div>
              <div>
                {/* Card */}
                <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-10 dark:border-gray-700">
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Add Crop
                  </h2>
                  <form>
                    <div className="mt-6 grid gap-4 lg:gap-6">
                      {/* Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                        {/* Input Number */}
                        <div
                          className="py-2 px-3 bg-white border border-gray-200 rounded-lg dark:bg-slate-900 dark:border-gray-700"
                          data-hs-input-number=""
                        >
                          <div className="w-full flex justify-between items-center gap-x-5">
                            <div className="grow">
                              <span className="block text-xs text-gray-500 dark:text-gray-400">
                                Name
                              </span>
                              <input
                                className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white"
                                type="text"
                                placeholder="Crop Name"
                                data-hs-input-number-input=""
                              />
                            </div>
                          </div>
                        </div>
                        {/* End Input Number */}
                        {/* Input Number */}
                        <div
                          className="py-2 px-3 bg-white border border-gray-200 rounded-lg dark:bg-slate-900 dark:border-gray-700"
                          data-hs-input-number=""
                        >
                          <div className="w-full flex justify-between items-center gap-x-5">
                            <div className="grow">
                              <span className="block text-xs text-gray-500 dark:text-gray-400">
                                Optimal min temperature
                              </span>
                              <input
                                className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white"
                                type="text"
                                defaultValue={1}
                                data-hs-input-number-input=""
                              />
                            </div>
                            <div className="flex justify-end items-center gap-x-1.5">
                              <button
                                type="button"
                                className="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                data-hs-input-number-decrement=""
                              >
                                <i className="bi bi-dash-circle"></i>
                              </button>
                              <button
                                type="button"
                                className="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                data-hs-input-number-increment=""
                              >
                                <i className="bi bi-plus-circle"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* End Input Number */}
                        {/* Input Number */}
                        <div
                          className="py-2 px-3 bg-white border border-gray-200 rounded-lg dark:bg-slate-900 dark:border-gray-700"
                          data-hs-input-number=""
                        >
                          <div className="w-full flex justify-between items-center gap-x-5">
                            <div className="grow">
                              <span className="block text-xs text-gray-500 dark:text-gray-400">
                                optimal max temperature
                              </span>
                              <input
                                className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white"
                                type="text"
                                defaultValue={1}
                                data-hs-input-number-input=""
                              />
                            </div>
                            <div className="flex justify-end items-center gap-x-1.5">
                              <button
                                type="button"
                                className="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                data-hs-input-number-decrement=""
                              >
                                <i className="bi bi-dash-circle"></i>
                              </button>
                              <button
                                type="button"
                                className="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                data-hs-input-number-increment=""
                              >
                                <i className="bi bi-plus-circle"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* End Input Number */}
                        {/* Input Number */}
                        <div
                          className="py-2 px-3 bg-white border border-gray-200 rounded-lg dark:bg-slate-900 dark:border-gray-700"
                          data-hs-input-number=""
                        >
                          <div className="w-full flex justify-between items-center gap-x-5">
                            <div className="grow">
                              <span className="block text-xs text-gray-500 dark:text-gray-400">
                                optimal min rainfall
                              </span>
                              <input
                                className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white"
                                type="text"
                                defaultValue={1}
                                data-hs-input-number-input=""
                              />
                            </div>
                            <div className="flex justify-end items-center gap-x-1.5">
                              <button
                                type="button"
                                className="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                data-hs-input-number-decrement=""
                              >
                                <i className="bi bi-dash-circle"></i>
                              </button>
                              <button
                                type="button"
                                className="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                data-hs-input-number-increment=""
                              >
                                <i className="bi bi-plus-circle"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* End Input Number */}
                        {/* Input Number */}
                        <div
                          className="py-2 px-3 bg-white border border-gray-200 rounded-lg dark:bg-slate-900 dark:border-gray-700"
                          data-hs-input-number=""
                        >
                          <div className="w-full flex justify-between items-center gap-x-5">
                            <div className="grow">
                              <span className="block text-xs text-gray-500 dark:text-gray-400">
                                absolute_min_temperature
                              </span>
                              <input
                                className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white"
                                type="text"
                                defaultValue={1}
                                data-hs-input-number-input=""
                              />
                            </div>
                            <div className="flex justify-end items-center gap-x-1.5">
                              <button
                                type="button"
                                className="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                data-hs-input-number-decrement=""
                              >
                                <i className="bi bi-dash-circle"></i>
                              </button>
                              <button
                                type="button"
                                className="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                data-hs-input-number-increment=""
                              >
                                <i className="bi bi-plus-circle"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* End Input Number */}
                        {/* Input Number */}
                        <div
                          className="py-2 px-3 bg-white border border-gray-200 rounded-lg dark:bg-slate-900 dark:border-gray-700"
                          data-hs-input-number=""
                        >
                          <div className="w-full flex justify-between items-center gap-x-5">
                            <div className="grow">
                              <span className="block text-xs text-gray-500 dark:text-gray-400">
                                absolute_max_temperature
                              </span>
                              <input
                                className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white"
                                type="text"
                                defaultValue={1}
                                data-hs-input-number-input=""
                              />
                            </div>
                            <div className="flex justify-end items-center gap-x-1.5">
                              <button
                                type="button"
                                className="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                data-hs-input-number-decrement=""
                              >
                                <i className="bi bi-dash-circle"></i>
                              </button>
                              <button
                                type="button"
                                className="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                data-hs-input-number-increment=""
                              >
                                <i className="bi bi-plus-circle"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* End Input Number */}
                        {/* Input Number */}
                        <div
                          className="py-2 px-3 bg-white border border-gray-200 rounded-lg dark:bg-slate-900 dark:border-gray-700"
                          data-hs-input-number=""
                        >
                          <div className="w-full flex justify-between items-center gap-x-5">
                            <div className="grow">
                              <span className="block text-xs text-gray-500 dark:text-gray-400">
                                absolute_max_rainfall
                              </span>
                              <input
                                className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white"
                                type="text"
                                defaultValue={1}
                                data-hs-input-number-input=""
                              />
                            </div>
                            <div className="flex justify-end items-center gap-x-1.5">
                              <button
                                type="button"
                                className="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                data-hs-input-number-decrement=""
                              >
                                <i className="bi bi-dash-circle"></i>
                              </button>
                              <button
                                type="button"
                                className="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                data-hs-input-number-increment=""
                              >
                                <i className="bi bi-plus-circle"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* End Input Number */}
                        {/* Input Number */}
                        <div
                          className="py-2 px-3 bg-white border border-gray-200 rounded-lg dark:bg-slate-900 dark:border-gray-700"
                          data-hs-input-number=""
                        >
                          <div className="w-full flex justify-between items-center gap-x-5">
                            <div className="grow">
                              <span className="block text-xs text-gray-500 dark:text-gray-400">
                                optimal_min_soil_ph
                              </span>
                              <input
                                className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white"
                                type="text"
                                defaultValue={1}
                                data-hs-input-number-input=""
                              />
                            </div>
                            <div className="flex justify-end items-center gap-x-1.5">
                              <button
                                type="button"
                                className="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                data-hs-input-number-decrement=""
                              >
                                <i className="bi bi-dash-circle"></i>
                              </button>
                              <button
                                type="button"
                                className="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                data-hs-input-number-increment=""
                              >
                                <i className="bi bi-plus-circle"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* End Input Number */}
                        {/* Input Number */}
                        <div
                          className="py-2 px-3 bg-white border border-gray-200 rounded-lg dark:bg-slate-900 dark:border-gray-700"
                          data-hs-input-number=""
                        >
                          <div className="w-full flex justify-between items-center gap-x-5">
                            <div className="grow">
                              <span className="block text-xs text-gray-500 dark:text-gray-400">
                                optimal_max_soil_ph
                              </span>
                              <input
                                className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white"
                                type="text"
                                defaultValue={1}
                                data-hs-input-number-input=""
                              />
                            </div>
                            <div className="flex justify-end items-center gap-x-1.5">
                              <button
                                type="button"
                                className="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                data-hs-input-number-decrement=""
                              >
                                <i className="bi bi-dash-circle"></i>
                              </button>
                              <button
                                type="button"
                                className="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                data-hs-input-number-increment=""
                              >
                                <i className="bi bi-plus-circle"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* End Input Number */}
                        {/* Input Number */}
                        <div
                          className="py-2 px-3 bg-white border border-gray-200 rounded-lg dark:bg-slate-900 dark:border-gray-700"
                          data-hs-input-number=""
                        >
                          <div className="w-full flex justify-between items-center gap-x-5">
                            <div className="grow">
                              <span className="block text-xs text-gray-500 dark:text-gray-400">
                                absolute_min_soil_ph
                              </span>
                              <input
                                className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white"
                                type="text"
                                defaultValue={1}
                                data-hs-input-number-input=""
                              />
                            </div>
                            <div className="flex justify-end items-center gap-x-1.5">
                              <button
                                type="button"
                                className="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                data-hs-input-number-decrement=""
                              >
                                <i className="bi bi-dash-circle"></i>
                              </button>
                              <button
                                type="button"
                                className="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                data-hs-input-number-increment=""
                              >
                                <i className="bi bi-plus-circle"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* End Input Number */}
                        {/* Input Number */}
                        <div
                          className="py-2 px-3 bg-white border border-gray-200 rounded-lg dark:bg-slate-900 dark:border-gray-700"
                          data-hs-input-number=""
                        >
                          <div className="w-full flex justify-between items-center gap-x-5">
                            <div className="grow">
                              <span className="block text-xs text-gray-500 dark:text-gray-400">
                                absolute_max_soil_ph
                              </span>
                              <input
                                className="w-full p-0 bg-transparent border-0 text-gray-800 focus:ring-0 dark:text-white"
                                type="text"
                                defaultValue={1}
                                data-hs-input-number-input=""
                              />
                            </div>
                            <div className="flex justify-end items-center gap-x-1.5">
                              <button
                                type="button"
                                className="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                data-hs-input-number-decrement=""
                              >
                                <i className="bi bi-dash-circle"></i>
                              </button>
                              <button
                                type="button"
                                className="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                data-hs-input-number-increment=""
                              >
                                <i className="bi bi-plus-circle"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* End Input Number */}
                      </div>
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
            </div>
          </div>
        </div>
      </div>
    </MainDashboard>
  );
}
