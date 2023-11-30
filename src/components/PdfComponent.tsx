import TopGauge from "./topgauge";
import Gauge from "./Gauge";
import { TotalScores } from "../data/riskData";
import MapWithMarker from "./MiniMap";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axiosPrivate from "../api/axiosPrivate";
import Swal from "sweetalert2";

interface RiskDataProps {
  myRiskdata: TotalScores;
  loanPeriod: string;
  crop: string;
  myLocation: {
    lat: number;
    lng: number;
  };
  locationScoreId: string;
}

interface FormData {
  debtor_name: string;
  debtor_contacts: string;
  reviewer_comments: string;
  location_score_id: string;
}

const validationSchema = yup.object({
  debtor_name: yup.string().required("Debtor name is required"),
  debtor_contacts: yup.string().required("Debtor contacts are required"),
  reviewer_comments: yup.string().required("Reviewer comments are required"),
  location_score_id: yup.string(),
});

const climate_indices = ["Drought", "Rainfall", "Aridity"];
const water_indices = ["Groundwater", "Water Erosion", "Water Stress"];
const soil_indices = ["Top Soil Fertility", "Soil pH", "Nutrient capacity"];
const PdfComponent = ({
  myRiskdata,
  loanPeriod,
  crop,
  myLocation,
  locationScoreId,
}: RiskDataProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: yupResolver(validationSchema) as any,
  });

  const PROFILE_URL = `/risk/v1/location_scores/${locationScoreId}/update`;
  console.log(locationScoreId);
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    data.location_score_id = locationScoreId;
    axiosPrivate({
      method: "PUT",
      url: PROFILE_URL,
      data: JSON.stringify(data),
    })
      .then((data) => {
        // setUser(data);
        console.log(JSON.stringify(data));
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Comment Submitted",
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
    <>
      {/* Invoice */}
      <div className="max-w-[85rem]  mx-auto my-4 sm:my-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-3 pb-5 px-4 sm:px-6 lg:px-8  border-b border-gray-200 dark:border-gray-700">
            <div>
              <div className="grid space-y-3">
                <dl className="grid sm:flex gap-x-3 text-sm">
                  <dt className="min-w-[108px] max-w-[200px] text-gray-500">
                    Full Name:
                  </dt>
                  <dd className="text-gray-800 dark:text-gray-200">
                    <input
                      type="text"
                      id="debtor_name"
                      className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      placeholder="Full Name"
                      {...register("debtor_name")}
                    />
                    {errors.debtor_name && (
                      <div className="text-red-500">
                        {errors.debtor_name.message}
                      </div>
                    )}
                  </dd>
                </dl>
                <dl className="grid sm:flex gap-x-3 text-sm">
                  <dt className="min-w-[100px] max-w-[200px] text-gray-500">
                    Phone Number:
                  </dt>
                  <dd className="font-medium text-gray-800 dark:text-gray-200">
                    <input
                      type="text"
                      id="debtor_contacts"
                      className="py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      placeholder="+254"
                      {...register("debtor_contacts")}
                    />
                    {errors.debtor_contacts && (
                      <div className="text-red-500">
                        {errors.debtor_contacts.message}
                      </div>
                    )}
                  </dd>
                </dl>
              </div>
            </div>
            {/* Col */}
            <div>
              <div className="grid space-y-3">
                <dl className="grid sm:flex gap-x-3 text-sm">
                  <dt className="min-w-[150px] max-w-[200px] text-gray-500">
                    Location(Town):
                  </dt>
                  <dd className="font-medium text-gray-800 dark:text-gray-200">
                    <input
                      type="text"
                      id="input-label"
                      className="mb-3 py-3 px-4 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                      placeholder="Location"
                    />
                    <address className="not-italic font-normal">
                      {`LatLng(${myLocation?.lat || "Latitude"}, ${
                        myLocation?.lng || "Longitude"
                      })`}
                    </address>
                  </dd>
                </dl>
              </div>
            </div>
            {/* Col */}
          </div>
          {/* End Grid */}
          <div id="printablediv" className="pt-8 px-4 sm:px-6 lg:px-8">
            {/* Grid */}
            <div className="flex justify-between items-center  border-gray-200 dark:border-gray-700">
              <div>
                <img
                  alt="Bitpulse"
                  className="w-40 mx-auto"
                  src="/img/logo.png"
                />
              </div>
            </div>
            {/* End Grid */}
            <div className="mt-5">
              <h4 className="text-2xl mb-2 font-semibold text-gray-800 dark:text-gray-200">
                Climate Adaptation Suggestions To Improve Your Score
              </h4>
              <h4 className="text-lg mb-2 font-semibold text-gray-800 dark:text-gray-200">
                {myRiskdata?.adaptations[1]?.Pillar}
              </h4>
              <p className="text-gray-500 mt-2">
                {myRiskdata?.adaptations[1] && (
                  <li>{myRiskdata?.adaptations[1]?.Suggestion}</li>
                )}
              </p>
              <p className="text-gray-500 mt-2">
                {myRiskdata?.adaptations[2] && (
                  <li>{myRiskdata?.adaptations[2]?.Suggestion}</li>
                )}
              </p>
              <h4 className="text-lg mb-2 font-semibold text-gray-800 dark:text-gray-200 mt-2">
                {myRiskdata?.adaptations[3]?.Pillar}
              </h4>
              <p className="text-gray-500 mt-2">
                {myRiskdata?.adaptations[3] && (
                  <li>{myRiskdata?.adaptations[3]?.Suggestion}</li>
                )}
              </p>
              <p className="text-gray-500 mt-2">
                {myRiskdata?.adaptations[4] && (
                  <li>{myRiskdata?.adaptations[4]?.Suggestion}</li>
                )}
              </p>
              <h4 className="text-lg mb-2 font-semibold text-gray-800 dark:text-gray-200 mt-2">
                {myRiskdata?.adaptations[5]?.Pillar}
              </h4>
              <p className="text-gray-500 mt-2">
                {myRiskdata?.adaptations[5] && (
                  <li>{myRiskdata?.adaptations[5]?.Suggestion}</li>
                )}
              </p>
              <p className="text-gray-500 mt-2">
                <p className="text-gray-500 mt-2">
                  {myRiskdata?.adaptations[6] && (
                    <li>{myRiskdata?.adaptations[6]?.Suggestion}</li>
                  )}
                </p>
              </p>
            </div>
            <div className="mt-5">
              <h4 className="text-lg  font-semibold text-gray-800 dark:text-gray-200">
                Detailed Risk Report Analysis
              </h4>
            </div>

            {/* Table */}
            <div className="grid grid-cols-2 mt-3 border border-gray-200 p-4 rounded-lg  dark:border-gray-700">
              <div className="flex flex-col items-center ">
                <h3 className="mb-2 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                  Map
                </h3>
                {/* <img
              className="w-full object-none h-full  rounded-xl"
              src={mapUrl}
              alt="Image Description"
            /> */}
                <MapWithMarker
                  markerPosition={[
                    myLocation?.lat || -0.3615164,
                    myLocation?.lng || 35.3084548,
                  ]}
                />
              </div>
              <div className="flex flex-col  items-center ">
                <h3 className="  font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                  Composite Risk Score
                </h3>
                <Gauge level={myRiskdata?.composite_total_risk} />
                <div className="w-full pl-10">
                  <div className="mt-2 sm:mt-2">
                    <h4 className="text-xs font-semibold uppercase text-gray-800 dark:text-gray-200">
                      Summary
                    </h4>
                    <ul className="mt-3 flex flex-col">
                      <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:border-gray-700 dark:text-gray-200">
                        <div className="flex items-center justify-between w-full">
                          <span>Loan Period</span>
                          <span>{loanPeriod} Months</span>
                        </div>
                      </li>
                      <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:border-gray-700 dark:text-gray-200">
                        <div className="flex items-center justify-between w-full">
                          <span>Crop</span>
                          <span>{crop}</span>
                        </div>
                      </li>
                      <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-semibold bg-gray-50 border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-slate-800 dark:border-gray-700 dark:text-gray-200">
                        <div className="flex items-center justify-between w-full">
                          <span>Biodiversity</span>
                          <span>Non-protected area</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* End Table */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
              <TopGauge
                pillar="CLIMATE"
                rainfall_risk={myRiskdata?.climate_scores.drought_risk}
                temperature_risk={myRiskdata?.climate_scores.rainfall_risk}
                drought_risk={myRiskdata?.climate_scores.aridity_risk}
                composite_climate_risk={
                  myRiskdata?.climate_scores.composite_climate_risk
                }
                categories={climate_indices}
              />
              <TopGauge
                pillar="WATER"
                rainfall_risk={myRiskdata?.water_scores.ground_water_risk}
                temperature_risk={
                  myRiskdata?.water_scores.rainfall_erosivity_risk
                }
                drought_risk={myRiskdata?.water_scores.location_aquaduct_risk}
                composite_climate_risk={
                  myRiskdata?.water_scores.composite_water_risk
                }
                categories={water_indices}
              />
              <TopGauge
                pillar="SOIL"
                rainfall_risk={myRiskdata?.soil_scores.soil_organic_carbon_risk}
                temperature_risk={myRiskdata?.soil_scores.soil_ph_risk}
                drought_risk={
                  myRiskdata?.soil_scores.cation_exchange_capacity_risk
                }
                composite_climate_risk={
                  myRiskdata?.soil_scores.composite_soil_risk
                }
                categories={soil_indices}
              />
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Thank you!
              </h4>
              <p className="text-gray-500">
                If you have any questions concerning this report, use the
                following contact information:
              </p>
              <div className="mt-2">
                <p className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                  info@adapta.earth
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm text-gray-500">© 2023 ADAPTA.</p>
          </div>
          <div className="mt-5 px-4 sm:px-6 lg:px-8">
            <p>Add a comment</p>
            <textarea
              className=" mt-2 py-3 px-4 block w-full border-gray-200 rounded-md border text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
              rows={3}
              placeholder="Enter a comment ..."
              id="reviewer_comments"
              {...register("reviewer_comments")}
            />
            {errors.reviewer_comments && (
              <div className="text-red-500">
                {errors.reviewer_comments.message}
              </div>
            )}
            <button
              type="submit"
              className=" mt-3 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            >
              SAVE
            </button>
          </div>
        </form>
      </div>
      {/* End Invoice */}
    </>
  );
};

export default PdfComponent;
