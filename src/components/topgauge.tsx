"use client";

// import ReactApexChart from "react-apexcharts";
// import GaugeComponent from "react-gauge-component";
import { useEffect, useState } from "react";
import MiniChart from "./MiniChart";
import GradientBarChart from "./GradientBarchart";

interface GaugeChartProps {
  pillar: string;
  rainfall_risk: number | undefined;
  temperature_risk: number | undefined;
  drought_risk: number | undefined;
  composite_climate_risk: number | undefined;
  categories: string[];
  tooltip?: string;
}

const TopGauge: React.FC<GaugeChartProps> = ({
  pillar,
  rainfall_risk,
  temperature_risk,
  drought_risk,
  composite_climate_risk,
  categories,
  tooltip,
}) => {
  // const temperatureScore = composite_climate_risk;

  // Check and modify rainfall_risk and temperature_risk if they are 0

  // const modifiedRainfallRisk =
  //   rainfall_risk && rainfall_risk < 10 ? 10 : rainfall_risk;
  // const modifiedTemperatureRisk =
  //   temperature_risk && temperature_risk < 10 ? 10 : temperature_risk;
  // const modifiedDroughtRisk =
  //   drought_risk && drought_risk < 10 ? 10 : drought_risk;

  const modifiedRainfallRisk = rainfall_risk === 0 ? 13 : rainfall_risk;
  const modifiedTemperatureRisk =
    temperature_risk === 0 ? 13 : temperature_risk;
  const modifiedDroughtRisk = drought_risk === 0 ? 13 : drought_risk;

  const initialSeries = [
    {
      data: [
        modifiedRainfallRisk || 1000,
        modifiedTemperatureRisk || 1000,
        modifiedDroughtRisk || 1000,
      ], // Replace with your data values
    },
  ];

  const [series, setSeries] = useState(initialSeries);
  useEffect(() => {
    setSeries(initialSeries);
    // window.dispatchEvent(new Event("resize"));
    console.log("resizee");
  }, [composite_climate_risk]);

  return (
    <>
      {/* Card */}
      <div className="group flex flex-col  bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <h3 className="font-semibold text-sm leading-none tracking-tight px-4 pt-4">
          {pillar} RISK
        </h3>
        {tooltip ? (
          <div className="bg-white relative flex flex-wrap">
            <div className="flex justify-center items-center lg:w-1/3">
              <MiniChart
                // @ts-ignore
                indexScore={composite_climate_risk?.toFixed(0)}
                width={100}
              />
            </div>
            <div className="pr-3 pt-3 lg:w-2/3">
              <div className="horizontal-bar-chart" id="chart">
                <GradientBarChart categories={categories} scores={series} />
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex justify-center items-center">
              <MiniChart
                // @ts-ignore
                indexScore={composite_climate_risk?.toFixed(0)}
                width={120}
              />
            </div>
            <div className="pr-3 pt-3">
              <div className="horizontal-bar-chart" id="chart">
                <GradientBarChart categories={categories} scores={series} />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default TopGauge;
