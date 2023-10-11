"use client";

import React, { useState } from "react";
import DatepickerComponent from "../../components/DatePicker";
import Dropdown from "../../components/Dropdown";
import Gauge from "../../components/Gauge";
import PdfComponent from "../../components/PdfComponent";
import BreadHeader from "../../components/breadheader";
import MainDashboard from "../../components/dashboards/main_dashboard";
import LocationPickerMap from "../../components/locationpicker";
import TopGauge from "../../components/topgauge";
import { useUser } from "../../context/UserProvider";
import AutocompleteInput from "../../components/AutocompleteInput";

const Home = () => {
  const options = [
    {
      id: "1",
      name: "Maize",
    },
    {
      id: "2",
      name: "Potato",
    },
    {
      id: "3",
      name: "Grass",
    },
    {
      id: "4",
      name: "Tomato",
    },
    {
      id: "5",
      name: "Onion",
    },
    {
      id: "6",
      name: "Tea",
    },
    {
      id: "7",
      name: "Green gram",
    },
    {
      id: "8",
      name: "Avocado",
    },
    {
      id: "9",
      name: "Macadamia",
    },
    {
      id: "10",
      name: "Cow peas",
    },
    {
      id: "11",
      name: "Sesame",
    },
    {
      id: "12",
      name: "Papaya",
    },
  ];
  const { userData } = useUser();

  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const handleLocationSelect = (
    location: { lat: number; lng: number } | null
  ) => {
    setSelectedLocation(location);
  };

  const handleSelect = (selected: Option | null) => {
    setSelectedOption(selected);
  };
  const handlePrint = () => {
    const printContents = document.getElementById("printablediv")?.innerHTML;
    const originalContents = document.body.innerHTML;

    if (printContents) {
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
    }
  };
  return (
    <MainDashboard>
      <div>
        <BreadHeader
          home="Home"
          title={`Hello ${userData.first_name}`}
          description="Here's What We have today"
        />

        {/* Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <div className="bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] col-span-2">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="font-semibold leading-none tracking-tight">
                Calculator
              </h3>
            </div>
            <div className="mr-8 ml-8">
              <div className="mb-5">
                <label
                  htmlFor="input-label"
                  className="block text-sm font-medium mb-2 dark:text-white"
                >
                  Location
                </label>
                <AutocompleteInput onLocationSelect={handleLocationSelect} />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="hs-select-label"
                  className="block text-sm font-medium mb-2 dark:text-white"
                >
                  Loan Period
                </label>
                <input
                  type="text"
                  id="input-label"
                  data-hs-overlay="#hs-focus-datepicker-modal"
                  className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  placeholder="Date Period"
                />
                <div
                  id="hs-focus-datepicker-modal"
                  className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
                >
                  <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                      <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                        <h3 className="font-bold text-gray-800 dark:text-white">
                          Pick Date Period
                        </h3>
                        <button
                          type="button"
                          className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                          data-hs-overlay="#hs-focus-datepicker-modal"
                        >
                          <span className="sr-only">Close</span>
                          <svg
                            className="w-3.5 h-3.5"
                            width={8}
                            height={8}
                            viewBox="0 0 8 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                              fill="currentColor"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="p-4 min-h-full">
                        <div date-rangepicker className="flex items-center">
                          <div className="relative">
                            <label
                              htmlFor="input-label"
                              className="block text-sm font-medium mb-2 dark:text-white"
                            >
                              From
                            </label>
                            <DatepickerComponent />
                          </div>
                          <span className="mx-4 text-gray-500">to</span>
                          <div className="relative">
                            <label
                              htmlFor="input-label"
                              className="block text-sm font-medium mb-2 dark:text-white"
                            >
                              To
                            </label>
                            <DatepickerComponent />
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
                        <button
                          type="button"
                          className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                          data-hs-overlay="#hs-focus-datepicker-modal"
                        >
                          Close
                        </button>
                        <button
                          className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                          data-hs-overlay="#hs-focus-datepicker-modal"
                        >
                          Select
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <Dropdown options={options} onSelect={handleSelect} />
              </div>
              <button
                type="submit"
                className="py-3 px-4 inline-flex justify-center w-full items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                data-hs-overlay="#hs-bg-gray-on-hover-cards"
              >
                Compute Score
              </button>
            </div>
            <div
              id="hs-bg-gray-on-hover-cards"
              className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
            >
              <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all lg:max-w-4xl lg:w-full m-3 lg:mx-auto">
                <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                    <h3 className="font-bold text-gray-800 dark:text-gray-200">
                      Detailed Risk Report Analysis
                    </h3>
                    <div>
                      {/* Col */}
                      <div className="inline-flex gap-x-2 mr-5">
                        <a
                          className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                          href="#"
                        >
                          <i className="bi bi-download"></i>
                          PDF
                        </a>
                        <button
                          className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                          onClick={handlePrint}
                        >
                          <i className="bi bi-printer-fill"></i>
                          Print
                        </button>
                      </div>
                      {/* Col */}
                      <button
                        type="button"
                        className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                        data-hs-overlay="#hs-bg-gray-on-hover-cards"
                      >
                        <span className="sr-only">Close</span>
                        <svg
                          className="w-3.5 h-3.5"
                          width={8}
                          height={8}
                          viewBox="0 0 8 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div id="printablediv" className="p-4 overflow-y-auto">
                    <PdfComponent />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] bg-card col-span-3">
            <div className="flex flex-col p-6">
              <h3 className="font-semibold leading-none tracking-tight">
                Overview
              </h3>
            </div>
            <div>
              <LocationPickerMap location={selectedLocation} />
            </div>
          </div>
          <div className="bg-card text-card-foreground bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] col-span-2">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="font-semibold leading-none tracking-tight">
                Composite Risk Score
              </h3>
              <Gauge />
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
          <TopGauge level={20} />
          <TopGauge level={56} />
          <TopGauge level={90} />
        </div>
        {/* End Grid */}
      </div>
    </MainDashboard>
  );
};
export default Home;
