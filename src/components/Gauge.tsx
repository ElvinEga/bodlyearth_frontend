import GaugeComponent from "react-gauge-component";
import { useState } from "react";

function Gauge() {
  const [currentValue] = useState(30);
  return (
    <>
      <div className="pt-6">
        <div className="mx-auto">
          <div>
            <div>
              <GaugeComponent
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
                      color: "#24E500",
                      showTick: true,
                      tooltip: { text: "Low" },
                    },
                    {
                      limit: 55,
                      color: "#7fff00",
                      showTick: true,
                      tooltip: { text: "Fine" },
                    },

                    {
                      limit: 70,
                      color: "#FFFF00",
                      showTick: true,
                      tooltip: { text: "Fine" },
                    },
                    {
                      limit: 80,
                      color: "#F6435C",
                      showTick: true,
                      tooltip: { text: "Fine" },
                    },
                    {
                      limit: 90,
                      color: "#E32227",
                      showTick: true,
                      tooltip: { text: "Fine" },
                    },
                    {
                      limit: 100,
                      color: "#BF181D",
                      showTick: true,
                      tooltip: { text: "Full" },
                    },
                  ],
                }}
                value={currentValue}
              />
            </div>
            <div className="lg:block hidden mt-10">
              <div className="flex justify-between items-center gap-x-4 px-8">
                <div aria-label="one">
                  <div className="flex gap-2 items-center">
                    <svg
                      width={20}
                      height={8}
                      viewBox="0 0 20 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width={20} height={8} rx={4} fill="#24E500" />
                    </svg>
                    <p className="text-xs font-medium leading-3 text-gray-800">
                      Exceptional
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <svg
                      width={20}
                      height={8}
                      viewBox="0 0 20 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width={20} height={8} rx={4} fill="#7fff00" />
                    </svg>
                    <p className="text-xs font-medium leading-3 text-gray-800">
                      Better
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <svg
                      width={20}
                      height={8}
                      viewBox="0 0 20 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width={20} height={8} rx={4} fill="#FFFF00" />
                    </svg>
                    <p className="text-xs font-medium leading-3 text-gray-800">
                      Satisfactory
                    </p>
                  </div>
                </div>
                <div aria-label="two">
                  <div className="flex items-center gap-2">
                    <svg
                      width={20}
                      height={8}
                      viewBox="0 0 20 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width={20} height={8} rx={4} fill="#F6435C" />
                    </svg>
                    <p className="text-xs font-medium leading-3 text-gray-800">
                      Good
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <svg
                      width={20}
                      height={8}
                      viewBox="0 0 20 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width={20} height={8} rx={4} fill="#E32227" />
                    </svg>
                    <p className="text-xs font-medium leading-3 text-gray-800">
                      Fair
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <svg
                      width={20}
                      height={8}
                      viewBox="0 0 20 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width={20} height={8} rx={4} fill="#BF181D" />
                    </svg>
                    <p className="text-xs font-medium leading-3 text-gray-800">
                      Bad
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gauge;
