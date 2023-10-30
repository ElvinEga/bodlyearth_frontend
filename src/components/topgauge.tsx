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
}

const TopGauge: React.FC<GaugeChartProps> = ({
  pillar,
  rainfall_risk,
  temperature_risk,
  drought_risk,
  composite_climate_risk,
  categories,
}) => {
  // const temperatureScore = composite_climate_risk;

  const initialSeries = [
    {
      data: [rainfall_risk, temperature_risk, drought_risk], // Replace with your data values
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
        <h3 className="font-semibold text-sm leading-none tracking-tight p-5">
          {pillar} RISK
        </h3>
        <div className="flex justify-center items-center">
          <MiniChart
            // @ts-ignore
            indexScore={composite_climate_risk?.toFixed(2)}
            width={120}
          />
        </div>
        <div className="pr-3 pt-3">
          <div className="horizontal-bar-chart" id="chart">
            <GradientBarChart categories={categories} scores={series} />
          </div>
        </div>
      </div>
    </>
  );
};
export default TopGauge;
