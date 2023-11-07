// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use client";

import { useEffect, useState, useRef } from "react";
import Gauge from "../../components/Gauge";
import PdfComponent from "../../components/PdfComponent";
import BreadHeader from "../../components/breadheader";
import MainDashboard from "../../components/dashboards/main_dashboard";
import TopGauge from "../../components/topgauge";
import { useUser } from "../../context/UserProvider";
import AutocompleteInput from "../../components/AutocompleteInput";
import MapComponent from "../../components/MapComponent";
import { format } from "date-fns";
import axiosPrivate from "../../api/axiosPrivate";
import { ClimateScores, RiskData } from "../../data/riskData";
import { isInProtectedArea } from "../../components/utils";
import Swal from "sweetalert2";
import ButtonLoading from "../../components/ButtonLoading";
import html2pdf from "html2pdf.js";

export interface MapCrop {
  isMarkerPlaced: boolean;
  isLocationProtected: boolean;
  selectedCrop: string;
  locationName: string;
  loanPeriod: string;
  mapLocation: MapLocation;
}

export interface MapLocation {
  lat: number | null;
  lng: number | null;
}

const getFormattedFutureDate = (numberOfMonths: number): string => {
  const today = new Date();
  today.setMonth(today.getMonth() + numberOfMonths);
  return format(today, "yyyy-MM-dd"); // Format the date as "yyyy-MM-dd"
};

const getDateToday = (): string => {
  const today = new Date();
  return format(today, "yyyy-MM-dd"); // Format the date as "yyyy-MM-dd"
};

const getFormattedTodayDate = (selectedDate: Date): string => {
  return format(selectedDate, "yyyy-MM-dd"); // Format the date as "yyyy-MM-dd"
};

