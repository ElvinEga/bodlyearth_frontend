import GaugeComponent from "react-gauge-component";
import { useState } from "react";
import TopGauge from "./topgauge";

export default function PdfComponent() {
  const [currentValue, setCurrentValue] = useState(30);
  return (
    <>
      {/* Invoice */}
      <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto my-4 sm:my-10">
        {/* Grid */}
        <div className="mb-5 pb-5 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
          <div>
            <img alt="Bitpulse" className="w-40 mx-auto" src="/img/logo.png" />
          </div>
        </div>
        {/* End Grid */}
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-3 pb-3  border-b border-gray-200 dark:border-gray-700">
          <div>
            <div className="grid space-y-3">
              <dl className="grid sm:flex gap-x-3 text-sm">
                <dt className="min-w-[150px] max-w-[200px] text-gray-500">
                  To:
                </dt>
                <dd className="text-gray-800 dark:text-gray-200">
                  <a
                    className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium"
                    href="#"
                  >
                    name@site.com
                  </a>
                </dd>
              </dl>
              <dl className="grid sm:flex gap-x-3 text-sm">
                <dt className="min-w-[150px] max-w-[200px] text-gray-500">
                  Name:
                </dt>
                <dd className="font-medium text-gray-800 dark:text-gray-200">
                  <span className="block font-semibold">Elvin Ambasa</span>
                  <address className="not-italic font-normal">
                    0701064273,
                    <br />
                  </address>
                </dd>
              </dl>
            </div>
          </div>
          {/* Col */}
          <div>
            <div className="grid space-y-3">
              <dl className="grid sm:flex gap-x-3 text-sm">
                <dt className="min-w-[150px] max-w-[200px] text-gray-500">
                  Location:
                </dt>
                <dd className="font-medium text-gray-800 dark:text-gray-200">
                  <span className="block font-semibold">Elvin Ambasa</span>
                  <address className="not-italic font-normal">
                    Nairobi,Kenya,
                    <br />
                    LatLng(1.041554, 35.233106),
                  </address>
                </dd>
              </dl>
            </div>
          </div>
          {/* Col */}
        </div>
        {/* End Grid */}
        <div className="mt-5">
          <h4 className="text-lg mb-2 font-semibold text-gray-800 dark:text-gray-200">
            Climate Adaptation Suggestions To Improve Your Score
          </h4>
          <p className="text-gray-500">
            Consider investing in crop rotation with crop varieties that are
            drought tolerant such as sorghum, cowpeas, cassava, etc. Crop
            rotation helps to maintain soil fertility over many harvest cycles.
            This is a low-cost investment with high returns.
          </p>
          <p className="text-gray-500">
            Investment in drainage systems is required to redirect water to
            storage areas during rainy seasons. This water can be used for
            irrigation. We also recommend that you dig ditches and trenches to
            divert and distribute excess rainwater. This is a medium-cost
            investment with big returns.
          </p>
          <p className="text-gray-500">
            Invest in agroforestry (planting trees on the farm or shade tree
            planting) since it increases the retention of organic carbon in
            soils. We recommend planting a minimum of 5 native/ indigenous trees
            to add organic matter to the soil through leaf falls and also
            improve soil structure. This is a low-cost investment with high
            returns.
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
            <img
              className="w-full object-cover rounded-xl"
              src="/img/mapview.jpg"
              alt="Image Description"
            />
          </div>
          <div className="flex flex-col  items-center ">
            <h3 className="  font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
              Composite Risk Score
            </h3>
            <GaugeComponent
              className="w-72"
              labels={{
                valueLabel: {
                  formatTextValue: (value) => value + "",
                  matchColorWithArc: true,
                  style: {
                    fontSize: "48px",
                    fontWeight: 700,
                    fill: "#374151",
                    textShadow: "none",
                  },
                },
                tickLabels: {
                  defaultTickValueConfig: {
                    formatTextValue: (value) => value + "",
                    style: {
                      fontSize: "12px",
                      fontWeight: 700,
                      fill: "#6B7280",
                      textShadow: "none",
                    },
                  },
                  defaultTickLineConfig: {
                    // char: "_",
                    hide: true,
                    style: {
                      // display: "none",
                      fontSize: "12px",
                      fill: "#6B7280",
                      textShadow: "none",
                    },
                  },
                },
              }}
              arc={{
                padding: 0.8,
                subArcs: [
                  {
                    limit: 30,
                    color: "#16A34A",
                    showTick: true,
                    tooltip: { text: "Low" },
                  },
                  {
                    limit: 55,
                    color: "#A3E635",
                    showTick: true,
                    tooltip: { text: "Fine" },
                  },

                  {
                    limit: 70,
                    color: "#facc15",
                    showTick: true,
                    tooltip: { text: "Fine" },
                  },
                  {
                    limit: 80,
                    color: "#F87171",
                    showTick: true,
                    tooltip: { text: "Fine" },
                  },
                  {
                    limit: 90,
                    color: "#ef4449",
                    showTick: true,
                    tooltip: { text: "Fine" },
                  },
                  {
                    limit: 100,
                    color: "#DC2626",
                    showTick: true,
                    tooltip: { text: "Full" },
                  },
                ],
              }}
              value={currentValue}
            />
            <div className="w-full pl-10">
              <div className="mt-2 sm:mt-2">
                <h4 className="text-xs font-semibold uppercase text-gray-800 dark:text-gray-200">
                  Summary
                </h4>
                <ul className="mt-3 flex flex-col">
                  <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:border-gray-700 dark:text-gray-200">
                    <div className="flex items-center justify-between w-full">
                      <span>Loan Period</span>
                      <span>11-2023</span>
                    </div>
                  </li>
                  <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:border-gray-700 dark:text-gray-200">
                    <div className="flex items-center justify-between w-full">
                      <span>Crop</span>
                      <span>Maize</span>
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
          <TopGauge level={20} />
          <TopGauge level={56} />
          <TopGauge level={90} />
        </div>
        <>
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
                info@adapta.com
              </p>
              <p className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                +254 (062) 109-9222
              </p>
            </div>
          </div>
          <p className="mt-5 text-sm text-gray-500">© 2023 ADAPTA.</p>
        </>
      </div>
      {/* End Invoice */}
    </>
  );
}