const Home = () => {
  const options = [
    {
      id: "1",
      name: "Maize",
      value: "maize",
    },
    {
      id: "2",
      name: "Potato",
      value: "potato",
    },
    {
      id: "3",
      name: "Grass",
      value: "grass",
    },
    {
      id: "4",
      name: "Tomato",
      value: "tomato",
    },
    {
      id: "5",
      name: "Onion",
      value: "onion",
    },
    {
      id: "6",
      name: "Tea",
      value: "tea",
    },
    {
      id: "7",
      name: "Green gram",
      value: "green gram",
    },
    {
      id: "8",
      name: "Avocado",
      value: "avocado",
    },
    {
      id: "9",
      name: "Macadamia",
      value: "macadamia",
    },
    {
      id: "10",
      name: "Cow peas",
      value: "cow peas",
    },
    {
      id: "11",
      name: "Sesame",
      value: "sesame",
    },
    {
      id: "12",
      name: "Papaya",
      value: "papaya",
    },
  ];

  const initialFormValues = {
    crop: "",
    latitude: null,
    longitude: null,
    startDate: "",
    endDate: "",
  };

  const initialClimateScores: ClimateScores = {
    rainfall_risk: 0,
    temperature_risk: 0,
    drought_score: 0,
    rainfall_score: 0,
    temperature_score: 0,
    composite_climate_score: 0,
    drought_risk: 0,
    composite_climate_risk: 0,
  };

  const climate_indices = ["Drought", "Rainfall", "Aridity"];

  const water_indices = [
    "Groundwater Availability",
    "Water Erosion",
    "Water Stress",
  ];

  const soil_indices = ["Top Soil Fertility", "Soil pH", "Nutrient capacity"];

  const { userData } = useUser();
  const [climateScores, setClimateScores] =
    useState<ClimateScores>(initialClimateScores);

  const [riskData, setRiskData] = useState<RiskData>();
  const [isLoading, setIsLoading] = useState(false);
  const [isComputed, setIsComputed] = useState(false);
  const [isLocationProtected, setIsLocationProtected] = useState(false);

  const [selectedCrop, setSelectedCrop] = useState("");
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [formValues, setFormValues] = useState({});
  const elementRef = useRef(null);

  const [mapCrop, setMapCrop] = useState<MapCrop>({
    isMarkerPlaced: true,
    isLocationProtected: false,
    selectedCrop: "",
    locationName: "",
    loanPeriod: "",
    mapLocation: {
      lat: 0, // Initial latitude value
      lng: 0, // Initial longitude value
    },
  });

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [toMonths, setToMonths] = useState(1);

  const handleChangeMonth = (event) => {
    let months = parseInt(event.target.value);
    if (months < 1) {
      months = 1;
    }
    setToMonths(months);
    const tDate = getFormattedFutureDate(months);
    const fDate = getDateToday;
    setFromDate(fDate);
    setToDate(tDate);
    setFormValues({
      ...formValues,
      startDate: fromDate,
      endDate: toDate,
    });
    const latitude = selectedLocation?.lat;
    const longitude = selectedLocation?.lng;

    // Update the form with the selected crop name
    setFormValues({
      ...formValues,
      crop: selectedCrop,
      startDate: fromDate,
      endDate: toDate,
      latitude: latitude,
      longitude: longitude,
    });
  };

  const handleBlur = () => {
    if (toMonths < 1 || isNaN(toMonths)) {
      setToMonths(1);
      const tDate = getFormattedFutureDate(1);
      const fDate = getDateToday;
      setFromDate(fDate);
      setToDate(tDate);
      setFormValues({
        ...formValues,
        startDate: fromDate,
        endDate: toDate,
      });
    }
  };

  const handleFromDateChange = (selectedDate: Date) => {
    const fDate = getFormattedTodayDate(selectedDate);
    setFromDate(fDate);
    setFormValues({
      ...formValues,
      startDate: fromDate,
    });
  };

  const handleToDateChange = () => {
    const fDate = getFormattedFutureDate(1);
    setToDate(fDate);
    setFormValues({
      ...formValues,
      endDate: toDate,
    });
  };

  const [selectedLocation, setSelectedLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const handleLocationSelect = (
    location: { lat: number; lng: number } | null
  ) => {
    setSelectedLocation(location);
    setFormValues({
      ...formValues,
      crop: selectedCrop,
      startDate: fromDate,
      endDate: toDate,
      longitude: location.lng,
      latitude: location.lat,
    });
    isInProtectedArea([location.lng, location.lat]).then((result) => {
      if (result === true) {
        setIsLocationProtected(true);
        Swal.fire({
          icon: "warning",
          title: "You have selected a protected area.",
          text: "Select an area that is not protected to proceed",
        });
      } else {
        setIsLocationProtected(false);
      }
    });
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

  const handleDownloadPDF = () => {
    const modalContent = document.getElementById("printablediv");
    console.log("generatePDF:modalContent: ", modalContent);

    html2pdf().from(modalContent).save("modal_content.pdf");
  };

  const isFormValid = (): boolean => {
    if (formValues.latitude == null || formValues.longitude == null) {
      Swal.fire({
        icon: "error",
        title: "Location Required",
        text: "Please provide latitude and longitude",
      });
      return false;
    } else if (formValues.crop == null || formValues.crop == "") {
      Swal.fire({
        icon: "error",
        title: "Crop Required",
        text: "Please select a crop",
      });
      return false;
    } else if (formValues.startDate == null || formValues.endDate == "") {
      Swal.fire({
        icon: "error",
        title: "Loan Perid Required",
        text: "Please provide number of months for the Loan",
      });
      return false;
    } else if (isLocationProtected) {
      Swal.fire({
        icon: "error",
        title: "STOP.",
        text: "You have selected a Protected Area",
      });
      return false;
    }

    return true;
  };

  const handleMarkerPlaced = ({ lat, lng }) => {
    setSelectedLocation({ lat, lng });
    setFormValues({
      ...formValues,
      crop: selectedCrop,
      startDate: fromDate,
      endDate: toDate,
      latitude: lat,
      longitude: lng,
    });
    setMapCrop((prevState) => ({
      ...prevState,
      isMarkerPlaced: true,
      isLocationProtected: false,
      selectedCrop: selectedCrop,
      locationName: "",
      startDate: fromDate,
      endDate: toDate,
      mapLocation: {
        lat: lat, // New latitude value
        lng: lng, // New longitude value
      },
    }));
    isInProtectedArea([lng, lat]).then((result) => {
      if (result === true) {
        setIsLocationProtected(true);
        Swal.fire({
          icon: "warning",
          title: "STOP.",
          text: "You have selected a Protected Area",
        });
      } else {
        setIsLocationProtected(false);
      }
    });
  };

  const handleMarkerClear = () => {
    setMapCrop((prevState) => ({
      ...prevState,
      isMarkerPlaced: false,
      isLocationProtected: false,
      selectedCrop: "",
      locationName: "",
      startDate: "",
      endDate: "",
      mapLocation: {
        lat: null, // New latitude value
        lng: null, // New longitude value
      },
    }));
  };

  const handleClearForm = () => {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonColor: "#22c55e",
      denyButtonColor: "#3b82f6",
      cancelButtonColor: "red",
      confirmButtonText: "Save & Clear",
      denyButtonText: `Save`,
      cancelButtonText: "Clear",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        setSelectedCrop("");
        setFormValues(initialFormValues);
        // setRiskData(Risk);
        setClimateScores(initialClimateScores);
        setIsComputed(false);
        Swal.fire("Saved and Reset", "", "success");
        window.location.reload();
      } else if (result.isDenied) {
        setSelectedCrop("");
        // setFormValues(initialFormValues);
        // setRiskData(Risk);
        setClimateScores(initialClimateScores);
        setIsComputed(false);
        Swal.fire("Changes saved", "", "info");
        // window.location.reload();
      }
    });
  };

  const handleCropSelect = (event) => {
    const selectedCropName = event.target.value;
    setSelectedCrop(selectedCropName);
    const latitude = selectedLocation?.lat;
    const longitude = selectedLocation?.lng;

    // Update the form with the selected crop name
    setFormValues({
      ...formValues,
      crop: selectedCropName,
      startDate: fromDate,
      endDate: toDate,
      latitude: latitude,
      longitude: longitude,
    });
  };

  const handleReportClick = () => {
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 100);
  };

  const onSubmit = async () => {
    // htmlToImageConvert();
    if (!isFormValid()) {
      return;
    }

    const latitude = selectedLocation?.lat;
    const longitude = selectedLocation?.lng;

    // Update the form with the selected crop name
    setFormValues((prevState) => ({
      ...prevState,
      crop: selectedCrop,
      startDate: fromDate,
      endDate: toDate,
      latitude: latitude,
      longitude: longitude,
    }));

    // alert(formValues.latitude);

    const RISK_URL = `/risk/v1/risk_score/location_scores/get_score`;
    setIsLoading(true);
    await axiosPrivate<RiskData>({
      method: "POST",
      url: RISK_URL,
      data: JSON.stringify(formValues),
    })
      .then((data) => {
        // console.log(JSON.stringify(data));
        if (
          data === null ||
          data === undefined ||
          Object.keys(data).length === 0
        ) {
          // Handle empty data
          Swal.fire({
            icon: "warning",
            title: "Area Data Not Available",
            text: "Error retriving data From Area",
          });
        } else {
          setRiskData(data.total_scores);
          setClimateScores(data.climate_scores);
          if (data.total_scores.composite_total_risk > 79) {
            Swal.fire({
              icon: "warning",
              title: "The risk in the selected area is too high.",
              text: "It is recommended not to proceed with this project.",
            });
          }
        }
        setIsLoading(false);
        setIsComputed(true);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("API Error:", error);
      });
  };

  useEffect(() => {
    // Set initial values for "from date" and "to date" when the component is mounted
    const today = new Date();
    handleFromDateChange(today);
    handleToDateChange();
  }, []);

  return (
    <MainDashboard>
      <div>
        <BreadHeader
          title={`Hello ${userData.first_name}`}
          description="Input data to calculate Risk"
        />

        {/* Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <div className="bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] col-span-2">
            <div className="p-5">
              <div className="mb-3">
                <label
                  htmlFor="input-label"
                  className="block text-sm font-medium mb-1 dark:text-white"
                >
                  Location
                </label>
                <AutocompleteInput
                  value={`LatLng(${selectedLocation?.lat || "Latitude"}, ${
                    selectedLocation?.lng || "Longitude"
                  })`}
                  onLocationSelect={handleLocationSelect}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="hs-select-label"
                  className="block text-sm font-medium mb-1 dark:text-white"
                >
                  Loan Period (Months)
                </label>
                <input
                  type="number"
                  id="input-label"
                  value={`${toMonths}`}
                  onChange={handleChangeMonth}
                  onBlur={handleBlur}
                  // data-hs-overlay="#hs-focus-datepicker-modal"
                  className="h-10 py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  placeholder="Date Period in Months"
                />
                <p className="text-gray-500 text-xs pt-2">{`${fromDate} to ${toDate}`}</p>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="hs-select-label"
                  className="block text-sm font-medium mb-2 dark:text-white"
                >
                  Select a Crop:
                </label>
                <select
                  className="h-10 py-2 px-4 pr-9 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  onChange={handleCropSelect}
                  value={selectedCrop}
                >
                  <option value="">Select Crop</option>
                  {options.map((option) => (
                    <option key={option.id} value={option.value}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex mb-3">
                <div className="hs-tooltip inline-block [--placement:bottom]">
                  <p className="text-sm text-gray-700 dark:text-gray-400">
                    <i className="bi bi-exclamation-circle-fill mr-1"></i>
                    Biodiversity
                  </p>
                  <span
                    className="w-80 hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700"
                    role="tooltip"
                  >
                    Biodiversity regions are geographically defined protected
                    areas that are effectively maintained through legal or other
                    ways to preserve biological diversity as well as natural
                    resources and related cultural resources, such as forests
                    and wildlife sanctuaries.(JUCN 1994)
                  </span>
                </div>
                <div className="ml-auto flex items-center space-x-3">
                  {isLocationProtected ? (
                    <i className="bi bi-exclamation-triangle-fill text-lg text-red-500"></i>
                  ) : (
                    <i className="bi bi-patch-check-fill text-lg text-green-500"></i>
                  )}
                </div>
              </div>

              {!isLoading && !isComputed ? (
                <button
                  className="h-9 py-3 px-4 inline-flex justify-center w-full items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                  // data-hs-overlay="#hs-bg-gray-on-hover-cards"
                  onClick={onSubmit}
                >
                  Compute Score
                </button>
              ) : (
                ""
              )}
              <ButtonLoading
                onClick={onSubmit}
                isLoading={isLoading}
                text="Loading ..."
              />
              {isComputed ? (
                <button
                  className="h-9 py-3 px-4 inline-flex justify-center w-full items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                  // data-hs-overlay="#hs-bg-gray-on-hover-cards"
                  onClick={handleClearForm}
                >
                  Compute New Score
                </button>
              ) : (
                ""
              )}
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
                        <button
                          className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                          onClick={handleDownloadPDF}
                        >
                          <i className="bi bi-download"></i>
                          PDF
                        </button>
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
                  <div className="p-4 overflow-y-auto">
                    <PdfComponent
                      myRiskdata={riskData}
                      loanPeriod={toMonths}
                      crop={formValues.crop}
                      myLocation={selectedLocation}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] bg-card col-span-3">
            <div ref={elementRef}>
              <MapComponent
                mapLocation={selectedLocation}
                onMarkerPlaced={handleMarkerPlaced}
                onMarkerClear={handleMarkerClear}
              />
            </div>
          </div>
          <div className="bg-card text-card-foreground bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] col-span-2">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="font-semibold text-sm leading-none tracking-tight">
                Composite Risk Score
              </h3>
              <Gauge level={riskData?.composite_total_risk} />

              {isComputed ? (
                <div>
                  <h2 className="font-semibold text-sm leading-none tracking-tight mt-2">
                    CLIMATE ADAPTATION PLAN
                  </h2>
                  <p className="text-sm mt-3">
                    {riskData?.adaptations[1].Suggestion}
                  </p>
                  <button
                    className="h-9 mt-3 py-3 px-4 inline-flex justify-center w-full items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                    data-hs-overlay="#hs-bg-gray-on-hover-cards"
                    onClick={handleReportClick}
                  >
                    View Full Report
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
          <TopGauge
            pillar="CLIMATE"
            rainfall_risk={riskData?.climate_scores.drought_risk}
            temperature_risk={riskData?.climate_scores.rainfall_risk}
            drought_risk={riskData?.climate_scores.aridity_risk}
            composite_climate_risk={
              riskData?.climate_scores.composite_climate_risk
            }
            categories={climate_indices}
          />
          <TopGauge
            pillar="WATER"
            rainfall_risk={riskData?.water_scores.ground_water_risk}
            temperature_risk={riskData?.water_scores.rainfall_erosivity_risk}
            drought_risk={riskData?.water_scores.location_aquaduct_risk}
            composite_climate_risk={riskData?.water_scores.composite_water_risk}
            categories={water_indices}
          />
          <TopGauge
            pillar="SOIL"
            rainfall_risk={riskData?.soil_scores.soil_organic_carbon_risk}
            temperature_risk={riskData?.soil_scores.soil_ph_risk}
            drought_risk={riskData?.soil_scores.cation_exchange_capacity_risk}
            composite_climate_risk={riskData?.soil_scores.composite_soil_risk}
            categories={soil_indices}
          />
        </div>
        {/* End Grid */}
      </div>
    </MainDashboard>
  );
};
export default Home;
